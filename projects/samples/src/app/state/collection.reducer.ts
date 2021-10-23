import { createReducer, on } from '@ngrx/store';
import { Worker } from "../worker/worker";
import { addWorker, removeWorker } from './workers.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeWorker, (state, { workerId }) => state.filter((id) => id !== workerId)),
  on(addWorker, (state, { workerId }) => {
    if (state.indexOf(workerId) > -1) return state
    return [ ...state, workerId];
  })
);