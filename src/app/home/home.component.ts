import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  names:string[] =['a','b','c'];
  ages:number []= [1,2,3,]

  user:User={
    name:'a',
    age:20,
    address:{
      city:'hyd',
      pin:399393
    },
    phones: [9494,9948]
  };
}
