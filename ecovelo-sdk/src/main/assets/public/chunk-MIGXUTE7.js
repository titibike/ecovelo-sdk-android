import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/utils/personnalisation.service.ts
var _PersonnalisationService = class _PersonnalisationService {
  constructor(storage) {
    this.storage = storage;
  }
  setColors() {
    return __async(this, null, function* () {
      const program = yield this.storage.get("program");
      if (!program || !program.config.colors) {
        return;
      }
      const htmlEl = document.querySelector("html");
      if (htmlEl) {
        htmlEl.style.setProperty("--ion-color-primary", program.config.colors.primary);
        htmlEl.style.setProperty("--ion-color-primary-shade", this.adjust(program.config.colors.primary, -30));
        htmlEl.style.setProperty("--ion-color-primary-tint", this.adjust(program.config.colors.primary, 30));
        htmlEl.style.setProperty("--ion-color-secondary", program.config.colors.secondary);
        htmlEl.style.setProperty("--ion-color-secondary-shade", this.adjust(program.config.colors.secondary, -30));
        htmlEl.style.setProperty("--ion-color-secondary-tint", this.adjust(program.config.colors.secondary, 30));
      }
    });
  }
  adjust(color, amount) {
    return "#" + color.replace(/^#/, "").replace(/../g, (color2) => ("0" + Math.min(255, Math.max(0, parseInt(color2, 16) + amount)).toString(16)).substr(-2));
  }
  setTitle() {
    return __async(this, null, function* () {
      const program = yield this.storage.get("program");
      if (!program || !program.name) {
        return;
      }
      document.title = program.name;
    });
  }
};
_PersonnalisationService.\u0275fac = function PersonnalisationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PersonnalisationService)(\u0275\u0275inject(StorageService));
};
_PersonnalisationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PersonnalisationService, factory: _PersonnalisationService.\u0275fac, providedIn: "root" });
var PersonnalisationService = _PersonnalisationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonnalisationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: StorageService }], null);
})();

export {
  PersonnalisationService
};
//# sourceMappingURL=chunk-MIGXUTE7.js.map
