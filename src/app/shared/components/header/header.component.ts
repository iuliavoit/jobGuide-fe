import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../auth/components/login/login.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public loginService: AuthenticationService)
   {}

  ngOnInit() {

  }

}
