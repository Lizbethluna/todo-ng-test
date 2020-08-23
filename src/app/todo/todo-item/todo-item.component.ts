import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../todo-state.model';
import { ListTask } from '../todo.model';
import { Observable } from 'rxjs';
import { DeleteTaskAction, UpdateTaskAction } from '../todo.actions';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  tasksItems$: Observable <Array<ListTask>>;
  item: ListTask = { id: 0, item: '', status: '', check:true};
  isChecked: boolean;
  preventSingleClick: boolean = false;
  isEditModeEnabled: boolean = false;
  idEditModeEnabled: BigInteger;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.tasksItems$ = this.store.select(store => store.task);
  }

  // Activar input editar al dar doble click en la etiqueta
  activeEditTask(index) {
    this.isEditModeEnabled = true;
    this.idEditModeEnabled = index;
  }

  // Actualizar valor del elementos en la lista
  updateTask(task, item_edit: string, index){
    const array_item = {
      id: task.id,
      item: item_edit,
      status: task.status, 
      check: task.check
    }

    this.store.dispatch(new UpdateTaskAction(array_item));
    this.isEditModeEnabled = false;
    this.idEditModeEnabled = index;
  }

  // Elimina el elemento de la lista
  deleteTask(id: number){
    this.store.dispatch(new DeleteTaskAction(id));
  }
}
