import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResourceDetailsService {
  baseurl = "https://localhost:7158/api/ResourceData/Resource";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(public http: HttpClient) {}

  getResourceDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseurl}/${id}`);
  }
}
