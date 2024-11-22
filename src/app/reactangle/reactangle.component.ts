import { Component } from '@angular/core';

@Component({
  selector: 'app-reactangle',
  templateUrl: './reactangle.component.html',
  styleUrls: ['./reactangle.component.css']
})
export class ReactangleComponent {
  height:number =0;
  width:number =0;
  result:number =0;

  Area(){
    this.result = this.height * this.width
  }
  Perimeter(){
    this.result = (this.height + this.width) *2
  }



}
