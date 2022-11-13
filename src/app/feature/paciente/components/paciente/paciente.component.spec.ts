import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteComponent } from './paciente.component';

describe('PacienteComponent', () => {
  let component: PacienteComponent;
  let fixture: ComponentFixture<PacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crearse', () => {
    expect(component).toBeTruthy();
  });

  it('deberia cragar mat-card con titulo Consultar paciente', () => {
    const pacienteDebug : DebugElement = fixture.debugElement;
    const pacienteElement : HTMLElement = pacienteDebug.nativeElement;
    const div = pacienteElement.querySelector('.card-descripcion');
    expect(div.querySelector('h1').textContent).toBe('Consultar paciente');
  });

  it('deberia cragar boton con texto Consultar', () => {
    const pacienteDebug : DebugElement = fixture.debugElement;
    const pacienteElement : HTMLElement = pacienteDebug.nativeElement;
    const div = pacienteElement.querySelector('.card-descripcion');
    expect(div.querySelector('button').textContent).toBe('Consultar');
  });

  it('deberia cragar mat-card con titulo Registrar paciente', () => {
    const menuCitaDebug : DebugElement = fixture.debugElement;
    const menuCitaElement : HTMLElement = menuCitaDebug.nativeElement;
    const div = menuCitaElement.querySelectorAll('.card-descripcion')[1];
    expect(div.querySelector('h1').textContent).toBe('Registrar paciente');
  });

  it('deberia cragar boton con texto Consultar', () => {
    const pacienteDebug : DebugElement = fixture.debugElement;
    const pacienteElement : HTMLElement = pacienteDebug.nativeElement;
    const div = pacienteElement.querySelectorAll('.card-descripcion')[1];
    expect(div.querySelector('button').textContent).toBe('Registrar');
  });
});
