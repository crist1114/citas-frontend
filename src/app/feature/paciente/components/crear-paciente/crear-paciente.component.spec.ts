import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { Paciente } from '@core/modelo/paciente.model';
import { PacienteService } from '@core/services/paciente/paciente.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';

import { CrearPacienteComponent } from './crear-paciente.component';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CrearPacienteComponent', () => {
  let component: CrearPacienteComponent;
  let fixture: ComponentFixture<CrearPacienteComponent>;
  // let pacienteService : PacienteService;
  // let pacienteTest : Paciente;
  // let response;

  beforeEach(waitForAsync(()=>{
    TestBed.configureTestingModule({
      declarations: [CrearPacienteComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule
      ],
      providers: [
        HttpService,
        PacienteService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPacienteComponent);
    component = fixture.componentInstance;
    // pacienteService = TestBed.inject(PacienteService);

    // pacienteTest = {
    //   id: 1090,
    //   nombre: 'paciente 1',
    //   tipoPaciente: "CONTRIBUTIVO",
    // }
    // pacienteService.createPaciente(pacienteTest);
    // response = {valor: 1090};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });
});
