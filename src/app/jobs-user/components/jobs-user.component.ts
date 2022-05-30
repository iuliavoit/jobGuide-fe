import { Component, OnInit } from '@angular/core';
import {Job} from "../../models/job";

@Component({
  selector: 'app-jobs-user',
  templateUrl: './jobs-user.component.html',
  styleUrls: ['./jobs-user.component.css']
})
export class JobsUserComponent implements OnInit {
  cities: string[]=[];
  jobTypes: string[]=[];
  jobs: Job[];
  filteredJobs: Job[];
  selectedCity: string;
  selectedType: string;
  constructor() {

  }

  ngOnInit(): void {
    this.jobs=[{title:'job xyz 1',type:'Part-time',date:new Date(),city: 'Timisoara',employerName:'abc',description:'xyz',nrOfCandidates:20},
      {title:'job nr 2',type:'Full-time',date:new Date(),city:'Bucuresti',employerName:'ddd',description:'as',nrOfCandidates:2},
      {title:'job nr 3 bla',type:'Part-time',date:new Date(),city:'Cluj-Napoca',employerName:'m',description:'xd',nrOfCandidates:5}
    ]
    this.jobs.forEach(job=>{if(!this.cities.includes(job.city)) this.cities.push(job.city)});
    this.jobs.forEach(job=>{if(!this.jobTypes.includes(job.type)) this.jobTypes.push(job.type)});
    this.filteredJobs=this.jobs;
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
