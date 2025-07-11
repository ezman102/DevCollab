import { inject, injectable } from "inversify";
import { TYPES } from "../container/types";
import { IDbContext } from "../db/db-context";
import { Sprint } from "../entities/sprint";

export interface ISprintRepository {
  addSprint(sprint: Sprint): void;
  updateSprint(sprint: Sprint): void;
  getSprint(sprintId: number): Promise<Sprint | null>;
  removeSprint(sprint: Sprint): void;
}

@injectable()
export class SprintRepository implements ISprintRepository {
  constructor(@inject(TYPES.IDbContext) private _dbContext: IDbContext) {}

  addSprint(sprint: Sprint): void {
    this._dbContext.needCreate(sprint);
  }

  updateSprint(sprint: Sprint): void {
    this._dbContext.needUpdate(sprint);
  }

  async getSprint(sprintId: number): Promise<Sprint | null> {
    return await this._dbContext.sprints.findOne({
      where: {
        sprintId,
      },
      relations: {
        project: {
          sprints: true,
        },
      },
    });
  }

  removeSprint(sprint: Sprint): void {
    this._dbContext.needRemove(sprint);
  }
}
