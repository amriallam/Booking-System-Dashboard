import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { DayPilotModule } from "@daypilot/daypilot-lite-angular";
import { HttpClientModule } from "@angular/common/http";
import { ScheduleComponent } from "./view-schedule/schedule.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ScheduleItemDetailComponent } from "./schedule-item-detail/schedule-item-detail.component";

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { BookingItemDetailComponent } from "./booking-item-detail/booking-item-detail.component";
import { ConfimMoveComponent } from "./confim-move/confim-move.component";



export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes: Routes = [
  { path: "", component: ScheduleComponent }
];

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleItemDetailComponent,
    BookingItemDetailComponent,
    ConfimMoveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    DayPilotModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [ScheduleComponent]
})
export class ScheduleModule { }
