import { Component, Input, OnInit } from '@angular/core';
import { ISearchResults } from '../../model/search-results.model';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit {
  @Input() repositories!: ISearchResults;

  constructor() { }

  ngOnInit(): void {
  }

}
