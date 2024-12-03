import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudetService } from '../studet.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
   student:any={};
  constructor(private _ActivatedRoute:ActivatedRoute, private _studentService:StudetService){
    _ActivatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        _studentService.getstudent(data.id).subscribe(
          (data:any)=>{
            this.student = data; 
          }
        )
      }
    )
  }

}
