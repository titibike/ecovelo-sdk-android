import {
  AuthService
} from "./chunk-7UN2TOGU.js";
import {
  PassesService
} from "./chunk-5KPTYQ6O.js";
import {
  environment
} from "./chunk-GFMHZGOY.js";
import {
  BehaviorSubject,
  Injectable,
  effect,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/nfc.service.ts
var _NfcService = class _NfcService {
  constructor(passesService, authService) {
    this.passesService = passesService;
    this.authService = authService;
    this.nfcState = new BehaviorSubject({
      state: "loading"
    });
    effect(() => {
      if (this.authService.authState().state === "SignedIn" && this.nfcState.value.state === "loading") {
        this.getPasses();
      } else if (this.authService.authState().state === "SignedOut") {
        this.resetState();
      }
    });
  }
  getPasses() {
    return __async(this, null, function* () {
      this.nfcState.next({ state: "loading" });
      this.passesService.listPass({
        program: environment.program
      }).subscribe((passes) => {
        if (passes.data) {
          if (passes.data.length === 0) {
            this.nfcState.next({ state: "noData" });
          } else {
            this.nfcState.next({ state: "loaded", passes });
          }
        }
      });
    });
  }
  associatePass(pass, model) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.passesService.associatePass({
          program: environment.program,
          associatePassRequest: {
            model,
            uid: pass
          }
        }).subscribe((pass2) => {
          resolve(pass2);
        }, (error) => {
          reject(error);
        });
      });
    });
  }
  disassociatePass(pass) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.passesService.disassociatePass({
          program: environment.program,
          id: pass
        }).subscribe((pass2) => {
          resolve(pass2);
        }, (error) => {
          reject(error);
        });
      });
    });
  }
  resetState() {
    this.nfcState.next({ state: "loading" });
  }
};
_NfcService.\u0275fac = function NfcService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NfcService)(\u0275\u0275inject(PassesService), \u0275\u0275inject(AuthService));
};
_NfcService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NfcService, factory: _NfcService.\u0275fac, providedIn: "root" });
var NfcService = _NfcService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NfcService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: PassesService }, { type: AuthService }], null);
})();

export {
  NfcService
};
//# sourceMappingURL=chunk-AQAEAFRE.js.map
