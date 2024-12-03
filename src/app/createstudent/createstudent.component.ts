import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { StudetService } from '../studet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {
  id:string="";
  constructor(private _studentService:StudetService, private _activatedRouted:ActivatedRoute){
    _activatedRouted.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.id = data.id
        _studentService.getstudent(data.id).subscribe(
          (data:any)=>{
            this.studentForm.patchValue(data);
          }
        )
      }
    )
  }
 public studentForm:FormGroup=new FormGroup(
  {
    name: new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    dob:new FormControl(),
    profile_picture:new FormControl(),
    email:new FormControl(),
    school_logo:new FormControl(),
    school_name:new FormControl(),
    school_pin:new FormControl(),
    

  }
 )
 Add(){
  if(this.id){
    this._studentService.updatestudent(this.id,this.studentForm.value).subscribe(
      (data:any)=>{
        alert("Update Successfully")
      },
     (err:any) =>{
      alert("updation Failed")
     }
    )
  }
else{
  console.log(this.studentForm.value);
  this._studentService.createstudent(this.studentForm.value).subscribe(
    (data:any)=>{
      alert("Create Student Successfully");
    },
    (err:any)=>{
      alert("internal Server Error");
    }
  
  )
}
  
 }

}
