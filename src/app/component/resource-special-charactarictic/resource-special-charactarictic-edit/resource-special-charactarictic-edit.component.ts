import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/service/language.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ResourceSpecialCharactaristicsService } from 'src/app/shared/service/resource-special-charactaristics.service';
import { ResourceSpecialCharactaristics } from '../../models/resource-special-charactaristics';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resource-special-charactarictic-edit',
  templateUrl: './resource-special-charactarictic-edit.component.html',
  styleUrls: ['./resource-special-charactarictic-edit.component.scss']
})
export class ResourceSpecialCharactaricticEditComponent {

  @Input() RSCId: number=0 ;
  @Output() RSCAdded: EventEmitter<void> = new EventEmitter<void>();

  editRSCForm: FormGroup;
  RSC:ResourceSpecialCharactaristics;
  formatDate(date: string): string {
    return date ? new Date(date).toLocaleDateString() : 'Without Date';
  }
  constructor(private RSCService:ResourceSpecialCharactaristicsService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private languageService: LanguageService,
    public translate: TranslateService)
  {
    this.editRSCForm = new FormGroup({
      id: new FormControl(''),
      totalCapacity: new FormControl('', Validators.required),
      availableCapacity: new FormControl('', Validators.required),
      resourceID: new FormControl(''),
      day: new FormControl(''),
      scheduleID: new FormControl('')
    });

    this.RSC = new ResourceSpecialCharactaristics(0, 0, 0, 0, '2020/02/01', 0);
    this.languageService.selectedLanguage$.subscribe(lang => {
      this.translate.use(lang);
    });
  }

  ngOnInit() {
    this.RSCService.getById(this.RSCId).subscribe(res =>{
       this.RSC = res?.data;
 

       this.editRSCForm.patchValue({
         id: this.RSC?.id ,
         totalCapacity: this.RSC?.totalCapacity ,
        availableCapacity: this.RSC?.availableCapacity ,
        resourceID: this.RSC?.resourceID ,
      day: this.RSC?.day ,
      scheduleID: this.RSC?.scheduleID || null,
      });  

  
  })
}

  onSubmit(editRSCForm:FormGroup) {
    if(editRSCForm.invalid)
      return;

      const totalCapacity = editRSCForm.value.totalCapacity;
      const currentTotalCapacity = this.RSC.totalCapacity;
      const currentAvailableCapacity = this.RSC.availableCapacity;
    
      const capacityDifference = totalCapacity - currentTotalCapacity;
      const newAvailableCapacity = currentAvailableCapacity + capacityDifference;
    
      editRSCForm.patchValue({
        availableCapacity: newAvailableCapacity
      });


      this.RSCService.edit(editRSCForm.value).subscribe(res => {
        this.RSCAdded.emit();
        this.closeModal();
        location.reload();
        this.showToast();

      });

  }

  getControl(fullName: any) {
    return this.editRSCForm.get(fullName);
  }

  closeModal(){
    this.activeModal.close();
  }

  showToast() {
    this.toastr.success('Update, Done!', 'Success');
  }

}
