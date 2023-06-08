import { Injectable } from '@angular/core';
import { Login } from '../interface/login';
import { LoginResponse } from '../interface/logn-response';
import { apiUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = apiUrl;

  constructor(private http: HttpClient) { }

  login(user: Login) {
    return this.http.post<LoginResponse>(this.baseUrl + "login", user)
  }

  logout() {
    localStorage.removeItem('token');
  }

}


