import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  styles: [
    `
    .glyphicon{
      color: green;
  }    
    `
  ]
})

export class FavouriteComponent {

    @Input('isFavorite') isFavorite: boolean;
    @Output() change = new EventEmitter   
      
    onClick(){
      this.isFavorite = !this.isFavorite;
      this.change.emit({newValeu: this.isFavorite});
    }

}
