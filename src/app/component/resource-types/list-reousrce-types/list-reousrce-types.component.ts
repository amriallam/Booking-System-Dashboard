import { Component, OnInit } from "@angular/core";
import { ResourceType } from "../../models/ResourceType";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ResourceTypeAttributeDetailsComponent } from "../resource-type-attribute-details/resource-type-attribute-details.component";
import { ResourceTypeService } from "../../../services/resource-type.service";
import { CreateResourceTypeComponent } from "src/app/component/resource-types/create-resource-type/create-resource-type.component";
import { DeleteResourceTypeComponent } from "../delete-resource-type/delete-resource-type.component";
@Component({
  selector: "app-list-reousrce-types",
  templateUrl: "./list-reousrce-types.component.html",
  styleUrls: ["./list-reousrce-types.component.scss"],
})
export class ListReousrceTypesComponent implements OnInit {
  constructor(
    private modal: NgbModal,
    private ResourceTypeService: ResourceTypeService
  ) { }

  selectedCardID: any;
  searchTerm: string = "";

  ResourceTypes: ResourceType[] = [];

  getAllResourceTypes() {
    this.ResourceTypeService.getResourceTypes().subscribe((response: any) => {
      this.ResourceTypes = response.data;
    });
  }

  ngOnInit(): void {
    this.getAllResourceTypes();
  }

  openModal(ResourceType: ResourceType) {
    const modelRef = this.modal.open(ResourceTypeAttributeDetailsComponent, {
      centered: true,
    });
    modelRef.componentInstance.ResourceType = ResourceType;

  }

  createResourceType() {
    const modelRef = this.modal.open(CreateResourceTypeComponent, {
      centered: true,
    });
  }

  deleteResourceType(id: number) {
    this.ResourceTypeService.deleteResourceType(id).subscribe((response) => {
      this.getAllResourceTypes();
    });
  }

  openDeleteModal(ResourceType: ResourceType) {
    const modelRef = this.modal.open(DeleteResourceTypeComponent, {
      centered: true,
    });
    modelRef.componentInstance.ResourceType = ResourceType;
  }




  matchesSearchTerm(rt: any): boolean {
    if (!this.searchTerm) {
      return true; // If no search term provided, show all resources
    }
    const name = rt.name.toLowerCase();
    const searchTerm = this.searchTerm.toLowerCase();
    return name.includes(searchTerm); // Check if resource name includes the search term
  }
}
