import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSpecialCharactaricticListComponent } from './resource-special-charactarictic-list.component';

describe('ResourceSpecialCharactaricticListComponent', () => {
  let component: ResourceSpecialCharactaricticListComponent;
  let fixture: ComponentFixture<ResourceSpecialCharactaricticListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceSpecialCharactaricticListComponent]
    });
    fixture = TestBed.createComponent(ResourceSpecialCharactaricticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
