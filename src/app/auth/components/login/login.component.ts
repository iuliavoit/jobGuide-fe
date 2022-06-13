import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, FormGroupDirective, NgForm} from "@angular/forms";
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;

  loginForm= new FormGroup(
    {
      userName: new FormControl(),
      userPassword: new FormControl(),
    }
  );

  onSubmit() {
    this.submitted=true;

    const userName=this.loginForm.value.email;
    const userPassword=this.loginForm.value.password;

    this.loginForm.reset();
  }

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(loginForm: FormGroup) {
    console.log(loginForm.value);
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/forAdmin']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
