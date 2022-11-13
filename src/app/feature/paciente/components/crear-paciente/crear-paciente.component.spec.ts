import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PacienteService } from '@core/services/paciente/paciente.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder} from '@angular/forms';

import { CrearPacienteComponent } from './crear-paciente.component';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('CrearPacienteComponent', () => {
  let pacienteServiceSpy: jasmine.SpyObj<PacienteService>; //servicio a mockear
  let component: CrearPacienteComponent;
  let fixture: ComponentFixture<CrearPacienteComponent>;

  beforeEach(waitForAsync(()=>{
    const spy = jasmine.createSpyObj('PacienteService', ['getPaciente', 'createPaciente']);

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
        CrearPacienteComponent,
        {provide: PacienteService, useValue: spy},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    pacienteServiceSpy = TestBed.inject(PacienteService) as jasmine.SpyObj<PacienteService>;
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

  it('deberia guardar paciente', ()=>{
    pacienteServiceSpy.getPaciente.and.returnValue(of())
    component.form.get('id').setValue(1090493768);
    pacienteServiceSpy.createPaciente.and.returnValue(of({valor:2}));
    component.guardarPaciente();
    expect(component.form.get('id').touched).toBeTrue()
  });

  it('deberia obtener el id', ()=>{
    pacienteServiceSpy.getPaciente.and.returnValue(of())
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
