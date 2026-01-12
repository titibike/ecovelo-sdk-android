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
  AuthService,
  Browser
} from "./chunk-7UN2TOGU.js";
import "./chunk-H4GUYJEZ.js";
import "./chunk-7NHGY2ON.js";
import "./chunk-YSCBVZBE.js";
import {
  AccountService,
  CyclistsService
} from "./chunk-5KPTYQ6O.js";
import "./chunk-FGJU3CJK.js";
import {
  environment
} from "./chunk-GFMHZGOY.js";
import {
  deleteUser,
  fetchUserAttributes
} from "./chunk-Z4RNZNYE.js";
import "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService,
  ToastService,
  ToastType
} from "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  ActivatedRoute,
  AlertController,
  ChangeDetectorRef,
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
  IonText,
  LoadingController,
  ModalController,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  ReactiveFormsModule,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  Validators,
  ViewChild,
  firstValueFrom,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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

// src/app/pages/auth/signup-minified/signup-minified.page.ts
var _c0 = ["phoneInput"];
function SignupMinifiedPage_ng_container_0_ng_container_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function SignupMinifiedPage_ng_container_0_ng_container_9_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCountryPage());
    });
    \u0275\u0275element(1, "img", 12);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.currentCountry.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentCountry.dial_code);
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_9_ion_text_8_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "error.phone_required"), " ");
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_9_ion_text_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 13);
    \u0275\u0275template(1, SignupMinifiedPage_ng_container_0_ng_container_9_ion_text_8_small_1_Template, 3, 3, "small", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.form.get("tel")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row", 4)(2, "ion-col", 5)(3, "ion-item", 7);
    \u0275\u0275template(4, SignupMinifiedPage_ng_container_0_ng_container_9_div_4_Template, 4, 2, "div", 8);
    \u0275\u0275elementStart(5, "ion-input", 9, 0);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ionChange", function SignupMinifiedPage_ng_container_0_ng_container_9_Template_ion_input_ionChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePhoneNumber($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SignupMinifiedPage_ng_container_0_ng_container_9_ion_text_8_Template, 2, 1, "ion-text", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.currentCountry);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(7, 3, "generic.phone_number"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.form.get("tel")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r1.form.get("tel")) == null ? null : tmp_5_0.invalid));
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_6_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "error.first_name_required"), " ");
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 13);
    \u0275\u0275template(1, SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_6_small_1_Template, 3, 3, "small", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_12_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "error.last_name_required"), " ");
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 13);
    \u0275\u0275template(1, SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_12_small_1_Template, 3, 3, "small", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row", 4)(2, "ion-col", 5)(3, "ion-item", 14);
    \u0275\u0275element(4, "ion-input", 15);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_6_Template, 2, 1, "ion-text", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-row", 4)(8, "ion-col", 5)(9, "ion-item", 14);
    \u0275\u0275element(10, "ion-input", 16);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_12_Template, 2, 1, "ion-text", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(5, 4, "generic.first_name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(11, 6, "generic.last_name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_5_0.invalid));
  }
}
function SignupMinifiedPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-header");
    \u0275\u0275elementStart(2, "ion-content", 2)(3, "form", 3);
    \u0275\u0275listener("ngSubmit", function SignupMinifiedPage_ng_container_0_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createUser());
    });
    \u0275\u0275elementStart(4, "ion-row", 4)(5, "ion-col", 5)(6, "h1");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, SignupMinifiedPage_ng_container_0_ng_container_9_Template, 9, 5, "ng-container", 1)(10, SignupMinifiedPage_ng_container_0_ng_container_10_Template, 13, 8, "ng-container", 1);
    \u0275\u0275elementStart(11, "ion-row", 4)(12, "ion-col", 5)(13, "ion-button", 6);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "signup.complete_profile"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.needsPhoneNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.needsName);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 8, "generic.continue"), " ");
  }
}
var _SignupMinifiedPage = class _SignupMinifiedPage {
  constructor(translateService, modalController, countryService, phoneService, router, changeDetectorRef, cyclistsService, storageService, loadingController, authService, route, accountService, toastService, alertController, errorHandler) {
    this.translateService = translateService;
    this.modalController = modalController;
    this.countryService = countryService;
    this.phoneService = phoneService;
    this.router = router;
    this.changeDetectorRef = changeDetectorRef;
    this.cyclistsService = cyclistsService;
    this.storageService = storageService;
    this.loadingController = loadingController;
    this.authService = authService;
    this.route = route;
    this.accountService = accountService;
    this.toastService = toastService;
    this.alertController = alertController;
    this.errorHandler = errorHandler;
    this.currentCountry = null;
    this.needsPhoneNumber = false;
    this.needsName = false;
    this.pageReady = false;
    this.form = new FormGroup({
      tel: new FormControl("", []),
      firstName: new FormControl("", []),
      lastName: new FormControl("", [])
    });
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      if (Capacitor.isNativePlatform()) {
        Browser.close();
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.route.queryParams.subscribe((params) => __async(this, null, function* () {
        const loader = yield this.loadingController.create({
          message: this.translateService.instant("generic.please_wait")
        });
        yield loader.present();
        if (params["session"]) {
          const sessionData = JSON.parse(decodeURIComponent(params["session"]));
          this.handleSessionData(sessionData);
          yield loader.dismiss();
        } else {
          this.toastService.createWithJustMessage(this.translateService.instant("error.signin_error"), ToastType.Error);
          yield this.authService.signOut();
          yield loader.dismiss();
        }
      }));
    });
  }
  handleSessionData(sessionData) {
    return __async(this, null, function* () {
      if (sessionData.idToken && sessionData.accessToken && sessionData.refreshToken) {
        yield this.authService.createSessionFromTokens({
          idToken: sessionData.idToken,
          accessToken: sessionData.accessToken,
          refreshToken: sessionData.refreshToken
        });
        const attributes = yield fetchUserAttributes();
        if (attributes.phone_number && attributes.email && (attributes.name || attributes.given_name && attributes.family_name)) {
          if (attributes["custom:user"]) {
            yield this.authService.checkAuthStatus(true);
            this.redirectUserBasedOnValidation();
          } else {
            yield this.createUser(attributes);
          }
        } else {
          this.initializeForm();
        }
      } else {
        this.toastService.createWithJustMessage(this.translateService.instant("error.signin_error"), ToastType.Error);
        yield this.authService.signOut();
      }
    });
  }
  initializeForm() {
    return __async(this, null, function* () {
      var _a, _b, _c, _d;
      try {
        const attributes = yield fetchUserAttributes();
        this.needsPhoneNumber = !attributes.phone_number;
        const hasGoogleName = !!attributes.name;
        const hasAppleNames = !!(attributes.given_name && attributes.family_name);
        this.needsName = !hasGoogleName && !hasAppleNames;
        if (Capacitor.isNativePlatform() && !this.needsName && !this.needsPhoneNumber) {
          location.reload();
        }
        this.pageReady = true;
        if (this.needsPhoneNumber) {
          (_a = this.form.get("tel")) == null ? void 0 : _a.setValidators([Validators.required]);
          const countries = yield this.countryService.getCountries();
          this.currentCountry = countries.find((x) => x.code === "FR") || null;
          if (this.currentCountry && ((_b = this.phoneInput) == null ? void 0 : _b.nativeElement)) {
            const placeHolder = yield this.phoneService.getPhoneNumberPattern(this.currentCountry);
            this.phoneInput.nativeElement.placeholder = placeHolder;
          }
        }
        if (this.needsName) {
          (_c = this.form.get("firstName")) == null ? void 0 : _c.setValidators([
            Validators.required,
            Validators.pattern(/^[A-Za-z\u00C0-\u00FF]+(?:[-\s][A-Za-z\u00C0-\u00FF]+)*$/)
          ]);
          (_d = this.form.get("lastName")) == null ? void 0 : _d.setValidators([
            Validators.required,
            Validators.pattern(/^[A-Za-z\u00C0-\u00FF]+(?:[-\s][A-Za-z\u00C0-\u00FF]+)*$/)
          ]);
        }
        this.program = yield this.storageService.get("program");
        this.form.updateValueAndValidity();
        this.changeDetectorRef.detectChanges();
      } catch (err) {
        this.errorHandler.handleError(err);
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
            const placeHolder = yield this.phoneService.getPhoneNumberPattern(this.currentCountry);
            this.phoneInput.nativeElement.placeholder = placeHolder;
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
  createUser(attributes) {
    return __async(this, null, function* () {
      var _a;
      if (this.form.valid) {
        const loading = yield this.loadingController.create({
          message: this.translateService.instant("generic.please_wait")
        });
        yield loading.present();
        try {
          if (!attributes) {
            attributes = yield fetchUserAttributes();
          }
          const userAttributes = {};
          if (this.needsPhoneNumber) {
            userAttributes.phone_number = ((_a = this.currentCountry) == null ? void 0 : _a.dial_code) + this.form.value.tel.replace(/[(),\-,\s]/g, "").replace(/^0+/, "");
          }
          if (this.needsName) {
            userAttributes.name = `${this.form.value.firstName} ${this.form.value.lastName}`.trim();
          }
          let fullName = attributes.name;
          if (!fullName && attributes.given_name && attributes.family_name) {
            fullName = `${attributes.given_name} ${attributes.family_name}`.trim();
          }
          if (this.needsName) {
            fullName = `${this.form.value.firstName} ${this.form.value.lastName}`.trim();
          }
          yield firstValueFrom(this.cyclistsService.createCyclist({
            program: environment.program,
            body: {
              email: this.ensureNonEmptyString(attributes.email, "Email"),
              cognito: this.ensureNonEmptyString(attributes.sub, "Cognito ID"),
              name: this.ensureNonEmptyString(fullName, "Name"),
              phone_number: this.ensureNonEmptyString(attributes.phone_number || userAttributes.phone_number, "Phone number"),
              role: "cyclist",
              program: environment.program
            }
          }));
          yield this.authService.checkAuthStatus(true);
          yield loading.dismiss();
          this.redirectUserBasedOnValidation();
        } catch (error) {
          yield loading.dismiss();
          if (error.error.title === "phone_number_already_used") {
            yield this.presentPhoneNumberAlreadyExistAlert();
          } else {
            this.presentGeneralErrorAlert(error);
          }
        }
      }
    });
  }
  presentPhoneNumberAlreadyExistAlert() {
    return __async(this, null, function* () {
      var _a;
      const phoneNumber = ((_a = this.currentCountry) == null ? void 0 : _a.dial_code) + this.form.value.tel.replace(/[(),\-,\s]/g, "").replace(/^0+/, "");
      const alert = yield this.alertController.create({
        header: this.translateService.instant("auth.existing_account.title"),
        message: this.translateService.instant("auth.existing_account.message"),
        buttons: [
          {
            text: this.translateService.instant("auth.existing_account.forgot_password"),
            handler: () => __async(this, null, function* () {
              try {
                yield deleteUser();
                this.router.navigate(["/enter-phone"]);
              } catch (error) {
                yield this.authService.signOut();
                this.router.navigate(["/enter-phone"]);
                throw error;
              }
            })
          },
          {
            text: this.translateService.instant("auth.existing_account.signin"),
            handler: () => __async(this, null, function* () {
              try {
                yield deleteUser();
                this.router.navigate(["/signin"], {
                  queryParams: { phone: phoneNumber }
                });
              } catch (error) {
                yield this.authService.signOut();
                this.router.navigate(["/signin"], {
                  queryParams: { phone: phoneNumber }
                });
                throw error;
              }
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  presentGeneralErrorAlert(error) {
    return __async(this, null, function* () {
      var _a, _b, _c;
      this.errorHandler.handleError(error);
      if (this.needsPhoneNumber) {
        (_a = this.form.get("tel")) == null ? void 0 : _a.reset();
      }
      if (this.needsName) {
        (_b = this.form.get("firstName")) == null ? void 0 : _b.reset();
        (_c = this.form.get("lastName")) == null ? void 0 : _c.reset();
      }
      const alert = yield this.alertController.create({
        header: this.translateService.instant("generic.error"),
        message: this.translateService.instant("generic.what_to_do"),
        buttons: [
          {
            text: this.translateService.instant("generic.close"),
            role: "cancel"
          },
          {
            text: this.translateService.instant("generic.go_to_home"),
            handler: () => __async(this, null, function* () {
              try {
                yield deleteUser();
                yield this.authService.signOut();
                this.router.navigate(["/signin"]);
              } catch (err) {
                console.error("Error during cleanup:", err);
                yield this.authService.signOut();
                this.router.navigate(["/signin"]);
              }
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  ensureNonEmptyString(value, fieldName) {
    if (value == null || value === "") {
      throw new Error(`${fieldName} is required but was not provided`);
    }
    return String(value);
  }
  redirectUserBasedOnValidation() {
    var _a, _b, _c;
    const cyclistState = this.accountService.cyclistState();
    if ("cyclist" in cyclistState && (cyclistState.cyclist.role == "guest" || ((_c = (_b = (_a = cyclistState.cyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]) == null ? void 0 : _c.role) == "guest")) {
      this.router.navigate(["/verify-phone"]);
      return;
    }
    if (cyclistState.state === "active") {
      this.router.navigate(["/map"]);
    } else if (cyclistState.state === "unconfirmed") {
      if (this.accountService.hasMissingPaymentMethodOrCgu()) {
        this.router.navigate(["/payment-method"]);
      } else {
        this.router.navigate(["/verify-phone"]);
      }
    } else {
      this.router.navigate(["/signin"]);
    }
  }
};
_SignupMinifiedPage.\u0275fac = function SignupMinifiedPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignupMinifiedPage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(PhoneUtilsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(CyclistsService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ErrorHandlerService));
};
_SignupMinifiedPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupMinifiedPage, selectors: [["app-signup-minified"]], viewQuery: function SignupMinifiedPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5, ElementRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneInput = _t.first);
  }
}, decls: 1, vars: 1, consts: [["phoneInput", ""], [4, "ngIf"], [1, "ion-padding"], [3, "ngSubmit", "formGroup"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "6", "size-lg", "4"], ["type", "submit", "expand", "block", "shape", "round", 1, "ion-margin-top", 3, "disabled"], [1, "ion-no-padding"], ["class", "ecl-phone__container", 3, "click", 4, "ngIf"], ["type", "tel", "inputmode", "tel", "name", "tel", "formControlName", "tel", 3, "ionChange", "placeholder"], ["color", "danger", 4, "ngIf"], [1, "ecl-phone__container", 3, "click"], [3, "src"], ["color", "danger"], ["fill", "outline", 1, "ion-no-padding"], ["type", "text", "name", "firstName", "formControlName", "firstName", 3, "placeholder"], ["type", "text", "name", "lastName", "formControlName", "lastName", 3, "placeholder"]], template: function SignupMinifiedPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SignupMinifiedPage_ng_container_0_Template, 16, 10, "ng-container", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.pageReady);
  }
}, dependencies: [
  IonContent,
  IonInput,
  IonCol,
  IonText,
  HeaderComponent,
  IonRow,
  IonItem,
  IonButton,
  CommonModule,
  NgIf,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  TranslateModule,
  TranslatePipe
], encapsulation: 2 });
var SignupMinifiedPage = _SignupMinifiedPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupMinifiedPage, [{
    type: Component,
    args: [{ selector: "app-signup-minified", imports: [
      IonContent,
      IonInput,
      IonCol,
      IonText,
      HeaderComponent,
      IonRow,
      IonItem,
      IonButton,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule
    ], template: `<ng-container *ngIf="pageReady">
  <app-header></app-header>
  <ion-content class="ion-padding">
    <form (ngSubmit)="createUser()" [formGroup]="form">
      <ion-row class="ion-justify-content-center">
        <ion-col size="12" size-md="6" size-lg="4">
          <h1>{{ 'signup.complete_profile' | translate }}</h1>
        </ion-col>
      </ion-row>

      <ng-container *ngIf="needsPhoneNumber">
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
                formControlName="tel"
                (ionChange)="changePhoneNumber($event)"
              ></ion-input>
            </ion-item>
            <ion-text
              color="danger"
              *ngIf="form.get('tel')?.touched && form.get('tel')?.invalid"
            >
              <small *ngIf="form.get('tel')?.errors?.['required']">
                {{ 'error.phone_required' | translate }}
              </small>
            </ion-text>
          </ion-col>
        </ion-row>
      </ng-container>

      <ng-container *ngIf="needsName">
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-md="6" size-lg="4">
            <ion-item fill="outline" class="ion-no-padding">
              <ion-input
                placeholder="{{ 'generic.first_name' | translate }}"
                type="text"
                name="firstName"
                formControlName="firstName"
              ></ion-input>
            </ion-item>
            <ion-text
              color="danger"
              *ngIf="form.get('firstName')?.touched && form.get('firstName')?.invalid"
            >
              <small *ngIf="form.get('firstName')?.errors?.['required']">
                {{ 'error.first_name_required' | translate }}
              </small>
            </ion-text>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-md="6" size-lg="4">
            <ion-item fill="outline" class="ion-no-padding">
              <ion-input
                placeholder="{{ 'generic.last_name' | translate }}"
                type="text"
                name="lastName"
                formControlName="lastName"
              ></ion-input>
            </ion-item>
            <ion-text
              color="danger"
              *ngIf="form.get('lastName')?.touched && form.get('lastName')?.invalid"
            >
              <small *ngIf="form.get('lastName')?.errors?.['required']">
                {{ 'error.last_name_required' | translate }}
              </small>
            </ion-text>
          </ion-col>
        </ion-row>
      </ng-container>

      <ion-row class="ion-justify-content-center">
        <ion-col size="12" size-md="6" size-lg="4">
          <ion-button
            type="submit"
            expand="block"
            shape="round"
            [disabled]="form.invalid"
            class="ion-margin-top"
          >
            {{ 'generic.continue' | translate }}
          </ion-button>
        </ion-col>
      </ion-row>
    </form>
  </ion-content>
</ng-container>
` }]
  }], () => [{ type: TranslateService }, { type: ModalController }, { type: CountryService }, { type: PhoneUtilsService }, { type: Router }, { type: ChangeDetectorRef }, { type: CyclistsService }, { type: StorageService }, { type: LoadingController }, { type: AuthService }, { type: ActivatedRoute }, { type: AccountService }, { type: ToastService }, { type: AlertController }, { type: ErrorHandlerService }], { phoneInput: [{
    type: ViewChild,
    args: ["phoneInput", { read: ElementRef, static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupMinifiedPage, { className: "SignupMinifiedPage", filePath: "src/app/pages/auth/signup-minified/signup-minified.page.ts", lineNumber: 65 });
})();
export {
  SignupMinifiedPage
};
//# sourceMappingURL=signup-minified.page-F666RTUW.js.map
