import { Component, OnInit} from '@angular/core';
import { AppComponent } from "../app.component";
import {  Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../search.service';



@Component({
    selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss',
    imports: [AppComponent, FormsModule]
})
export class NavBarComponent implements OnInit {

    searchTerm: string = '';



  constructor(private route: Router, private searchService: SearchService)   {}

  ngOnInit(): void {
   
  }

  
  search() {
    console.log("Search term:", this.searchTerm); 
    this.searchService.setSearchTerm(this.searchTerm);
    this.route.navigate(['/music-genre', this.searchTerm]);
  }


}

