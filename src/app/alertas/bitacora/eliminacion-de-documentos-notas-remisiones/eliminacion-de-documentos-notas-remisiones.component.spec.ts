import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminacionDeDocumentosNotasRemisionesComponent } from './eliminacion-de-documentos-notas-remisiones.component';

describe('EliminacionDeDocumentosNotasRemisionesComponent', () => {
  let component: EliminacionDeDocumentosNotasRemisionesComponent;
  let fixture: ComponentFixture<EliminacionDeDocumentosNotasRemisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminacionDeDocumentosNotasRemisionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminacionDeDocumentosNotasRemisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
