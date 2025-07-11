import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  CreateDateColumn,
} from "typeorm";
import { Group } from "./group";
import { User } from "./user";
//import { Permission } from "./Permission";

@Entity("group_member") // Table name in the database
export class GroupMember extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "member_id" })
  memberId!: number; // Primary key

  @ManyToOne(() => Group, (group) => group.group_id, { nullable: false })
  @JoinColumn({ name: "group_id" }) // Specify the column name in the database
  group!: Group; // FK group_id

  @ManyToOne(() => User, (user) => user.userId, { nullable: false })
  @JoinColumn({ name: "user_id" }) // Specify the column name in the database
  user!: User; // FK user_id

  /*   @ManyToOne(() => Permission, permission => permission.groupMembers, { nullable: false })
  @JoinColumn({ name: "permission_id" }) // Specify the column name in the database
  permission!: Permission; // FK permission_id */

  @CreateDateColumn({ name: "join_date", type: "timestamp" })
  join_date!: Date; // join_date

  @Column({ length: 255 })
  group_role!: string; // group_role
  constructor(group: Group, user:User,group_role:string) {
    super();
    this.group = group;
    this.user = user;
    this.group_role = group_role

  }
}
