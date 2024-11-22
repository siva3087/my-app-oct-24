import { TestBed } from '@angular/core/testing';

import { FlipserviceService } from './flipservice.service';

describe('FlipserviceService', () => {
  let service: FlipserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
