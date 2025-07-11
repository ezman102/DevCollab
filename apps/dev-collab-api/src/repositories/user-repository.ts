import { inject, injectable } from "inversify";
import { TYPES } from "../container/types";
import { IDbContext } from "../db/db-context";
import { User } from "../entities/user";

export interface IUserRepository {
  getUser(userId: number): Promise<User | null>;
  getAllUsers(): Promise<User[]>;
}

@injectable()
export class UserRepository implements IUserRepository {
  constructor(@inject(TYPES.IDbContext) private _dbContext: IDbContext) {}

  async getUser(userId: number): Promise<User | null> {
    return await this._dbContext.users.findOne({
      where: {
        userId,
      },
    });
  }

  async getAllUsers(): Promise<User[]> {
    return await this._dbContext.users.find();
  }
}
