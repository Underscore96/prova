import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MusicGenreComponent } from "./music-genre/music-genre.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login/login.component";
import { FavoriteComponent } from './favorite/favorite.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, HomeComponent, MusicGenreComponent, NavBarComponent, LoginComponent, FavoriteComponent]
})
export class AppComponent {
  title = 'prova';
  constructor(private router: Router)   {}
}
