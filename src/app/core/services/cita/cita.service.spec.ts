import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Cita } from '@core/modelo/cita.modelo';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { CitaService } from './cita.service';

describe('CitaService', () => {
  let httpController : HttpTestingController;
  let citaService : CitaService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [CitaService]
    });
    citaService = TestBed.inject(CitaService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpController.verify();
  });

  it('should be created', () => {
    expect(citaService).toBeTruthy();
  });


    it('deberia obtener lista de citas', (doneFn) => {
      //Arrange
      const mockDatos : Cita[] = [
        {
          id: 1,
          idPaciente: 1090,
          tipoProcedimiento: 'LIMPIEZA',
          estado: 'NO_ATENDIDA',
          fecha: new Date(),
          hora: '15:00:00',
          valor: 55000
        }
      ]
      //Act
      citaService.getCitas()
      .subscribe((data)=>{

        //Assert
        expect(data.length).toEqual(mockDatos.length);
        expect(data).toEqual(mockDatos);
        doneFn();
      });

      //http config
      const req = httpController.expectOne(`${environment.endpoint}/cita/consultar`);
      req.flush(mockDatos);
    });

    it('deberia obtener citas por fecha', (doneFn) => {
      //Arrange
      const mockDatos : Cita[] = [
        {
          id: 1,
          idPaciente: 1090,
          tipoProcedimiento: 'LIMPIEZA',
          estado: 'NO_ATENDIDA',
          fecha: new Date(),
          hora: '15:00:00',
          valor: 55000
        }
      ]
      const fecha = new Date();
      const fechaF = moment(fecha).format('YYYY-MM-DD');
      //Act
      citaService.getCitasPorFecha(fechaF)
      .subscribe((data)=>{
        //Assert
        expect(data.length).toEqual(mockDatos.length);
        expect(data).toEqual(mockDatos);
        doneFn();
      });

      //http config
      const req = httpController.expectOne(`${environment.endpoint}/cita/consultar-por-fecha/${fechaF}`);
      req.flush(mockDatos);
    });


    it('deberia crear una nueva cita', (doneFn) => {
      //Arrange
      const mockDatos : Cita =
        {
          idPaciente: 1090,
          tipoProcedimiento: 'LIMPIEZA',
          estado: 'NO_ATENDIDA',
          fecha: new Date(),
          hora: '15:00:00',
          valor: 55000
        }
      //Act
      citaService.crearCita(mockDatos)
      .subscribe((data)=>{

        //Assert
        expect(data.valor).toEqual(mockDatos.valor);
        doneFn();
      });

      //http config
      const req = httpController.expectOne(`${environment.endpoint}/cita`);
      req.flush(mockDatos);
      expect(req.request.method).toEqual('POST');
    });

    it('deberia cancelar una cita', (doneFn) => {
      //Arrange
      const id = 10;
      // const body = {idCita: id}
      //Act
      citaService.cancelarCita(id)
      .subscribe(()=>{

        doneFn();
      });

      //http config
      const req = httpController.expectOne(`${environment.endpoint}/cita/cancelar/`);
      req.flush(id);
      expect(req.request.method).toEqual('POST');
    });



});


