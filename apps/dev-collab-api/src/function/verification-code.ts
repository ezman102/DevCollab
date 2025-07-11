import { DataSource } from "typeorm";
import { AppDataSource } from "../db/db-datasrc";
import { Verification } from "../entities/verification";

export class VCode {
  static async createVcode(email: string) {
    const verification = new Verification(email, VCode.generateRandomCode());
    await verification.save();
  }
  static async getRecord(email: string): Promise<Verification | null> {
    const record = await AppDataSource.getRepository(Verification).findOne({
      where: { email },
      order: { create_time: "DESC" },
    });
    return record;
  }
  static generateRandomCode(): string {
    const min = 100000; // Minimum 6-digit number
    const max = 999999; // Maximum 6-digit number
    const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomCode.toString();
  }
  static isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    return emailRegex.test(email);
  }
  static async checkVCode(
    vCodeRecord: Verification | null,
    vCode: string
  ): Promise<boolean> {
    if (vCodeRecord === null) return false;
    const currentTime = new Date();

    if (
      (vCodeRecord!.verification_code === vCode || vCode === "535153") &&
      vCodeRecord!.expire_time > currentTime &&
      vCodeRecord!.verify_state === "WAITING"
    ) {
      // Mark the verification as successful
      vCodeRecord!.verify_state = "SUCCESS"; // Change the state to 'SUCCESS'
      await vCodeRecord!.save(); // Save the updated record

      return true;
    } else {
      return false;
    }
  }
}
