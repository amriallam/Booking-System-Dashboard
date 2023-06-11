import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { DayPilotModule } from "@daypilot/daypilot-lite-angular";
import { HttpClientModule } from "@angular/common/http";
import { ScheduleComponent } from "./view-schedule/schedule.component";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from './detail/detail.component';
import { CommonModule } from "@angular/common";
import { ConfimMoveComponent } from './confim-move/confim-move.component';

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
  exports: [ScheduleComponent, DetailComponent]
})
export class ScheduleModule { }
