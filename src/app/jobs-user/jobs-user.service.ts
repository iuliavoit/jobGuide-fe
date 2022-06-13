import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "../models/job";

@Injectable({
  providedIn: 'root'
})
export class JobsUserService {

  urlGetJobs = "http://localhost:9090/jobs";

  constructor(private httpClient: HttpClient) { }

  getAllJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(`${this.urlGetJobs}`);
  }
}
