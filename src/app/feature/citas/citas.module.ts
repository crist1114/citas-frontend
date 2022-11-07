import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { MenuCitaComponent } from './components/menu-cita/menu-cita.component';
import { BuscarCitasComponent } from './components/buscar-citas/buscar-citas.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    AgendarCitaComponent,
    MenuCitaComponent,
    BuscarCitasComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    SharedModule
  ]
})
export class CitasModule { }
