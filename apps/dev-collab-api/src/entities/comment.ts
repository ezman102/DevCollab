import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from "typeorm";

@Entity("comment") // Table name in the database
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  comment_id: number = 0; 

  @Column({ type: "int", nullable: true })
  project_id!: number;

  @Column({ type: "int", nullable: true })
  task_id!: number;

  @Column({ type: "varchar" })
  comment!: string;

  @Column({ type: "int" })
  author_user_id!: number;

  @Column({ type: "timestamp" })
  create_date!: Date;
}
