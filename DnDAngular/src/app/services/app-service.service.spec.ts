import { TestBed } from '@angular/core/testing';

import { AppService } from './app-service.service';

describe('LoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppService = TestBed.get(LoginServiceService);
    expect(service).toBeTruthy();
  });
});
