import { ApiResponse } from 'src/app/utils/api-response.model';
import { UsersService } from 'src/app/users/users.service';
import { AuthService } from './auth-tokens.service';
import { UserModel } from 'src/app/users/models/user.model';
import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth-token.component.html',
  styleUrls: ['./auth-token.component.css'],
})
export class AuthTokensComponent implements OnInit {
  loginForm: FormGroup;

  authType: string = 'login';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UsersService
  ) {
    this.loginForm = this.formBuilder.group({});

    this.setupLoginForm();
  }

  ngOnInit(): void {}

  private setupLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  getErrorMessage(controlName: string) {
    switch (controlName) {
      case 'username': {
        if (this.loginForm.controls['username'].hasError('required')) {
          return 'You must enter a value';
        }

        // if (this.loginForm.controls['email'].hasError('email')) {
        //   return 'Not a valid email';
        // }

        return '';
      }

      case 'password': {
        if (
          this.authType == 'login' &&
          this.loginForm.controls['password'].hasError('required')
        ) {
          return 'You must enter a value';
        }

        return '';
      }

      default:
        return '';
    }
  }

  public onLogin(): void {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value)
        .subscribe((response: any) => {
          // this.userService.setUser(response.result.token);

          let dataLogin: LoginData = (response as ApiResponse).result;

          this.userService.setToken(dataLogin.token);

          this.authService
            .findUserByUsername(dataLogin.username)
            .subscribe((responseUser) => {
              let user: UserModel = (response as ApiResponse).result;

              this.userService.setUser(user);

              this.router.navigate(['/', 'home']);
            });
        });
    }
  }
}

export interface LoginData {
  token: string;
  username: string;
}
