import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlertasComponent } from './menu-alertas.component';

describe('MenuAlertasComponent', () => {
  let component: MenuAlertasComponent;
  let fixture: ComponentFixture<MenuAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuAlertasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
