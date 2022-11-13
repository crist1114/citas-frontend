import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';


import { RegistrarHistoriaComponent } from './registrar-historia.component';

describe('RegistrarHistoriaComponent', () => {
  let component: RegistrarHistoriaComponent;
  let fixture: ComponentFixture<RegistrarHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarHistoriaComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        RouterTestingModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crearse', () => {
    expect(component).toBeTruthy();
  });

  it('deberia crear formulario', ()=>{
    const formBuilder = new FormBuilder();
    const form  = formBuilder.group({
      idPaciente: [''],
      fechaEmision: [''],
      ubicacion: ['']
    });
    expect(component.form.value).toEqual(form.value);
  });

  it('deberia obtener el idPaciente', ()=>{
    component.form.get('idPaciente').setValue(1090)
    expect(component.idPacienteCampo.value).toEqual(1090);
  });

  it('deberia obtener el fecha', ()=>{
    component.form.get('fechaEmision').setValue('2022-11-11')
    expect(component.fechaCampo.value).toEqual('2022-11-11');
  });

  it('deberia obtener el tipo de ubicacion', ()=>{
    component.form.get('ubicacion').setValue('CASILLERO_1')
    expect(component.ubicacionCampo.value).toEqual('CASILLERO_1');
  });

  it('deberia ser idPaciente invalido', ()=>{
    component.form.markAllAsTouched();
    expect(component.esIdPacienteInvalido).toBeTrue();
  });
});
