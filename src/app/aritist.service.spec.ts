import { TestBed } from '@angular/core/testing';

import { AritistService } from './aritist.service';

describe('AritistService', () => {
  let service: AritistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AritistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
