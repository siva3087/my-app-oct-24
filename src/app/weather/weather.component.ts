import { Component } from '@angular/core';
import { weatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  weathers:any =[];

  constructor(private _weatherService:weatherService){

  _weatherService.getweather().subscribe(
    (data:any) =>{
       this.weathers[0] = data;
       console.log(this.weathers);
    },
    (err:any) =>{
      alert('internal error server')
    }
  )

}
}
