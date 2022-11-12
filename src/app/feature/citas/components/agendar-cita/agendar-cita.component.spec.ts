import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
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
    expect(component.form.get('hora').value).toBe('15:00:00');
  });

  it('deberia marcar todo como tocado', () => {
    component.guardarCita();
    expect(component.form.touched).toBeTrue();
  });

  it('deberia ser paciente invalido', () => {
    component.form.markAllAsTouched();
    expect(component.esIdPacienteInvalido).toBeTrue();
  });

  it('deberia ser valor no valido', () => {
    component.form.markAllAsTouched();
    expect(component.valorNoValido).toBeTruthy();
  });


});
