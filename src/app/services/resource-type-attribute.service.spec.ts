import { TestBed } from '@angular/core/testing';

import { ResourceTypeAttributeService } from './resource-type-attribute.service';

describe('ResourceTypeAttributeService', () => {
  let service: ResourceTypeAttributeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceTypeAttributeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
