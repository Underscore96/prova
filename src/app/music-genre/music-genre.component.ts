import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../search.service';



@Component({
    selector: 'app-music-genre',
    standalone: true,
    templateUrl: './music-genre.component.html',
    styleUrl: './music-genre.component.scss',
    imports: [AppComponent, CommonModule, HttpClientModule, MatCardModule, DragDropModule, FontAwesomeModule, StarRatingComponent, NavBarComponent],
   
})

export class MusicGenreComponent implements OnInit{
 musicData: any;
 searchTerm: string = '';



    faPlayCircle = faPlayCircle;
    filteredData: any;

 constructor(private http: HttpClient, private searchService: SearchService)   {}

    ngOnInit(): void {
        this.fetchData();

        this.searchService.searchTerm$.subscribe(term => {
            this.searchTerm = term;
            this.filterData(this.searchTerm);
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

 drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.filteredData, event.previousIndex, event.currentIndex);
  }


  fetchData(): void {
    this.http.get<any[]>('https://65cb4acdefec34d9ed872da8.mockapi.io/musicartists')
        .subscribe(data => {
            this.musicData = data;
            this.filteredData = data.filter(artist => artist.favorite === false);

            if (this.searchTerm) {
                this.filterData(this.searchTerm);
            }
        });
  
    }

    filterData(term: string): void {
     if (!term || !this.musicData) {
        this.filteredData = [];
      } else {
        this.filteredData = this.musicData.filter((artist: { name: string}) =>
            artist.name.toLowerCase().includes(term.toLowerCase()) 
        );
     }
    }

}
