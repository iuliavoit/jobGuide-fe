import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

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
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted=true;

    const email=this.loginForm.value.email;
    const password=this.loginForm.value.password;

    this.loginForm.reset();
    console.log(email);
  }
}
