import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';
import { Schedule } from 'src/app/component/models/schedule';
import { DataResponse } from 'src/app/component/models/data-response';
import { BookingItem } from 'src/app/component/models/BookingItem';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  GetAvailableResourceByDateRange(startDate: string, endDate: string, reousrceTypeId: number) {
    return this.http.get(
      `${apiUrl}Schedule/GetAvailableResources?fromDate=${startDate}&toDate=${endDate}&resourceTypeId=${reousrceTypeId}`
    )
  }

  GetAllSchedules() {
    return this.http.get<DataResponse<Schedule>>(apiUrl + "ScheduleItem/GetAll")
  }

  GetAllBookings() {
    return this.http.get<DataResponse<BookingItem>>("https://localhost:7158/api/ClientBooking")
  }

  EditScheduleItem(scheduleId: number, day: string, newStartHour: number, newStartMinute: number, newEndHour: number, newEndMinute: number) {
    let sendObj = {
      scheduleId,
      day,
      startTime: {
        hour: newStartHour,
        minute: newStartMinute
      },
      endTime: {
        hour: newEndHour,
        minute: newEndMinute
      }
    }
    return this.http.put(apiUrl + "Edit/" + scheduleId, sendObj)
  }

}
