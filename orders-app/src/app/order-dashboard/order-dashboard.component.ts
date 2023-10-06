import { Component } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent {
  count: number = 0;
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
