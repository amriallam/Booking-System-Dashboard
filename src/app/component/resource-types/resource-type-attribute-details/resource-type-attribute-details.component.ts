import { Component, Input, OnInit } from '@angular/core';
import { AttributeMetadata } from '../../models/AttributeMetadata';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ResourceType } from '../../models/resource-type';

@Component({
  selector: 'app-resource-type-attribute-details',
  templateUrl: './resource-type-attribute-details.component.html',
})
export class ResourceTypeAttributeDetailsComponent implements OnInit {
  @Input() public ResourceType: ResourceType;
  ResourceTypeAttributes: AttributeMetadata[];

  constructor(public activeModal: NgbActiveModal) {
    this.ResourceTypeAttributes = [
      { Id: "1", AttributeName: "Name", AttributeType: "String" },
      { Id: "2", AttributeName: "Loaction", AttributeType: "String" },
      { Id: "3", AttributeName: "Date of Birth", AttributeType: "Date" }
    ];
    this.ResourceType = new ResourceType("", "", "", 0, "");
  }

  ngOnInit(): void { }

  closeModal() {
    this.activeModal.close();
  }

}
