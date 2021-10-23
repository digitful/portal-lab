import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputComponent } from './input/input.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { StructureComponent } from './structure/structure.component';
import { UserComponent } from './user/user.component';
import { WeeklyScheduleComponent } from './weekly-schedule/weekly-schedule.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kanban-board', component: KanbanBoardComponent },
  { path: 'weekly-schedule', component: WeeklyScheduleComponent },

  { path: 'structure', component: StructureComponent },
  { path: 'user', component: UserComponent },

  { path: 'input', component: InputComponent },

  { path: 'worker', loadChildren: () => import('./worker/worker.module').then(m => m.WorkerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
