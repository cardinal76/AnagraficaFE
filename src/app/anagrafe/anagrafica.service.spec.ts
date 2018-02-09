import { TestBed, inject } from '@angular/core/testing';

import { AnagraficaService } from './anagrafica.service';

describe('AnagraficaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnagraficaService]
    });
  });

  it('should be created', inject([AnagraficaService], (service: AnagraficaService) => {
    expect(service).toBeTruthy();
  }));
});
