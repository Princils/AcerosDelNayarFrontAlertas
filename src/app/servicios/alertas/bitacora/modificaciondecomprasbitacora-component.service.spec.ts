import { TestBed } from '@angular/core/testing';
import { ModificaciondecomprasbitacoraComponentService } from './modificaciondecomprasbitacora-component.service';

describe('ModificaciondecomprasbitacoraComponentService', () => {
  let service: ModificaciondecomprasbitacoraComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificaciondecomprasbitacoraComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
