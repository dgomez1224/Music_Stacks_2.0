/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpotifyServiceService } from './spotifyService.service';

describe('Service: SpotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyServiceService]
    });
  });

  it('should ...', inject([SpotifyServiceService], (service: SpotifyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
