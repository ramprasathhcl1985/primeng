import { TestBed } from '@angular/core/testing';

import { PrimeNgService } from './prime-ng.service';

describe('PrimeNgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimeNgService = TestBed.get(PrimeNgService);
    expect(service).toBeTruthy();
  });
});
