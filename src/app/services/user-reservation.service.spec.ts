import { TestBed } from '@angular/core/testing';

import { UserReservationService } from './user-reservation.service';

describe('UserReservationService', () => {
  let service: UserReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
