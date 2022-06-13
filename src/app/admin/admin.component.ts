import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Job} from "../models/job";
import {AdminService} from "./admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private router:Router,
    private addJobService: AdminService,
  ) { }

  ngOnInit(): void {
  }

  adminForm= new FormGroup(
    {
      title: new FormControl(),
      type: new FormControl(),
      city: new FormControl(),
      employerName: new FormControl(),
      description: new FormControl(),
      date: new FormControl()
    }
  );

  submitted = false;

  job: Job;

  addJob(adminForm: FormGroup) {

    console.log(this.adminForm.value);

    this.addJobService.addJob(this.adminForm.value).subscribe();
    this.adminForm.reset();
  }

}
