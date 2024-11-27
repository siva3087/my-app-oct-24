import { Component } from '@angular/core';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  applications:any =[];
  

  constructor(private _applicationService:ApplicationService){
    _applicationService.getApplicationsService().subscribe(
      (data:any) =>{
        this.applications = data;
        console.log(this.applications)
      },
      (err:any) =>{
        alert("internal server error")
      }
    )
    }
  }
 

