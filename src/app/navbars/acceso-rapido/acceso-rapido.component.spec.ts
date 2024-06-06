import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoRapidoComponent } from './acceso-rapido.component';

describe('AccesoRapidoComponent', () => {
  let component: AccesoRapidoComponent;
  let fixture: ComponentFixture<AccesoRapidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccesoRapidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccesoRapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
