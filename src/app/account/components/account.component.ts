import { Component, OnInit } from '@angular/core';
import {Job} from "../../models/job";

@Component({
  selector: 'app-components',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  cities: string[]=[];
  jobTypes: string[]=[];
  jobs: Job[];
  filteredJobs: Job[];
  selectedCity: string;
  selectedType: string;

  constructor() { }

  ngOnInit(): void {

    this.jobs.forEach(job=>{if(!this.cities.includes(job.city)) this.cities.push(job.city)});
    this.jobs.forEach(job=>{if(!this.jobTypes.includes(job.type)) this.jobTypes.push(job.type)});
    this.filteredJobs=this.jobs;
  }

  recievedJob: Job;
  showDetailsDialog: boolean = false;

  displayDetails() {
    this.showDetailsDialog = true;
  }

  onPopupClosed($event: any) {
    this.showDetailsDialog = false;
  }

  filterJobsByCity() {
    if(this.selectedCity.length===0) {
      this.filteredJobs=this.jobs;
    }else {
      this.filteredJobs=this.jobs.filter(job=>this.selectedCity.includes(job.city));
    }
  }

  filterJobsByType() {
    if(this.selectedType.length===0) {
      this.filteredJobs=this.jobs;
    }else {
      this.filteredJobs=this.jobs.filter(job=>this.selectedType.includes(job.type));
    }
  }
}
