import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit{

  constructor (private store:Store<{counter : CounterState}>){}
  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onIncrement(){
    this.store.dispatch(increment());
    // this.increment.emit();
  }
  onDecrement(){
    this.store.dispatch(decrement());
    // this.decrement.emit();
  }

  onReset(){
    this.store.dispatch(reset());
    // this.reset.emit();
  }
}
