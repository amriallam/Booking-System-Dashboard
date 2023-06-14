import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { ResourceType } from "../../models/ResourceType";
import { ResourseService } from "src/app/services/resourse.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-delete-resource",
  templateUrl: "./delete-resource.component.html",
  styleUrls: ["./delete-resource.component.scss"],
})
export class DeleteResourceComponent {
  @Input() ResourceType!: ResourceType;
  constructor(
    public activeModal: NgbActiveModal,
    private ResourseService: ResourseService,
    private toastr: ToastrService
  ) {}

  deleteResource(id: any) {
    this.ResourseService.deleteResource(id).subscribe((response: any) => {
      // console.log(response);
      this.toastr.success("Resource deleted successfully", "Success");
      this.activeModal.close();

      setTimeout(() => {
        window.location.reload();
      }, 1000);

      
    });
  }
}
