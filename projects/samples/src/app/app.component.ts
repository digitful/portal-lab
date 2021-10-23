import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user = 'Abdellah Housni';

  menu = {
    main: [
      { label: 'Tableau de board', path: 'dashboard' },
      { label: 'Schedule', path: 'weekly-schedule' },
      { label: 'Workers', path: 'worker' },
      { label: 'Kanban', path: 'kanban-board' },
      { label: 'Input', path: 'input' },
    ],
    setting: [
      { label: 'Structure', path: 'structure' },
      { label: 'Utilisateurs', path: 'user' }
    ]
  }

  logout() {
    console.log('logout')
  }

}
