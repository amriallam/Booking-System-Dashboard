import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResourceTypeComponent } from './edit-resource-type.component';

describe('EditResourceTypeComponent', () => {
  let component: EditResourceTypeComponent;
  let fixture: ComponentFixture<EditResourceTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditResourceTypeComponent]
    });
    fixture = TestBed.createComponent(EditResourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
