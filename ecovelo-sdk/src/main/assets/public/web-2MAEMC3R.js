import {
  ApplePayEventsEnum,
  GooglePayEventsEnum,
  PaymentFlowEventsEnum,
  PaymentSheetEventsEnum
} from "./chunk-EYZBHAOK.js";
import {
  WebPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor-community/stripe/dist/esm/shared/platform.js
var getPlatforms = (win) => setupPlatforms(win);
var isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === "string") {
    platform = winOrPlatform;
    winOrPlatform = void 0;
  }
  return getPlatforms(winOrPlatform).includes(platform);
};
var setupPlatforms = (win = window) => {
  if (typeof win === "undefined") {
    return [];
  }
  win.Ionic = win.Ionic || {};
  let platforms = win.Ionic.platforms;
  if (platforms == null) {
    platforms = win.Ionic.platforms = detectPlatforms(win);
    platforms.forEach((p) => win.document.documentElement.classList.add(`plt-${p}`));
  }
  return platforms;
};
var detectPlatforms = (win) => Object.keys(PLATFORMS_MAP).filter((p) => PLATFORMS_MAP[p](win));
var isMobileWeb = (win) => isMobile(win) && !isHybrid(win);
var isIpad = (win) => {
  if (testUserAgent(win, /iPad/i)) {
    return true;
  }
  if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
    return true;
  }
  return false;
};
var isIphone = (win) => testUserAgent(win, /iPhone/i);
var isIOS = (win) => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
var isAndroid = (win) => testUserAgent(win, /android|sink/i);
var isAndroidTablet = (win) => {
  return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
var isPhablet = (win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
};
var isTablet = (win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return isIpad(win) || isAndroidTablet(win) || smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
};
var isMobile = (win) => matchMedia(win, "(any-pointer:coarse)");
var isDesktop = (win) => !isMobile(win);
var isHybrid = (win) => isCordova(win) || isCapacitorNative(win);
var isCordova = (win) => !!(win["cordova"] || win["phonegap"] || win["PhoneGap"]);
var isCapacitorNative = (win) => {
  const capacitor = win["Capacitor"];
  return !!(capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNative);
};
var isElectron = (win) => testUserAgent(win, /electron/i);
var isPWA = (win) => !!(win.matchMedia("(display-mode: standalone)").matches || win.navigator.standalone);
var testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
var matchMedia = (win, query) => win.matchMedia(query).matches;
var PLATFORMS_MAP = {
  "ipad": isIpad,
  "iphone": isIphone,
  "ios": isIOS,
  "android": isAndroid,
  "phablet": isPhablet,
  "tablet": isTablet,
  "cordova": isCordova,
  "capacitor": isCapacitorNative,
  "electron": isElectron,
  "pwa": isPWA,
  "mobile": isMobile,
  "mobileweb": isMobileWeb,
  "desktop": isDesktop,
  "hybrid": isHybrid
};

// node_modules/@capacitor-community/stripe/dist/esm/web.js
var StripeWeb = class extends WebPlugin {
  initialize(options) {
    return __async(this, null, function* () {
      if (typeof options.publishableKey !== "string" || options.publishableKey.trim().length === 0) {
        throw new Error("you must provide a valid key");
      }
      this.publishableKey = options.publishableKey;
      if (options.stripeAccount) {
        this.stripeAccount = options.stripeAccount;
      }
    });
  }
  createPaymentSheet(options) {
    return __async(this, null, function* () {
      var _a;
      if (!this.publishableKey) {
        this.notifyListeners(PaymentSheetEventsEnum.FailedToLoad, null);
        return;
      }
      this.paymentSheet = document.createElement("stripe-payment-sheet");
      (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.appendChild(this.paymentSheet);
      yield customElements.whenDefined("stripe-payment-sheet");
      this.paymentSheet.publishableKey = this.publishableKey;
      if (this.stripeAccount) {
        this.paymentSheet.stripeAccount = this.stripeAccount;
      }
      this.paymentSheet.applicationName = "@capacitor-community/stripe";
      this.paymentSheet.intentClientSecret = options.paymentIntentClientSecret;
      this.paymentSheet.intentType = "payment";
      if (options.withZipCode !== void 0) {
        this.paymentSheet.zip = options.withZipCode;
      }
      this.notifyListeners(PaymentSheetEventsEnum.Loaded, null);
    });
  }
  presentPaymentSheet() {
    return __async(this, null, function* () {
      if (!this.paymentSheet) {
        throw new Error();
      }
      const props = yield this.paymentSheet.present();
      if (props === void 0) {
        this.notifyListeners(PaymentSheetEventsEnum.Canceled, null);
        return {
          paymentResult: PaymentSheetEventsEnum.Canceled
        };
      }
      const {
        detail: {
          stripe,
          cardNumberElement
        }
      } = props;
      const result = yield stripe.createPaymentMethod({
        type: "card",
        card: cardNumberElement
      });
      this.paymentSheet.updateProgress("success");
      this.paymentSheet.remove();
      if (result.error !== void 0) {
        this.notifyListeners(PaymentSheetEventsEnum.Failed, null);
        return {
          paymentResult: PaymentSheetEventsEnum.Failed
        };
      }
      this.notifyListeners(PaymentSheetEventsEnum.Completed, null);
      return {
        paymentResult: PaymentSheetEventsEnum.Completed
      };
    });
  }
  createPaymentFlow(options) {
    return __async(this, null, function* () {
      var _a;
      if (!this.publishableKey) {
        this.notifyListeners(PaymentFlowEventsEnum.FailedToLoad, null);
        return;
      }
      this.paymentSheet = document.createElement("stripe-payment-sheet");
      (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.appendChild(this.paymentSheet);
      yield customElements.whenDefined("stripe-payment-sheet");
      this.paymentSheet.publishableKey = this.publishableKey;
      if (this.stripeAccount) {
        this.paymentSheet.stripeAccount = this.stripeAccount;
      }
      this.paymentSheet.applicationName = "@capacitor-community/stripe";
      if (options.hasOwnProperty("paymentIntentClientSecret")) {
        this.paymentSheet.intentType = "payment";
        this.paymentSheet.intentClientSecret = options.paymentIntentClientSecret;
      } else {
        this.paymentSheet.intentType = "setup";
        this.paymentSheet.intentClientSecret = options.setupIntentClientSecret;
      }
      if (options.withZipCode !== void 0) {
        this.paymentSheet.zip = options.withZipCode;
      }
      if (isPlatform(window, "ios")) {
        this.paymentSheet.buttonLabel = "Add card";
        this.paymentSheet.sheetTitle = "Add a card";
      } else {
        this.paymentSheet.buttonLabel = "Add";
      }
      this.notifyListeners(PaymentFlowEventsEnum.Loaded, null);
    });
  }
  presentPaymentFlow() {
    return __async(this, null, function* () {
      if (!this.paymentSheet) {
        throw new Error();
      }
      this.notifyListeners(PaymentFlowEventsEnum.Opened, null);
      const props = yield this.paymentSheet.present().catch(() => void 0);
      if (props === void 0) {
        this.notifyListeners(PaymentFlowEventsEnum.Canceled, null);
        throw new Error();
      }
      const {
        detail: {
          stripe,
          cardNumberElement
        }
      } = props;
      const {
        token
      } = yield stripe.createToken(cardNumberElement);
      if (token === void 0 || token.card === void 0) {
        throw new Error();
      }
      this.flowStripe = stripe;
      this.flowCardNumberElement = cardNumberElement;
      this.notifyListeners(PaymentFlowEventsEnum.Created, {
        cardNumber: token.card.last4
      });
      return {
        cardNumber: token.card.last4
      };
    });
  }
  confirmPaymentFlow() {
    return __async(this, null, function* () {
      if (!this.paymentSheet || !this.flowStripe || !this.flowCardNumberElement) {
        throw new Error();
      }
      const result = yield this.flowStripe.createPaymentMethod({
        type: "card",
        card: this.flowCardNumberElement
      });
      if (result.error !== void 0) {
        this.notifyListeners(PaymentFlowEventsEnum.Failed, null);
      }
      this.paymentSheet.updateProgress("success");
      this.paymentSheet.remove();
      this.notifyListeners(PaymentFlowEventsEnum.Completed, null);
      return {
        paymentResult: PaymentFlowEventsEnum.Completed
      };
    });
  }
  isApplePayAvailable() {
    return this.isAvailable("applePay");
  }
  createApplePay(createApplePayOption) {
    return __async(this, null, function* () {
      if (!this.publishableKey) {
        this.notifyListeners(ApplePayEventsEnum.FailedToLoad, null);
        return;
      }
      this.requestApplePay = yield this.createPaymentRequestButton();
      this.requestApplePayOptions = createApplePayOption;
      this.notifyListeners(ApplePayEventsEnum.Loaded, null);
    });
  }
  presentApplePay() {
    return this.presentPaymentRequestButton("applePay", this.requestApplePay, this.requestApplePayOptions, ApplePayEventsEnum);
  }
  isGooglePayAvailable() {
    return this.isAvailable("googlePay");
  }
  createGooglePay(createGooglePayOption) {
    return __async(this, null, function* () {
      if (!this.publishableKey) {
        this.notifyListeners(GooglePayEventsEnum.FailedToLoad, null);
        return;
      }
      this.requestGooglePay = yield this.createPaymentRequestButton();
      this.requestGooglePayOptions = createGooglePayOption;
      this.notifyListeners(GooglePayEventsEnum.Loaded, null);
    });
  }
  presentGooglePay() {
    return this.presentPaymentRequestButton("googlePay", this.requestGooglePay, this.requestGooglePayOptions, GooglePayEventsEnum);
  }
  isAvailable(type) {
    return __async(this, null, function* () {
      var _a;
      const requestButton = document.createElement("stripe-payment-request-button");
      requestButton.id = `isAvailable-${type}`;
      (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.appendChild(requestButton);
      yield customElements.whenDefined("stripe-payment-request-button");
      if (this.publishableKey) {
        requestButton.publishableKey = this.publishableKey;
      }
      if (this.stripeAccount) {
        requestButton.stripeAccount = this.stripeAccount;
      }
      requestButton.applicationName = "@capacitor-community/stripe";
      return yield requestButton.isAvailable(type).finally(() => requestButton.remove());
    });
  }
  createPaymentRequestButton() {
    return __async(this, null, function* () {
      var _a;
      const requestButton = document.createElement("stripe-payment-request-button");
      (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.appendChild(requestButton);
      yield customElements.whenDefined("stripe-payment-request-button");
      if (this.publishableKey) {
        requestButton.publishableKey = this.publishableKey;
      }
      if (this.stripeAccount) {
        requestButton.stripeAccount = this.stripeAccount;
      }
      requestButton.applicationName = "@capacitor-community/stripe";
      return requestButton;
    });
  }
  presentPaymentRequestButton(type, requestButton, requestButtonOptions, EventsEnum) {
    return __async(this, null, function* () {
      return new Promise((resolve) => __async(this, null, function* () {
        if (requestButton === void 0 || requestButtonOptions === void 0 || this.publishableKey === void 0) {
          this.notifyListeners(EventsEnum.Failed, null);
          return resolve({
            paymentResult: EventsEnum.Failed
          });
        }
        yield requestButton.setPaymentRequestOption({
          country: requestButtonOptions.countryCode.toUpperCase(),
          currency: requestButtonOptions.currency.toLowerCase(),
          total: requestButtonOptions.paymentSummaryItems[requestButtonOptions.paymentSummaryItems.length - 1],
          disableWallets: type === "applePay" ? ["googlePay", "browserCard"] : ["applePay", "browserCard"],
          requestPayerName: true,
          requestPayerEmail: true
        });
        const intentClientSecret = requestButtonOptions.paymentIntentClientSecret;
        yield requestButton.setPaymentMethodEventHandler((event, stripe) => __async(this, null, function* () {
          const {
            paymentIntent,
            error: confirmError
          } = yield stripe.confirmCardPayment(intentClientSecret, {
            payment_method: event.paymentMethod.id
          }, {
            handleActions: false
          });
          if (confirmError) {
            event.complete("fail");
            this.notifyListeners(EventsEnum.Failed, confirmError);
            return resolve({
              paymentResult: EventsEnum.Failed
            });
          }
          if ((paymentIntent === null || paymentIntent === void 0 ? void 0 : paymentIntent.status) === "requires_action") {
            const {
              error: confirmError2
            } = yield stripe.confirmCardPayment(intentClientSecret);
            if (confirmError2) {
              event.complete("fail");
              this.notifyListeners(EventsEnum.Failed, confirmError2);
              return resolve({
                paymentResult: EventsEnum.Failed
              });
            }
          }
          event.complete("success");
          this.notifyListeners(EventsEnum.Completed, null);
          return resolve({
            paymentResult: EventsEnum.Completed
          });
        }));
        yield requestButton.initStripe(this.publishableKey, {
          stripeAccount: this.stripeAccount,
          showButton: false
        });
      }));
    });
  }
};
export {
  StripeWeb
};
//# sourceMappingURL=web-2MAEMC3R.js.map
