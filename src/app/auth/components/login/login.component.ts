import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loginForm= new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl(),
    }
  );

  onSubmit() {
    this.submitted=true;

    const email=this.loginForm.value.email;
    const password=this.loginForm.value.password;

    this.loginForm.reset();

    console.log(email);
    console.log(password);
  }

  username = 'test@test.com';
  password= '';
  invalidLogin = false;

  constructor(private router:Router,
              private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['home-page'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
}
