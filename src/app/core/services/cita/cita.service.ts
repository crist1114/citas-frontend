import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from '../../modelo/cita.modelo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http : HttpClient) { }

  crearCita(cita:Cita) {
      return this.http.post<{valor: number}>(`${environment.endpoint}/cita`, cita);
  }

  getCitas(){
    return this.http.get<Cita[]>(`${environment.endpoint}/cita/consultar`);
  }
  getCitasPorFecha(fecha : string){
    return this.http.get<Cita[]>(`${environment.endpoint}/cita/consultar-por-fecha/${fecha}`);
  }

  cancelarCita(id:number){
    return this.http.post(`${environment.endpoint}/cita/cancelar/`, {idCita: id});
  }
  confirmarCita(id:number){
    return this.http.post(`${environment.endpoint}/cita/confirmar/`, {idCita: id});
  }
}
