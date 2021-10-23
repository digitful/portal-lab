import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyScheduleItemListComponent } from './weekly-schedule-item-list.component';

describe('WeeklyScheduleItemListComponent', () => {
  let component: WeeklyScheduleItemListComponent;
  let fixture: ComponentFixture<WeeklyScheduleItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyScheduleItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyScheduleItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
