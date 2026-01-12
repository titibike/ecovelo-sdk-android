import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-7GZOXTNY.js";
import {
  confirmResetPassword
} from "./chunk-Z4RNZNYE.js";
import {
  addIcons,
  eyeOutline
} from "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService,
  ToastService,
  ToastType
} from "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonRow,
  IonText,
  LoadingController,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  ReactiveFormsModule,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ViewChild,
  ViewChildren,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-UANRONUE.js";
import "./chunk-JBNXL77H.js";
import "./chunk-KQEJHESJ.js";
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

// src/app/pages/auth/reset-password/confirm-code/confirm-code.page.ts
var _c0 = ["otpInput"];
var _c1 = ["codeInput"];
function ConfirmCodePage_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 18);
  }
}
function ConfirmCodePage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function ConfirmCodePage_div_18_Template_div_click_0_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSlotClick(i_r3));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConfirmCodePage_div_18_div_3_Template, 1, 0, "div", 17);
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
function ConfirmCodePage_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 18);
  }
}
function ConfirmCodePage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function ConfirmCodePage_div_20_Template_div_click_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSlotClick(i_r7 + 3));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConfirmCodePage_div_20_div_3_Template, 1, 0, "div", 17);
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
function ConfirmCodePage_ion_row_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 3)(2, "p")(3, "ion-text", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "confirm_code.err_missing_code"));
  }
}
function ConfirmCodePage_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 3)(2, "p")(3, "ion-text", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "confirm_code.err_password_length"));
  }
}
function ConfirmCodePage_ion_row_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 3)(2, "p")(3, "ion-text", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "confirm_code.err_different_password"));
  }
}
var _ConfirmCodePage = class _ConfirmCodePage {
  constructor(translateService, router, loadingCtrl, toastService, errorHandler) {
    var _a, _b;
    this.translateService = translateService;
    this.router = router;
    this.loadingCtrl = loadingCtrl;
    this.toastService = toastService;
    this.errorHandler = errorHandler;
    this.phone = "";
    this.verificationDigits = [];
    this.verificationCode = "";
    this.password = "";
    this.confirmPassword = "";
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.slots = new Array(6).fill("");
    this.activeSlotIndex = 0;
    addIcons({ eyeOutline });
    const navigation = this.router.getCurrentNavigation();
    this.phone = ((_b = (_a = navigation == null ? void 0 : navigation.extras) == null ? void 0 : _a.state) == null ? void 0 : _b["phone"]) || this.phone;
  }
  ngOnInit() {
    if (!this.phone) {
      this.router.navigate(["/enter-phone"]);
    }
  }
  onPaste(event) {
    var _a;
    event.preventDefault();
    const pastedText = (_a = event.clipboardData) == null ? void 0 : _a.getData("text");
    if (pastedText) {
      const digits = pastedText.slice(0, 6).split("");
      digits.forEach((digit, index) => {
        if (index < 6) {
          this.verificationDigits[index] = digit;
        }
      });
      this.verificationCode = this.verificationDigits.join("");
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  confirmCode() {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("generic.please_wait")
      });
      yield loading.present();
      yield confirmResetPassword({
        username: this.phone,
        confirmationCode: this.verificationCode,
        newPassword: this.password
      }).then(() => {
        loading.dismiss();
        this.toastService.createWithJustMessage(this.translateService.instant("confirm_code.success"), ToastType.Success);
        this.router.navigate(["/signin"], {
          state: { phone: this.phone }
        });
      }).catch((error) => {
        this.errorHandler.handleError(error);
        loading.dismiss();
      });
    });
  }
  onInput(event) {
    const input = event.target;
    const value = input.value.replace(/[^0-9]/g, "");
    if (value.length === 6) {
      this.slots = value.split("");
      this.verificationCode = value;
      this.activeSlotIndex = 5;
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
};
_ConfirmCodePage.\u0275fac = function ConfirmCodePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmCodePage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_ConfirmCodePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmCodePage, selectors: [["app-confirm-code"]], viewQuery: function ConfirmCodePage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
    \u0275\u0275viewQuery(_c1, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.otpInput = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.codeInputs = _t);
  }
}, decls: 39, vars: 26, consts: [["otpInput", ""], [1, "ion-padding"], [1, "ion-justify-content-center", "ion-margin-horizontal"], ["size", "12", "size-md", "6", "size-lg", "4"], [1, "ion-justify-content-center"], [1, "ecl-otp-container"], ["type", "text", "inputmode", "numeric", "autocomplete", "one-time-code", 1, "ecl-otp-input", 3, "input", "keydown", "value"], [1, "ion-text-center"], [1, "ion-justify-content-center", "ion-align-items-center", 2, "display", "inline-flex"], [1, "ion-align-items-center", 2, "display", "flex", "gap", "4px"], ["class", "ecl-otp-slot ion-align-items-center ion-justify-content-center", 3, "active", "click", 4, "ngFor", "ngForOf"], ["labelPlacement", "floating", "placeholder", "********", 3, "ngModelChange", "type", "ngModel", "label"], ["fill", "clear", "slot", "end", "aria-label", "Show/hide", 3, "click"], ["slot", "icon-only", "name", "eye-outline", "aria-hidden", "true"], ["class", "ion-justify-content-center ion-margin-horizontal", 4, "ngIf"], ["type", "submit", "expand", "block", "shape", "round", 1, "ion-margin-top", "ecl-btn--shadow", 3, "click", "disabled"], [1, "ecl-otp-slot", "ion-align-items-center", "ion-justify-content-center", 3, "click"], ["class", "ecl-otp-caret", 4, "ngIf"], [1, "ecl-otp-caret"], ["color", "danger"]], template: function ConfirmCodePage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "ion-row", 2)(3, "ion-col", 3)(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ion-row", 4)(11, "ion-col", 3)(12, "div", 5)(13, "input", 6, 0);
    \u0275\u0275listener("input", function ConfirmCodePage_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onInput($event));
    })("keydown", function ConfirmCodePage_Template_input_keydown_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onKeyDown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "div", 9);
    \u0275\u0275template(18, ConfirmCodePage_div_18_Template, 4, 4, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 9);
    \u0275\u0275template(20, ConfirmCodePage_div_20_Template, 4, 4, "div", 10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "ion-item")(22, "ion-input", 11);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ConfirmCodePage_Template_ion_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "ion-button", 12);
    \u0275\u0275listener("click", function ConfirmCodePage_Template_ion_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.togglePasswordVisibility());
    });
    \u0275\u0275element(25, "ion-icon", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "ion-item")(27, "ion-input", 11);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ConfirmCodePage_Template_ion_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "ion-button", 12);
    \u0275\u0275listener("click", function ConfirmCodePage_Template_ion_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleConfirmPasswordVisibility());
    });
    \u0275\u0275element(30, "ion-icon", 13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(31, ConfirmCodePage_ion_row_31_Template, 6, 3, "ion-row", 14)(32, ConfirmCodePage_ion_row_32_Template, 6, 3, "ion-row", 14)(33, ConfirmCodePage_ion_row_33_Template, 6, 3, "ion-row", 14);
    \u0275\u0275elementStart(34, "ion-row", 2)(35, "ion-col", 3)(36, "ion-button", 15);
    \u0275\u0275listener("click", function ConfirmCodePage_Template_ion_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.confirmCode());
    });
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 16, "confirm_code.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 18, "confirm_code.enter_code"));
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx.verificationCode);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.slots.slice(0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.slots.slice(3));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(23, 20, "confirm_code.new_password"));
    \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx.password);
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(28, 22, "confirm_code.confirm_password"));
    \u0275\u0275property("type", ctx.showConfirmPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx.confirmPassword);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.password && ctx.confirmPassword && !ctx.verificationCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.password && ctx.confirmPassword && (ctx.password.length < 6 || ctx.confirmPassword.length < 6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.password && ctx.confirmPassword && ctx.password !== ctx.confirmPassword);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.password || !ctx.confirmPassword || ctx.password !== ctx.confirmPassword || !ctx.verificationCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 24, "confirm_code.change_password"), " ");
  }
}, dependencies: [
  IonContent,
  IonInput,
  IonCol,
  IonText,
  IonRow,
  IonItem,
  IonButton,
  IonIcon,
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  TranslateModule,
  TranslatePipe,
  HeaderComponent
], encapsulation: 2 });
var ConfirmCodePage = _ConfirmCodePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmCodePage, [{
    type: Component,
    args: [{ selector: "app-confirm-code", imports: [
      IonContent,
      IonInput,
      IonCol,
      IonText,
      IonRow,
      IonItem,
      IonButton,
      IonIcon,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule,
      HeaderComponent
    ], template: `<app-header></app-header>
<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center ion-margin-horizontal">
    <ion-col size="12" size-md="6" size-lg="4">
      <h1>{{ 'confirm_code.title' | translate }}</h1>
      <p>{{ 'confirm_code.enter_code' | translate }}</p>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="6" size-lg="4">
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

      <!-- Rest of your form -->
      <ion-item>
        <ion-input
          [type]="showPassword ? 'text' : 'password'"
          labelPlacement="floating"
          [(ngModel)]="password"
          label="{{ 'confirm_code.new_password' | translate }}"
          placeholder="********"
        >
          <ion-button
            fill="clear"
            slot="end"
            aria-label="Show/hide"
            (click)="togglePasswordVisibility()"
          >
            <ion-icon
              slot="icon-only"
              name="eye-outline"
              aria-hidden="true"
            ></ion-icon> </ion-button></ion-input
      ></ion-item>
      <ion-item>
        <ion-input
          [type]="showConfirmPassword ? 'text' : 'password'"
          labelPlacement="floating"
          [(ngModel)]="confirmPassword"
          label="{{ 'confirm_code.confirm_password' | translate }}"
          placeholder="********"
        >
          <ion-button
            fill="clear"
            slot="end"
            aria-label="Show/hide"
            (click)="toggleConfirmPasswordVisibility()"
          >
            <ion-icon
              slot="icon-only"
              name="eye-outline"
              aria-hidden="true"
            ></ion-icon> </ion-button></ion-input
      ></ion-item>
    </ion-col>
  </ion-row>
  <ion-row
    class="ion-justify-content-center ion-margin-horizontal"
    *ngIf="password && confirmPassword && !verificationCode"
  >
    <ion-col size="12" size-md="6" size-lg="4">
      <p>
        <ion-text color="danger"
          >{{ 'confirm_code.err_missing_code' | translate }}</ion-text
        >
      </p>
    </ion-col>
  </ion-row>
  <ion-row
    class="ion-justify-content-center ion-margin-horizontal"
    *ngIf="password && confirmPassword && (password.length < 6 || confirmPassword.length < 6)"
  >
    <ion-col size="12" size-md="6" size-lg="4">
      <p>
        <ion-text color="danger"
          >{{ 'confirm_code.err_password_length' | translate }}</ion-text
        >
      </p>
    </ion-col>
  </ion-row>
  <ion-row
    class="ion-justify-content-center ion-margin-horizontal"
    *ngIf="password && confirmPassword && password !== confirmPassword"
  >
    <ion-col size="12" size-md="6" size-lg="4">
      <p>
        <ion-text color="danger"
          >{{ 'confirm_code.err_different_password' | translate }}</ion-text
        >
      </p>
    </ion-col>
  </ion-row>
  <ion-row class="ion-justify-content-center ion-margin-horizontal">
    <ion-col size="12" size-md="6" size-lg="4">
      <ion-button
        type="submit"
        expand="block"
        shape="round"
        class="ion-margin-top ecl-btn--shadow"
        [disabled]="(!password || !confirmPassword) || password !== confirmPassword || !verificationCode"
        (click)="confirmCode()"
      >
        {{ 'confirm_code.change_password' | translate }}
      </ion-button>
    </ion-col>
  </ion-row>
</ion-content>
` }]
  }], () => [{ type: TranslateService }, { type: Router }, { type: LoadingController }, { type: ToastService }, { type: ErrorHandlerService }], { codeInputs: [{
    type: ViewChildren,
    args: ["codeInput"]
  }], otpInput: [{
    type: ViewChild,
    args: ["otpInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmCodePage, { className: "ConfirmCodePage", filePath: "src/app/pages/auth/reset-password/confirm-code/confirm-code.page.ts", lineNumber: 54 });
})();
export {
  ConfirmCodePage
};
//# sourceMappingURL=confirm-code.page-JPXYL5ID.js.map
