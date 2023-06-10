import { TestBed } from '@angular/core/testing';

import { ResourceTypeDetailsService } from './resource-type-details.service';

describe('ResourceTypeDetailsService', () => {
  let service: ResourceTypeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceTypeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
