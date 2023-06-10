import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  schedule: any;
  TitleEdit: boolean = false;
  constructor(private modalref: NgbActiveModal) { }

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
