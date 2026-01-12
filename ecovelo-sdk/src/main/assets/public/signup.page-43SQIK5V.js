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
} from "./chunk-7UN2TOGU.js";
import "./chunk-H4GUYJEZ.js";
import "./chunk-7NHGY2ON.js";
import "./chunk-YSCBVZBE.js";
import "./chunk-5KPTYQ6O.js";
import {
  RecaptchaService
} from "./chunk-FGJU3CJK.js";
import "./chunk-GFMHZGOY.js";
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

// src/app/pages/auth/signup/signup.page.ts
var _c0 = ["phoneInput"];
var _c1 = () => ["/signin"];
var _c2 = () => ["/map"];
function SignupPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function SignupPage_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCountryPage());
    });
    \u0275\u0275element(1, "img", 26);
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
function SignupPage_ion_text_15_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.phone_required"), " ");
  }
}
function SignupPage_ion_text_15_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.phone_invalid"), " ");
  }
}
function SignupPage_ion_text_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 27);
    \u0275\u0275template(1, SignupPage_ion_text_15_small_1_Template, 3, 3, "small", 28)(2, SignupPage_ion_text_15_small_2_Template, 3, 3, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.form.get("tel")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.form.get("tel")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function SignupPage_ion_text_21_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.email_required"), " ");
  }
}
function SignupPage_ion_text_21_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.email_invalid"), " ");
  }
}
function SignupPage_ion_text_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 27);
    \u0275\u0275template(1, SignupPage_ion_text_21_small_1_Template, 3, 3, "small", 28)(2, SignupPage_ion_text_21_small_2_Template, 3, 3, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.form.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.form.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function SignupPage_ion_text_27_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.first_name_required"), " ");
  }
}
function SignupPage_ion_text_27_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.no_special_characters"), " ");
  }
}
function SignupPage_ion_text_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 27);
    \u0275\u0275template(1, SignupPage_ion_text_27_small_1_Template, 3, 3, "small", 28)(2, SignupPage_ion_text_27_small_2_Template, 3, 3, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.form.get("first_name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.form.get("first_name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function SignupPage_ion_text_33_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.last_name_required"), " ");
  }
}
function SignupPage_ion_text_33_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.no_special_characters"), " ");
  }
}
function SignupPage_ion_text_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 27);
    \u0275\u0275template(1, SignupPage_ion_text_33_small_1_Template, 3, 3, "small", 28)(2, SignupPage_ion_text_33_small_2_Template, 3, 3, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.form.get("last_name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.form.get("last_name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function SignupPage_ion_text_40_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.password_required"), " ");
  }
}
function SignupPage_ion_text_40_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.password_length"), " ");
  }
}
function SignupPage_ion_text_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 27);
    \u0275\u0275template(1, SignupPage_ion_text_40_small_1_Template, 3, 3, "small", 28)(2, SignupPage_ion_text_40_small_2_Template, 3, 3, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.form.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.form.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
  }
}
var _SignupPage = class _SignupPage {
  constructor(translateService, modalController, countryService, authService, toastService, phoneService, recaptchaService, loadingCtrl) {
    this.translateService = translateService;
    this.modalController = modalController;
    this.countryService = countryService;
    this.authService = authService;
    this.toastService = toastService;
    this.phoneService = phoneService;
    this.recaptchaService = recaptchaService;
    this.loadingCtrl = loadingCtrl;
    this.phoneCodes = [];
    this.currentCountry = null;
    this.form = new FormGroup({
      first_name: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[A-Za-z\u00C0-\u00FF]+(?:[-\s][A-Za-z\u00C0-\u00FF]+)*\s*$/)
      ]),
      last_name: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[A-Za-z\u00C0-\u00FF]+(?:[-\s][A-Za-z\u00C0-\u00FF]+)*\s*$/)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
      ]),
      tel: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[0-9]).*$/)
      ])
    });
    addIcons({ logoGoogle, logoApple });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const countries = yield this.countryService.getCountries();
      this.currentCountry = countries.find((x) => x.code === "FR") || null;
      if (this.currentCountry) {
        const placeHolder = yield this.phoneService.getPhoneNumberPattern(this.currentCountry);
        this.phoneInput.nativeElement.placeholder = placeHolder;
      }
      yield this.recaptchaService.loadRecaptcha();
    });
  }
  ionViewWillLeave() {
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
              console.warn("Aucun placeholder trouv\xE9");
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
  signInWithSocialProvider(provider) {
    return __async(this, null, function* () {
      this.authService.signInWithSocialProvider(provider);
    });
  }
  signUp() {
    return __async(this, null, function* () {
      var _a;
      if (this.areFormFieldsEmpty()) {
        this.toastService.createWithJustMessage(this.translateService.instant("error.missing_credentials"), ToastType.Error);
        return;
      }
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("generic.loading")
      });
      yield loading.present();
      const user = {
        name: `${this.form.value.first_name.trim()} ${this.form.value.last_name.trim()}`,
        email: this.form.value.email,
        phone: ((_a = this.currentCountry) == null ? void 0 : _a.dial_code) + this.form.value.tel.replace(/[(),\-,\s]/g, "").replace(/^0+/, ""),
        password: this.form.value.password
      };
      this.authService.signUp(user).finally(() => __async(this, null, function* () {
        yield loading.dismiss();
      }));
    });
  }
  areFormFieldsEmpty() {
    return !(this.form.controls["first_name"].value.trim() && this.form.controls["last_name"].value.trim() && this.form.controls["email"].value.trim() && this.form.controls["tel"].value.trim() && this.form.controls["password"].value.trim());
  }
};
_SignupPage.\u0275fac = function SignupPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignupPage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(PhoneUtilsService), \u0275\u0275directiveInject(RecaptchaService), \u0275\u0275directiveInject(LoadingController));
};
_SignupPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupPage, selectors: [["app-signup"]], viewQuery: function SignupPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7, ElementRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneInput = _t.first);
  }
}, decls: 69, vars: 45, consts: [["phoneInput", ""], [1, "ion-padding"], [3, "ngSubmit", "formGroup"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "6", "size-lg", "4"], [1, "ion-no-padding"], ["class", "ecl-phone__container", 3, "click", 4, "ngIf"], ["type", "tel", "inputmode", "tel", "name", "tel", "required", "", "formControlName", "tel", 3, "ionChange", "placeholder"], ["color", "danger", 4, "ngIf"], ["fill", "outline", 1, "ion-no-padding"], ["type", "email", "name", "email", "formControlName", "email", "required", "", 3, "placeholder"], ["type", "text", "name", "first_name", "formControlName", "first_name", "required", "", 3, "placeholder"], ["type", "text", "name", "last_name", "formControlName", "last_name", "required", "", 3, "placeholder"], ["type", "password", "name", "password", "formControlName", "password", "required", "", 3, "placeholder"], ["slot", "end"], ["type", "submit", "expand", "block", "shape", "round", 1, "ion-margin-top", 3, "disabled"], [1, "ion-justify-content-center", "ion-margin-top"], ["size", "12", "size-md", "6", "size-lg", "4", 1, "ion-text-center"], ["replaceUrl", "true", 3, "routerLink"], [1, "ion-justify-content-center", "ion-padding-top"], ["expand", "block", "shape", "round", "color", "light", 3, "click"], ["name", "logo-apple", "slot", "start"], ["name", "logo-google", "slot", "start"], ["color", "medium", 1, "ion-text-center"], [3, "routerLink"], [1, "ecl-phone__container", 3, "click"], [3, "src"], ["color", "danger"], [4, "ngIf"]], template: function SignupPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "form", 2);
    \u0275\u0275listener("ngSubmit", function SignupPage_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.signUp());
    });
    \u0275\u0275elementStart(3, "ion-row", 3)(4, "ion-col", 4)(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-row", 3)(9, "ion-col", 4)(10, "ion-item", 5);
    \u0275\u0275template(11, SignupPage_div_11_Template, 4, 2, "div", 6);
    \u0275\u0275elementStart(12, "ion-input", 7, 0);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("ionChange", function SignupPage_Template_ion_input_ionChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.changePhoneNumber($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, SignupPage_ion_text_15_Template, 3, 2, "ion-text", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ion-row", 3)(17, "ion-col", 4)(18, "ion-item", 9);
    \u0275\u0275element(19, "ion-input", 10);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, SignupPage_ion_text_21_Template, 3, 2, "ion-text", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "ion-row", 3)(23, "ion-col", 4)(24, "ion-item", 9);
    \u0275\u0275element(25, "ion-input", 11);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, SignupPage_ion_text_27_Template, 3, 2, "ion-text", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "ion-row", 3)(29, "ion-col", 4)(30, "ion-item", 9);
    \u0275\u0275element(31, "ion-input", 12);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, SignupPage_ion_text_33_Template, 3, 2, "ion-text", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "ion-row", 3)(35, "ion-col", 4)(36, "ion-item", 9)(37, "ion-input", 13);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275element(39, "ion-input-password-toggle", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, SignupPage_ion_text_40_Template, 3, 2, "ion-text", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "ion-row", 3)(42, "ion-col", 4)(43, "ion-button", 15);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "ion-row", 16)(47, "ion-col", 17)(48, "ion-text")(49, "a", 18);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "ion-row", 19)(53, "ion-col", 4)(54, "ion-button", 20);
    \u0275\u0275listener("click", function SignupPage_Template_ion_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.signInWithSocialProvider("Apple"));
    });
    \u0275\u0275element(55, "ion-icon", 21);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "ion-row", 3)(59, "ion-col", 4)(60, "ion-button", 20);
    \u0275\u0275listener("click", function SignupPage_Template_ion_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.signInWithSocialProvider("Google"));
    });
    \u0275\u0275element(61, "ion-icon", 22);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "ion-text", 23)(65, "p")(66, "u", 24);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_13_0;
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 21, "signup.title"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.currentCountry);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(14, 23, "generic.phone_number"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.form.get("tel")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.form.get("tel")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(20, 25, "generic.email"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.form.get("email")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.form.get("email")) == null ? null : tmp_7_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(26, 27, "generic.first_name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.form.get("first_name")) == null ? null : tmp_9_0.touched) && ((tmp_9_0 = ctx.form.get("first_name")) == null ? null : tmp_9_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(32, 29, "generic.last_name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx.form.get("last_name")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx.form.get("last_name")) == null ? null : tmp_11_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(38, 31, "generic.password"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx.form.get("password")) == null ? null : tmp_13_0.touched) && ((tmp_13_0 = ctx.form.get("password")) == null ? null : tmp_13_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 33, "signup.title"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(43, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 35, "signup.signin"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 37, "signup.apple_signup"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 39, "signup.google_signup"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(44, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 41, "signup.skip_step"));
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
var SignupPage = _SignupPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupPage, [{
    type: Component,
    args: [{ selector: "app-signup", imports: [
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
  <form (ngSubmit)="signUp()" [formGroup]="form">
    <!-- TITRE -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <h1>{{ 'signup.title' | translate }}</h1>
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
        <!-- Message d'erreur pour le num\xE9ro de t\xE9l\xE9phone -->
        <ion-text
          color="danger"
          *ngIf="form.get('tel')?.touched && form.get('tel')?.invalid"
        >
          <small *ngIf="form.get('tel')?.errors?.['required']">
            {{ 'signup.phone_required' | translate }}
          </small>
          <small *ngIf="form.get('tel')?.errors?.['pattern']">
            {{ 'signup.phone_invalid' | translate }}
          </small>
        </ion-text>
      </ion-col>
    </ion-row>
    <!-- EMAIL_INPUT -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-item fill="outline" class="ion-no-padding">
          <ion-input
            placeholder="{{ 'generic.email' | translate }}"
            type="email"
            name="email"
            formControlName="email"
            required
          ></ion-input>
        </ion-item>
        <!-- Message d'erreur pour l'email -->
        <ion-text
          color="danger"
          *ngIf="form.get('email')?.touched && form.get('email')?.invalid"
        >
          <small *ngIf="form.get('email')?.errors?.['required']">
            {{ 'signup.email_required' | translate }}
          </small>
          <small *ngIf="form.get('email')?.errors?.['pattern']">
            {{ 'signup.email_invalid' | translate }}
          </small>
        </ion-text>
      </ion-col>
    </ion-row>
    <!-- FIRST_NAME_INPUT -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-item fill="outline" class="ion-no-padding">
          <ion-input
            placeholder="{{ 'generic.first_name' | translate }}"
            type="text"
            name="first_name"
            formControlName="first_name"
            required
          ></ion-input>
        </ion-item>
        <!-- Message d'erreur pour le pr\xE9nom -->
        <ion-text
          color="danger"
          *ngIf="form.get('first_name')?.touched && form.get('first_name')?.invalid"
        >
          <small *ngIf="form.get('first_name')?.errors?.['required']">
            {{ 'signup.first_name_required' | translate }}
          </small>
          <small *ngIf="form.get('first_name')?.errors?.['pattern']">
            {{ 'signup.no_special_characters' | translate }}
          </small>
        </ion-text>
      </ion-col>
    </ion-row>
    <!-- LAST_NAME_INPUT -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-item fill="outline" class="ion-no-padding">
          <ion-input
            placeholder="{{ 'generic.last_name' | translate }}"
            type="text"
            name="last_name"
            formControlName="last_name"
            required
          ></ion-input>
        </ion-item>
        <!-- Message d'erreur pour le nom de famille -->
        <ion-text
          color="danger"
          *ngIf="form.get('last_name')?.touched && form.get('last_name')?.invalid"
        >
          <small *ngIf="form.get('last_name')?.errors?.['required']">
            {{ 'signup.last_name_required' | translate }}
          </small>
          <small *ngIf="form.get('last_name')?.errors?.['pattern']">
            {{ 'signup.no_special_characters' | translate }}
          </small>
        </ion-text>
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
            <ion-input-password-toggle slot="end"></ion-input-password-toggle>
          </ion-input>
        </ion-item>
        <!-- Message d'erreur pour le mot de passe -->
        <ion-text
          color="danger"
          *ngIf="form.get('password')?.touched && form.get('password')?.invalid"
        >
          <small *ngIf="form.get('password')?.errors?.['required']">
            {{ 'signup.password_required' | translate }}
          </small>
          <small *ngIf="form.get('password')?.errors?.['minlength']">
            {{ 'signup.password_length' | translate }}
          </small>
        </ion-text>
      </ion-col>
    </ion-row>
    <!-- BOUTON_SIGNUP -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-button
          type="submit"
          expand="block"
          shape="round"
          [disabled]="form.invalid"
          class="ion-margin-top"
        >
          {{ 'signup.title' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
    <!-- SIGNIN_LINK -->
    <ion-row class="ion-justify-content-center ion-margin-top">
      <ion-col size="12" size-md="6" size-lg="4" class="ion-text-center">
        <ion-text>
          <a [routerLink]="['/signin']" replaceUrl="true"
            >{{ 'signup.signin' | translate }}</a
          >
        </ion-text>
      </ion-col>
    </ion-row>
    <!-- BOUTON_APPLE -->
    <ion-row class="ion-justify-content-center ion-padding-top">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-button
          expand="block"
          shape="round"
          color="light"
          (click)="signInWithSocialProvider('Apple')"
        >
          <ion-icon name="logo-apple" slot="start"></ion-icon>
          {{"signup.apple_signup" | translate}}
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
          (click)="signInWithSocialProvider('Google')"
        >
          <ion-icon name="logo-google" slot="start"></ion-icon>
          {{"signup.google_signup" | translate}}
        </ion-button>
      </ion-col>
    </ion-row>

    <!-- SKIP -->
    <ion-text color="medium" class="ion-text-center">
      <p>
        <u [routerLink]="['/map']">{{ 'signup.skip_step' | translate }}</u>
      </p>
    </ion-text>
  </form>
</ion-content>
` }]
  }], () => [{ type: TranslateService }, { type: ModalController }, { type: CountryService }, { type: AuthService }, { type: ToastService }, { type: PhoneUtilsService }, { type: RecaptchaService }, { type: LoadingController }], { phoneInput: [{
    type: ViewChild,
    args: ["phoneInput", { read: ElementRef, static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupPage, { className: "SignupPage", filePath: "src/app/pages/auth/signup/signup.page.ts", lineNumber: 59 });
})();
export {
  SignupPage
};
//# sourceMappingURL=signup.page-43SQIK5V.js.map
