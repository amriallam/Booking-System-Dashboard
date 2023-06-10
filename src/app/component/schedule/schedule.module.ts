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
  { path: "", component: ScheduleComponent }
];

@NgModule({
  declarations: [
    ScheduleComponent,
    DetailComponent,
    ConfimMoveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    DayPilotModule
  ],
  exports: [ScheduleComponent, DetailComponent]
})
export class ScheduleModule { }
