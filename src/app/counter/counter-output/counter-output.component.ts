import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit,OnDestroy{
  // @Input () counter: any;
  counter:number | undefined;
  counterSubscription: Subscription | undefined;

  constructor(private store:Store<{counter:CounterState}>){}
  
  ngOnInit(): void {
    this.store.select(getCounter).subscribe((counter) =>{
      console.log('Counter observable called');
      this.counter = counter;
    })
    // throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
  }

}
