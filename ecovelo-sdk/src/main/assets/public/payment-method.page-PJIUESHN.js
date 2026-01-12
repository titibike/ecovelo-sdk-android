import {
  StripeService
} from "./chunk-MO4AHFDS.js";
import {
  CguComponent
} from "./chunk-K2F2EZUY.js";
import {
  ForfaitListModalComponent
} from "./chunk-TBBTACNR.js";
import {
  PaymentMethodsService
} from "./chunk-5D7OUYQY.js";
import {
  CguService
} from "./chunk-DDZL24WD.js";
import "./chunk-JVXQQLXI.js";
import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import {
  StripeElementsDirective,
  StripePaymentElementComponent
} from "./chunk-FFEUH5Q3.js";
import "./chunk-EYZBHAOK.js";
import "./chunk-7GZOXTNY.js";
import "./chunk-7JCEDXGT.js";
import {
  BooleanValueAccessorDirective,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSkeletonText,
  IonText,
  IonicModule,
  RouterLinkDelegateDirective,
  TextValueAccessorDirective
} from "./chunk-ULLB7OBK.js";
import {
  ForfaitsWrapperService
} from "./chunk-7UN2TOGU.js";
import {
  KYCWrapperService
} from "./chunk-H4GUYJEZ.js";
import "./chunk-7NHGY2ON.js";
import "./chunk-YSCBVZBE.js";
import {
  AccountService,
  SubscriptionProcessService
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
  logoApple,
  logoGoogle
} from "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService,
  ToastService
} from "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  FormsModule,
  IonRouterOutlet2 as IonRouterOutlet,
  LoadingController,
  ModalController,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  RouterLink,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ViewChild,
  effect,
  firstValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
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

