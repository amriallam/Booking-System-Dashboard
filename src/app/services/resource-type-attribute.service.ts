
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ResourceTypeAttributeService {
  baseurl = "https://localhost:7158/api/ResourceMetadata/AddOne";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(public http: HttpClient) {}
  
  createResourceTypeAttribute(id: number, data: any): Observable<any> {
    return this.http.post<any>(
      this.baseurl + "/" + id,
      data,
      this.httpOptions
    );
  }

  
}
