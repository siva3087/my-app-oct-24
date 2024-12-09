import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { bankService } from '../bank.service';

@Component({
  selector: 'app-createbank',
  templateUrl: './createbank.component.html',
  styleUrls: ['./createbank.component.css']
})
export class CreatebankComponent {

  constructor(public _bankService: bankService) { }

  createbankForm: FormGroup = new FormGroup(
    {
      account_name: new FormControl(),
      available_balance: new FormControl(),
      account_number: new FormControl(),
      city: new FormControl(),
      profie_picture: new FormControl(),
    }
  )
  add() {
    this._bankService.createaccounts(this.createbankForm.value).subscribe(
      (data: any) => {
        alert("Create Bank Succesfully");
      },
      (err: any) => {
        alert("internal Server Error");
      }
    )
  }
}
