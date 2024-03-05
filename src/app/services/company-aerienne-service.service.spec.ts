import { TestBed } from '@angular/core/testing';

import { CompanyAerienneServiceService } from './company-aerienne-service.service';

describe('CompanyAerienneServiceService', () => {
  let service: CompanyAerienneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyAerienneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
