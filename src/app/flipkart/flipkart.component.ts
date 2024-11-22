import { Component } from '@angular/core';
import { flipService } from '../flipservice.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  products:any =[];

  constructor(private _flipService:flipService ){
    _flipService.getProducts().subscribe(
      (data:any) =>{
      this.products =data
      },
      (err:any) =>{
        alert("internal server any")
      }
    )
  }

}
