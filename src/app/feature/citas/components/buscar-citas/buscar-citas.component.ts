import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cita } from '../../../../core/modelo/cita.modelo';
import { CitaService } from '@core/services/cita/cita.service';
export interface PeriodicElement {
  acciones: string;
  idPaciente: number;
  tipoProcedimiento: string;
  fecha: string;
  hora: string;
  estado: string;
}

@Component({
  selector: 'app-buscar-citas',
  templateUrl: './buscar-citas.component.html',
  styleUrls: ['./buscar-citas.component.scss']
})
export class BuscarCitasComponent implements OnInit {

  displayedColumns: string[] = ['idPaciente', 'tipoProcedimiento', 'fecha', 'hora', 'estado','acciones'];
  dataSource: MatTableDataSource<Cita>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ELEMENT_DATA: Cita[] = [];

  constructor(private citaService: CitaService) {

  }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  obtenerCitas() {
    this.citaService.getCitas()
      .subscribe((data) => {
        this.ELEMENT_DATA = data;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      });
  }

  cancelar(id:number){
    this.citaService.cancelarCita(id)
    .subscribe(()=>{
      window.location.reload();
    });
  }

  confirmar(id:number){
    this.citaService.confirmarCita(id)
    .subscribe(() => {
      window.location.reload();
    });
  }

}
