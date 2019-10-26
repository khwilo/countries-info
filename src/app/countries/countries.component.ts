import { Component, OnInit } from '@angular/core';

import { CountryDataService } from './services/country-data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: any[];
  searchPlaceHolder = 'Search for a country...';
  filterByLabel = 'Filter by Region';

  regions: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  constructor(private countryDataService: CountryDataService) {}

  ngOnInit() {
    this.countryDataService.getAllCountries().subscribe((data: any[]) => {
      console.log(data);
      this.countries = data;
    });
  }

  openSelection() {
    const options = document.getElementById('region-names');
    options.classList.toggle('is-open');
  }
}
