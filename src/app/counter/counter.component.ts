import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { decrement, increment } from '../ngrx';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) { }

  ngOnInit() {
    this.counter$ = this.store.pipe(select('counter'));
  }

  decrementa() {
    this.store.dispatch(decrement());
  }

  incrementa() {
    this.store.dispatch(increment());
  }
}
