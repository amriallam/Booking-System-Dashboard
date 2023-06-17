import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ResourceTypeAttributeService } from "src/app/services/resource-type-attribute.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-resource-type-attribute-create",
  templateUrl: "./resource-type-attribute-create.component.html",
  styleUrls: ["./resource-type-attribute-create.component.scss"],
})
export class ResourceTypeAttributeCreateComponent {
  resourceTypeId = +this.route.snapshot.params.id;
  constructor(
    private ResourceTypeAttributeService: ResourceTypeAttributeService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
 
  ) {}

  createResourceTypeAttr = new FormGroup({
    attributeName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),
    attributeType: new FormControl("string",[
      Validators.required,
    ]),
  });

  onSubmit() {
    if (this.createResourceTypeAttr.invalid) {
      return this.toastr.error("Please fill all the required fields properly");
    } else {
      this.ResourceTypeAttributeService.createResourceTypeAttribute(
        this.resourceTypeId,
        {
          attributeName: this.createResourceTypeAttr.value.attributeName,
          attributeType: this.createResourceTypeAttr.value.attributeType,
          resourceTypeId: this.resourceTypeId,
        }
      ).subscribe((response: any) => {
        // console.log(this.resourceTypeId);
        // console.log(this.createResourceTypeAttr.value);

        // console.log(response);
        this.toastr.success("Resource Type Attribute Created Successfully");
        setTimeout(() => {
          this.router.navigate(["/resourcetype"]);
        }, 1000);
      });
    }
  }

  ngOnInit(): void {
    console.log(this.resourceTypeId);
  }
}
