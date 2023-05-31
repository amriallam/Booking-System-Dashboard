import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-create-resource",
  templateUrl: "./create-resource.component.html",
  styleUrls: ["./create-resource.component.scss"],
})
export class CreateResourceComponent {
  form: FormGroup;
  ResourceName: string;
  TitleEdit: boolean;
  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {
    this.form = formBuilder.group({});
    this.ResourceName = "New Resource Name";
    this.TitleEdit = false;
  }
  ToggleTitleEdit() {
    this.TitleEdit = !this.TitleEdit;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      fields: this.formBuilder.array([this.createField()]),
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

  closeModal() {
    this.activeModal.close();
  }
}
