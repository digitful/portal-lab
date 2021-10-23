import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkerListStore } from './worker-list.store';

@Component({
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss'],
  providers: [ WorkerListStore ]
})
export class WorkerListComponent implements OnInit {

  workers: any;

  constructor(private workerListStore: WorkerListStore) {
    
  }

  ngOnInit(): void {
    // this.workerListStore.setState({});
  }

}
