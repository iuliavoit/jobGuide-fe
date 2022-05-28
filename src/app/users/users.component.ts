import { ApiResponse } from 'src/app/utils/api-response.model';
import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/users/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: Array<UserModel> = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response) => {
      this.users = (response as ApiResponse).result;
    });
  }
}
