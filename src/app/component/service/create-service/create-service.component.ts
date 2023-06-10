import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ServiceStatus } from '../../models/ServiceStatus';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Service } from '../../models/Service';
import { compareAsc } from 'date-fns';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent {
  @Output() serviceAdded: EventEmitter<void> = new EventEmitter<void>();
  addServiceForm: FormGroup ;
  serviceStatus : ServiceStatus =0;
  service?:Service ;
  constructor(private formBuilder: FormBuilder,
    private serviceService : ServiceService,
    public activeModal: NgbActiveModal
    ) {
    this.addServiceForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.addServiceForm.invalid) {
      return;
    }
    console.log(this.addServiceForm.value);
    this.service = new Service(this.addServiceForm.get('name')?.value,
                            this.addServiceForm.get('description')?.value,
                            +this.addServiceForm.get('status')?.value);
    if(this.service != null)
    {
      console.log(this.service);
      this.serviceService.AddService(this.service).subscribe(res=>{
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
