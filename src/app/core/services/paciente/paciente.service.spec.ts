import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Historia } from '@core/modelo/historia.model';
import { Paciente } from '@core/modelo/paciente.model';
import { environment } from 'src/environments/environment';

import { PacienteService } from './paciente.service';

describe('PacienteService', () => {
  let pacienteService: PacienteService;
  let httpController : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PacienteService
    ]
    });
    pacienteService = TestBed.inject(PacienteService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpController.verify();
  });

  it('deberia crearse', () => {
    expect(pacienteService).toBeTruthy();
  });

  describe('Pruebas para obtener pacientes', ()=>{

    it('deberia obtener un paciente', (doneFn) => {

      //Arrange
      const mock : Paciente = {id: 1090, nombre: 'Cristian', tipoPaciente: 'CONTRIBUTIVO'}

      //Act
      pacienteService.getPaciente(mock.id)
      .subscribe(data => {

        expect(data).toEqual(mock);
        expect(data.nombre).toEqual(mock.nombre);
        expect(data.tipoPaciente).toEqual(mock.tipoPaciente);
        doneFn();
      })
      //http config
      const req = httpController.expectOne(`${environment.endpoint}/paciente/${mock.id}`);
      req.flush(mock);
    });

    it('deberia obtener los pacientes', (doneFn) => {

      //Arrange
      const mock : Paciente[] = [{id: 1090, nombre: 'Cristian', tipoPaciente: 'CONTRIBUTIVO'}]

      //Act
      pacienteService.getPacientes()
      .subscribe(data => {

        expect(data).toEqual(mock);
        expect(data.length).toEqual(mock.length);
        doneFn();
      })
      //http config
      const req = httpController.expectOne(`${environment.endpoint}/paciente/`);
      req.flush(mock);
    });
  });

  describe('Pruebas para crear un paciente', ()=>{

    it('deberia crear un paciente', (doneFn) => {

      //Arrange
      const mock : Paciente = {id: 1090, nombre: 'Cristian', tipoPaciente: 'CONTRIBUTIVO'}
      const res = {valor: mock.id};
      //Act
      pacienteService.createPaciente(mock)
      .subscribe(data => {

        //Assert
        expect(data).toEqual(res);
        doneFn();
      })
      //http config
      const req = httpController.expectOne(`${environment.endpoint}/paciente`);
      req.flush(res);
    });

  });

  describe('Prueba para crear una historia', ()=>{

    it('deberia crear historia', (doneFn) => {

      //Arrange
      const mock : Historia = {idPaciente: 1090, fechaEmision: '2022-11-12', ubicacion: 'CASILLERO_1'}
      const res = {valor: mock.idPaciente};
      //Act
      pacienteService.createHistoriaPaciente(mock)
      .subscribe(data => {

        expect(data).toEqual(res);
        doneFn();
      })
      //http config
      const req = httpController.expectOne(`${environment.endpoint}/historia`);
      req.flush(res);
    });
  })
});
