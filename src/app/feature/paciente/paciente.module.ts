import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './components/paciente/paciente.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { BuscarPacienteComponent } from './components/buscar-paciente/buscar-paciente.component';
import { CoreModule } from '@core/core.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { RegistrarHistoriaComponent } from './components/registrar-historia/registrar-historia.component';



@NgModule({
  declarations: [
    PacienteComponent,
    CrearPacienteComponent,
    BuscarPacienteComponent,
    RegistrarHistoriaComponent,
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    CoreModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class PacienteModule { }
