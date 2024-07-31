import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelacionesDeComprasBitacoraComponent } from './cancelaciones-de-compras-bitacora.component';

describe('CancelacionesDeComprasBitacoraComponent', () => {
  let component: CancelacionesDeComprasBitacoraComponent;
  let fixture: ComponentFixture<CancelacionesDeComprasBitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelacionesDeComprasBitacoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelacionesDeComprasBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
