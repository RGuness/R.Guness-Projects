import { Component,OnInit } from '@angular/core';
import {ReadjsonService} from '../app/readjson.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'movie-app-RGuness';
  // value2=" " ; 
  // movielist:any[];
  // filteredList:any[];

 
    constructor() {
      //this.movielist = [];
      //this.getData();
    }

    ngOnInit(){
      //this.getData();
    }

  // showSelected(event){
  //   console.log(event);

  // }

  // getsearchterm(value){
  //   console.log(value);
  //     this.value2=value ;

  //     console.log(this.movielist);
  //     if (value.length > 0) {
  //       this.filteredList = this.movielist.filter(movie => {
  //         return (movie.title.toLowerCase().indexOf(value.toLowerCase()) >= 0);
  //       });
  //     } else {
    
  //       this.filteredList = this.movielist;
  //     }
  // }

  // //GET FROM JSON FILE
  // getData() {
  //   this.readjsonService.read_data().subscribe((data: any) => {
  //     this.movielist = data;
  //   });
  // }
}


