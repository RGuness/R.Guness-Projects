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
    return this._http.get("./assets/movies.json");
  }
 

getMovieUpcoming(){
  return this._http.get( 'https://api.themoviedb.org/3/movie/upcoming/api_key=fed69657ba4cc6e1078d2a6a95f51c8c');
}

getMoviePopular(){
  return this._http.get('https://api.themoviedb.org/3/movie/popular/api_key=fed69657ba4cc6e1078d2a6a95f51c8c');
}

}



