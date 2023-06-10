import { TestBed } from '@angular/core/testing';

import { ResourceDetailsService } from './resource-details.service';

describe('ResourceDetailsService', () => {
  let service: ResourceDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
