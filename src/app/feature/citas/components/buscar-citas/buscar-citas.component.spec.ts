import { of } from 'rxjs';
import { BuscarCitasComponent } from './buscar-citas.component';
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CitaService } from '@core/services/cita/cita.service';

describe('BuscarCitasComponent', () => {
  let citaServiceSpy: jasmine.SpyObj<CitaService>; //servicio a mockear
  let buscarCitasComponent : BuscarCitasComponent;
  let fixture: ComponentFixture<BuscarCitasComponent>;

  beforeEach(async () => {

    const spy = jasmine.createSpyObj('CitaService', ['getCitas', 'cancelarCita']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BuscarCitasComponent,
        {provide: CitaService, useValue: spy}, //proveo el mock,
      ]
    });

    buscarCitasComponent = TestBed.inject(BuscarCitasComponent)
    citaServiceSpy = TestBed.inject(CitaService) as jasmine.SpyObj<CitaService>;
  });

  it('deberia crearse', () => {
    expect(buscarCitasComponent).toBeTruthy();
  });

  it('deberian crearse las columnas', () => {
    expect(buscarCitasComponent.displayedColumns).toEqual(['idPaciente', 'tipoProcedimiento', 'fecha', 'hora', 'estado','acciones']);
  });

  it('deberia element data ser vacio', () => {
    expect(buscarCitasComponent.ELEMENT_DATA).toEqual([]);
  });

  it('deberia obtenerCitas llenar el datasource', () => {

    const data = [{ id: 1, estado: 'NO_ATENDIDA', fecha: new Date(), hora: '15:00:00', idPaciente: 1090, tipoProcedimiento: 'LIMPIEZA', valor: 55000 }]
    citaServiceSpy.getCitas.and.returnValue(of(data));

    buscarCitasComponent.obtenerCitas();
    expect(buscarCitasComponent.dataSource.data).toEqual(data);
  });

  it('deberia filtrar una cita', () => {

    const data = [{ id: 1, estado: 'NO_ATENDIDA', fecha: new Date(), hora: '15:00:00', idPaciente: 1090, tipoProcedimiento: 'LIMPIEZA', valor: 55000 }]
    citaServiceSpy.getCitas.and.returnValue(of(data));

    buscarCitasComponent.obtenerCitas();
    fixture = TestBed.createComponent(BuscarCitasComponent);
    buscarCitasComponent = fixture.componentInstance;
    fixture.detectChanges();

    const debugElementBuscar = fixture.debugElement;
    const elementoBuscar = debugElementBuscar.nativeElement;
    const input = elementoBuscar.querySelector('input');
    input.value = '1'

    buscarCitasComponent.filtrar();
    expect(buscarCitasComponent.dataSource.data).toEqual(data);
  });

  fit('deberia cancelar la cita', ()=>{

    spyOn(window.location, 'reload');
    buscarCitasComponent.cancelar(2);

    expect(window.location).toHaveBeenCalled();

  })

});
