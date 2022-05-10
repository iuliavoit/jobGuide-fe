import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsUserComponent } from './jobs-user.component';

describe('JobsUserComponent', () => {
  let component: JobsUserComponent;
  let fixture: ComponentFixture<JobsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
