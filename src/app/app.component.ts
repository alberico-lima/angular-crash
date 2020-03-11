import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THE dawn of THE PLANET of the aPes';
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged (eventArgs) {
    console.log("Favorite has changed",eventArgs);
  }
}
