import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("verification")
export class Verification extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "verify_id" })
  verify_id!: number;

  @Column({ type: "varchar", length: 1000,  })
  email!: string;

  @Column({ type: "varchar", length: 1000,  })
  verification_code!: string;

  @Column({ type: "datetime", })
  expire_time!: Date ;

  @CreateDateColumn({ name: 'create_time', type: 'datetime' })
  create_time!: Date;

  @Column({ type: "varchar", length: 45, default: 'WAITING' })
  verify_state: string = 'WAITING'; // Default state

  // Constructor to set the expiration time
  constructor(email: string, verificationCode: string) {
    super();
    this.email = email;
    this.verification_code = verificationCode;
    this.expire_time = this.calculateExpireTime();
  }

  // Method to calculate expiration time
  private calculateExpireTime(): Date {
    const currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() + 600); // Add 600 seconds
    return currentTime;
  }
}