import { Action } from '@ngrx/store';
import { TodoActionsTypes, TodoActions } from './todo/todo.actions';
import { ListTask } from './todo/todo.model';

const initialState: Array<ListTask> = [
    {
        item: 'Test 1',
        status: 'pending', 
        check: false
    },
    {
        item: 'Test 2',
        status: 'completed',
        check: true 
    }
];

export function listTaskReducer(state: Array<ListTask> = initialState, action: TodoActions) {
    switch(action.type) {
        case TodoActionsTypes.TASKS_ADD:
            return [...state, action.payload];
        case TodoActionsTypes.TASKS_DELETE:
            return state.filter(task => task.item !== action.payload);
        case TodoActionsTypes.TASKS_DELETE_ALL:
            return [state, action.payload];
        case TodoActionsTypes.TASKS_UPDATE:
            return state.filter(task => task.item !== action.payload);
        case TodoActionsTypes.TASKS_FILTER_PENDING:
            return state.filter(task => task.status == action.payload);
            // return [...state, action.payload];
        default:
            return state;
    }
}