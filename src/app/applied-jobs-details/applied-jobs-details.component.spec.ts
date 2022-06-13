import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedJobsDetailsComponent } from './applied-jobs-details.component';

describe('AppliedJobsDetailsComponent', () => {
  let component: AppliedJobsDetailsComponent;
  let fixture: ComponentFixture<AppliedJobsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedJobsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedJobsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
