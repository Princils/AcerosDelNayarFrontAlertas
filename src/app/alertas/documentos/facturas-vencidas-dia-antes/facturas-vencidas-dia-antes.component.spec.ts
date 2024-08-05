import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasVencidasDiaAntesComponent } from './facturas-vencidas-dia-antes.component';

describe('FacturasVencidasDiaAntesComponent', () => {
  let component: FacturasVencidasDiaAntesComponent;
  let fixture: ComponentFixture<FacturasVencidasDiaAntesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacturasVencidasDiaAntesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacturasVencidasDiaAntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
