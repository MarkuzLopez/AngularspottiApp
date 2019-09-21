import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists: any [] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
    // this.spotify.searchArtist().subscribe( resp => {
    //   console.log(resp);
    // });
  }

  search(word: any) {
    this.loading = true;
    this.spotify.searchArtist(word).subscribe( (resp: any) => {
      this.artists = resp.artists.items;
      this.loading = false;
    });
  }

}
