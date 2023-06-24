import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceSpecialCharactaristics} from 'src/app/component/models/resource-special-charactaristics';
import { DataResponse } from 'src/app/component/models/data-response';
import { Observable, retry, throwError } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { DataResponseObeject } from 'src/app/component/models/data-response-object';

@Injectable({
  providedIn: 'root'
})
export class ResourceSpecialCharactaristicsService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<DataResponse<ResourceSpecialCharactaristics>> {
    return this.httpClient.get<DataResponse<ResourceSpecialCharactaristics>>(`${apiUrl}ResourceSpecialCharacteristics`)
    .pipe(
      retry(2)
      );
  }

  getById(id: number): Observable<DataResponseObeject<ResourceSpecialCharactaristics>> {
    console.log(id +"from get by id");
    return this.httpClient.get<DataResponseObeject<ResourceSpecialCharactaristics>>(`${apiUrl}ResourceSpecialCharacteristics/${id}`)
   
  }


  Delete(id: number) {
    console.log(id +"fro service");
    return this.httpClient.delete<ResourceSpecialCharactaristics>(`${apiUrl}ResourceSpecialCharacteristics?id=${id}`);
  }
}
