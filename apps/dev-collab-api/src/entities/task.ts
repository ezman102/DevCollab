// entities/userStory.ts
import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Project } from "./project"; // Assuming user stories belong to a project
import { Sprint } from "./sprint";   // Assuming user stories can belong to a sprin

@Entity("Task")
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    taskid: number = 0;

    @Column({ type: "varchar" })
    name: string = "";

    @Column({ type: "varchar", nullable: true })
    description: string | null = null;

    @Column({ type: "varchar", enum: ["Low", "Medium", "High"] })
    priority: string | null = null;

    @Column({ type: "varchar", nullable: true })
    assignee: string | null = null;

    @Column({ type: "varchar", enum: ["To Do", "In Progress", "Done"] })
    status: string | null = null;

    @Column({ type: "datetime" })
    duedate: Date | null = null;

    @Column({ type: "timestamp" })
    created: Date | null = null;

    @Column({ type: "timestamp" })
    modified: Date | null = null;

    @Column({ type: "integer" })
    projectId: number | null = null;

    @Column({ type: "integer" })
    sprintId: number | null = null;

    @Column({ type: "integer", nullable: true })
    Author: number | null = null;

    @ManyToOne(() => Project, (project) => project.sprints) // Relationship with Project
    @JoinColumn({ name: "projectId" })
    project: Project | null = null;

    @ManyToOne(() => Sprint, (sprint) => sprint.project) // Relationship with Script
    @JoinColumn({ name: "sprintId" })
    sprint: Sprint | null = null;
    // @OneToMany(() => Sprint, (sprint) => sprint.project)
    // sprints: Sprint[] = [];
}