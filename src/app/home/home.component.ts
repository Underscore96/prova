import { Component } from '@angular/core';
import { AppComponent } from "../app.component";
import { Router } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { MusicGenreComponent } from '../music-genre/music-genre.component';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [AppComponent, NavBarComponent, MusicGenreComponent]
})
export class HomeComponent {
    constructor(private router: Router)   {}

}
