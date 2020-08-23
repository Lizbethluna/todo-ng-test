import { Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TodoActionsTypes, TodoActions } from './todo/todo.actions';
import { ListTask } from './todo/todo.model';
import { store } from '@angular/core/src/render3';

const initialState: Array<ListTask> = [
    {
        id: 1,
        item: 'Test 1',
        status: 'pending', 
        check: false
    },
    {
        id: 2,
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
            return state.filter(task => task.id !== action.payload);
        case TodoActionsTypes.TASKS_DELETE_ALL:
            return state.filter(task => task.status == '');
        case TodoActionsTypes.TASKS_UPDATE:
            return  [...state, action.payload];
        case TodoActionsTypes.TASKS_FILTER:
            if(action.payload == 'all'){
                return  state;
            } else {
                return state.filter(task => task.status == action.payload);
            }
        default:
            return state;
    }
}