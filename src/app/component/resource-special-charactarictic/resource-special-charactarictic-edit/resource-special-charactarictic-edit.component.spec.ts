import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSpecialCharactaricticEditComponent } from './resource-special-charactarictic-edit.component';

describe('ResourceSpecialCharactaricticEditComponent', () => {
  let component: ResourceSpecialCharactaricticEditComponent;
  let fixture: ComponentFixture<ResourceSpecialCharactaricticEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceSpecialCharactaricticEditComponent]
    });
    fixture = TestBed.createComponent(ResourceSpecialCharactaricticEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
