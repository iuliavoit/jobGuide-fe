import { ApiResponse } from "src/app/utils/api-response.model";
import { environment } from "src/environments/environment.prod";
import { HttpClient } from "@angular/common/http";
import { UserModel } from "src/app/users/models/user.model";
import { UsersService } from "src/app/users/users.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private userService: UsersService,
    private httpClient: HttpClient
  ) {}

  public login(loginData: any): any {
    console.log(loginData);

    return this.httpClient.post(
      `${environment.apiUrl}/token/generate-token`,
      loginData
    );
  }

  public findUserByUsername(username: string) {
    return this.httpClient.get(
      `${environment.apiUrl}/users/byUsername/${username}`,
      { headers: this.userService.getHeaders() }
    );
  }
}
