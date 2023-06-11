import { Component, ViewChild } from '@angular/core';
import { DayPilotCalendarComponent, DayPilotMonthComponent, DayPilotNavigatorComponent, DayPilot } from '@daypilot/daypilot-lite-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from '../detail/detail.component';
import { ScheduleService } from 'src/app/shared/service/schedule.service';
import { ConfimMoveComponent } from '../confim-move/confim-move.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  @ViewChild("day") day!: DayPilotCalendarComponent;
  @ViewChild("week") week!: DayPilotCalendarComponent;
  @ViewChild("month") month!: DayPilotMonthComponent;
  @ViewChild("navigator") nav!: DayPilotNavigatorComponent;

  eventType: string = "Schedule";

  events: DayPilot.EventData[] = [];

  date = DayPilot.Date.today();

  configNavigator: DayPilot.NavigatorConfig = {
    showMonths: 3,
    cellWidth: 25,
    cellHeight: 25,
  };

  getEvents(eventType: string) {
    if (this.eventType === eventType) return;
    this.eventType = eventType
    switch (eventType) {
      case "Schedule": {
        this.getSchedule();
        break;
      }
      case "Booking": {
        this.getBookings();
        break;
      }
    }
  }

  private openDetailComponent = async (args: any) => {
    const modelRef = this.modal.open(DetailComponent, { centered: true });
    modelRef.componentInstance.schedule = args.e.data;
  };

  private openConfirmMoveComponent = async (args: any) => {
    const modelRef = this.modal.open(ConfimMoveComponent, { centered: true });
    modelRef.componentInstance.newEnd = args.newEnd;
    modelRef.componentInstance.newStart = args.newStart;
    modelRef.componentInstance.schedule = args.e.data;
    modelRef.closed.subscribe(() =>
      this.scheduleService
        .EditScheduleItem(
          args.e.data.id,
          args.newEnd.toDate().toLocaleDateString(),
          args.newStart.getHours(),
          args.newStart.getMinutes(),
          args.newEnd.getHours(),
          args.newEnd.getMinutes()
        )
        .subscribe({
          next: () => this.toastr.success("Modified Successfully"),
          error: () => this.toastr.error,
        })
    );
  };

  private getBookings() {
    this.scheduleService.GetAllBookings().subscribe(result => {
      this.events = result.data.map(booking => {
        const start = new DayPilot.Date(new Date(`${booking.date.split("T")[0]}T${booking.startTime}`))
        const end = new DayPilot.Date(new Date(`${booking.date.split("T")[0]}T${booking.endTime}`))
        return {
          id: booking.id,
          start,
          end,
          text: booking.location,
          status: booking.status,
          totalCost: booking.totalCost,
          userId: booking.userId
        }
      })
    }
    );
  }

  private getSchedule() {
    this.scheduleService.GetAllSchedules().subscribe(result =>
      this.events = result.data.map(schedule => {
        const dayFormated = this.formatDate(schedule.day.split(' ')[0])
        const start = new DayPilot.Date(new Date(`${dayFormated}T${schedule.startTime}`))
        const end = new DayPilot.Date(new Date(`${dayFormated}T${schedule.endTime}`))
        return { id: schedule.scheduleId, start, end, text: "EventNewNo" }
      })
    );
  }

  selectTomorrow() {
    this.date = DayPilot.Date.today().addDays(1);
  }

  changeDate(date: DayPilot.Date): void {
    this.configDay.startDate = date;
    this.configWeek.startDate = date;
    this.configMonth.startDate = date;
  }

  configDay: DayPilot.CalendarConfig = {
    onEventClick: this.openDetailComponent,
    onEventMoved: this.openConfirmMoveComponent
  };

  configWeek: DayPilot.CalendarConfig = {
    viewType: "Week",
    onEventClick: this.openDetailComponent,
    onEventMoved: this.openConfirmMoveComponent
  };

  configMonth: DayPilot.MonthConfig = {
    onEventClick: this.openDetailComponent,
    onEventMoved: this.openConfirmMoveComponent
  };

  constructor(private scheduleService: ScheduleService, private modal: NgbModal, private toastr: ToastrService) {
    this.viewWeek();
  }

  ngAfterViewInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    const from = this.nav.control.visibleStart();
    const to = this.nav.control.visibleEnd();
    this.scheduleService.GetAllSchedules().subscribe(result =>
      this.events = result.data.map(schedule => {
        const dayFormated = this.formatDate(schedule.day.split(' ')[0])
        const start = new DayPilot.Date(new Date(`${dayFormated}T${schedule.startTime}`))
        const end = new DayPilot.Date(new Date(`${dayFormated}T${schedule.endTime}`))
        return { id: schedule.scheduleId, start, end, text: "EventNewNo" }
      })
    );
  }

  private formatDate(dateString: string) {

    var dateParts = dateString.split("/");

    var day = dateParts[1];
    var month = dateParts[0];
    var year = dateParts[2];

    if (month.length === 1) {
      month = "0" + month;
    }

    if (day.length === 1) {
      day = "0" + day;
    }

    var formattedDate = year + "-" + month + "-" + day;

    return formattedDate;
  }

  viewDay(): void {
    this.configNavigator.selectMode = "Day";
    this.configDay.visible = true;
    this.configWeek.visible = false;
    this.configMonth.visible = false;
  }

  viewWeek(): void {
    this.configNavigator.selectMode = "Week";
    this.configDay.visible = false;
    this.configWeek.visible = true;
    this.configMonth.visible = false;
  }

  viewMonth(): void {
    this.configNavigator.selectMode = "Month";
    this.configDay.visible = false;
    this.configWeek.visible = false;
    this.configMonth.visible = true;
  }
}
