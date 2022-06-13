import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {RegisterService} from "./register.service";
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router:Router,
    private registerUserService: RegisterService,
    private userService: UserService,
    private userAuthService: UserAuthService,
  ) { }

  ngOnInit(): void {
  }

  submitted = false;

  registerForm= new FormGroup(
    {
      userName: new FormControl(),
      userPassword: new FormControl(),
      confirmPassword: new FormControl(),
      userFirstName: new FormControl(),
      userLastName: new FormControl(),
      age: new FormControl(),
    }
  );

  registerForm2= new FormGroup(
    {
      userName: new FormControl(),
      userPassword: new FormControl(),
      userFirstName: new FormControl(),
      userLastName: new FormControl(),
      age: new FormControl(),
    }
  );

  onSubmit() {
    this.submitted=true;

    const email=this.registerForm.value.email;
    const password=this.registerForm.value.password;
    const age=this.registerForm.value.age;

  }

  passwordWarning = false;
  ageWarning = false;
  emailWarning = false;

  userPassword= '';
  confirmPassword='';
  age=0;

  loginForm= new FormGroup(
    {
      userName: new FormControl(),
      userPassword: new FormControl(),
    }
  );

  checkRegister() {

    this.passwordWarning = false;
    this.ageWarning = false;
    this.emailWarning = false;

    this.userPassword=this.registerForm.value.userPassword;
    this.confirmPassword=this.registerForm.value.confirmPassword;
    this.age=this.registerForm.value.age;

    if (this.userPassword === this.confirmPassword && this.age >= 18) {
      //this.registerForm.reset();
      //this.router.navigate(['login']);
    return true;
    } else {
      if(this.age < 18) {
        this.ageWarning = true;
      }
      if(this.userPassword !== this.confirmPassword) {
        this.passwordWarning = true;
      }
      return false;
    }
  }

  registerNewUser(registerForm: FormGroup) {
    console.log(registerForm.value);

    this.registerForm2.value.userName = registerForm.value.userName;
    this.registerForm2.value.userPassword = registerForm.value.userPassword;
    this.registerForm2.value.userFirstName = registerForm.value.userFirstName;
    this.registerForm2.value.userLastName = registerForm.value.userLastName;
    this.registerForm2.value.age = registerForm.value.age;

    console.log(this.registerForm2.value);

    this.registerUserService.registerNewUser(this.registerForm2.value).subscribe();

    // this.loginForm.value.userName = registerForm.value.userName;
    // this.loginForm.value.userPassword = registerForm.value.userPassword;
    //
    // this.userService.login(this.loginForm.value).subscribe(
    //   (response: any) => {
    //     this.userAuthService.setRoles(response.user.role);
    //     this.userAuthService.setToken(response.jwtToken);
    //
    //     const role = response.user.role[0].roleName;
    //     if (role === 'Admin') {
    //       this.router.navigate(['/forAdmin']);
    //     } else {
    //       this.router.navigate(['/home']);
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
