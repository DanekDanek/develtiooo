import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchPhrase$: Subject<string> = new Subject()
  url: string = 'https://api.github.com/search/repositories'

  constructor(private http: HttpClient) { }

  search(phrase: string): Observable<any> {
    return this.http.get(`${this.url}?q=${phrase}`)
  }
}
