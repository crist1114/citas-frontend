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
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly router: Router) {}
  intercept<T, R>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<R>> {
    if (stryMutAct_9fa48("10")) {
      {}
    } else {
      stryCov_9fa48("10");
      return next.handle(req).pipe(catchError(error => {
        if (stryMutAct_9fa48("11")) {
          {}
        } else {
          stryCov_9fa48("11");
          switch (error.status) {
            case UNAUTHORIZED:
              if (stryMutAct_9fa48("12")) {} else {
                stryCov_9fa48("12");
                this.router.navigate(stryMutAct_9fa48("13") ? [] : (stryCov_9fa48("13"), [stryMutAct_9fa48("14") ? "" : (stryCov_9fa48("14"), '/home')]));
                break;
              }
            case FORBIDDEN:
              if (stryMutAct_9fa48("15")) {} else {
                stryCov_9fa48("15");
                this.router.navigate(stryMutAct_9fa48("16") ? [] : (stryCov_9fa48("16"), [stryMutAct_9fa48("17") ? "" : (stryCov_9fa48("17"), '/home')]));
                break;
              }
            default:
              if (stryMutAct_9fa48("18")) {} else {
                stryCov_9fa48("18");
                return throwError(stryMutAct_9fa48("19") ? () => undefined : (stryCov_9fa48("19"), () => error));
              }
          }
        }
      }));
    }
  }
}