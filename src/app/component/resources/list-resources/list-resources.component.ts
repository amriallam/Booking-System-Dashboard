import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ResourceDetailsComponent } from "../resource-details/resource-details.component";
import { Resource } from "../../models/Resouce";

@Component({
  selector: "a-pp-list-resources",
  templateUrl: "./list-resources.component.html",
})
export class ListResourcesComponent implements OnInit {

  constructor(private modal: NgbModal) { }
  searchResourceType: string = "";
  Resources: Resource[] = [
    {
      Id: "1",
      Name: "Scarlett Johansson",
      ResourceType: "Maid",
      Price: 30,
    },
    {
      Id: "2",
      Name: "Ferrari F40",
      ResourceType: "Car",
      Price: 20,
    },
    {
      Id: "3",
      Name: "R-10X03#14",
      ResourceType: "Room",
      Price: 40,
    },
    {
      Id: "4",
      Name: "Boeing 747-400",
      ResourceType: "Airplane",
      Price: 5,
    },
  ];
  page: number = 1;
  pageSize: number = this.Resources.length;

  ngOnInit(): void { }
  openModal(Resource: Resource) {
    const modelRef = this.modal.open(ResourceDetailsComponent, {
      centered: true,
    });
    modelRef.componentInstance.ResourceType = Resource;
  }
  getResourceTypes(): string[] {
    return Array.from(new Set(this.Resources.map((resource) => resource.ResourceType)));
  }
  getResources(): Resource[] {
    if (this.searchResourceType) {
      return this.Resources.filter((resource) =>
        resource.ResourceType.toLowerCase().includes(this.searchResourceType.toLowerCase())
      );
    } else {
      return this.Resources;
    }
  }
}
