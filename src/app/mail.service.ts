import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _httpCleint:HttpClient) { }
  getMails():Observable<any>{
    return this._httpCleint.get("https://jsonplaceholder.typicode.com/todos")
  }
}
