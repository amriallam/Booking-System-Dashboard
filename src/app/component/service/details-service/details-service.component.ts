import { Component, Inject, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceService } from 'src/app/shared/service/service.service';
import { Service } from '../../models/Service';
import { ResourceType } from '../../models/ResourceType';
import { ResourceTypeDetailsService } from 'src/app/services/resource-type-details.service';
import { ResourceTypeService } from 'src/app/services/resource-type.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResourceTypeAttributeDetailsComponent } from '../../resource-types/resource-type-attribute-details/resource-type-attribute-details.component';

@Component({
  selector: 'app-details-service',
  templateUrl: './details-service.component.html',
})
export class DetailsServiceComponent implements OnInit{
  service?: Service ;
  serviceId :number =0;
  resourceTypes : ResourceType[]=[]
  constructor(private route: ActivatedRoute,
                @Inject(ServiceService) private serviceService :ServiceService,
                private modal: NgbModal,
                @Inject(ResourceTypeService) private resourceService : ResourceTypeService ){
              this.route.params.subscribe((params: Params) => {
                this.serviceId = params['id'];
                // console.log(this.serviceId)
            });
    }
  ngOnInit(){
    // console.log(this.serviceId)
    if(this.serviceId != null){
      this.serviceService.getById(+this.serviceId).subscribe(res =>{
          console.log(this.service=res.data[0])
        })
        this.getAllResourceTypes()
    }
    else
    {
      console.log("not found resource with this id ")
    }
  }
  // reloadServiceList(){
  //   this.serviceService.getById(this.serviceId).subscribe(res =>{
  //     this.service=res.data[0]
  // })
  // }
 
  openModal(ResourceType: ResourceType) {
    const modelRef = this.modal.open(ResourceTypeAttributeDetailsComponent, {
      centered: true,
    });
    modelRef.componentInstance.ResourceType = ResourceType;

  }
  deleteResourceType(id: number) {
    this.resourceService.deleteResourceType(id).subscribe((response) => {
      this.getAllResourceTypes();
    });
  }
  getAllResourceTypes() {
    this.resourceService.getResourceTypes().subscribe((response: any) => {
      this.resourceTypes = response.data;
    });
  }

}
