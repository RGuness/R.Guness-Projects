import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  selectedName: string = "";

  listNewReleases: any[];

  constructor() { }

  ngOnInit(): void {

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
  }
}
