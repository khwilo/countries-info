import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const BASE_COUNTRIES_API_URL = 'https://restcountries.eu/rest/v2/all';
const BASE_COUNTRIES_REGION_API_URL =
  'https://restcountries.eu/rest/v2/region/';
const BASE_COUNTRY_CODE_API_URL = 'https://restcountries.eu/rest/v2/alpha/';

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {
  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http
      .get(BASE_COUNTRIES_API_URL)
      .pipe(catchError(this.handleError));
  }

  getCountriesByRegion(region: string) {
    return this.http
      .get(`${BASE_COUNTRIES_REGION_API_URL}${region}`)
      .pipe(catchError(this.handleError));
  }

  getCountryByCode(code: string) {
    return this.http
      .get(`${BASE_COUNTRY_CODE_API_URL}${code}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Server responded with status ${error.status} and the message: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
