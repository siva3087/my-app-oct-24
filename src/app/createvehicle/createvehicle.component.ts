import { Component } from '@angular/core';
import { VechileService } from '../vechile.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {

   id:string="";

  constructor(private _vehicleservice:VechileService, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.id=data.id;
        // api Call
        _vehicleservice.getVechile(data.id).subscribe(
          (data:any)=>{
            this.vehicleForm.patchValue(data);
          }
        )
      }
    )
  }

  public vehicleForm:FormGroup = new FormGroup(
    {
      Vehicle: new FormControl(),
    manufacturer:new FormControl(),
    model: new FormControl(),
    type:new FormControl() ,
    fuel:new FormControl() ,
    color: new FormControl(),
    image:new FormControl() ,
    cost:new FormControl(),
    },
  )
  submit(){
    if(this.id){
      // edit
      this._vehicleservice.updateVehicle(this.id,this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("update Successfully");
        },
        (err:any)=>{
          alert("Updation Failed");
        }
      )
    }
    else{
      // create
    
    // console.log(this.vehicleForm);
    this._vehicleservice.createVehicle(this.vehicleForm.value).subscribe(
      (data:any) =>{
        alert("vehicle created sucessfully");
      },
      (err:any) =>{
        alert("Creation Failed");
      }
    )
  }

  }
}
