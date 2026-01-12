import {
  AlertController,
  LoadingController
} from "./chunk-ULLB7OBK.js";
import {
  AuthService,
  ForfaitsWrapperService
} from "./chunk-7UN2TOGU.js";
import {
  AbonnementsService,
  AccountService,
  SubscriptionProcessService
} from "./chunk-5KPTYQ6O.js";
import {
  environment
} from "./chunk-GFMHZGOY.js";
import {
  ErrorHandlerService,
  ToastService,
  ToastType
} from "./chunk-UXTOZZ3E.js";
import {
  Injectable,
  Router,
  TranslateService,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/abonnement.service.ts
var _AbonnementWrapperService = class _AbonnementWrapperService {
  constructor(abonnementsService, alertController, loadingCtrl, translate, forfaitsService, toastService, SubscriptionProcessService2, router, authService, accountService, errorHandler) {
    this.abonnementsService = abonnementsService;
    this.alertController = alertController;
    this.loadingCtrl = loadingCtrl;
    this.translate = translate;
    this.forfaitsService = forfaitsService;
    this.toastService = toastService;
    this.SubscriptionProcessService = SubscriptionProcessService2;
    this.router = router;
    this.authService = authService;
    this.accountService = accountService;
    this.errorHandler = errorHandler;
    this.listAbonnementsState = signal({
      state: "loading"
    });
    this.currentAbonnementState = signal({
      state: "unknown"
    });
    this.authState = { state: "SignedOut" };
    this.forfaitsService.getDefaultForfait().then((forfait) => {
      this.defaultForfait = forfait;
    });
    effect(() => {
      this.authState = this.authService.authState();
      if (this.authState.state === "SignedIn" && this.listAbonnementsState().state === "loading") {
        this.getAbonnements();
      } else if (this.authState.state === "SignedOut") {
        this.resetState();
      }
    });
  }
  getAbonnements() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.abonnementsService.listAbonnement({
          program: environment.program,
          limit: 100,
          expand: ["forfait.plan"]
        }).subscribe({
          next: (res) => {
            this.checkAbonnements(res.data);
            resolve(res);
          },
          error: (error) => {
            this.errorHandler.handleError(error);
            this.listAbonnementsState.set({ state: "error", error });
            reject(error);
          }
        });
      });
    });
  }
  createAbonnement(params) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.abonnementsService.createAbonnement({
          program: environment.program,
          createAbonnementRequest: {
            forfait: params.forfaitID,
            supporting_documents: params.supporting_documents,
            reduction: params.reduction
          }
        }).subscribe({
          next: (abonnement) => __async(this, null, function* () {
            yield this.getAbonnements();
            yield this.SubscriptionProcessService.clearProcess();
            yield this.router.navigate(["/abo-congrats"]);
            resolve(abonnement);
          }),
          error: (error) => {
            this.errorHandler.handleError(error);
            reject(error);
          }
        });
      });
    });
  }
  checkAbonnements(abonnements) {
    return __async(this, null, function* () {
      const defaultForfait = yield this.forfaitsService.getDefaultForfait();
      if (!abonnements || abonnements.length === 0) {
        this.listAbonnementsState.set({ state: "no_data" });
        defaultForfait ? this.currentAbonnementState.set({
          state: "default",
          forfait: defaultForfait
        }) : this.currentAbonnementState.set({ state: "unknown" });
        return;
      }
      this.listAbonnementsState.set({ state: "success", abonnements });
      const currentAbonnement = abonnements.find((ab) => ab.status === "active" || ab.status === "waiting_validation" || ab.status === "past_due" || ab.status === "incomplete" || ab.status === "unpaid" || ab.status === "deletion_requested");
      if (!currentAbonnement) {
        this.currentAbonnementState.set({
          state: "default",
          forfait: defaultForfait
        });
        return;
      }
      if (currentAbonnement.can_rent === false) {
        this.accountService.addBlockedReason("Subscription does not allow renting");
      } else {
        if (this.accountService.hasBlockedReason("Subscription does not allow renting")) {
          this.accountService.removeBlockedReason("Subscription does not allow renting");
        }
      }
      switch (currentAbonnement == null ? void 0 : currentAbonnement.status) {
        case "active":
          this.currentAbonnementState.set({
            state: "active",
            abonnement: currentAbonnement
          });
          break;
        case "waiting_validation":
          this.currentAbonnementState.set({
            state: "waiting_validation",
            abonnement: currentAbonnement
          });
          break;
        case "incomplete":
          this.currentAbonnementState.set({
            state: "incomplete",
            abonnement: currentAbonnement
          });
          break;
        case "unpaid":
          this.currentAbonnementState.set({
            state: "unpaid",
            abonnement: currentAbonnement
          });
          break;
        case "past_due":
          this.currentAbonnementState.set({
            state: "past_due",
            abonnement: currentAbonnement
          });
          break;
        case "deletion_requested":
          this.currentAbonnementState.set({
            state: "deletion_requested",
            abonnement: currentAbonnement
          });
          break;
      }
    });
  }
  requestDeletion() {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: this.translate.instant("subscription.deletion.confirm.title"),
        message: this.translate.instant("subscription.deletion.confirm.message"),
        buttons: [
          {
            text: this.translate.instant("subscription.deletion.confirm.cancel"),
            role: "cancel"
          },
          {
            text: this.translate.instant("subscription.deletion.confirm.confirm"),
            handler: () => __async(this, null, function* () {
              yield this.deleteAbonnement();
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  deleteAbonnement() {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translate.instant("subscription.deletion.loading")
      });
      yield loading.present();
      const currentAbonnement = this.currentAbonnementState();
      if (currentAbonnement.state === "unknown" || currentAbonnement.state === "default") {
        yield this.toastService.createWithJustMessage(this.translate.instant("subscription.deletion.no_active"), ToastType.Error);
        return;
      } else if (currentAbonnement.state === "deletion_requested") {
        yield this.toastService.createWithJustMessage(this.translate.instant("subscription.deletion.already_requested"), ToastType.Error);
        return;
      } else {
        this.abonnementsService.deleteAbonnement({
          program: environment.program,
          id: currentAbonnement.abonnement.id
        }).subscribe({
          next: () => __async(this, null, function* () {
            this.toastService.createWithJustMessage(this.translate.instant("subscription.deletion.success"), ToastType.Success);
            this.accountService.removeBlockedReason("Subscription does not allow renting");
            this.getAbonnements();
            yield loading.dismiss();
          }),
          error: (error) => __async(this, null, function* () {
            this.errorHandler.handleError(error);
            yield loading.dismiss();
          })
        });
      }
    });
  }
  getDaysUntilExpiration(abonnement) {
    if (!abonnement.cancel_at)
      return null;
    const now = Date.now();
    const expirationDate = abonnement.cancel_at * 1e3;
    return Math.floor((expirationDate - now) / (1e3 * 60 * 60 * 24));
  }
  shouldShowExpirationWarning(abonnement) {
    var _a, _b;
    if (!((_b = (_a = abonnement.forfait) == null ? void 0 : _a.plan) == null ? void 0 : _b.interval))
      return false;
    const daysUntilExpiration = this.getDaysUntilExpiration(abonnement);
    if (daysUntilExpiration === null)
      return false;
    switch (abonnement.forfait.plan.interval) {
      case "week":
        return daysUntilExpiration <= 2;
      case "month":
        return daysUntilExpiration <= 5;
      case "year":
        return daysUntilExpiration <= 14;
      default:
        return false;
    }
  }
  resetState() {
    this.listAbonnementsState.set({ state: "loading" });
    this.currentAbonnementState.set({ state: "unknown" });
  }
};
_AbonnementWrapperService.\u0275fac = function AbonnementWrapperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbonnementWrapperService)(\u0275\u0275inject(AbonnementsService), \u0275\u0275inject(AlertController), \u0275\u0275inject(LoadingController), \u0275\u0275inject(TranslateService), \u0275\u0275inject(ForfaitsWrapperService), \u0275\u0275inject(ToastService), \u0275\u0275inject(SubscriptionProcessService), \u0275\u0275inject(Router), \u0275\u0275inject(AuthService), \u0275\u0275inject(AccountService), \u0275\u0275inject(ErrorHandlerService));
};
_AbonnementWrapperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AbonnementWrapperService, factory: _AbonnementWrapperService.\u0275fac, providedIn: "root" });
var AbonnementWrapperService = _AbonnementWrapperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbonnementWrapperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AbonnementsService }, { type: AlertController }, { type: LoadingController }, { type: TranslateService }, { type: ForfaitsWrapperService }, { type: ToastService }, { type: SubscriptionProcessService }, { type: Router }, { type: AuthService }, { type: AccountService }, { type: ErrorHandlerService }], null);
})();

export {
  AbonnementWrapperService
};
//# sourceMappingURL=chunk-JVXQQLXI.js.map
