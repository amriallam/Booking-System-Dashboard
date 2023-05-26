import { Injectable } from '@angular/core';

interface LoginDTO {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: LoginDTO[];
  isAuthanticated: boolean;

  constructor() {
    this.isAuthanticated = false;
    this.users = [{ username: 'admin', password: "admin" }];
  }
  login(username: string, password: string) {
    if (!!this.users.find(e => e.username === username && e.password === password)) {
      this.isAuthanticated = true;
      return true
    }
    else
      return false;
  }
  logout() {
    this.isAuthanticated = false;
  }
  getAuthorizationToken() {
    return "Amr"
  }
}
