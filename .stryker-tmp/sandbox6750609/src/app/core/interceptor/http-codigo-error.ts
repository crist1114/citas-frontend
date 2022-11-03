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
export const HTTP_ERRORES_CODIGO = stryMutAct_9fa48("20") ? {} : (stryCov_9fa48("20"), {
  NO_HAY_INTERNET: stryMutAct_9fa48("21") ? "" : (stryCov_9fa48("21"), 'Lo sentimos, no se detecta conexión a internet'),
  PETICION_FALLIDA: stryMutAct_9fa48("22") ? "" : (stryCov_9fa48("22"), 'Error inesperado en la petición'),
  400: stryMutAct_9fa48("23") ? "" : (stryCov_9fa48("23"), 'El servidor no puede procesar la petición por un error de sintaxis del cliente.'),
  403: stryMutAct_9fa48("24") ? "" : (stryCov_9fa48("24"), 'Acceso denegado.'),
  404: stryMutAct_9fa48("25") ? "" : (stryCov_9fa48("25"), 'No se encuentra la petición.'),
  405: stryMutAct_9fa48("26") ? "" : (stryCov_9fa48("26"), 'Se ha hecho una petición con un recurso no soportado por ese recurso (GET, POST, PUT, DELETE).'),
  500: stryMutAct_9fa48("27") ? "" : (stryCov_9fa48("27"), 'Error inesperado en el servidor.'),
  501: stryMutAct_9fa48("28") ? "" : (stryCov_9fa48("28"), 'El servidor o no reconoce el método del la petición o carece de la capacidad para completarlo.'),
  503: stryMutAct_9fa48("29") ? "" : (stryCov_9fa48("29"), 'El servidor no esta disponible.'),
  504: stryMutAct_9fa48("30") ? "" : (stryCov_9fa48("30"), 'El tiempo de espera para la petición se ha excedido')
});