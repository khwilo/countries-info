import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faChevronDown,
  faLongArrowAltLeft
} from '@fortawesome/free-solid-svg-icons';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

@NgModule({
  declarations: [CountriesComponent, CountryDetailComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule {
  constructor() {
    library.add(faChevronDown, faSearch, faLongArrowAltLeft);
  }
}
