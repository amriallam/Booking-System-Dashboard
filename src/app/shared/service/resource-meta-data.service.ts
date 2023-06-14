import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourceType } from 'src/app/component/models/ResourceType';
import { ServiceMetadata } from 'src/app/component/models/ServiceMetadata';
import { DataResponse } from 'src/app/component/models/data-response';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceMetaDataService {
  constructor(private httpClient: HttpClient) {
  }
  
  GetServiceMetaData(service: ServiceMetadata): Observable<DataResponse<ServiceMetadata>> {
    return this.httpClient.get<DataResponse<ServiceMetadata>>(`${apiUrl}ServiceMetadata`);
  }

  AddServiceBulkMetaData(serviceId: number,service: ServiceMetadata[]): Observable<DataResponse<ServiceMetadata[]>> {
    return this.httpClient.post<DataResponse<ServiceMetadata[]>>(`${apiUrl}ServiceMetadata/AddBulk?serviceId=${serviceId}`, service);
  }
  DeleteServiceMetaData(serviceId: number , resTypeId: number): Observable<ServiceMetadata> {
    return this.httpClient.delete<ServiceMetadata>(`${apiUrl}ServiceMetadata/DeleteOne?serviceId=${serviceId}&resTypeId=${resTypeId}`);
  }
  GetResourceType(): Observable<DataResponse<ResourceType>> {
    return this.httpClient.get<DataResponse<ResourceType>>(`${apiUrl}ResourceType`);
  }
  GetResourceTypeByserviceId(id : number): Observable<DataResponse<ServiceMetadata>> {
    return this.httpClient.get<DataResponse<ServiceMetadata>>(`${apiUrl}ServiceMetadata?ServiceId=${id}`);
  }

}
