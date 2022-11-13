import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PacienteService } from '@core/services/paciente/paciente.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';

import { CrearPacienteComponent } from './crear-paciente.component';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CrearPacienteComponent', () => {
  let component: CrearPacienteComponent;
  let fixture: ComponentFixture<CrearPacienteComponent>;

  beforeEach(waitForAsync(()=>{
    TestBed.configureTestingModule({
      declarations: [CrearPacienteComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule
      ],
      providers: [
        HttpService,
        PacienteService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPacienteComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('deberia crearse', () => {
    expect(component).toBeTruthy()
  });

  it('deberia crear formulario', ()=>{
    const formBuilder = new FormBuilder();
    const form  = formBuilder.group({
      id: ['',],
      nombre: [''],
      tipoPaciente: ['']
    });
    expect(component.form.value).toEqual(form.value);
  });

  it('deberia obtener el id', ()=>{
    component.form.get('id').setValue(1090)
    expect(component.idCampo.value).toEqual(1090);
  });

  it('deberia obtener el nombre', ()=>{
    component.form.get('nombre').setValue('cristian')
    expect(component.nombreCampo.value).toEqual('cristian');
  });

  it('deberia obtener el tipo de paciente', ()=>{
    component.form.get('tipoPaciente').setValue('CONTRIBUTIVO')
    expect(component.tipoCampo.value).toEqual('CONTRIBUTIVO');
  });

  it('deberia ser nombre invalido', ()=>{
    component.form.markAllAsTouched();
    expect(component.esNombreInvalido).toBeTrue();
  });

  it('deberia ser id invalido', ()=>{
    component.form.markAllAsTouched();
    expect(component.esIdInvalido).toBeTrue();
  });
});
