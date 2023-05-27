import { Component, OnInit } from '@angular/core';
import { ResourceType } from '../../models/ResourceType';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResourceTypeAttributeDetailsComponent } from '../resource-type-attribute-details/resource-type-attribute-details.component';

@Component({
  selector: 'app-list-reousrce-types',
  templateUrl: './list-reousrce-types.component.html',
})
export class ListReousrceTypesComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  searchTerm: string = "";

  ResourceTypes: ResourceType[] = [
    { Id: "1", Name: "Maid", Description: "Maid rental for cleaning differnet households", Quantity: 30, thumbnail: "" },
    { Id: "2", Name: "Car", Description: "Car rental for devliery service", Quantity: 20, thumbnail: "" },
    { Id: "3", Name: "Room", Description: "Hotel room rental in a hotel", Quantity: 40, thumbnail: "" },
    { Id: "4", Name: "Airplane", Description: "Airplane rental for entertainment or delivery", Quantity: 5, thumbnail: "" }
  ];


  ngOnInit(): void { }

  openModal(ResourceType: ResourceType) {
    const modelRef = this.modal.open(ResourceTypeAttributeDetailsComponent, { centered: true })
    modelRef.componentInstance.ResourceType = ResourceType;
  }

  matchesSearchTerm(rt: any): boolean {
    if (!this.searchTerm) {
      return true; // If no search term provided, show all resources
    }
    const name = rt.Name.toLowerCase();
    const searchTerm = this.searchTerm.toLowerCase();
    return name.includes(searchTerm); // Check if resource name includes the search term
  }


}
