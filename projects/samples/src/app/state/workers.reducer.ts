import { createReducer, on } from '@ngrx/store';
import { Worker } from '../worker/worker';
import { retrievedWorkerList } from './workers.actions';

export const initialState: ReadonlyArray<Worker> = [];

export const WorkersReducer = createReducer(
  initialState,
  on(retrievedWorkerList, (state, { workers }: any) => workers)
);
