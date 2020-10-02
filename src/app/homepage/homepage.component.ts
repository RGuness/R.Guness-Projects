import { Component, OnInit } from '@angular/core';
import {ReadjsonService} from '../readjson.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = 'movie-app-RGuness';
  value2=" " ; 
  movielist:any[];
  filteredList:any[];


  constructor(private  readjsonService: ReadjsonService) {
    this.movielist = [];
      this.getData();
   }

   ngOnInit(){
    this.getData();
  }

showSelected(event){
  console.log(event);

}

getsearchterm(value){
  console.log(value);
    this.value2=value ;

    console.log(this.movielist);
    if (value.length > 0) {
      this.filteredList = this.movielist.filter(movie => {
        return (movie.title.toLowerCase().indexOf(value.toLowerCase()) >= 0);
      });
    } else {
  
      this.filteredList = this.movielist;
    }
}

//GET FROM JSON FILE
getData() {
  this.readjsonService.read_data().subscribe((data: any) => {
    this.movielist = data;
  });
}
}



