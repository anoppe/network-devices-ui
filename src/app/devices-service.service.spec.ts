import { TestBed, inject } from '@angular/core/testing';

import { DevicesServiceService } from './devices-service.service';

describe('DevicesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevicesServiceService]
    });
  });

  it('should be created', inject([DevicesServiceService], (service: DevicesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
