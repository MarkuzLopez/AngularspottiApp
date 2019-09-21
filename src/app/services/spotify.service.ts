import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient ) { }

  getQueries(query: any) {
    let urlApi = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': 'Bearer BQBexM2J_vkcldC95x4s4S_SgBj_zp5emLOkrgheJiQ7eN6ujYLeK43kzkP70wBxA2Y1PZAEY4vtjx8ScoQ'
    });
    return  this.http.get(urlApi, {headers});
  }

  getCountry() {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es');
  }

  getNewReleases() {
    return this.getQueries('browse/new-releases');
    // const headers = new HttpHeaders({
    //     // tslint:disable-next-line: object-literal-key-quotes
    //     'Authorization': 'Bearer BQBiQqSpeQvaDhXBSuONT4fbjgtBWtlU-I2ozLEnwk0_mI0EfrNV8HaY7V-MqfB0URfBkZ8kFXQPnfdK27Y'
    // });
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  searchArtist(artist: any) {
    return this.getQueries(`search?q=${artist}&type=artist&limit=10`);
  }

  getOneArtist(id: string) {
    console.log(id);
    return this.getQueries(`artists/${id}`);
  }

  getOneArtistTopTracks(id: string) {
    // https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V/top-tracks?country=ES
    return this.getQueries(`artists/${id}/top-tracks?country=ES`);
  }

}
