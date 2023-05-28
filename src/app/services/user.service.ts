import { Injectable } from '@angular/core';
import { jwtVerify } from 'jose';
interface LoginDTO {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: LoginDTO[];

  constructor() {
    this.users = [{ username: 'admin', password: "admin" }];
  }
  async login(username: string, password: string) {
    let foundUser = this.users.find(e => e.username === username && e.password === password);
    if (!!foundUser) {
      localStorage.setItem('token', JSON.stringify(username));
      return true
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
  }

  // Use At Intecerptor
  getAuthorizationToken() {
    return localStorage.getItem('token')
  }

}
