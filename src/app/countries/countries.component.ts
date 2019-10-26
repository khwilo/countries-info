import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  searchPlaceHolder = 'Search for a country...';
  filterByLabel = 'Filter by Region';

  constructor() {}

  ngOnInit() {}

  openSelection() {
    const options = document.getElementById('region-names');
    options.classList.toggle('is-open');
  }
}
