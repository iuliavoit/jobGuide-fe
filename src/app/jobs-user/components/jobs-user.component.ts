import { Component, OnInit } from '@angular/core';
import {Job} from "../../models/job";
import {HttpClient} from "@angular/common/http";
import {JobsUserService} from "../jobs-user.service";

@Component({
  selector: 'app-jobs-user',
  templateUrl: './jobs-user.component.html',
  styleUrls: ['./jobs-user.component.css']
})
export class JobsUserComponent implements OnInit {

  cities: string[]=[];
  jobTypes: string[]=[];
  jobs: Job[] = [];
  filteredJobs: Job[];
  selectedCity: string;
  selectedType: string;

  constructor(
    private http: HttpClient,
    private getJobsService: JobsUserService
  ) { }

  ngOnInit(): void {
    this.getAllJobs();

    console.log(this.cities);
    console.log(this.jobTypes);

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

  getAllJobs() {
    this.getJobsService.getAllJobs().subscribe(
        res => {
          this.jobs=res;
          this.jobs.forEach(job=>{if(!this.cities.includes(job.city)) this.cities.push(job.city)});
          this.jobs.forEach(job=>{if(!this.jobTypes.includes(job.type)) this.jobTypes.push(job.type)});
          this.filteredJobs=this.jobs;
        },
        err => {
          alert("Error")
        }
      )
  }
}

