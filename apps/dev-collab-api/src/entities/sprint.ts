import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Project } from "./project";

@Entity("Sprint")
export class Sprint extends BaseEntity {
  @PrimaryGeneratedColumn()
  sprintId: number = 0;

  @Column({ type: "integer" })
  projectId: number | null = null;

  @ManyToOne(() => Project, (project) => project.sprints)
  @JoinColumn({ name: "projectId" })
  project: Project | null = null;

  @Column({ type: "timestamp" })
  startDate: Date | null = null;

  @Column({ type: "timestamp" })
  endDate: Date | null = null;

  isOverlaped(startDate: string, endDate: string) {
    return (
      this.startDate &&
      this.endDate &&
      this.endDate.toISOString() >= startDate &&
      this.startDate.toISOString() <= endDate
    );
  }

  isEnded(now: string) {
    return this.endDate && now > this.endDate.toISOString();
  }

  isCurrent(now: string) {
    return (
      this.startDate &&
      this.endDate &&
      now >= this.startDate.toISOString() &&
      now <= this.endDate.toISOString()
    );
  }
}
