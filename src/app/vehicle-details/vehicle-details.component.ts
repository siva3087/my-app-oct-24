import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  vehicle:any ={};

  constructor(private _activatedRoute:ActivatedRoute,private _vehicleService:VechileService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        // do api call

        _vehicleService.getVechile(data.id).subscribe(
          (data:any)=>{
            this.vehicle =data;
          }
        )
        
      }
    )
  }

}
