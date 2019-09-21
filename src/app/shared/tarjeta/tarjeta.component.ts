import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() items: any [] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getArtistId(item: any) {
      let idArtist: any;
      if (item.type === 'artist') {
         idArtist = item.id;
      } else {
        idArtist = item.artists[0].id;
      }
      this.router.navigate(['/artist', idArtist]);
  }

}
