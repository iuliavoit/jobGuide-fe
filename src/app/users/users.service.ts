import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/users/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private user: UserModel;
  private token: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XSwiaXNzIjoiaHR0cDovL2RldmdsYW4uY29tIiwiaWF0IjoxNjEzODk3MTU1LCJleHAiOjE2MTM5MTUxNTV9.RHzpsI0AxXffH384bd_QO1T5XQb_SXqBwuqZJzoCU7Q';

  constructor(private httpClient: HttpClient) {
    this.user = {
      id: '',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: '',
      phone: '',
      items: [],
    };
  }

  public getUser(): UserModel {
    return this.user;
  }

  public setUser(user: UserModel): void {
    this.user = user;
  }

  public setToken(token: string) {
    this.token = token;
  }

  public loadUsers(): Array<UserModel> {
    return [this.user, this.user, this.user];
  }

  public getUsers() {
    return this.httpClient.get(`${environment.apiUrl}/users`, {
      headers: this.getHeaders(),
    });
  }

  public addUser(userForm: any) {
    return this.httpClient.post(`${environment.apiUrl}/users`, userForm, {
      headers: this.getHeaders(),
    });
  }

  public updateUser(userForm: any) {
    return this.httpClient.put(
      `${environment.apiUrl}/users/${userForm.id}`,
      userForm,
      {
        headers: this.getHeaders(),
      }
    );
  }

  public deleteUser(userForm: any) {
    this.httpClient.delete(`${environment.apiUrl}/users/${userForm.id}`, {
      headers: this.getHeaders(),
    });
  }

  public getHeaders() {
    return { Authorization: `Bearer ${this.token}` };
  }
}
