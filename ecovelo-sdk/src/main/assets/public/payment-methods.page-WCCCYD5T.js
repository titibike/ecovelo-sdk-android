import {
  StripeService
} from "./chunk-MO4AHFDS.js";
import {
  PaymentMethodsService
} from "./chunk-5D7OUYQY.js";
import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import {
  StripeElementsDirective,
  StripePaymentElementComponent
} from "./chunk-FFEUH5Q3.js";
import "./chunk-EYZBHAOK.js";
import "./chunk-7GZOXTNY.js";
import "./chunk-ULLB7OBK.js";
import "./chunk-7UN2TOGU.js";
import "./chunk-H4GUYJEZ.js";
import "./chunk-7NHGY2ON.js";
import "./chunk-YSCBVZBE.js";
import {
  AccountService
} from "./chunk-5KPTYQ6O.js";
import "./chunk-FGJU3CJK.js";
import {
  environment
} from "./chunk-GFMHZGOY.js";
import {
  fetchUserAttributes
} from "./chunk-Z4RNZNYE.js";
import {
  addIcons,
  ellipsisHorizontal,
  logoApple,
  logoGoogle
} from "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService
} from "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  FormsModule,
  IonBadge,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal2 as IonModal,
  IonPopover2 as IonPopover,
  IonProgressBar,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonSkeletonText,
  IonText,
  IonTitle,
  IonToolbar,
  LoadingController,
  NgForOf,
  NgIf,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  UpperCasePipe,
  ViewChild,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-UANRONUE.js";
