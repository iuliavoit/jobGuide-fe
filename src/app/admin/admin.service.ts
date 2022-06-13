import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "../models/job";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  urlAdd = "http://localhost:9090/forAdmin";

  constructor(private httpClient: HttpClient) { }

  addJob(job?: Job): Observable<Object> {
    return this.httpClient.post<Object>(`${this.urlAdd}`, job);
  }



}
