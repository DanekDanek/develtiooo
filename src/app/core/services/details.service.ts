import { Injectable } from '@angular/core';
import { IRepository } from 'src/app/features/search/model/search-results.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor() { }

  getDetails(id: string) {
    const storageData = sessionStorage.getItem('repoData')
    if (typeof storageData === 'string') return JSON.parse(storageData)
  }

  saveDetails(data: Array<IRepository>): void {
    sessionStorage.setItem('repoData', JSON.stringify(data));
  }
}
