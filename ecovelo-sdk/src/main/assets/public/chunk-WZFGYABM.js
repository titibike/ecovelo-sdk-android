import {
  AccountService,
  RemisesService,
  TransactionsDeSoldeService
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
  Injectable,
  LoadingController,
  TranslateService,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/wallet.service.ts
var _WalletService = class _WalletService {
  constructor(transactionService, remiseService, loadingController, toastService, accountService, translate) {
    this.transactionService = transactionService;
    this.remiseService = remiseService;
    this.loadingController = loadingController;
    this.toastService = toastService;
    this.accountService = accountService;
    this.translate = translate;
    this.walletState = new BehaviorSubject({
      state: "loading"
    });
  }
  getTransactions() {
    return __async(this, null, function* () {
      this.walletState.next({ state: "loading" });
      this.transactionService.listBalanceTransaction({
        program: environment.program,
        liveMode: environment.production,
        limit: 100
      }).subscribe({
        next: (response) => __async(this, null, function* () {
          if (!(response == null ? void 0 : response.data) || response.data.length === 0) {
            this.walletState.next({
              state: "no_data"
            });
            return;
          }
          this.walletState.next({
            state: "success",
            transactions: response.data
          });
        }),
        error: (error) => __async(this, null, function* () {
          console.error("Error fetching transactions:", error);
          this.walletState.next({
            state: "error",
            error
          });
        })
      });
    });
  }
  applyCodePromo(code) {
    return __async(this, null, function* () {
      if (!code.trim()) {
        this.toastService.createWithJustMessage(this.translate.instant("promo.errors.empty_code"), ToastType.Warning);
        return;
      }
      const loading = yield this.loadingController.create({
        message: this.translate.instant("promo.loading.applying"),
        spinner: "circular"
      });
      yield loading.present();
      const cyclist = this.accountService.cyclistState();
      if (cyclist.state !== "unknown" && cyclist.state !== "error") {
        this.remiseService.createRemise({
          program: environment.program,
          createRemiseRequest: {
            cyclist: cyclist.cyclist.id,
            reduction: code
          }
        }).subscribe({
          next: () => __async(this, null, function* () {
            yield loading.dismiss();
            this.toastService.createWithJustMessage(this.translate.instant("promo.success.applied"), ToastType.Success);
            this.walletState.next({ state: "loading" });
          }),
          error: (error) => __async(this, null, function* () {
            console.error("Error applying promo code:", error);
            yield loading.dismiss();
            this.toastService.createWithJustMessage(this.translate.instant("promo.errors.invalid"), ToastType.Error);
          })
        });
      }
    });
  }
};
_WalletService.\u0275fac = function WalletService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WalletService)(\u0275\u0275inject(TransactionsDeSoldeService), \u0275\u0275inject(RemisesService), \u0275\u0275inject(LoadingController), \u0275\u0275inject(ToastService), \u0275\u0275inject(AccountService), \u0275\u0275inject(TranslateService));
};
_WalletService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WalletService, factory: _WalletService.\u0275fac, providedIn: "root" });
var WalletService = _WalletService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WalletService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: TransactionsDeSoldeService }, { type: RemisesService }, { type: LoadingController }, { type: ToastService }, { type: AccountService }, { type: TranslateService }], null);
})();

export {
  WalletService
};
//# sourceMappingURL=chunk-WZFGYABM.js.map
