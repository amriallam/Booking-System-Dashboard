import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsServiceComponent } from './details-service.component';

describe('DetailsServiceComponent', () => {
  let component: DetailsServiceComponent;
  let fixture: ComponentFixture<DetailsServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsServiceComponent]
    });
    fixture = TestBed.createComponent(DetailsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
