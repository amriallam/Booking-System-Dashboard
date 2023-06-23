import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserRole } from '../component/models/User-roles';

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {

  baseurl = "https://localhost:7158/api/Users";

  constructor(public http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseurl);
  }

  getUserRolesById(id: string): Observable<any> {
    return this.http.get(`${this.baseurl}/ManageRoles/${id}`);
  }

  AssignRole(_userID: string, _roles: UserRole[]): Observable<any> {
    const user: User = {
      userID: _userID,
      roles: _roles
    };
    return this.http.post(`${this.baseurl}/AssignRoles`, user);
  }
}
