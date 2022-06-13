import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Job} from "../models/job";
import {User} from "../models/user";
import {UserService} from "../_services/user.service";
import {JobServiceService} from "../job-details/job-service.service";

@Component({
  selector: 'app-applied-jobs-details',
  templateUrl: './applied-jobs-details.component.html',
  styleUrls: ['./applied-jobs-details.component.css']
})
export class AppliedJobsDetailsComponent implements OnInit {

  @Input()
  visible: boolean = false;
  @Input()
  job: Job;
  user: User;
  @Output()
  popupClosed = new EventEmitter();

  constructor(
    public userService: UserService,
  ) {}

  ngOnInit(): void {
  }

  closePopup() {
    this.popupClosed.emit();
  }

}
