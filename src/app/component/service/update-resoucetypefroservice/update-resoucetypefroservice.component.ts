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
  allResourceTypes: ResourceType[] = [];
  // selected list by defualt
  oldresourceType: ResourceType[] = [];
  //ids for this selected 
  defaultSelectedRTY: number[] = [];

  //deleted resource type
  deletedResourceTypeIDs: number[] = [];
  AddResourceTypeIDs: number[] = [];
  newResourceTypesMD: ServiceMetadata[] = [];
  formValueChanged: boolean = false;
  updateService?: Service;
  AddedserviceMd: ServiceMetadata[] = [];
  selectedResourceTypeIds: number[]=[];
  service?: Service;
  constructor(private formBuilder: FormBuilder,
    @Inject(ServiceService) private serviceService: ServiceService,
    @Inject(ServiceMetaDataService) private serviceeMetaDataService: ServiceMetaDataService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService
  ) {
    this.checkboxForm = this.formBuilder.group({
      resourceType: ['']
    });
  }
  ngOnInit() {
    this.serviceeMetaDataService.GetResourceType().subscribe(res => {
      this.allResourceTypes = res.data;
      this.serviceeMetaDataService.GetResourceTypeByserviceId(+this.serviceId).subscribe(res => {
        res.data.forEach((element) => {
          this.defaultSelectedRTY.push(element.resourceTypeId);
        });
      })
    });
    this.checkboxForm.valueChanges.subscribe(() => {
      this.formValueChanged = true;
    });
  }
  onSubmit() {
    // AddedserviceMd: ServiceMetadata[] = [];
    // selectedResourceTypeIds: number[]=[];
    if (this.checkboxForm.invalid || !this.formValueChanged) {
      return;
    }
    
    console.log("default " + this.defaultSelectedRTY);
    this.selectedResourceTypeIds.push(...this.checkboxForm.value.resourceType) ;

    console.log('selected' + this.selectedResourceTypeIds);
    this.deletedResourceTypeIDs = this.defaultSelectedRTY.filter((item) => !this.selectedResourceTypeIds.includes(item));
    console.log('deleted  ' + this.deletedResourceTypeIDs);
    this.AddResourceTypeIDs = this.selectedResourceTypeIds.filter(item => !this.defaultSelectedRTY.includes(item));
    console.log('add ' + this.AddResourceTypeIDs);
    this.AddResourceTypeIDs.forEach((element) => {
      this.AddedserviceMd?.push(new ServiceMetadata(+element));
    });

    if (this.AddedserviceMd.length != 0 || this.deletedResourceTypeIDs.length != 0) {
      this.serviceeMetaDataService.AddServiceBulkMetaData(+this.serviceId, this.AddedserviceMd).subscribe(res => {
        if (this.deletedResourceTypeIDs.length != 0) {
          this.deletedResourceTypeIDs.forEach(element => {
            this.serviceeMetaDataService.DeleteServiceMetaData(+this.serviceId, element).subscribe((res) => {
              // this.showToast()
            })
          });
          this.closeModal()
        }
        else {
          this.showToast();
          this.closeModal();
        }
      })
    }
    else if (this.AddedserviceMd.length == 0 && this.deletedResourceTypeIDs.length != 0) {
        this.deletedResourceTypeIDs.forEach(element => {
          this.serviceeMetaDataService.DeleteServiceMetaData(+this.serviceId, element).subscribe((res) => {
            this.showToast();
            this.closeModal();
          })
        });
      
    }
  }

  getControl(fullName: any) {
    return this.checkboxForm.get(fullName);
  }
  closeModal() {
    this.activeModal.close();
  }
  showToast() {
    this.toastr.success('update , Done!', 'Success');
  }

}
