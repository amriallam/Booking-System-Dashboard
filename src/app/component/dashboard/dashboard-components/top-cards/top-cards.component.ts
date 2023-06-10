import { Component, OnInit } from '@angular/core';
import { topcard } from "./topcard";
import { MeasuresService } from 'src/app/shared/service/measures.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

  topcards: topcard[];
  Earning: number = 0;
  Refunds: number = 0;
  NewUsers: number = 0;
  Bookings: number = 0;
  constructor(private measureService: MeasuresService) {
    this.topcards = [

      {
        bgcolor: 'success',
        icon: 'bi bi-coin',
        subtitle: 'Weekly Earning'
      },
      {
        bgcolor: 'danger',
        icon: 'bi bi-arrow-counterclockwise',
        subtitle: 'Weekly Refunds'
      },
      {
        bgcolor: 'warning',
        icon: 'bi bi-people',
        subtitle: 'Weekly Users Registered'
      },
      {
        bgcolor: 'info',
        icon: 'bi bi-bag',
        subtitle: 'Weekly Bookings'
      },

    ]
  }

  ngOnInit() {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    const formattedCurrentDate = today.toISOString().split('T')[0];
    const formattedStartOfWeek = startOfWeek.toISOString().split('T')[0];
    this.updateCardsInfo(formattedStartOfWeek, formattedCurrentDate)
    this.measureService.dateSubject.subscribe((value) => {
      let fromDate = `${value.fromDate.year}-${value.fromDate.month}-${value.fromDate.day}`;
      let toDate = `${value.toDate.year}-${value.toDate.month}-${value.toDate.day}`;
      this.updateCardsInfo(fromDate, toDate);
    });
  }

  updateCardsInfo(formattedStartOfWeek: string, formattedCurrentDate: string) {
    this.measureService.getEarning(formattedStartOfWeek, formattedCurrentDate).subscribe(
      data => this.Earning = data.data.totalPrice
    )
    this.measureService.getNewBookingsCount(formattedStartOfWeek, formattedCurrentDate).subscribe(
      data => this.Bookings = data.data.bookingsNo
    )
    this.measureService.getNewUsersCount(formattedStartOfWeek, formattedCurrentDate).subscribe(
      data => this.NewUsers = data.data.newCustomerNo
    )
    this.measureService.getRefundsCount(formattedStartOfWeek, formattedCurrentDate).subscribe(
      data => this.Refunds = data.data.canceledBookingsNo
    )
  }

}
