import { TestBed } from '@angular/core/testing';

import { CountryDataService } from './country-data.service';

describe('CountryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryDataService = TestBed.get(CountryDataService);
    expect(service).toBeTruthy();
  });
});
