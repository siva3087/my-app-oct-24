import { Component } from '@angular/core';

@Component({
  selector: 'app-empolyees',
  templateUrl: './empolyees.component.html',
  styleUrls: ['./empolyees.component.css']
})
export class EmpolyeesComponent {

  empname:string = '';
  role:string = '';
  employees:any =[]

  add(){
    let employee ={
      name:this.empname,
      role:this.role
    }
    this.employees.push(employee);
  }

}
