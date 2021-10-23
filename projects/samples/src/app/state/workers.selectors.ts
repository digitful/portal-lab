import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Worker } from '../worker/worker';
import { AppState } from './app.state';

export const selectWorkers = createSelector(
  (state: any) => state.workers,
  (workers: Array<Worker>) => workers
);

export const selectCollectionState: any = createFeatureSelector<
  AppState,
  ReadonlyArray<string>
>("collection");

export const selectWorkerCollection = createSelector(
  selectWorkers,
  selectCollectionState,
  (workers: Array<Worker>, collection: Array<string>) => {
    return collection.map((id) => workers.find((worker) => worker.id === id));
  }
);
