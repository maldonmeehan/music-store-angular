import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';


@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
  <div class='container'>
    <h1>Album List</h1>
    <album-list
      [albumList]="albums"
      (onAlbumSelect)="albumWasSelected($event)">
    </album-list>
  </div>
  `
})

export class AppComponent {
  public album: Album[];
  constructor(){
    this.album = [
      new Album('Second Story', 'Open House', 15, 'folk', 0),
    ];
  }
  albumWasSelected(clickedAlbum: Album): void {
    console.log('parent', clickedAlbum);
  }
}
