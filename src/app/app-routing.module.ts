import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/components/login/login.component";
import {RegisterComponent} from "./auth/components/register/register.component";
import {HomePageComponent} from "./home-page/components/home-page.component";
import {AccountComponent} from "./account/components/account.component";
import {JobsUserComponent} from "./jobs-user/jobs-user.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent},
  { path: 'home-page', component: HomePageComponent},
  { path: 'jobs', component: JobsUserComponent},
  { path: 'account', component: AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
