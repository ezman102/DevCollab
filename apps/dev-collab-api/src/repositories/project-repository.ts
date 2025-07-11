import { inject, injectable } from "inversify";
import { TYPES } from "../container/types";
import { IDbContext } from "../db/db-context";
import { Project } from "../entities/project";

export interface IProjectRepository {
  getProject(projectId: number): Promise<Project | null>;
  getAllProjects(): Promise<Project[]>;
  addProject(project: Project): void;
  updateProject(project: Project): void;
  removeProject(project: Project): void;
}

@injectable()
export class ProjectRepository implements IProjectRepository {
  constructor(@inject(TYPES.IDbContext) private _dbContext: IDbContext) {}

  async getProject(projectId: number): Promise<Project | null> {
    return await this._dbContext.projects.findOne({
      where: {
        projectId,
      },
      relations: {
        sprints: true,
        users: true,
      },
    });
  }

  async getAllProjects(): Promise<Project[]> {
    return await this._dbContext.projects.find({
      relations: {
        sprints: true,
        users: true,
      },
    });
  }

  addProject(project: Project): void {
    this._dbContext.needCreate(project);
  }

  updateProject(project: Project): void {
    this._dbContext.needUpdate(project);
  }

  removeProject(project: Project): void {
    this._dbContext.needRemove(project);
  }
}
