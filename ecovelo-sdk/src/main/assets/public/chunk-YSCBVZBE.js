import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/internal/appstate.service.ts
var _AppstateService = class _AppstateService {
  constructor(storage) {
    this.storage = storage;
    this.appState = new BehaviorSubject({
      state: "launch"
    });
    this.getSavedAppState().then((state) => {
      if (state) {
        this.appState.next(state);
      }
    });
  }
  setAppState(state) {
    return __async(this, null, function* () {
      this.appState.next(state);
      yield this.saveAppState();
    });
  }
  getAppState() {
    return this.appState.value;
  }
  saveAppState() {
    return __async(this, null, function* () {
      yield this.storage.set("appState", this.appState.value);
    });
  }
  getSavedAppState() {
    return this.storage.get("appState");
  }
};
_AppstateService.\u0275fac = function AppstateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppstateService)(\u0275\u0275inject(StorageService));
};
_AppstateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppstateService, factory: _AppstateService.\u0275fac, providedIn: "root" });
var AppstateService = _AppstateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppstateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: StorageService }], null);
})();

export {
  AppstateService
};
//# sourceMappingURL=chunk-YSCBVZBE.js.map
