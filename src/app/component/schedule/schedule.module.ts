import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ListScheduleComponent } from './list-schedule/list-schedule.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { CalendarModule, DateAdapter, MOMENT } from 'angular-calendar';
import { AppService } from 'src/app/shared/service/app.service';
import * as moment from 'moment';

const routes: Routes = [
  { path: "", component: ListScheduleComponent }
];

@NgModule({
  declarations: [
    ListScheduleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange', logEnabled: true }),
  ],
  providers: [
    AppService,
    { provide: LOCALE_ID, useValue: 'en-US' },
    { provide: MOMENT, useValue: moment }
  ],
})
export class ScheduleModule { }
