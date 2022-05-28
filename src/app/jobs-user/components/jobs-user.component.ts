import { Component, OnInit } from '@angular/core';
export interface City {
  name: string;
}

export interface TypeJob {
  type: string;
}


@Component({
  selector: 'app-jobs-user',
  templateUrl: './jobs-user.component.html',
  styleUrls: ['./jobs-user.component.css']
})
export class JobsUserComponent implements OnInit {
  cities: City[];
  jobTypes: TypeJob[];
  selectedCity: City;
  selectedType: TypeJob;
  constructor() {
    //fetch jobs and add each city here
    this.cities = [
      { name: "New York"},
      { name: "Rome" },
      { name: "London"},
      { name: "Istanbul" },
      { name: "Paris" }
    ];
    this.jobTypes=[
      {type: "Part-Time" },
      {type:"Full-Time"},
      {type:"Night-shift"}
    ]
  }

  ngOnInit(): void {
  }

}
