import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedJobsCardComponent } from './applied-jobs-card.component';

describe('AppliedJobsCardComponent', () => {
  let component: AppliedJobsCardComponent;
  let fixture: ComponentFixture<AppliedJobsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedJobsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedJobsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
