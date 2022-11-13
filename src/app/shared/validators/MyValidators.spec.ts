import { FormControl } from "@angular/forms";
import { Paciente } from "@core/modelo/paciente.model";
import { PacienteService } from "@core/services/paciente/paciente.service";
import { MyValidators } from "./MyValidators";
import {of} from 'rxjs'

describe('Pruebas para my validators', ()=>{


  describe('Pruebas para validar dia', ()=>{

    it('deberia retornar nulo cuando el dia es laboral',()=>{
      //Arrange
      const control = new FormControl();
      control.setValue('2022-11-11'); // 11 es viernes

      //Act
      const rta = MyValidators.validarDia(control);

      //Assert
      expect(rta).toBeNull();

    })

    it('deberia retornar nulo cuando el dia es no laboral',()=>{
      //Arrange
      const control = new FormControl();
      control.setValue('2022-12-11'); // 12 es sabado

      //Act
      const rta = MyValidators.validarDia(control);

      //Assert
      expect(rta.no_valido).toBeTrue();

    })

  })

  describe('Pruebas para validar paciente async', ()=>{

    it('deberia retornar existe cuando el paciente existe',(doneFn)=>{
      //Arrange
      const pacienteService : jasmine.SpyObj<PacienteService> = jasmine.createSpyObj('PacienteService', ['getPaciente'])
      const paciente : Paciente = {id: 1, nombre: 'cristian', tipoPaciente: 'CONTRIBUTIVO'}
      pacienteService.getPaciente.and.returnValue(of(paciente))
      const control = new FormControl(1);

      //Act
      const validator = MyValidators.validarPaciente(pacienteService);
      validator(control).subscribe(rta => {

        //Assert
        expect(rta.existe).toBeTrue();
        doneFn();
      })
    })

    it('deberia retornar no_existe cuando el paciente no existe',(doneFn)=>{
      //Arrange
      const pacienteService : jasmine.SpyObj<PacienteService> = jasmine.createSpyObj('PacienteService', ['getPaciente'])
      pacienteService.getPaciente.and.returnValue(of(null))
      const control = new FormControl(1);

      //Act
      const validator = MyValidators.validarPacienteNoExiste(pacienteService);
      validator(control).subscribe(rta => {

        //Assert
        expect(rta.no_existe).toBeTrue();
        doneFn();
      })
    })

  })
})
