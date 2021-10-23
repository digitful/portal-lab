import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  count$!: Observable<number>

  constructor(private store: Store<{ count: number }>) { }

  ngOnInit(): void {
    this.count$ = this.store.select('count');
  }

}
