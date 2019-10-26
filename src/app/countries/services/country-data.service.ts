import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const API_URL = 'https://restcountries.eu/rest/v2/all';

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {
  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get(API_URL).pipe(catchError(this.handleError));
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
