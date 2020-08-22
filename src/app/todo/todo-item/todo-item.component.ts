import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../todo-state.model';
import { ListTask } from '../todo.model';
import { Observable } from 'rxjs';
import { DeleteTaskAction, DeleteAllTaskAction, UpdateTaskAction } from '../todo.actions';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  tasksItems$: Observable <Array<ListTask>>;
  newTaskItem$: ListTask = { item: '', status: '', check:true};
  isChecked: boolean;
  preventSingleClick = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.tasksItems$ = this.store.select(store => store.task);
  }

  // Activar input editar al dar doble click en la etiqueta
  

  // Actualizar valor del elementos en la lista
  updateTask(item: string){
    console.log('Este es el item ', item);
    // this.store.dispatch(new UpdateTaskAction(item));
  }

  // Elimina el elemento de la lista
  deleteTask(item: string){
    this.store.dispatch(new DeleteTaskAction(item));
  }

  // Elimina todos los elementos de la lista
  deleteAllTask(item: string){
    this.store.dispatch(new DeleteAllTaskAction(item));
  }

}
