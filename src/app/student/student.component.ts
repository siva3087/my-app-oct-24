import { Component } from '@angular/core';
import { StudetService } from '../studet.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  students:any =[];
  constructor(private _studentService:StudetService){
  _studentService.getstudents().subscribe(
    (data:any) =>{
      this.students =data;
    },
    (err:any) =>{
      alert("internal server erroe")
    }
  )
  }
}
