import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class bankService {

  constructor(private _httpClient:HttpClient) { }

  getAccounts():Observable<any>{

    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }
  createaccounts(data:any):Observable<any>{

    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
  }
  getfilteredAccounts(term:string):Observable<any>{

    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }
  getSortedAccounts(column:string, order:string):Observable<any>{

    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
  }
  getPagedAccounts(limit:number,page:number):Observable<any>{

    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+page);
  }
  deletedaccount(id:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }
  }

