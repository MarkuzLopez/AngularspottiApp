import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  id: string;
  artista: any;
  topTracks: any[] = [];
  constructor(private activated: ActivatedRoute, private spotify: SpotifyService) {
    this.activated.params.subscribe( resp => {
        this.id = resp.id;
    });
  }

  ngOnInit() {
    this.getArtista(this.id);
    this.getTopTracks(this.id);
  }

  getArtista(id: string) {
     this.spotify.getOneArtist(this.id).subscribe( (resp: any) => {
     this.artista = resp;
   });
  }
  getTopTracks(id: string) {
      this.spotify.getOneArtistTopTracks(id).subscribe((resp: any) => {
        console.log(resp.tracks);
        this.topTracks = resp.tracks;
      });
  }

}
