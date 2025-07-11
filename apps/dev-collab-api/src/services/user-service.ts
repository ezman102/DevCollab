import { inject, injectable } from "inversify";
import { UserModel } from "shared/models/user";
import { TYPES } from "../container/types";
import { mapUserToUserModel } from "../mappers/user";
import { IUserRepository } from "../repositories/user-repository";
import { IContextUser } from "../auth/context-user";

export interface IUserService {
  getAllUsers(): Promise<UserModel[]>;
  getGroupUsers(token:string|null): Promise<Object[]>;
}

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(TYPES.IUserRepository)
    private _userRepository: IUserRepository,
    @inject(TYPES.IContextUser)
    private _contextUser: IContextUser
  ) {}

  async getAllUsers(): Promise<UserModel[]> {
    const users = await this._userRepository.getAllUsers();

    return users.map((p) => mapUserToUserModel(p));
  }
  async getGroupUsers(token:string|null): Promise<Object[]> {
    const users = await this._contextUser.getMemberList(token)
    console.log(users)
    //const users = await this._userRepository.getAllUsers();
    return users;
  }
}
