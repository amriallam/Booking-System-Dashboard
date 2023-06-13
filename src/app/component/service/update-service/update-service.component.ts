import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceStatus } from '../../models/ServiceStatus';
import { Service } from '../../models/Service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ResourceType } from '../../models/ResourceType';
import { ToastrService } from 'ngx-toastr';
import { ResourceTypeService } from 'src/app/services/resource-type.service';
import { ResourceMetaDataService } from 'src/app/shared/service/resource-meta-data.service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent {
  @Input() serviceId: string = '';
  @Output() serviceAdded: EventEmitter<void> = new EventEmitter<void>();
  addServiceForm: FormGroup ;
  serviceStatus: ServiceStatus = ServiceStatus.Active;
  allResourceTypes : ResourceType[]=[];
  oldresourceType : ResourceType[]=[];
  defaultSelectedRTY : number[]=[];
  
  updateService?: Service;
  service?:Service ;
  constructor(private formBuilder: FormBuilder,
    @Inject(ServiceService) private serviceService : ServiceService,
    @Inject(ResourceMetaDataService) private resourceMetaDataService: ResourceMetaDataService,
      public activeModal: NgbActiveModal,
    private toastr: ToastrService
    ) {

    this.addServiceForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      status: ['', [Validators.required]],
      resourceType: ['',[Validators.required]]
    });
  }
  ngOnInit(){
        // this.addServiceForm.get('resourceType')?.setValue();

    this.serviceService.getById(+this.serviceId).subscribe(res =>
      {
        this.service= res.data[0];
        // this.addServiceForm.setValue(this.service);

      });
      this.resourceMetaDataService.GetResourceType().subscribe(res =>{
        this.allResourceTypes= res.data;
        this.resourceMetaDataService.GetResourceTypeByserviceId(+this.serviceId).subscribe(res =>
          {
            console.log(res.data);
            res.data.forEach((element ) => {
              if(element.id != undefined){
                this.defaultSelectedRTY.push(element.id);
              }
            });
            console.log(this.defaultSelectedRTY);
            this.addServiceForm.get('resourceType')?.setValue(this.defaultSelectedRTY);
            
            // console.log(this.addServiceForm.get('resourceType')?.value);
          })
      });
  }
  onSubmit() {
    if (this.addServiceForm.invalid) {
      return;
    }
    console.log(this.addServiceForm.value);
    this.updateService= new Service(this.addServiceForm.get('name')?.value,
                            this.addServiceForm.get('description')?.value,
                            +this.addServiceForm.get('status')?.value,
                            this.service?.id);
    if(this.updateService != null)
    {
      this.serviceService.UpdateService(+this.serviceId , this.updateService).subscribe(res=>{
        this.serviceAdded.emit();
        location.reload();
        this.showToast();
      })
    }
    else
    {
      alert("null")
    }

  }
  getControl(fullName:any)
  {
    return this.addServiceForm.get(fullName);
  }
  closeModal(){
    this.activeModal.close();
  }
  showToast() {
    this.toastr.success('update , Done!', 'Success');
  }
}
