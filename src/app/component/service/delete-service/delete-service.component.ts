import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Service } from '../../models/Service';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/service/service.service';
import { NgModel } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.scss']
})
export class DeleteServiceComponent {
  @Input() serviceId: string = '';
  @Output() serviceDeleted: EventEmitter<void> = new EventEmitter<void>();

  service: Service | undefined;
  constructor(private route: ActivatedRoute,
                private serviceService :ServiceService,
                private activeModal : NgbActiveModal){}
  ngOnInit(){
    this.serviceService.getById(+this.serviceId).subscribe(res =>{
        this.service=res.data[0]
    })
  }
  deleteService(id:number){
    this.serviceService.DeleteService(id).subscribe(res => {
      this.serviceDeleted.emit();
      location.reload();
    });
  }
  closeModal(){
    this.activeModal.close();
  }

}
