import { UserModel } from "shared/models/user";
import { User } from "../entities/user";

export const mapUserToUserModel = (user: User): UserModel =>
  ({
    userId: user.userId,
    name: user.name,
    email: user.email,
  }) satisfies UserModel;
