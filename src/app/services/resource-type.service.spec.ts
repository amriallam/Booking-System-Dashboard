import { TestBed } from '@angular/core/testing';

import { ResourceTypeService } from './resource-type.service';

describe('ResourceTypeService', () => {
  let service: ResourceTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
