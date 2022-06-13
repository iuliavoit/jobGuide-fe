import { Component, OnInit } from '@angular/core';
import {Job} from "../models/job";
import {HttpClient} from "@angular/common/http";
import {AppliedJobsUserService} from "./applied-jobs-user.service";

@Component({
  selector: 'app-applied-jobs-user',
  templateUrl: './applied-jobs-user.component.html',
  styleUrls: ['./applied-jobs-user.component.css']
})
export class AppliedJobsUserComponent implements OnInit {

  cities: string[]=[];
  jobTypes: string[]=[];
  jobs: Job[] = [];
  filteredJobs: Job[];
  selectedCity: string;
  selectedType: string;

  constructor(
    private http: HttpClient,
    private getJobsService: AppliedJobsUserService
  ) { }

  ngOnInit(): void {
    this.getAllJobs();

    console.log(this.cities);
    console.log(this.jobTypes);

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
