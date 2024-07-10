import { TestBed } from '@angular/core/testing';

import { ReportesBitacoraService } from './reportes-bitacora.service';

describe('ReportesBitacoraService', () => {
  let service: ReportesBitacoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportesBitacoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
