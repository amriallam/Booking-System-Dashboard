import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { ResourceType } from "../../models/ResourceType";
import { ResourceTypeService } from "../../../services/resource-type.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-delete-resource-type",
  templateUrl: "./delete-resource-type.component.html",
  styleUrls: ["./delete-resource-type.component.scss"],
})
export class DeleteResourceTypeComponent {
  @Input() ResourceType!: ResourceType;

  constructor(
    private modal: NgbActiveModal,
    private ResourceTypeService: ResourceTypeService,
    private toastr: ToastrService
  ) {}

  closeModal() {
    this.modal.close();
  }

  deleteResourceType(id: any) {
    this.ResourceTypeService.deleteResourceType(id).subscribe((response) => {
      this.toastr.success("Resource Type Deleted Successfully");
      this.closeModal();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }

  ngOnInit(): void {
    console.log(this.ResourceType);
  }
}
