import {
  CountriesComponent,
  CountryService,
  PhoneUtilsService
} from "./chunk-FO7J3SXZ.js";
import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-7GZOXTNY.js";
import {
  RecaptchaService
} from "./chunk-RYICOSCB.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  resetPassword
} from "./chunk-Z4RNZNYE.js";
import "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService,
  ToastService,
  ToastType
} from "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  ElementRef,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
  IonRow,
  LoadingController,
  ModalController,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  ReactiveFormsModule,
  RequiredValidator,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  Validators,
  ViewChild,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
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

// src/app/pages/auth/reset-password/enter-phone/enter-phone.page.ts
var _c0 = ["phoneInput"];
function EnterPhonePage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function EnterPhonePage_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCountryPage());
    });
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.currentCountry.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.currentCountry.dial_code);
  }
}
var _EnterPhonePage = class _EnterPhonePage {
  constructor(translateService, modalController, countryService, router, loadingCtrl, toastService, phoneService, recaptchaService, errorHandler) {
    this.translateService = translateService;
    this.modalController = modalController;
    this.countryService = countryService;
    this.router = router;
    this.loadingCtrl = loadingCtrl;
    this.toastService = toastService;
    this.phoneService = phoneService;
    this.recaptchaService = recaptchaService;
    this.errorHandler = errorHandler;
    this.currentCountry = null;
    this.form = new FormGroup({
      tel: new FormControl("", Validators.required)
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        const countries = yield this.countryService.getCountries();
        this.currentCountry = countries.find((x) => x.code === "FR") || null;
        if (this.currentCountry) {
          const placeHolder = yield this.phoneService.getPhoneNumberPattern(this.currentCountry);
          this.phoneInput.nativeElement.placeholder = placeHolder;
        }
        yield this.recaptchaService.loadRecaptcha();
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    });
  }
  ngOnDestroy() {
    this.recaptchaService.unloadRecaptcha();
  }
  openCountryPage() {
    return __async(this, null, function* () {
      const modal = yield this.modalController.create({
        component: CountriesComponent,
        componentProps: { currentPosition: "FR" },
        initialBreakpoint: 0.75,
        breakpoints: [0, 0.75]
      });
      modal.onDidDismiss().then((data) => __async(this, null, function* () {
        var _a;
        if ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.selectedCountry) {
          this.currentCountry = data.data.selectedCountry;
          this.form.controls["tel"].setValue("");
          if (this.currentCountry) {
            try {
              const placeHolder = yield this.phoneService.getPhoneNumberPattern(this.currentCountry);
              this.phoneInput.nativeElement.placeholder = placeHolder;
            } catch {
              console.warn("No placeholder found");
              this.phoneInput.nativeElement.placeholder = this.translateService.instant("generic.phone_number");
            }
          }
        }
      }));
      yield modal.present();
    });
  }
  changePhoneNumber(event) {
    const inputElement = event.target;
    const inputValue = inputElement.value;
    if (this.currentCountry) {
      const numOutput = this.phoneService.formatPhoneNumber(inputValue, this.currentCountry);
      inputElement.value = inputValue.startsWith("0") ? inputValue.substring(1) : numOutput;
    }
  }
  sendResetCode() {
    return __async(this, null, function* () {
      var _a;
      if (!this.form.controls["tel"].value.trim()) {
        this.toastService.createWithJustMessage(this.translateService.instant("error.phone_required"), ToastType.Error);
        return;
      }
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("generic.please_wait")
      });
      yield loading.present();
      const phone = ((_a = this.currentCountry) == null ? void 0 : _a.dial_code) + this.form.value.tel.replace(/[(),\-,\s]/g, "").replace(/^0+/, "");
      try {
        const token = yield this.recaptchaService.executeRecaptcha("forgotPassword");
        if (!token) {
          throw new Error("Token is null");
        }
        const result = yield resetPassword({
          username: phone,
          options: {
            clientMetadata: {
              recaptchaToken: token,
              program: environment.program
            }
          }
        });
        if (result) {
          this.toastService.createWithJustMessage(this.translateService.instant("reset_password.code_sent"), ToastType.Success);
          this.router.navigate(["/confirm-code"], { state: { phone } });
        }
      } catch (error) {
        this.errorHandler.handleError(error);
      } finally {
        yield loading.dismiss();
      }
    });
  }
};
_EnterPhonePage.\u0275fac = function EnterPhonePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EnterPhonePage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(PhoneUtilsService), \u0275\u0275directiveInject(RecaptchaService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_EnterPhonePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnterPhonePage, selectors: [["app-enter-phone"]], viewQuery: function EnterPhonePage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7, ElementRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneInput = _t.first);
  }
}, decls: 20, vars: 12, consts: [["phoneInput", ""], [1, "ion-padding"], [3, "ngSubmit", "formGroup"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "6", "size-lg", "4"], [1, "ion-no-padding"], ["class", "ecl-phone__container", 3, "click", 4, "ngIf"], ["type", "tel", "inputmode", "tel", "name", "tel", "required", "", "formControlName", "tel", 3, "ionChange", "placeholder"], ["type", "submit", "expand", "block", "shape", "round", 1, "ion-margin-top", "ecl-btn--shadow", 3, "disabled"], [1, "ecl-phone__container", 3, "click"], [3, "src"]], template: function EnterPhonePage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "form", 2);
    \u0275\u0275listener("ngSubmit", function EnterPhonePage_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.sendResetCode());
    });
    \u0275\u0275elementStart(3, "ion-row", 3)(4, "ion-col", 4)(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-row", 3)(9, "ion-col", 4)(10, "ion-item", 5);
    \u0275\u0275template(11, EnterPhonePage_div_11_Template, 4, 2, "div", 6);
    \u0275\u0275elementStart(12, "ion-input", 7, 0);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("ionChange", function EnterPhonePage_Template_ion_input_ionChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.changePhoneNumber($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "ion-row", 3)(16, "ion-col", 4)(17, "ion-button", 8);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "reset_password.title"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.currentCountry);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(14, 8, "generic.phone_number"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 10, "reset_password.send_code"), " ");
  }
}, dependencies: [
  IonContent,
  IonInput,
  IonCol,
  IonRow,
  IonItem,
  IonButton,
  CommonModule,
  NgIf,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  TranslateModule,
  TranslatePipe,
  HeaderComponent
], encapsulation: 2 });
var EnterPhonePage = _EnterPhonePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnterPhonePage, [{
    type: Component,
    args: [{ selector: "app-enter-phone", imports: [
      IonContent,
      IonInput,
      IonCol,
      IonRow,
      IonItem,
      IonButton,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule,
      HeaderComponent
    ], template: `<app-header></app-header>
<ion-content class="ion-padding">
  <form (ngSubmit)="sendResetCode()" [formGroup]="form">
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <h1>{{ 'reset_password.title' | translate }}</h1>
      </ion-col>
    </ion-row>
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-item class="ion-no-padding">
          <div
            class="ecl-phone__container"
            *ngIf="currentCountry"
            (click)="openCountryPage()"
          >
            <img [src]="currentCountry.img" />
            <span>{{ currentCountry.dial_code }}</span>
          </div>
          <ion-input
            #phoneInput
            placeholder="{{ 'generic.phone_number' | translate }}"
            type="tel"
            inputmode="tel"
            name="tel"
            required
            formControlName="tel"
            (ionChange)="changePhoneNumber($event)"
          ></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-button
          type="submit"
          expand="block"
          shape="round"
          [disabled]="form.invalid"
          class="ion-margin-top ecl-btn--shadow"
        >
          {{ 'reset_password.send_code' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
  </form>
</ion-content>
` }]
  }], () => [{ type: TranslateService }, { type: ModalController }, { type: CountryService }, { type: Router }, { type: LoadingController }, { type: ToastService }, { type: PhoneUtilsService }, { type: RecaptchaService }, { type: ErrorHandlerService }], { phoneInput: [{
    type: ViewChild,
    args: ["phoneInput", { read: ElementRef, static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnterPhonePage, { className: "EnterPhonePage", filePath: "src/app/pages/auth/reset-password/enter-phone/enter-phone.page.ts", lineNumber: 59 });
})();
export {
  EnterPhonePage
};
//# sourceMappingURL=enter-phone.page-UVEB44IT.js.map
