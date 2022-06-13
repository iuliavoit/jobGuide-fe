import { TestBed } from '@angular/core/testing';

import { JobsUserService } from './jobs-user.service';

describe('JobsUserService', () => {
  let service: JobsUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
