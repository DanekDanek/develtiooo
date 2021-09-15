import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './views/search/search.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { SearchResultListComponent } from './components/search-result-list/search-result-list.component';
import { SearchRoutingModule } from './search-routing.module';
import { ButtonComponent } from 'src/app/core/components/button/button.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SearchComponent,
    SearchFieldComponent,
    SearchResultListComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    HttpClientModule
  ]
})
export class SearchModule { }
