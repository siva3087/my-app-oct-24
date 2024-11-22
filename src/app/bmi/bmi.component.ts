import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent {

  height:number =0;
  weight:number =0;
  result:number =0;

  Calculate(){
    this.result = this.weight /(this.height * this.height)
  }


}
