import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


 

export class AppComponent {
  title = 'movie-app-RGuness';
    value2=" " ; 
 
  showSelected(event){
    console.log(event);

  }

  getsearchterm(value){
      this.value2=value ;
  }
}


