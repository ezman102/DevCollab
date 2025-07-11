import { result } from "lodash";
import { AppDataSource } from "../db/db-datasrc";
import { Group } from "../entities/group";
import { GroupMember } from "../entities/groupMember";
import { Invitation } from "../entities/Invitation";
import { User } from "../entities/user";
import { UserAccount } from "./user-account";
import { UserGroup } from "./user-group";
import { group } from "console";

export class InvitationCode {
  static INVITATION_CODE_LENGTH = 12;
  static INVITATION_CODE_CHARACTER =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  static async generateInvitationCode(group: Group) {
    let result = "";
    for (let i = 0; i < InvitationCode.INVITATION_CODE_LENGTH; i++) {
      const randomIndex = Math.floor(
        Math.random() * InvitationCode.INVITATION_CODE_CHARACTER.length
      );
      result += InvitationCode.INVITATION_CODE_CHARACTER[randomIndex];
    }
    result = (("G" + group.group_id) as String) + ":" + result;
    return result;
  }

  static async getCode(user_id: number, group_id: number) {
    let userId = user_id;

    const group = await AppDataSource.getRepository(Group).findOne({
      where: { group_id },
      order: { create_time: "DESC" },
    });
    const user = await AppDataSource.getRepository(User).findOne({
      where: { userId },
      order: { create_time: "DESC" },
    });
    if (!group || !user) {
      return { result: "UNSUCCESS", error: "USER_OR_GROUP_NOT_FOUND" };
    }
    const code = await AppDataSource.getRepository(Invitation).findOne({
      where: { group: group }, // Use group_id to filter
      order: { create_time: "DESC" },
    });
    return {
      result: "SUCCESS",
      message: {
        group_id: group.group_id,
        group_name: group.group_name,
        code: code,
      },
    };
  }
  static async checkCode(code: string) {
    const group_id = parseInt(
      code.substring(code.indexOf("G") + 1, code.indexOf(":"))
    );
    const targetGroup = await UserGroup.getGroup(group_id);
    if (targetGroup == null) {
      return {
        result: "UNSUCCESS",
        error: "NOT_FOUND_GROUP",
      };
    }
    const code_record = await AppDataSource.getRepository(Invitation).findOne({
      where: { group: targetGroup }, // Use group_id to filter
      relations: ["group"],
      order: { create_time: "DESC" },
    });

    if (!code_record)
      return {
        result: "UNSUCCESS",
        error: "ERROR_CODE",
      };
    else {
      if (code_record.invitation_code != code) {
        return {
          result: "UNSUCCESS",
          error: "ERROR_CODE",
        };
      }
      return {
        result: "SUCCESS",
        message: {
          group_id: code_record.group.group_id,
          code_id: code_record.invitation_id,
          code: code_record.invitation_code,
        },
      };
    }
  }
  static async updateGroupCode(user_id: number, group_id: number) {
    let userId = user_id;
    const group = await AppDataSource.getRepository(Group).findOne({
      where: { group_id },
      order: { create_time: "DESC" },
    });

    const user = await AppDataSource.getRepository(User).findOne({
      where: { userId },
      order: { create_time: "DESC" },
    });
    if (!group || !user) {
      return { result: "UNSUCCESS", error: "USER_OR_GROUP_NOT_FOUND" };
    }
    const group_role = "ADMIN";
    const member = await AppDataSource.getRepository(GroupMember).findOne({
      where: { user, group, group_role },
    });
    if (member != null) {
      let code = await InvitationCode.generateInvitationCode(group!);

      const invitationCode = new Invitation(group, user, code);
      const savedCode = await invitationCode.save();
      return {
        result: "SUCCESS",
        message: { group_id: group.group_id, code: code },
      };
    } else {
      return {
        result: "UNSUCCESS",
        message: "ERROR_PERMISSION",
      };
    }
  }
}
