import { AfterViewInit, Component } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/service/language.service';
import { MeasuresService } from 'src/app/shared/service/measures.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
})
export class DatepickerComponent implements AfterViewInit {

  fromDate: string = "";
  toDate: string = "";
  currentDate: string = "";
  sevenDaysBefore: string = "";

  constructor(private measureService: MeasuresService,
              private languageService: LanguageService,
              public translate: TranslateService) {
    var sevenDaysBefore = new Date();
    sevenDaysBefore.setDate(new Date().getDate() - 7);
    this.currentDate = new Date().toISOString().split('T')[0];
    this.sevenDaysBefore = sevenDaysBefore.toISOString().split('T')[0];

    this.languageService.selectedLanguage$.subscribe(lang => {
      this.translate.use(lang);
    });
    
  }

  ngAfterViewInit(): void {
    this.measureService.DashboardDateChanged(this.sevenDaysBefore, this.currentDate);
  }

  onDateSelection(caller: string, date: NgbDate) {
    const { year, month, day } = date;
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');
    if (caller == "fromDate")
      this.fromDate = `${year}-${formattedMonth}-${formattedDay}`;
    else if (caller == "toDate")
      this.toDate = `${year}-${formattedMonth}-${formattedDay}`;
    if (this.fromDate && this.toDate) {
      this.measureService.DashboardDateChanged(this.fromDate, this.toDate);
    }
  }
}
