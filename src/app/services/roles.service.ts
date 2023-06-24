import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Permission, Role } from '../component/models/rolePermissions';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  baseurl = "https://localhost:7158/api/Roles";

  constructor(public http: HttpClient) { }

  getAllRoles(): Observable<any> {
    return this.http.get(this.baseurl);
  }

  getRolePermissionsById(id: string): Observable<any> {
    return this.http.get(`${this.baseurl}/ManagePermissions/${id}`);
  }

  createNewRole(name: string): Observable<any> {
    return this.http.post(`https://localhost:7158/api/Roles/CreateRole`,{name});
  }

  updateRole(roleID: string, permissions: Permission[]): Observable<any> {
    const rolePermissions: Role = {
      roleID: roleID,
      permissions: permissions
    };
    return this.http.put(`${this.baseurl}/AssignPermissions`, rolePermissions);
  }

  // updateRole(rolePermissions:Role[]): Observable<any> {
  //   return this.http.put(`${this.baseurl}/AssignPermissions`,rolePermissions);
  // }
}