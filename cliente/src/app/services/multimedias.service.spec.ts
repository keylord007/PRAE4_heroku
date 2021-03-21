import { TestBed } from '@angular/core/testing';

import { MultimediasService } from './multimedias.service';

describe('MultimediasService', () => {
  let service: MultimediasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultimediasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
