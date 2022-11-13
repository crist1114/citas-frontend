import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Cita } from '@core/modelo/cita.modelo';
import { CitaService } from '@core/services/cita/cita.service';
import { of, throwError } from 'rxjs';
import { AgendarCitaComponent } from './agendar-cita.component';


describe('AgendarCitaComponent', () => {
  let component: AgendarCitaComponent;
  let fixture: ComponentFixture<AgendarCitaComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [AgendarCitaComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        RouterTestingModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
      providers: [
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crearse', () => {
    expect(component).toBeTruthy();
    expect(component).toBeInstanceOf(AgendarCitaComponent);
  });

  it('deberia cargarse las horas', () => {
    component.citasPorFecha = [{ id: 1, estado: 'NO_ATENDIDA', fecha: new Date(), hora: '15:00:00', idPaciente: 1090, tipoProcedimiento: 'LIMPIEZA', valor: 55000 }]
    component.cargarHoras();
    expect(component.horasDisp.length).toBe(9);
  });

  it('deberia ser maxDate mayor a minDate por 7 dias', () => {
    const maxDate = new Date();
    maxDate.setDate(component.minDate.getDate() + 7)
    expect(component.maxDate.getDate()).toEqual(maxDate.getDate())
  });

  it('deberia ser formulario invalido', () => {
    component.form.get('idPaciente').setValue(10);
    component.form.get('tipoProcedimiento').setValue('LIMPIEZA');
    expect(component.form.invalid).toBeFalse();
  });

  it('deberia obtener valor de los campos', () => {

    component.form.get('idPaciente').setValue(1090493768);
    component.form.get('tipoProcedimiento').setValue('LIMPIEZA');
    component.form.get('valor').setValue(55000);
    component.form.get('fecha').setValue('2022-11-12');
    component.form.get('hora').setValue('15:00:00');

    expect(component.form.get('idPaciente').value).toBe(1090493768);
    expect(component.tipoProcedimientoCampo.value).toBe('LIMPIEZA');
    expect(component.form.get('valor').value).toBe(55000);
    expect(component.form.get('fecha').value).toBe('2022-11-12');
    expect(component.horaCampo.value).toBe('15:00:00');
  });

  it('deberia marcar todo como tocado', () => {
    component.guardarCita();
    expect(component.form.touched).toBeTrue();
  });

  it('deberia ser paciente invalido', () => {
    component.form.get('idPaciente').setValue('');
    expect(component.idPacienteCampo.invalid).toBeTrue();

    component.form.markAllAsTouched();
    expect(component.esIdPacienteInvalido).toBeTrue();
  });

  it('deberia ser fecha invalido', () => {
    component.form.get('fecha').setValue('');
    expect(component.fechaCampo.invalid).toBeTrue();

    component.form.get('fecha').setValue('2022-12-12');
    expect(component.fechaCampo.invalid).withContext('dia no laboral').toBeTrue();
  });

  it('deberia ser valor no valido', () => {
    expect(component.valorCampo.invalid).toBeTruthy();
    expect(component.valorNoValido()).toBeFalse();
  });
});

describe('AgendarCitasComponent', () => {
  let citaServiceSpy: jasmine.SpyObj<CitaService>; //servicio a mockear
  let agendarCitaComponent : AgendarCitaComponent;

  beforeEach(async () => {

    const spy = jasmine.createSpyObj('CitaService', ['getCitas', 'crearCita', 'getCitasPorFecha']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule,],
      providers: [
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        FormBuilder,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        AgendarCitaComponent,
        {provide: CitaService, useValue: spy}, //proveo el mock,
      ]
    });

    agendarCitaComponent = TestBed.inject(AgendarCitaComponent)
    citaServiceSpy = TestBed.inject(CitaService) as jasmine.SpyObj<CitaService>;
  });

  it('deberian consultar citas por fecha', () => {
    const fechaMock = new Date();
    const citaMock : Cita = {id: 1, estado: 'NO_ATENDIDA', idPaciente:1090,tipoProcedimiento:'LIMPIEZA',fecha: new Date(), hora: '13:00:00', valor: 3500}
    citaServiceSpy.getCitasPorFecha.and.returnValue(of([citaMock]));
    agendarCitaComponent.consultarPorFecha(fechaMock);
    expect(agendarCitaComponent.citasPorFecha).toEqual([citaMock]);
  });

  it('deberian llamar a dar Error', () => {
    const formBuilder = new FormBuilder();
    const form = formBuilder.group({
      idPaciente: ['',],
      tipoProcedimiento: [''],
      valor: ['2000'],
      fecha: [new Date()],
      hora: ['', ]
    });
    agendarCitaComponent.form = form;
    console.log(agendarCitaComponent.form.valid);

    const errorResponse = new HttpErrorResponse({ status: 400, error: {mensaje: 'error'}});
    citaServiceSpy.crearCita.and.returnValue(throwError(errorResponse));
    agendarCitaComponent.guardarCita();
    expect(citaServiceSpy.crearCita).toHaveBeenCalled();
  });
});

