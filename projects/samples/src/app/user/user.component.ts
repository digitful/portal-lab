import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private store: Store<{ count: number }>) { }

  ngOnInit(): void {

  }

  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

}
