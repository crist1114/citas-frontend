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
import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';
@Injectable()
export class ProductoService {
  constructor(protected http: HttpService) {}
  public consultar() {
    if (stryMutAct_9fa48("113")) {
      {}
    } else {
      stryCov_9fa48("113");
      return this.http.doGet(stryMutAct_9fa48("114") ? `` : (stryCov_9fa48("114"), `${environment.endpoint}/users`))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .pipe(map(stryMutAct_9fa48("115") ? () => undefined : (stryCov_9fa48("115"), (response: any) => (response.data as Producto[]))));
    }
  }
  public guardar(producto: Producto) {
    if (stryMutAct_9fa48("116")) {
      {}
    } else {
      stryCov_9fa48("116");
      return this.http.doPost<Producto, boolean>(stryMutAct_9fa48("117") ? `` : (stryCov_9fa48("117"), `${environment.endpoint}/users`), producto);
    }
  }
  public eliminar(producto: Producto) {
    if (stryMutAct_9fa48("118")) {
      {}
    } else {
      stryCov_9fa48("118");
      return this.http.doDelete<boolean>(stryMutAct_9fa48("119") ? `` : (stryCov_9fa48("119"), `${environment.endpoint}/users/${producto.id}`));
    }
  }
}