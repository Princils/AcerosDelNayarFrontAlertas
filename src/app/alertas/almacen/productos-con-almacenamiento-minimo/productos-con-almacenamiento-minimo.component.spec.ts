import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosConAlmacenamientoMinimoComponent } from './productos-con-almacenamiento-minimo.component';

describe('ProductosConAlmacenamientoMinimoComponent', () => {
  let component: ProductosConAlmacenamientoMinimoComponent;
  let fixture: ComponentFixture<ProductosConAlmacenamientoMinimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosConAlmacenamientoMinimoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosConAlmacenamientoMinimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
