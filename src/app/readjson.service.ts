import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;


@Injectable({
  providedIn: 'root'
})
export class ReadjsonService {

  public _http:HttpClient;
  
  constructor(http:HttpClient) {
    this._http=http;
  }

  read_data(){
    return this._http.get("./assets/data.json");
  }
 
}
