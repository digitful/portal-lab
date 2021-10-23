import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import {DateAdapter} from '@angular/material/core';
import {
  MatDateRangeSelectionStrategy,
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';


@Injectable()
export class SevenDayRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  constructor(private _dateAdapter: DateAdapter<D>) {}

  selectionFinished(date: D | null): DateRange<D> {
    return this._createSevenDayRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createSevenDayRange(activeDate);
  }

  private _createSevenDayRange(date: D | null): DateRange<D> {
    if (date) {
      const start = this._dateAdapter.addCalendarDays(date, -3);
      const end = this._dateAdapter.addCalendarDays(date, 3);
      return new DateRange<D>(start, end);
    }

    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'digit-weekly-schedule',
  templateUrl: './weekly-schedule.component.html',
  styleUrls: ['./weekly-schedule.component.scss'],
  providers: [{
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    useClass: SevenDayRangeSelectionStrategy
  }]
})
export class WeeklyScheduleComponent implements OnInit {

  days = [ 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche' ];

  resources: {name: string, schedules: any}[] = [
    { name: 'R1', schedules: { 
      'Lundi': [{label: 'evt-1', color: 'blue'}, {label: 'evt-2'}], 
      'Mardi': [],
      'Mercredi': [],
      'Jeudi': [{label: 'evt-3', color: 'blue'}],
      'Vendredi': [],
      'Samedi': [],
      'Dimanche': [],
    }},
    { name: 'R2', schedules: { 
      'Lundi': [{label: 'evt-4', color: 'green'}], 
      'Mardi': [],
      'Mercredi': [],
      'Jeudi': [],
      'Vendredi': [{label: 'evt-5', color: 'gray'}],
      'Samedi': [],
      'Dimanche': [],
    }}
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (!event.container.data) {
        event.container.data = []
      }
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
