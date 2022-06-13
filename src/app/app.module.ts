import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from "primeng/button";
import {MatButtonModule} from "@angular/material/button";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./auth/components/login/login.component";
import {RegisterComponent} from "./auth/components/register/register.component";
import {MatInputModule} from "@angular/material/input";
import {HeaderComponent} from "./shared/components/header/header.component";
import { HomePageComponent } from './home-page/components/home-page.component';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import { AccountComponent } from './account/components/account.component';
import { JobsUserComponent } from './jobs-user/components/jobs-user.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {ListboxModule} from "primeng/listbox";
import { JobCardComponent } from './job-card/job-card.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import {DialogModule} from "primeng/dialog";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminComponent } from './admin/admin.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UserComponent } from './user/user.component';
import {AuthGuard} from "./_auth/auth.guard";
import {AuthInterceptor} from "./_auth/auth.interceptor";
import {UserService} from "./_services/user.service";
import { AppliedJobsUserComponent } from './applied-jobs-user/applied-jobs-user.component';
import { AppliedJobsDetailsComponent } from './applied-jobs-details/applied-jobs-details.component';
import { AppliedJobsCardComponent } from './applied-jobs-card/applied-jobs-card.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomePageComponent,
    AccountComponent,
    JobsUserComponent,
    JobCardComponent,
    JobDetailsComponent,
    ForbiddenComponent,
    AdminComponent,
    UserComponent,
    AppliedJobsUserComponent,
    AppliedJobsDetailsComponent,
    AppliedJobsCardComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        ButtonModule,
        MatButtonModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        ListboxModule,
        DialogModule,
        ConfirmDialogModule,
        HttpClientModule

    ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
