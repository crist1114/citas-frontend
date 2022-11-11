import { AbstractControl } from '@angular/forms';
import { Paciente } from '../../core/modelo/paciente.model';
import { PacienteService } from '@core/services/paciente/paciente.service';

import { map } from 'rxjs/operators';
const DOMINGO = 0;
const SABADO = 6;
export class MyValidators {


  static validarPaciente(service: PacienteService){
    return (control: AbstractControl) => {
      const value = control.value;
      return service.getPaciente(value)
      .pipe(
        map((response : Paciente) => {
          if(response){
            return {existe : true};
          }
          return null;
        })
      );
    }
  }

  static validarDia(control: AbstractControl){

      const fecha = new Date(control.value);

      if(fecha.getDay() === DOMINGO || fecha.getDay() === SABADO){
        return {no_valido : true};
      }
      return null;

  }


  static validarPacienteNoExiste(service: PacienteService){
    return (control: AbstractControl) => {
      const value = control.value;
      return service.getPaciente(value)
      .pipe(
        map((response : Paciente) => {

          if(!response){
            return {no_existe : true};
          }
          return null;
        })
      );
    }
  }


}


