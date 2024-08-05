import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasConPago99YConPPDComponent } from './facturas-con-pago99-ycon-ppd.component';

describe('FacturasConPago99YConPPDComponent', () => {
  let component: FacturasConPago99YConPPDComponent;
  let fixture: ComponentFixture<FacturasConPago99YConPPDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacturasConPago99YConPPDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacturasConPago99YConPPDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
