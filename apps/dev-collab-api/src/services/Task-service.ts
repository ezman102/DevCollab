import { inject, injectable } from "inversify";
import { isEmpty } from "lodash";
import {
    TaskCreateCommand,
    TaskModel,
    TaskUpdateCommand,
} from "shared/models/task";
import { TYPES } from "../container/types";
import { IDbContext } from "../db/db-context";
import { Task } from "../entities/task";
import { HttpBadRequestError } from "../errors/http-errors";
import { ITaskRepository } from "../repositories/task-repository";
import { IProjectRepository } from "../repositories/project-repository";
import { ISprintRepository } from "../repositories/sprint-repository";

interface TaskStatus {
    taskid: number;
    status: string;
    modified: string;
}

interface StatusProgress {
    title: string;
    progress: number[];
    options: string[];
}

interface FlowDiagram {
    createdDate: string;
    todo: number;
    inProgress: number;
    done: number;
}


// The main method of 8 operations : 
// create Task  by  Project ID , Sprint ID ,
// Cal TotalStatus by Project ID 
// Cal Total Priorty by Project ID
// getTask by Project ID , getTask by Project ID and Sprint ID , getTask by Project ID , Sprint ID and Task ID
// updated by roject ID, Sprint ID and Task ID
// remove Task by  Project ID , Sprint ID and Task ID,
export interface ITaskService {
    createTask(projectId: number, sprintId: number, command: TaskCreateCommand): Promise<number>;
    removeTask(projectId: number, sprintId: number, TaskId: number): Promise<void>;
    getTaskbyProIdSprIdTaskId(projectId: number, sprintId: number, taskId: number): Promise<Task | null>;
    getTaskbyProIdSprId(projectId: number, sprintId: number): Promise<Task[] | null>;
    getTaskbyProId(projectId: number): Promise<Task[] | null>;
    updateTask(projectId: number, sprintId: number, taskId: number, command: TaskUpdateCommand): Promise<void>;
    CheckStatusnum(projectId: number): Promise<Record<string, number>>;
    CheckPrioritynum(projectId: number): Promise<Record<string, number>>;
    getOverStateCount(projectId: number): Promise<StatusProgress[]>;
    getCumulativeFlowDiagram(projectId: number): Promise<FlowDiagram[]>;
    getOverviewUserStory(projectId: number): Promise<FlowDiagram[]>;
}

@injectable()
export class TaskService implements ITaskService {
    constructor(
        @inject(TYPES.IDbContext)
        private _dbContext: IDbContext,
        @inject(TYPES.ITaskRepository)
        private _taskRepository: ITaskRepository,
        @inject(TYPES.IProjectRepository)
        private _projectRepository: IProjectRepository,
        @inject(TYPES.ISprintRepository)
        private _sprintRepository: ISprintRepository
    ) { }

