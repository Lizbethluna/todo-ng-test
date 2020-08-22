import { Action } from '@ngrx/store';
import { ListTask } from './todo.model';

export enum TodoActionsTypes {
    TASKS_GET = '[TASK] Get task',
    TASKS_ADD = '[TASK] Add task',
    TASKS_UPDATE = '[TASK] Update task',
    TASKS_DELETE = '[TASK] Delete task',
    TASKS_DELETE_ALL = '[TASK] Delete All task',
    TASKS_FILTER_ALL = '[TASK] All Filter task',
    TASKS_FILTER_PENDING = '[TASK] Pending Filter task',
    TASKS_FILTER_COMPLETED = '[TASK] Completed Filter task',
}

export class AddTaskAction implements Action {
    readonly type = TodoActionsTypes.TASKS_ADD;
    constructor(public payload: ListTask) {}
}

export class UpdateTaskAction implements Action {
    readonly type = TodoActionsTypes.TASKS_UPDATE;
    constructor(public payload: string) {}
}

export class DeleteTaskAction implements Action {
    readonly type = TodoActionsTypes.TASKS_DELETE;
    constructor(public payload: string) {}
}

export class DeleteAllTaskAction implements Action {
    readonly type = TodoActionsTypes.TASKS_DELETE_ALL;
    constructor(public payload: string) {}
}

export class FilterAllTaskAction implements Action {
    readonly type = TodoActionsTypes.TASKS_FILTER_ALL;
    constructor(public payload: string) {}
}

export class FilterPendingTaskAction implements Action {
    readonly type = TodoActionsTypes.TASKS_FILTER_PENDING;
    constructor(public payload: string) {}
}

export class FilterCompletedTaskAction implements Action {
    readonly type = TodoActionsTypes.TASKS_FILTER_COMPLETED;
    constructor(public payload: string) {}
}

export type TodoActions = AddTaskAction | DeleteTaskAction | DeleteAllTaskAction | UpdateTaskAction | FilterAllTaskAction | FilterPendingTaskAction | FilterCompletedTaskAction;
