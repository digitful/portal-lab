import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DigitAuthModule, DigitNavModule, DigitScheduleModule, DigitInputModule } from 'ngx-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { WeeklyScheduleComponent } from './weekly-schedule/weekly-schedule.component';
import { StructureComponent } from './structure/structure.component';
import { UserComponent } from './user/user.component';
import { InputComponent } from './input/input.component';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './login/login.component';
import { counterReducer } from './state/counter.reducer';
import { WorkersReducer } from './state/workers.reducer';
import { collectionReducer } from './state/collection.reducer';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DashboardComponent,
    KanbanBoardComponent,
    WeeklyScheduleComponent,
    StructureComponent,
    UserComponent,
    InputComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    /*
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    */
    MatIconModule,
    DigitScheduleModule,
    DigitNavModule,    
    DigitAuthModule,
    DigitInputModule,
    StoreModule.forRoot({
      count: counterReducer,
      workers: WorkersReducer,
      collection: collectionReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
