import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,of } from 'rxjs';

import {DataResponseObeject} from '../component/models/DataResponseObeject';
import {User} from '../component/models/user'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = "https://localhost:7158/api/Account";

  constructor(private httpClient:HttpClient) { }
  GetUserById(id:string): Observable<DataResponseObeject<User>> {
    return this.httpClient.get<DataResponseObeject<User>>(this.baseurl +'/id')
  }
  EditUser(user: User): Observable<DataResponseObeject<User>> {
    return this.httpClient.patch<DataResponseObeject<User>>(this.baseurl + user.id , user)
  }
}
