import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaciondecomprasbitacoraComponent } from './modificaciondecomprasbitacora.component';

describe('ModificaciondecomprasbitacoraComponent', () => {
  let component: ModificaciondecomprasbitacoraComponent;
  let fixture: ComponentFixture<ModificaciondecomprasbitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificaciondecomprasbitacoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificaciondecomprasbitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
