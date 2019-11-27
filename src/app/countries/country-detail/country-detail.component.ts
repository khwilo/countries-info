import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountryDataService } from '../services/country-data.service';
import { SwitchModeService } from 'src/app/services/switch-mode.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country: any;

  constructor(
    private route: ActivatedRoute,
    private countryDataService: CountryDataService,
    private switchModeService: SwitchModeService
  ) {}

  isDarkModeOn$ = this.switchModeService.isDarkMode$;

  ngOnInit() {
    const routeParameter = this.route.snapshot.paramMap.get('code');
    const countryCode = routeParameter.toLowerCase();
    this.countryDataService.getCountryByCode(countryCode).subscribe(data => {
      this.country = data;
    });
  }
}
