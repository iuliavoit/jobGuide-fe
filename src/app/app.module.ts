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
import { LogoutComponent } from './auth/components/logout/logout.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {ListboxModule} from "primeng/listbox";
import { JobCardComponent } from './job-card/job-card.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import {DialogModule} from "primeng/dialog";
import {ConfirmDialogModule} from "primeng/confirmdialog";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomePageComponent,
    AccountComponent,
    JobsUserComponent,
    LogoutComponent,
    JobCardComponent,
    JobDetailsComponent,

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

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
