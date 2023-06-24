import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSpecialCharactaricticCreateComponent } from './resource-special-charactarictic-create.component';

describe('ResourceSpecialCharactaricticCreateComponent', () => {
  let component: ResourceSpecialCharactaricticCreateComponent;
  let fixture: ComponentFixture<ResourceSpecialCharactaricticCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceSpecialCharactaricticCreateComponent]
    });
    fixture = TestBed.createComponent(ResourceSpecialCharactaricticCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
