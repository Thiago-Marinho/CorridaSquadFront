import { TestBed } from '@angular/core/testing';

import { CorridaCarroPilotoService } from './corrida-carro-piloto.service';

describe('CorridaCarroPilotoService', () => {
  let service: CorridaCarroPilotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorridaCarroPilotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
