import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BuscarPacienteComponent } from './buscar-paciente.component';

describe('BuscarPacienteComponent', () => {
  let component: BuscarPacienteComponent;
  let fixture: ComponentFixture<BuscarPacienteComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPacienteComponent ],
      imports: [
        MatIconModule,
        MatTableModule,
    ],
    providers: [HttpClient, HttpHandler, MatPaginator],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
