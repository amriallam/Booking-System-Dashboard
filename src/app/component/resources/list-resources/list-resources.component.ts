import { Component, OnInit, ViewChild } from "@angular/core";
import { Resource } from "../../models/Resource";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ResourceDetailsComponent } from "../resource-details/resource-details.component";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";

@Component({
  selector: "app-list-resources",
  templateUrl: "./list-resources.component.html",
  standalone: true,
  imports: [MatPaginatorModule],
})
export class ListResourcesComponent implements OnInit {
  constructor(private modal: NgbModal) {}
  Resources: Resource[] = [
    {
      Id: "1",
      Name: "first",
      ResourceType: "Maid rental for cleaning differnet households",
      Price: 30,
    },
    {
      Id: "2",
      Name: "second",
      ResourceType: "Car rental for devliery service",
      Price: 20,
    },
    {
      Id: "3",
      Name: "third",
      ResourceType: "Hotel room rental in a hotel",
      Price: 40,
    },
    {
      Id: "4",
      Name: "fourth",
      ResourceType: "Airplane rental for entertainment or delivery",
      Price: 5,
    },
  ];

  ngOnInit(): void {}
  openModal(Resource: Resource) {
    const modelRef = this.modal.open(ResourceDetailsComponent, {
      centered: true,
    });
    modelRef.componentInstance.ResourceType = Resource;
  }
}
