import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { ResourceSpecialCharactaristics } from '../../models/resource-special-charactaristics';
import { ActivatedRoute } from '@angular/router';
import { ResourceSpecialCharactaristicsService } from 'src/app/shared/service/resource-special-charactaristics.service'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resource-special-charactarictic-delete',
  templateUrl: './resource-special-charactarictic-delete.component.html',
  styleUrls: ['./resource-special-charactarictic-delete.component.scss']
})
export class ResourceSpecialCharactaricticDeleteComponent {
  @Input() id!: number;
  @Output() RSCDeleted: EventEmitter<void> = new EventEmitter<void>();

  ResourceSpecialCharactaristics!: ResourceSpecialCharactaristics;
  constructor(private route: ActivatedRoute,
                @Inject(ResourceSpecialCharactaristicsService) private ResourceSpecialCharactaristicsService :ResourceSpecialCharactaristicsService,
                private activeModal : NgbActiveModal,
                private toastr: ToastrService){}
   
  ngOnInit(){
  console.log(this.id+"nbvbnm");
  this.ResourceSpecialCharactaristicsService.getById(this.id).subscribe(res =>{
      this.ResourceSpecialCharactaristics=res.data
      console.log(JSON.stringify(res.data) + "on init");

  })
}

  deleteRSC(id:number){
    console.log(id +"from service");
    this.ResourceSpecialCharactaristicsService.Delete(id).subscribe(res => {
      //this.RSCDeleted.emit();
      console.log(res);
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
