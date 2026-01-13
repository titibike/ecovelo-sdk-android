import {
  LanguageService
} from "./chunk-7GZOXTNY.js";
import {
  AccountService,
  FAQService
} from "./chunk-6J5UKKBN.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  BehaviorSubject,
  Injectable,
  effect,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";

// src/app/services/api-wrappers/support.service.ts
var _SupportService = class _SupportService {
  constructor(storage, faqService, languageService, accountService) {
    this.storage = storage;
    this.faqService = faqService;
    this.languageService = languageService;
    this.accountService = accountService;
    this.faqState = new BehaviorSubject({
      state: "loading"
    });
    this.language = "fr";
    this.storage.get("program").then((program) => {
      this.program = program;
    });
    effect(() => {
      this.language = this.languageService.currentLanguage();
      if (this.faqState.value.state !== "loading") {
        this.getFaq();
      }
    });
  }
  getFaq() {
    this.faqState.next({ state: "loading" });
    this.faqService.retrieveFaq({
      program: environment.program,
      language: this.language
    }).subscribe({
      next: (res) => {
        if (res.data) {
          this.faqState.next({ state: "success", faq: res.data });
        } else {
          this.faqState.next({ state: "no_data" });
        }
      },
      error: (err) => {
        this.faqState.next({ state: "error", error: err });
      }
    });
  }
  /**
   * Génère un lien mailto pour contacter le support avec les informations du cyclist si connecté
   * @param message Message à inclure dans le corps de l'email (optionnel)
   * @returns Le lien mailto complet
   */
  generateSupportMailtoLink(message = "") {
    var _a, _b, _c, _d;
    if (!((_c = (_b = (_a = this.program) == null ? void 0 : _a.config) == null ? void 0 : _b.hotline) == null ? void 0 : _c.email)) {
      return "#";
    }
    const email = this.program.config.hotline.email;
    const subject = "Demande SAV";
    let body = message;
    try {
      const cyclist = this.accountService.getCurrentCyclist();
      body += `%0D%0A%0D%0A-------------------------------------------%0D%0A MERCI DE NE PAS MODIFIER LES INFORMATIONS CI-DESSOUS %0D%0A${cyclist.id}%0D%0A${cyclist.name || ""}%0D%0A${cyclist.phone_number || ""}%0D%0A${((_d = this.program) == null ? void 0 : _d.id) || ""}`;
    } catch (error) {
      body += `%0D%0A%0D%0A-------------------------------------------%0D%0A MERCI DE NE PAS MODIFIER LES INFORMATIONS CI-DESSOUS %0D%0A Utilisateur non enregistr\xE9`;
    }
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }
};
_SupportService.\u0275fac = function SupportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SupportService)(\u0275\u0275inject(StorageService), \u0275\u0275inject(FAQService), \u0275\u0275inject(LanguageService), \u0275\u0275inject(AccountService));
};
_SupportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SupportService, factory: _SupportService.\u0275fac, providedIn: "root" });
var SupportService = _SupportService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: StorageService }, { type: FAQService }, { type: LanguageService }, { type: AccountService }], null);
})();

export {
  SupportService
};
//# sourceMappingURL=chunk-A7VVKYW2.js.map
