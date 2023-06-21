import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResourceType } from "../component/models/ResourceType";
import { DataResponse } from "../component/models/data-response";

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
  getResourceTypeById(rtId : number): Observable<DataResponse<ResourceType>> {
    return this.http.get<DataResponse<ResourceType>>(this.baseurl+`/${rtId}`);
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
