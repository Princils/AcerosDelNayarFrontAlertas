import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenualmacenComponent } from './menualmacen.component';

describe('MenualmacenComponent', () => {
  let component: MenualmacenComponent;
  let fixture: ComponentFixture<MenualmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenualmacenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenualmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
