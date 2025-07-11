import { injectable } from "inversify";
import { UserAccount } from "../function/user-account";
import { User } from "../entities/user";
import { UserGroup } from "../function/user-group";

export interface IContextUser {
  getUserId(token: string | null): Promise<number | null>;
  getUserGroupList(token: string | null): Promise<number[] | null>;
  getMemberList(token: string | null): Promise<Object[]>;
}

@injectable()
export class ContextUser implements IContextUser {
  /**
   * @returns the user id of the current user
   */
  async getUserId(token: string | null): Promise<number | null> {
    if (token == null) return null;
    const user = await UserAccount.checkJWT(token);
    if (user.result == "SUCCESS") {
      return user.user!.userId;
    } else {
      return null;
    }
  }
  async getUserGroupList(token: string | null): Promise<number[] | null> {
    if (token == null) return null;
    const user = await UserAccount.checkJWT(token);
    if (user.result == "SUCCESS") {
      let groupList_result = await UserGroup.getGroupList(user.user!.userId);
      let groupList: number[] = [];
      for (let member of groupList_result) {
        if (member.group != null)
          groupList[groupList.length] = member.group.group_id;
      }
      return groupList;
    } else {
      return null;
    }
  }
  async getMemberList(token: string | null): Promise<Object[]> {
    if (token == null) return [];

    const user = await UserAccount.checkJWT(token);

    if (user.result == "SUCCESS") {
      let member_result = await UserGroup.getAllMember(user.detail?.user_id!);
      let group_member = [];
      for (const member of member_result.memberList!) {
        group_member[group_member.length] = {
          userId: member.user_id,
          name: member.email,
          email: member.email,
        };
      }
      const unqiue_group_member = group_member.filter(
        (user, index, self) =>
          index === self.findIndex((u) => u.userId === user.userId)
      );

      return unqiue_group_member;
    } else {
      return [];
    }
  }
}
