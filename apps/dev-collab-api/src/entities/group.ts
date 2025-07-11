import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,

} from "typeorm";
import { User } from "./user";


@Entity("group") // Table name in the database
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "group_id" })
  group_id!: number; // Primary key that starts from 1000

  @Column({ type: "varchar", length: 1000 })
  group_name!: string;


  @Column({ type: "varchar", length: 255 , }) 
  creator_id!: string;

  @CreateDateColumn({ name: "create_time", type: "timestamp" })
  create_time!: Date;

  constructor(name: string, userid:string) {
    super();
    this.group_name = name;
    this.creator_id = userid;
  }
}
