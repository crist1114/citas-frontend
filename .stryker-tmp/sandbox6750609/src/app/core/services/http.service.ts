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
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
export interface Options {
  headers?: HttpHeaders;
  params?: HttpParams;
}
@Injectable()
export class HttpService {
  constructor(protected http: HttpClient) {}
  public createDefaultOptions(): Options {
    if (stryMutAct_9fa48("66")) {
      {}
    } else {
      stryCov_9fa48("66");
      return stryMutAct_9fa48("67") ? {} : (stryCov_9fa48("67"), {
        headers: new HttpHeaders(stryMutAct_9fa48("68") ? {} : (stryCov_9fa48("68"), {
          'Content-Type': stryMutAct_9fa48("69") ? "" : (stryCov_9fa48("69"), 'application/json')
        }))
      });
    }
  }
  public doGet<T>(serviceUrl: string, opts?: Options): Observable<T> {
    if (stryMutAct_9fa48("70")) {
      {}
    } else {
      stryCov_9fa48("70");
      const ropts = this.createOptions(opts);
      return this.http.get<T>(serviceUrl, ropts);
    }
  }
  public doPost<T, R>(serviceUrl: string, body: T, opts?: Options): Observable<R> {
    if (stryMutAct_9fa48("71")) {
      {}
    } else {
      stryCov_9fa48("71");
      const ropts = this.createOptions(opts);
      return this.http.post<R>(serviceUrl, body, ropts);
    }
  }
  public doDelete<R>(serviceUrl: string, opts?: Options): Observable<R> {
    if (stryMutAct_9fa48("72")) {
      {}
    } else {
      stryCov_9fa48("72");
      const ropts = this.createOptions(opts);
      return this.http.delete<R>(serviceUrl, ropts);
    }
  }
  public doGetParameters<T>(serviceUrl: string, parametros: HttpParams, opts?: Options): Observable<T> {
    if (stryMutAct_9fa48("73")) {
      {}
    } else {
      stryCov_9fa48("73");
      const ropts = this.createOptions(opts);
      const options = (stryMutAct_9fa48("76") ? parametros === null : stryMutAct_9fa48("75") ? false : stryMutAct_9fa48("74") ? true : (stryCov_9fa48("74", "75", "76"), parametros !== null)) ? ({
        headers: ropts.headers,
        params: parametros
      } as Options) : ropts;
      return this.http.get<T>(serviceUrl, options);
    }
  }
  public setHeader(name: string, value: string) {
    if (stryMutAct_9fa48("77")) {
      {}
    } else {
      stryCov_9fa48("77");
      const newopts = this.createDefaultOptions();
      newopts.headers = newopts.headers.set(name, value);
      return newopts;
    }
  }
  private createOptions(opts: Options): Options {
    if (stryMutAct_9fa48("78")) {
      {}
    } else {
      stryCov_9fa48("78");
      const defaultOpts: Options = this.createDefaultOptions();
      if (stryMutAct_9fa48("80") ? false : stryMutAct_9fa48("79") ? true : (stryCov_9fa48("79", "80"), opts)) {
        if (stryMutAct_9fa48("81")) {
          {}
        } else {
          stryCov_9fa48("81");
          opts = stryMutAct_9fa48("82") ? {} : (stryCov_9fa48("82"), {
            params: stryMutAct_9fa48("85") ? opts.params && defaultOpts.params : stryMutAct_9fa48("84") ? false : stryMutAct_9fa48("83") ? true : (stryCov_9fa48("83", "84", "85"), opts.params || defaultOpts.params),
            headers: stryMutAct_9fa48("88") ? opts.headers && defaultOpts.headers : stryMutAct_9fa48("87") ? false : stryMutAct_9fa48("86") ? true : (stryCov_9fa48("86", "87", "88"), opts.headers || defaultOpts.headers)
          });
          if (stryMutAct_9fa48("91") ? false : stryMutAct_9fa48("90") ? true : stryMutAct_9fa48("89") ? opts.headers.get('Content-Type') : (stryCov_9fa48("89", "90", "91"), !opts.headers.get(stryMutAct_9fa48("92") ? "" : (stryCov_9fa48("92"), 'Content-Type')))) {
            if (stryMutAct_9fa48("93")) {
              {}
            } else {
              stryCov_9fa48("93");
              opts.headers = opts.headers.set(stryMutAct_9fa48("94") ? "" : (stryCov_9fa48("94"), 'Content-Type'), defaultOpts.headers.get(stryMutAct_9fa48("95") ? "" : (stryCov_9fa48("95"), 'Content-Type')));
            }
          }
        }
      }
      return stryMutAct_9fa48("98") ? opts && defaultOpts : stryMutAct_9fa48("97") ? false : stryMutAct_9fa48("96") ? true : (stryCov_9fa48("96", "97", "98"), opts || defaultOpts);
    }
  }
}