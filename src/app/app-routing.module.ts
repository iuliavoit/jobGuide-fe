import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/components/login/login.component";
import {RegisterComponent} from "./auth/components/register/register.component";
import {HomePageComponent} from "./home-page/components/home-page.component";
import {AccountComponent} from "./account/components/account.component";
import {JobsUserComponent} from "./jobs-user/components/jobs-user.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {AdminComponent} from "./admin/admin.component";
import { AuthGuard } from './_auth/auth.guard';


const routes: Routes = [
  { path: '', component:HomePageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registerNewUser', component: RegisterComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'jobs', component: JobsUserComponent},
  { path: 'forUser', component: AccountComponent, canActivate:[AuthGuard], data:{roles:['User']}},
  { path: 'forAdmin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  { path: 'forbidden', component: ForbiddenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
