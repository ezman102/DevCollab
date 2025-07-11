//apps/dev-collab-api/src/container/types.ts
import { interfaces } from "inversify";
import { IContextUser } from "../auth/context-user";
import { IDbContext } from "../db/db-context";
import { IProjectRepository } from "../repositories/project-repository";
import { ISprintRepository } from "../repositories/sprint-repository";
import { ITaskRepository } from "../repositories/task-repository";
import { IUserRepository } from "../repositories/user-repository";
import { ITaskService } from "../services/Task-service";
import { IProjectService } from "../services/project-service";
import { IProjectUserService } from "../services/project-user-service";
import { ISprintService } from "../services/sprint-service";
import { IUserService } from "../services/user-service";
import { IUserStoryService } from "../services/userStory-service"; // Import IUserStoryService

const TYPES = {
  IDbContext: Symbol.for(
    "IDbContext"
  ) as interfaces.ServiceIdentifier<IDbContext>,
  IProjectRepository: Symbol.for(
    "IProjectRepository"
  ) as interfaces.ServiceIdentifier<IProjectRepository>,
  ITaskRepository: Symbol.for(
    "ITaskRepository"
  ) as interfaces.ServiceIdentifier<ITaskRepository>,
  ITaskService: Symbol.for(
    "ITaskService"
  ) as interfaces.ServiceIdentifier<ITaskService>,
  IProjectService: Symbol.for(
    "IProjectService"
  ) as interfaces.ServiceIdentifier<IProjectService>,
  ISprintRepository: Symbol.for(
    "ISprintRepository"
  ) as interfaces.ServiceIdentifier<ISprintRepository>,
  ISprintService: Symbol.for(
    "ISprintService"
  ) as interfaces.ServiceIdentifier<ISprintService>,
  IUserRepository: Symbol.for(
    "IUserRepository"
  ) as interfaces.ServiceIdentifier<IUserRepository>,
  IProjectUserService: Symbol.for(
    "IProjectUserService"
  ) as interfaces.ServiceIdentifier<IProjectUserService>,
  IUserService: Symbol.for(
    "IUserService"
  ) as interfaces.ServiceIdentifier<IUserService>,
  IContextUser: Symbol.for(
    "IContextUser"
  ) as interfaces.ServiceIdentifier<IContextUser>,
  IUserStoryService: Symbol.for(
      "IUserStoryService"
  ) as interfaces.ServiceIdentifier<IUserStoryService>,
};

export { TYPES };
