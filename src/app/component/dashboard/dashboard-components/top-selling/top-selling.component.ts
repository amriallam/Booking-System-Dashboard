import { Component, OnInit } from '@angular/core';
import { TopSellingResource } from '../../../models/TopSellingResource';
import { MeasuresService } from 'src/app/shared/service/measures.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/service/language.service';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html'
})
export class TopSellingComponent implements OnInit {

  topSelling: TopSellingResource[] = [];

  constructor(private measureService: MeasuresService,
              private languageService: LanguageService,
              public translate: TranslateService) {

    this.languageService.selectedLanguage$.subscribe(lang => {
      this.translate.use(lang);
    });

  }

  ngOnInit(): void {
    this.measureService.dateSubject.subscribe((value) => {
      this.updateTopSelling(value.fromDate, value.toDate);
    });
  }

  updateTopSelling(formattedStartOfWeek: string, formattedCurrentDate: string) {
    this.measureService.getTop5SellingResources(formattedStartOfWeek, formattedCurrentDate).subscribe(res =>
      this.topSelling = res.data
    )
  }
}
