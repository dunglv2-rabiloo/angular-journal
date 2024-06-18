import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CatFact {
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private http: HttpClient) {}

  fetchFacts(): Observable<CatFact[]> {
    return this.http.get<CatFact[]>(
      'https://api.quotable.io/quotes/random?limit=5&maxLength=30'
    );
  }
}
