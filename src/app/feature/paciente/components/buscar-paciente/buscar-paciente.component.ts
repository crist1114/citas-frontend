import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from '@core/modelo/paciente.model';
import { PacienteService } from '@core/services/paciente/paciente.service';

export interface PeriodicElement {
  Identificacion: string;
  Nombre: number;
  Tipo: number;
}

@Component({
  selector: 'app-buscar-paciente',
  templateUrl: './buscar-paciente.component.html',
  styleUrls: ['./buscar-paciente.component.scss']
})
export class BuscarPacienteComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Identificacion', 'Nombre', 'Tipo'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Paciente[] = [];

  constructor(private pacienteService: PacienteService) {

   }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  obtenerPacientes(){
    this.pacienteService.getPacientes()
    .subscribe(data =>{
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    });
  }

}
