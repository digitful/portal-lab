import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { WorkerService } from '../services/worker.service';

export interface WorkerListSate {
  loading: boolean,  
  workers: any[],
  size: number,
  currentPage: number,
  pageSize: number,
  canAddWorkers: boolean,
  canRemoveWorkers: boolean
}

@Injectable()
export class WorkerListStore extends ComponentStore<WorkerListSate> {

  constructor(private workerService: WorkerService) {
    super({
      loading: true,
      currentPage: 0,
      pageSize: 0,
      size: 0,
      workers: [],
      canAddWorkers: true,
      canRemoveWorkers: true
    });
  }

  readonly selectLoading = this.select(state => state.loading);
  readonly selectWorkers = this.select(state => state.workers);

  readonly addWorker = this.updater((state, worker) => {
    return {
      ...state,
      workers: [...state.workers, worker]
    }
  });

  // readonly loadWorkers = this.effect();

}

