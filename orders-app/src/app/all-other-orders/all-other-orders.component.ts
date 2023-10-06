import { Component } from '@angular/core';

@Component({
  selector: 'app-all-other-orders',
  templateUrl: './all-other-orders.component.html',
  styleUrls: ['./all-other-orders.component.css']
})
export class AllOtherOrdersComponent {
  count: number = 6;
  intervalId: any;
  isCounting: boolean = false;
  isNumberShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter() {
    this.count++;
  }

  startCounter() {
    if (!this.isCounting) {
      this.isCounting = true;
      this.isNumberShown = true;
      this.intervalId = setInterval(() => {
        this.incrementCounter();
      }, 1000);
    }
  }

  stopCounter() {
    clearInterval(this.intervalId);
    this.isCounting = false;
  }
}
