import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResourceTypeDetailsService {
  baseurl = "https://localhost:7158/api/ResourceAttribute";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(public http: HttpClient) {}

  getResourceTypeDetails(id: number): Observable<any> {
    // check the response
    return this.http.get(`${this.baseurl}/${id}`);
    
  }
}
