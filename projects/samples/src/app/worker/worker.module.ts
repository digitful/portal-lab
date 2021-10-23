import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerRoutingModule } from './worker-routing.module';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { DigitDataTableModule } from 'ngx-ui';


@NgModule({
  declarations: [
    WorkerListComponent
  ],
  imports: [
    CommonModule,
    WorkerRoutingModule,
    DigitDataTableModule
  ]
})
export class WorkerModule { }
