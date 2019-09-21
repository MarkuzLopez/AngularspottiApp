import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  conutry: any [] = [];
  albums: any[] = [];
  loading: boolean;
  err: boolean;
  messageError: any;
  constructor(private _services: SpotifyService ) {
    this.loading = true;
    this.err = false;
  }

  ngOnInit() {
    this._services.getNewReleases().subscribe((album: any) => {
        // console.log(album.albums.items);
        this.albums = album.albums.items;
        this.loading = false;
    }, (erroServiocio) => {
       this.loading = false;
       this.err = true;
       this.messageError = erroServiocio.error.error.message;
      //  console.log(erroServiocio.error.error.message);
    });
  }

}
