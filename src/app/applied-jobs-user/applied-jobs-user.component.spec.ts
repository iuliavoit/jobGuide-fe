import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedJobsUserComponent } from './applied-jobs-user.component';

describe('AppliedJobsUserComponent', () => {
  let component: AppliedJobsUserComponent;
  let fixture: ComponentFixture<AppliedJobsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedJobsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedJobsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
