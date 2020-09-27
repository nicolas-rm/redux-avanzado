import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { validar, toggle } from '../todo.actions';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;


  // Marcar Check
  chkCompletado: FormControl;
  txtInput: FormControl;

  // Editar
  editando: boolean = false;

  // Establecer el foco en el input
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  constructor(private _store: Store<AppState>) {
  }

  ngOnInit(): void {


    // this.todo.completado = true;
    // Esta linea sustituye al codigo de arriba
    // this._store.dispatch(validar({ completado: true }));

    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    // Observarlos cambios generados en el check
    this.chkCompletado.valueChanges.subscribe((valor) => {
      console.log(valor);
      this._store.dispatch(toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  editarTerminando() {
    this.editando = false;
  }

}
