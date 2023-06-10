import { Component, Input } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ResourceTypeService } from "../../../services/resource-type.service";
import { ActivatedRoute,Router } from "@angular/router";
import { ListTicketsComponent } from "../../ticket/list-tickets/list-tickets.component";

@Component({
  selector: "app-edit-resource-type",
  templateUrl: "./edit-resource-type.component.html",
  styleUrls: ["./edit-resource-type.component.scss"],
})
export class EditResourceTypeComponent {
  selectedCardID: any;

  form: FormGroup;
  ResourceTypeName: string;

  constructor(
    private formBuilder: FormBuilder,
    private ResourceTypeService: ResourceTypeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = formBuilder.group({});
    this.ResourceTypeName = "New Resource Type";
  }

  updateResourceType(id: any) {
    id = this.selectedCardID;
    const newData = {
      id: id,
      name: this.ResourceTypeName,
    };

    this.ResourceTypeService.updateResourceType(id, newData).subscribe(
      (response) => {
        alert("Resource Type Updated");
        this.router.navigate(["/resourcetype"]);
      }
    );
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      fields: this.formBuilder.array([this.createField()]),
    });
    this.route.params.subscribe((params) => {
      this.selectedCardID = params["id"];
      // console.log(this.selectedCardID); // Do something with the ID
    });
  }

  createField(): FormGroup {
    return this.formBuilder.group({
      input: ["", Validators.required],
      selectOption: ["", Validators.required],
    });
  }

  get formFields() {
    return this.form.get("fields") as FormArray;
  }

  addFields() {
    this.formFields.push(this.createField());
  }

  removeField(index: number) {
    const fieldsArray = this.form.get("fields") as FormArray;
    fieldsArray.removeAt(index);
  }
}
