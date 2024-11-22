import { Component } from '@angular/core';

@Component({
  selector: 'app-eventregistration',
  templateUrl: './eventregistration.component.html',
  styleUrls: ['./eventregistration.component.css']
})
export class EventregistrationComponent {

  name:string ="";
  names:string[] = [];

  register(){
    this.names.push(this.name);
  }

}
