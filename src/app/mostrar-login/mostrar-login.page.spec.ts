import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarLoginPage } from './mostrar-login.page';

describe('MostrarLoginPage', () => {
  let component: MostrarLoginPage;
  let fixture: ComponentFixture<MostrarLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MostrarLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
