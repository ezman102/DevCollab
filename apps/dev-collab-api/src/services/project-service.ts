import { inject, injectable } from "inversify";
import { isEmpty } from "lodash";
import {
  ProjectCreateCommand,
  ProjectModel,
  ProjectUpdateCommand,
} from "shared/models/project";
import { IContextUser } from "../auth/context-user";
import { TYPES } from "../container/types";
import { IDbContext } from "../db/db-context";
import { Project } from "../entities/project";
import { HttpBadRequestError } from "../errors/http-errors";
import { mapProjectToProjectModel } from "../mappers/project";
import { IProjectRepository } from "../repositories/project-repository";

export interface IProjectService {
  getProject(projectId: number): Promise<ProjectModel>;
  getAllProjects(userToken: string | null): Promise<ProjectModel[]>;
  createProject(
    command: ProjectCreateCommand,
    userToken: string | null
  ): Promise<number>;
  updateProject(
    projectId: number,
    command: ProjectUpdateCommand
  ): Promise<void>;
  removeProject(projectId: number): Promise<void>;
}

@injectable()
export class ProjectService implements IProjectService {
  constructor(
    @inject(TYPES.IDbContext)
    private _dbContext: IDbContext,
    @inject(TYPES.IProjectRepository)
    private _projectRepository: IProjectRepository,
    @inject(TYPES.IContextUser)
    private _contextUser: IContextUser
  ) {}

  async getProject(projectId: number): Promise<ProjectModel> {
    const project = await this._projectRepository.getProject(projectId);
    const now = new Date().toISOString();

    if (!project) {
      throw new HttpBadRequestError("Project does not exist");
    }

    return mapProjectToProjectModel(project, now);
  }

  async getAllProjects(userToken: string): Promise<ProjectModel[]> {
    const projects = await this._projectRepository.getAllProjects();
    const now = new Date().toISOString();
    const me = await this._contextUser.getUserId(userToken);

    return projects
      .filter((p) => !me || p.canRead(me))
      .map((p) => mapProjectToProjectModel(p, now));
  }

  async createProject(command: ProjectCreateCommand, userToken: string | null) {
    if (isEmpty(command.name)) {
      throw new HttpBadRequestError("Project name is required");
    }

    const newProject = new Project();
    const now = new Date();
    const me = await this._contextUser.getUserId(userToken);

    newProject.name = command.name;
    newProject.description = command.description;
    newProject.avatar = command.avatar;
    newProject.created = now;
    newProject.modified = now;
    newProject.creatorId = me;

    this._projectRepository.addProject(newProject);

    await this._dbContext.save();

    return newProject.projectId;
  }

  async updateProject(
    projectId: number,
    command: ProjectUpdateCommand
  ): Promise<void> {
    const project = await this._projectRepository.getProject(projectId);

    if (!project) {
      throw new HttpBadRequestError("Project does not exist");
    }

    if (isEmpty(command.name)) {
      throw new HttpBadRequestError("Project name is required");
    }

    const now = new Date();

    project.name = command.name;
    project.description = command.description;
    project.avatar = command.avatar;
    project.modified = now;

    this._projectRepository.updateProject(project);

    await this._dbContext.save();
  }

  async removeProject(projectId: number): Promise<void> {
    const project = await this._projectRepository.getProject(projectId);

    if (!project) {
      throw new HttpBadRequestError("Project does not exist");
    }

    this._projectRepository.removeProject(project);

    await this._dbContext.save();
  }
}
