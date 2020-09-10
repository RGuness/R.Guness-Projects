import { Component, OnInit,EventEmitter ,Output,Input} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  @Input() popUpStatus: boolean;
  @Output() newPopUpEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  checkpopup(){
    this.popUpStatus = false;
    this.newPopUpEvent.emit(this.popUpStatus);
  }

}
