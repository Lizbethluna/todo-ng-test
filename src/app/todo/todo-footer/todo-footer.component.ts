import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../todo-state.model';
import { ListTask } from '../todo.model';
import { Observable } from 'rxjs';
import { DeleteAllTaskAction, FilterTaskAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  tasksItems$: Observable <Array<ListTask>>;
  statusActive: string = 'all';
  countItems: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(store => store.task).subscribe(
      val => (this.countItems = val.length)
    );
  }

  // Elimina todos los elementos de la lista
  deleteAllTask(item: string){
    this.store.dispatch(new DeleteAllTaskAction(item));
  }

  // Filtrar elementos de acuerdo al estatus seleccionado
  filterTasks(status){
    this.statusActive = status;
    this.store.dispatch(new FilterTaskAction(status));
  }

}
