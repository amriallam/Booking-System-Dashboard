import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';
import { DataResponse } from 'src/app/component/models/data-response';
import { ResourceMeasure } from 'src/app/component/models/ResourceMeasure';
import { DataResponseObeject } from 'src/app/component/models/data-response-object';
import { Subject } from 'rxjs';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ResouceTypeSoldPerMonth } from 'src/app/component/models/resouce-type-sold-per-month';

@Injectable({
  providedIn: 'root'
})
export class MeasuresService {

  public dateSubject: Subject<{ fromDate: string, toDate: string }> = new Subject<{ fromDate: string, toDate: string }>();
  private reportController: string = "Reports/";

  constructor(private http: HttpClient) { }

  DashboardDateChanged(fromDate: string, toDate: string) {
    this.dateSubject.next({ fromDate, toDate });
  }

  getEarning(fromDate: string, toDate: string) {
    return this.http.get<DataResponseObeject<{ totalPrice: number }>>(`${apiUrl + this.reportController}TotalPrice?startDate=${fromDate}&endDate=${toDate}`)
  }

  getNewBookingsCount(fromDate: string, toDate: string) {
    return this.http.get<DataResponseObeject<{ bookingsNo: number }>>(`${apiUrl + this.reportController}BookingsNo?startDate=${fromDate}&endDate=${toDate}`)
  }

  getRefundsCount(fromDate: string, toDate: string) {
    return this.http.get<DataResponseObeject<{ canceledBookingsNo: number }>>(`${apiUrl + this.reportController}CancelledBookings?startDate=${fromDate}&endDate=${toDate}`)
  }

  getNewUsersCount(fromDate: string, toDate: string) {
    return this.http.get<DataResponseObeject<{ newCustomerNo: number }>>(`${apiUrl + this.reportController}CustomerNo?startDate=${fromDate}&endDate=${toDate}`)
  }

  getTop5SellingResources(fromDate: string, toDate: string) {
    return this.http.get<DataResponse<ResourceMeasure>>(`${apiUrl + this.reportController}TopResources?startDate=${fromDate}&endDate=${toDate}`)
  }

  GetResourceTypesSalesPerMonth(fromDate: string, toDate: string) {
    return this.http.get<DataResponse<ResouceTypeSoldPerMonth>>(`${apiUrl + this.reportController}ResTypeSoldPerMonth?startDate=${fromDate}&endDate=${toDate}`)
  }

}

