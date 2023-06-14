import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResourceTypeComponent } from './delete-resource-type.component';

describe('DeleteResourceTypeComponent', () => {
  let component: DeleteResourceTypeComponent;
  let fixture: ComponentFixture<DeleteResourceTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteResourceTypeComponent]
    });
    fixture = TestBed.createComponent(DeleteResourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
