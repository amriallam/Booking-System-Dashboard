import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from 'src/app/component/models/logn-response';
import { Login } from 'src/app/component/models/login';


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


