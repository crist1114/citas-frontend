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
import { InjectionToken } from '@angular/core';
export const listaErrores = stryMutAct_9fa48("188") ? {} : (stryCov_9fa48("188"), {
  required: stryMutAct_9fa48("189") ? () => undefined : (stryCov_9fa48("189"), () => stryMutAct_9fa48("190") ? "" : (stryCov_9fa48("190"), 'Dato <strong> obligatorio </strong>')),
  min: stryMutAct_9fa48("191") ? () => undefined : (stryCov_9fa48("191"), ({
    min
  }) => stryMutAct_9fa48("192") ? `` : (stryCov_9fa48("192"), `Valor mínimo ${min}`)),
  max: stryMutAct_9fa48("193") ? () => undefined : (stryCov_9fa48("193"), ({
    max
  }) => stryMutAct_9fa48("194") ? `` : (stryCov_9fa48("194"), `Valor máximo ${max}`)),
  repetido: stryMutAct_9fa48("195") ? () => undefined : (stryCov_9fa48("195"), () => stryMutAct_9fa48("196") ? "" : (stryCov_9fa48("196"), 'Elemento repetido')),
  email: stryMutAct_9fa48("197") ? () => undefined : (stryCov_9fa48("197"), () => stryMutAct_9fa48("198") ? "" : (stryCov_9fa48("198"), 'Esto no es un correo')),
  minlength: stryMutAct_9fa48("199") ? () => undefined : (stryCov_9fa48("199"), ({
    requiredLength,
    actualLength
  }) => stryMutAct_9fa48("200") ? `` : (stryCov_9fa48("200"), `Mínimo <strong>${requiredLength}</strong> caracteres, actual <strong>${actualLength}</strong>`)),
  maxlength: stryMutAct_9fa48("201") ? () => undefined : (stryCov_9fa48("201"), ({
    requiredLength,
    actualLength
  }) => stryMutAct_9fa48("202") ? `` : (stryCov_9fa48("202"), `Máximo <strong>${requiredLength}</strong> caracteres, actual <strong>${actualLength}</strong>`))
});
export const FORM_ERRORS = new InjectionToken(stryMutAct_9fa48("203") ? "" : (stryCov_9fa48("203"), 'FORM_ERRORS'), stryMutAct_9fa48("204") ? {} : (stryCov_9fa48("204"), {
  providedIn: stryMutAct_9fa48("205") ? "" : (stryCov_9fa48("205"), 'root'),
  factory: stryMutAct_9fa48("206") ? () => undefined : (stryCov_9fa48("206"), () => listaErrores)
}));