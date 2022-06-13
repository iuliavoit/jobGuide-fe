import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  urlRegister = 'http://localhost:9090/registerNewUser';

  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  registerNewUser(registerData) {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', 'http://localhost:9090/registerNewUser');
    return this.httpClient.post(this.urlRegister, registerData, {
      headers: headers,
    });
  }
}
