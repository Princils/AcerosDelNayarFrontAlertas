import { TestBed } from '@angular/core/testing';

import { ReportesDocumentosService } from './reportes-documentos.service';

describe('ReportesDocumentosService', () => {
  let service: ReportesDocumentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportesDocumentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
