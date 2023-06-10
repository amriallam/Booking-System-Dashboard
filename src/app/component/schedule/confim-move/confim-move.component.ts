import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confim-move',
  templateUrl: './confim-move.component.html',
})
export class ConfimMoveComponent {
  newStart: string = '';
  newEnd: string = '';
  schedule: any;
  constructor(public modal: NgbActiveModal) { }
}
