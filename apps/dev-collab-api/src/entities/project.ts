import { chunk, compact, flatten, fromPairs, sortBy } from "lodash";
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sprint } from "./sprint";
import { User } from "./user";

@Entity("Project")
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  projectId: number = 0;

  @Column({ type: "varchar" })
  name: string = "";

  @Column({ type: "varchar", nullable: true })
  description: string | null = null;

  @Column({
    type: "blob",
    nullable: true,
    transformer: {
      to: (value: string) => Buffer.from(value),
      from: (value: Buffer) => value.toString(),
    },
  })
  avatar: string | null = null;

  @Column({ type: "timestamp" })
  created: Date | null = null;

  @Column({ type: "timestamp" })
  modified: Date | null = null;

  @OneToMany(() => Sprint, (sprint) => sprint.project)
  sprints: Sprint[] | null = null;

  @ManyToMany(() => User, (user) => user.projects)
  @JoinTable({
    name: "ProjectUser",
    joinColumn: {
      name: "projectId",
      referencedColumnName: "projectId",
    },
    inverseJoinColumn: {
      name: "userId",
      referencedColumnName: "userId",
    },
  })
  users: User[] | null = null;

  @Column({ type: "int" })
  creatorId: number | null = null;

  get orderedSprints() {
    return sortBy(this.sprints, (s) => s.startDate);
  }

  calculateSprintNos(sprints: Sprint[]): (number | null)[] {
    const map = fromPairs(
      this.orderedSprints.map((s, i) => [s.sprintId, i + 1])
    );

    return sprints.map((s) => map[s.sprintId] || null);
  }

  /**
   * Sprints are not consecutive, there maybe some days (gap) in between.
   * In such case, the current sprint is null, but we will show the transition from sprint n to n + 1
   * instead using an array.
   */
  getCurrentSprint(now: string): Sprint[] {
    const sprints = this.orderedSprints;
    const currentSprint = sprints.filter((s) => s.isCurrent(now));

    if (currentSprint.length > 1) {
      throw new Error("Should not have multiple current sprints");
    }

    if (currentSprint.length === 1) {
      return [...currentSprint];
    }

    const sprintTransitions = chunk(sprints, 2);
    const betweenSprint = sprintTransitions.filter(
      (t) =>
        t[0] &&
        t[1] &&
        t[0].endDate &&
        t[1].startDate &&
        now > t[0].endDate.toISOString() &&
        now < t[1].startDate.toISOString()
    );

    if (betweenSprint.length > 1) {
      throw new Error("Should not have multiple current sprint transitions");
    }

    if (betweenSprint.length === 1) {
      return flatten(betweenSprint);
    }

    return [];
  }

  /**
   * [n] means the current sprint no is n
   * [n, n + 1] means the sprint is transiting from n to n + 1
   * [] means either no sprint is planned or all sprint is ended
   */
  getCurrentSprintNo(now: string): number[] {
    return compact(this.calculateSprintNos(this.getCurrentSprint(now)));
  }

  getIsActive(now: string): boolean {
    return this.getCurrentSprintNo(now).length > 0;
  }

  canRead(userId: number) {
    return (
      this.creatorId === userId ||
      (this.users && this.users.some((u) => u.userId === userId))
    );
  }
}
