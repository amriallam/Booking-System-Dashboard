import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ServiceStatus } from '../../models/ServiceStatus';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Service } from '../../models/Service';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ResourceType } from '../../models/ResourceType';
import { ServiceMetadata } from '../../models/ServiceMetadata';
import { ToastrService } from 'ngx-toastr';
import { ServiceMetaDataService } from 'src/app/shared/service/resource-meta-data.service';
import { LanguageService } from 'src/app/shared/service/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent {
  @Output() serviceAdded: EventEmitter<void> = new EventEmitter<void>();
  addServiceForm: FormGroup;
  serviceStatus: ServiceStatus = 0;
  resourceTypes: ResourceType[] = [];
  serviceMd: ServiceMetadata[] = [];
  service?: Service;
  isNameExists: boolean = false;

  constructor(private formBuilder: FormBuilder,
    @Inject(ServiceService) private serviceService: ServiceService,
    @Inject(ServiceMetaDataService) private serviceMetaDataService: ServiceMetaDataService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private languageService: LanguageService,
    public translate: TranslateService
    ) {
    this.addServiceForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      status: ['', [Validators.required]],
      resourceType: ['', [Validators.required]]
    });

    this.languageService.selectedLanguage$.subscribe(lang => {
      this.translate.use(lang);
    });
    
  }
  ngOnInit() {
    this.serviceMetaDataService.GetResourceType().subscribe(res => {
      this.resourceTypes = res.data;
      console.log(this.resourceTypes);
    });
  }
  onSubmit() {
    if (this.addServiceForm.invalid) {
      return;
    }
    this.serviceService.getServiceByName(this.addServiceForm.get('name')?.value).subscribe(res => {
      if (res.data.length ==0) {
        this.service = new Service(this.addServiceForm.get('name')?.value,
          this.addServiceForm.get('description')?.value,
          +this.addServiceForm.get('status')?.value);

        if (this.service != null) {
          this.serviceService.AddService(this.service).subscribe(res => {
            if (res.data.id != undefined) {
              const ids: number[] = this.addServiceForm.get('resourceType')?.value;
              // console.log(ids)
              ids.forEach((element) => {
                this.serviceMd?.push(new ServiceMetadata(+element));
              });
              // console.log(res.data.name);
              this.serviceService.getServiceByName(res.data.name).subscribe((serv)=>{
                console.log(serv.data[0].id)
                if(serv.data[0].id != undefined){
                  this.serviceMetaDataService.AddServiceBulkMetaData(serv.data[0].id, this.serviceMd).subscribe(serMd => {
                    this.closeModal();
                    this.showToast();
                 })       
                }
              })
            }
          });
      }
      } else {
        this.isNameExists = true;
      }
   })

  }
  getControl(fullName: any) {
    return this.addServiceForm.get(fullName);
  }
  closeModal() {
    this.activeModal.close();
  }

  showToast() {
    this.toastr.success('add Service', 'Success');
  }

}
