import { TestBed } from '@angular/core/testing';

import { ObseravableService } from './obseravable-service';

describe('ObseravableService', () => {
  let service: ObseravableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObseravableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
