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
  selectedCity: string;
  selectedType: string;
  constructor() {

  }

  ngOnInit(): void {
    this.jobs=[{title:'job xyz 1',type:'Part-time',date:new Date(),city: 'timisoara',employerName:'abc',description:'xyz',nrOfCandidates:20},
      {title:'job nr 2',type:'Full-time',date:new Date(),city:'bucuresti',employerName:'ddd',description:'as',nrOfCandidates:2}
    ]
    this.jobs.forEach(job=>{this.cities.push(job.city)});
    this.jobs.forEach(job=>this.jobTypes.push(job.type));

  }

}
