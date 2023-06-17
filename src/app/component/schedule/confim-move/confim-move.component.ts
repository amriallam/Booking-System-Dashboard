import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/service/language.service';

@Component({
  selector: 'app-confim-move',
  templateUrl: './confim-move.component.html',
})
export class ConfimMoveComponent {
  newStart: string = '';
  newEnd: string = '';
  schedule: any;
  constructor(public modal: NgbActiveModal,
              private languageService: LanguageService,
              public translate: TranslateService){
                
      this.languageService.selectedLanguage$.subscribe(lang => {
        this.translate.use(lang);
      });
    }
}
