import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSpecialCharactaricticDeleteComponent } from './resource-special-charactarictic-delete.component';

describe('ResourceSpecialCharactaricticDeleteComponent', () => {
  let component: ResourceSpecialCharactaricticDeleteComponent;
  let fixture: ComponentFixture<ResourceSpecialCharactaricticDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceSpecialCharactaricticDeleteComponent]
    });
    fixture = TestBed.createComponent(ResourceSpecialCharactaricticDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
