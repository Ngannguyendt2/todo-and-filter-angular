import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  // tslint:disable-next-line:radix
  number1 = parseInt('0');
  // tslint:disable-next-line:radix
  number2 = parseInt('0');
  operator = null;
  result = 0;

  resultCaculator() {
    switch (this.operator) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        break;
      default:
        break;
    }
    return this.result;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
