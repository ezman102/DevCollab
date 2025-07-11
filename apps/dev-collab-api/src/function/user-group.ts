import { In } from "typeorm";
import { AppDataSource } from "../db/db-datasrc";
import { Group } from "../entities/group";
import { GroupMember } from "../entities/groupMember";
import { User } from "../entities/user";
import { UserAccount } from "./user-account";

export class UserGroup {
  static async createGroup(group_name: string, user_id: string) {
    const user = await UserAccount.getRecordById(parseInt(user_id));
    if (user == null) {
      return { result: "UNSUCCESS", error: "CANNOT_FIND_USER" };
    }
    if (group_name == "") {
      group_name = "TempGroup";
    }
    const group = new Group(group_name, user.userId.toString());

    const savedGroup = await group.save();
    if (savedGroup != null) {
      return { result: "SUCCESS", group_id: savedGroup.group_id };
    } else {
      return { result: "UNSUCCESS", error: "CANNOT_CREATE_GROUP" };
    }
  }
  static async getGroupList(userId: number) {
    const groupMembers = await AppDataSource.getRepository(GroupMember).find({
      where: {
        user: { userId },
      },
      relations: ["group", "user"],
    });

    return groupMembers;
  }
  static async getMemberList(userid: number, group_id: number) {
    const group = await this.getGroup(group_id);
    const user = await UserAccount.getRecordById(userid);
    //const checkMember = await this.isGroupMember(null, group, user);
    if (group != null && user != null) {
      const groupMembers = await AppDataSource.getRepository(GroupMember).find({
        where: {
          group: { group_id },
        },
        relations: ["group", "user"],
      });
      let memberList = [];
      for (const member of groupMembers) {
        memberList[memberList.length] = {
          member_id: member.memberId,
          user_id: member.user.userId,
          email: member.user.email,
          group_role: member.group_role,
        };
      }
      return {
        result: "SUCCESS",
        memberList: memberList,
        group_name: groupMembers[0].group.group_name,
        group_id: groupMembers[0].group.group_id,
      };
    } else {
      return { result: "UNSUCCESS", error: "NOT_FOUND_GROUPMATE" };
    }
  }
  static async getAllMember(userid: number) {
    console.log(userid);
    const grouplist = await this.getGroupList(userid);
    const user = await UserAccount.getRecordById(userid);

    if (user != null && grouplist.length > 0) {
      const groupMembers = await AppDataSource.getRepository(GroupMember).find({
        where: {
          group: {
            group_id: In(grouplist.map((group) => group.group.group_id)),
          }, // Use In operator
        },
        relations: ["group", "user"],
      });

      let memberList = groupMembers.map((member) => ({
        member_id: member.memberId,
        user_id: member.user.userId,
        email: member.user.email,
        group_role: member.group_role,
        group_name: member.group.group_name,
        group_id: member.group.group_id,
      }));
      return {
        result: "SUCCESS",
        memberList: memberList,
        group_name: groupMembers[0].group.group_name,
        group_id: groupMembers[0].group.group_id,
      };
    } else {
      return { result: "UNSUCCESS", error: "NOT_FOUND_GROUPMATE" };
    }
  }
  static async joinGroup(
    group_id: string,
    user_id: string,
    group_role: string
  ) {
    const user = await UserAccount.getRecordById(parseInt(user_id));
    if (user == null) {
      return { result: "UNSUCCESS", error: "CANNOT_FIND_USER" };
    }

    const group = await this.getGroup(parseInt(group_id));
    if (group == null) {
      return { result: "UNSUCCESS", error: "CANNOT_FIND_GROUP" };
    }
    const checkMember = await this.isGroupMember(null, group, user);
    if (checkMember != null) {
      return { result: "UNSUCCESS", error: "ALREADY_JOINED_GROUP" };
    }
    const member = new GroupMember(group, user, group_role);
    const savedMember = await member.save();
    if (savedMember != null) {
      return {
        result: "SUCCESS",
        member: {
          group_id: group_id,
          member_id: member.memberId,
          group_role: group_role,
        },
      };
    } else {
      return { result: "UNSUCCESS", error: "CANNOT_JOIN_GROUP" };
    }
  }
  static async updateGroupName(
    name: string,
    group_id: string,
    user_id: string
  ) {
    const user = await UserAccount.getRecordById(parseInt(user_id));
    if (user == null) {
      return { result: "UNSUCCESS", error: "CANNOT_FIND_USER" };
    }

    const group = await this.getGroup(parseInt(group_id));
    if (group == null) {
      return { result: "UNSUCCESS", error: "CANNOT_FIND_GROUP" };
    }
    const member_record = await this.isGroupMember(null, group, user);
    if (member_record == null) {
      return { result: "UNSUCCESS", error: "NOT_A_MEMBER_IN_GROUP" };
    }
    if (member_record.group_role == "ADMIN") {
      group.group_name = name;

      await group.save();
      return {
        result: "SUCCESS",
        message: {
          group_id: group.group_id,
          group_name: group.group_name,
        },
      };
    } else {
      return { result: "UNSUCCESS", error: "NOT_ADMIN" };
    }
  }
  static async getGroup(group_id: number): Promise<Group | null> {
    const record = await AppDataSource.getRepository(Group).findOne({
      where: { group_id },
      order: { create_time: "DESC" },
    });
    return record;
  }
  static async isGroupMember(
    memberId: number | null = null,
    group: Group | null = null,
    user: User | null = null
  ): Promise<GroupMember | null> {
    if (memberId != null) {
      const record = await AppDataSource.getRepository(GroupMember).findOne({
        where: { memberId },
      });
      return record;
    } else if (user != null && group != null) {
      const record = await AppDataSource.getRepository(GroupMember).findOne({
        where: { user, group },
      });

      return record;
    } else {
      return null;
    }
  }
  static async removeMember(
    user: number,
    group: number,
    targetMember_id: number
  ) {
    const user_record = await UserAccount.getRecordById(user);
    const group_record = await this.getGroup(group);
    const right_checker = await this.isGroupMember(
      null,
      group_record,
      user_record
    );
    if (!right_checker) {
      return { result: "UNSUCCESS", error: "NOT_IN_GROUP" };
    }
    if (right_checker.group_role != "ADMIN") {
      return { result: "UNSUCCESS", error: "NOT_ADMIN" };
    }

    const target = await this.isGroupMember(targetMember_id);
    if (target == null) {
      return { result: "UNSUCCESS", error: "TARGET_NOT_IN_GROUP" };
    }
    (await target!.remove()).save();
    return { result: "SUCCESS", message: "TARGET_REMOVED" };
  }
  static async deleteGroup(user: number, group: number) {
    const user_record = await UserAccount.getRecordById(user);
    const group_record = await this.getGroup(group);
    const right_checker = await this.isGroupMember(
      null,
      group_record,
      user_record
    );
    if (!right_checker) {
      return { result: "UNSUCCESS", error: "NOT_IN_GROUP" };
    }
    if (right_checker.group_role != "ADMIN") {
      return { result: "UNSUCCESS", error: "NOT_ADMIN" };
    }
    if (group_record != null) (await group_record.remove()).save();
    return { result: "SUCCESS", message: "GROUP_REMOVED" };
  }
  static async leaveGroup(user: number, group: number) {
    const user_record = await UserAccount.getRecordById(user);
    const group_record = await this.getGroup(group);
    const right_checker = await this.isGroupMember(
      null,
      group_record,
      user_record
    );
    if (!right_checker) {
      return { result: "UNSUCCESS", error: "NOT_IN_GROUP" };
    }
    if (right_checker.group_role == "ADMIN") {
      return { result: "UNSUCCESS", error: "ADMIN_CANNOT_LEAVE" };
    }
    (await right_checker.remove()).save();
    return { result: "SUCCESS", message: "LEVEA_THE_GROUP" };
  }
}
