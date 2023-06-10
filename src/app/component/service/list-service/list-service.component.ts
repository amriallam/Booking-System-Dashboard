import { Component , OnInit , OnChanges, Input } from '@angular/core';
import { ServiceService } from 'src/app/shared/service/service.service';
import { Service } from '../../models/Service';
import { right } from '@popperjs/core';
import { ServiceStatus } from '../../models/ServiceStatus';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateServiceComponent } from '../update-service/update-service.component';
import { DeleteServiceComponent } from '../delete-service/delete-service.component';
import { DetailsServiceComponent } from '../details-service/details-service.component';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent {
  services : Service[]=[];
  @Input() name: string = '';
  constructor(private serviceService :ServiceService ,private modal: NgbModal){

  }
  ngOnInit(){
  }
  ngOnChanges() {
    if(this.name ==""){
      this.serviceService.getAll().subscribe((res)=>{
        this.services= res.data;
      })
    }
    else{
      this.serviceService.getServiceByName(this.name).subscribe((res)=>{
        this.services= res.data;
        console.log(res)
      })
    }
  }

  openDetailsModal(service :Service){
    const modelRef = this.modal.open(DetailsServiceComponent, {
      centered: true,
    });
    modelRef.componentInstance.serviceId = service.id;
  }
  openUpdateModal(service :Service){
    const modelRef = this.modal.open(UpdateServiceComponent, {
      centered: true,
    });
    modelRef.componentInstance.serviceId = service.id;
  }
  openDeleteModal(service :Service){
    const modelRef = this.modal.open(DeleteServiceComponent, {
      centered: true,
    });
    modelRef.componentInstance.serviceId = service.id;
  }
  getServiceStatusText(status: ServiceStatus): string {
    switch (status) {
      case ServiceStatus.Active:
        return 'Active';
      case ServiceStatus.Inactive:
        return 'Inactive';
      case ServiceStatus.PendingApproval:
        return 'Pending Approval';
      default:
        return '';
    }
  }
}
