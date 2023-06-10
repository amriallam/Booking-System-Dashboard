import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ResourseService } from "src/app/services/resourse.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
@Component({
  selector: "app-update-resource",
  templateUrl: "./update-resource.component.html",
  styleUrls: ["./update-resource.component.scss"],
})
export class UpdateResourceComponent {
  resourceId = +this.route.snapshot.params.resourceId;
  resourceTypeId = +this.route.snapshot.params.id;
  constructor(
    private ResourseService: ResourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  updateResource = new FormGroup({
    name: new FormControl(""),
    price: new FormControl(""),
  });

  updateResourceTypeData: any;

  updateResourceType() {
    (this.updateResourceTypeData = this.updateResource.value.price),
      // id: this.resourceId,
      // resourceTypeId: this.resourceTypeId

      this.ResourseService.updateResource(
        this.resourceId,
        this.updateResourceTypeData
      ).subscribe((response: any) => {
        console.log(this.updateResourceTypeData);
        // console.log(response);
        alert("Resource updated successfully");
        this.router.navigate([ "/resourcetype", this.resourceTypeId, "resources" ]);
        // this.getAllResourceTypes();
      });
  }

  ngOnInit(): void {
    console.log(this.resourceId);
  }
}
