import { TestBed } from '@angular/core/testing';

import { UsersArrayService } from './users-array.service';

describe('UsersArrayService', () => {
  let service: UsersArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
