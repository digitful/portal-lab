import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Worker } from '../worker';

import { v4 as uuid } from 'uuid'
import { delay } from 'rxjs/operators';

let workers: Worker[] = [
  { id: uuid(), firstName: 'A', lastName: 'a' },
  { id: uuid(), firstName: 'B', lastName: 'b' },
  { id: uuid(), firstName: 'C', lastName: 'c' }
]

const FAKE_DELAY = 500;

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor() { }

  add(worker: Worker): Observable<string> {
    const workerId = uuid();
    workers.push({id: workerId, firstName: worker.firstName, lastName: worker.lastName})
    return of(workerId).pipe(delay(FAKE_DELAY));
  }

  retrive(id: string): Observable<Worker | undefined> {
    return of(workers.find((worker) => worker.id === id)).pipe(delay(FAKE_DELAY));
  }

  remove(id: string): Observable<boolean> {
    workers = workers.filter(worker => worker.id !== id);
    return of(true).pipe(delay(FAKE_DELAY));
  }

  list(): Observable<Worker[]> {
    return of([...workers])
  }

}


export const enum LoadingState {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADED = 'LOADED'
}

export interface ErrorState {
  errorMsg: string
}

export type CallState = LoadingState | ErrorState;

export interface WorkerListState {
  workers: Worker[],
  callState: CallState
}
