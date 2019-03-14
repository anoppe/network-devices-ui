import { TestBed, inject } from '@angular/core/testing';

import { DhcpEventService } from './dhcp-event.service';

describe('DhcpEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DhcpEventService]
    });
  });

  it('should be created', inject([DhcpEventService], (service: DhcpEventService) => {
    expect(service).toBeTruthy();
  }));
});
