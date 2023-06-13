import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseObeject } from 'src/app/component/models/DataResponseObeject';
import { Service } from 'src/app/component/models/Service';
import { ServiceStatus } from 'src/app/component/models/ServiceStatus';
import { DataResponse } from 'src/app/component/models/data-response';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) {


  }

  getAll(): Observable<DataResponse<Service>> {
    return this.httpClient.get<DataResponse<Service>>(`${apiUrl}Service`)
  }
  getById(id: number): Observable<DataResponse<Service>> {
    return this.httpClient.get<DataResponse<Service>>(`${apiUrl}Service?Id=${id}`)
  }
  getByResourceType(status: ServiceStatus): Observable<DataResponse<Service>> {
    return this.httpClient.get<DataResponse<Service>>(`${apiUrl}Service?Status=${status}`)
  }

  // getServiceByName(serviceName: String): Observable<DataResponse<Service>> {
  //   return this.httpClient.get<DataResponse<Service>>(`${apiUrl}Service?Name=${serviceName}`)
  // }

  AddService(service: Service): Observable<DataResponseObeject<Service>> {
    return this.httpClient.post<DataResponseObeject<Service>>(`${apiUrl}Service`, service);
  }

  UpdateService(id: number, service: Service): Observable<Service> {
    return this.httpClient.put<Service>(`${[apiUrl]}Service?id=${id}`, service);
  }
  DeleteService(id: number) {
    return this.httpClient.delete<Service>(`${apiUrl}Service?id=${id}`);
  }
}
