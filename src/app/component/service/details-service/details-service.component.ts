import { Component, Inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/service/service.service';
import { Service } from '../../models/Service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details-service',
  templateUrl: './details-service.component.html',
  // styleUrls: ['./details-service.component.scss']
})
export class DetailsServiceComponent {
  @Input() serviceId: string = '';
  service: Service | undefined;
  constructor(private route: ActivatedRoute,
                @Inject(ServiceService) private serviceService :ServiceService,
                private activeModal : NgbActiveModal){}
  ngOnInit(){
    this.serviceService.getById(+this.serviceId).subscribe(res =>{
        this.service=res.data[0]
    })
  }
  reloadServiceList(){
    this.serviceService.getById(+this.serviceId).subscribe(res =>{
      this.service=res.data[0]
  })
  }
  closeModal(){
    this.activeModal.close();
  }

}
