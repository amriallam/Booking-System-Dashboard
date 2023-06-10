import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceTypeAttributeCreateComponent } from './resource-type-attribute-create.component';

describe('ResourceTypeAttributeCreateComponent', () => {
  let component: ResourceTypeAttributeCreateComponent;
  let fixture: ComponentFixture<ResourceTypeAttributeCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceTypeAttributeCreateComponent]
    });
    fixture = TestBed.createComponent(ResourceTypeAttributeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
