import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../models/job";

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
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
