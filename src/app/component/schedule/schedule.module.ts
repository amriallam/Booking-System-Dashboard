import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { DayPilotModule } from "@daypilot/daypilot-lite-angular";
import { HttpClientModule } from "@angular/common/http";
import { ScheduleComponent } from "./view-schedule/schedule.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ScheduleItemDetailComponent } from "./schedule-item-detail/schedule-item-detail.component";


const routes: Routes = [
  { path: "", component: ScheduleComponent }
];

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleItemDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    DayPilotModule
  ],
  exports: [ScheduleComponent]
})
export class ScheduleModule { }
