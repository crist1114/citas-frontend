import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PacienteService } from '@core/services/paciente/paciente.service';
import { MyValidators } from '@shared/validators/MyValidators';
import * as moment from 'moment';

@Component({
  selector: 'app-registrar-historia',
  templateUrl: './registrar-historia.component.html',
  styleUrls: ['./registrar-historia.component.scss']
})
export class RegistrarHistoriaComponent implements OnInit {

  form: FormGroup;
  ubicaciones = ["CASILLERO_1","CASILLERO_2","CASILLERO_3","CASILLERO_4"]
  maxDate = new Date();

  constructor(private formBuilder: FormBuilder, private pacienteService: PacienteService,
    private router: Router) {
      this.construirFormulario();
   }

  ngOnInit(): void {
  }

  guardarHistoria(){

    if(this.form.valid){

      const fecha = moment(this.form.get('fechaEmision').value).format('YYYY-MM-DD');
      this.form.patchValue({fechaEmision : fecha});

      this.pacienteService.createHistoriaPaciente(this.form.value)
      .subscribe(()=>{
        this.router.navigate(['../paciente/buscar']);
      })
    }else{
      this.form.markAllAsTouched();

    }

  }

  private construirFormulario(){
    this.form  = this.formBuilder.group({
      idPaciente: ['', [Validators.required, Validators.maxLength(10)], [MyValidators.validarPacienteNoExiste(this.pacienteService)]],
      fechaEmision: ['', Validators.required],
      ubicacion: ['', Validators.required]
    })
  }

  get idPacienteCampo(){
    return this.form.get("idPaciente");
  }
  get fechaCampo(){
    return this.form.get("fechaEmision");
  }
  get ubicacionCampo(){
    return this.form.get("ubicacion");
  }

  get esIdPacienteInvalido() {
    return this.idPacienteCampo.touched && this.idPacienteCampo.invalid;
  }
  get esIdPacienteValido() {
    return this.idPacienteCampo.touched && this.idPacienteCampo.valid;
  }



}
