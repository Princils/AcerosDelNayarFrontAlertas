import { TestBed } from '@angular/core/testing';

import { ReportesAlmacenService } from './reportes-almacen.service';

describe('ReportesAlmacenService', () => {
  let service: ReportesAlmacenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportesAlmacenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
