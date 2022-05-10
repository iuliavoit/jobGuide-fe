import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submitted = false;
  loginForm= new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl(),
    }
  );

  username = '';
  password= '';
  confirmPassword='';

  onSubmit() {
    this.submitted=true;

    const email=this.loginForm.value.email;
    const password=this.loginForm.value.password;

    console.log(email);
    console.log(password);
  }

  checkRegister() {
    if (this.password === this.confirmPassword) {
      this.router.navigate(['home-page'])
      this.loginForm.reset();
    return true;
    } else {
      return false;
    }
  }
}
