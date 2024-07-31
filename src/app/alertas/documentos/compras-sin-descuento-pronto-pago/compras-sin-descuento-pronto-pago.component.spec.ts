import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasSinDescuentoProntoPagoComponent } from './compras-sin-descuento-pronto-pago.component';

describe('ComprasSinDescuentoProntoPagoComponent', () => {
  let component: ComprasSinDescuentoProntoPagoComponent;
  let fixture: ComponentFixture<ComprasSinDescuentoProntoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprasSinDescuentoProntoPagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprasSinDescuentoProntoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
