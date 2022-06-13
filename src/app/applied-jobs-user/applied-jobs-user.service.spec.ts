import { TestBed } from '@angular/core/testing';

import { AppliedJobsUserService } from './applied-jobs-user.service';

describe('AppliedJobsUserService', () => {
  let service: AppliedJobsUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppliedJobsUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