// src/app/pages/auth/payment-method/payment-method.page.ts
var _c0 = () => ["/map"];
function PaymentMethodPage_ion_content_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "ion-skeleton-text", 14);
    \u0275\u0275elementContainerEnd();
  }
}
function PaymentMethodPage_ion_content_1_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedForfait.fiche.price, " ");
  }
}
function PaymentMethodPage_ion_content_1_div_4_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 16)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "small", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tarif_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tarif_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tarif_r3.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tarif_r3.description);
  }
}
function PaymentMethodPage_ion_content_1_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, PaymentMethodPage_ion_content_1_div_4_div_6_div_1_Template, 8, 3, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedForfait.fiche.tarifs);
  }
}
function PaymentMethodPage_ion_content_1_div_4_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275listener("click", function PaymentMethodPage_ion_content_1_div_4_a_7_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedForfait.id === ctx_r1.defaultForfait.id ? ctx_r1.openForfaitModal($event) : ctx_r1.cancelSelection());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedForfait.id === ctx_r1.defaultForfait.id ? \u0275\u0275pipeBind1(2, 1, "forfait.select_another_plan") : \u0275\u0275pipeBind1(3, 3, "forfait.cancel_selection"), " ");
  }
}
function PaymentMethodPage_ion_content_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275elementContainerStart(1);
    \u0275\u0275elementStart(2, "div", 16)(3, "h2", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PaymentMethodPage_ion_content_1_div_4_div_5_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PaymentMethodPage_ion_content_1_div_4_div_6_Template, 2, 1, "div", 19)(7, PaymentMethodPage_ion_content_1_div_4_a_7_Template, 4, 5, "a", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("default-forfait", ctx_r1.selectedForfait.id === ctx_r1.defaultForfait.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedForfait.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedForfait.id !== ctx_r1.defaultForfait.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedForfait.fiche.tarifs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasForfaitsAvailable === "true");
  }
}
function PaymentMethodPage_ion_content_1_ion_list_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 26)(1, "ion-item")(2, "ion-label")(3, "h3");
    \u0275\u0275element(4, "ion-skeleton-text", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275element(6, "ion-skeleton-text", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275element(8, "ion-skeleton-text", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
function PaymentMethodPage_ion_content_1_div_6_ion_item_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Exp. ", card_r5.card.exp_month < 10 ? "0" + card_r5.card.exp_month : card_r5.card.exp_month, "/", card_r5.card.exp_year.toString().slice(-2), " ");
  }
}
function PaymentMethodPage_ion_content_1_div_6_ion_item_2_ion_badge_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "cards.default"), " ");
  }
}
function PaymentMethodPage_ion_content_1_div_6_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 31);
    \u0275\u0275element(1, "ion-icon", 32);
    \u0275\u0275elementStart(2, "ion-label")(3, "div")(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275template(7, PaymentMethodPage_ion_content_1_div_6_ion_item_2_span_7_Template, 2, 2, "span", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, PaymentMethodPage_ion_content_1_div_6_ion_item_2_ion_badge_8_Template, 3, 3, "ion-badge", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const card_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getIcon(card_r5.card == null ? null : card_r5.card.brand));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("****", card_r5.card == null ? null : card_r5.card.last4, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", card_r5.card && card_r5.card.exp_month && card_r5.card.exp_year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cardsState.state === "success" && ((tmp_7_0 = ctx_r1.paymentMethodService.defaultPaymentMethod()) == null ? null : tmp_7_0.id) === card_r5.id);
  }
}
function PaymentMethodPage_ion_content_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "ion-list", 28);
    \u0275\u0275template(2, PaymentMethodPage_ion_content_1_div_6_ion_item_2_Template, 9, 4, "ion-item", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "hr", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.cardsState.paymentMethods);
  }
}
function PaymentMethodPage_ion_content_1_ng_container_7_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 40);
    \u0275\u0275listener("click", function PaymentMethodPage_ion_content_1_ng_container_7_ion_button_1_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openApplePay());
    });
    \u0275\u0275element(1, "ion-icon", 41);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "cards.pay_with_apple_pay"));
  }
}
function PaymentMethodPage_ion_content_1_ng_container_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "ngx-stripe-elements", 43)(2, "ngx-stripe-payment", 44);
    \u0275\u0275listener("change", function PaymentMethodPage_ion_content_1_ng_container_7_div_2_Template_ngx_stripe_payment_change_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleStripeFormFilled($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("stripe", ctx_r1.stripeService.getStripe())("elementsOptions", ctx_r1.options);
  }
}
function PaymentMethodPage_ion_content_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PaymentMethodPage_ion_content_1_ng_container_7_ion_button_1_Template, 5, 3, "ion-button", 38)(2, PaymentMethodPage_ion_content_1_ng_container_7_div_2_Template, 3, 2, "div", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentMode === "applepay");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.options && ctx_r1.paymentMode !== "googlepay");
  }
}
function PaymentMethodPage_ion_content_1_ion_card_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-card", 45)(1, "ion-card-content");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "payment.disclaimer"));
  }
}
function PaymentMethodPage_ion_content_1_ion_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 46);
    \u0275\u0275listener("click", function PaymentMethodPage_ion_content_1_ion_button_17_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.paymentMode === "googlepay" ? ctx_r1.openGooglePay() : ctx_r1.paymentMode === "classic_applepay" ? ctx_r1.stripeService.confirmSetup(ctx_r1.paymentElement.elements, ctx_r1.options.clientSecret, ctx_r1.userAttributes.name) : ctx_r1.confirmSetup());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.cguAccepted === "FALSE" || ctx_r1.stripeFormFilled === "FALSE" && ctx_r1.paymentMode !== "googlepay");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "payment.save_payment_method"), " ");
  }
}
function PaymentMethodPage_ion_content_1_ion_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 46);
    \u0275\u0275listener("click", function PaymentMethodPage_ion_content_1_ion_button_18_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validateTermsAndRedirect());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.cguAccepted === "FALSE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "generic.continue"), " ");
  }
}
function PaymentMethodPage_ion_content_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 1)(1, "ion-row", 2)(2, "ion-col", 3);
    \u0275\u0275template(3, PaymentMethodPage_ion_content_1_ng_container_3_Template, 2, 0, "ng-container", 4)(4, PaymentMethodPage_ion_content_1_div_4_Template, 8, 6, "div", 5)(5, PaymentMethodPage_ion_content_1_ion_list_5_Template, 9, 3, "ion-list", 6)(6, PaymentMethodPage_ion_content_1_div_6_Template, 4, 1, "div", 6)(7, PaymentMethodPage_ion_content_1_ng_container_7_Template, 3, 2, "ng-container", 4)(8, PaymentMethodPage_ion_content_1_ion_card_8_Template, 4, 3, "ion-card", 7);
    \u0275\u0275elementStart(9, "ion-checkbox", 8);
    \u0275\u0275listener("ionChange", function PaymentMethodPage_ion_content_1_Template_ion_checkbox_ionChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCgu($event));
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "a", 9);
    \u0275\u0275listener("click", function PaymentMethodPage_ion_content_1_Template_a_click_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCguModal($event));
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ion-input", 10);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PaymentMethodPage_ion_content_1_Template_ion_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.promoCode, $event) || (ctx_r1.promoCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function PaymentMethodPage_ion_content_1_Template_ion_input_ionChange_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPromoCodeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, PaymentMethodPage_ion_content_1_ion_button_17_Template, 3, 4, "ion-button", 11)(18, PaymentMethodPage_ion_content_1_ion_button_18_Template, 3, 4, "ion-button", 11);
    \u0275\u0275elementStart(19, "ion-text", 12)(20, "p")(21, "u", 13);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.selectedForfait);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedForfait);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.options && ctx_r1.paymentMode === "classic");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cardsState.state === "success" && ctx_r1.cardsState.paymentMethods.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.cardsState.state !== "success" || ctx_r1.cardsState.paymentMethods.length === 0) && ctx_r1.layout === "selecting");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentMode === "googlepay");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "cgu.accept"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 16, "cgu.name"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(16, 18, "forfait.reduction_code"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.promoCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.layout === "selecting");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.layout === "payment_method_added");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "signin.skip_step"));
  }
}
var _PaymentMethodPage = class _PaymentMethodPage {
  constructor(stripeService, modalCtrl, ionRouterOutlet, router, cguService, forfaitsService, route, paymentMethodService, accountService, loadingCtrl, translateService, toastr, subscriptionProcess, storage, kycService, errorHandler) {
    this.stripeService = stripeService;
    this.modalCtrl = modalCtrl;
    this.ionRouterOutlet = ionRouterOutlet;
    this.router = router;
    this.cguService = cguService;
    this.forfaitsService = forfaitsService;
    this.route = route;
    this.paymentMethodService = paymentMethodService;
    this.accountService = accountService;
    this.loadingCtrl = loadingCtrl;
    this.translateService = translateService;
    this.toastr = toastr;
    this.subscriptionProcess = subscriptionProcess;
    this.storage = storage;
    this.kycService = kycService;
    this.errorHandler = errorHandler;
    this.layout = "confirming";
    this.paymentMode = "classic";
    this.cguAccepted = "FALSE";
    this.stripeFormFilled = "FALSE";
    this.skeletonCount = 3;
    this.promoCode = "";
    this.cardsState = { state: "loading" };
    this.program = null;
    this.hasForfaitsAvailable = "false";
    addIcons({ logoApple, logoGoogle });
    effect(() => {
      this.cardsState = this.paymentMethodService.paymentMethodsState();
      if (this.cardsState.state === "success" && this.cardsState.paymentMethods.length > 0 && this.layout !== "confirming") {
        this.layout = "payment_method_added";
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      var _a, _b, _c;
      const cyclistState = this.accountService.cyclistState();
      if ("cyclist" in cyclistState && (cyclistState.cyclist.role == "guest" || ((_c = (_b = (_a = cyclistState.cyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]) == null ? void 0 : _c.role) == "guest")) {
        this.router.navigate(["/verify-phone"], { replaceUrl: true });
        return;
      }
      this.program = yield this.storage.get("program");
      const urlParams = this.route.snapshot.queryParams;
      const setupIntent = urlParams["setup_intent"];
      const clientSecret = urlParams["setup_intent_client_secret"];
      const redirectStatus = urlParams["redirect_status"];
      if (setupIntent && clientSecret && redirectStatus === "succeeded") {
        this.layout = "confirming";
        const loading = yield this.loadingCtrl.create({
          message: this.translateService.instant("generic.confirming")
        });
        try {
          yield loading.present();
          yield this.accountService.loadCyclist();
          yield this.setupPaymentMethod(clientSecret);
          yield this.validateTermsAndRedirect();
        } finally {
          yield loading.dismiss();
        }
      } else {
        this.initPageData();
      }
    });
  }
  initPageData() {
    return __async(this, null, function* () {
      this.layout = "selecting";
      fetchUserAttributes().then((attributes) => {
        this.userAttributes = attributes;
      });
      this.stripeService.initStripeElements(environment.program).subscribe((options) => __async(this, null, function* () {
        this.options = options;
        if (Capacitor.getPlatform() === "ios") {
          const isAvailable = yield this.stripeService.isApplePayAvailable();
          this.paymentMode = isAvailable ? "applepay" : "classic";
        }
        if (Capacitor.getPlatform() === "android") {
          const isAvailable = yield this.stripeService.isGooglePayAvailable();
          this.paymentMode = isAvailable ? "googlepay" : "classic";
        }
      }));
      this.forfaitsService.getDefaultForfait().then((forfait) => {
        if (forfait) {
          this.defaultForfait = forfait;
          this.selectedForfait = forfait;
        }
      });
      this.hasForfaitsAvailable = (yield this.forfaitsService.hasForfaits()) ? "true" : "false";
    });
  }
  openCguModal(event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      const modal = yield this.modalCtrl.create({
        component: CguComponent,
        presentingElement: this.ionRouterOutlet.nativeEl
      });
      yield modal.present();
    });
  }
  openForfaitModal(event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      const modal = yield this.modalCtrl.create({
        component: ForfaitListModalComponent,
        componentProps: {
          next: "onboarding"
        },
        presentingElement: this.ionRouterOutlet.nativeEl
      });
      modal.onDidDismiss().then((result) => __async(this, null, function* () {
        if (result.data) {
          this.promoCode = "";
          this.selectedForfait = result.data.forfait;
          yield this.subscriptionProcess.startProcess(this.selectedForfait);
          yield this.subscriptionProcess.updateStep("payment");
        }
      }));
      yield modal.present();
    });
  }
  setupPaymentMethod(clientSecret) {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        this.stripeService.retrieveSetupIntent(clientSecret).subscribe({
          next: (result) => __async(this, null, function* () {
            if (result && result.setupIntent && result.setupIntent.payment_method) {
              yield this.paymentMethodService.setDefaultCard(result.setupIntent.payment_method);
              if (this.layout !== "confirming") {
                yield this.accountService.loadCyclist();
                yield this.paymentMethodService.getPaymentMethods();
                this.layout = "payment_method_added";
              }
              resolve(true);
            } else {
              resolve(false);
            }
          }),
          error: () => {
            this.layout = "selecting";
            resolve(false);
          }
        });
      });
    });
  }
  confirmSetup() {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("generic.confirming")
      });
      yield loading.present();
      this.stripeService.confirmSetup(this.paymentElement.elements, this.options.clientSecret, this.userAttributes.name).subscribe({
        next: () => __async(this, null, function* () {
          yield loading.dismiss();
        }),
        error: () => __async(this, null, function* () {
          this.layout = "selecting";
          yield loading.dismiss();
        })
      });
    });
  }
  openApplePay() {
    return __async(this, null, function* () {
      var _a, _b, _c;
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("generic.confirming")
      });
      try {
        const result = yield this.stripeService.setupApplePay(this.options.clientSecret, ((_a = this.program) == null ? void 0 : _a.name) || "", ((_c = (_b = this.program) == null ? void 0 : _b.config) == null ? void 0 : _c.applepay_merchant) || "");
        if (result === "completed") {
          yield loading.present();
          yield this.setupPaymentMethod(this.options.clientSecret);
          yield loading.dismiss();
        } else if (result === "failed") {
          this.layout = "selecting";
        } else {
          this.layout = "selecting";
        }
      } catch (error) {
        this.layout = "selecting";
      }
    });
  }
  openGooglePay() {
    return __async(this, null, function* () {
      var _a;
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("generic.confirming")
      });
      try {
        const result = yield this.stripeService.setupGooglePay(this.options.clientSecret, ((_a = this.program) == null ? void 0 : _a.name) || "Ecovelo");
        if (result === "completed") {
          yield loading.present();
          yield this.setupPaymentMethod(this.options.clientSecret);
          yield loading.dismiss();
        } else if (result === "failed") {
          this.layout = "selecting";
          this.paymentMode = "classic";
        } else {
          this.layout = "selecting";
          this.paymentMode = "classic";
        }
      } catch (error) {
        this.layout = "selecting";
        this.paymentMode = "classic";
      }
    });
  }
  validateTermsAndRedirect() {
    return __async(this, null, function* () {
      var _a, _b, _c;
      yield this.cguService.validateTerms();
      const process = yield firstValueFrom(this.subscriptionProcess.getCurrentProcess());
      const hasKycDocuments = this.kycService.enabledDocumentTypes() && this.kycService.enabledDocumentTypes().length > 0;
      const hasSupportingDocuments = ((_a = process == null ? void 0 : process.forfait) == null ? void 0 : _a.supporting_documents) && ((_c = (_b = process == null ? void 0 : process.forfait) == null ? void 0 : _b.supporting_documents) == null ? void 0 : _c.length) > 0;
      if (hasKycDocuments) {
        this.router.navigate(["/kyc"], {
          queryParams: {
            onboarding: "true"
          },
          replaceUrl: true
        });
      } else if (hasSupportingDocuments) {
        yield this.subscriptionProcess.updateStep("documents");
        this.router.navigate(["/supporting-documents"], {
          queryParams: { next: "/verify-phone" },
          replaceUrl: true
        });
      } else {
        yield this.subscriptionProcess.updateStep("phone");
        this.router.navigate(["/verify-phone"]);
      }
    });
  }
  onPromoCodeChange() {
    return __async(this, null, function* () {
      yield this.subscriptionProcess.updateReduction(this.promoCode);
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
  cancelSelection() {
    return __async(this, null, function* () {
      this.selectedForfait = this.defaultForfait;
      yield this.subscriptionProcess.clearProcess();
      this.promoCode = "";
    });
  }
  toggleStripeFormFilled(event) {
    var _a, _b, _c;
    if (((_a = event.value) == null ? void 0 : _a.type) === "apple_pay" && this.paymentMode !== "classic_applepay") {
      this.paymentMode = "classic_applepay";
    } else if (((_b = event.value) == null ? void 0 : _b.type) === "google_pay" && this.paymentMode !== "classic_googlepay") {
      this.paymentMode = "classic_googlepay";
    } else if (!((_c = event.value) == null ? void 0 : _c.type) && this.paymentMode !== "classic") {
      this.paymentMode = "classic";
    }
    this.stripeFormFilled = event.complete ? "TRUE" : "FALSE";
  }
  toggleCgu(event) {
    switch (event.detail.checked) {
      case true:
        this.cguAccepted = "TRUE";
        break;
      case false:
        this.cguAccepted = "FALSE";
        break;
      default:
        this.cguAccepted = "FALSE";
        break;
    }
  }
};
_PaymentMethodPage.\u0275fac = function PaymentMethodPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentMethodPage)(\u0275\u0275directiveInject(StripeService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(IonRouterOutlet), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CguService), \u0275\u0275directiveInject(ForfaitsWrapperService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PaymentMethodsService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(SubscriptionProcessService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(KYCWrapperService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_PaymentMethodPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentMethodPage, selectors: [["app-payment-method"]], viewQuery: function PaymentMethodPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(StripePaymentElementComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paymentElement = _t.first);
  }
}, decls: 2, vars: 1, consts: [["class", "ion-padding", 4, "ngIf"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], [4, "ngIf"], ["class", "forfait-card", 3, "default-forfait", 4, "ngIf"], ["class", "ion-margin-top", 4, "ngIf"], ["class", "ion-no-margin ion-margin-top", "color", "primary", 4, "ngIf"], ["color", "dark", "labelPlacement", "end", 1, "ion-margin-top", 3, "ionChange"], [1, "ion-text-wrap", 3, "click"], ["fill", "outline", "mode", "md", 1, "ion-margin-top", "ion-margin-bottom", 3, "ngModelChange", "ionChange", "ngModel", "placeholder"], ["expand", "block", "shape", "round", 3, "disabled", "click", 4, "ngIf"], ["color", "medium", 1, "ion-text-center", "ion-margin-top"], [3, "routerLink"], ["animated", "", 2, "width", "100%", "height", "200px"], [1, "forfait-card"], [1, "flex-between"], [1, "title"], ["class", "title", 4, "ngIf"], ["class", "info-block", 4, "ngIf"], ["class", "link", 3, "click", 4, "ngIf"], [1, "info-block"], ["class", "info-item", 4, "ngFor", "ngForOf"], [1, "info-item"], [1, "description"], [1, "link", 3, "click"], [1, "ion-margin-top"], [2, "width", "100%", "height", "50px", 3, "animated"], ["lines", "none"], ["class", "ion-margin-top card-item", 4, "ngFor", "ngForOf"], [1, "divider"], [1, "ion-margin-top", "card-item"], ["slot", "start", "size", "large", 3, "src"], [1, "card-number"], ["class", "expiry", 4, "ngIf"], ["color", "primary", "class", "default-badge", 4, "ngIf"], [1, "expiry"], ["color", "primary", 1, "default-badge"], ["expand", "block", "class", "ion-margin-vertical apple-pay-button", "shape", "round", "fill", "outline", "color", "dark", 3, "click", 4, "ngIf"], ["id", "payment-element", "class", "ion-margin-top ion-margin-bottom-small", 4, "ngIf"], ["expand", "block", "shape", "round", "fill", "outline", "color", "dark", 1, "ion-margin-vertical", "apple-pay-button", 3, "click"], ["name", "logo-apple", "slot", "start"], ["id", "payment-element", 1, "ion-margin-top", "ion-margin-bottom-small"], [3, "stripe", "elementsOptions"], [3, "change"], ["color", "primary", 1, "ion-no-margin", "ion-margin-top"], ["expand", "block", "shape", "round", 3, "click", "disabled"]], template: function PaymentMethodPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header");
    \u0275\u0275template(1, PaymentMethodPage_ion_content_1_Template, 24, 23, "ion-content", 0);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout === "selecting" || ctx.layout === "payment_method_added");
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel,
  IonicModule,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSkeletonText,
  IonText,
  BooleanValueAccessorDirective,
  TextValueAccessorDirective,
  RouterLinkDelegateDirective,
  TranslateModule,
  TranslatePipe,
  StripeElementsDirective,
  StripePaymentElementComponent,
  HeaderComponent,
  RouterModule,
  RouterLink
], styles: ["\n\n.forfait-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 10px;\n  background: #e0e0e0;\n}\n.forfait-card[_ngcontent-%COMP%]   .flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forfait-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #666;\n}\n.forfait-card[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #0000ee;\n}\n.cgu-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0000ee;\n  cursor: pointer;\n}\n.error-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n.error-container[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.payment-notice[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 8px;\n  margin-bottom: 12px;\n  background-color: var(--ion-color-primary);\n}\n.payment-notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: white;\n  margin: 8px;\n  line-height: 1.4;\n}\nion-item.card-item[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid gray;\n}\n.divider[_ngcontent-%COMP%] {\n  border-top: 1px solid #ccc;\n  margin: 16px 0;\n}\n#payment-element[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin: 16px 0;\n}\n.google-pay-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.apple-pay-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=payment-method.page.css.map */"] });
var PaymentMethodPage = _PaymentMethodPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentMethodPage, [{
    type: Component,
    args: [{ selector: "app-payment-method", imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      TranslateModule,
      StripeElementsDirective,
      StripePaymentElementComponent,
      HeaderComponent,
      RouterModule
    ], template: `<app-header></app-header>
<ion-content
  class="ion-padding"
  *ngIf="layout === 'selecting' || layout === 'payment_method_added'"
>
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <!-- Forfait card -->
      <ng-container *ngIf="!selectedForfait">
        <ion-skeleton-text
          animated
          style="width: 100%; height: 200px"
        ></ion-skeleton-text>
      </ng-container>

      <div
        class="forfait-card"
        *ngIf="selectedForfait"
        [class.default-forfait]="selectedForfait.id === defaultForfait.id"
      >
        <ng-container>
          <div class="flex-between">
            <h2 class="title">{{ selectedForfait.name }}</h2>
            <div class="title" *ngIf="selectedForfait.id !== defaultForfait.id">
              {{ selectedForfait.fiche.price }}
            </div>
          </div>
          <div class="info-block" *ngIf="selectedForfait.fiche.tarifs">
            <div
              class="info-item"
              *ngFor="let tarif of selectedForfait.fiche.tarifs"
            >
              <div class="flex-between">
                <span>{{ tarif.title }}</span>
                <span>{{ tarif.price }}</span>
              </div>
              <small class="description">{{ tarif.description }}</small>
            </div>
          </div>
          <a
            class="link"
            *ngIf="hasForfaitsAvailable === 'true'"
            (click)="selectedForfait.id === defaultForfait.id ? openForfaitModal($event) : cancelSelection() "
          >
            {{ selectedForfait.id === defaultForfait.id ?
            ('forfait.select_another_plan' | translate) :
            ('forfait.cancel_selection' | translate) }}
          </a>
        </ng-container>
      </div>

      <!-- Payment skeleton -->
      <ion-list
        *ngIf="!options && paymentMode === 'classic'"
        class="ion-margin-top"
      >
        <ion-item>
          <ion-label>
            <h3>
              <ion-skeleton-text
                [animated]="true"
                style="width: 100%; height: 50px"
              ></ion-skeleton-text>
            </h3>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 100%; height: 50px"
              ></ion-skeleton-text>
            </p>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 100%; height: 50px"
              ></ion-skeleton-text>
            </p>
          </ion-label>
        </ion-item>
      </ion-list>

      <!-- Payment methods display -->
      <div
        *ngIf="cardsState.state === 'success' && cardsState.paymentMethods.length > 0"
        class="ion-margin-top"
      >
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
          </ion-item>
        </ion-list>
        <hr class="divider" />
      </div>

      <!-- Payment buttons and form -->
      <ng-container
        *ngIf="(cardsState.state !== 'success' || cardsState.paymentMethods.length === 0) && layout === 'selecting'"
      >
        <ion-button
          *ngIf="paymentMode === 'applepay'"
          expand="block"
          class="ion-margin-vertical apple-pay-button"
          (click)="openApplePay()"
          shape="round"
          fill="outline"
          color="dark"
        >
          <ion-icon name="logo-apple" slot="start"></ion-icon>
          <span>{{ 'cards.pay_with_apple_pay' | translate }}</span>
        </ion-button>

        <!-- Stripe payment element -->
        <div
          id="payment-element"
          class="ion-margin-top ion-margin-bottom-small"
          *ngIf="options && paymentMode !== 'googlepay'"
        >
          <ngx-stripe-elements
            [stripe]="stripeService.getStripe()"
            [elementsOptions]="options"
          >
            <ngx-stripe-payment (change)="toggleStripeFormFilled($event)" />
          </ngx-stripe-elements>
        </div>
      </ng-container>

      <ion-card
        class="ion-no-margin ion-margin-top"
        color="primary"
        *ngIf="paymentMode === 'googlepay'"
      >
        <ion-card-content
          >{{ 'payment.disclaimer' | translate }}</ion-card-content
        >
      </ion-card>
      <!-- CGU checkbox -->
      <ion-checkbox
        class="ion-margin-top"
        color="dark"
        labelPlacement="end"
        (ionChange)="toggleCgu($event)"
      >
        {{ 'cgu.accept' | translate }}
        <a (click)="openCguModal($event)" class="ion-text-wrap">
          {{ 'cgu.name' | translate }}
        </a>
      </ion-checkbox>

      <!-- Promo code input -->
      <ion-input
        class="ion-margin-top ion-margin-bottom"
        [(ngModel)]="promoCode"
        (ionChange)="onPromoCodeChange()"
        placeholder="{{ 'forfait.reduction_code' | translate }}"
        fill="outline"
        mode="md"
      ></ion-input>

      <!-- Submit button -->
      <ion-button
        expand="block"
        shape="round"
        *ngIf="layout === 'selecting'"
        (click)="paymentMode === 'googlepay' ? openGooglePay() : paymentMode === 'classic_applepay' ? stripeService.confirmSetup(paymentElement.elements, options.clientSecret!, userAttributes.name!) : confirmSetup()"
        [disabled]="this.cguAccepted === 'FALSE' ||  (this.stripeFormFilled === 'FALSE' && paymentMode !== 'googlepay')"
      >
        {{ 'payment.save_payment_method' | translate }}
      </ion-button>
      <ion-button
        expand="block"
        shape="round"
        *ngIf="layout === 'payment_method_added'"
        (click)="validateTermsAndRedirect()"
        [disabled]="this.cguAccepted === 'FALSE'"
      >
        {{ 'generic.continue' | translate }}
      </ion-button>

      <!-- Skip step link -->
      <ion-text color="medium" class="ion-text-center ion-margin-top">
        <p>
          <u [routerLink]="['/map']">{{ 'signin.skip_step' | translate }}</u>
        </p>
      </ion-text>
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/auth/payment-method/payment-method.page.scss */\n.forfait-card {\n  padding: 20px;\n  border-radius: 10px;\n  background: #e0e0e0;\n}\n.forfait-card .flex-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forfait-card .title {\n  font-weight: bold;\n  margin: 0;\n}\n.forfait-card .info-block {\n  margin-top: 10px;\n}\n.forfait-card .info-block .info-item {\n  margin-top: 3px;\n}\n.forfait-card .info-block .info-item:last-child {\n  margin-bottom: 0;\n}\n.forfait-card .info-block .description {\n  font-size: 0.8em;\n  color: #666;\n}\n.forfait-card .link {\n  display: inline-block;\n  margin-top: 10px;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #0000ee;\n}\n.cgu-link {\n  text-decoration: none;\n  color: #0000ee;\n  cursor: pointer;\n}\n.error-container {\n  text-align: center;\n  padding: 20px;\n}\n.error-container .retry-button {\n  margin-top: 16px;\n}\n.payment-notice {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 8px;\n  margin-bottom: 12px;\n  background-color: var(--ion-color-primary);\n}\n.payment-notice p {\n  font-size: 12px;\n  color: white;\n  margin: 8px;\n  line-height: 1.4;\n}\nion-item.card-item {\n  border-radius: 8px;\n  border: 1px solid gray;\n}\n.divider {\n  border-top: 1px solid #ccc;\n  margin: 16px 0;\n}\n#payment-element {\n  padding: 16px;\n  margin: 16px 0;\n}\n.google-pay-button span {\n  font-size: 20px;\n}\n.apple-pay-button span {\n  font-size: 20px;\n}\n/*# sourceMappingURL=payment-method.page.css.map */\n"] }]
  }], () => [{ type: StripeService }, { type: ModalController }, { type: IonRouterOutlet }, { type: Router }, { type: CguService }, { type: ForfaitsWrapperService }, { type: ActivatedRoute }, { type: PaymentMethodsService }, { type: AccountService }, { type: LoadingController }, { type: TranslateService }, { type: ToastService }, { type: SubscriptionProcessService }, { type: StorageService }, { type: KYCWrapperService }, { type: ErrorHandlerService }], { paymentElement: [{
    type: ViewChild,
    args: [StripePaymentElementComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentMethodPage, { className: "PaymentMethodPage", filePath: "src/app/pages/auth/payment-method/payment-method.page.ts", lineNumber: 61 });
})();
export {
  PaymentMethodPage
};
//# sourceMappingURL=payment-method.page-PJIUESHN.js.map
