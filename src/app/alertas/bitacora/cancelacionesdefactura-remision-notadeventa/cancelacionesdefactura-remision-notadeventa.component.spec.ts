import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelacionesdefacturaRemisionNotadeventaComponent } from './cancelacionesdefactura-remision-notadeventa.component';

describe('CancelacionesdefacturaRemisionNotadeventaComponent', () => {
  let component: CancelacionesdefacturaRemisionNotadeventaComponent;
  let fixture: ComponentFixture<CancelacionesdefacturaRemisionNotadeventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelacionesdefacturaRemisionNotadeventaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelacionesdefacturaRemisionNotadeventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
