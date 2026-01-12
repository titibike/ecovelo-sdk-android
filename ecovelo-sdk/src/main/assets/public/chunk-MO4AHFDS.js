import {
  Stripe,
  injectStripe
} from "./chunk-FFEUH5Q3.js";
import {
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
  LoadingController,
  catchError,
  from,
  map,
  setClassMetadata,
  switchMap,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/external/stripe.service.ts
var _StripeService = class _StripeService {
  constructor(cardService, loadingCtrl, errorHandler) {
    this.cardService = cardService;
    this.loadingCtrl = loadingCtrl;
    this.errorHandler = errorHandler;
    this.stripe = injectStripe(environment.stripePublicKey);
  }
  getStripe() {
    return this.stripe;
  }
  initStripeElements(programId) {
    return this.cardService.createSetupIntent({
      program: programId,
      liveMode: environment.production
    }).pipe(map((res) => {
      if (res.client_secret) {
        return {
          locale: "fr",
          clientSecret: res.client_secret,
          appearance: {
            theme: "stripe"
          }
        };
      } else
        throw new Error("Client secret required");
    }), catchError((error) => {
      this.errorHandler.handleError(error);
      return throwError(() => error);
    }));
  }
  confirmSetup(elements, clientSecret, holderName) {
    return from(elements.submit()).pipe(
      // Chain with Stripe confirmation
      switchMap(() => this.stripe.confirmSetup({
        elements,
        clientSecret,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: holderName
            }
          },
          return_url: location.href
        }
      })),
      // Handle successful result
      tap((result) => {
        var _a;
        if (result.error) {
          throw result.error;
        }
        if (((_a = result.setupIntent) == null ? void 0 : _a.status) === "succeeded") {
          window.location.href = location.href;
        }
      }),
      // Handle errors
      catchError((error) => {
        this.errorHandler.handleError(error);
        return throwError(() => error);
      })
    );
  }
  retrieveSetupIntent(clientSecret) {
    return this.stripe.retrieveSetupIntent(clientSecret).pipe(map((result) => result != null ? result : null), catchError((error) => {
      this.errorHandler.handleError(error);
      return throwError(() => error);
    }));
  }
  /**
   * Setup and process Apple Pay payment
   */
  setupApplePay(clientSecret, programName, merchantId) {
    return __async(this, null, function* () {
      try {
        if (!clientSecret) {
          this.errorHandler.handleError(new Error("Client secret required"));
          throw new Error("Client secret required");
        }
        yield Stripe.createApplePay({
          paymentIntentClientSecret: clientSecret,
          paymentSummaryItems: [
            {
              label: programName || "Paiement",
              amount: 0
            }
          ],
          merchantIdentifier: merchantId,
          countryCode: "FR",
          currency: "EUR"
        });
        const result = yield Stripe.presentApplePay();
        if (result.paymentResult === "applePayCompleted") {
          return "completed";
        } else if (result.paymentResult === "applePayFailed") {
          this.errorHandler.handleError(new Error("Apple pay payment failed"));
          return "failed";
        } else {
          return "cancelled";
        }
      } catch (error) {
        this.errorHandler.handleError(error);
        throw error;
      }
    });
  }
  /**
   * Setup and process Google Pay payment
   */
  setupGooglePay(clientSecret, programName) {
    return __async(this, null, function* () {
      try {
        if (!clientSecret) {
          this.errorHandler.handleError(new Error("Client secret required"));
          throw new Error("Client secret required");
        }
        yield Stripe.createPaymentSheet({
          setupIntentClientSecret: clientSecret,
          enableGooglePay: true,
          merchantDisplayName: programName || "Ecovelo",
          countryCode: "FR",
          currencyCode: "EUR"
        });
        const result = yield Stripe.presentPaymentSheet();
        if (result.paymentResult === "paymentSheetCompleted") {
          return "completed";
        } else if (result.paymentResult === "paymentSheetFailed") {
          this.errorHandler.handleError(new Error("Google pay payment failed"));
          return "failed";
        } else {
          return "cancelled";
        }
      } catch (error) {
        this.errorHandler.handleError(error);
        throw error;
      }
    });
  }
  /**
   * Check if Apple Pay is available on this device
   */
  isApplePayAvailable() {
    return __async(this, null, function* () {
      try {
        yield Stripe.isApplePayAvailable();
        return true;
      } catch {
        return false;
      }
    });
  }
  /**
   * Check if Google Pay is available on this device
   */
  isGooglePayAvailable() {
    return __async(this, null, function* () {
      try {
        yield Stripe.isGooglePayAvailable();
        return true;
      } catch {
        return false;
      }
    });
  }
};
_StripeService.\u0275fac = function StripeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeService)(\u0275\u0275inject(CardsService), \u0275\u0275inject(LoadingController), \u0275\u0275inject(ErrorHandlerService));
};
_StripeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StripeService, factory: _StripeService.\u0275fac, providedIn: "root" });
var StripeService = _StripeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: CardsService }, { type: LoadingController }, { type: ErrorHandlerService }], null);
})();

export {
  StripeService
};
//# sourceMappingURL=chunk-MO4AHFDS.js.map
