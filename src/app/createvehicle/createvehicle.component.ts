import { Component } from '@angular/core';
import { VechileService } from '../vechile.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
  constructor(private _vehicleservice:VechileService){}

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
    console.log(this.vehicleForm);
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
