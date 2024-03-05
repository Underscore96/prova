import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {

  @Output() ratingChange = new EventEmitter<{ rating: number }>(); 

  @Input() rating: any;

  faStar = faStar;




  constructor(private http: HttpClient) {}

  setRating(value: number) {
    this.rating = value;
    this.ratingChange.emit({ rating: value });
  }


}
