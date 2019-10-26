import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';

@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule {
  constructor() {
    library.add(faChevronDown, faSearch);
  }
}
