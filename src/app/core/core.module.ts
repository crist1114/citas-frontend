import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, LayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [NavbarComponent, FooterComponent],
  providers: [
  ]
})
export class CoreModule { }
