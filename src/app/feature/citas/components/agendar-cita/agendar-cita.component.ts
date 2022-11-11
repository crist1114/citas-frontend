import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cita } from '../../../../core/modelo/cita.modelo';
import { CitaService } from '@core/services/cita/cita.service';
import { PacienteService } from '@core/services/paciente/paciente.service';
import { MyValidators } from '@shared/validators/MyValidators';
import * as moment from 'moment';
import { Router } from '@angular/router';

const INICIO_HORARIO = 7;
const LIMITE_HORARIO = 16;
const DIAS_DISPONIBLES = 7;
const INICIO_HORAS_CON_CERO = 10;
const TAMANIO_MAXIMO_DOCUMENTO = 10;

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.scss']
})
export class AgendarCitaComponent implements OnInit {

  form: FormGroup;
  procedimientos = ['LIMPIEZA', 'MANTENIMIENTO_DE_BRACKETS', 'CALZA_DE_MUELA', 'BLANQUEAMIENTO_DENTAL'];
  horasDisp = [];
  citasPorFecha: Cita[] = [];
  minDate = new Date();
  maxDate = new Date();

  constructor(private formBuilder: FormBuilder, private pacienteService: PacienteService,
    private citaService: CitaService, private router : Router
  ) {
    this.construirFormulario();
  }

  ngOnInit(): void {
    this.maxDate.setDate(this.maxDate.getDate() + DIAS_DISPONIBLES);
    this.consultarPorFecha(this.form.get('fecha').value);

    this.form.get('fecha').valueChanges
      .subscribe(data => {
        this.consultarPorFecha(data);
      });
  }

  cargarHoras() {

    let horasNoDisp = this.citasPorFecha.map((item) => item.hora);
    this.horasDisp = [];
    for (let i = INICIO_HORARIO; i <= LIMITE_HORARIO; i++) {

      if (!horasNoDisp.includes(i + ':00:00')) {
        const hora = i < INICIO_HORAS_CON_CERO ? `0${i}:00` : `${i}:00`;
        this.horasDisp.push(hora);
      }
    }
  }

  consultarPorFecha(fecha) {
    fecha = moment(fecha).format('YYYY-MM-DD');
    this.citaService.getCitasPorFecha(fecha)
      .subscribe(data => {
        this.citasPorFecha = data;
        this.cargarHoras();
      });
  }

  guardarCita(evento) {
    evento.preventDefault();

    if (this.form.valid) {
      const fecha = moment(this.form.get('fecha').value).format('YYYY-MM-DD');
      this.form.patchValue({ fecha });

      this.citaService.crearCita(this.form.value)
        .subscribe(() =>{
          this.router.navigate(['../../../citas/buscar-cita']);
        },
        error=>{
          this.mostrarError(error.error);
        });
    }
    else {
      this.form.markAllAsTouched();
    }

  }

  mostrarError(error){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.mensaje
      });
  }

  private construirFormulario() {
    this.form = this.formBuilder.group({
      idPaciente: ['', [Validators.required, Validators.required, Validators.maxLength(TAMANIO_MAXIMO_DOCUMENTO)], [MyValidators.validarPacienteNoExiste(this.pacienteService)]],
      tipoProcedimiento: ['', Validators.required],
      valor: ['', [Validators.required]],
      fecha: [this.minDate, [Validators.required, MyValidators.validarDia]],
      hora: ['', [Validators.required]]
    }
    );
  }

  get idPacienteCampo() {
    return this.form.get('idPaciente');
  }
  get tipoProcedimientoCampo() {
    return this.form.get('tipoProcedimiento');
  }
  get valorCampo() {
    return this.form.get('valor');
  }
  get horaCampo() {
    return this.form.get('hora');
  }
  get fechaCampo() {
    return this.form.get('fecha');
  }
  get esIdPacienteInvalido() {
    return this.idPacienteCampo.touched && this.idPacienteCampo.invalid;
  }
  get esIdPacienteValido() {
    return this.idPacienteCampo.touched && this.idPacienteCampo.valid;
  }

  valorNoValido() {
    return this.form.hasError('valor_invalido') && this.valorCampo.touched;
  }

}
