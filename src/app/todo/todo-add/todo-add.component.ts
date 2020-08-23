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
  countItems: number;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(store => store.task).subscribe(
      val => (this.countItems = val.length)
    );
  }

  // Agregar un nuevo elemento a la lista
  addNewTask(value){
    this.store.dispatch(new AddTaskAction({
        id: this.countItems+1,
        item: value,
        status: 'pending', 
        check: false
    }));
  }
}

