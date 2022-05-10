import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})

export class AuthenticationService {

  constructor() {}

  authenticate(username: string, password: string) {
    if(username === "test@test.com" && password === "123456") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}