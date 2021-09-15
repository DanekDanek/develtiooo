import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/core/services/details.service';
import { IRepository } from 'src/app/features/search/model/search-results.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  repoId: any
  repoData: any
  details: any

  constructor(private route: ActivatedRoute, private detailsService: DetailsService) {
    this.repoId = this.route.snapshot.queryParamMap.get('id');
    this.repoData = this.detailsService.getDetails(this.repoId)
  }

  ngOnInit(): void {
    this.details = this.repoData.find((el: IRepository) => el.id == this.repoId)
  }

}
