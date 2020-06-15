import { TestBed } from '@angular/core/testing';

import { MusicEventService } from './music-event.service';

describe('MusicEventService', () => {
  let service: MusicEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
