import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'digit-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  tasks = {
    "Col 1": [
      { label: 'Task 1' },
      { label: 'Task 2' }
    ],
    "Col 2": [
      { label: 'Task 3' }
    ],
    "Col 3": [
      { label: 'Task 4' },
      { label: 'Task 5' },
      { label: 'Task 6' },
      { label: 'Task 7' },
      { label: 'Task 8' },
      { label: 'Task 9' },
      { label: 'Task 10' },
      { label: 'Task 11' },
      { label: 'Task 12' },
      { label: 'Task 13' },
      { label: 'Task 14' },
      { label: 'Task 15' }
    ],
  }

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>) {
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
