import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-left-side-options',
  templateUrl: './left-side-options.component.html',
  styleUrls: ['./left-side-options.component.css']
})
export class LeftSideOptionsComponent implements OnInit {

  nameSelected: string;

  @Output() newMenuEvent = new EventEmitter <string>();

  menus: any[];
  @Output() selectedMenu = new EventEmitter <number>();

  constructor(private _router: Router, private _route: ActivatedRoute) { 

    this.nameSelected = "";

    this.menus = [{id: 0, name: 'Upcoming Movies'}, {id: 1, name: 'Popular Movies'}];
    this.selectedMenu = new EventEmitter<number>();
  }
  
  ngOnInit(): void {
      // this.routes.paramMap.subscribe(params =>{
      //   this.selectedMenu=params.get('sel');
      // });

  }

  selectMenu(id: number) {
    this.selectedMenu.emit(id);

    console.log(this._router.url)

    if (id=0){
      this._router.navigateByUrl('/upcoming')
    }
      else{
        this._router.navigateByUrl('/popular')
      }
  }

  
  chosen(clicked: string){
    this.nameSelected = clicked;

    this.newMenuEvent.emit(this.nameSelected);
  }

}
