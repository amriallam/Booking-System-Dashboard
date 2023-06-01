import { Injectable } from '@angular/core';
import { DatabaseDomain } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/component/models/login';
import { LoginResponse } from 'src/app/component/models/logn-response';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = DatabaseDomain;

  constructor(private http: HttpClient) { }

  login(user: Login) {
    return this.http.post<LoginResponse>(this.baseUrl + "login", user)
  }

  logout() {
    localStorage.removeItem('token');
  }

}


