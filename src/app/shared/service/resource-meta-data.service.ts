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
export class ResourceMetaDataService {
  constructor(private httpClient: HttpClient) {
  }
  
  GetServiceMetaData(service: ServiceMetadata): Observable<DataResponse<ServiceMetadata>> {
    return this.httpClient.get<DataResponse<ServiceMetadata>>(`${apiUrl}ServiceMetadata`);
  }

  AddServiceBulkMetaData(serviceId: number,service: ServiceMetadata[]): Observable<DataResponse<ServiceMetadata[]>> {
    return this.httpClient.post<DataResponse<ServiceMetadata[]>>(`${apiUrl}ServiceMetadata/AddBulk?serviceId=${serviceId}`, service);
  }
  DeleteServiceMetaData(id: number): Observable<ServiceMetadata> {
    return this.httpClient.delete<ServiceMetadata>(`${apiUrl}ServiceMetadata/AddOne?id=${id}`);
  }


  GetResourceType(): Observable<DataResponse<ResourceType>> {
    return this.httpClient.get<DataResponse<ResourceType>>(`${apiUrl}ResourceType`);
  }
  GetResourceTypeByserviceId(id : number): Observable<DataResponse<ResourceType>> {
    // return this.httpClient.get<DataResponse<ResourceType>>(`${apiUrl}ServiceMetadata?ServiceId=${id}`);
    return this.httpClient.get<DataResponse<ResourceType>>(`https://localhost:7158/api/ServiceMetadata?ServiceId=${id}`);
  }

}
