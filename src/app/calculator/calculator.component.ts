import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  num1:number= 0;
  num2:number =0;
  result:number =0;
  Sum(){
    this.result = this.num1 + this.num2
  }
  Sub(){
    this.result = this.num1 - this.num2
  }
  Mul(){
    this.result = this.num1 * this.num2
  }
  Div(){
    this.result = this.num1 / this.num2
  }
}
