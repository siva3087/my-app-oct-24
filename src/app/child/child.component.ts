import { Interpolation } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // @Input()a:number=0;

  // @Output()bEvent:EventEmitter<number> = new EventEmitter();

  // send(){
  //   this.bEvent.emit(20);
  // }

  @Input() rating:number=0;
  @Input() maxcount:number=0;
            text:string="";
}