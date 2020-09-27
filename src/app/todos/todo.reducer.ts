import { Action, createReducer, on } from '@ngrx/store';
import { crear, validar, toggle } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Hacer mi tarea'),
  new Todo('Buscar trabajo'),
  new Todo('Ahorrar para el viaje')
];

const _todoReducer = createReducer(initialState,
  // Crear un TODO.
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),

  // Modificar la propiedad completado de todos los TODO.
  on(validar, (state, { completado }) => {
    return state.map(todo => {
      if (todo.completado !== completado) {
        return { ...todo, completado };
      }
      return todo;
    });
  }),

  // Marcar o desmarcar el TODO
  on(toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, completado: !todo.completado
        };
      }else {
        return todo;
      }
    });
  })
);

export function TodoReducer(state: Todo[], action: Action) {
  return _todoReducer(state, action);
}
