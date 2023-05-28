import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AttributeMetadata } from '../../models/AttributeMetadata';
import { ResourceType } from '../../models/ResourceType';


@Component({
  selector: 'app-resource-type-attribute-details',
  templateUrl: './resource-type-attribute-details.component.html',
  styleUrls: ["./resource-type-attribute-details.component.scss"]
})
export class ResourceTypeAttributeDetailsComponent implements OnInit {
  @Input() public ResourceType: ResourceType;
  ResourceTypeAttributes: AttributeMetadata[];
  TitleEdit: boolean;
  constructor(public activeModal: NgbActiveModal) {
    this.ResourceTypeAttributes = [
      { Id: "1", AttributeName: "Name", AttributeType: "String" },
      { Id: "2", AttributeName: "Loaction", AttributeType: "String" },
      { Id: "3", AttributeName: "Date of Birth", AttributeType: "Date" }
    ];
    this.ResourceType = new ResourceType("", "", "", 0, "");
    this.TitleEdit = false;
  }

  ngOnInit(): void { }

  closeModal() {
    this.activeModal.close();
  }

  ToggleTitleEdit() { this.TitleEdit = !this.TitleEdit; }
  SaveTitleEdit() {
    this.ToggleTitleEdit();
  }
}
