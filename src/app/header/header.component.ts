import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() newMenuEvent = new EventEmitter <string>();

   @Output() sendvalue = new EventEmitter <string>();


   menus: any[];
   @Output() selectedMenu = new EventEmitter <number>();


  popup: boolean;

  constructor() { 
    this.menus = [{id: 0, name: 'Upcoming Movies'}, {id: 1, name: 'Popular Movies'}];
    this.selectedMenu = new EventEmitter<number>();

  }

  ngOnInit(): void {
  }

  selectMenu(id: number) {
    this.selectedMenu.emit(id);
  }

  popUpToggle(){
    this.popup = !this.popup;
  }

  showSelected(event){
    this.newMenuEvent.emit(event);
  }

  getsearchterm(value){
    this.sendvalue.emit(value);
  }

  // getapi(apivalue:string){
  // this.sendvalue.emit(apivalue);

  //     }

  
  }




