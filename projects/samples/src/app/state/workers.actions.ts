import { createAction, props } from '@ngrx/store';

export const addWorker = createAction(
  '[Worker List] Add Worker',
  props<{ workerId: string }>()
);

export const removeWorker = createAction(
  '[Worker Collection] Remove Worker',
  props<{ workerId: string }>()
);

export const retrievedWorkerList = createAction(
  '[Worker List/API] Retrieve Worker Success',
  props<{ workers: ReadonlyArray<Worker>}>()
);
