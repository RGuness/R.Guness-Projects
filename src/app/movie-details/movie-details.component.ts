import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ReadjsonService } from '../readjson.service';
import  Movie  from '../dto/movie';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieId: any;
  movie: Movie;

  constructor(private _route: ActivatedRoute, private  _ReadjsonService: ReadjsonService) {
    this.movie = new Movie();
    this.movieId = this._route.snapshot.paramMap.get('id');
    console.log(this.movieId);
    this.getMovieById();
  }

  ngOnInit(): void {
  }

  getMovieById() {
    this._ReadjsonService.fetchMovieById(this.movieId).subscribe(() => {
      this.movie = this._ReadjsonService.movie;
    });
  }

}
