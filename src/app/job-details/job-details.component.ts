import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Job} from "../models/job";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  @Input()
  visible: boolean = false;
  @Input()
  job: Job;
  @Output()
  popupClosed = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  closePopup() {
    this.popupClosed.emit();
  }

  apply() {

    //call service for apply
  }
}
