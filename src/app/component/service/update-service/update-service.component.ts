import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceStatus } from '../../models/ServiceStatus';
import { Service } from '../../models/Service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/shared/service/service.service';
import { ToastrService } from 'ngx-toastr';
import { ServiceMetadata } from '../../models/ServiceMetadata';
import { LanguageService } from 'src/app/shared/service/language.service';
import { TranslateService } from '@ngx-translate/core';

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

  updateService?: Service;
  service?: Service;

  constructor(private formBuilder: FormBuilder,
              private serviceService: ServiceService,
              public activeModal: NgbActiveModal,
              private toastr: ToastrService,
              private languageService: LanguageService,
              public translate: TranslateService) {

    this.addServiceForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
    });

    this.languageService.selectedLanguage$.subscribe(lang => {
      this.translate.use(lang);
    });
    
  }

  ngOnInit() {
    this.addServiceForm.valueChanges.subscribe(() => {
      this.formValueChanged = true;
    });
  }
  onSubmit() {
    const AddedserviceMd: ServiceMetadata[] = [];
    if (this.addServiceForm.invalid) {
      return;
    }

    this.updateService = new Service(
      this.addServiceForm.get('name')?.value,
      this.addServiceForm.get('description')?.value,
      +this.addServiceForm.get('status')?.value,
      this.service?.id
    );

    if (this.updateService != null) {
      if (this.formValueChanged) {
        this.serviceService.UpdateService(+this.serviceId, this.updateService).subscribe(res => {
          this.serviceAdded.emit();
          location.reload();
          this.showToast();
        });
      } else {
        this.showToastfornoupdates();
      }
    }
  }

  getControl(fullName: any) {
    return this.addServiceForm.get(fullName);
  }

  closeModal() {
    this.activeModal.close();
  }

  showToast() {
    this.toastr.success('Update, Done!', 'Success');
  }

  showToastfornoupdates() {
    this.toastr.info('No data changes detected.', 'Info');
  }
}






// import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ServiceStatus } from '../../models/ServiceStatus';
// import { Service } from '../../models/Service';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { ServiceService } from 'src/app/shared/service/service.service';
// import { ResourceType } from '../../models/ResourceType';
// import { ToastrService } from 'ngx-toastr';
// import { ServiceMetaDataService } from 'src/app/shared/service/resource-meta-data.service';
// import { ServiceMetadata } from '../../models/ServiceMetadata';
// import { JsonPipe } from '@angular/common';

// @Component({
//   selector: 'app-update-service',
//   templateUrl: './update-service.component.html',
//   styleUrls: ['./update-service.component.css']
// })
// export class UpdateServiceComponent {
//   @Input() serviceId: string = '';
//   @Output() serviceAdded: EventEmitter<void> = new EventEmitter<void>();
//   addServiceForm: FormGroup ;
//   serviceStatus: ServiceStatus = ServiceStatus.Active;
//   formValueChanged: boolean = false;


//   updateService?: Service;
//   service?:Service ;
//   constructor(private formBuilder: FormBuilder,
//     @Inject(ServiceService) private serviceService : ServiceService,
//     // @Inject(ServiceMetaDataService) private serviceeMetaDataService: ServiceMetaDataService,
//       public activeModal: NgbActiveModal,
//     private toastr: ToastrService
//     ) {

//     this.addServiceForm = this.formBuilder.group({
//       id: [''],
//       name: ['',Validators.required],
//       description: ['',Validators.required],
//       status: ['',Validators.required],
//     });
//   }
//   ngOnInit(){

//         this.serviceService.getById(+this.serviceId).subscribe(res =>
//           {
//             this.service= res.data[0];
//             this.addServiceForm.setValue(this.service);
//           });
//           this.addServiceForm.valueChanges.subscribe(() => {
//             this.formValueChanged = true;
//           });
//   }
//   onSubmit() {
//     const AddedserviceMd :ServiceMetadata[]=[];
//     if (this.addServiceForm.invalid) {
//       return;
//     }


//     this.updateService= new Service(this.addServiceForm.get('name')?.value,
//                             this.addServiceForm.get('description')?.value,
//                             +this.addServiceForm.get('status')?.value,
//                             this.service?.id);
//    if(this.updateService != null )
//       {
//         this.serviceService.UpdateService(+this.serviceId , this.updateService).subscribe(res=>{
//           this.serviceAdded.emit();
//           location.reload();
//           this.showToast();
//         })
//       }

//   }
//   getControl(fullName:any)
//   {
//     return this.addServiceForm.get(fullName);
//   }
//   closeModal(){
//     this.activeModal.close();
//   }
//   showToast() {
//     this.toastr.success('update , Done!', 'Success');
//   }
//   showToastfornoupdates() {
//     this.toastr.success('update , Done!', 'Success');
//   }
// }
