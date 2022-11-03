/**
 * Pipe para no tener que adicionar la funcion trackByFn en cada componente con un ngFor
 * @Version : 1.0
 *
 * Un ejemplo de como se debería usar en un ngFor
 * - Ejemplo:
 *    *ngFor="let profesor of profesores; ; trackBy: 'id' | trackBy"
 *    O
 *    *ngFor="let usuario of usuarios; ; trackBy: 'email' | trackBy"
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
import { Pipe, PipeTransform } from '@angular/core';
interface TrackBy {
  [propiedad: string]: <T>(indice: number, elemento: T) => T;
}
const cache: TrackBy = Object.create(null);
@Pipe({
  name: 'trackBy',
  pure: true
})
export class TrackByPipe implements PipeTransform {
  public transform(propiedad: string) {
    if (stryMutAct_9fa48("207")) {
      {}
    } else {
      stryCov_9fa48("207");
      if (stryMutAct_9fa48("210") ? false : stryMutAct_9fa48("209") ? true : stryMutAct_9fa48("208") ? cache[propiedad] : (stryCov_9fa48("208", "209", "210"), !cache[propiedad])) {
        if (stryMutAct_9fa48("211")) {
          {}
        } else {
          stryCov_9fa48("211");
          cache[propiedad] = function trackBy<T>(_: number, elemento: T): T {
            if (stryMutAct_9fa48("212")) {
              {}
            } else {
              stryCov_9fa48("212");
              return elemento[propiedad];
            }
          };
        }
      }
      return cache[propiedad];
    }
  }
}