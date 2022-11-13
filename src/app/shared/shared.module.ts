import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TrackByPipe } from './pipe/track-by.pipe';
import { MaterialModule } from './material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    TrackByPipe,
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TrackByPipe,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class SharedModule { }
