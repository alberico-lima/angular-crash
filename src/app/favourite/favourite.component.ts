import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input() isFavorite: boolean;

  constructor() {

   }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
  }

}
