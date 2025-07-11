// container/container.ts
import { Container } from "inversify";
import { ContextUser, IContextUser } from "../auth/context-user";
import { DbContext, IDbContext } from "../db/db-context";
import { AppDataSource } from "../db/db-datasrc";
import {
  IProjectRepository,
  ProjectRepository,
} from "../repositories/project-repository";
import {
  ISprintRepository,
  SprintRepository,
} from "../repositories/sprint-repository";
import {
  ITaskRepository,
  TaskRepository,
} from "../repositories/task-repository";
import {
  IUserRepository,
  UserRepository,
} from "../repositories/user-repository";
import { IProjectService, ProjectService } from "../services/project-service";
import {
  IProjectUserService,
  ProjectUserService,
} from "../services/project-user-service";
import { ISprintService, SprintService } from "../services/sprint-service";
import { ITaskService, TaskService } from "../services/Task-service";
import { IUserService, UserService } from "../services/user-service";
import { IUserStoryService, UserStoryService } from "../services/userStory-service";
import { TYPES } from "./types";

export const appContainer = new Container();

appContainer
  .bind<IDbContext>(TYPES.IDbContext)
  .toDynamicValue(() => new DbContext(AppDataSource.manager))
  .inRequestScope();

appContainer
  .bind<IProjectRepository>(TYPES.IProjectRepository)
  .to(ProjectRepository)
  .inRequestScope();

appContainer
  .bind<IProjectService>(TYPES.IProjectService)
  .to(ProjectService)
  .inRequestScope();

appContainer
  .bind<ISprintRepository>(TYPES.ISprintRepository)
  .to(SprintRepository)
  .inRequestScope();

appContainer
  .bind<ISprintService>(TYPES.ISprintService)
  .to(SprintService)
  .inRequestScope();

appContainer
  .bind<ITaskService>(TYPES.ITaskService)
  .to(TaskService)
  .inRequestScope();

appContainer
  .bind<ITaskRepository>(TYPES.ITaskRepository)
  .to(TaskRepository)
  .inRequestScope();

appContainer
  .bind<IUserRepository>(TYPES.IUserRepository)
  .to(UserRepository)
  .inRequestScope();

appContainer
  .bind<IProjectUserService>(TYPES.IProjectUserService)
  .to(ProjectUserService)
  .inRequestScope();

appContainer
  .bind<IUserService>(TYPES.IUserService)
  .to(UserService)
  .inRequestScope();

appContainer
  .bind<IContextUser>(TYPES.IContextUser)
  .to(ContextUser)
  .inRequestScope();

appContainer
    .bind<IUserStoryService>(TYPES.IUserStoryService)
    .to(UserStoryService)
    .inRequestScope();
