import { Action, createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo')
];

const _todoReducer = createReducer(initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)])
);

export function TodoReducer(state: Todo[], action: Action) {
  return _todoReducer(state, action);
}
