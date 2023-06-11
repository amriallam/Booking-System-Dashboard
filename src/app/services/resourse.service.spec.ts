import { TestBed } from '@angular/core/testing';

import { ResourseService } from './resourse.service';

describe('ResourseService', () => {
  let service: ResourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
