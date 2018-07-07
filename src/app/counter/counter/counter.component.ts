import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  index = 0;

  increment() {
    this.index ++;
  }

  decrement() {
    this.index --;
  }

  dataToPass = {
    onClick: this.increment.bind(this)
  };


  constructor() { }

  ngOnInit() {
  }


}
