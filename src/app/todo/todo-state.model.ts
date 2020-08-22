import { ListTask } from './todo.model';

export interface AppState {
    readonly task: Array<ListTask>
}