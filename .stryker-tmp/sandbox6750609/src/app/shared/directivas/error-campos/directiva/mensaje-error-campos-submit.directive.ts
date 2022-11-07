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
import { Directive, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

/* eslint-disable @angular-eslint/directive-selector */
@Directive({
  selector: 'form'
})
export class MensajeErrorCamposSubmitDirective {
  public submit = fromEvent(this.element, stryMutAct_9fa48("127") ? "" : (stryCov_9fa48("127"), 'submit')).pipe(tap(() => {
    if (stryMutAct_9fa48("128")) {
      {}
    } else {
      stryCov_9fa48("128");
      if (stryMutAct_9fa48("131") ? this.element.classList.contains('submitted') !== false : stryMutAct_9fa48("130") ? false : stryMutAct_9fa48("129") ? true : (stryCov_9fa48("129", "130", "131"), this.element.classList.contains(stryMutAct_9fa48("132") ? "" : (stryCov_9fa48("132"), 'submitted')) === (stryMutAct_9fa48("133") ? true : (stryCov_9fa48("133"), false)))) {
        if (stryMutAct_9fa48("134")) {
          {}
        } else {
          stryCov_9fa48("134");
          this.element.classList.add(stryMutAct_9fa48("135") ? "" : (stryCov_9fa48("135"), 'submitted'));
        }
      }
    }
  }), shareReplay(1));
  constructor(private host: ElementRef<HTMLFormElement>) {}
  get element() {
    if (stryMutAct_9fa48("136")) {
      {}
    } else {
      stryCov_9fa48("136");
      return this.host.nativeElement;
    }
  }
}