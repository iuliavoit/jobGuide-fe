import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../models/job";

@Component({
  selector: 'app-applied-jobs-card',
  templateUrl: './applied-jobs-card.component.html',
  styleUrls: ['./applied-jobs-card.component.css']
})
export class AppliedJobsCardComponent implements OnInit {

  @Input()
  recievedJob: Job;
  showDetailsDialog: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  displayDetails() {
    this.showDetailsDialog = true;
  }

  onPopupClosed($event: any) {
    this.showDetailsDialog = false;
  }

}
