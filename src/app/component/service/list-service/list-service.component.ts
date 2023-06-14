import { Component, OnInit, OnChanges, Input, Inject } from '@angular/core';
import { ServiceService } from 'src/app/shared/service/service.service';
import { Service } from '../../models/Service';
import { ServiceStatus } from '../../models/ServiceStatus';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateServiceComponent } from '../update-service/update-service.component';
import { DeleteServiceComponent } from '../delete-service/delete-service.component';
import { DetailsServiceComponent } from '../details-service/details-service.component';
import { UpdateResoucetypefroserviceComponent } from '../update-resoucetypefroservice/update-resoucetypefroservice.component';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent {
  @Input() selectedStatus?: ServiceStatus;
  services: Service[] = [];
  // selectedStatus?: ServiceStatus;
  dataExist: boolean = true;
  constructor(@Inject(ServiceService) private serviceService: ServiceService, private modal: NgbModal) { }
  ngOnInit() {
    this.loadServices();
    console.log(this.dataExist);
  }
  // ngOnChanges() {
  //   this.loadServices();
  //   console.log(this.dataExist);
  // }
  // loadServices() {
  //   if (this.selectedStatus == null) {
  //     this.serviceService.getAll().subscribe((res) => {
  //       this.services = res.data;
  //       if (this.services.length == 0) {
  //         this.dataExist = false;
          
  //       }
  //       else{
  //         this.dataExist= true;
  //       }
  //     })
  //   }
  //   else {
  //     this.serviceService.getByResourceType(this.selectedStatus).subscribe((res) => {
  //       this.services = res.data;
  //       if (this.services.length == 0) {
  //         this.dataExist = false;
  //       }
  //     })
  //   }

  // }
  loadServices() {
    if (this.selectedStatus == null) {
      this.serviceService.getAll().subscribe((res) => {
        this.services = res.data;
        this.dataExist = this.services.length > 0;
      });
    } else {
      this.serviceService.getByResourceType(this.selectedStatus).subscribe((res) => {
        this.services = res.data;
        this.dataExist = this.services.length > 0;
      });
    }
  }
  
  openDetailsModal(service: Service) {
    const modelRef = this.modal.open(DetailsServiceComponent, {
      centered: true,
    });
    modelRef.componentInstance.serviceId = service.id;
  }
  openUpdateRTModal(service : Service){
      const modelRef = this.modal.open(UpdateResoucetypefroserviceComponent, {
        centered: true,
      });
      modelRef.componentInstance.serviceId = service.id;
    
  }
  openUpdateModal(service: Service) {
    const modelRef = this.modal.open(UpdateServiceComponent, {
      centered: true,
    });
    modelRef.componentInstance.serviceId = service.id;
  }
  openDeleteModal(service: Service) {
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
