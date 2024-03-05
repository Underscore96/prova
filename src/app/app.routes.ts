import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicGenreComponent } from './music-genre/music-genre.component';
import { LoginComponent } from './login/login.component';
import { FavoriteComponent } from './favorite/favorite.component';

export const routes: Routes = [ 
{ path: '', redirectTo: '/login', pathMatch: 'full'},
{ path: 'login', component: LoginComponent }, 
{ path: 'favorite', component: FavoriteComponent },   
{ path: 'home', component: HomeComponent },
{ path: 'music-genre/:term', component: MusicGenreComponent },];
