import {
  LoadingController
} from "./chunk-ULLB7OBK.js";
import {
  AuthService
} from "./chunk-7UN2TOGU.js";
import {
  AccountService,
  CardsService
} from "./chunk-5KPTYQ6O.js";
import {
  environment
} from "./chunk-GFMHZGOY.js";
import {
  ErrorHandlerService
} from "./chunk-UXTOZZ3E.js";
import {
  Injectable,
  TranslateService,
  computed,
  effect,
  firstValueFrom,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/payment-method.service.ts
var _PaymentMethodsService = class _PaymentMethodsService {
  constructor(cardsService, loadingCtrl, translateService, accountService, authService, errorHandler) {
    this.cardsService = cardsService;
    this.loadingCtrl = loadingCtrl;
    this.translateService = translateService;
    this.accountService = accountService;
    this.authService = authService;
    this.errorHandler = errorHandler;
    this.paymentMethodsState = signal({
      state: "loading"
    });
    this.defaultPaymentMethod = computed(() => {
      const state = this.paymentMethodsState();
      if (state.state !== "success") {
        return void 0;
      }
      const cyclistState = this.accountService.cyclistState();
      if (cyclistState.state === "unknown" || cyclistState.state === "error") {
        return void 0;
      }
      return state.paymentMethods.find((pm) => {
        var _a, _b, _c, _d, _e;
        return pm.id === ((_e = (_d = (_c = (_b = (_a = cyclistState.cyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]) == null ? void 0 : _c.customer) == null ? void 0 : _d.invoice_settings) == null ? void 0 : _e.default_payment_method);
      });
    });
    this.cardState = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const card = this.defaultPaymentMethod();
      if (!card) {
        return {
          state: "no_default",
          formattedNumber: "",
          expiryDate: ""
        };
      }
      const today = /* @__PURE__ */ new Date();
      const cardExpDate = new Date(((_a = card.card) == null ? void 0 : _a.exp_year) || 0, ((_b = card.card) == null ? void 0 : _b.exp_month) || 1, 0, 23, 59, 59);
      const formattedMonth = (((_c = card.card) == null ? void 0 : _c.exp_month) || 0).toString().padStart(2, "0");
      const formattedExpiry = `${formattedMonth}/${(_e = (_d = card.card) == null ? void 0 : _d.exp_year) == null ? void 0 : _e.toString().slice(-2)}`;
      const formattedNumber = `CB **** ${(_f = card.card) == null ? void 0 : _f.last4}`;
      if (cardExpDate < today) {
        return {
          state: "expired",
          formattedNumber,
          expiryDate: formattedExpiry
        };
      }
      const oneMonthFromNow = /* @__PURE__ */ new Date();
      oneMonthFromNow.setMonth(today.getMonth() + 1);
      if (cardExpDate <= oneMonthFromNow) {
        return {
          state: "expire_soon",
          formattedNumber,
          expiryDate: formattedExpiry
        };
      }
      return {
        state: "valid",
        formattedNumber,
        expiryDate: formattedExpiry
      };
    });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
      if (this.cyclistState.state !== "unknown" && this.paymentMethodsState().state === "loading") {
        this.getPaymentMethods();
      } else if (this.cyclistState.state === "unknown") {
        this.resetState();
      }
    });
    effect(() => {
      if (this.authService.authState().state === "SignedOut") {
        this.resetState();
      }
    });
  }
  getPaymentMethods() {
    return __async(this, null, function* () {
      if (this.cyclistState.state !== "unknown" && this.cyclistState.state !== "error") {
        const res = yield firstValueFrom(this.cardsService.listCards({
          cyclist: this.cyclistState.cyclist.id,
          program: environment.program
        }));
        if (res.data && res.data.length > 0) {
          this.paymentMethodsState.set({
            state: "success",
            paymentMethods: res.data
          });
          const hasValidPaymentMethod = res.data.some((card) => {
            const cardState = this.getCardState(card);
            return cardState.state === "valid";
          });
          if (!hasValidPaymentMethod) {
            this.accountService.addBlockedReason("No valid payment method available");
          } else {
            this.accountService.removeBlockedReason("No valid payment method available");
          }
        } else {
          this.paymentMethodsState.set({ state: "no_data" });
          this.accountService.addBlockedReason("No valid payment method available");
        }
      }
    });
  }
  setDefaultCard(cardId) {
    return __async(this, null, function* () {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      try {
        yield firstValueFrom(this.cardsService.updateCard({
          program: environment.program,
          cyclist: this.accountService.getCurrentCyclist().id,
          id: cardId,
          body: { default: true }
        }));
        const currentCyclist = this.accountService.getCurrentCyclist();
        this.accountService.updateCyclistData(__spreadProps(__spreadValues({}, currentCyclist), {
          registrations: __spreadProps(__spreadValues({}, currentCyclist.registrations), {
            data: [
              __spreadProps(__spreadValues({}, (_b = (_a = currentCyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]), {
                customer: __spreadProps(__spreadValues({}, (_e = (_d = (_c = currentCyclist.registrations) == null ? void 0 : _c.data) == null ? void 0 : _d[0]) == null ? void 0 : _e.customer), {
                  invoice_settings: __spreadProps(__spreadValues({}, (_i = (_h = (_g = (_f = currentCyclist.registrations) == null ? void 0 : _f.data) == null ? void 0 : _g[0]) == null ? void 0 : _h.customer) == null ? void 0 : _i.invoice_settings), {
                    default_payment_method: cardId
                  })
                })
              })
            ]
          })
        }));
        yield this.getPaymentMethods();
      } catch (error) {
        this.errorHandler.handleError(error);
        throw error;
      }
    });
  }
  deleteCard(cardId) {
    return __async(this, null, function* () {
      if (this.cyclistState.state !== "unknown" && this.cyclistState.state !== "error") {
        const loading = yield this.loadingCtrl.create({
          message: this.translateService.instant("loading.deleting_card")
        });
        yield loading.present();
        try {
          yield firstValueFrom(this.cardsService.deleteCard({
            program: environment.program,
            cyclist: this.cyclistState.cyclist.id,
            id: cardId
          }));
          yield this.getPaymentMethods();
        } catch (error) {
          this.errorHandler.handleError(error);
          throw error;
        } finally {
          yield loading.dismiss();
        }
      }
    });
  }
  // Make getCardState private since we now use the computed signal
  getCardState(card) {
    var _a, _b, _c, _d, _e, _f;
    if (!card) {
      return {
        state: "unknown",
        formattedNumber: "",
        expiryDate: ""
      };
    }
    const today = /* @__PURE__ */ new Date();
    const cardExpDate = new Date(((_a = card.card) == null ? void 0 : _a.exp_year) || 0, ((_b = card.card) == null ? void 0 : _b.exp_month) || 1, 0, 23, 59, 59);
    const formattedMonth = (((_c = card.card) == null ? void 0 : _c.exp_month) || 0).toString().padStart(2, "0");
    const formattedExpiry = `${formattedMonth}/${(_e = (_d = card.card) == null ? void 0 : _d.exp_year) == null ? void 0 : _e.toString().slice(-2)}`;
    const formattedNumber = `CB **** ${(_f = card.card) == null ? void 0 : _f.last4}`;
    if (cardExpDate < today) {
      return {
        state: "expired",
        formattedNumber,
        expiryDate: formattedExpiry
      };
    }
    const oneMonthFromNow = /* @__PURE__ */ new Date();
    oneMonthFromNow.setMonth(today.getMonth() + 1);
    if (cardExpDate <= oneMonthFromNow) {
      return {
        state: "expire_soon",
        formattedNumber,
        expiryDate: formattedExpiry
      };
    }
    return {
      state: "valid",
      formattedNumber,
      expiryDate: formattedExpiry
    };
  }
  resetState() {
    this.paymentMethodsState.set({ state: "loading" });
  }
};
_PaymentMethodsService.\u0275fac = function PaymentMethodsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentMethodsService)(\u0275\u0275inject(CardsService), \u0275\u0275inject(LoadingController), \u0275\u0275inject(TranslateService), \u0275\u0275inject(AccountService), \u0275\u0275inject(AuthService), \u0275\u0275inject(ErrorHandlerService));
};
_PaymentMethodsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentMethodsService, factory: _PaymentMethodsService.\u0275fac, providedIn: "root" });
var PaymentMethodsService = _PaymentMethodsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentMethodsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: CardsService }, { type: LoadingController }, { type: TranslateService }, { type: AccountService }, { type: AuthService }, { type: ErrorHandlerService }], null);
})();

export {
  PaymentMethodsService
};
//# sourceMappingURL=chunk-5D7OUYQY.js.map
