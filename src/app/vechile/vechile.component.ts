import { Component } from '@angular/core';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vechile',
  templateUrl: './vechile.component.html',
  styleUrls: ['./vechile.component.css']
})
export class VechileComponent {

  vehicles:any = [];
  term:string ="";
  column:string ="";
  order:string ="";
  limit:number =0;
  page:number = 0;

  constructor( private _vechileService:VechileService){
    _vechileService.getVechiles().subscribe(
      (data:any) =>{
        this.vehicles = data;
      },
      (err:any) =>{
        alert("internal server error")
      }
    )
  }
  filter(){
    this._vechileService.getFilteredVechiles(this.term).subscribe(
      (data:any) =>{
        this.vehicles = data;
      },
      (err:any) =>{
        alert("internal server error")
      }
    )
  }
  sort(){
    this._vechileService.getSortedVechiles(this.column, this.order).subscribe(
      (data:any) =>{
        this.vehicles = data;
      },
      (err:any) =>{
        alert("internal server error")
      }
    )
  }
  delete(id:string){
    this._vechileService.deleteVechiles(id).subscribe(
      (data:any) =>{
        alert("Deleted Successfully!!!");
        location.reload();
      },
      (err:any) =>{
        alert("internal server error")
      }
    )
  }
  pagination(){
    this._vechileService.getPagedVechiles(this.limit, this.page).subscribe(
      (data:any) =>{
        this.vehicles =data;
      },
      (err:any) =>{
        alert("internal server error")
      }
    )
  }
  

}
