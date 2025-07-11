export interface TaskModel {
    taskid: number;
    name: string;
    description: string | null;
    assignee: string | null;
    status: string | null;
    priority: string | null;
    duedate: string | null;
    projectId: number | null;
    sprintId: number | null;
    created: string | null;
    modified: string | null;
    author: number | null;
}

export interface TaskCreateCommand {
    name: string;
    assignee: string | null;
    description: string | null;
    status: string | null;
    priority: string | null;
    duedate: Date | null;
    projectId: number | null;
    created: string | null;
    sprintId: number | null;
    author: number | null;
}

export interface TaskUpdateCommand {
    name: string;
    assignee: string | null;
    description: string | null;
    status: string | null;
    priority: string | null;
    duedate: Date | null;
    projectId: number | null;
    sprintId: number | null;
    modified: string | null;
}