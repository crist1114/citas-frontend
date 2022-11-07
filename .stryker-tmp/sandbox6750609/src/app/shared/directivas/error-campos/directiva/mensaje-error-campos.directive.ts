/**
 * Directiva de validación de errores automáticamente (FromControl,FormControlName, NgModel)
 * @Version : 2.3
 *
 * Para que la directiva funcione y haga las respectivas validaciones es necesaria la etiqueta "validar"
 * al nivel igual o superior de los atributos(FromControl,FormControlName, NgModel)
 * - Ejemplo:
 *    <div validar>
 *      <input  [(ngModel)]="variable" [validaciones]="validaciones">
 *    </div>
 *    O
 *    <input validar [formControl]="variable" >
 *
 * La etiqueta "validar" puede ser remplazada en el archivo input-mensaje-errores-contenedor.directive.ts
 * una vez se encuentra un error agrega una clase al nivel del atributo "validar", el nombre de la clase de estilos
 * esta en a variable @nombreClaseError la por defecto es 'clase-invalido'
 *
 * Una vez encontrado el error es necesaria la lista estandarizada con cada uno de los errores y sus respectivos mensajes
 * la cual se encuentra en el archivo lista-errores
 *
 * Para poder renderizar en el HTMl es necesario el componente MensajeErrorPlantillaComponent
 * el cual contiene el aspecto de error
 *
 *
 * Parametros  de entrada
 * @errores => @Json
 * - Descripción: Json de con los nombres de los errores, también soporta anotaciones HTML
 * - Ejemplo:     {required: 'Elemento <b>requerido</b>'}
 * @validacionInicial => @Boolean
 * - Descripción: Es una bandera para validar si se quiere validar el input una vez renderizado el HTML
 *                por defecto @true
 * @validaciones =>
 * - Descripción: Debido a que un NgModel no tiene validaciones, por medio de esta variable le se envía
 *                un array de validaciones las cuales se le aplican normalmente a los formularios reactivos
 * - Ejemplo:     [Validators.required]
 *
 * Parametros de configuracion
 * @nombreClaseError => @string
 * - Descripción: Nombre de la clase de estilo que se agrega al encontrar un error
 *
 */
// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import { AfterViewChecked, ComponentFactoryResolver, ComponentRef, Directive, Host, Inject, Input, OnDestroy, OnInit, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { AbstractControl, NgControl, NgModel, ValidatorFn } from '@angular/forms';
import { EMPTY, merge, Observable, Subscription } from 'rxjs';
import { MensajeErrorCamposContenedorDirective } from './mensaje-error-campos-contenedor.directive';
import { MensajeErrorCamposSubmitDirective } from './mensaje-error-campos-submit.directive';
import { FORM_ERRORS } from '../errores/lista-errores';
import { ErrorCamposPlantillaComponent } from '../componente/error-campos-plantilla.component';
/* eslint-disable @angular-eslint/directive-selector */

