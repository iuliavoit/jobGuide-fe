import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "../models/job";

@Injectable({
  providedIn: 'root'
})
export class AppliedJobsUserService {

  urlGetJobs = "http://localhost:9090/jobs/appliedJobs/";

  constructor(private httpClient: HttpClient) { }

  userId = 2;

  getAllJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.urlGetJobs + this.userId);
  }
}
