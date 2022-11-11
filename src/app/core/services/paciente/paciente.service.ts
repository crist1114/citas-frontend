import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../../modelo/paciente.model';
import { environment } from 'src/environments/environment';
import { Historia } from '../../modelo/historia.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http : HttpClient) { }


  getPaciente(id:number){
    return this.http.get<Paciente>(`${environment.endpoint}/paciente/${id}`);
  }

  getPacientes(){
    return this.http.get<Paciente[]>(`${environment.endpoint}/paciente/`);
  }

  createPaciente(paciente : Paciente){
    return this.http.post<{valor: number}>(`${environment.endpoint}/paciente`, paciente);
  }

  createHistoriaPaciente(historia:Historia){
    return this.http.post<{valor: number}>(`${environment.endpoint}/historia`, historia);
  }
}
