import { TestBed } from '@angular/core/testing';

import { HttpDdService } from './http-dd.service';

describe('HttpDdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpDdService = TestBed.get(HttpDdService);
    expect(service).toBeTruthy();
  });
});
