import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubitacoraComponent } from './menubitacora.component';

describe('MenubitacoraComponent', () => {
  let component: MenubitacoraComponent;
  let fixture: ComponentFixture<MenubitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenubitacoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenubitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
