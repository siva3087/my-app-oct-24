import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {

  public marksForm:FormGroup = new FormGroup({
    name:new FormControl(),
    class:new FormControl(),
    fathername:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    address:new FormControl({
      addressline:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pin:new FormControl(),
      
      

    }),
    type:new FormControl(),
    marks:new FormArray([])

  })

  get marksFormArray(){
    return this.marksForm.get('marks')as FormArray
  }

  add(){
    this.marksFormArray.push(
      new FormGroup({
        percentage: new FormControl(),
        year:new FormControl(),
        class:new FormControl()
      })
      
    )


  }
  constructor(){
    this.marksForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data == 'dayscholor'){
          this.marksForm.addControl("busFee",new FormControl());
          this.marksForm.removeControl('hostelFee');
        }
        else{
          this.marksForm.addControl("hostelFee",new FormControl());
          this.marksForm.removeControl('busFee');
        }
      }

      
    )
  }


  submit(){
    console.log(this.marksForm);
  }
  public studentForm:FormGroup = new FormGroup({

  })
  delete(i:number){
    this.marksFormArray.removeAt(i);
  }
 

}
