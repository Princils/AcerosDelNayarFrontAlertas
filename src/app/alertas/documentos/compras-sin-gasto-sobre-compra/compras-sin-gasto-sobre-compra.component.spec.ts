import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasSinGastoSobreCompraComponent } from './compras-sin-gasto-sobre-compra.component';

describe('ComprasSinGastoSobreCompraComponent', () => {
  let component: ComprasSinGastoSobreCompraComponent;
  let fixture: ComponentFixture<ComprasSinGastoSobreCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprasSinGastoSobreCompraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprasSinGastoSobreCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
