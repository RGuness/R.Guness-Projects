import { Component, OnInit } from '@angular/core';
import { ReadjsonService } from '../readjson.service';
import  Movie  from '../dto/movie';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];

  constructor(private _ReadjsonService: ReadjsonService, private _router: Router, private _route: ActivatedRoute) {
    // this.getUpcomingMovies();
    if (this._router.url.startsWith('/upcoming')) {
      this.getUpcomingMovies();
    } else {
      this.getPopularMovies();
    }
  }

  ngOnInit() {
    // this.getUpcomingMovies();
    if (this._router.url.startsWith('/upcoming')) {
      this.getUpcomingMovies();
    } else {
      this.getPopularMovies();
    }
  }

  getBackground(photo: string) {
    return {
      'background': `url("https://image.tmdb.org/t/p/w300${photo}") center center no-repeat`,
      'height': '100px',
      'width': '150px',
    };
  }

  getUpcomingMovies() {
    this._ReadjsonService.getMovieUpcoming().subscribe(() => {
      this.movies = this._ReadjsonService.movieList;
    });
  }

  getPopularMovies() {
    this._ReadjsonService.getMoviePopular().subscribe(() => {
      this.movies = this._ReadjsonService.movieList;
    });
  }

  viewDetails(movie: Movie) {
    this._router.navigate([this._router.url, movie.id])
      .then(() => {
      });
  }
}
