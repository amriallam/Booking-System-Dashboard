import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ServiceMetaDataService } from 'src/app/shared/service/resource-meta-data.service';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ResourceType } from '../../models/ResourceType';
import { Service } from '../../models/Service';
import { ServiceMetadata } from '../../models/ServiceMetadata';
import { ServiceStatus } from '../../models/ServiceStatus';

@Component({
  selector: 'app-update-resoucetypefroservice',
  templateUrl: './update-resoucetypefroservice.component.html',
  styleUrls: ['./update-resoucetypefroservice.component.scss']
})
export class UpdateResoucetypefroserviceComponent {
  checkboxForm: FormGroup;


  @Input() serviceId: string = '';
  @Output() serviceAdded: EventEmitter<void> = new EventEmitter<void>();
  serviceStatus: ServiceStatus = ServiceStatus.Active;
  // will shown in dropdown list
  allResourceTypes : ResourceType[]=[];
  // selected list by defualt
  oldresourceType : ResourceType[]=[];
  //ids for this selected 
  defaultSelectedRTY : number[]=[];

  //deleted resource type
  deletedResourceTypeIDs : number[]=[];
  AddResourceTypeIDs : number[]=[];
  newResourceTypesMD :ServiceMetadata[] =[];
  
  updateService?: Service;
  service?:Service ;
  constructor(private formBuilder: FormBuilder,
    @Inject(ServiceService) private serviceService : ServiceService,
    @Inject(ServiceMetaDataService) private serviceeMetaDataService: ServiceMetaDataService,
      public activeModal: NgbActiveModal,
    private toastr: ToastrService
    ) {
      this.checkboxForm = this.formBuilder.group({
        resourceType: ['',[Validators.required]]
      });
    }
  ngOnInit(){
    
      this.serviceeMetaDataService.GetResourceType().subscribe(res =>{
        this.allResourceTypes= res.data;
        this.serviceeMetaDataService.GetResourceTypeByserviceId(+this.serviceId).subscribe(res =>
          {
            res.data.forEach((element ) => {
                this.defaultSelectedRTY.push(element.resourceTypeId);
            });
          })
      });
  }
  onSubmit() {
    const AddedserviceMd :ServiceMetadata[]=[];
    if (this.checkboxForm?.invalid) {
      return;
    }
    // console.log("default "+this.defaultSelectedRTY);
    const selectedResourceTypeIds: number[] = this.checkboxForm.value.resourceType;

    // console.log('selected' + selectedResourceTypeIds);
      this.deletedResourceTypeIDs = this.defaultSelectedRTY.filter((item )=> !selectedResourceTypeIds.includes(item));
      // console.log('deleted  ' + this.deletedResourceTypeIDs);
      this.AddResourceTypeIDs = selectedResourceTypeIds.filter(item => !this.defaultSelectedRTY.includes(item));
      // console.log('add ' + this.AddResourceTypeIDs);
      this.AddResourceTypeIDs.forEach((element) => {
         AddedserviceMd?.push(new ServiceMetadata( +element));
      });
    if(AddedserviceMd.length !=0){
      this.serviceeMetaDataService.AddServiceBulkMetaData(+this.serviceId,AddedserviceMd).subscribe(res =>{
        this.serviceAdded.emit();
        // this.showToast();
        this.closeModal()
        // alert("added")
      })
    } 
    if(this.deletedResourceTypeIDs.length != 0){
      this.deletedResourceTypeIDs.forEach(element => {
          this.serviceeMetaDataService.DeleteServiceMetaData(+this.serviceId, element).subscribe(()=>
            this.showToast()
          )
        });
    }  
  }
  getControl(fullName:any)
  {
    return this.checkboxForm.get(fullName);
  }
  closeModal(){
    this.activeModal.close();
  }
  showToast() {
    this.toastr.success('update , Done!', 'Success');
  }

}
