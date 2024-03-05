
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AritistService {

  apiUrl: string = 'https://65cb4acdefec34d9ed872da8.mockapi.io/musicartists';


  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get(this.apiUrl);
  }


  addFavoriteArtist(artistName: string, artistSong: string, artistRating: number) {
    const newArtist = { name: artistName, favorite: true, song: artistSong, rating: artistRating };
    return this.http.post(this.apiUrl, newArtist);
  }

  removeFavoriteArtist(artistId: number) {
    const url = `${this.apiUrl}/${artistId}`;
    return this.http.delete(url);
  }

  


}
