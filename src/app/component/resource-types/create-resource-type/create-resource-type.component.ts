import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ResourceTypeService } from "../../../services/resource-type.service";

@Component({
  selector: 'app-create-resource-type',
  templateUrl: 'create-resource-type.component.html',
  styleUrls: ['create-resource-type.component.scss']
})
export class CreateResourceTypeComponent {
  form: FormGroup;
  ResourceTypeName: string;
  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal,
    private ResourceTypeService: ResourceTypeService) {
    this.form = formBuilder.group({});
    this.ResourceTypeName = 'New Resource Type';
  }

  createResourceType() {
    this.ResourceTypeService.createResourceType(
      // add parameters to the function called data
      // pass the data parameter to the post function
      // return the result of the post function
      JSON.stringify(this.ResourceTypeName)
    ).subscribe((response: any) => {
      console.log(response);
    });
    }

  ngOnInit() {
    this.form = this.formBuilder.group({
      fields: this.formBuilder.array([this.createField()])
    });
  }

  createField(): FormGroup {
    return this.formBuilder.group({
      input: ['', Validators.required],
      selectOption: ['', Validators.required]
    });
  }

  get formFields() {
    return this.form.get('fields') as FormArray;
  }

  addFields() {
    this.formFields.push(this.createField());
  }

  removeField(index: number) {
    const fieldsArray = this.form.get('fields') as FormArray;
    fieldsArray.removeAt(index);
  }

  closeModal() {
    this.activeModal.close();
  }
}
