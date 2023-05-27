import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AttributeMetadata } from "../../models/AttributeMetadata";
import { Resource } from "../../models/Resource";

@Component({
  selector: "app-resource-details",
  templateUrl: "./resource-details.component.html",
})
export class ResourceDetailsComponent implements OnInit {
  @Input() public Resource: Resource;
  ResourceAttributes: AttributeMetadata[];

  constructor(public activeModal: NgbActiveModal) {
    this.ResourceAttributes = [
      { Id: "1", AttributeName: "Name", AttributeType: "String" },
      { Id: "2", AttributeName: "Loaction", AttributeType: "String" },
      { Id: "3", AttributeName: "Date of Birth", AttributeType: "Date" },
    ];
    this.Resource = new Resource("", "", "", 0);
  }

  ngOnInit(): void {}

  closeModal() {
    this.activeModal.close();
  }
}
