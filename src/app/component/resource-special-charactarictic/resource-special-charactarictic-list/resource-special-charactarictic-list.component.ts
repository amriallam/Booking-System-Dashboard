import { Component } from '@angular/core';
import {ResourceSpecialCharactaristics} from '../../models/resource-special-charactaristics'
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceSpecialCharactaristicsService } from 'src/app/shared/service/resource-special-charactaristics.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ResourceSpecialCharactaricticDeleteComponent} from '../resource-special-charactarictic-delete/resource-special-charactarictic-delete.component';

@Component({
  selector: 'app-resource-special-charactarictic-list',
  templateUrl: './resource-special-charactarictic-list.component.html',
  styleUrls: ['./resource-special-charactarictic-list.component.scss']
})
export class ResourceSpecialCharactaricticListComponent {
  ResourceSpecialCharactaristics:ResourceSpecialCharactaristics[] = [];

  constructor(
    public ResourceSpecialCharactaristicsService:ResourceSpecialCharactaristicsService,
    private router:Router, 
    public activatedRouter:ActivatedRoute,
    private modal: NgbModal)
  {
 
  }

  ngOnInit(): void {

      this.ResourceSpecialCharactaristicsService.getAll().subscribe(RSC =>
        {
          this.ResourceSpecialCharactaristics = RSC.data;
          console.log(RSC.data);
        });
    }
    openDeleteModal(RSC: ResourceSpecialCharactaristics) {
      const modelRef = this.modal.open(ResourceSpecialCharactaricticDeleteComponent, {
        centered: true,
      });
      modelRef.componentInstance.id = RSC.id;
    }
  
}
