import { Component, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/service/language.service';
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  constructor(private languageService: LanguageService,
              public translate: TranslateService) {

    this.languageService.selectedLanguage$.subscribe(lang => {
    this.translate.use(lang);
    });
    this.subtitle = 'This is some text within a card block.';
  }
  ngAfterViewInit() { }
}
