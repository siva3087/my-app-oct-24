import { Component } from '@angular/core';
import { StudetService } from '../studet.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students: any = [];
  term: string = "";
  column: string = "";
  order:string ="";
  student:any ={};
  id:string ="";
  constructor(private _studentService:StudetService, ) {
    _studentService.getstudents().subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }
  filter(){
  this._studentService.getFilteredStudents(this.term).subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }
  sort(){
    this._studentService.getSortedStudents(this.column,this.order).subscribe(
        (data: any) => {
          this.students = data;
        },
        (err: any) => {
          alert("internal server error")
        }
      )
    }
    delete(id:string){
      console.log(id)
      this._studentService.deletestudent(id).subscribe(
        (data:any) =>{
          alert("delete Successfully!!!");
        },
        (err:any) =>{
          alert("internal server Error");
        }
      )    
    }
  view(){}

  edit(){}
}






