import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() newMenuEvent = new EventEmitter <string>();

   @Output() sendvalue = new EventEmitter <string>();

  popup: boolean;

  constructor() { }

  ngOnInit(): void {
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
 
}


