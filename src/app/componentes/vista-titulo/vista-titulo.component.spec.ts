import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTituloComponent } from './vista-titulo.component';

describe('VistaTituloComponent', () => {
  let component: VistaTituloComponent;
  let fixture: ComponentFixture<VistaTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VistaTituloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
