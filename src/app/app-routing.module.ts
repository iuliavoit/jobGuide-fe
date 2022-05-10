import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/components/login/login.component";
import {RegisterComponent} from "./auth/components/register/register.component";
import {HomePageComponent} from "./home-page/components/home-page.component";
import {AccountComponent} from "./account/components/account.component";
import {JobsUserComponent} from "./jobs-user/components/jobs-user.component";
import {AuthGuardService} from "./auth/service/auth-guard.service";

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path: 'home-page', component: HomePageComponent, canActivate:[AuthGuardService] },
  { path: 'jobs', component: JobsUserComponent, canActivate:[AuthGuardService] },
  { path: 'account', component: AccountComponent, canActivate:[AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
