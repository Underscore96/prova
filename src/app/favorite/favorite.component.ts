import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AritistService } from '../aritist.service';
import { Router } from '@angular/router';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
    selector: 'app-favorite',
    standalone: true,
    templateUrl: './favorite.component.html',
    styleUrl: './favorite.component.scss',
    imports: [NavBarComponent, ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule, StarRatingComponent],
    providers: [AritistService],
})

export class FavoriteComponent implements OnInit{


    favoriteArtists: any[] = [];
    newArtistName: string = '';
    newSongTitle: string = '';
    index: any;
    addModal: any;
    newRating: any;
    imageUrl: string = 'https://pngimg.com/uploads/music_notes/music_notes_PNG36.png';
  
    constructor( private router: Router, private artistService: AritistService, private http: HttpClient) {}
  
    
    ngOnInit(): void {
      this.fetchFavoriteArtists();
      
    }
  
    fetchFavoriteArtists() {
      this.artistService.getArtists().subscribe((artists: any) => {
        this.favoriteArtists = artists.filter((artist: { favorite: boolean; }) => artist.favorite === true);
      });
    }
  
    addArtist() {
      this.artistService.addFavoriteArtist(this.newArtistName, this.newSongTitle, this.newRating).subscribe(() => {
        this.fetchFavoriteArtists(); 
        this.newArtistName = ''; 
        this.newSongTitle = '';
        this.newRating = '';
      });
    }

    removeArtist(index: number) {
        this.artistService.removeFavoriteArtist(this.favoriteArtists[index].id).subscribe(() => {
          this.favoriteArtists.splice(index, 1);
        });
      }

      updateRating(artist: any, rating: number) {
        artist.rating = rating;
        const artistId = artist.id;
      
        this.http.put<any>(`https://65cb4acdefec34d9ed872da8.mockapi.io/musicartists/${artistId}`, { rating })
          .subscribe(response => {
            console.log('Rating ok:', response);
          }, error => {
            console.error('non funziona:', error);
          });
      }

   
  }
