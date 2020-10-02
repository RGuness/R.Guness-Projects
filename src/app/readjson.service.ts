import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import {map} from 'rxjs/operators';
import  Movie  from '../app/dto/movie';
import { Observable } from 'rxjs';


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
 

  private _movieList: Movie[];
  private _movie: Movie;


  get movieList(): Movie[] {
    return this._movieList;
  }

  get movie(): Movie {
    return this._movie;
  }
 
getMovieUpcoming(): Observable<any>{ 
  this._movieList = [];
  return this._http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
    .pipe(map((data: any) => {
      if (data != null) {
        data.results.forEach(element => {
          console.log(element);
          const movie: Movie = new Movie();
          movie.id = element.id;
          movie.title = element.original_title;
          movie.contentRating = element.vote_average;
          movie.imageUrl = element.poster_path;
          this._movieList.push(movie);
        });
      }
    }));
}

getMoviePopular(): Observable<any> {
  this._movieList = [];
  return this._http.get(`https://api.themoviedb.org/3/movie/popular?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
    .pipe(map((data: any) => {
      if (data != null) {
        console.log(data);
        data.results.forEach(element => {
          console.log(element);
          const movie: Movie = new Movie();
          movie.id = element.id;
          movie.title = element.original_title;
          movie.contentRating = element.vote_average;
          movie.imageUrl = element.poster_path;
          this._movieList.push(movie);
        });
      }
    }));
}

fetchMovieById(id: any): Observable<any> {
  this._movie = new Movie();
  return this._http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
    .pipe(map((data: any) => {
      console.log(data);
      if (data != null) {
        const movie: Movie = new Movie();
        movie.id = data.id;
        movie.title = data.original_title;
        movie.imageUrl = data.poster_path;
        movie.overview = data.overview;
        this._movie = movie;
      }
    }));
}




}



