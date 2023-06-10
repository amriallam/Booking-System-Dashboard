import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceStatus } from '../../models/ServiceStatus';
import { Service } from '../../models/Service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ResourceType } from '../../models/ResourceType';

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
  resourceTypes : ResourceType[]=[];

  updateService?: Service;
  service?:Service ;
  constructor(private formBuilder: FormBuilder,
    @Inject(ServiceService) private serviceService : ServiceService,
    public activeModal: NgbActiveModal
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
    this.serviceService.getById(+this.serviceId).subscribe(res =>
      {
        this.service= res.data[0];
        this.addServiceForm.setValue(this.service);
      });
      this.serviceService.GetResourceType().subscribe(res =>{
        this.resourceTypes= res.data;
        console.log(this.resourceTypes);
      });
  }
  onSubmit() {
    if (this.addServiceForm.invalid) {
      alert("knjdv");
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
}
