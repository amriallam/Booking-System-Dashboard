import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';
import { Schedule } from 'src/app/component/models/schedule';
import { DataResponse } from 'src/app/component/models/data-response';

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

  GetAll() {
    return this.http.get<DataResponse<Schedule>>(apiUrl + "ScheduleItem/GetAll")
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
