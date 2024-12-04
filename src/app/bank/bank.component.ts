import { Component } from '@angular/core';
import { bankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {

  accounts:any = [];
  term:string = "";
  column:string ="";
  order:string ="";
  limit:number = 0;
  page:number =0;

  constructor(private _bankService:bankService){
    _bankService.getAccounts().subscribe(
      (data:any) =>{
        this.accounts = data;
      },
      (err:any) =>{
        alert("internal server error")
      }
    )
  }
  filter(){
    this._bankService.getfilteredAccounts(this.term).subscribe(
      (data:any) =>{
        this.accounts = data;
      },
      (err:any) =>{
        alert("internal server error")
      }
    )
  }
  sort(){
    this._bankService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any) =>{
        this.accounts = data;
      },
      (err:any) =>{
        alert("internal server error")
      }
    )
  }
  pagination(){
    this._bankService.getPagedAccounts(this.limit,this.page).subscribe(
      (data:any) =>{
        this.accounts = data;
      },
      (err:any) =>{
        alert("internal server error")
      }
    )
  }
  delete(id:string){
    
    this._bankService.deletedaccount(id).subscribe(
      (data:any)=>{
    alert('Deleted Successfully!!!');
    location.reload();
      },
      (err:any)=>{
        alert('internal server Error');
      }
    )

  }

}
