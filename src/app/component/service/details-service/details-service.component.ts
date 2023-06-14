import { Component, Inject, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceService } from 'src/app/shared/service/service.service';
import { Service } from '../../models/Service';
import { ResourceType } from '../../models/ResourceType';
import { ResourceTypeDetailsService } from 'src/app/services/resource-type-details.service';
import { ResourceTypeService } from 'src/app/services/resource-type.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResourceTypeAttributeDetailsComponent } from '../../resource-types/resource-type-attribute-details/resource-type-attribute-details.component';
import { ServiceMetaDataService } from 'src/app/shared/service/resource-meta-data.service';
import { ServiceMetadata } from '../../models/ServiceMetadata';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details-service',
  templateUrl: './details-service.component.html',
})
export class DetailsServiceComponent implements OnInit{
  service?: Service ;
  serviceId :number =0;
  resourceTypes : ResourceType[]=[];
  serviceMDs : ServiceMetadata[]=[];
  constructor(private route: ActivatedRoute,
                @Inject(ServiceService) private serviceService :ServiceService,
                private modal: NgbModal,
                private toastr: ToastrService,
                @Inject(ResourceTypeService) private resourceService : ResourceTypeService,
                @Inject(ServiceMetaDataService) private ServiceMDservice : ServiceMetaDataService ){                  
                
              this.route.params.subscribe((params: Params) => {
                this.serviceId = params['id'];
                // console.log(this.serviceId)
            });
    }
  ngOnInit(){
    if(this.serviceId != null){
      this.serviceService.getById(+this.serviceId).subscribe(res =>{
          this.service=res.data[0]
        })
        this.getResourceTypeByServiceId(this.serviceId);
    }
    else
    {
      console.log("not found resource with this id ")
    }
  }
 
  openModal(ResourceType: ResourceType) {
    const modelRef = this.modal.open(ResourceTypeAttributeDetailsComponent, {
      centered: true,
    });
    modelRef.componentInstance.ResourceType = ResourceType;

  }
  getAllResourceTypes() {
    this.resourceService.getResourceTypes().subscribe((response: any) => {
      this.resourceTypes = response.data;
    });
  }
  getResourceTypeByServiceId(serviceId : number){
    this.ServiceMDservice.GetResourceTypeByserviceId(serviceId).subscribe(res =>{
      this.serviceMDs = res.data;
    })
  }
  showToast() {
    this.toastr.success('deleted , Done!', 'success');
  }
}
