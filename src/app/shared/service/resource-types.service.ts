import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceTypesService {

  constructor(private http: HttpClient) { }
  GetAll() {
    return this.http.get(apiUrl + "ResourceType")
  }
}