    // create Task  by  Project ID , Sprint ID 
    async createTask(projectId: number, sprintId: number, command: TaskCreateCommand): Promise<number> {
        const project = await this._projectRepository.getProject(projectId);
        const sprint = await this._sprintRepository.getSprint(sprintId);
        const { duedate } = command;
        const now = new Date();
   
        if (!project) {
            throw new HttpBadRequestError("Project does not exist");
        }
    
        if (!sprint) {
            throw new HttpBadRequestError("Sprint does not exist");
        }
    
        if (isEmpty(command.name)) {
            throw new HttpBadRequestError("Task name is required");
        }
    
        if (!duedate) {
            throw new HttpBadRequestError("The DueDate is required");
        }
    
        try {
            await this._dbContext.tasks.query(
                `INSERT INTO Task (
                    name,
                    assignee,
                    description,
                    priority,
                    status,
                    projectId,
                    sprintId,
                    duedate,
                    modified,
                    created,
                    author
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    command.name,
                    command.assignee,
                    command.description,
                    command.priority,
                    command.status,
                    projectId,
                    sprintId,
                    command.duedate,
                    now,
                    now,
                    command.author
                ]
            );
    
            // Then, get the last inserted ID
            const [result] = await this._dbContext.tasks.query(
                'SELECT LAST_INSERT_ID() as taskid'
            );
    
            return result.taskid;
    
        } catch (error) {
            throw error;
        }
    }

    // Remove Task by  Project ID , Sprint ID and Task ID
    async removeTask(projectId: number, sprintId: number, TaskId: number): Promise<void> {
        const project = await this._projectRepository.getProject(projectId);
        const sprint = await this._sprintRepository.getSprint(sprintId);
        const Task = await this._taskRepository.getTask(TaskId);

        if (!Task) {
            throw new HttpBadRequestError("Task does not exist");
        }
        if (!project) {
            throw new HttpBadRequestError("Project does not exist");
        }

        if (!sprint) {
            throw new HttpBadRequestError("Sprint does not exist");
        }

        this._taskRepository.removeTask(Task);
        await this._dbContext.save();
    }




    // getTask by Project ID 
    async getTaskbyProId(projectId: number): Promise<Task[] | null> {
        const project = await this._projectRepository.getProject(projectId);
        if (!project) {
            throw new HttpBadRequestError("Project does not exist");
        }
        return await this._dbContext.tasks.find({ where: { project: { projectId: projectId } } });
    }

    // getTask by Project ID , Sprint ID
    async getTaskbyProIdSprId(projectId: number, sprintid: number): Promise<Task[] | null> {
        const project = await this._projectRepository.getProject(projectId);
        const sprint = await this._sprintRepository.getSprint(sprintid);
        if (!project) {
            throw new HttpBadRequestError("Project does not exist");
        }
        if (!sprint) {
            throw new HttpBadRequestError("Sprint does not exist");
        }
        return await this._dbContext.tasks.find({ where: { sprint: { sprintId: sprintid } } });
    }

    //  getTask by Project ID , Sprint ID and Task ID
    async getTaskbyProIdSprIdTaskId(projectId: number, sprintId: number, taskId: number): Promise<Task | null> {
        const project = await this._projectRepository.getProject(projectId);
        const sprint = await this._sprintRepository.getSprint(sprintId);
        const task = await this._taskRepository.getTask(taskId);
        if (!project) {
            throw new HttpBadRequestError("Project does not exist");
        }
        if (!sprint) {
            throw new HttpBadRequestError("Sprint does not exist");
        }
        if (!task) {
            throw new HttpBadRequestError("Task does not exist");
        }
        return await this._dbContext.tasks.findOneBy({ taskid: taskId });
    }

    //  Cal Total Status  by Project ID
    async CheckStatusnum(projectId: number): Promise<Record<string, number>> {
        let status = { "To Do": 0, "In Progress": 0, "Done": 0 };
        const tasks: Task[] | null = await this.getTaskbyProId(projectId);
        const safeTasks = tasks || [];
        const tasksLength = safeTasks.length || 0;

        for (let i = 0; i < tasksLength; i++) {
            if (tasks != undefined && tasks[i].status == "To Do") {
                status["To Do"] += 1;

            } else if (tasks != undefined && tasks[i].status == "In Progress") {
                status["In Progress"] += 1;

            } else if (tasks != undefined && tasks[i].status == "Done") {
                status["Done"] += 1;

            }
        }
        return status;
    }

    //  Cal Total Priority num by Project ID 
    async CheckPrioritynum(projectId: number): Promise<Record<string, number>> {
        const priority = { "Low": 0, "Medium": 0, "High": 0 };
        const project = await this._projectRepository.getProject(projectId);
        const tasks: Task[] | null = await this.getTaskbyProId(projectId);
        const safeTasks = tasks || [];
        const tasksLength = safeTasks.length || 0;

        for (let i = 0; i < tasksLength; i++) {
            if (tasks != undefined && tasks[i].priority == "Low") {
                priority["Low"] += 1;

            } else if (tasks != undefined && tasks[i].priority == "Medium") {
                priority["Medium"] += 1;

            } else if (tasks != undefined && tasks[i].priority == "High") {
                priority["High"] += 1;

            }
        }
        return priority;
    }

    //  updated by roject ID, Sprint ID and Task ID
    async updateTask(projectId: number, sprintId: number, taskId: number, command: TaskUpdateCommand): Promise<void> {
        const project = await this._projectRepository.getProject(projectId);
        const sprint = await this._sprintRepository.getSprint(sprintId);
        const task = await this._taskRepository.getTask(taskId);
        const now = new Date();
        
        if (!project) {
            throw new HttpBadRequestError("Project does not exist");
        }
        if (!sprint) {
            throw new HttpBadRequestError("Sprint does not exist");
        }
        if (!task) {
            throw new HttpBadRequestError("Task does not exist");
        }
    
        const formattedDueDate = new Date(command.duedate).toISOString().split('T')[0];

        await this._dbContext.tasks.query(
            `UPDATE Task 
             SET name = ?,
                 assignee = ?,
                 description = ?,
                 priority = ?,
                 status = ?,
                 projectId = ?,
                 sprintId = ?,
                 duedate = ?,
                 modified = ?
             WHERE taskid = ?`,
            [
                command.name,
                command.assignee,
                command.description,
                command.priority,
                command.status,
                projectId,
                sprintId,
                formattedDueDate,
                now,
                taskId
            ]
        );
    }

    async getOverStateCount(projectId: number): Promise<StatusProgress[]> {
        try {
            const tasks = await this.getTaskbyProId(projectId);
            if (!tasks || tasks.length === 0) {
                return [
                    {
                        title: 'TODO',
                        progress: [0, 0, 0],
                        options: ['Daily', 'Weekly', 'Monthly']
                    },
                    {
                        title: 'IN PROGRESS',
                        progress: [0, 0, 0],
                        options: ['Daily', 'Weekly', 'Monthly']
                    },
                    {
                        title: 'DONE',
                        progress: [0, 0, 0],
                        options: ['Daily', 'Weekly', 'Monthly']
                    }
                ];
            }
    
            const statusMapping = {
                'TODO': ['To Do'],
                'IN PROGRESS': ['In Progress'],
                'DONE': ['Done']
            };
    
            const timeOptions = ['Daily', 'Weekly', 'Monthly'];
       
            const currentDate = new Date(); 
            
            const today = currentDate.toISOString().split('T')[0];
            const startOfWeek = new Date(currentDate);
            startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
            const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    
            const result: StatusProgress[] = Object.entries(statusMapping).map(([title, statusValues]) => {
                // First filter by status
                const tasksInStatus = tasks.filter(task => 
                    statusValues.includes(task.status)
                );
    
                const progress = [
                    // Daily count - tasks created today
                    tasksInStatus.filter(task => 
                        new Date(task.created).toISOString().split('T')[0] === today
                    ).length,
                    
                    // Weekly count - tasks created this week
                    tasksInStatus.filter(task => {
                        const taskDate = new Date(task.created);
                        return taskDate >= startOfWeek;
                    }).length,
                    
                    // Monthly count - tasks created this month
                    tasksInStatus.filter(task => {
                        const taskDate = new Date(task.created);
                        return taskDate.getFullYear() === currentDate.getFullYear() && 
                               taskDate.getMonth() === currentDate.getMonth();
                    }).length
                ];
    
                return {
                    title,
                    progress,
                    options: timeOptions
                };
            });
    
            return result;
    
        } catch (error) {
            console.error('Error in getOverStateCount:', error);
            throw error;
        }
    }
    
    

    async getCumulativeFlowDiagram(projectId: number): Promise<FlowDiagram[]> {
        try {
            const tasks = await this.getTaskbyProId(projectId);
            
            // Group tasks by creation date
            const result = tasks.map(task => {
                const tasksBeforeDate = tasks.filter(t => 
                    new Date(t.created) <= new Date(task.created)
                );
                
                return {
                    createdDate: new Date(task.created).toISOString().split('T')[0],
                    todo: tasksBeforeDate.filter(t => t.status === 'To Do').length,
                    inProgress: tasksBeforeDate.filter(t => t.status === 'In Progress').length,
                    done: tasksBeforeDate.filter(t => t.status === 'Done').length
                };
            });

            // Remove duplicates based on createdDate
            const uniqueResult = Array.from(new Map(
                result.map(item => [item.createdDate, item])
            ).values());

            return uniqueResult.sort((a, b) => 
                a.createdDate.localeCompare(b.createdDate)
            );
    
        } catch (error) {
            throw error;
        }
    }

    async getOverviewUserStory(projectId: number) {
        const query = `
        SELECT 
            userStoryId,
            title,
            asA,
            iWantTo,
            soThat,
            priority,
            DATE_FORMAT(dueDate, '%d/%m/%Y') as dueDate,
            upvoteCount,
            downvoteCount,
            projectId
        FROM userStory
        WHERE projectId = ?
        ORDER BY 
            CASE priority
                WHEN 'High' THEN 1
                WHEN 'Medium' THEN 2
                WHEN 'Low' THEN 3
                ELSE 4
            END,
            (upvoteCount - downvoteCount) DESC,
            dueDate ASC`;

        const result = await this._dbContext.userStories.query(query, [projectId]);
        return result;
    }

}