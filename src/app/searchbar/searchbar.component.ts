import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {movies} from './movies'


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Output() searchEvent = new EventEmitter();
  

  movies: movies []=[];

  constructor() { 
  
  }

  ngOnInit(): void {
  }

  search(event:any){
    this.searchEvent.emit(event.target.value);
  }
}
