import { Component } from '@angular/core';
import { HobbiesService } from '../hobbies.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {

  hobbies: any = [];
  constructor(private _hobbiesService: HobbiesService) {

    _hobbiesService.getHobbies().subscribe(
      (data: any) => {
        this.hobbies = data;
      },
      (err: any) => {
        alert("internal server error")
      }

    )

  }

}
