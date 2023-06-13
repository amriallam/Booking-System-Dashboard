import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Schedule } from '../../models/schedule';
import { DayPilot } from '@daypilot/daypilot-lite-angular';

@Component({
  selector: 'app-schedule-item-detail',
  templateUrl: './schedule-item-detail.component.html',
})
export class ScheduleItemDetailComponent implements OnInit {
  schedule: Schedule | any;
  startTime: string = "";
  endTime: string = "";
  TitleEdit: boolean = false;
  constructor(private modalref: NgbActiveModal) { }

  ngOnInit(): void {
    let currentDate = this.schedule.start.value.split("T")[0];
    this.startTime = this.schedule.start.value.split("T")[1];
    this.endTime = this.schedule.end.value.split("T")[1];
    this.schedule.date = currentDate;
    this.schedule.status = this.schedule.status == true ? "  Availabile" : "Not Available";
    this.schedule.shift = this.schedule.shift == true ? "Night" : "Morning";
  }

  ToggleTitleEdit() {
    this.TitleEdit = !this.TitleEdit;
  }

  SaveTitleEdit() {
    this.TitleEdit = !this.TitleEdit;
  }

  closeModal() {
    this.modalref.close()
  }

}
