import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  urlDelete = "http://localhost:9090/jobs/delete/";

  constructor(private httpClient: HttpClient) { }

  deleteJob(id: number): Observable<Object> {
     return this.httpClient.delete(this.urlDelete + id);
  }
}
