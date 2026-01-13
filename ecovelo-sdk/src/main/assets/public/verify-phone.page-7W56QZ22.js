import {
  WalletService
} from "./chunk-WZFGYABM.js";
import {
  AbonnementWrapperService
} from "./chunk-HXPAB5CU.js";
import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-7GZOXTNY.js";
import {
  IonCol,
  IonContent,
  IonRow,
  IonicModule,
  LoadingController
} from "./chunk-ULLB7OBK.js";
import {
  AuthService
} from "./chunk-RK7YL5P5.js";
import "./chunk-IBT2NAXJ.js";
import "./chunk-NHPV6IFO.js";
import "./chunk-YSCBVZBE.js";
import {
  AccountService,
  CyclistsService,
  SubscriptionProcessService
} from "./chunk-6J5UKKBN.js";
import "./chunk-RYICOSCB.js";
import "./chunk-FOJAXRYS.js";
import {
  confirmUserAttribute,
  sendUserAttributeVerificationCode
} from "./chunk-Z4RNZNYE.js";
import "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService
} from "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  AlertController,
  CommonModule,
  Component,
  FormsModule,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ViewChild,
  firstValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
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
import "./chunk-KGBWUDTS.js";
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// src/app/pages/auth/verify-phone/verify-phone.page.ts
var _c0 = ["otpInput"];
var _c1 = (a0) => ({ phone: a0 });
function VerifyPhonePage_div_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
}
function VerifyPhonePage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("click", function VerifyPhonePage_div_16_Template_div_click_0_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSlotClick(i_r3));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, VerifyPhonePage_div_16_div_3_Template, 1, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r5 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r3 === ctx_r3.activeSlotIndex);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r3 === ctx_r3.activeSlotIndex);
  }
}
function VerifyPhonePage_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
}
function VerifyPhonePage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("click", function VerifyPhonePage_div_18_Template_div_click_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSlotClick(i_r7 + 3));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, VerifyPhonePage_div_18_div_3_Template, 1, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r8 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r7 + 3 === ctx_r3.activeSlotIndex);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r7 + 3 === ctx_r3.activeSlotIndex);
  }
}
function VerifyPhonePage_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r3.verificationResendTimer, "s) ");
  }
}
var _VerifyPhonePage = class _VerifyPhonePage {
  constructor(loadingController, translateService, loadingCtrl, translate, cyclistService, AbonnementWrapperService2, router, accountService, alertController, authService, subscriptionProcess, walletService, errorHandler) {
    this.loadingController = loadingController;
    this.translateService = translateService;
    this.loadingCtrl = loadingCtrl;
    this.translate = translate;
    this.cyclistService = cyclistService;
    this.AbonnementWrapperService = AbonnementWrapperService2;
    this.router = router;
    this.accountService = accountService;
    this.alertController = alertController;
    this.authService = authService;
    this.subscriptionProcess = subscriptionProcess;
    this.walletService = walletService;
    this.errorHandler = errorHandler;
    this.allowVerificationCodeResend = false;
    this.verificationResendTimer = 20;
    this.verificationCode = "";
    this.slots = new Array(6).fill("");
    this.activeSlotIndex = 0;
    this.userPhoneNumber = "";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.subscriptionProcess.updateStep("phone");
      yield this.sendVerificationCode();
      this.userPhoneNumber = yield this.authService.getUserPhoneNumber();
    });
  }
  startResendTimer() {
    this.allowVerificationCodeResend = false;
    this.verificationResendTimer = 20;
    if (this.countdownInterval)
      clearInterval(this.countdownInterval);
    this.countdownInterval = setInterval(() => {
      if (this.verificationResendTimer > 0) {
        this.verificationResendTimer--;
      } else {
        this.allowVerificationCodeResend = true;
        clearInterval(this.countdownInterval);
      }
    }, 1e3);
  }
  sendVerificationCode() {
    return __async(this, null, function* () {
      this.startResendTimer();
      try {
        yield sendUserAttributeVerificationCode({
          userAttributeKey: "phone_number"
        });
      } catch (error) {
        this.errorHandler.handleError(error);
      }
    });
  }
  deleteAccount() {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: this.translateService.instant("verify_phone.delete_account"),
        message: this.translateService.instant("verify_phone.delete_account_message"),
        buttons: [
          { text: "Annuler", role: "cancel" },
          {
            text: "Supprimer",
            cssClass: "text-danger",
            handler: () => __async(this, null, function* () {
              try {
                yield this.accountService.deleteAccount();
                yield this.authService.signOut();
              } catch (err) {
                this.errorHandler.handleError(err);
              }
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  onInput(event) {
    const input = event.target;
    const value = input.value.replace(/[^0-9]/g, "");
    if (value.length === 6) {
      this.slots = value.split("");
      this.verificationCode = value;
      this.activeSlotIndex = 5;
      this.verifyCode();
      return;
    }
    const lastChar = value[value.length - 1];
    if (lastChar) {
      this.slots[this.activeSlotIndex] = lastChar;
      if (this.activeSlotIndex < 5) {
        this.activeSlotIndex++;
      }
    }
    this.verificationCode = this.slots.join("");
    input.value = this.verificationCode;
  }
  onKeyDown(event) {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        this.activeSlotIndex = Math.max(0, this.activeSlotIndex - 1);
        break;
      case "ArrowRight":
        event.preventDefault();
        this.activeSlotIndex = Math.min(5, this.activeSlotIndex + 1);
        break;
      case "Backspace":
        event.preventDefault();
        if (this.slots[this.activeSlotIndex]) {
          this.slots[this.activeSlotIndex] = "";
          this.verificationCode = this.slots.join("");
        } else if (this.activeSlotIndex > 0) {
          this.activeSlotIndex--;
          this.slots[this.activeSlotIndex] = "";
          this.verificationCode = this.slots.join("");
        }
        break;
      default:
        if (/^\d$/.test(event.key)) {
          event.preventDefault();
          this.slots[this.activeSlotIndex] = event.key;
          this.verificationCode = this.slots.join("");
          if (this.activeSlotIndex < 5) {
            this.activeSlotIndex++;
          }
          if (this.verificationCode.length === 6) {
            this.verifyCode();
          }
        }
    }
    this.otpInput.nativeElement.value = this.verificationCode;
    this.setInputCursor(this.activeSlotIndex);
  }
  onSlotClick(index) {
    this.activeSlotIndex = index;
    this.otpInput.nativeElement.focus();
    this.setInputCursor(index);
  }
  setInputCursor(position) {
    requestAnimationFrame(() => {
      this.otpInput.nativeElement.setSelectionRange(position, position);
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.otpInput.nativeElement.focus();
    }, 0);
  }
  verifyCode() {
    return __async(this, null, function* () {
      var _a, _b, _c;
      if (this.verificationCode.length !== 6)
        return;
      const loading = yield this.loadingController.create({
        message: this.translateService.instant("verify_phone.verifying")
      });
      try {
        yield loading.present();
        yield confirmUserAttribute({
          userAttributeKey: "phone_number",
          confirmationCode: this.verificationCode
        });
        yield new Promise((resolve, reject) => {
          this.cyclistService.confirmCyclist().subscribe({
            next: () => {
              const cyclistState2 = this.accountService.cyclistState();
              if ("cyclist" in cyclistState2) {
                const updatedCyclist = __spreadProps(__spreadValues({}, cyclistState2.cyclist), {
                  status: "active"
                });
                this.accountService.checkCyclistAccount(updatedCyclist);
                if (this.accountService.hasBlockedReason("Account not confirmed")) {
                  this.accountService.removeBlockedReason("Account not confirmed");
                }
              }
              resolve();
            },
            error: reject
          });
        });
        loading.message = this.translateService.instant("verify_phone.confirming_cyclist");
        const cyclistState = this.accountService.cyclistState();
        if ("cyclist" in cyclistState && (cyclistState.cyclist.role == "guest" || ((_c = (_b = (_a = cyclistState.cyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]) == null ? void 0 : _c.role) == "guest")) {
          yield loading.dismiss();
          yield this.router.navigate(["/account/settings/cgu"], {
            queryParams: { nextUrl: "/renting" },
            replaceUrl: true
          });
          return;
        }
        yield loading.dismiss();
        if (yield this.subscriptionProcess.hasForfaitSelected()) {
          const payload = yield this.subscriptionProcess.getCreateAbonnementPayload();
          if (payload) {
            yield this.createAbonnement(payload);
            yield this.subscriptionProcess.clearProcess();
          }
          yield this.router.navigate(["/abo-congrats"]);
        } else {
          const process = yield firstValueFrom(this.subscriptionProcess.getCurrentProcess());
          if (process == null ? void 0 : process.reduction) {
            yield this.walletService.applyCodePromo(process.reduction);
          }
          yield this.subscriptionProcess.clearProcess();
          yield this.router.navigate(["/abo-congrats"]);
        }
      } catch (error) {
        yield loading.dismiss();
        this.errorHandler.handleError(error);
      }
    });
  }
  createAbonnement(payload) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translate.instant("subscription.creation.loading")
      });
      yield loading.present();
      yield this.AbonnementWrapperService.createAbonnement(payload).finally(() => __async(this, null, function* () {
        yield loading.dismiss();
      }));
    });
  }
  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
};
_VerifyPhonePage.\u0275fac = function VerifyPhonePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VerifyPhonePage)(\u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(CyclistsService), \u0275\u0275directiveInject(AbonnementWrapperService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SubscriptionProcessService), \u0275\u0275directiveInject(WalletService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_VerifyPhonePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyPhonePage, selectors: [["app-verify-phone"]], viewQuery: function VerifyPhonePage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.otpInput = _t.first);
  }
}, decls: 33, vars: 27, consts: [["otpInput", ""], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], [1, "ecl-otp-container"], ["type", "text", "inputmode", "numeric", "autocomplete", "one-time-code", 1, "ecl-otp-input", 3, "input", "keydown", "value"], [1, "ion-text-center"], [1, "ion-justify-content-center", "ion-align-items-center", 2, "display", "inline-flex"], [1, "ion-align-items-center", 2, "display", "flex", "gap", "4px"], ["class", "ecl-otp-slot ion-align-items-center ion-justify-content-center", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "ion-margin-top"], [3, "click"], [4, "ngIf"], [1, "ecl-otp-slot", "ion-align-items-center", "ion-justify-content-center", 3, "click"], ["class", "ecl-otp-caret", 4, "ngIf"], [1, "ecl-otp-caret"]], template: function VerifyPhonePage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "ion-row", 2)(3, "ion-col", 3)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 4)(11, "input", 5, 0);
    \u0275\u0275listener("input", function VerifyPhonePage_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onInput($event));
    })("keydown", function VerifyPhonePage_Template_input_keydown_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onKeyDown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 6)(14, "div", 7)(15, "div", 8);
    \u0275\u0275template(16, VerifyPhonePage_div_16_Template, 4, 4, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 8);
    \u0275\u0275template(18, VerifyPhonePage_div_18_Template, 4, 4, "div", 9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "p", 10);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "a", 11);
    \u0275\u0275listener("click", function VerifyPhonePage_Template_a_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.sendVerificationCode());
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275template(25, VerifyPhonePage_span_25_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275element(29, "br");
    \u0275\u0275elementStart(30, "a", 11);
    \u0275\u0275listener("click", function VerifyPhonePage_Template_a_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteAccount());
    });
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 12, "verify_phone.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 14, "verify_phone.instructions", \u0275\u0275pureFunction1(25, _c1, ctx.userPhoneNumber)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx.verificationCode);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.slots.slice(0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.slots.slice(3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 17, "verify_phone.resend_code"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", !ctx.allowVerificationCodeResend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 19, "verify_phone.resend_code_link"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.allowVerificationCodeResend);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 21, "verify_phone.phone_error"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 23, "verify_phone.signup_again"), " ");
  }
}, dependencies: [
  IonicModule,
  IonCol,
  IonContent,
  IonRow,
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  TranslateModule,
  TranslatePipe,
  HeaderComponent,
  RouterModule
], styles: ["\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n}\na.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n/*# sourceMappingURL=verify-phone.page.css.map */"] });
var VerifyPhonePage = _VerifyPhonePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifyPhonePage, [{
    type: Component,
    args: [{ selector: "app-verify-phone", imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      TranslateModule,
      HeaderComponent,
      RouterModule
    ], template: `<app-header></app-header>
<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <h2>{{ 'verify_phone.subtitle' | translate }}</h2>
      <p>
        {{ 'verify_phone.instructions' | translate: { phone: userPhoneNumber }
        }}
      </p>

      <div class="ecl-otp-container">
        <!-- Hidden actual input -->
        <input
          #otpInput
          type="text"
          inputmode="numeric"
          autocomplete="one-time-code"
          class="ecl-otp-input"
          [value]="verificationCode"
          (input)="onInput($event)"
          (keydown)="onKeyDown($event)"
        />

        <!-- Visual slots -->
        <div class="ion-text-center">
          <div
            class="ion-justify-content-center ion-align-items-center"
            style="display: inline-flex"
          >
            <!-- First group -->
            <div class="ion-align-items-center" style="display: flex; gap: 4px">
              <div
                *ngFor="let slot of slots.slice(0, 3); let i = index"
                class="ecl-otp-slot ion-align-items-center ion-justify-content-center"
                [class.active]="i === activeSlotIndex"
                (click)="onSlotClick(i)"
              >
                <div>{{ slot }}</div>
                <div *ngIf="i === activeSlotIndex" class="ecl-otp-caret"></div>
              </div>
            </div>
            <!-- Second group -->
            <div class="ion-align-items-center" style="display: flex; gap: 4px">
              <div
                *ngFor="let slot of slots.slice(3); let i = index"
                class="ecl-otp-slot ion-align-items-center ion-justify-content-center"
                [class.active]="i + 3 === activeSlotIndex"
                (click)="onSlotClick(i + 3)"
              >
                <div>{{ slot }}</div>
                <div
                  *ngIf="i + 3 === activeSlotIndex"
                  class="ecl-otp-caret"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="ion-margin-top">
        {{ 'verify_phone.resend_code' | translate }}
        <a
          [class.disabled]="!allowVerificationCodeResend"
          (click)="sendVerificationCode()"
        >
          {{ 'verify_phone.resend_code_link' | translate }}
          <span *ngIf="!allowVerificationCodeResend">
            ({{ verificationResendTimer }}s)
          </span>
        </a>
      </p>

      <p>
        {{ 'verify_phone.phone_error' | translate }}
        <br />
        <a (click)="deleteAccount()">
          {{ 'verify_phone.signup_again' | translate }}
        </a>
      </p>
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/auth/verify-phone/verify-phone.page.scss */\na {\n  cursor: pointer;\n  text-decoration: underline;\n}\na.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n/*# sourceMappingURL=verify-phone.page.css.map */\n"] }]
  }], () => [{ type: LoadingController }, { type: TranslateService }, { type: LoadingController }, { type: TranslateService }, { type: CyclistsService }, { type: AbonnementWrapperService }, { type: Router }, { type: AccountService }, { type: AlertController }, { type: AuthService }, { type: SubscriptionProcessService }, { type: WalletService }, { type: ErrorHandlerService }], { otpInput: [{
    type: ViewChild,
    args: ["otpInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyPhonePage, { className: "VerifyPhonePage", filePath: "src/app/pages/auth/verify-phone/verify-phone.page.ts", lineNumber: 45 });
})();
export {
  VerifyPhonePage
};
//# sourceMappingURL=verify-phone.page-7W56QZ22.js.map
