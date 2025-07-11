import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Group } from "./group";
import { User } from "./user";

@Entity("Invitation") // Table name in the database
export class Invitation extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "invitation_id" })
  invitation_id!: number; // Primary key that starts from 1000

  @ManyToOne(() => Group, { nullable: false })
  @JoinColumn({ name: "group_id" })
  group!: Group ; // FK group_id

  @Column({ name: "invitation_code", type: "varchar", length: 255 })
  invitation_code!: string;
  @CreateDateColumn({ name: "create_time", type: "timestamp" })
  create_time!: Date;

  @ManyToOne(() => User,  { nullable: false })
  @JoinColumn({ name: "creator_id" }) // Specify the column name in the database
  creator!: User;

  constructor(group: Group, user: User, code: string) {
    super();

    this.group = group;
    this.creator = user;
    this.invitation_code = code;
    
  }
}
