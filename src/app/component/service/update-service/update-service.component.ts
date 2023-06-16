import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceStatus } from '../../models/ServiceStatus';
import { Service } from '../../models/Service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ToastrService } from 'ngx-toastr';
import { ServiceMetadata } from '../../models/ServiceMetadata';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent {
  @Input() serviceId: string = '';
  @Output() serviceAdded: EventEmitter<void> = new EventEmitter<void>();
  addServiceForm: FormGroup;
  serviceStatus: ServiceStatus = ServiceStatus.Active;
  formValueChanged: boolean = false;

  // updateService?: Service;
  service?: Service;

  constructor(private formBuilder: FormBuilder,
              private serviceService: ServiceService,
              public activeModal: NgbActiveModal,
              private toastr: ToastrService) {

    
    this.addServiceForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  
  ngOnInit() {
    this.serviceService.getById(+this.serviceId).subscribe(res =>{
      this.service = res.data[0];
      this.addServiceForm.setValue({
        id: this.service?.id || '',
        name: this.service?.name || '',
        description: this.service?.description || '',
        status: this.service?.status || ''
      });
      this.addServiceForm.valueChanges.subscribe(() => {
        this.formValueChanged = true;
      });
    })
  }
  onSubmit() {
    const AddedserviceMd: ServiceMetadata[] = [];
    if (this.addServiceForm.invalid) {
      return;
    }
  
    const updatedService = new Service(
      this.addServiceForm.get('name')?.value,
      this.addServiceForm.get('description')?.value,
      +this.addServiceForm.get('status')?.value,
      this.addServiceForm.get('id')?.value
    );
  
    if (this.formValueChanged) {
      this.serviceService.UpdateService(+this.serviceId, updatedService).subscribe(res => {
        this.serviceAdded.emit();
        this.closeModal();
        location.reload();
        this.showToast();
        
      });
    } else {
      console.log('No changes detected');
    }   
  }

  getControl(fullName: any) {
    return this.addServiceForm.get(fullName);
  }

  closeModal(){
    this.activeModal.close();
  }

  showToast() {
    this.toastr.success('Update, Done!', 'Success');
  }
 
}

