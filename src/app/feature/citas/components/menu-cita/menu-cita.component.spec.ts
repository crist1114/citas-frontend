import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuCitaComponent } from './menu-cita.component';

describe('MenuCitaComponent', () => {
  let component: MenuCitaComponent;
  let fixture: ComponentFixture<MenuCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCitaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear menu', () => {
    expect(component).toBeTruthy();
  });

  it('deberia cragar mat-card con titulo agendar cita', () => {
    const menuCitaDebug : DebugElement = fixture.debugElement;
    const menuCitaElement : HTMLElement = menuCitaDebug.nativeElement;
    const div = menuCitaElement.querySelector('.card-descripcion');
    expect(div.querySelector('h1').textContent).toBe('Agendar cita');
  });

  it('deberia cragar boton con texto agendar', () => {
    const menuCitaDebug : DebugElement = fixture.debugElement;
    const menuCitaElement : HTMLElement = menuCitaDebug.nativeElement;
    const div = menuCitaElement.querySelector('.card-descripcion');
    expect(div.querySelector('button').textContent).toBe('Agendar');
  });

  it('deberia cragar mat-card con titulo consultar citas', () => {
    const menuCitaDebug : DebugElement = fixture.debugElement;
    const menuCitaElement : HTMLElement = menuCitaDebug.nativeElement;
    const div = menuCitaElement.querySelectorAll('.card-descripcion')[1];
    expect(div.querySelector('h1').textContent).toBe('Consultar citas');
  });

  it('deberia cragar boton con texto agendar', () => {
    const menuCitaDebug : DebugElement = fixture.debugElement;
    const menuCitaElement : HTMLElement = menuCitaDebug.nativeElement;
    const div = menuCitaElement.querySelectorAll('.card-descripcion')[1];
    expect(div.querySelector('button').textContent).toBe('Consultar');
  });
});
