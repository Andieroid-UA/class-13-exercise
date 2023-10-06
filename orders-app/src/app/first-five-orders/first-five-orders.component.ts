import { Component } from '@angular/core';

@Component({
  selector: 'app-first-five-orders',
  templateUrl: './first-five-orders.component.html',
  styleUrls: ['./first-five-orders.component.css']
})
export class FirstFiveOrdersComponent {
  count: number = 0;
  intervalId: any;
  isCounting: boolean = false;
  isNumberShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter() {
    if (this.count < 5) {
      this.count++;
    }
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
