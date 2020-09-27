import { createAction, props } from '@ngrx/store';

// Crear un TODO
export const crear = createAction(
  '[TODO] Crea Todo',
  props<{ texto: string }>()
);

export const validar = createAction(
  '[TODO] Cambiar Valor Completado',
  props<{ completado: boolean }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);
