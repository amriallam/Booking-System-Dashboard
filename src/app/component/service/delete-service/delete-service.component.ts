import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Service } from '../../models/Service';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/service/service.service';
import { NgModel } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LanguageService } from 'src/app/shared/service/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.scss']
})
export class DeleteServiceComponent {
  @Input() serviceId: string = '';
  @Output() serviceDeleted: EventEmitter<void> = new EventEmitter<void>();

  service: Service | undefined;
  constructor(private route: ActivatedRoute,
                @Inject(ServiceService) private serviceService :ServiceService,
                private activeModal : NgbActiveModal,
                private toastr: ToastrService,
                private languageService: LanguageService,
                public translate: TranslateService
                ){
                  this.languageService.selectedLanguage$.subscribe(lang => {
                    this.translate.use(lang);
                  });
                }
  ngOnInit(){
    this.serviceService.getById(+this.serviceId).subscribe(res =>{
        this.service=res.data[0]
    })
  }
  deleteService(id:number){
    this.serviceService.DeleteService(id).subscribe(res => {
      this.serviceDeleted.emit();
      this.showToast();
      location.reload();
    });
  }
  closeModal(){
    this.activeModal.close();
  }
  showToast() {
    this.toastr.success('deleted , Done!', 'success');
  }
}
