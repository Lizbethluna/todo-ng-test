import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../todo-state.model';
import { AddTaskAction } from '../todo.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  // Agregar un nuevo elemento a la lista
  addNewTask(value){
    this.store.dispatch(new AddTaskAction({
        item: value,
        status: 'pending', 
        check: false
  }));
}

}

// export class TodoItemComponent implements OnInit {
//   tasksItems$: Observable <Array<ListTask>>;
//   constructor(private store: Store<AppState>) {}

//   ngOnInit(): void {
//     this.tasksItems$ = this.store.select(store => store.task)
//   }
// }
