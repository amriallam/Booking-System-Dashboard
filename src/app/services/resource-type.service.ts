import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ResourceTypeService {
  baseurl = "https://localhost:7158/api/ResourceType";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(public http: HttpClient) {}

  getResourceTypes(): Observable<any> {
    return this.http.get(this.baseurl);
  }

  getResourceTypesByServiceId(id : number): Observable<any> {
    return this.http.get(this.baseurl + `?ServiceId=${id}`);
  }


  createResourceType(data: any): Observable<any> {
    return this.http.post(
      `${this.baseurl}?name=${data}`,
      data,
      this.httpOptions
    );
  }

  deleteResourceType(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`, this.httpOptions);
  }

  updateResourceType(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseurl}/${id}`, data);
  }
}
