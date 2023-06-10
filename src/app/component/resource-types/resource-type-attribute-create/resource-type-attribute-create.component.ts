import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ResourceTypeAttributeService } from "src/app/services/resource-type-attribute.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

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
    private router: Router
  ) {}

  createResourceTypeAttr = new FormGroup({
    attributeName: new FormControl(""),
    attributeType: new FormControl("string"),
  });

  onSubmit() {
    this.ResourceTypeAttributeService.createResourceTypeAttribute(
      this.resourceTypeId,
      {
        attributeName: this.createResourceTypeAttr.value.attributeName,
        attributeType: this.createResourceTypeAttr.value.attributeType,
        resourceTypeId : this.resourceTypeId
      }
     
    ).subscribe((response: any) => {
      // console.log(this.resourceTypeId);
      // console.log(this.createResourceTypeAttr.value);

      // console.log(response);
      alert("Resource Type Attribute Created Successfully");
      this.router.navigate(["/resourcetype"]);
    });
  }

  ngOnInit(): void {
    console.log(this.resourceTypeId);
  }
}
