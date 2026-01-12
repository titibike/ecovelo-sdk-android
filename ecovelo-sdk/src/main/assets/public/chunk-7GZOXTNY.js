import {
  Injectable,
  TranslateService,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";

// src/app/services/utils/language.service.ts
var _LanguageService = class _LanguageService {
  constructor(translateService) {
    this.translateService = translateService;
    this.currentLanguage = signal("fr");
  }
  setLanguage(lang) {
    this.translateService.use(lang);
    localStorage.setItem("preferredLanguage", lang);
    this.currentLanguage.set(lang);
  }
  getLanguage() {
    return localStorage.getItem("preferredLanguage") || "fr";
  }
  initializeLanguage() {
    const savedLang = this.getLanguage();
    this.setLanguage(savedLang);
  }
};
_LanguageService.\u0275fac = function LanguageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LanguageService)(\u0275\u0275inject(TranslateService));
};
_LanguageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
var LanguageService = _LanguageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: TranslateService }], null);
})();

export {
  LanguageService
};
//# sourceMappingURL=chunk-7GZOXTNY.js.map