import "./chunk-SE3ANTEE.js";
import "./chunk-H7W7X3R4.js";
import "./chunk-644FBQT2.js";
import "./chunk-QATEHYOA.js";
import "./chunk-3MKGIXIK.js";
import "./chunk-5VP4V3BN.js";
import "./chunk-TXLH22R2.js";
import "./chunk-7NA53B7M.js";
import "./chunk-J5JVDPFK.js";
import "./chunk-MUBGKTGO.js";
import "./chunk-FU6YP5BE.js";
import "./chunk-AS7GTWVF.js";
import "./chunk-LYXK2PRG.js";
import "./chunk-2BRJTTQT.js";
import "./chunk-RZR7LWTQ.js";
import "./chunk-YSZWGYJT.js";
import "./chunk-BFPTXCSH.js";
import "./chunk-JBNXL77H.js";
import "./chunk-KQEJHESJ.js";
import {
  Capacitor
} from "./chunk-KGBWUDTS.js";
import "./chunk-HYH3NCU4.js";
import "./chunk-DJK765JH.js";
import "./chunk-MCANDFRG.js";
import "./chunk-3T6NUUZ7.js";
import "./chunk-VSCHB6XS.js";
import "./chunk-LHYYZWFK.js";
import "./chunk-2HURGHOF.js";
import "./chunk-WMICZ6Q4.js";
import "./chunk-PWUDMNGE.js";
import "./chunk-EV4ZQC67.js";
import "./chunk-7OBOYUXW.js";
import "./chunk-34HBWEZ3.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/pages/account/payment-methods/payment-methods.page.ts
var _c0 = ["popover"];
var _c1 = () => [];
function PaymentMethodsPage_Case_6_ion_item_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Exp. ", card_r2.card.exp_month < 10 ? "0" + card_r2.card.exp_month : card_r2.card.exp_month, "/", card_r2.card.exp_year.toString().slice(-2), " ");
  }
}
function PaymentMethodsPage_Case_6_ion_item_4_ion_badge_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "cards.default"), " ");
  }
}
function PaymentMethodsPage_Case_6_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 15);
    \u0275\u0275element(1, "ion-icon", 16);
    \u0275\u0275elementStart(2, "ion-label")(3, "div")(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275template(7, PaymentMethodsPage_Case_6_ion_item_4_span_7_Template, 2, 2, "span", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, PaymentMethodsPage_Case_6_ion_item_4_ion_badge_8_Template, 3, 3, "ion-badge", 19);
    \u0275\u0275elementStart(9, "ion-button", 20, 1);
    \u0275\u0275listener("click", function PaymentMethodsPage_Case_6_ion_item_4_Template_ion_button_click_9_listener($event) {
      const card_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.presentPopover($event, card_r2.id));
    });
    \u0275\u0275element(11, "ion-icon", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const card_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.getIcon(card_r2.card == null ? null : card_r2.card.brand));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("****", card_r2.card == null ? null : card_r2.card.last4, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", card_r2.card && card_r2.card.exp_month && card_r2.card.exp_year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.cardsState.state === "success" && ((tmp_8_0 = ctx_r2.paymentMethodService.defaultPaymentMethod()) == null ? null : tmp_8_0.id) === card_r2.id);
  }
}
function PaymentMethodsPage_Case_6_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-item", 24);
    \u0275\u0275listener("click", function PaymentMethodsPage_Case_6_ng_template_8_Template_ion_item_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setDefaultCard(ctx_r2.selectedCardId));
    });
    \u0275\u0275elementStart(2, "ion-text");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item", 25);
    \u0275\u0275listener("click", function PaymentMethodsPage_Case_6_ng_template_8_Template_ion_item_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteCard(ctx_r2.selectedCardId));
    });
    \u0275\u0275elementStart(6, "ion-text", 7);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ((tmp_3_0 = ctx_r2.paymentMethodService.defaultPaymentMethod()) == null ? null : tmp_3_0.id) === ctx_r2.selectedCardId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "cards.set_default"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ((tmp_5_0 = ctx_r2.paymentMethodService.defaultPaymentMethod()) == null ? null : tmp_5_0.id) === ctx_r2.selectedCardId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "cards.delete"));
  }
}
function PaymentMethodsPage_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-list", 11);
    \u0275\u0275template(4, PaymentMethodsPage_Case_6_ion_item_4_Template, 12, 4, "ion-item", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "hr", 13);
    \u0275\u0275elementStart(6, "ion-popover", 14, 0);
    \u0275\u0275template(8, PaymentMethodsPage_Case_6_ng_template_8_Template, 9, 8, "ng-template");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "cards.my_cards"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.cardsState.paymentMethods);
    \u0275\u0275advance(2);
    \u0275\u0275property("dismissOnSelect", true)("keepContentsMounted", true);
  }
}
function PaymentMethodsPage_Case_7_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 29);
    \u0275\u0275element(1, "ion-skeleton-text", 30);
    \u0275\u0275elementStart(2, "ion-label")(3, "div");
    \u0275\u0275element(4, "ion-skeleton-text", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275element(6, "ion-skeleton-text", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "ion-skeleton-text", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance();
    \u0275\u0275property("animated", true);
  }
}
function PaymentMethodsPage_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-progress-bar", 26);
    \u0275\u0275elementStart(1, "ion-list", 27);
    \u0275\u0275template(2, PaymentMethodsPage_Case_7_ion_item_2_Template, 8, 4, "ion-item", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1).constructor(ctx_r2.skeletonCount));
  }
}
function PaymentMethodsPage_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.cardsState.error, " ");
  }
}
function PaymentMethodsPage_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "cards.empty"), " ");
  }
}
function PaymentMethodsPage_ng_template_14_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "ion-skeleton-text", 38)(2, "ion-skeleton-text", 39)(3, "ion-skeleton-text", 38);
    \u0275\u0275elementContainerEnd();
  }
}
function PaymentMethodsPage_ng_template_14_div_11_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 44);
    \u0275\u0275listener("click", function PaymentMethodsPage_ng_template_14_div_11_ion_button_1_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openApplePay(ctx_r2.stripeOptions));
    });
    \u0275\u0275element(1, "ion-icon", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "cards.pay_with_apple_pay"), " ");
  }
}
function PaymentMethodsPage_ng_template_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, PaymentMethodsPage_ng_template_14_div_11_ion_button_1_Template, 4, 3, "ion-button", 40);
    \u0275\u0275elementStart(2, "ngx-stripe-elements", 41)(3, "ngx-stripe-payment", 42);
    \u0275\u0275listener("change", function PaymentMethodsPage_ng_template_14_div_11_Template_ngx_stripe_payment_change_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.handlePaymentElementChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ion-button", 43);
    \u0275\u0275listener("click", function PaymentMethodsPage_ng_template_14_div_11_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.createCard(ctx_r2.paymentElement.elements, ctx_r2.stripeOptions.clientSecret));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.paymentMode === "applepay");
    \u0275\u0275advance();
    \u0275\u0275property("stripe", ctx_r2.stripeService.getStripe())("elementsOptions", ctx_r2.stripeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r2.elementsOptions);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, \u0275\u0275pipeBind1(6, 5, "cards.save")), " ");
  }
}
function PaymentMethodsPage_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-header")(2, "ion-toolbar")(3, "ion-title");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-buttons", 34)(7, "ion-button", 35);
    \u0275\u0275listener("click", function PaymentMethodsPage_ng_template_14_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isOpenClassicPaymentSheet = "hidden");
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(10, PaymentMethodsPage_ng_template_14_ng_container_10_Template, 4, 0, "ng-container", 36)(11, PaymentMethodsPage_ng_template_14_div_11_Template, 8, 9, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "cards.add_card"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "generic.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.stripeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.stripeOptions);
  }
}
var _PaymentMethodsPage = class _PaymentMethodsPage {
  constructor(paymentMethodService, stripeService, accountService, router, loadingCtrl, translateService, storage, errorHandler) {
    this.paymentMethodService = paymentMethodService;
    this.stripeService = stripeService;
    this.accountService = accountService;
    this.router = router;
    this.loadingCtrl = loadingCtrl;
    this.translateService = translateService;
    this.storage = storage;
    this.errorHandler = errorHandler;
    this.skeletonCount = 3;
    this.cardsState = { state: "loading" };
    this.environment = environment;
    this.isOpenClassicPaymentSheet = "hidden";
    this.paymentMode = "classic";
    this.program = null;
    addIcons({ ellipsisHorizontal, logoApple, logoGoogle });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
    });
    effect(() => {
      this.cardsState = this.paymentMethodService.paymentMethodsState();
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.program = yield this.storage.get("program");
      this.user = yield fetchUserAttributes();
      const urlParams = this.router.snapshot.queryParams;
      const setupIntent = urlParams["setup_intent"];
      const clientSecret = urlParams["setup_intent_client_secret"];
      const redirectStatus = urlParams["redirect_status"];
      if (setupIntent && clientSecret && redirectStatus === "succeeded") {
        this.stripeService.retrieveSetupIntent(clientSecret).subscribe({
          next: (result) => __async(this, null, function* () {
            if (result && result.setupIntent && result.setupIntent.payment_method) {
              yield this.accountService.loadCyclist();
              yield this.setDefaultCard(result.setupIntent.payment_method);
            }
          })
        });
      } else if (this.cardsState.state !== "success") {
        this.refresh();
      }
    });
  }
  handleRefresh(event) {
    this.refresh().then(() => {
      event.target.complete();
    });
  }
  refresh() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        this.cardsState = { state: "loading" };
        yield this.paymentMethodService.getPaymentMethods();
      }));
    });
  }
  initStripe() {
    this.stripeService.initStripeElements(environment.program).subscribe((options) => __async(this, null, function* () {
      this.elementsOptions = {
        layout: {
          type: "auto"
        },
        wallets: {
          applePay: "auto",
          googlePay: "auto"
        }
      };
      this.stripeOptions = options;
      if (Capacitor.getPlatform() === "ios") {
        const isAvailable = yield this.stripeService.isApplePayAvailable();
        this.paymentMode = isAvailable ? "applepay" : "classic";
        this.isOpenClassicPaymentSheet = "visible";
      }
      if (Capacitor.getPlatform() === "android") {
        const isAvailable = yield this.stripeService.isGooglePayAvailable();
        if (isAvailable) {
          this.openGooglePay();
        } else {
          this.paymentMode = "classic";
        }
      } else {
        this.isOpenClassicPaymentSheet = "visible";
      }
    }));
  }
  handlePaymentSuccess(clientSecret) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("loading.saving_card")
      });
      yield loading.present();
      this.stripeService.retrieveSetupIntent(clientSecret).subscribe({
        next: (setupIntent) => __async(this, null, function* () {
          var _a;
          if ((_a = setupIntent == null ? void 0 : setupIntent.setupIntent) == null ? void 0 : _a.payment_method) {
            yield this.setDefaultCard(setupIntent.setupIntent.payment_method);
            this.isOpenClassicPaymentSheet = "hidden";
          }
          yield loading.dismiss();
        }),
        error: () => __async(this, null, function* () {
          yield loading.dismiss();
        })
      });
    });
  }
  openApplePay(options) {
    return __async(this, null, function* () {
      var _a, _b, _c;
      try {
        const result = yield this.stripeService.setupApplePay(options.clientSecret, ((_a = this.program) == null ? void 0 : _a.name) || "", ((_c = (_b = this.program) == null ? void 0 : _b.config) == null ? void 0 : _c.applepay_merchant) || "");
        if (result === "completed") {
          yield this.handlePaymentSuccess(options.clientSecret);
        } else if (result === "failed") {
          this.isOpenClassicPaymentSheet = "visible";
        } else {
          this.isOpenClassicPaymentSheet = "visible";
        }
      } catch (error) {
        this.isOpenClassicPaymentSheet = "visible";
      }
    });
  }
  openGooglePay() {
    return __async(this, null, function* () {
      var _a;
      try {
        const result = yield this.stripeService.setupGooglePay(this.stripeOptions.clientSecret, ((_a = this.program) == null ? void 0 : _a.name) || "Ecovelo");
        if (result === "completed") {
          yield this.handlePaymentSuccess(this.stripeOptions.clientSecret);
        } else if (result === "failed") {
          this.isOpenClassicPaymentSheet = "visible";
          this.paymentMode = "classic";
        } else {
          this.isOpenClassicPaymentSheet = "visible";
          this.paymentMode = "classic";
        }
      } catch (error) {
        this.isOpenClassicPaymentSheet = "visible";
        this.paymentMode = "classic";
      }
    });
  }
  getIcon(brand) {
    switch (brand) {
      case "visa":
        return "../../../assets/svg/fontawesome/visa.svg";
      case "mastercard":
        return "../../../assets/svg/fontawesome/mastercard.svg";
      default:
        return "../../../assets/svg/fontawesome/credit-card.svg";
    }
  }
  presentPopover(e, cardId) {
    return __async(this, null, function* () {
      this.selectedCardId = cardId;
      this.popover.event = e;
      return this.popover.present();
    });
  }
  createCard(elements, clientSecret) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: "Ajout de la carte..."
      });
      yield loading.present();
      if (this.user.name) {
        this.stripeService.confirmSetup(elements, clientSecret, this.user.name).subscribe({
          next: () => __async(this, null, function* () {
            this.isOpenClassicPaymentSheet = "hidden";
            yield loading.dismiss();
          }),
          error: () => __async(this, null, function* () {
            yield loading.dismiss();
          })
        });
      } else {
        yield loading.dismiss();
      }
    });
  }
  setDefaultCard(cardId) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("loading.saving_card")
      });
      yield loading.present();
      yield this.paymentMethodService.setDefaultCard(cardId);
      yield this.loadingCtrl.getTop().then((loading2) => __async(this, null, function* () {
        if (loading2) {
          yield loading2.dismiss();
        }
      }));
    });
  }
  deleteCard(cardId) {
    return __async(this, null, function* () {
      yield this.paymentMethodService.deleteCard(cardId);
    });
  }
  handlePaymentElementChange(event) {
    var _a, _b, _c;
    if (((_a = event.value) == null ? void 0 : _a.type) === "apple_pay" && this.paymentMode !== "classic_applepay") {
      this.paymentMode = "classic_applepay";
    } else if (((_b = event.value) == null ? void 0 : _b.type) === "google_pay" && this.paymentMode !== "classic_googlepay") {
      this.paymentMode = "classic_googlepay";
    } else if (!((_c = event.value) == null ? void 0 : _c.type) && this.paymentMode !== "classic") {
      this.paymentMode = "classic";
    }
  }
};
_PaymentMethodsPage.\u0275fac = function PaymentMethodsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentMethodsPage)(\u0275\u0275directiveInject(PaymentMethodsService), \u0275\u0275directiveInject(StripeService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_PaymentMethodsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentMethodsPage, selectors: [["app-payment-methods"]], viewQuery: function PaymentMethodsPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(StripePaymentElementComponent, 5);
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paymentElement = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.popover = _t.first);
  }
}, decls: 15, vars: 6, consts: [["popover", ""], ["popoverButton", ""], [3, "defaultHref"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], ["slot", "fixed", 3, "ionRefresh"], ["color", "danger"], ["color", "medium"], ["id", "open-modal", "size", "small", "shape", "round", "color", "dark", "fill", "outline", 1, "ion-margin-top", 3, "click"], [3, "ionModalDidDismiss", "isOpen"], ["lines", "none"], ["class", "ion-margin-top card-item", 4, "ngFor", "ngForOf"], [1, "divider"], [3, "dismissOnSelect", "keepContentsMounted"], [1, "ion-margin-top", "card-item"], ["slot", "start", "size", "large", 3, "src"], [1, "card-number"], ["class", "expiry", 4, "ngIf"], ["color", "primary", "class", "default-badge", 4, "ngIf"], ["fill", "clear", "color", "dark", "size", "small", "slot", "end", 3, "click"], ["name", "ellipsis-horizontal"], [1, "expiry"], ["color", "primary", 1, "default-badge"], ["lines", "full", 3, "click", "disabled"], ["lines", "none", 3, "click", "disabled"], ["type", "indeterminate"], ["lines", "none", 1, "ion-margin-top"], ["class", "ion-margin-top", 4, "ngFor", "ngForOf"], [1, "ion-margin-top"], ["slot", "start", 2, "width", "32px", "height", "32px", 3, "animated"], [2, "width", "120px", 3, "animated"], [2, "width", "80px", 3, "animated"], ["slot", "end", 2, "width", "80px", "height", "24px", 3, "animated"], ["slot", "end"], ["shape", "round", "fill", "clear", "color", "dark", 3, "click"], [4, "ngIf"], ["class", "ion-padding", 4, "ngIf"], ["animated", "", 2, "width", "100%", "height", "60px"], ["animated", "", 2, "width", "100%", "height", "60px", "margin", "10px 0"], ["class", "ion-margin-vertical apple-pay-button", "expand", "block", "shape", "round", "fill", "outline", "color", "dark", 3, "click", 4, "ngIf"], [1, "stripe-element-container", 3, "stripe", "elementsOptions"], [3, "change", "options"], ["expand", "block", "shape", "round", "fill", "outline", "color", "dark", 1, "ion-margin-top", "ion-margin-horizontal", 3, "click"], ["expand", "block", "shape", "round", "fill", "outline", "color", "dark", 1, "ion-margin-vertical", "apple-pay-button", 3, "click"], ["name", "logo-apple", "slot", "start"]], template: function PaymentMethodsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 2);
    \u0275\u0275elementStart(1, "ion-content", 3)(2, "ion-row", 4)(3, "ion-col", 5)(4, "ion-refresher", 6);
    \u0275\u0275listener("ionRefresh", function PaymentMethodsPage_Template_ion_refresher_ionRefresh_4_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275element(5, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PaymentMethodsPage_Case_6_Template, 9, 6)(7, PaymentMethodsPage_Case_7_Template, 3, 2)(8, PaymentMethodsPage_Case_8_Template, 2, 1, "ion-text", 7)(9, PaymentMethodsPage_Case_9_Template, 3, 3, "ion-text", 8);
    \u0275\u0275elementStart(10, "ion-button", 9);
    \u0275\u0275listener("click", function PaymentMethodsPage_Template_ion_button_click_10_listener() {
      return ctx.initStripe();
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-modal", 10);
    \u0275\u0275listener("ionModalDidDismiss", function PaymentMethodsPage_Template_ion_modal_ionModalDidDismiss_13_listener() {
      return ctx.isOpenClassicPaymentSheet = "hidden";
    });
    \u0275\u0275template(14, PaymentMethodsPage_ng_template_14_Template, 12, 8, "ng-template");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance(6);
    \u0275\u0275conditional((tmp_1_0 = ctx.cardsState.state) === "success" ? 6 : tmp_1_0 === "loading" ? 7 : tmp_1_0 === "error" ? 8 : tmp_1_0 === "no_data" ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 4, "cards.add_card"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.isOpenClassicPaymentSheet === "visible");
  }
}, dependencies: [
  IonContent,
  HeaderComponent,
  CommonModule,
  NgForOf,
  NgIf,
  UpperCasePipe,
  FormsModule,
  IonButton,
  IonRow,
  IonCol,
  IonBadge,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonModal,
  IonList,
  IonText,
  IonIcon,
  TranslateModule,
  TranslatePipe,
  IonItem,
  IonProgressBar,
  IonSkeletonText,
  StripePaymentElementComponent,
  StripeElementsDirective,
  IonPopover,
  IonRefresher,
  IonRefresherContent
], styles: ["\n\nion-item.card-item[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid gray;\n}\n.divider[_ngcontent-%COMP%] {\n  border-top: 1px solid #ccc;\n  margin: 16px 0;\n}\n#payment-element[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin: 16px 0;\n}\n.google-pay-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.apple-pay-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=payment-methods.page.css.map */"] });
var PaymentMethodsPage = _PaymentMethodsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentMethodsPage, [{
    type: Component,
    args: [{ selector: "app-payment-methods", imports: [
      IonContent,
      HeaderComponent,
      CommonModule,
      FormsModule,
      IonButton,
      IonRow,
      IonCol,
      IonBadge,
      IonLabel,
      IonHeader,
      IonToolbar,
      IonButtons,
      IonButton,
      IonTitle,
      IonModal,
      IonList,
      IonText,
      IonIcon,
      TranslateModule,
      IonItem,
      IonProgressBar,
      IonSkeletonText,
      StripePaymentElementComponent,
      StripeElementsDirective,
      IonPopover,
      IonRefresher,
      IonRefresherContent
    ], template: `<app-header [defaultHref]="'/account'"></app-header>

<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      @switch (cardsState.state) { @case("success") {
      <h4>{{"cards.my_cards" | translate}}</h4>
      <ion-list lines="none">
        <ion-item
          *ngFor="let card of cardsState.paymentMethods"
          class="ion-margin-top card-item"
        >
          <ion-icon
            slot="start"
            [src]="getIcon(card.card?.brand)"
            size="large"
          ></ion-icon>
          <ion-label>
            <div>
              <span class="card-number">****{{ card.card?.last4 }}</span>
            </div>
            <div>
              <span
                class="expiry"
                *ngIf="card.card && card.card.exp_month && card.card.exp_year"
              >
                Exp. {{ card.card.exp_month < 10 ? '0' + card.card.exp_month :
                card.card.exp_month }}/{{
                card.card.exp_year.toString().slice(-2) }}
              </span>
            </div>
          </ion-label>
          <ion-badge
            *ngIf="cardsState.state === 'success' && paymentMethodService.defaultPaymentMethod()?.id === card.id"
            color="primary"
            class="default-badge"
          >
            {{ 'cards.default' | translate }}
          </ion-badge>
          <ion-button
            fill="clear"
            color="dark"
            #popoverButton
            (click)="presentPopover($event, card.id!)"
            size="small"
            slot="end"
          >
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </ion-button>
        </ion-item>
      </ion-list>
      <hr class="divider" />

      <ion-popover
        #popover
        [dismissOnSelect]="true"
        [keepContentsMounted]="true"
      >
        <ng-template>
          <ion-list>
            <ion-item
              lines="full"
              [disabled]="paymentMethodService.defaultPaymentMethod()?.id === selectedCardId"
              (click)="setDefaultCard(selectedCardId!)"
            >
              <ion-text>{{ 'cards.set_default' | translate }}</ion-text>
            </ion-item>
            <ion-item
              [disabled]="paymentMethodService.defaultPaymentMethod()?.id === selectedCardId"
              (click)="deleteCard(selectedCardId!)"
              lines="none"
            >
              <ion-text color="danger"
                >{{ 'cards.delete' | translate }}</ion-text
              >
            </ion-item>
          </ion-list>
        </ng-template>
      </ion-popover>
      } @case('loading') {
      <ion-progress-bar type="indeterminate"></ion-progress-bar>
      <ion-list class="ion-margin-top" lines="none">
        <ion-item
          *ngFor="let i of [].constructor(skeletonCount)"
          class="ion-margin-top"
        >
          <ion-skeleton-text
            slot="start"
            [animated]="true"
            style="width: 32px; height: 32px"
          ></ion-skeleton-text>
          <ion-label>
            <div>
              <ion-skeleton-text
                [animated]="true"
                style="width: 120px"
              ></ion-skeleton-text>
            </div>
            <div>
              <ion-skeleton-text
                [animated]="true"
                style="width: 80px"
              ></ion-skeleton-text>
            </div>
          </ion-label>
          <ion-skeleton-text
            slot="end"
            [animated]="true"
            style="width: 80px; height: 24px"
          ></ion-skeleton-text>
        </ion-item>
      </ion-list>
      } @case('error') {
      <ion-text color="danger"> {{ cardsState.error }} </ion-text>
      } @case('no_data') {
      <ion-text color="medium"> {{ 'cards.empty' | translate }} </ion-text>
      } }
      <ion-button
        class="ion-margin-top"
        id="open-modal"
        size="small"
        shape="round"
        color="dark"
        fill="outline"
        (click)="initStripe()"
      >
        {{ 'cards.add_card' | translate }}
      </ion-button>
      <ion-modal
        [isOpen]="isOpenClassicPaymentSheet === 'visible'"
        (ionModalDidDismiss)="isOpenClassicPaymentSheet = 'hidden'"
      >
        <ng-template>
          <ion-content>
            <ion-header>
              <ion-toolbar>
                <ion-title>{{ 'cards.add_card' | translate }}</ion-title>
                <ion-buttons slot="end">
                  <ion-button
                    (click)="isOpenClassicPaymentSheet = 'hidden'"
                    shape="round"
                    fill="clear"
                    color="dark"
                  >
                    {{"generic.close" | translate}}
                  </ion-button>
                </ion-buttons>
              </ion-toolbar>
            </ion-header>
            <ng-container *ngIf="!stripeOptions">
              <ion-skeleton-text
                animated
                style="width: 100%; height: 60px"
              ></ion-skeleton-text>
              <ion-skeleton-text
                animated
                style="width: 100%; height: 60px; margin: 10px 0"
              ></ion-skeleton-text>
              <ion-skeleton-text
                animated
                style="width: 100%; height: 60px"
              ></ion-skeleton-text>
            </ng-container>

            <div *ngIf="stripeOptions" class="ion-padding">
              <ion-button
                class="ion-margin-vertical apple-pay-button"
                *ngIf="paymentMode === 'applepay'"
                expand="block"
                shape="round"
                (click)="openApplePay(stripeOptions)"
                fill="outline"
                color="dark"
              >
                <ion-icon name="logo-apple" slot="start"></ion-icon>
                {{ 'cards.pay_with_apple_pay' | translate }}
              </ion-button>
              <ngx-stripe-elements
                [stripe]="stripeService.getStripe()"
                [elementsOptions]="stripeOptions"
                class="stripe-element-container"
              >
                <ngx-stripe-payment
                  [options]="elementsOptions"
                  (change)="handlePaymentElementChange($event)"
                />
              </ngx-stripe-elements>

              <ion-button
                expand="block"
                class="ion-margin-top ion-margin-horizontal"
                (click)="createCard(paymentElement.elements, stripeOptions.clientSecret!)"
                shape="round"
                fill="outline"
                color="dark"
              >
                {{ 'cards.save' | translate | uppercase }}
              </ion-button>
            </div>
          </ion-content>
        </ng-template>
      </ion-modal>
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/account/payment-methods/payment-methods.page.scss */\nion-item.card-item {\n  border-radius: 8px;\n  border: 1px solid gray;\n}\n.divider {\n  border-top: 1px solid #ccc;\n  margin: 16px 0;\n}\n#payment-element {\n  padding: 16px;\n  margin: 16px 0;\n}\n.google-pay-button span {\n  font-size: 20px;\n}\n.apple-pay-button span {\n  font-size: 20px;\n}\n/*# sourceMappingURL=payment-methods.page.css.map */\n"] }]
  }], () => [{ type: PaymentMethodsService }, { type: StripeService }, { type: AccountService }, { type: ActivatedRoute }, { type: LoadingController }, { type: TranslateService }, { type: StorageService }, { type: ErrorHandlerService }], { paymentElement: [{
    type: ViewChild,
    args: [StripePaymentElementComponent]
  }], popover: [{
    type: ViewChild,
    args: ["popover"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentMethodsPage, { className: "PaymentMethodsPage", filePath: "src/app/pages/account/payment-methods/payment-methods.page.ts", lineNumber: 90 });
})();
export {
  PaymentMethodsPage
};
//# sourceMappingURL=payment-methods.page-WCCCYD5T.js.map
