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
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  constructor(protected productoServices: ProductoService) {}
  ngOnInit() {
    if (stryMutAct_9fa48("99")) {
      {}
    } else {
      stryCov_9fa48("99");
      this.construirFormularioProducto();
    }
  }
  crear() {
    if (stryMutAct_9fa48("100")) {
      {}
    } else {
      stryCov_9fa48("100");
      if (stryMutAct_9fa48("102") ? false : stryMutAct_9fa48("101") ? true : (stryCov_9fa48("101", "102"), this.productoForm.valid)) {
        if (stryMutAct_9fa48("103")) {
          {}
        } else {
          stryCov_9fa48("103");
          this.productoServices.guardar(this.productoForm.value).subscribe(stryMutAct_9fa48("104") ? () => undefined : (stryCov_9fa48("104"), () => window.alert(stryMutAct_9fa48("105") ? "" : (stryCov_9fa48("105"), 'usuario creado'))));
        }
      }
    }
  }
  private construirFormularioProducto() {
    if (stryMutAct_9fa48("106")) {
      {}
    } else {
      stryCov_9fa48("106");
      this.productoForm = new FormGroup(stryMutAct_9fa48("107") ? {} : (stryCov_9fa48("107"), {
        id: new FormControl(stryMutAct_9fa48("108") ? "Stryker was here!" : (stryCov_9fa48("108"), ''), stryMutAct_9fa48("109") ? [] : (stryCov_9fa48("109"), [Validators.required])),
        email: new FormControl(stryMutAct_9fa48("110") ? "Stryker was here!" : (stryCov_9fa48("110"), ''), stryMutAct_9fa48("111") ? [] : (stryCov_9fa48("111"), [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO), Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]))
      }));
    }
  }
}