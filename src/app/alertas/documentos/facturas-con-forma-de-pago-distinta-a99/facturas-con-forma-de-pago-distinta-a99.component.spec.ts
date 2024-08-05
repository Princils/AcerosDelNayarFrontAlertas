import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasConFormaDePagoDistintaA99Component } from './facturas-con-forma-de-pago-distinta-a99.component';

describe('FacturasConFormaDePagoDistintaA99Component', () => {
  let component: FacturasConFormaDePagoDistintaA99Component;
  let fixture: ComponentFixture<FacturasConFormaDePagoDistintaA99Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacturasConFormaDePagoDistintaA99Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacturasConFormaDePagoDistintaA99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
