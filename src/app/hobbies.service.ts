import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {

  constructor(private _httpClient:HttpClient) { }

 getHobbies():Observable<any>{
  return this._httpClient.get("https://dummyapi.online/api/social-profiles")
 }
}
