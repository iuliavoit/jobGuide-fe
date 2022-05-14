import { Component, OnInit } from '@angular/core';
export interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-jobs-user',
  templateUrl: './jobs-user.component.html',
  styleUrls: ['./jobs-user.component.css']
})
export class JobsUserComponent implements OnInit {
  cities: City[];
  selectedCity: City;
  constructor() {
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];
  }

  ngOnInit(): void {
  }

}
