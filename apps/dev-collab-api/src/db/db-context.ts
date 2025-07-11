// db-context.ts
import { injectable } from "inversify";
import { BaseEntity, EntityManager, Repository } from "typeorm";
import { Comment } from "../entities/comment";
import { Notification } from "../entities/notification";
import { Project } from "../entities/project";
import { Sprint } from "../entities/sprint";
import { Task } from "../entities/task";
import { User } from "../entities/user";
import { UserStory } from "../entities/userStory";

export interface IDbContext {
  get projects(): Repository<Project>;
  get tasks(): Repository<Task>;
  get userStories(): Repository<UserStory>;
  get sprints(): Repository<Sprint>;
  get comments(): Repository<Comment>;
  get notifications(): Repository<Notification>;
  get users(): Repository<User>;
  needCreate(entity: BaseEntity): void;
  needUpdate(entity: BaseEntity): void;
  needRemove(entity: BaseEntity): void;
  save(): Promise<void>;
  rollback(): void;
}

@injectable()
export class DbContext implements IDbContext {
  private _toCreate: BaseEntity[] = [];

  private _toUpdate: BaseEntity[] = [];

  private _toRemove: BaseEntity[] = [];

  constructor(private _em: EntityManager) {}

  get projects() {
    return this._em.getRepository(Project);
  }

  get userStories() {
    return this._em.getRepository(UserStory);
  }

  get sprints() {
    return this._em.getRepository(Sprint);
  }
  get tasks() {
    return this._em.getRepository(Task);
  }

  get comments() {
    return this._em.getRepository(Comment);
  }

  get notifications() {
    return this._em.getRepository(Notification);
  }

  get users() {
    return this._em.getRepository(User);
  }

  needCreate(entity: BaseEntity): void {
    this._toCreate.push(entity);
  }

  needUpdate(entity: BaseEntity): void {
    this._toUpdate.push(entity);
  }

  needRemove(entity: BaseEntity): void {
    this._toRemove.push(entity);
  }

  async save(): Promise<void> {
    await this._em.transaction(async (tx) => {
      const toSaved = [...this._toCreate, ...this._toUpdate];

      await tx.save(toSaved);
      await tx.remove(this._toRemove);
    });

    this.clear();
  }

  rollback(): void {
    this.clear();
  }

  clear() {
    this._toCreate = [];
    this._toUpdate = [];
    this._toRemove = [];
  }
}
