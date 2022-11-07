import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MensajeErrorCamposDirective } from './directivas/error-campos/directiva/mensaje-error-campos.directive';
import { MensajeErrorCamposSubmitDirective } from './directivas/error-campos/directiva/mensaje-error-campos-submit.directive';
import { MensajeErrorCamposContenedorDirective } from './directivas/error-campos/directiva/mensaje-error-campos-contenedor.directive';
import { ErrorCamposPlantillaComponent } from './directivas/error-campos/componente/error-campos-plantilla.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrackByPipe } from './pipe/track-by.pipe';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    ErrorCamposPlantillaComponent,
    MensajeErrorCamposDirective,
    MensajeErrorCamposContenedorDirective,
    MensajeErrorCamposSubmitDirective,
    TrackByPipe,
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule],
  exports: [
    CommonModule,
    HttpClientModule,
    // MensajeErrorCamposDirective,
    // MensajeErrorCamposContenedorDirective,
    // MensajeErrorCamposSubmitDirective,
    ReactiveFormsModule,
    TrackByPipe,
    MaterialModule
  ]
})
export class SharedModule { }
