import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  inputs: ['isFavorite']
})
export class FavouriteComponent implements OnInit {

 @Input('isFavorite') isFavorite: boolean;

  constructor() {

   }

@Output() change = new EventEmitter   

  ngOnInit(): void {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }

}
