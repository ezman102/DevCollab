import { inject, injectable } from "inversify";
import { TYPES } from "../container/types";
import { IDbContext } from "../db/db-context";
import { Task } from "../entities/task";

export interface ITaskRepository {
    addTask(task: Task): void;
    updateTask(task: Task): void;
    removeTask(task: Task): void;
    getTask(taskid: number): Promise<Task | null>;
}

@injectable()
export class TaskRepository implements ITaskRepository {
    constructor(@inject(TYPES.IDbContext) private _dbContext: IDbContext) { }

    addTask(task: Task): void {
        this._dbContext.needCreate(task);
    }

    updateTask(task: Task): void {
        this._dbContext.needUpdate(task);
    }

    removeTask(task: Task): void {
        this._dbContext.needRemove(task);
    }


    async getTask(taskid: number): Promise<Task | null> {
        return await this._dbContext.tasks.findOne({
            where: { taskid: taskid },
            relations: ["project", "sprint"], // Include relationships 
        });
    }
}