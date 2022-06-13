import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  urlRegister = 'http://localhost:9090/registerNewUser';

  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  registerNewUser(registerData) {
    return this.httpClient.post(this.urlRegister, registerData);
  }
}
