import {
  AuthService
} from "./chunk-7UN2TOGU.js";
import {
  AccountService,
  FacturesService
} from "./chunk-5KPTYQ6O.js";
import {
  environment
} from "./chunk-GFMHZGOY.js";
import {
  ErrorHandlerService
} from "./chunk-UXTOZZ3E.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  effect,
  forkJoin,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/facture.service.ts
var _FactureService = class _FactureService {
  constructor(facturesService, authService, accountService, errorHandler) {
    this.facturesService = facturesService;
    this.authService = authService;
    this.accountService = accountService;
    this.errorHandler = errorHandler;
    this.factureState = new BehaviorSubject({
      state: "loading"
    });
    effect(() => {
      if (this.authService.authState().state === "SignedIn" && this.factureState.value.state == "loading") {
        this.getFactures();
      } else if (this.authService.authState().state === "SignedOut") {
        this.resetState();
      }
    });
  }
  getFactures() {
    return __async(this, null, function* () {
      forkJoin({
        upcoming: this.facturesService.upcomingFactures({
          program: environment.program
        }).pipe(catchError((error) => {
          if (error.status === 404) {
            return of(void 0);
          }
          this.errorHandler.handleError(error);
          throw error;
        })),
        factures: this.facturesService.listFacture({
          program: environment.program,
          limit: 30
        })
      }).subscribe(({ upcoming, factures }) => {
        if (factures.data.length > 0) {
          const unpaidInvoices = factures.data.filter((invoice) => invoice.status === "uncollectible" || invoice.status === "open");
          if (unpaidInvoices.length > 0) {
            this.accountService.addBlockedReason("Unpaid invoices");
          } else if (this.accountService.hasBlockedReason("Unpaid invoices")) {
            this.accountService.removeBlockedReason("Unpaid invoices");
          }
          this.factureState.next({
            state: "factures",
            invoices: factures.data.filter((invoice) => invoice.status === "paid" || invoice.status === "void" || invoice.status === "draft"),
            dues: unpaidInvoices,
            upcoming,
            hasMore: factures.has_more
          });
        } else if (upcoming && factures.data.length === 0) {
          this.factureState.next({ state: "upcoming", upcoming });
        } else {
          this.factureState.next({ state: "noInvoices" });
        }
      });
    });
  }
  resetState() {
    this.factureState.next({ state: "loading" });
  }
};
_FactureService.\u0275fac = function FactureService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FactureService)(\u0275\u0275inject(FacturesService), \u0275\u0275inject(AuthService), \u0275\u0275inject(AccountService), \u0275\u0275inject(ErrorHandlerService));
};
_FactureService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FactureService, factory: _FactureService.\u0275fac, providedIn: "root" });
var FactureService = _FactureService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FactureService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: FacturesService }, { type: AuthService }, { type: AccountService }, { type: ErrorHandlerService }], null);
})();

export {
  FactureService
};
//# sourceMappingURL=chunk-LCXFBNNW.js.map
