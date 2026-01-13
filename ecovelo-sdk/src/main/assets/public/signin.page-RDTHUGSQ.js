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
  AuthService
} from "./chunk-RK7YL5P5.js";
import "./chunk-IBT2NAXJ.js";
import "./chunk-NHPV6IFO.js";
import "./chunk-YSCBVZBE.js";
import "./chunk-6J5UKKBN.js";
import "./chunk-RYICOSCB.js";
import "./chunk-FOJAXRYS.js";
import "./chunk-Z4RNZNYE.js";
import {
  addIcons,
  logoApple,
  logoGoogle
} from "./chunk-3E6DEK7U.js";
import {
  ToastService,
  ToastType
} from "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  ActivatedRoute,
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
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonRow,
  IonText,
  LoadingController,
  ModalController,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  ReactiveFormsModule,
  RequiredValidator,
  RouterLink,
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
  ɵɵpureFunction0,
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
  __async
} from "./chunk-UESUV5PM.js";

// src/app/pages/auth/signin/signin.page.ts
var _c0 = ["phoneInput"];
var _c1 = () => ["/enter-phone"];
var _c2 = () => ["/signup"];
var _c3 = () => ["/map"];
function SigninPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function SigninPage_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCountryPage());
    });
    \u0275\u0275element(1, "img", 21);
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
var _SigninPage = class _SigninPage {
  constructor(translateService, modalController, countryService, loadingController, route, authService, toastService, phoneService) {
    this.translateService = translateService;
    this.modalController = modalController;
    this.countryService = countryService;
    this.loadingController = loadingController;
    this.route = route;
    this.authService = authService;
    this.toastService = toastService;
    this.phoneService = phoneService;
    this.phoneCodes = [];
    this.currentCountry = null;
    this.form = new FormGroup({
      tel: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
    addIcons({ logoApple, logoGoogle });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        const countries = yield this.countryService.getCountries();
        this.currentCountry = countries.find((x) => x.code === "FR") || null;
        this.route.queryParams.subscribe((params) => {
          var _a, _b;
          if (params["phone"]) {
            const phoneNumber = params["phone"];
            const numberWithoutCode = phoneNumber.replace(((_a = this.currentCountry) == null ? void 0 : _a.dial_code) || "", "");
            this.form.controls["tel"].setValue(numberWithoutCode);
            if ((_b = this.phoneInput) == null ? void 0 : _b.nativeElement) {
              const formattedNumber = this.phoneService.formatPhoneNumber(numberWithoutCode, this.currentCountry);
              this.phoneInput.nativeElement.value = formattedNumber;
            }
          }
        });
        if (this.currentCountry) {
          const placeHolder = yield this.phoneService.getPhoneNumberPattern(this.currentCountry);
          this.phoneInput.nativeElement.placeholder = placeHolder;
        }
      } catch (err) {
        console.error("Erreur lors de la r\xE9cup\xE9ration des pays:", err);
      }
    });
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
              console.warn("Aucun placeholder trouv\xE9");
              this.phoneInput.nativeElement.placeholder = this.translateService.instant("GENERIC.phone_number");
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
  signIn() {
    return __async(this, null, function* () {
      var _a;
      if (!this.form.controls["tel"].value.trim() || !this.form.controls["password"].value.trim()) {
        this.toastService.createWithJustMessage(this.translateService.instant("error.missing_credentials"), ToastType.Error);
        return;
      }
      const loading = yield this.loadingController.create({
        message: this.translateService.instant("generic.please_wait")
      });
      yield loading.present();
      const phone = ((_a = this.currentCountry) == null ? void 0 : _a.dial_code) + this.form.value.tel.replace(/[(),\-,\s]/g, "").replace(/^0+/, "");
      const password = this.form.value.password;
      this.authService.signIn(phone, password).finally(() => {
        loading.dismiss();
      });
    });
  }
};
_SigninPage.\u0275fac = function SigninPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SigninPage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(PhoneUtilsService));
};
_SigninPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SigninPage, selectors: [["app-signin"]], viewQuery: function SigninPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7, ElementRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneInput = _t.first);
  }
}, decls: 59, vars: 39, consts: [["phoneInput", ""], [1, "ion-padding"], [3, "ngSubmit", "formGroup"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "6", "size-lg", "4"], [1, "ion-no-padding"], ["class", "ecl-phone__container", 3, "click", 4, "ngIf"], ["type", "tel", "inputmode", "tel", "name", "tel", "required", "", "formControlName", "tel", 3, "ionChange", "placeholder"], ["fill", "outline", 1, "ion-no-padding"], ["type", "password", "name", "password", "formControlName", "password", "required", "", 3, "placeholder"], ["slot", "end"], ["type", "submit", "shape", "round", "expand", "block", 3, "disabled"], [1, "ion-justify-content-center", "ion-margin-top"], ["size", "12", "size-md", "6", "size-lg", "4", 1, "ion-text-center"], [3, "routerLink"], ["replaceUrl", "true", 3, "routerLink"], ["expand", "block", "shape", "round", "color", "light", 3, "click"], ["name", "logo-apple", "slot", "start"], ["name", "logo-google", "slot", "start"], ["color", "medium", 1, "ion-text-center"], [1, "ecl-phone__container", 3, "click"], [3, "src"]], template: function SigninPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "form", 2);
    \u0275\u0275listener("ngSubmit", function SigninPage_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.signIn());
    });
    \u0275\u0275elementStart(3, "ion-row", 3)(4, "ion-col", 4)(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-row", 3)(9, "ion-col", 4)(10, "ion-item", 5);
    \u0275\u0275template(11, SigninPage_div_11_Template, 4, 2, "div", 6);
    \u0275\u0275elementStart(12, "ion-input", 7, 0);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("ionChange", function SigninPage_Template_ion_input_ionChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.changePhoneNumber($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "ion-row", 3)(16, "ion-col", 4)(17, "ion-item", 8)(18, "ion-input", 9);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275element(20, "ion-input-password-toggle", 10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "ion-row", 3)(22, "ion-col", 4)(23, "ion-button", 11);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "ion-row", 12)(27, "ion-col", 13)(28, "ion-text")(29, "a", 14);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "ion-row", 12)(33, "ion-col", 13)(34, "ion-text")(35, "a", 15);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "ion-row", 12)(39, "ion-col", 4)(40, "ion-button", 16);
    \u0275\u0275listener("click", function SigninPage_Template_ion_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.authService.signInWithSocialProvider("Apple"));
    });
    \u0275\u0275element(41, "ion-icon", 17);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "ion-row", 3)(45, "ion-col", 4)(46, "ion-button", 16);
    \u0275\u0275listener("click", function SigninPage_Template_ion_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.authService.signInWithSocialProvider("Google"));
    });
    \u0275\u0275element(47, "ion-icon", 18);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "ion-text", 19)(51, "p");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "ion-text", 19)(55, "p")(56, "u", 14);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 16, "signin.title"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.currentCountry);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(14, 18, "generic.phone_number"));
    \u0275\u0275advance(6);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(19, 20, "generic.password"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 22, "signin.title"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(36, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 24, "signin.forgot_password"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(37, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 26, "signin.signup"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 28, "signin.apple_signin"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 30, "signin.google_signin"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 32, "signin.or"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(38, _c3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 34, "signin.skip_step"));
  }
}, dependencies: [
  IonContent,
  IonInput,
  IonCol,
  IonText,
  IonRow,
  IonInputPasswordToggle,
  IonItem,
  IonIcon,
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
  HeaderComponent,
  RouterLink
], encapsulation: 2 });
var SigninPage = _SigninPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SigninPage, [{
    type: Component,
    args: [{ selector: "app-signin", imports: [
      IonContent,
      IonInput,
      IonCol,
      IonText,
      IonRow,
      IonInputPasswordToggle,
      IonItem,
      IonIcon,
      IonButton,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule,
      HeaderComponent,
      RouterLink
    ], template: `<app-header></app-header>
<ion-content class="ion-padding">
  <form (ngSubmit)="signIn()" [formGroup]="form">
    <!-- TITRE -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <h1>{{ 'signin.title' | translate }}</h1>
      </ion-col>
    </ion-row>
    <!-- PHONE_INPUT -->
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
    <!-- PASSWORD_INPUT -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-item fill="outline" class="ion-no-padding">
          <ion-input
            placeholder="{{ 'generic.password' | translate }}"
            type="password"
            name="password"
            formControlName="password"
            required
          >
            <ion-input-password-toggle slot="end"></ion-input-password-toggle
          ></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>
    <!-- BOUTON_LOGIN -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-button
          type="submit"
          shape="round"
          expand="block"
          [disabled]="form.invalid"
        >
          {{ 'signin.title' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
    <!-- MOT_DE_PASSE_OUBLIE -->

    <ion-row class="ion-justify-content-center ion-margin-top">
      <ion-col size="12" size-md="6" size-lg="4" class="ion-text-center">
        <ion-text>
          <a [routerLink]="['/enter-phone']">
            {{ 'signin.forgot_password' | translate }}</a
          >
        </ion-text>
      </ion-col>
    </ion-row>
    <!-- SIGNUP -->
    <ion-row class="ion-justify-content-center ion-margin-top">
      <ion-col size="12" size-md="6" size-lg="4" class="ion-text-center">
        <ion-text
          ><a [routerLink]="['/signup']" replaceUrl="true"
            >{{ 'signin.signup' | translate }}</a
          ></ion-text
        >
      </ion-col>
    </ion-row>
    <!-- BOUTON_APPLE -->
    <ion-row class="ion-justify-content-center ion-margin-top">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-button
          expand="block"
          shape="round"
          color="light"
          (click)="authService.signInWithSocialProvider('Apple')"
        >
          <ion-icon name="logo-apple" slot="start"></ion-icon>
          {{ 'signin.apple_signin' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
    <!-- BOUTON_GOOGLE -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-button
          expand="block"
          shape="round"
          color="light"
          (click)="authService.signInWithSocialProvider('Google')"
        >
          <ion-icon name="logo-google" slot="start"></ion-icon>
          {{ 'signin.google_signin' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
    <!-- "OU" -->
    <ion-text color="medium" class="ion-text-center">
      <p>{{ 'signin.or' | translate }}</p>
    </ion-text>
    <ion-text color="medium" class="ion-text-center">
      <p>
        <u [routerLink]="['/map']">{{ 'signin.skip_step' | translate }}</u>
      </p>
    </ion-text>
  </form>
</ion-content>
` }]
  }], () => [{ type: TranslateService }, { type: ModalController }, { type: CountryService }, { type: LoadingController }, { type: ActivatedRoute }, { type: AuthService }, { type: ToastService }, { type: PhoneUtilsService }], { phoneInput: [{
    type: ViewChild,
    args: ["phoneInput", { read: ElementRef, static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SigninPage, { className: "SigninPage", filePath: "src/app/pages/auth/signin/signin.page.ts", lineNumber: 58 });
})();
export {
  SigninPage
};
//# sourceMappingURL=signin.page-RDTHUGSQ.js.map
