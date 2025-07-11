import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from "typeorm";

@Entity("notification") // Table name in the database
export class Notification extends BaseEntity {
  @PrimaryGeneratedColumn()
  notification_id: number = 0; 

  @Column({ type: "int", nullable: true })
  comment_id!: number;

  @Column({ type: "int", nullable: true })
  mentioned_user_id !: number;

  @Column({ type: "boolean" })
  is_read: Boolean = false;

  @Column({ type: "timestamp" })
  read_date!: Date;
}
