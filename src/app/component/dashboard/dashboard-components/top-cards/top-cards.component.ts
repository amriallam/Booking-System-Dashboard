import { Component, OnInit } from '@angular/core';
import { topcard } from "../../../models/topcard";
import { MeasuresService } from 'src/app/shared/service/measures.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/service/language.service';

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
  constructor(private measureService: MeasuresService,
              private languageService: LanguageService,
              public translate: TranslateService) {

    this.languageService.selectedLanguage$.subscribe(lang => {
      this.translate.use(lang);
    });
    this.topcards = [

      {
        bgcolor: 'success',
        icon: 'bi bi-coin',
        subtitle: 'Earning'
      },
      {
        bgcolor: 'danger',
        icon: 'bi bi-arrow-counterclockwise',
        subtitle: 'Refunds'
      },
      {
        bgcolor: 'warning',
        icon: 'bi bi-people',
        subtitle: 'Users Registered'
      },
      {
        bgcolor: 'info',
        icon: 'bi bi-bag',
        subtitle: 'Bookings'
      },

    ]
  }

  ngOnInit() {
    this.measureService.dateSubject.subscribe((value) => {
      this.updateCardsInfo(value.fromDate, value.toDate);
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
