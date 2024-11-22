import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

 constructor(private _httpClient:HttpClient){}

getApplicationsService():Observable<any>{
  return this._httpClient.get("https://dummyapi.online/api/blogposts")
}

}
