import { AbstractControl } from '@angular/forms';
import { PacienteService } from '@core/services/paciente/paciente.service';

import { map } from 'rxjs/operators';
export class MyValidators {



  static validarPaciente(service: PacienteService){
    return (control: AbstractControl) => {
      const value = control.value;
      return service.getPaciente(value)
      .pipe(
        map((response : any) => {
          if(response){
            return {existe : true};
          }
          return null;
        })
      )
    }
  }

  static validarDia(control: AbstractControl){

      const fecha = new Date(control.value)

      if(fecha.getDay() === 0 || fecha.getDay() === 6){
        return {no_valido : true};
      }
      return null;

  }


  static validarPacienteNoExiste(service: PacienteService){
    return (control: AbstractControl) => {
      const value = control.value;
      return service.getPaciente(value)
      .pipe(
        map((response : any) => {

          if(!response){
            return {no_existe : true};
          }
          return null;
        })
      )
    }
  }


}


