import { VCode } from "./verification-code";
import { User } from "../entities/user";
import { createHash } from "crypto";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../db/db-datasrc";

export class UserAccount {
  static JWT_SECRET: string = "F164BA8EB6F643E4276D87C2F759D";
  static EXPIRED_DATE: string = "365d";
  static hashPassword(password: string) {
    return createHash("md5").update(password).digest("hex");
  }

  /**
   * Creates a new user account.
   *
   * @param email - The email address of the user.
   * @param password - The password for the user account (should be hashed before saving).
   * @param code - The verification code sent to the user's email.
   * @param invitation - An optional invitation code (can be null).
   *
   * @returns A promise that resolves to an object indicating the result of the operation.
   */
  static async createAccount(
    email: string,
    password: string,
    code: string,
    invitation: string | null
  ) {
    // Retrieve the verification record associated with the provided email
    const verification_record = await VCode.getRecord(email);

    if (!verification_record) {
      return { result: "UNSUCCESS", error: "VERIFICATION_NOT_FOUND" };
    }

    if (await VCode.checkVCode(verification_record, code)) {
      // Hash the password using MD5
      const hashedPw = this.hashPassword(password);
      // Create a new user account if the verification is successful
      const user = new User(email, hashedPw);
      const savedUser = await user.save();
      const token = await this.generateJWT(savedUser);

      return { result: "SUCCESS", user_id: savedUser.userId, token: token };
    } else {
      return { result: "UNSUCCESS", error: "CODE_INVALID" };
    }
  }
  static async updatePassword(user_id: number, password: string) {
    if (password == "" || password == null) {
      return { result: "UNSUCCESS", error: "PASSWORD_INVALID" };
    }
    const user = await this.getRecordById(user_id);
    if (!user) {
      return { result: "UNSUCCESS", error: "USER_NOT_FOUND" };
    }
    const hashedPw = this.hashPassword(password);
    user.password = hashedPw;
    await user.save();

    const token = await this.generateJWT(user);
    return { result: "SUCCESS", user_id: user.userId, token: token };
  }
  /**
   * Retrieves a user record based on email and password.
   *
   * @param email - The email associated with the user account.
   * @param password - The password to authenticate the user.
   * @returns A promise that resolves to the User object if found, or null if not.
   */
  static async getRecord(
    email: string,
    password: string
  ): Promise<User | null> {
    password = this.hashPassword(password);
    const record = await AppDataSource.getRepository(User).findOne({
      where: { email, password },
      order: { create_time: "DESC" },
    });
    return record;
  }
  static async getRecordById(userId: number): Promise<User | null> {
    const record = await AppDataSource.getRepository(User).findOne({
      where: { userId },
      order: { create_time: "DESC" },
    });
    return record;
  }
  /**
   * Checks and verifies a JWT.
   *
   * @param token - The JWT to verify.
   * @returns An object containing the verification result and payload if valid.
   */
  static async checkJWT(token: string) {
    try {
      // Verify the token using the secret
      const decoded = jwt.verify(token, this.JWT_SECRET);
      if (
        typeof decoded === "object" &&
        decoded !== null &&
        "userId" in decoded
      ) {
        const userId = decoded.userId;
        const user_record = await this.getRecordById(userId);
        if (user_record) {
          return {
            result: "SUCCESS",
            user: decoded,
            detail: {
              user_id: user_record.userId,
              name: user_record.name,
              email: user_record.email,
              email_2fa: user_record.email_2fa,
            },
          };
        } else {
          return { result: "UNSUCCESS", error: "USER_NOT_FOUND" };
        }
      } else {
        return { result: "UNSUCCESS", error: "INVALID_TOKEN" };
      }
    } catch (error) {
      // Handle errors and narrow the type of error
      if (error instanceof jwt.JsonWebTokenError) {
        return { result: "UNSUCCESS", error: "INVALID_TOKEN" };
      } else if (error instanceof jwt.TokenExpiredError) {
        return { result: "UNSUCCESS", error: "TOKEN_EXPRIED" };
      } else {
        return { result: "UNSUCCESS", error: "TOKEN_VERIFICATION_FAILED" };
      }
    }
  }

  static async generateJWT(user: User) {
    const userId = user.userId;
    const email = user.email;
    const token = jwt.sign({ userId, email }, this.JWT_SECRET, {
      expiresIn: this.EXPIRED_DATE,
    });
    return token;
  }

  static async update2FA(userId: number, active: String) {
    const user = await this.getRecordById(userId);
    if (!user) {
      return { result: "UNSUCCESS", error: "USER_NOT_FOUND" };
    }
    if (active == "ON") {
      user.email_2fa = true;
    } else if (active == "OFF") {
      user.email_2fa = false;
    } else {
      return { result: "UNSUCCESS", error: "PARAM_ERROR" };
    }
    await user.save();
    return { result: "SUCCESS", status: active };
  }
  static async updateUsername(user_id: number, username: string) {
    if (username == "" || username == null) {
      return { result: "UNSUCCESS", error: "USERNAME_INVALID" };
    }
    const user = await this.getRecordById(user_id);
    if (!user) {
      return { result: "UNSUCCESS", error: "USER_NOT_FOUND" };
    }
    
    user.name = username;
    await user.save();

    const token = await this.generateJWT(user);
    return { result: "SUCCESS", user_id: user.userId, token: token };
  }
}
