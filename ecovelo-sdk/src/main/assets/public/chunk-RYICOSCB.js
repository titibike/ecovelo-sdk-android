import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-UANRONUE.js";

// src/app/services/external/recaptcha.service.ts
var _RecaptchaService = class _RecaptchaService {
  constructor() {
    this.RECAPTCHA_V3_SITE_KEY = environment.recaptchaV3SiteKey;
    this.scriptElement = null;
  }
  loadRecaptcha() {
    return new Promise((resolve) => {
      if (typeof window.grecaptcha === "undefined") {
        this.scriptElement = document.createElement("script");
        this.scriptElement.src = `https://www.google.com/recaptcha/api.js?render=${this.RECAPTCHA_V3_SITE_KEY}`;
        this.scriptElement.async = true;
        this.scriptElement.defer = true;
        document.head.appendChild(this.scriptElement);
        this.scriptElement.onload = () => {
          resolve();
        };
      } else {
        resolve();
      }
    });
  }
  executeRecaptcha(action) {
    return new Promise((resolve, reject) => {
      if (typeof window.grecaptcha === "undefined") {
        reject("reCAPTCHA is not loaded");
        return;
      }
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(this.RECAPTCHA_V3_SITE_KEY, { action }).then(resolve, reject);
      });
    });
  }
  unloadRecaptcha() {
    var _a;
    if (this.scriptElement) {
      document.head.removeChild(this.scriptElement);
      this.scriptElement = null;
    }
    const recaptchaElements = document.getElementsByClassName("grecaptcha-badge");
    while (recaptchaElements.length > 0) {
      const element = recaptchaElements[0];
      (_a = element.parentNode) == null ? void 0 : _a.removeChild(element);
    }
    delete window.grecaptcha;
  }
};
_RecaptchaService.\u0275fac = function RecaptchaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecaptchaService)();
};
_RecaptchaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecaptchaService, factory: _RecaptchaService.\u0275fac, providedIn: "root" });
var RecaptchaService = _RecaptchaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecaptchaService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  RecaptchaService
};
//# sourceMappingURL=chunk-RYICOSCB.js.map
