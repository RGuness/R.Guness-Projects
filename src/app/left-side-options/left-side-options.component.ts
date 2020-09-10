import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-left-side-options',
  templateUrl: './left-side-options.component.html',
  styleUrls: ['./left-side-options.component.css']
})
export class LeftSideOptionsComponent implements OnInit {

  nameSelected: string;

  @Output() newMenuEvent = new EventEmitter <string>();

  constructor() { 

    this.nameSelected = "";
  }
  

  ngOnInit(): void {
  }


  chosen(clicked: string){
    this.nameSelected = clicked;
    this.newMenuEvent.emit(this.nameSelected);
  }

}
