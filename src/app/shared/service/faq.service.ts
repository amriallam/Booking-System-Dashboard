import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from 'src/app/component/models/data-response';
import { faq } from 'src/app/component/models/faq';
import { apiUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FaqService {
  tempfaq:faq;
  constructor(private http: HttpClient) {
    this.tempfaq={question:"",answer:""}
  }
  GetAll():Observable<DataResponse<faq>>{
    return this.http.get<DataResponse<faq>>(apiUrl + "faq")
  }
  DeleteById(id:number){
    return this.http.delete(apiUrl + "faq/"+id)
  }
  EditById(id:number,faq:faq) {
    return this.http.put(apiUrl + "faq/"+id,faq)
  }
}
