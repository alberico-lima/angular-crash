import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  isFavorite: boolean;

  constructor() {
    this.isFavorite = false;
   }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
  }

}
