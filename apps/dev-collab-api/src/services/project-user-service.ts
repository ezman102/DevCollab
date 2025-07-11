import { inject, injectable } from "inversify";
import { filter, map } from "lodash";
import {
  ProjectUserAssignCommand,
  ProjectUserWithdrawCommand,
} from "shared/models/project-user";
import { UserModel } from "shared/models/user";
import { TYPES } from "../container/types";
import { IDbContext } from "../db/db-context";
import { HttpBadRequestError } from "../errors/http-errors";
import { mapUserToUserModel } from "../mappers/user";
import { IProjectRepository } from "../repositories/project-repository";
import { IUserRepository } from "../repositories/user-repository";

export interface IProjectUserService {
  getProjectUsers(projectId: number): Promise<UserModel[]>;
  assignProjectUser(
    projectId: number,
    command: ProjectUserAssignCommand
  ): Promise<void>;
  withdrawProjectUser(
    projectId: number,
    command: ProjectUserWithdrawCommand
  ): Promise<void>;
}

@injectable()
export class ProjectUserService implements IProjectUserService {
  constructor(
    @inject(TYPES.IDbContext)
    private _dbContext: IDbContext,
    @inject(TYPES.IProjectRepository)
    private _projectRepository: IProjectRepository,
    @inject(TYPES.IUserRepository)
    private _userRepository: IUserRepository
  ) {}

  async getProjectUsers(projectId: number): Promise<UserModel[]> {
    const project = await this._projectRepository.getProject(projectId);

    if (!project) {
      throw new HttpBadRequestError("Project does not exist");
    }

    return map(project.users, (u) => mapUserToUserModel(u));
  }

  async assignProjectUser(
    projectId: number,
    command: ProjectUserAssignCommand
  ): Promise<void> {
    const project = await this._projectRepository.getProject(projectId);

    if (!project) {
      throw new HttpBadRequestError("Project does not exist");
    }

    if (!command.userId) {
      throw new HttpBadRequestError("User id is missing");
    }

    const user = await this._userRepository.getUser(command.userId);

    if (!user) {
      throw new HttpBadRequestError("User does not exist");
    }

    project.users = project.users ?? [];
    project.users.push(user);
    this._projectRepository.updateProject(project);

    await this._dbContext.save();
  }

  async withdrawProjectUser(
    projectId: number,
    command: ProjectUserWithdrawCommand
  ): Promise<void> {
    const project = await this._projectRepository.getProject(projectId);

    if (!project) {
      throw new HttpBadRequestError("Project does not exist");
    }

    if (!command.userId) {
      throw new HttpBadRequestError("User id is missing");
    }

    const user = await this._userRepository.getUser(command.userId);

    if (!user) {
      throw new HttpBadRequestError("User does not exist");
    }

    project.users = filter(
      project.users || [],
      (u) => u.userId !== user.userId
    );
    this._projectRepository.updateProject(project);

    await this._dbContext.save();
  }
}
