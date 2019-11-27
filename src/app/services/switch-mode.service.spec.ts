import { TestBed } from '@angular/core/testing';

import { SwitchModeService } from './switch-mode.service';

describe('SwitchModeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwitchModeService = TestBed.get(SwitchModeService);
    expect(service).toBeTruthy();
  });
});
