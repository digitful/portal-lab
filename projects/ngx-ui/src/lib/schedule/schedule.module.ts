import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WeeklyScheduleComponent } from './weekly-schedule/weekly-schedule.component';
import { WeeklyScheduleItemComponent } from './weekly-schedule-item/weekly-schedule-item.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { WeeklyScheduleItemListComponent } from './weekly-schedule-item-list/weekly-schedule-item-list.component';


@NgModule({
  declarations: [
    WeeklyScheduleComponent,
    WeeklyScheduleItemComponent,
    KanbanBoardComponent,
    WeeklyScheduleItemListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatButtonModule,
    DragDropModule
  ],
  exports: [
    WeeklyScheduleComponent,
    KanbanBoardComponent
  ]
})
export class DigitScheduleModule { }
