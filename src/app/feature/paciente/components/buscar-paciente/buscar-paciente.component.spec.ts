import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Paciente } from '@core/modelo/paciente.model';
import { PacienteService } from '@core/services/paciente/paciente.service';
import { of } from 'rxjs';
import { BuscarPacienteComponent } from './buscar-paciente.component';

describe('BuscarPacienteComponent HTML', () => {
  let component: BuscarPacienteComponent;
  let fixture: ComponentFixture<BuscarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPacienteComponent ],
      imports: [
        MatIconModule,
        MatTableModule,
    ],
    providers: [HttpClient, HttpHandler, MatPaginator],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia crear tabla', () => {
    const debugElementBuscar = fixture.debugElement;
    const elementoBuscar = debugElementBuscar.nativeElement;
    const tabla = elementoBuscar.querySelector('table');
    expect(tabla).toBeDefined();
  });

  it('deberia crear caption Pacientes registrados', () => {
    const debugElementBuscar = fixture.debugElement;
    const elementoBuscar = debugElementBuscar.nativeElement;
    const caption = elementoBuscar.querySelector('caption').textContent;
    expect(caption).toBe('Pacientes registrados');
  });

  it('deberia crear columnas de tablas', () => {
    const columnas = component.displayedColumns;

    expect(columnas).toEqual(['Identificacion', 'Nombre', 'Tipo']);
  });
});

describe('BuscarPacienteComponent', () => {
  let buscarPacienteComponent: BuscarPacienteComponent;
  let pacienteServiceSpy: jasmine.SpyObj<PacienteService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('PacienteService', ['getPacientes']);
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatTableModule,
        HttpClientTestingModule
    ],
    providers: [BuscarPacienteComponent,
      {provide: PacienteService, useValue: spy},

      MatPaginator],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    buscarPacienteComponent = TestBed.inject(BuscarPacienteComponent);
    pacienteServiceSpy = TestBed.inject(PacienteService) as jasmine.SpyObj<PacienteService>;
  });


  it('deberia crearse', () => {
    expect(buscarPacienteComponent).toBeTruthy();
  });

  it('deberia cargar los pacientes', () => {
    const paciente : Paciente = {id: 1090, nombre: 'cristian', tipoPaciente: 'CONTRIBUTIVO'}
    pacienteServiceSpy.getPacientes.and.returnValue(of([paciente]))
    buscarPacienteComponent.ngOnInit();
    expect(buscarPacienteComponent.dataSource.data).toEqual([paciente]);
  });


});