@Directive({
  selector: '[ngModel], [formControlName], [formControl]'
})
export class MensajeErrorCamposDirective implements OnInit, OnDestroy, AfterViewChecked {
  @Input()
  private errores = {};
  @Input()
  private validacionInicial = stryMutAct_9fa48("137") ? false : (stryCov_9fa48("137"), true);
  @Input()
  private validaciones: ValidatorFn[];
  private nombreClaseError = stryMutAct_9fa48("138") ? "" : (stryCov_9fa48("138"), 'clase-invalido');
  private componente: ComponentRef<ErrorCamposPlantillaComponent>;
  private container: ViewContainerRef;
  private estado: Subscription;
  private submit: Observable<Event>;
  constructor(public vcr: ViewContainerRef, @Optional()
  controlErrorContainer: MensajeErrorCamposContenedorDirective, @Optional()
  @Host()
  private form: MensajeErrorCamposSubmitDirective, @Inject(FORM_ERRORS)
  private errors, private resolver: ComponentFactoryResolver, private renderer: Renderer2, private control: NgControl) {
    if (stryMutAct_9fa48("139")) {
      {}
    } else {
      stryCov_9fa48("139");
      this.container = controlErrorContainer ? controlErrorContainer.vcr : null;
      this.submit = this.form ? this.form.submit : EMPTY;
    }
  }
  public get validarEstadoInicial(): boolean {
    if (stryMutAct_9fa48("140")) {
      {}
    } else {
      stryCov_9fa48("140");
      if (stryMutAct_9fa48("142") ? false : stryMutAct_9fa48("141") ? true : (stryCov_9fa48("141", "142"), this.validacionInicial)) {
        if (stryMutAct_9fa48("143")) {
          {}
        } else {
          stryCov_9fa48("143");
          return this.validacionInicial;
        }
      } else {
        if (stryMutAct_9fa48("144")) {
          {}
        } else {
          stryCov_9fa48("144");
          return stryMutAct_9fa48("147") ? this.formControl.dirty && this.formControl.touched : stryMutAct_9fa48("146") ? false : stryMutAct_9fa48("145") ? true : (stryCov_9fa48("145", "146", "147"), this.formControl.dirty || this.formControl.touched);
        }
      }
    }
  }
  private get formControl(): AbstractControl {
    if (stryMutAct_9fa48("148")) {
      {}
    } else {
      stryCov_9fa48("148");
      return this.control.control;
    }
  }
  ngOnInit(): void {
    if (stryMutAct_9fa48("149")) {
      {}
    } else {
      stryCov_9fa48("149");
      this.agregarValidaciones();
      this.escucharEstados();
    }
  }
  ngAfterViewChecked(): void {
    if (stryMutAct_9fa48("150")) {
      {}
    } else {
      stryCov_9fa48("150");
      this.validarErrores();
    }
  }
  ngOnDestroy(): void {
    if (stryMutAct_9fa48("151")) {
      {}
    } else {
      stryCov_9fa48("151");
      this.estado.unsubscribe();
    }
  }
  private agregarValidaciones(): void {
    if (stryMutAct_9fa48("152")) {
      {}
    } else {
      stryCov_9fa48("152");
      if (stryMutAct_9fa48("155") ? this.control instanceof NgModel || this.validaciones : stryMutAct_9fa48("154") ? false : stryMutAct_9fa48("153") ? true : (stryCov_9fa48("153", "154", "155"), this.control instanceof NgModel && this.validaciones)) {
        if (stryMutAct_9fa48("156")) {
          {}
        } else {
          stryCov_9fa48("156");
          this.control.control.setValidators(this.validaciones);
        }
      }
    }
  }
  private pintarErrorEnPantalla(texto: string = null): void {
    if (stryMutAct_9fa48("157")) {
      {}
    } else {
      stryCov_9fa48("157");
      try {
        if (stryMutAct_9fa48("158")) {
          {}
        } else {
          stryCov_9fa48("158");
          if (stryMutAct_9fa48("161") ? false : stryMutAct_9fa48("160") ? true : stryMutAct_9fa48("159") ? this.componente : (stryCov_9fa48("159", "160", "161"), !this.componente)) {
            if (stryMutAct_9fa48("162")) {
              {}
            } else {
              stryCov_9fa48("162");
              const factory = this.resolver.resolveComponentFactory(ErrorCamposPlantillaComponent);
              this.componente = this.container.createComponent(factory);
            }
          }
          this.componente.instance.text = texto;
          this.claseError(stryMutAct_9fa48("163") ? false : (stryCov_9fa48("163"), true));
        }
      } catch (error) {
        if (stryMutAct_9fa48("164")) {
          {}
        } else {
          stryCov_9fa48("164");
          console.error(error);
        }
      }
    }
  }
  private claseError(aplicarClase: boolean): void {
    if (stryMutAct_9fa48("165")) {
      {}
    } else {
      stryCov_9fa48("165");
      if (stryMutAct_9fa48("167") ? false : stryMutAct_9fa48("166") ? true : (stryCov_9fa48("166", "167"), this.container)) {
        if (stryMutAct_9fa48("168")) {
          {}
        } else {
          stryCov_9fa48("168");
          const contenedor = this.container.element.nativeElement;
          if (stryMutAct_9fa48("170") ? false : stryMutAct_9fa48("169") ? true : (stryCov_9fa48("169", "170"), aplicarClase)) {
            if (stryMutAct_9fa48("171")) {
              {}
            } else {
              stryCov_9fa48("171");
              this.renderer.addClass(contenedor, this.nombreClaseError);
            }
          } else {
            if (stryMutAct_9fa48("172")) {
              {}
            } else {
              stryCov_9fa48("172");
              this.renderer.removeClass(contenedor, this.nombreClaseError);
            }
          }
        }
      }
    }
  }
  private validarErrores(): void {
    if (stryMutAct_9fa48("173")) {
      {}
    } else {
      stryCov_9fa48("173");
      try {
        if (stryMutAct_9fa48("174")) {
          {}
        } else {
          stryCov_9fa48("174");
          if (stryMutAct_9fa48("177") ? this.formControl.invalid || this.validarEstadoInicial : stryMutAct_9fa48("176") ? false : stryMutAct_9fa48("175") ? true : (stryCov_9fa48("175", "176", "177"), this.formControl.invalid && this.validarEstadoInicial)) {
            if (stryMutAct_9fa48("178")) {
              {}
            } else {
              stryCov_9fa48("178");
              const primerValor = Object.keys(this.formControl.errors)[0];
              const obtenerError = this.errors[primerValor];
              const texto = stryMutAct_9fa48("181") ? this.errores[primerValor] && obtenerError(this.formControl.errors[primerValor]) : stryMutAct_9fa48("180") ? false : stryMutAct_9fa48("179") ? true : (stryCov_9fa48("179", "180", "181"), this.errores[primerValor] || obtenerError(this.formControl.errors[primerValor]));
              this.pintarErrorEnPantalla(texto);
              this.claseError(stryMutAct_9fa48("182") ? false : (stryCov_9fa48("182"), true));
            }
          } else {
            if (stryMutAct_9fa48("183")) {
              {}
            } else {
              stryCov_9fa48("183");
              this.pintarErrorEnPantalla();
              this.claseError(stryMutAct_9fa48("184") ? true : (stryCov_9fa48("184"), false));
            }
          }
        }
      } catch (error) {
        if (stryMutAct_9fa48("185")) {
          {}
        } else {
          stryCov_9fa48("185");
          console.error(error);
        }
      }
    }
  }
  private escucharEstados(): void {
    if (stryMutAct_9fa48("186")) {
      {}
    } else {
      stryCov_9fa48("186");
      this.estado = merge(this.submit, this.formControl.valueChanges).subscribe(stryMutAct_9fa48("187") ? () => undefined : (stryCov_9fa48("187"), () => this.validarErrores()));
    }
  }
}