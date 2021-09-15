import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onInput(event: Event): void {
    const searchPhrase = (event.target as HTMLInputElement).value
    this.searchService.searchPhrase$.next(searchPhrase)
  }

}
