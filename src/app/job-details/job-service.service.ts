import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  urlDelete = "http://localhost:9090/jobs/delete/";
  urlApply = "http://localhost:9090/jobs/";
  userId = 2;

  constructor(private httpClient: HttpClient) { }

  deleteJob(id: number): Observable<Object> {
     return this.httpClient.delete(this.urlDelete + id);
  }

  applyJob(jobId: number): Observable<Object> {
    return this.httpClient.post<Object>(this.urlApply + this.userId + jobId, this.userId + jobId);
  }
}
