import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'digit-weekly-schedule-item',
  templateUrl: './weekly-schedule-item.component.html',
  styleUrls: ['./weekly-schedule-item.component.css']
})
export class WeeklyScheduleItemComponent implements OnInit {

  @Input() label = '';
  @Input() color: any;
  
  constructor() { }

  ngOnInit(): void {

  }

}
