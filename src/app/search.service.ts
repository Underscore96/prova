import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  
  get searchTerm$(): Observable<string> {
    return this.searchTermSubject.asObservable();
    
  }
  

  setSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
    console.log(this.searchTerm$)

  }


}
