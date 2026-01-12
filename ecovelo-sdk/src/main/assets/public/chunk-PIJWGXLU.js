import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  AlertController,
  Injectable,
  Platform,
  TranslateService,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/internal/cookies.service.ts
var _CookiesService = class _CookiesService {
  constructor(platform, storage, alertController, translate) {
    this.platform = platform;
    this.storage = storage;
    this.alertController = alertController;
    this.translate = translate;
    this.cookiesState = signal({
      state: "idle"
    });
  }
  storePreferences(preferences) {
    return __async(this, null, function* () {
      const state = {
        state: "already_set",
        preferences
      };
      this.cookiesState.set(state);
      yield this.storage.set("cookiesSettings", state);
    });
  }
  getPreferences() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        this.storage.get("cookiesSettings").then((state) => __async(this, null, function* () {
          if (state && state.state === "already_set") {
            this.cookiesState.set(state);
          } else {
            this.cookiesState.set({ state: "not_already_set" });
          }
          resolve(state);
        })).catch((e) => {
          reject(e);
        });
      }));
    });
  }
  presentCookiesAlert() {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: this.translate.instant("cookies.alert.header"),
        message: this.translate.instant("cookies.alert.message"),
        buttons: [
          {
            text: this.translate.instant("cookies.alert.close"),
            role: "cancel"
          },
          {
            text: this.translate.instant("cookies.alert.accept"),
            handler: () => {
              const preferences = {
                necessary: true,
                analytics: true
              };
              this.storePreferences(preferences);
            }
          }
        ]
      });
      yield alert.present();
    });
  }
};
_CookiesService.\u0275fac = function CookiesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CookiesService)(\u0275\u0275inject(Platform), \u0275\u0275inject(StorageService), \u0275\u0275inject(AlertController), \u0275\u0275inject(TranslateService));
};
_CookiesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CookiesService, factory: _CookiesService.\u0275fac, providedIn: "root" });
var CookiesService = _CookiesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CookiesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Platform }, { type: StorageService }, { type: AlertController }, { type: TranslateService }], null);
})();

export {
  CookiesService
};
//# sourceMappingURL=chunk-PIJWGXLU.js.map
