import {
  LanguageService
} from "./chunk-7GZOXTNY.js";
import {
  require_showdown
} from "./chunk-7JCEDXGT.js";
import {
  LoadingController
} from "./chunk-ULLB7OBK.js";
import {
  AccountService,
  RegistrationsService,
  TermsService
} from "./chunk-6J5UKKBN.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  ToastService,
  ToastType
} from "./chunk-UXTOZZ3E.js";
import {
  BehaviorSubject,
  DomSanitizer,
  Injectable,
  TranslateService,
  effect,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/cgu.service.ts
var showdown = __toESM(require_showdown());
var _CguService = class _CguService {
  constructor(termsService, sanitizer, registrationsService, toastService, translateService, loadingCtrl, languageService, accountService) {
    this.termsService = termsService;
    this.sanitizer = sanitizer;
    this.registrationsService = registrationsService;
    this.toastService = toastService;
    this.translateService = translateService;
    this.loadingCtrl = loadingCtrl;
    this.languageService = languageService;
    this.accountService = accountService;
    this.cguLoadingState = new BehaviorSubject({
      state: "loading"
    });
    this.language = "fr";
    this.converter = new showdown.Converter();
    effect(() => {
      this.language = this.languageService.currentLanguage();
      this.getCgu();
    });
  }
  getCgu() {
    return __async(this, null, function* () {
      this.cguLoadingState.next({ state: "loading" });
      this.termsService.retrieveTerms({ program: environment.program, language: this.language }).subscribe({
        next: (response) => __async(this, null, function* () {
          if (response.text) {
            this.cguLoadingState.next({
              state: "success",
              cgu: response,
              terms: this.sanitizer.bypassSecurityTrustHtml(this.converter.makeHtml(response.text))
            });
          }
        }),
        error: (error) => {
          this.cguLoadingState.next({ state: "error", error });
        }
      });
    });
  }
  validateTerms() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        this.registrationsService.updateRegistration({
          program: environment.program,
          body: {
            terms_validated: true
          }
        }).subscribe({
          next: () => __async(this, null, function* () {
            var _a, _b;
            const currentCyclist = this.accountService.getCurrentCyclist();
            this.accountService.updateCyclistData(__spreadProps(__spreadValues({}, currentCyclist), {
              registrations: __spreadProps(__spreadValues({}, currentCyclist.registrations), {
                data: [
                  __spreadProps(__spreadValues({}, (_b = (_a = currentCyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]), {
                    terms_validated: true,
                    terms_validated_at: Date.now()
                  })
                ]
              })
            }));
            resolve();
          }),
          error: (error) => {
            this.toastService.createWithJustMessage(error.error.message, ToastType.Error);
            reject(error);
          }
        });
      }));
    });
  }
};
_CguService.\u0275fac = function CguService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CguService)(\u0275\u0275inject(TermsService), \u0275\u0275inject(DomSanitizer), \u0275\u0275inject(RegistrationsService), \u0275\u0275inject(ToastService), \u0275\u0275inject(TranslateService), \u0275\u0275inject(LoadingController), \u0275\u0275inject(LanguageService), \u0275\u0275inject(AccountService));
};
_CguService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CguService, factory: _CguService.\u0275fac, providedIn: "root" });
var CguService = _CguService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CguService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: TermsService }, { type: DomSanitizer }, { type: RegistrationsService }, { type: ToastService }, { type: TranslateService }, { type: LoadingController }, { type: LanguageService }, { type: AccountService }], null);
})();

export {
  CguService
};
//# sourceMappingURL=chunk-7KL7UR6Z.js.map
