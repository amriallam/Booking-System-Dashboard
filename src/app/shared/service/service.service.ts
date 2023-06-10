import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/component/models/Service';
import { DataResponse } from 'src/app/component/models/data-response';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: ''
      })
    }
  }

  getAll(): Observable<DataResponse<Service>> {
    return this.httpClient.get<DataResponse<Service>>(`${apiUrl}Service`)
  }
  getById(id : number): Observable<DataResponse<Service>> {
    return this.httpClient.get<DataResponse<Service>>(`${apiUrl}Service?Id=${id}`)
  }
  getServiceByName(serviceName: String): Observable<DataResponse<Service>> {
    return this.httpClient.get<DataResponse<Service>>(`${apiUrl}Service?Name=${serviceName}`)
  }
  AddService(service: Service): Observable<Service> {
    return this.httpClient.post<Service>(`${apiUrl}Service`, JSON.stringify(service), this.httpOption);
  }
  UpdateService(id : number, service: Service): Observable<Service> {
    return this.httpClient.put<Service>(`${[apiUrl]}Service?id=${id}`, JSON.stringify(service), this.httpOption);
  }
  DeleteService(id : number) {
    return this.httpClient.delete<Service>(`${apiUrl}Service?id=${id}`, this.httpOption);
  }

}
