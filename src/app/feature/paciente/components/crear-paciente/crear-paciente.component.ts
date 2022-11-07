import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PacienteService } from '@core/services/paciente/paciente.service';
import { MyValidators } from '@shared/validators/MyValidators';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.scss']
})
export class CrearPacienteComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private pacienteService:PacienteService,
    private router: Router) {
    this.construirFormulario();
  }

  ngOnInit(): void {
  }

  guardarPaciente(){

    if(this.form.valid){
      const paciente = this.form.value;

      this.pacienteService.createPaciente(paciente)
      .subscribe(()=>{
        this.router.navigate(['../../../citas/agendar-cita']);
      })


    }else{
       this.form.markAllAsTouched()
    }

  }

  private construirFormulario(){
    this.form  = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(10)], [MyValidators.validarPaciente(this.pacienteService)] ],
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/), Validators.minLength(10)]],
      tipoPaciente: ['', Validators.required]
    })
  }
  get tipoCampo(){
    return this.form.get('tipoPaciente');
  }
  get idCampo(){
    return this.form.get('id');
  }
  get nombreCampo(){
    return this.form.get('nombre');
  }
  get esNombreInvalido() {
    return this.nombreCampo.touched && this.nombreCampo.invalid;
  }
  get esNombreValido() {
    return this.nombreCampo.touched && this.nombreCampo.valid;
  }
  get esIdInvalido() {
    return this.idCampo.touched && this.idCampo.invalid;
  }
  get esIdValido() {
    return this.idCampo.touched && this.idCampo.valid;
  }
}
