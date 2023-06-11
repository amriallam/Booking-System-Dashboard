import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-resource-type',
  templateUrl: 'create-resource-type.component.html',
  // styleUrls: ['create-resource-type.component.scss']
})
export class CreateResourceTypeComponent {
  form: FormGroup;
  ResourceTypeName: string;
  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {
    this.form = formBuilder.group({});
    this.ResourceTypeName = 'New Resource Type';
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
