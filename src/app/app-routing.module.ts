import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LayoutComponent } from '@core/components/layout/layout.component';
// import { SecurityGuard } from '@core/guard/security.guard';
// import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./feature/home/home.module').then(mod => mod.HomeModule)},
  { path: 'paciente', loadChildren: () => import('./feature/paciente/paciente.module').then(mod => mod.PacienteModule) },
  { path: 'citas', loadChildren: ()=> import('./feature/citas/citas.module').then(mod => mod.CitasModule) }
  // {path: '**', NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
