import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { BuscarPacienteComponent } from './components/buscar-paciente/buscar-paciente.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';

import { PacienteComponent } from './components/paciente/paciente.component';
import { RegistrarHistoriaComponent } from './components/registrar-historia/registrar-historia.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'menu-paciente',
        pathMatch: 'full'
      },
      {
        path: 'menu-paciente',
        component: PacienteComponent
      },
      {
        path: 'crear',
        component: CrearPacienteComponent
      },
      {
        path: 'buscar',
        component: BuscarPacienteComponent
      },
      {
        path: 'registrar-historia',
        component: RegistrarHistoriaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule {
}
