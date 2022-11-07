import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { BuscarCitasComponent } from './components/buscar-citas/buscar-citas.component';
import { MenuCitaComponent } from './components/menu-cita/menu-cita.component';

const routes: Routes = [
  {path: '',
  component: LayoutComponent,
  children: [
  {
    path: '',
    component: MenuCitaComponent
  },
  {
    path: 'agendar-cita',
    component: AgendarCitaComponent
  },
  {
    path: 'buscar-cita',
    component: BuscarCitasComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
