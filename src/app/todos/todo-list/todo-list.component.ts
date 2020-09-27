import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store.select('todos').subscribe((todos) => {
      return this.todos = todos;
    });
  }

}
