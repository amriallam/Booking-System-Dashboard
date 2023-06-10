import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ResourseService {
  baseurl = "https://localhost:7158/api/Resource";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(public http: HttpClient) {}
  getAllResources(): Observable<any> {
    return this.http.get(this.baseurl);
  }

  getResourcesById(id: number): Observable<any> {
    return this.http.get(`${this.baseurl}/${id}`);
  }

  createNewResource(resource: any): Observable<any> {
    return this.http.post(this.baseurl, JSON.stringify(resource), this.httpOptions);
  }

  deleteResource(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/SoftDelete/${id}`, this.httpOptions);
  }

  updateResource(id: number, resource: any): Observable<any> {
    // console.log(resource);
    return this.http.put(`${this.baseurl}/${id}`, JSON.stringify(resource), this.httpOptions);
  }

  
}
