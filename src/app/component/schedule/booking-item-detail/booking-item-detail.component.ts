import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booking-item-detail',
  templateUrl: './booking-item-detail.component.html',
})
export class BookingItemDetailComponent implements OnInit {
  bookingItem: any;
  startTime: string = "";
  endTime: string = "";
  TitleEdit: boolean = false;
  constructor(private modalref: NgbActiveModal) { }

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
