import { Component, OnInit,Input } from '@angular/core';
import { ReadjsonService } from '../readjson.service';
import { HttpClient } from '@angular/common/http';
import  Movie  from '../dto/movie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  selectedName: string = "";
  searchselected:string=" ";

  @Input('searchValue') searchValue: string;

  @Input('searchValue2') searchValue2: string;

  @Input() genreSelected: string = "";

  @Input() filtered: any[];

  listNewReleases: any[];
  
  movielist:any ;

  constructor(private http : HttpClient, private _router: Router) {
    
   }

  ngOnInit(): void {
    this.http.get("./assets/movies.json").subscribe((data) => this.displaydata(data));
    

    this.listNewReleases =
      [{id: 0, name: 'The Wailing', rating: 7.9, poster: "/assets/images/thewailing.jfif", movietype: 'Mysterey,Thriller'},
      {id: 1, name: 'Warcraft', rating: 8.1, poster: "/assets/images/warcraft.jpg", movietype:'Action,Adventure,Fantasy'},
      {id: 2, name: 'The Space Between Us', rating: 6.8, poster: "/assets/images/thespace.jpg", movietype:'Adventure,Drama,Sci-Fi'},
      {id: 3, name: 'The Witch', rating: 6.7, poster: "/assets/images/thewitch.jpg", movietype:'Horror,Mistery'},
      {id: 4, name: 'The Shallows', rating: 7.1, poster: "/assets/images/theshallows.jpg", movietype:'Drama,Horror,Thriller'},
      {id: 5, name: 'X-Men Apocalypse', rating: 7.8, poster: "/assets/images/xmen.jpg", movietype:'Action,Adventure,Sci-Fi'},
      {id: 6, name: 'Me Before You', rating: 5.9, poster: "/assets/images/mebeforeyou.jpg", movietype:'Action,Comedy,Thriller'},
      {id: 7, name: 'Now You See Me 2', rating: 6.2, poster: "/assets/images/nowyouseeme.jpg", movietype:'Drama,Romance'},
      {id: 8, name: 'The Fits', rating: 7.0, poster: "/assets/images/thefits.jfif", movietype:'Drama'},
      {id: 9, name: 'Money Monster', rating: 6.8, poster: "/assets/images/moneymonster.jpg", movietype:'Crime,Drama,Thriller'}];
    
  }

  showSelected(newMenu: string) {
    this.selectedName = newMenu;
    this.filtered = this.movielist.filter(movie => {
      return (movie.genres.includes(newMenu));
    });
  }


  showupcoming(id:number){
    console.log(id);
    if (id === 0) {
      this._router.navigateByUrl('/upcoming').then(() => {
      });
    } else {
      this._router.navigateByUrl('/popular').then(() => {
      });
    }
  }

  displaydata(data){
    this.movielist=data;
  }

  oldGenre: string = "";
  getListMovieOfGenre(){
    if(this.oldGenre != this.genreSelected){
      this.oldGenre = this.genreSelected;
      this.ratingSelected = "All";
      // console.log(this.oldGenre);
    } else {
      //Do nothing
    }
    let listMovieOfGenre: Movie[] = [];
    for (let entry of this.movielist) {
      if(entry.genres.includes(this.genreSelected)){
        listMovieOfGenre.push(entry);
      }
    }
    return listMovieOfGenre;
  }

  public RatingStatus = {ratingSelected: "", movieByRatingList: []};
  ratingSelected: string;
  movieByRatingList: Movie[];

  changeRating(data){
    this.RatingStatus = data;
    this.ratingSelected = this.RatingStatus.ratingSelected;
    this.movieByRatingList = this.RatingStatus.movieByRatingList;
    console.log(this.ratingSelected);
  }
}


