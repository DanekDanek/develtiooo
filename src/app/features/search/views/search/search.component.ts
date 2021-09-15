import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailsService } from 'src/app/core/services/details.service';
import { ISearchResults } from '../../model/search-results.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  phrase: string = ''
  searchPhraseSubscription: Subscription = new Subscription()
  searchResults!: ISearchResults

  constructor(private searchService: SearchService, private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.searchPhraseSubscription = this.searchService.searchPhrase$.subscribe((res: string) => this.phrase = res)
  }

  ngOnDestroy(): void {
    this.searchPhraseSubscription.unsubscribe()
  }

  onSearch(): void {
    this.searchService.search(this.phrase).subscribe((res: ISearchResults) => {
      console.log('search results: ', res);
      this.searchResults = res
      this.detailsService.saveDetails(res.items)
    })
  }

}
