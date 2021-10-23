import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyScheduleItemComponent } from './weekly-schedule-item.component';

describe('WeeklyScheduleItemComponent', () => {
  let component: WeeklyScheduleItemComponent;
  let fixture: ComponentFixture<WeeklyScheduleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyScheduleItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyScheduleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
