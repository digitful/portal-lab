import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTable } from '@angular/material/table';

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    MatTable
  ],
  exports: [
    DataTableComponent
  ]
})
export class DigitDataTableModule { }
