import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { crear } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private _store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  aregar() {

    if (this.txtInput.invalid) {
      return;
    }

    // console.log(this.txtInput.value);
    // console.log(this.txtInput.valid);

    // Llamar una accion (Action). - Crear TODO.
    this._store.dispatch(crear({ texto: this.txtInput.value }));

    // Restablecer el cambio / Input.
    this.txtInput.reset();
  }
}
