import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/service/language.service';

@Component({
  selector: 'app-booking-item-detail',
  templateUrl: './booking-item-detail.component.html',
})
export class BookingItemDetailComponent implements OnInit {
  bookingItem: any;
  startTime: string = "";
  endTime: string = "";
  TitleEdit: boolean = false;
  constructor(private modalref: NgbActiveModal,
    private languageService: LanguageService,
    public translate: TranslateService) {
      this.languageService.selectedLanguage$.subscribe(lang => {
        this.translate.use(lang);
      });
    }

  ngOnInit(): void {
    this.bookingItem.date = this.bookingItem.start.value.toString().split("T")[0];
    this.startTime = this.bookingItem.start.value.split("T")[1];
    this.endTime = this.bookingItem.end.value.split("T")[1];
  }

  ToggleTitleEdit() {
    this.TitleEdit = !this.TitleEdit;
  }

  SaveTitleEdit() {
    this.TitleEdit = !this.TitleEdit;

    //Implement Edit Save on Schedule
  }

  closeModal() {
    this.modalref.close()
  }

}
