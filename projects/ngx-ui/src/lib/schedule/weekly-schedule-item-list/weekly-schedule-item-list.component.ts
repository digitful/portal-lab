import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'digit-weekly-schedule-item-list',
  templateUrl: './weekly-schedule-item-list.component.html',
  styleUrls: ['./weekly-schedule-item-list.component.scss']
})
export class WeeklyScheduleItemListComponent implements OnInit {

  @Input() events: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
