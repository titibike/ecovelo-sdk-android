import {
  bootstrapLazy,
  promiseResolve
} from "./chunk-OSUYHBZK.js";
import {
  provideLottieOptions
} from "./chunk-UDDFHALT.js";
import {
  Stripe,
  provideNgxStripe
} from "./chunk-FFEUH5Q3.js";
import "./chunk-EYZBHAOK.js";
import "./chunk-XJX5O2E5.js";
import {
  CookiesService
} from "./chunk-PIJWGXLU.js";
import {
  InlineSVGModule
} from "./chunk-ZZAL55Y5.js";
import {
  LanguageService
} from "./chunk-7GZOXTNY.js";
import {
  PersonnalisationService
} from "./chunk-MIGXUTE7.js";
import {
  NewsStateService
} from "./chunk-JEZ6DLK2.js";
import {
  App
} from "./chunk-RFEPADPA.js";
import "./chunk-7JCEDXGT.js";
import "./chunk-ULLB7OBK.js";
import {
  AuthService,
  TraceService,
  browserTracingIntegration,
  createErrorHandler,
  feedbackSyncIntegration,
  init,
  replayIntegration
} from "./chunk-RK7YL5P5.js";
import {
  KYCWrapperService
} from "./chunk-IBT2NAXJ.js";
import "./chunk-NHPV6IFO.js";
import {
  AppstateService
} from "./chunk-YSCBVZBE.js";
import "./chunk-6J5UKKBN.js";
import "./chunk-RYICOSCB.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  Amplify,
  CognitoAWSCredentialsAndIdentityIdProvider,
  CookieStorage,
  DefaultIdentityIdStore,
  cognitoUserPoolsTokenProvider,
  defaultStorage,
  fetchAuthSession,
  fetchUserAttributes,
  parseAmplifyConfig
} from "./chunk-Z4RNZNYE.js";
import "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService
} from "./chunk-UXTOZZ3E.js";
import {
  IonicStorageModule
} from "./chunk-MN6LZ2SJ.js";
import {
  APP_INITIALIZER,
  AlertController,
  CommonModule,
  Component,
  ErrorHandler,
  HostListener,
  HttpClient,
  Injectable,
  IonApp,
  IonButton,
  IonCheckbox,
  IonCol,
  IonFooter,
  IonGrid,
  IonItem,
  IonRouterOutlet2 as IonRouterOutlet,
  IonRow,
  IonicRouteStrategy,
  ModalController,
  NavigationEnd,
  NgIf,
  NgZone,
  PreloadAllModules,
  RouteReuseStrategy,
  Router,
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  bootstrapApplication,
  catchError,
  effect,
  filter,
  from,
  importProvidersFrom,
  map,
  of,
  provideHttpClient,
  provideIonicAngular,
  provideRouter,
  setClassMetadata,
  signal,
  switchMap,
  withInterceptors,
  withPreloading,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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
  Capacitor,
  registerPlugin
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// node_modules/@ngx-translate/http-loader/dist/fesm2022/ngx-translate-http-loader.mjs
var TranslateHttpLoader = class {
  http;
  prefix;
  suffix;
  constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/index.mjs
var cognitoCredentialsProvider = new CognitoAWSCredentialsAndIdentityIdProvider(new DefaultIdentityIdStore(defaultStorage));

// node_modules/aws-amplify/dist/esm/initSingleton.mjs
var DefaultAmplify = {
  /**
   * Configures Amplify with the {@link resourceConfig} and {@link libraryOptions}.
   *
   * @param resourceConfig The {@link ResourcesConfig} object that is typically imported from the
   * `amplifyconfiguration.json` file. It can also be an object literal created inline when calling `Amplify.configure`.
   * @param libraryOptions The {@link LibraryOptions} additional options for the library.
   *
   * @example
   * import config from './amplifyconfiguration.json';
   *
   * Amplify.configure(config);
   */
  configure(resourceConfig, libraryOptions) {
    const resolvedResourceConfig = parseAmplifyConfig(resourceConfig);
    const cookieBasedKeyValueStorage = new CookieStorage({
      sameSite: "lax"
    });
    const resolvedKeyValueStorage = (libraryOptions == null ? void 0 : libraryOptions.ssr) ? cookieBasedKeyValueStorage : defaultStorage;
    const resolvedCredentialsProvider = (libraryOptions == null ? void 0 : libraryOptions.ssr) ? new CognitoAWSCredentialsAndIdentityIdProvider(new DefaultIdentityIdStore(cookieBasedKeyValueStorage)) : cognitoCredentialsProvider;
    if (!resolvedResourceConfig.Auth) {
      Amplify.configure(resolvedResourceConfig, libraryOptions);
      return;
    }
    if (libraryOptions == null ? void 0 : libraryOptions.Auth) {
      Amplify.configure(resolvedResourceConfig, libraryOptions);
      return;
    }
    if (!Amplify.libraryOptions.Auth) {
      cognitoUserPoolsTokenProvider.setAuthConfig(resolvedResourceConfig.Auth);
      cognitoUserPoolsTokenProvider.setKeyValueStorage(
        // TODO: allow configure with a public interface
        resolvedKeyValueStorage
      );
      Amplify.configure(resolvedResourceConfig, __spreadProps(__spreadValues({}, libraryOptions), {
        Auth: {
          tokenProvider: cognitoUserPoolsTokenProvider,
          credentialsProvider: resolvedCredentialsProvider
        }
      }));
      return;
    }
    if (libraryOptions) {
      const authLibraryOptions = Amplify.libraryOptions.Auth;
      if (libraryOptions.ssr !== void 0) {
        cognitoUserPoolsTokenProvider.setKeyValueStorage(
          // TODO: allow configure with a public interface
          resolvedKeyValueStorage
        );
        authLibraryOptions.credentialsProvider = resolvedCredentialsProvider;
      }
      Amplify.configure(resolvedResourceConfig, __spreadValues({
        Auth: authLibraryOptions
      }, libraryOptions));
      return;
    }
    Amplify.configure(resolvedResourceConfig);
  },
  /**
   * Returns the {@link ResourcesConfig} object passed in as the `resourceConfig` parameter when calling
   * `Amplify.configure`.
   *
   * @returns An {@link ResourcesConfig} object.
   */
  getConfig() {
    return Amplify.getConfig();
  }
};

// src/utils/amplify.config.ts
function configureAmplify() {
  DefaultAmplify.configure({
    Auth: {
      Cognito: {
        userPoolId: environment.cognito.userPoolId,
        userPoolClientId: environment.cognito.userPoolClientId,
        loginWith: {
          phone: true,
          oauth: {
            domain: environment.cognito.domain,
            scopes: [
              "email",
              "openid",
              "aws.cognito.signin.user.admin",
              "profile"
            ],
            redirectSignIn: ["http://auth.ecovelo.mobi/auth-finish"],
            redirectSignOut: [
              `http://${environment.program}.ecovelo.mobi/landing`
            ],
            responseType: "code",
            providers: ["Google", "Apple"]
          }
        },
        signUpVerificationMethod: "code",
        passwordFormat: {
          minLength: 8,
          requireLowercase: true,
          requireUppercase: true,
          requireNumbers: true,
          requireSpecialCharacters: true
        }
      }
    }
  });
}

// src/app/guards/verify-phone.guard.ts
var _VerifyPhoneGuard = class _VerifyPhoneGuard {
  constructor(router, errorHandler) {
    this.router = router;
    this.errorHandler = errorHandler;
  }
  canActivate() {
    return from(fetchUserAttributes()).pipe(map((attributes) => {
      if (attributes.phone_number && attributes.phone_number_verified === "true") {
        this.router.navigate(["/map"]);
        return false;
      }
      return true;
    }), catchError((error) => {
      this.errorHandler.handleError(error);
      return of(true);
    }));
  }
};
_VerifyPhoneGuard.\u0275fac = function VerifyPhoneGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VerifyPhoneGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(ErrorHandlerService));
};
_VerifyPhoneGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VerifyPhoneGuard, factory: _VerifyPhoneGuard.\u0275fac, providedIn: "root" });
var VerifyPhoneGuard = _VerifyPhoneGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifyPhoneGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: ErrorHandlerService }], null);
})();

// src/app/guards/launch.guard.ts
var _LaunchGuard = class _LaunchGuard {
  constructor(router) {
    this.router = router;
    this.previousUrl = "";
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.previousUrl = event.url;
    });
  }
  canActivate() {
    return __async(this, null, function* () {
      const url = new URL(window.location.href);
      const hasStripeSetupParams = url.searchParams.has("setup_intent") && url.searchParams.has("setup_intent_client_secret") && url.searchParams.has("redirect_status");
      if (window.location.pathname.includes("/launch") || window.location.pathname.includes("/signup-minified") || window.location.pathname.includes("/account/privacy") || window.location.pathname.includes("/account/settings/cgu") || window.location.pathname.includes("/renting") || hasStripeSetupParams) {
        return true;
      }
      if (!this.previousUrl.includes("/launch")) {
        const currentUrl = window.location.pathname;
        return this.router.createUrlTree(["/launch"], {
          queryParams: { next: currentUrl }
        });
      }
      return true;
    });
  }
};
_LaunchGuard.\u0275fac = function LaunchGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LaunchGuard)(\u0275\u0275inject(Router));
};
_LaunchGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LaunchGuard, factory: _LaunchGuard.\u0275fac, providedIn: "root" });
var LaunchGuard = _LaunchGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LaunchGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }], null);
})();

// src/app/guards/auth.guard.ts
var _AuthGuard = class _AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.authState().state === "SignedIn") {
      return this.router.createUrlTree(["/map"]);
    }
    return true;
  }
};
_AuthGuard.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
};
_AuthGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
var AuthGuard = _AuthGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();

// src/app/guards/qr-code.guard.ts
var _QrCodeGuard = class _QrCodeGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate() {
    if (environment.qrcode === "enabled") {
      return true;
    } else {
      return this.router.createUrlTree(["/map"]);
    }
  }
};
_QrCodeGuard.\u0275fac = function QrCodeGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QrCodeGuard)(\u0275\u0275inject(Router));
};
_QrCodeGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QrCodeGuard, factory: _QrCodeGuard.\u0275fac, providedIn: "root" });
var QrCodeGuard = _QrCodeGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrCodeGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }], null);
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "launch?next=/map"
  },
  {
    path: "launch",
    loadComponent: () => import("./launch.page-F7CXUMTM.js").then((m) => m.LaunchPage)
  },
  {
    path: "",
    canActivate: [LaunchGuard],
    children: [
      {
        path: "map",
        loadComponent: () => import("./map.page-5ZJDHEXB.js").then((m) => m.MapPage)
      },
      {
        path: "confirm-code",
        loadComponent: () => import("./confirm-code.page-JPXYL5ID.js").then((m) => m.ConfirmCodePage)
      },
      {
        path: "enter-phone",
        loadComponent: () => import("./enter-phone.page-UVEB44IT.js").then((m) => m.EnterPhonePage)
      },
      {
        path: "landing",
        loadComponent: () => import("./landing.page-T5I4ZPNJ.js").then((m) => m.LandingPage),
        canActivate: [AuthGuard]
      },
      {
        path: "payment-method",
        loadComponent: () => import("./payment-method.page-35PKMYB2.js").then((m) => m.PaymentMethodPage)
      },
      {
        path: "supporting-documents",
        loadComponent: () => import("./supporting-documents.page-2LJUMLQK.js").then((m) => m.SupportingDocumentsPage)
      },
      {
        path: "signin",
        loadComponent: () => import("./signin.page-RDTHUGSQ.js").then((m) => m.SigninPage),
        canActivate: [AuthGuard]
      },
      {
        path: "signup",
        loadComponent: () => import("./signup.page-MCKIFHX6.js").then((m) => m.SignupPage),
        canActivate: [AuthGuard]
      },
      {
        path: "signup-minified",
        loadComponent: () => import("./signup-minified.page-VISV6UPM.js").then((m) => m.SignupMinifiedPage)
      },
      {
        path: "external-auth-failed",
        loadComponent: () => import("./external-auth-failed.page-MEXOCTRW.js").then((m) => m.ExternalAuthFailedPage)
      },
      {
        path: "verify-phone",
        loadComponent: () => import("./verify-phone.page-7W56QZ22.js").then((m) => m.VerifyPhonePage),
        canActivate: [VerifyPhoneGuard]
      },
      {
        path: "search-page",
        loadComponent: () => import("./search.page-K2BIJVV2.js").then((m) => m.SearchPage)
      },
      {
        path: "account",
        loadComponent: () => import("./menu.page-57D4LPBC.js").then((m) => m.MenuPage)
      },
      {
        path: "account/abonnements",
        loadComponent: () => import("./abonnements.page-OG4SEMDI.js").then((m) => m.AbonnementsPage)
      },
      {
        path: "account/trips",
        loadComponent: () => import("./trips.page-BM2P4FTG.js").then((m) => m.TripsPage)
      },
      {
        path: "account/settings",
        loadComponent: () => import("./settings.page-YEMQ2S6Z.js").then((m) => m.SettingsPage)
      },
      {
        path: "account/invoices",
        loadComponent: () => import("./invoices.page-CKDM5BZ2.js").then((m) => m.InvoicesPage)
      },
      {
        path: "account/wallet",
        loadComponent: () => import("./wallet.page-V7P2KZSF.js").then((m) => m.WalletPage)
      },
      {
        path: "account/nfc",
        loadComponent: () => import("./nfc.page-LJM3HDWL.js").then((m) => m.NfcPage)
      },
      {
        path: "account/privacy",
        loadComponent: () => import("./privacy.page-JL42NY5V.js").then((m) => m.PrivacyPage)
      },
      {
        path: "account/cookies",
        loadComponent: () => import("./cookies.page-6QGT5YV6.js").then((m) => m.CookiesPage)
      },
      {
        path: "account/payment-methods",
        loadComponent: () => import("./payment-methods.page-CILU4PFR.js").then((m) => m.PaymentMethodsPage)
      },
      {
        path: "account/settings/cgu",
        loadComponent: () => import("./cgu.page-2IEX4LJI.js").then((m) => m.CguPage)
      },
      {
        path: "account/settings/infos",
        loadComponent: () => import("./infos.page-PEZSK24Q.js").then((m) => m.InfosPage)
      },
      {
        path: "abo-congrats",
        loadComponent: () => import("./abo-congrats.page-HKLT7SEJ.js").then((m) => m.AboCongratsPage)
      },
      {
        path: "trips/congrats",
        loadComponent: () => import("./trips-congrats.page-BBFD2LJG.js").then((m) => m.TripsCongratsPage)
      },
      {
        path: "cgu-congrats",
        loadComponent: () => import("./cgu-congrats.page-X6KNQUVB.js").then((m) => m.CguCongratsPage)
      },
      {
        path: "report-congrats",
        loadComponent: () => import("./report-congrats.page-WT7AAQAR.js").then((m) => m.ReportCongratsPage)
      },
      {
        path: "recommandation-congrats",
        loadComponent: () => import("./recommandation.page-A4AUTJX7.js").then((m) => m.RecommandationPage)
      },
      {
        path: "account/support",
        loadComponent: () => import("./support.page-ALNI44FF.js").then((m) => m.SupportPage)
      },
      {
        path: "account/change-password",
        loadComponent: () => import("./change-password.page-POETP5HP.js").then((m) => m.ChangePasswordPage)
      },
      {
        path: "kyc",
        loadComponent: () => import("./kyc.page-2PFPPOMH.js").then((m) => m.KYCPage)
      },
      {
        path: "renting/qr-code",
        loadComponent: () => import("./qr-code.page-RFJRJLO4.js").then((m) => m.QrCodePage),
        canActivate: [QrCodeGuard]
      }
    ]
  },
  {
    path: "renting",
    loadComponent: () => import("./bike-number.page-SHOBLIXW.js").then((m) => m.BikeNumberPage)
  },
  {
    path: "**",
    redirectTo: "/launch"
  }
];

// node_modules/@ionic/pwa-elements/dist/esm/loader.js
var patchEsm = () => {
  return promiseResolve();
};
var defineCustomElements = (win, options) => {
  if (typeof window === "undefined") return Promise.resolve();
  return patchEsm().then(() => {
    return bootstrapLazy([["pwa-camera-modal", [[1, "pwa-camera-modal", {
      "facingMode": [1, "facing-mode"],
      "hidePicker": [4, "hide-picker"],
      "present": [64],
      "dismiss": [64]
    }]]], ["pwa-action-sheet", [[1, "pwa-action-sheet", {
      "header": [1],
      "cancelable": [4],
      "options": [16],
      "open": [32]
    }]]], ["pwa-toast", [[1, "pwa-toast", {
      "message": [1],
      "duration": [2],
      "closing": [32]
    }]]], ["pwa-camera", [[1, "pwa-camera", {
      "facingMode": [1, "facing-mode"],
      "handlePhoto": [16],
      "hidePicker": [4, "hide-picker"],
      "handleNoDeviceError": [16],
      "noDevicesText": [1, "no-devices-text"],
      "noDevicesButtonText": [1, "no-devices-button-text"],
      "photo": [32],
      "photoSrc": [32],
      "showShutterOverlay": [32],
      "flashIndex": [32],
      "hasCamera": [32],
      "rotation": [32],
      "deviceError": [32]
    }]]], ["pwa-camera-modal-instance", [[1, "pwa-camera-modal-instance", {
      "facingMode": [1, "facing-mode"],
      "hidePicker": [4, "hide-picker"],
      "noDevicesText": [1, "no-devices-text"],
      "noDevicesButtonText": [1, "no-devices-button-text"]
    }, [[16, "keyup", "handleBackdropKeyUp"]]]]]], options);
  });
};

// src/app/components/modals/cookies/cookies.component.ts
function CookiesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "cookies.first_body"));
  }
}
function CookiesComponent_ion_grid_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-grid", 5)(1, "ion-row", 6)(2, "div")(3, "ion-item", 7)(4, "ion-checkbox", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 9);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ion-row")(11, "div")(12, "ion-item", 7)(13, "ion-checkbox", 10);
    \u0275\u0275listener("ionChange", function CookiesComponent_ion_grid_2_Template_ion_checkbox_ionChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkBoxChanged($event));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 9);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "cookies.needed_title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "cookies.needed_body"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 8, "cookies.analytics_title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 10, "cookies.analytics_body"), " ");
  }
}
function CookiesComponent_ion_footer_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-footer")(1, "ion-grid")(2, "ion-row")(3, "ion-col", 11)(4, "ion-button", 12);
    \u0275\u0275listener("click", function CookiesComponent_ion_footer_3_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateFixedValue());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-col", 11)(8, "ion-button", 13);
    \u0275\u0275listener("click", function CookiesComponent_ion_footer_3_Template_ion_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.acceptAll());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "cookies.modal_title"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "cookies.accept_all_btn"), " ");
  }
}
function CookiesComponent_ion_footer_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-footer")(1, "ion-grid")(2, "ion-item", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-row")(6, "ion-col")(7, "ion-button", 13);
    \u0275\u0275listener("click", function CookiesComponent_ion_footer_4_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkAnalyticsAndClose());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "cookies.accept_body"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "cookies.accept_btn"), " ");
  }
}
var CookieManagementState;
(function(CookieManagementState2) {
  CookieManagementState2["Initial"] = "initial";
  CookieManagementState2["Managing"] = "managing";
})(CookieManagementState || (CookieManagementState = {}));
var _CookiesComponent = class _CookiesComponent {
  constructor(cookiesService) {
    this.cookiesService = cookiesService;
    this.CookieManagementState = CookieManagementState;
    this.analyticsAccepted = "false";
    this.currentState = CookieManagementState.Initial;
    this.initializeState();
  }
  initializeState() {
    const state = this.cookiesService.cookiesState();
    if (state.state === "already_set") {
      this.analyticsAccepted = state.preferences.analytics ? "true" : "false";
      this.currentState = CookieManagementState.Managing;
    }
  }
  updateFixedValue() {
    var _a;
    this.currentState = CookieManagementState.Managing;
    this.modal = document.querySelector("#ecl-cookies-modal");
    (_a = this.modal) == null ? void 0 : _a.classList.add("fullHeight");
  }
  checkBoxChanged(event) {
    this.analyticsAccepted = event.detail.checked ? "true" : "false";
  }
  checkAnalyticsAndClose() {
    var _a;
    const preferences = {
      necessary: true,
      analytics: this.analyticsAccepted === "true"
    };
    this.cookiesService.storePreferences(preferences);
    (_a = this.modal) == null ? void 0 : _a.dismiss();
  }
  acceptAll() {
    var _a;
    const preferences = {
      necessary: true,
      analytics: true
    };
    this.cookiesService.storePreferences(preferences);
    (_a = this.modal) == null ? void 0 : _a.dismiss();
  }
};
_CookiesComponent.\u0275fac = function CookiesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CookiesComponent)(\u0275\u0275directiveInject(CookiesService));
};
_CookiesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CookiesComponent, selectors: [["app-cookies"]], decls: 5, vars: 4, consts: [[1, "content"], ["class", "flex-center ion-padding-horizontal", 4, "ngIf"], ["class", "ion-padding", 4, "ngIf"], [4, "ngIf"], [1, "flex-center", "ion-padding-horizontal"], [1, "ion-padding"], [1, "ion-margin-bottom"], ["lines", "none"], ["checked", "true", "disabled", "true"], [1, "ion-no-margin", "ion-padding-start"], ["checked", "false", 3, "ionChange"], ["size", "6"], ["color", "primary", "color", "dark", "fill", "outline", "expand", "block", "shape", "round", 3, "click"], ["color", "primary", "color", "primary", "expand", "block", "shape", "round", 3, "click"]], template: function CookiesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, CookiesComponent_div_1_Template, 4, 3, "div", 1)(2, CookiesComponent_ion_grid_2_Template, 19, 12, "ion-grid", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CookiesComponent_ion_footer_3_Template, 11, 6, "ion-footer", 3)(4, CookiesComponent_ion_footer_4_Template, 10, 6, "ion-footer", 3);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentState === ctx.CookieManagementState.Initial);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentState === ctx.CookieManagementState.Managing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentState === ctx.CookieManagementState.Initial);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentState === ctx.CookieManagementState.Managing);
  }
}, dependencies: [
  TranslateModule,
  TranslatePipe,
  CommonModule,
  NgIf,
  IonGrid,
  IonRow,
  IonItem,
  IonCheckbox,
  IonButton,
  IonCol,
  IonFooter
], styles: ["\n\n.content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 80vh;\n}\n/*# sourceMappingURL=cookies.component.css.map */"] });
var CookiesComponent = _CookiesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CookiesComponent, [{
    type: Component,
    args: [{ selector: "app-cookies", imports: [
      TranslateModule,
      CommonModule,
      IonGrid,
      IonRow,
      IonItem,
      IonCheckbox,
      IonButton,
      IonCol,
      IonFooter
    ], template: `<div class="content">
  <div
    *ngIf="currentState === CookieManagementState.Initial"
    class="flex-center ion-padding-horizontal"
  >
    <p>{{ 'cookies.first_body' | translate }}</p>
  </div>
  <ion-grid
    class="ion-padding"
    *ngIf="currentState === CookieManagementState.Managing"
  >
    <ion-row class="ion-margin-bottom">
      <div>
        <ion-item lines="none">
          <ion-checkbox checked="true" disabled="true">{{
            'cookies.needed_title' | translate
          }}</ion-checkbox>
        </ion-item>
        <p class="ion-no-margin ion-padding-start">
          {{ 'cookies.needed_body' | translate }}
        </p>
      </div>
    </ion-row>
    <ion-row>
      <div>
        <ion-item lines="none">
          <ion-checkbox (ionChange)="checkBoxChanged($event)" checked="false">{{
            'cookies.analytics_title' | translate
          }}</ion-checkbox>
        </ion-item>
        <p class="ion-no-margin ion-padding-start">
          {{ 'cookies.analytics_body' | translate }}
        </p>
      </div>
    </ion-row>
  </ion-grid>
</div>

<ion-footer *ngIf="currentState === CookieManagementState.Initial">
  <ion-grid>
    <ion-row>
      <ion-col size="6">
        <ion-button
          color="primary"
          (click)="updateFixedValue()"
          color="dark"
          fill="outline"
          expand="block"
          shape="round"
        >
          {{ 'cookies.modal_title' | translate }}
        </ion-button>
      </ion-col>
      <ion-col size="6">
        <ion-button
          color="primary"
          (click)="acceptAll()"
          color="primary"
          expand="block"
          shape="round"
        >
          {{ 'cookies.accept_all_btn' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-footer>
<ion-footer *ngIf="currentState === CookieManagementState.Managing">
  <ion-grid>
    <ion-item lines="none">
      {{ 'cookies.accept_body' | translate }}
    </ion-item>
    <ion-row>
      <ion-col>
        <ion-button
          color="primary"
          (click)="checkAnalyticsAndClose()"
          color="primary"
          expand="block"
          shape="round"
        >
          {{ 'cookies.accept_btn' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-footer>
`, styles: ["/* src/app/components/modals/cookies/cookies.component.scss */\n.content {\n  overflow-y: auto;\n  max-height: 80vh;\n}\n/*# sourceMappingURL=cookies.component.css.map */\n"] }]
  }], () => [{ type: CookiesService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CookiesComponent, { className: "CookiesComponent", filePath: "src/app/components/modals/cookies/cookies.component.ts", lineNumber: 44 });
})();

// node_modules/@capacitor/screen-orientation/dist/esm/index.js
var ScreenOrientation = registerPlugin("ScreenOrientation", {
  web: () => import("./web-4AWI7Q6F.js").then((m) => new m.ScreenOrientationWeb())
});

// src/app/services/external/sentry.service.ts
var _SentryService = class _SentryService {
  constructor() {
  }
  initSentry() {
    return __async(this, null, function* () {
      init({
        dsn: "https://284569e480faeea28942c9da17035ca8@o233559.ingest.us.sentry.io/4508250853801984",
        // Set your release version, such as "getsentry@1.0.0"
        release: "Adel@1.0.0",
        environment: environment.production ? "production" : "preprod",
        // Set your dist version, such as "1"
        dist: "1",
        integrations: [
          // Registers and configures the Tracing integration,
          // which automatically instruments your application to monitor its
          // performance, including custom Angular routing instrumentation
          browserTracingIntegration(),
          // Registers the Replay integration,
          // which automatically captures Session Replays
          replayIntegration({
            maskAllText: false,
            blockAllMedia: false
          })
          //   //REMOVE THIS IN PROD MODE
          //   SentryAngular.feedbackAsyncIntegration({
          //     autoInject: false,
          //   }),
        ],
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for tracing.
        // We recommend adjusting this value in production
        // Learn more at
        // https://docs.sentry.io/platforms/javascript/configuration/options/#traces-sample-rate
        tracesSampleRate: 5e-3,
        sampleRate: 5e-3,
        // Capture Replay for 10% of all sessions,
        // plus for 100% of sessions with an error
        // Learn more at
        // https://docs.sentry.io/platforms/javascript/session-replay/configuration/#general-integration-configuration
        replaysSessionSampleRate: environment.production ? 5e-3 : 0,
        replaysOnErrorSampleRate: environment.production ? 5e-3 : 0
      });
    });
  }
  openFeedbackModal() {
    return __async(this, null, function* () {
      const feedback = feedbackSyncIntegration();
      const form = yield feedback.createForm({
        formTitle: "Signaler un probl\xE8me",
        nameLabel: "Nom",
        emailPlaceholder: "Votre email",
        namePlaceholder: "Votre nom",
        isRequiredLabel: "(requis)",
        messagePlaceholder: "Que s'est-il pass\xE9 ?",
        submitButtonLabel: "Envoyer le rapport",
        cancelButtonLabel: "Annuler"
      });
      form.appendToDom();
      form.open();
    });
  }
};
_SentryService.\u0275fac = function SentryService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SentryService)();
};
_SentryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SentryService, factory: _SentryService.\u0275fac, providedIn: "root" });
var SentryService = _SentryService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SentryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/utils/url.service.ts
var _URLService = class _URLService {
  constructor() {
    this.previousUrl = signal(null);
    this.currentUrl = signal(null);
  }
};
_URLService.\u0275fac = function URLService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _URLService)();
};
_URLService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _URLService, factory: _URLService.\u0275fac, providedIn: "root" });
var URLService = _URLService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(URLService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  unloadHandler(event) {
    this.appstateService.saveAppState();
    this.newsStateService.saveMandatoryState();
  }
  beforeUnloadHandler(event) {
    this.appstateService.saveAppState();
    this.newsStateService.saveMandatoryState();
  }
  constructor(language, router, zone, cookiesService, modalController, alertController, appstateService, sentryService, urlService, newsStateService, personalisationService, kycService) {
    this.language = language;
    this.router = router;
    this.zone = zone;
    this.cookiesService = cookiesService;
    this.modalController = modalController;
    this.alertController = alertController;
    this.appstateService = appstateService;
    this.sentryService = sentryService;
    this.urlService = urlService;
    this.newsStateService = newsStateService;
    this.personalisationService = personalisationService;
    this.kycService = kycService;
    Stripe.initialize({
      publishableKey: environment.stripePublicKey
    });
    defineCustomElements(window);
    this.initializeApp();
    effect(() => {
      this.onCookiesStateChange(this.cookiesService.cookiesState());
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.cookiesService.getPreferences();
      if (Capacitor.isNativePlatform()) {
        yield ScreenOrientation.lock({ orientation: "portrait" });
        if (this.cookiesService.cookiesState().state === "not_already_set") {
          const preferences = {
            necessary: true,
            analytics: true
          };
          yield this.cookiesService.storePreferences(preferences);
        }
      }
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
        this.urlService.previousUrl.set(this.urlService.currentUrl());
        this.urlService.currentUrl.set(event.url);
      });
    });
  }
  initializeApp() {
    this.language.initializeLanguage();
    this.personalisationService.setTitle();
    this.personalisationService.setColors();
    this.kycService.setKycDocumentTypes();
    App.addListener("appUrlOpen", (event) => {
      this.zone.run(() => __async(this, null, function* () {
        let path = "";
        if (event.url.startsWith("com.ecovelo.")) {
          const parts = event.url.split("://");
          if (parts.length > 1) {
            path = parts[1];
          }
        } else if (event.url.startsWith("https://")) {
          try {
            const url = new URL(event.url);
            path = url.pathname + url.search + url.hash;
            if (path.startsWith("/")) {
              path = path.substring(1);
            }
          } catch (error) {
            console.error("Failed to parse URL:", event.url, error);
          }
        }
        if (path) {
          this.router.navigateByUrl(path);
        }
      }));
    });
  }
  onCookiesStateChange(state) {
    return __async(this, null, function* () {
      switch (state.state) {
        case "already_set":
          if (state.preferences.analytics) {
            this.sentryService.initSentry();
          }
          break;
        case "not_already_set":
          if (!Capacitor.isNativePlatform()) {
            const modal = yield this.modalController.create({
              component: CookiesComponent,
              cssClass: "ecl-cookies-modal",
              id: "ecl-cookies-modal",
              backdropDismiss: false
            });
            yield modal.present();
          }
          break;
        default:
          break;
      }
    });
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(CookiesService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(AppstateService), \u0275\u0275directiveInject(SentryService), \u0275\u0275directiveInject(URLService), \u0275\u0275directiveInject(NewsStateService), \u0275\u0275directiveInject(PersonnalisationService), \u0275\u0275directiveInject(KYCWrapperService));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("unload", function AppComponent_unload_HostBindingHandler($event) {
      return ctx.unloadHandler($event);
    }, false, \u0275\u0275resolveWindow)("beforeunload", function AppComponent_beforeunload_HostBindingHandler($event) {
      return ctx.beforeUnloadHandler($event);
    }, false, \u0275\u0275resolveWindow);
  }
}, decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-app");
    \u0275\u0275element(1, "ion-router-outlet");
    \u0275\u0275elementEnd();
  }
}, dependencies: [IonApp, IonRouterOutlet], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [IonApp, IonRouterOutlet], template: "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n" }]
  }], () => [{ type: LanguageService }, { type: Router }, { type: NgZone }, { type: CookiesService }, { type: ModalController }, { type: AlertController }, { type: AppstateService }, { type: SentryService }, { type: URLService }, { type: NewsStateService }, { type: PersonnalisationService }, { type: KYCWrapperService }], { unloadHandler: [{
    type: HostListener,
    args: ["window:unload", ["$event"]]
  }], beforeUnloadHandler: [{
    type: HostListener,
    args: ["window:beforeunload", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 29 });
})();

// src/api.interceptor.ts
var authInterceptor = (req, next) => {
  return from(fetchAuthSession({ forceRefresh: false })).pipe(switchMap((session) => {
    var _a, _b;
    const token = (_b = (_a = session == null ? void 0 : session.tokens) == null ? void 0 : _a.idToken) == null ? void 0 : _b.toString();
    const newReq = req.clone({
      setHeaders: {
        Authorization: token ? `${token}` : "",
        "Live-Mode": environment.production.toString(),
        program: environment.program
      }
    });
    return next(newReq);
  }), catchError((err) => {
    throw err;
  }));
};

// src/utils/sentry.config.ts
var sentryProviders = [
  {
    provide: ErrorHandler,
    useValue: createErrorHandler({
      showDialog: false
    })
  },
  {
    provide: TraceService,
    deps: [Router]
  },
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => {
    },
    deps: [TraceService],
    multi: true
  }
];

// node_modules/barcode-detector/dist/es/ponyfill.js
var Ue = (o) => {
  throw TypeError(o);
};
var Ve = (o, l, d) => l.has(o) || Ue("Cannot " + d);
var We = (o, l, d) => (Ve(o, l, "read from private field"), d ? d.call(o) : l.get(o));
var He = (o, l, d) => l.has(o) ? Ue("Cannot add the same private member more than once") : l instanceof WeakSet ? l.add(o) : l.set(o, d);
var ke = (o, l, d, b) => (Ve(o, l, "write to private field"), b ? b.call(o, d) : l.set(o, d), d);
var Dt = [["Aztec", "M"], ["Codabar", "L"], ["Code39", "L"], ["Code93", "L"], ["Code128", "L"], ["DataBar", "L"], ["DataBarExpanded", "L"], ["DataMatrix", "M"], ["EAN-8", "L"], ["EAN-13", "L"], ["ITF", "L"], ["MaxiCode", "M"], ["PDF417", "M"], ["QRCode", "M"], ["UPC-A", "L"], ["UPC-E", "L"], ["MicroQRCode", "M"], ["rMQRCode", "M"], ["DXFilmEdge", "L"], ["DataBarLimited", "L"]];
var Mt = Dt.map(([o]) => o);
var Ma = Mt.filter((o, l) => Dt[l][1] === "L");
var Aa = Mt.filter((o, l) => Dt[l][1] === "M");
function qt(o) {
  switch (o) {
    case "Linear-Codes":
      return Ma.reduce((l, d) => l | qt(d), 0);
    case "Matrix-Codes":
      return Aa.reduce((l, d) => l | qt(d), 0);
    case "Any":
      return (1 << Dt.length) - 1;
    case "None":
      return 0;
    default:
      return 1 << Mt.indexOf(o);
  }
}
function Fa(o) {
  if (o === 0) return "None";
  const l = 31 - Math.clz32(o);
  return Mt[l];
}
function Ra(o) {
  return o.reduce((l, d) => l | qt(d), 0);
}
var La = ["LocalAverage", "GlobalHistogram", "FixedThreshold", "BoolCast"];
function ja(o) {
  return La.indexOf(o);
}
var Ne = [
  "Unknown",
  "ASCII",
  "ISO8859_1",
  "ISO8859_2",
  "ISO8859_3",
  "ISO8859_4",
  "ISO8859_5",
  "ISO8859_6",
  "ISO8859_7",
  "ISO8859_8",
  "ISO8859_9",
  "ISO8859_10",
  "ISO8859_11",
  "ISO8859_13",
  "ISO8859_14",
  "ISO8859_15",
  "ISO8859_16",
  "Cp437",
  "Cp1250",
  "Cp1251",
  "Cp1252",
  "Cp1256",
  "Shift_JIS",
  "Big5",
  "GB2312",
  "GB18030",
  "EUC_JP",
  "EUC_KR",
  "UTF16BE",
  /**
   * UnicodeBig [[deprecated]]
   */
  "UTF16BE",
  "UTF8",
  "UTF16LE",
  "UTF32BE",
  "UTF32LE",
  "BINARY"
];
function Ba(o) {
  return o === "UnicodeBig" ? Ne.indexOf("UTF16BE") : Ne.indexOf(o);
}
var Ua = ["Text", "Binary", "Mixed", "GS1", "ISO15434", "UnknownECI"];
function Va(o) {
  return Ua[o];
}
var Wa = ["Ignore", "Read", "Require"];
function Ha(o) {
  return Wa.indexOf(o);
}
var ka = ["Plain", "ECI", "HRI", "Hex", "Escaped"];
function Na(o) {
  return ka.indexOf(o);
}
var It = {
  formats: [],
  tryHarder: true,
  tryRotate: true,
  tryInvert: true,
  tryDownscale: true,
  tryDenoise: false,
  binarizer: "LocalAverage",
  isPure: false,
  downscaleFactor: 3,
  downscaleThreshold: 500,
  minLineCount: 2,
  maxNumberOfSymbols: 255,
  tryCode39ExtendedMode: true,
  returnErrors: false,
  eanAddOnSymbol: "Ignore",
  textMode: "HRI",
  characterSet: "Unknown"
};
function ze(o) {
  return __spreadProps(__spreadValues({}, o), {
    formats: Ra(o.formats),
    binarizer: ja(o.binarizer),
    eanAddOnSymbol: Ha(o.eanAddOnSymbol),
    textMode: Na(o.textMode),
    characterSet: Ba(o.characterSet)
  });
}
function za(o) {
  return __spreadProps(__spreadValues({}, o), {
    format: Fa(o.format),
    contentType: Va(o.contentType),
    eccLevel: o.ecLevel
  });
}
var Ga = {
  locateFile: (o, l) => {
    const d = o.match(/_(.+?)\.wasm$/);
    return d ? `https://fastly.jsdelivr.net/npm/zxing-wasm@2.2.4/dist/${d[1]}/${o}` : l + o;
  }
};
var St = /* @__PURE__ */ new WeakMap();
function Xa(o, l) {
  return Object.is(o, l) || Object.keys(o).length === Object.keys(l).length && Object.keys(o).every((d) => Object.hasOwn(l, d) && o[d] === l[d]);
}
function Xe(o, {
  overrides: l,
  equalityFn: d = Xa,
  fireImmediately: b = false
} = {}) {
  var f;
  const [I, D] = (f = St.get(o)) != null ? f : [Ga], M = l != null ? l : I;
  let _;
  if (b) {
    if (D && (_ = d(I, M))) return D;
    const A = o(__spreadValues({}, M));
    return St.set(o, [M, A]), A;
  }
  (_ != null ? _ : d(I, M)) || St.set(o, [M]);
}
function Ya(_0, _1) {
  return __async(this, arguments, function* (o, l, d = It) {
    const b = __spreadValues(__spreadValues({}, It), d), f = yield Xe(o, {
      fireImmediately: true
    });
    let I, D;
    if ("width" in l && "height" in l && "data" in l) {
      const {
        data: _,
        data: {
          byteLength: A
        },
        width: U,
        height: G
      } = l;
      D = f._malloc(A), f.HEAPU8.set(_, D), I = f.readBarcodesFromPixmap(D, U, G, ze(b));
    } else {
      let _, A;
      if ("buffer" in l) [_, A] = [l.byteLength, l];
      else if ("byteLength" in l) [_, A] = [l.byteLength, new Uint8Array(l)];
      else if ("size" in l) [_, A] = [l.size, new Uint8Array(yield l.arrayBuffer())];
      else throw new TypeError("Invalid input type");
      D = f._malloc(_), f.HEAPU8.set(A, D), I = f.readBarcodesFromImage(D, _, ze(b));
    }
    f._free(D);
    const M = [];
    for (let _ = 0; _ < I.size(); ++_) M.push(za(I.get(_)));
    return M;
  });
}
__spreadProps(__spreadValues({}, It), {
  formats: [...It.formats]
});
function Zt() {
  return __async(this, arguments, function* (o = {}) {
    var l, d, b, f = o, I = !!globalThis.window, D = typeof Bun < "u", M = !!globalThis.WorkerGlobalScope;
    !((d = globalThis.process) === null || d === void 0 || (d = d.versions) === null || d === void 0) && d.node && ((b = globalThis.process) === null || b === void 0 ? void 0 : b.type) != "renderer";
    var _ = "./this.program", A, U = "";
    function G(t) {
      return f.locateFile ? f.locateFile(t, U) : U + t;
    }
    var tt, X;
    if (I || M || D) {
      try {
        U = new URL(".", A).href;
      } catch {
      }
      M && (X = (t) => {
        var e2 = new XMLHttpRequest();
        return e2.open("GET", t, false), e2.responseType = "arraybuffer", e2.send(null), new Uint8Array(e2.response);
      }), tt = (t) => __async(null, null, function* () {
        var e2 = yield fetch(t, {
          credentials: "same-origin"
        });
        if (e2.ok) return e2.arrayBuffer();
        throw new Error(e2.status + " : " + e2.url);
      });
    }
    var nt = console.log.bind(console), V = console.error.bind(console), q, ht = false, Qt, Jt, Y, W, dt, at, ot, T, Kt, te, ee = false;
    function re() {
      var t = Pt.buffer;
      Y = new Int8Array(t), dt = new Int16Array(t), f.HEAPU8 = W = new Uint8Array(t), at = new Uint16Array(t), ot = new Int32Array(t), T = new Uint32Array(t), Kt = new Float32Array(t), te = new Float64Array(t);
    }
    function ar() {
      if (f.preRun) for (typeof f.preRun == "function" && (f.preRun = [f.preRun]); f.preRun.length; ) yr(f.preRun.shift());
      ne(oe);
    }
    function or() {
      ee = true, lt.xa();
    }
    function ir() {
      if (f.postRun) for (typeof f.postRun == "function" && (f.postRun = [f.postRun]); f.postRun.length; ) pr(f.postRun.shift());
      ne(ae);
    }
    function At(t) {
      var e2, r;
      (e2 = f.onAbort) === null || e2 === void 0 || e2.call(f, t), t = "Aborted(" + t + ")", V(t), ht = true, t += ". Build with -sASSERTIONS for more info.";
      var n = new WebAssembly.RuntimeError(t);
      throw (r = Jt) === null || r === void 0 || r(n), n;
    }
    var pt;
    function sr() {
      return G("zxing_reader.wasm");
    }
    function ur(t) {
      if (t == pt && q) return new Uint8Array(q);
      if (X) return X(t);
      throw "both async and sync fetching of the wasm failed";
    }
    function cr(t) {
      return __async(this, null, function* () {
        if (!q) try {
          var e2 = yield tt(t);
          return new Uint8Array(e2);
        } catch {
        }
        return ur(t);
      });
    }
    function lr(t, e2) {
      return __async(this, null, function* () {
        try {
          var r = yield cr(t), n = yield WebAssembly.instantiate(r, e2);
          return n;
        } catch (a) {
          V(`failed to asynchronously prepare wasm: ${a}`), At(a);
        }
      });
    }
    function fr(t, e2, r) {
      return __async(this, null, function* () {
        if (!t && WebAssembly.instantiateStreaming) try {
          var n = fetch(e2, {
            credentials: "same-origin"
          }), a = yield WebAssembly.instantiateStreaming(n, r);
          return a;
        } catch (i) {
          V(`wasm streaming compile failed: ${i}`), V("falling back to ArrayBuffer instantiation");
        }
        return lr(e2, r);
      });
    }
    function hr() {
      var t = {
        a: qn
      };
      return t;
    }
    function dr() {
      return __async(this, null, function* () {
        function t(i, s) {
          return lt = i.exports, Xn(lt), re(), lt;
        }
        function e2(i) {
          return t(i.instance);
        }
        var r = hr();
        if (f.instantiateWasm) return new Promise((i, s) => {
          f.instantiateWasm(r, (u, c) => {
            i(t(u));
          });
        });
        pt != null || (pt = sr());
        var n = yield fr(q, pt, r), a = e2(n);
        return a;
      });
    }
    var ne = (t) => {
      for (; t.length > 0; ) t.shift()(f);
    }, ae = [], pr = (t) => ae.push(t), oe = [], yr = (t) => oe.push(t), m = (t) => _e(t), g = () => xe(), yt = [], vt = 0, vr = (t) => {
      var e2 = new Ft(t);
      return e2.get_caught() || (e2.set_caught(true), vt--), e2.set_rethrown(false), yt.push(e2), Ie(t), Pe(t);
    }, H = 0, mr = () => {
      v(0, 0);
      var t = yt.pop();
      Se(t.excPtr), H = 0;
    };
    class Ft {
      constructor(e2) {
        this.excPtr = e2, this.ptr = e2 - 24;
      }
      set_type(e2) {
        T[this.ptr + 4 >> 2] = e2;
      }
      get_type() {
        return T[this.ptr + 4 >> 2];
      }
      set_destructor(e2) {
        T[this.ptr + 8 >> 2] = e2;
      }
      get_destructor() {
        return T[this.ptr + 8 >> 2];
      }
      set_caught(e2) {
        e2 = e2 ? 1 : 0, Y[this.ptr + 12] = e2;
      }
      get_caught() {
        return Y[this.ptr + 12] != 0;
      }
      set_rethrown(e2) {
        e2 = e2 ? 1 : 0, Y[this.ptr + 13] = e2;
      }
      get_rethrown() {
        return Y[this.ptr + 13] != 0;
      }
      init(e2, r) {
        this.set_adjusted_ptr(0), this.set_type(e2), this.set_destructor(r);
      }
      set_adjusted_ptr(e2) {
        T[this.ptr + 16 >> 2] = e2;
      }
      get_adjusted_ptr() {
        return T[this.ptr + 16 >> 2];
      }
    }
    var mt = (t) => Oe(t), Rt = (t) => {
      var e2 = H;
      if (!e2) return mt(0), 0;
      var r = new Ft(e2);
      r.set_adjusted_ptr(e2);
      var n = r.get_type();
      if (!n) return mt(0), e2;
      for (var a of t) {
        if (a === 0 || a === n) break;
        var i = r.ptr + 16;
        if (De(a, n, i)) return mt(a), e2;
      }
      return mt(n), e2;
    }, gr = () => Rt([]), wr = (t) => Rt([t]), br = (t, e2) => Rt([t, e2]), $r = () => {
      var t = yt.pop();
      t || At("no exception to throw");
      var e2 = t.excPtr;
      throw t.get_rethrown() || (yt.push(t), t.set_rethrown(true), t.set_caught(false), vt++), H = e2, H;
    }, Cr = (t, e2, r) => {
      var n = new Ft(t);
      throw n.init(e2, r), H = t, vt++, H;
    }, Tr = () => vt, Er = (t) => {
      throw H || (H = t), H;
    }, Pr = () => At(""), gt = {}, Lt = (t) => {
      for (; t.length; ) {
        var e2 = t.pop(), r = t.pop();
        r(e2);
      }
    };
    function it(t) {
      return this.fromWireType(T[t >> 2]);
    }
    var et = {}, Z = {}, wt = {}, Or = class extends Error {
      constructor(t) {
        super(t), this.name = "InternalError";
      }
    }, bt = (t) => {
      throw new Or(t);
    }, Q = (t, e2, r) => {
      t.forEach((u) => wt[u] = e2);
      function n(u) {
        var c = r(u);
        c.length !== t.length && bt("Mismatched type converter count");
        for (var h = 0; h < t.length; ++h) j(t[h], c[h]);
      }
      var a = new Array(e2.length), i = [], s = 0;
      {
        const u = e2;
        for (let c = 0; c < u.length; ++c) {
          const h = u[c];
          Z.hasOwnProperty(h) ? a[c] = Z[h] : (i.push(h), et.hasOwnProperty(h) || (et[h] = []), et[h].push(() => {
            a[c] = Z[h], ++s, s === i.length && n(a);
          }));
        }
      }
      i.length === 0 && n(a);
    }, _r = (t) => {
      var e2 = gt[t];
      delete gt[t];
      var r = e2.rawConstructor, n = e2.rawDestructor, a = e2.fields, i = a.map((s) => s.getterReturnType).concat(a.map((s) => s.setterArgumentType));
      Q([t], i, (s) => {
        var u = {};
        {
          const c = a;
          for (let h = 0; h < c.length; ++h) {
            const p = c[h], y = s[h], C = p.getter, P = p.getterContext, S = s[h + a.length], x = p.setter, O = p.setterContext;
            u[p.fieldName] = {
              read: (E) => y.fromWireType(C(P, E)),
              write: (E, K) => {
                var R = [];
                x(O, E, S.toWireType(R, K)), Lt(R);
              },
              optional: y.optional
            };
          }
        }
        return [{
          name: e2.name,
          fromWireType: (c) => {
            var h = {};
            for (var p in u) h[p] = u[p].read(c);
            return n(c), h;
          },
          toWireType: (c, h) => {
            for (var p in u) if (!(p in h) && !u[p].optional) throw new TypeError(`Missing field: "${p}"`);
            var y = r();
            for (p in u) u[p].write(y, h[p]);
            return c !== null && c.push(n, y), y;
          },
          readValueFromPointer: it,
          destructorFunction: n
        }];
      });
    }, xr = (t, e2, r, n, a) => {
    }, F = (t) => {
      for (var e2 = ""; ; ) {
        var r = W[t++];
        if (!r) return e2;
        e2 += String.fromCharCode(r);
      }
    }, st = class extends Error {
      constructor(t) {
        super(t), this.name = "BindingError";
      }
    }, $ = (t) => {
      throw new st(t);
    };
    function Sr(t, e2) {
      let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var n = e2.name;
      if (t || $(`type "${n}" must have a positive integer typeid pointer`), Z.hasOwnProperty(t)) {
        if (r.ignoreDuplicateRegistrations) return;
        $(`Cannot register type '${n}' twice`);
      }
      if (Z[t] = e2, delete wt[t], et.hasOwnProperty(t)) {
        var a = et[t];
        delete et[t], a.forEach((i) => i());
      }
    }
    function j(t, e2) {
      let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Sr(t, e2, r);
    }
    var Ir = (t, e2, r, n) => {
      e2 = F(e2), j(t, {
        name: e2,
        fromWireType: function(a) {
          return !!a;
        },
        toWireType: function(a, i) {
          return i ? r : n;
        },
        readValueFromPointer: function(a) {
          return this.fromWireType(W[a]);
        },
        destructorFunction: null
      });
    }, Dr = (t) => ({
      count: t.count,
      deleteScheduled: t.deleteScheduled,
      preservePointerOnDelete: t.preservePointerOnDelete,
      ptr: t.ptr,
      ptrType: t.ptrType,
      smartPtr: t.smartPtr,
      smartPtrType: t.smartPtrType
    }), jt = (t) => {
      function e2(r) {
        return r.$$.ptrType.registeredClass.name;
      }
      $(e2(t) + " instance already deleted");
    }, Bt = false, ie = (t) => {
    }, Mr = (t) => {
      t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr);
    }, se = (t) => {
      t.count.value -= 1;
      var e2 = t.count.value === 0;
      e2 && Mr(t);
    }, ut = (t) => globalThis.FinalizationRegistry ? (Bt = new FinalizationRegistry((e2) => {
      se(e2.$$);
    }), ut = (e2) => {
      var r = e2.$$, n = !!r.smartPtr;
      if (n) {
        var a = {
          $$: r
        };
        Bt.register(e2, a, e2);
      }
      return e2;
    }, ie = (e2) => Bt.unregister(e2), ut(t)) : (ut = (e2) => e2, t), Ar = () => {
      let t = $t.prototype;
      Object.assign(t, {
        isAliasOf(r) {
          if (!(this instanceof $t) || !(r instanceof $t)) return false;
          var n = this.$$.ptrType.registeredClass, a = this.$$.ptr;
          r.$$ = r.$$;
          for (var i = r.$$.ptrType.registeredClass, s = r.$$.ptr; n.baseClass; ) a = n.upcast(a), n = n.baseClass;
          for (; i.baseClass; ) s = i.upcast(s), i = i.baseClass;
          return n === i && a === s;
        },
        clone() {
          if (this.$$.ptr || jt(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
          var r = ut(Object.create(Object.getPrototypeOf(this), {
            $$: {
              value: Dr(this.$$)
            }
          }));
          return r.$$.count.value += 1, r.$$.deleteScheduled = false, r;
        },
        delete() {
          this.$$.ptr || jt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && $("Object already scheduled for deletion"), ie(this), se(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
        },
        isDeleted() {
          return !this.$$.ptr;
        },
        deleteLater() {
          return this.$$.ptr || jt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && $("Object already scheduled for deletion"), this.$$.deleteScheduled = true, this;
        }
      });
      const e2 = Symbol.dispose;
      e2 && (t[e2] = t.delete);
    };
    function $t() {
    }
    var Ut = (t, e2) => Object.defineProperty(e2, "name", {
      value: t
    }), ue = {}, ce = (t, e2, r) => {
      if (t[e2].overloadTable === void 0) {
        var n = t[e2];
        t[e2] = function() {
          for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
          return t[e2].overloadTable.hasOwnProperty(i.length) || $(`Function '${r}' called with an invalid number of arguments (${i.length}) - expects one of (${t[e2].overloadTable})!`), t[e2].overloadTable[i.length].apply(this, i);
        }, t[e2].overloadTable = [], t[e2].overloadTable[n.argCount] = n;
      }
    }, le = (t, e2, r) => {
      f.hasOwnProperty(t) ? ((r === void 0 || f[t].overloadTable !== void 0 && f[t].overloadTable[r] !== void 0) && $(`Cannot register public name '${t}' twice`), ce(f, t, t), f[t].overloadTable.hasOwnProperty(r) && $(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`), f[t].overloadTable[r] = e2) : (f[t] = e2, f[t].argCount = r);
    }, Fr = 48, Rr = 57, Lr = (t) => {
      t = t.replace(/[^a-zA-Z0-9_]/g, "$");
      var e2 = t.charCodeAt(0);
      return e2 >= Fr && e2 <= Rr ? `_${t}` : t;
    };
    function jr(t, e2, r, n, a, i, s, u) {
      this.name = t, this.constructor = e2, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = a, this.getActualType = i, this.upcast = s, this.downcast = u, this.pureVirtualFunctions = [];
    }
    var Vt = (t, e2, r) => {
      for (; e2 !== r; ) e2.upcast || $(`Expected null or instance of ${r.name}, got an instance of ${e2.name}`), t = e2.upcast(t), e2 = e2.baseClass;
      return t;
    }, Wt = (t) => {
      if (t === null) return "null";
      var e2 = typeof t;
      return e2 === "object" || e2 === "array" || e2 === "function" ? t.toString() : "" + t;
    };
    function Br(t, e2) {
      if (e2 === null) return this.isReference && $(`null is not a valid ${this.name}`), 0;
      e2.$$ || $(`Cannot pass "${Wt(e2)}" as a ${this.name}`), e2.$$.ptr || $(`Cannot pass deleted object as a pointer of type ${this.name}`);
      var r = e2.$$.ptrType.registeredClass, n = Vt(e2.$$.ptr, r, this.registeredClass);
      return n;
    }
    function Ur(t, e2) {
      var r;
      if (e2 === null) return this.isReference && $(`null is not a valid ${this.name}`), this.isSmartPointer ? (r = this.rawConstructor(), t !== null && t.push(this.rawDestructor, r), r) : 0;
      (!e2 || !e2.$$) && $(`Cannot pass "${Wt(e2)}" as a ${this.name}`), e2.$$.ptr || $(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && e2.$$.ptrType.isConst && $(`Cannot convert argument of type ${e2.$$.smartPtrType ? e2.$$.smartPtrType.name : e2.$$.ptrType.name} to parameter type ${this.name}`);
      var n = e2.$$.ptrType.registeredClass;
      if (r = Vt(e2.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch (e2.$$.smartPtr === void 0 && $("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
        case 0:
          e2.$$.smartPtrType === this ? r = e2.$$.smartPtr : $(`Cannot convert argument of type ${e2.$$.smartPtrType ? e2.$$.smartPtrType.name : e2.$$.ptrType.name} to parameter type ${this.name}`);
          break;
        case 1:
          r = e2.$$.smartPtr;
          break;
        case 2:
          if (e2.$$.smartPtrType === this) r = e2.$$.smartPtr;
          else {
            var a = e2.clone();
            r = this.rawShare(r, B.toHandle(() => a.delete())), t !== null && t.push(this.rawDestructor, r);
          }
          break;
        default:
          $("Unsupporting sharing policy");
      }
      return r;
    }
    function Vr(t, e2) {
      if (e2 === null) return this.isReference && $(`null is not a valid ${this.name}`), 0;
      e2.$$ || $(`Cannot pass "${Wt(e2)}" as a ${this.name}`), e2.$$.ptr || $(`Cannot pass deleted object as a pointer of type ${this.name}`), e2.$$.ptrType.isConst && $(`Cannot convert argument of type ${e2.$$.ptrType.name} to parameter type ${this.name}`);
      var r = e2.$$.ptrType.registeredClass, n = Vt(e2.$$.ptr, r, this.registeredClass);
      return n;
    }
    var fe = (t, e2, r) => {
      if (e2 === r) return t;
      if (r.baseClass === void 0) return null;
      var n = fe(t, e2, r.baseClass);
      return n === null ? null : r.downcast(n);
    }, Wr = {}, Hr = (t, e2) => {
      for (e2 === void 0 && $("ptr should not be undefined"); t.baseClass; ) e2 = t.upcast(e2), t = t.baseClass;
      return e2;
    }, kr = (t, e2) => (e2 = Hr(t, e2), Wr[e2]), Ct = (t, e2) => {
      (!e2.ptrType || !e2.ptr) && bt("makeClassHandle requires ptr and ptrType");
      var r = !!e2.smartPtrType, n = !!e2.smartPtr;
      return r !== n && bt("Both smartPtrType and smartPtr must be specified"), e2.count = {
        value: 1
      }, ut(Object.create(t, {
        $$: {
          value: e2,
          writable: true
        }
      }));
    };
    function Nr(t) {
      var e2 = this.getPointee(t);
      if (!e2) return this.destructor(t), null;
      var r = kr(this.registeredClass, e2);
      if (r !== void 0) {
        if (r.$$.count.value === 0) return r.$$.ptr = e2, r.$$.smartPtr = t, r.clone();
        var n = r.clone();
        return this.destructor(t), n;
      }
      function a() {
        return this.isSmartPointer ? Ct(this.registeredClass.instancePrototype, {
          ptrType: this.pointeeType,
          ptr: e2,
          smartPtrType: this,
          smartPtr: t
        }) : Ct(this.registeredClass.instancePrototype, {
          ptrType: this,
          ptr: t
        });
      }
      var i = this.registeredClass.getActualType(e2), s = ue[i];
      if (!s) return a.call(this);
      var u;
      this.isConst ? u = s.constPointerType : u = s.pointerType;
      var c = fe(e2, this.registeredClass, u.registeredClass);
      return c === null ? a.call(this) : this.isSmartPointer ? Ct(u.registeredClass.instancePrototype, {
        ptrType: u,
        ptr: c,
        smartPtrType: this,
        smartPtr: t
      }) : Ct(u.registeredClass.instancePrototype, {
        ptrType: u,
        ptr: c
      });
    }
    var zr = () => {
      Object.assign(Tt.prototype, {
        getPointee(t) {
          return this.rawGetPointee && (t = this.rawGetPointee(t)), t;
        },
        destructor(t) {
          var e2;
          (e2 = this.rawDestructor) === null || e2 === void 0 || e2.call(this, t);
        },
        readValueFromPointer: it,
        fromWireType: Nr
      });
    };
    function Tt(t, e2, r, n, a, i, s, u, c, h, p) {
      this.name = t, this.registeredClass = e2, this.isReference = r, this.isConst = n, this.isSmartPointer = a, this.pointeeType = i, this.sharingPolicy = s, this.rawGetPointee = u, this.rawConstructor = c, this.rawShare = h, this.rawDestructor = p, !a && e2.baseClass === void 0 ? n ? (this.toWireType = Br, this.destructorFunction = null) : (this.toWireType = Vr, this.destructorFunction = null) : this.toWireType = Ur;
    }
    var he = (t, e2, r) => {
      f.hasOwnProperty(t) || bt("Replacing nonexistent public symbol"), f[t].overloadTable !== void 0 && r !== void 0 ? f[t].overloadTable[r] = e2 : (f[t] = e2, f[t].argCount = r);
    }, N = {}, Gr = (t, e2, r) => {
      t = t.replace(/p/g, "i");
      var n = N[t];
      return n(e2, ...r);
    }, de = [], w = (t) => {
      var e2 = de[t];
      return e2 || (de[t] = e2 = Fe.get(t)), e2;
    }, Xr = function(t, e2) {
      let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (t.includes("j")) return Gr(t, e2, r);
      var n = w(e2), a = n(...r);
      return a;
    }, qr = function(t, e2) {
      let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      return function() {
        for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
        return Xr(t, e2, a, r);
      };
    }, L = function(t, e2) {
      t = F(t);
      function r() {
        if (t.includes("j")) return qr(t, e2);
        var a = w(e2);
        return a;
      }
      var n = r();
      return typeof n != "function" && $(`unknown function pointer with signature ${t}: ${e2}`), n;
    };
    class Yr extends Error {
    }
    var pe = (t) => {
      var e2 = Ee(t), r = F(e2);
      return z(e2), r;
    }, Et = (t, e2) => {
      var r = [], n = {};
      function a(i) {
        if (!n[i] && !Z[i]) {
          if (wt[i]) {
            wt[i].forEach(a);
            return;
          }
          r.push(i), n[i] = true;
        }
      }
      throw e2.forEach(a), new Yr(`${t}: ` + r.map(pe).join([", "]));
    }, Zr = (t, e2, r, n, a, i, s, u, c, h, p, y, C) => {
      p = F(p), i = L(a, i), u && (u = L(s, u)), h && (h = L(c, h)), C = L(y, C);
      var P = Lr(p);
      le(P, function() {
        Et(`Cannot construct ${p} due to unbound types`, [n]);
      }), Q([t, e2, r], n ? [n] : [], (S) => {
        S = S[0];
        var x, O;
        n ? (x = S.registeredClass, O = x.instancePrototype) : O = $t.prototype;
        var E = Ut(p, function() {
          if (Object.getPrototypeOf(this) !== K) throw new st(`Use 'new' to construct ${p}`);
          if (R.constructor_body === void 0) throw new st(`${p} has no accessible constructor`);
          for (var je = arguments.length, _t = new Array(je), xt = 0; xt < je; xt++) _t[xt] = arguments[xt];
          var Be = R.constructor_body[_t.length];
          if (Be === void 0) throw new st(`Tried to invoke ctor of ${p} with invalid number of parameters (${_t.length}) - expected (${Object.keys(R.constructor_body).toString()}) parameters instead!`);
          return Be.apply(this, _t);
        }), K = Object.create(O, {
          constructor: {
            value: E
          }
        });
        E.prototype = K;
        var R = new jr(p, E, K, C, x, i, u, h);
        if (R.baseClass) {
          var k, Ot;
          (Ot = (k = R.baseClass).__derivedClasses) !== null && Ot !== void 0 || (k.__derivedClasses = []), R.baseClass.__derivedClasses.push(R);
        }
        var Da = new Tt(p, R, true, false, false), Re = new Tt(p + "*", R, false, false, false), Le = new Tt(p + " const*", R, false, true, false);
        return ue[t] = {
          pointerType: Re,
          constPointerType: Le
        }, he(P, E), [Da, Re, Le];
      });
    }, Ht = (t, e2) => {
      for (var r = [], n = 0; n < t; n++) r.push(T[e2 + n * 4 >> 2]);
      return r;
    };
    function Qr(t) {
      for (var e2 = 1; e2 < t.length; ++e2) if (t[e2] !== null && t[e2].destructorFunction === void 0) return true;
      return false;
    }
    function kt(t, e2, r, n, a, i) {
      var s = e2.length;
      s < 2 && $("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var u = e2[1] !== null && r !== null, c = Qr(e2), h = !e2[0].isVoid, p = s - 2, y = new Array(p), C = [], P = [], S = function() {
        P.length = 0;
        var x;
        C.length = u ? 2 : 1, C[0] = a, u && (x = e2[1].toWireType(P, this), C[1] = x);
        for (var O = 0; O < p; ++O) y[O] = e2[O + 2].toWireType(P, O < 0 || arguments.length <= O ? void 0 : arguments[O]), C.push(y[O]);
        var E = n(...C);
        function K(R) {
          if (c) Lt(P);
          else for (var k = u ? 1 : 2; k < e2.length; k++) {
            var Ot = k === 1 ? x : y[k - 2];
            e2[k].destructorFunction !== null && e2[k].destructorFunction(Ot);
          }
          if (h) return e2[0].fromWireType(R);
        }
        return K(E);
      };
      return Ut(t, S);
    }
    var Jr = (t, e2, r, n, a, i) => {
      var s = Ht(e2, r);
      a = L(n, a), Q([], [t], (u) => {
        u = u[0];
        var c = `constructor ${u.name}`;
        if (u.registeredClass.constructor_body === void 0 && (u.registeredClass.constructor_body = []), u.registeredClass.constructor_body[e2 - 1] !== void 0) throw new st(`Cannot register multiple constructors with identical number of parameters (${e2 - 1}) for class '${u.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
        return u.registeredClass.constructor_body[e2 - 1] = () => {
          Et(`Cannot construct ${u.name} due to unbound types`, s);
        }, Q([], s, (h) => (h.splice(1, 0, null), u.registeredClass.constructor_body[e2 - 1] = kt(c, h, null, a, i), [])), [];
      });
    }, ye = (t) => {
      t = t.trim();
      const e2 = t.indexOf("(");
      return e2 === -1 ? t : t.slice(0, e2);
    }, Kr = (t, e2, r, n, a, i, s, u, c, h) => {
      var p = Ht(r, n);
      e2 = F(e2), e2 = ye(e2), i = L(a, i), Q([], [t], (y) => {
        y = y[0];
        var C = `${y.name}.${e2}`;
        e2.startsWith("@@") && (e2 = Symbol[e2.substring(2)]), u && y.registeredClass.pureVirtualFunctions.push(e2);
        function P() {
          Et(`Cannot call ${C} due to unbound types`, p);
        }
        var S = y.registeredClass.instancePrototype, x = S[e2];
        return x === void 0 || x.overloadTable === void 0 && x.className !== y.name && x.argCount === r - 2 ? (P.argCount = r - 2, P.className = y.name, S[e2] = P) : (ce(S, e2, C), S[e2].overloadTable[r - 2] = P), Q([], p, (O) => {
          var E = kt(C, O, y, i, s);
          return S[e2].overloadTable === void 0 ? (E.argCount = r - 2, S[e2] = E) : S[e2].overloadTable[r - 2] = E, [];
        }), [];
      });
    }, ve = [], J = [0, 1, , 1, null, 1, true, 1, false, 1], Nt = (t) => {
      t > 9 && --J[t + 1] === 0 && (J[t] = void 0, ve.push(t));
    }, B = {
      toValue: (t) => (t || $(`Cannot use deleted val. handle = ${t}`), J[t]),
      toHandle: (t) => {
        switch (t) {
          case void 0:
            return 2;
          case null:
            return 4;
          case true:
            return 6;
          case false:
            return 8;
          default: {
            const e2 = ve.pop() || J.length;
            return J[e2] = t, J[e2 + 1] = 1, e2;
          }
        }
      }
    }, me = {
      name: "emscripten::val",
      fromWireType: (t) => {
        var e2 = B.toValue(t);
        return Nt(t), e2;
      },
      toWireType: (t, e2) => B.toHandle(e2),
      readValueFromPointer: it,
      destructorFunction: null
    }, tn = (t) => j(t, me), en = (t, e2) => {
      switch (e2) {
        case 4:
          return function(r) {
            return this.fromWireType(Kt[r >> 2]);
          };
        case 8:
          return function(r) {
            return this.fromWireType(te[r >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${e2}): ${t}`);
      }
    }, rn = (t, e2, r) => {
      e2 = F(e2), j(t, {
        name: e2,
        fromWireType: (n) => n,
        toWireType: (n, a) => a,
        readValueFromPointer: en(e2, r),
        destructorFunction: null
      });
    }, nn = (t, e2, r, n, a, i, s, u) => {
      var c = Ht(e2, r);
      t = F(t), t = ye(t), a = L(n, a), le(t, function() {
        Et(`Cannot call ${t} due to unbound types`, c);
      }, e2 - 1), Q([], c, (h) => {
        var p = [h[0], null].concat(h.slice(1));
        return he(t, kt(t, p, null, a, i), e2 - 1), [];
      });
    }, an = (t, e2, r) => {
      switch (e2) {
        case 1:
          return r ? (n) => Y[n] : (n) => W[n];
        case 2:
          return r ? (n) => dt[n >> 1] : (n) => at[n >> 1];
        case 4:
          return r ? (n) => ot[n >> 2] : (n) => T[n >> 2];
        default:
          throw new TypeError(`invalid integer width (${e2}): ${t}`);
      }
    }, on = (t, e2, r, n, a) => {
      e2 = F(e2);
      const i = n === 0;
      let s = (c) => c;
      if (i) {
        var u = 32 - 8 * r;
        s = (c) => c << u >>> u, a = s(a);
      }
      j(t, {
        name: e2,
        fromWireType: s,
        toWireType: (c, h) => h,
        readValueFromPointer: an(e2, r, n !== 0),
        destructorFunction: null
      });
    }, sn = (t, e2, r) => {
      var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], a = n[e2];
      function i(s) {
        var u = T[s >> 2], c = T[s + 4 >> 2];
        return new a(Y.buffer, c, u);
      }
      r = F(r), j(t, {
        name: r,
        fromWireType: i,
        readValueFromPointer: i
      }, {
        ignoreDuplicateRegistrations: true
      });
    }, un = Object.assign({
      optional: true
    }, me), cn = (t, e2) => {
      j(t, un);
    }, ln = (t, e2, r, n) => {
      if (!(n > 0)) return 0;
      for (var a = r, i = r + n - 1, s = 0; s < t.length; ++s) {
        var u = t.codePointAt(s);
        if (u <= 127) {
          if (r >= i) break;
          e2[r++] = u;
        } else if (u <= 2047) {
          if (r + 1 >= i) break;
          e2[r++] = 192 | u >> 6, e2[r++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (r + 2 >= i) break;
          e2[r++] = 224 | u >> 12, e2[r++] = 128 | u >> 6 & 63, e2[r++] = 128 | u & 63;
        } else {
          if (r + 3 >= i) break;
          e2[r++] = 240 | u >> 18, e2[r++] = 128 | u >> 12 & 63, e2[r++] = 128 | u >> 6 & 63, e2[r++] = 128 | u & 63, s++;
        }
      }
      return e2[r] = 0, r - a;
    }, rt = (t, e2, r) => ln(t, W, e2, r), ge = (t) => {
      for (var e2 = 0, r = 0; r < t.length; ++r) {
        var n = t.charCodeAt(r);
        n <= 127 ? e2++ : n <= 2047 ? e2 += 2 : n >= 55296 && n <= 57343 ? (e2 += 4, ++r) : e2 += 3;
      }
      return e2;
    }, we = globalThis.TextDecoder && new TextDecoder(), be = (t, e2, r, n) => {
      var a = e2 + r;
      if (n) return a;
      for (; t[e2] && !(e2 >= a); ) ++e2;
      return e2;
    }, $e = function(t) {
      let e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0;
      var a = be(t, e2, r, n);
      if (a - e2 > 16 && t.buffer && we) return we.decode(t.subarray(e2, a));
      for (var i = ""; e2 < a; ) {
        var s = t[e2++];
        if (!(s & 128)) {
          i += String.fromCharCode(s);
          continue;
        }
        var u = t[e2++] & 63;
        if ((s & 224) == 192) {
          i += String.fromCharCode((s & 31) << 6 | u);
          continue;
        }
        var c = t[e2++] & 63;
        if ((s & 240) == 224 ? s = (s & 15) << 12 | u << 6 | c : s = (s & 7) << 18 | u << 12 | c << 6 | t[e2++] & 63, s < 65536) i += String.fromCharCode(s);
        else {
          var h = s - 65536;
          i += String.fromCharCode(55296 | h >> 10, 56320 | h & 1023);
        }
      }
      return i;
    }, fn = (t, e2, r) => t ? $e(W, t, e2, r) : "", hn = (t, e2) => {
      e2 = F(e2), j(t, {
        name: e2,
        fromWireType(r) {
          var n = T[r >> 2], a = r + 4, i;
          return i = fn(a, n, true), z(r), i;
        },
        toWireType(r, n) {
          n instanceof ArrayBuffer && (n = new Uint8Array(n));
          var a, i = typeof n == "string";
          i || ArrayBuffer.isView(n) && n.BYTES_PER_ELEMENT == 1 || $("Cannot pass non-string to std::string"), i ? a = ge(n) : a = n.length;
          var s = Xt(4 + a + 1), u = s + 4;
          return T[s >> 2] = a, i ? rt(n, u, a + 1) : W.set(n, u), r !== null && r.push(z, s), s;
        },
        readValueFromPointer: it,
        destructorFunction(r) {
          z(r);
        }
      });
    }, Ce = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, dn = (t, e2, r) => {
      var n = t >> 1, a = be(at, n, e2 / 2, r);
      if (a - n > 16 && Ce) return Ce.decode(at.subarray(n, a));
      for (var i = "", s = n; s < a; ++s) {
        var u = at[s];
        i += String.fromCharCode(u);
      }
      return i;
    }, pn = (t, e2, r) => {
      if (r != null || (r = 2147483647), r < 2) return 0;
      r -= 2;
      for (var n = e2, a = r < t.length * 2 ? r / 2 : t.length, i = 0; i < a; ++i) {
        var s = t.charCodeAt(i);
        dt[e2 >> 1] = s, e2 += 2;
      }
      return dt[e2 >> 1] = 0, e2 - n;
    }, yn = (t) => t.length * 2, vn = (t, e2, r) => {
      for (var n = "", a = t >> 2, i = 0; !(i >= e2 / 4); i++) {
        var s = T[a + i];
        if (!s && !r) break;
        n += String.fromCodePoint(s);
      }
      return n;
    }, mn = (t, e2, r) => {
      if (r != null || (r = 2147483647), r < 4) return 0;
      for (var n = e2, a = n + r - 4, i = 0; i < t.length; ++i) {
        var s = t.codePointAt(i);
        if (s > 65535 && i++, ot[e2 >> 2] = s, e2 += 4, e2 + 4 > a) break;
      }
      return ot[e2 >> 2] = 0, e2 - n;
    }, gn = (t) => {
      for (var e2 = 0, r = 0; r < t.length; ++r) {
        var n = t.codePointAt(r);
        n > 65535 && r++, e2 += 4;
      }
      return e2;
    }, wn = (t, e2, r) => {
      r = F(r);
      var n, a, i;
      e2 === 2 ? (n = dn, a = pn, i = yn) : (n = vn, a = mn, i = gn), j(t, {
        name: r,
        fromWireType: (s) => {
          var u = T[s >> 2], c = n(s + 4, u * e2, true);
          return z(s), c;
        },
        toWireType: (s, u) => {
          typeof u != "string" && $(`Cannot pass non-string to C++ string type ${r}`);
          var c = i(u), h = Xt(4 + c + e2);
          return T[h >> 2] = c / e2, a(u, h + 4, c + e2), s !== null && s.push(z, h), h;
        },
        readValueFromPointer: it,
        destructorFunction(s) {
          z(s);
        }
      });
    }, bn = (t, e2, r, n, a, i) => {
      gt[t] = {
        name: F(e2),
        rawConstructor: L(r, n),
        rawDestructor: L(a, i),
        fields: []
      };
    }, $n = (t, e2, r, n, a, i, s, u, c, h) => {
      gt[t].fields.push({
        fieldName: F(e2),
        getterReturnType: r,
        getter: L(n, a),
        getterContext: i,
        setterArgumentType: s,
        setter: L(u, c),
        setterContext: h
      });
    }, Cn = (t, e2) => {
      e2 = F(e2), j(t, {
        isVoid: true,
        name: e2,
        fromWireType: () => {
        },
        toWireType: (r, n) => {
        }
      });
    }, zt = [], Tn = (t) => {
      var e2 = zt.length;
      return zt.push(t), e2;
    }, En = (t, e2) => {
      var r = Z[t];
      return r === void 0 && $(`${e2} has unknown type ${pe(t)}`), r;
    }, Pn = (t, e2) => {
      for (var r = new Array(t), n = 0; n < t; ++n) r[n] = En(T[e2 + n * 4 >> 2], `parameter ${n}`);
      return r;
    }, On = (t, e2, r) => {
      var n = [], a = t(n, r);
      return n.length && (T[e2 >> 2] = B.toHandle(n)), a;
    }, _n = {}, Te = (t) => {
      var e2 = _n[t];
      return e2 === void 0 ? F(t) : e2;
    }, xn = (t, e2, r) => {
      var n = 8, [a, ...i] = Pn(t, e2), s = a.toWireType.bind(a), u = i.map((y) => y.readValueFromPointer.bind(y));
      t--;
      var c = new Array(t), h = (y, C, P, S) => {
        for (var x = 0, O = 0; O < t; ++O) c[O] = u[O](S + x), x += n;
        var E;
        switch (r) {
          case 0:
            E = B.toValue(y).apply(null, c);
            break;
          case 2:
            E = Reflect.construct(B.toValue(y), c);
            break;
          case 3:
            E = c[0];
            break;
          case 1:
            E = B.toValue(y)[Te(C)](...c);
            break;
        }
        return On(s, P, E);
      }, p = `methodCaller<(${i.map((y) => y.name)}) => ${a.name}>`;
      return Tn(Ut(p, h));
    }, Sn = (t) => t ? (t = Te(t), B.toHandle(globalThis[t])) : B.toHandle(globalThis), In = (t) => {
      t > 9 && (J[t + 1] += 1);
    }, Dn = (t, e2, r, n, a) => zt[t](e2, r, n, a), Mn = (t) => {
      var e2 = B.toValue(t);
      Lt(e2), Nt(t);
    }, An = (t, e2, r, n) => {
      var a = (/* @__PURE__ */ new Date()).getFullYear(), i = new Date(a, 0, 1), s = new Date(a, 6, 1), u = i.getTimezoneOffset(), c = s.getTimezoneOffset(), h = Math.max(u, c);
      T[t >> 2] = h * 60, ot[e2 >> 2] = +(u != c);
      var p = (P) => {
        var S = P >= 0 ? "-" : "+", x = Math.abs(P), O = String(Math.floor(x / 60)).padStart(2, "0"), E = String(x % 60).padStart(2, "0");
        return `UTC${S}${O}${E}`;
      }, y = p(u), C = p(c);
      c < u ? (rt(y, r, 17), rt(C, n, 17)) : (rt(y, n, 17), rt(C, r, 17));
    }, Fn = () => 2147483648, Rn = (t, e2) => Math.ceil(t / e2) * e2, Ln = (t) => {
      var e2 = Pt.buffer.byteLength, r = (t - e2 + 65535) / 65536 | 0;
      try {
        return Pt.grow(r), re(), 1;
      } catch {
      }
    }, jn = (t) => {
      var e2 = W.length;
      t >>>= 0;
      var r = Fn();
      if (t > r) return false;
      for (var n = 1; n <= 4; n *= 2) {
        var a = e2 * (1 + 0.2 / n);
        a = Math.min(a, t + 100663296);
        var i = Math.min(r, Rn(Math.max(t, a), 65536)), s = Ln(i);
        if (s) return true;
      }
      return false;
    }, Gt = {}, Bn = () => _ || "./this.program", ct = () => {
      if (!ct.strings) {
        var t = (typeof navigator == "object" && navigator.language || "C").replace("-", "_") + ".UTF-8", e2 = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: t,
          _: Bn()
        };
        for (var r in Gt) Gt[r] === void 0 ? delete e2[r] : e2[r] = Gt[r];
        var n = [];
        for (var r in e2) n.push(`${r}=${e2[r]}`);
        ct.strings = n;
      }
      return ct.strings;
    }, Un = (t, e2) => {
      var r = 0, n = 0;
      for (var a of ct()) {
        var i = e2 + r;
        T[t + n >> 2] = i, r += rt(a, i, 1 / 0) + 1, n += 4;
      }
      return 0;
    }, Vn = (t, e2) => {
      var r = ct();
      T[t >> 2] = r.length;
      var n = 0;
      for (var a of r) n += ge(a) + 1;
      return T[e2 >> 2] = n, 0;
    }, Wn = (t) => 52;
    function Hn(t, e2, r, n, a) {
      return 70;
    }
    var kn = [null, [], []], Nn = (t, e2) => {
      var r = kn[t];
      e2 === 0 || e2 === 10 ? ((t === 1 ? nt : V)($e(r)), r.length = 0) : r.push(e2);
    }, zn = (t, e2, r, n) => {
      for (var a = 0, i = 0; i < r; i++) {
        var s = T[e2 >> 2], u = T[e2 + 4 >> 2];
        e2 += 8;
        for (var c = 0; c < u; c++) Nn(t, W[s + c]);
        a += u;
      }
      return T[n >> 2] = a, 0;
    }, Gn = (t) => t;
    if (Ar(), zr(), f.noExitRuntime && f.noExitRuntime, f.print && (nt = f.print), f.printErr && (V = f.printErr), f.wasmBinary && (q = f.wasmBinary), f.arguments && f.arguments, f.thisProgram && (_ = f.thisProgram), f.preInit) for (typeof f.preInit == "function" && (f.preInit = [f.preInit]); f.preInit.length > 0; ) f.preInit.shift()();
    var Ee, z, Xt, Pe, v, Oe, _e, xe, Se, Ie, De, Me, Ae, Pt, Fe;
    function Xn(t) {
      Ee = t.ya, z = f._free = t.za, Xt = f._malloc = t.Ba, Pe = t.Ca, v = t.Da, Oe = t.Ea, _e = t.Fa, xe = t.Ga, Se = t.Ha, Ie = t.Ia, De = t.Ja, N.viijii = t.Ka, Me = N.iiijj = t.La, N.jiji = t.Ma, Ae = N.jiiii = t.Na, N.iiiiij = t.Oa, N.iiiiijj = t.Pa, N.iiiiiijj = t.Qa, Pt = t.wa, Fe = t.Aa;
    }
    var qn = {
      s: vr,
      w: mr,
      a: gr,
      j: wr,
      m: br,
      Q: $r,
      p: Cr,
      U: Tr,
      d: Er,
      ca: Pr,
      ta: _r,
      ba: xr,
      oa: Ir,
      ra: Zr,
      qa: Jr,
      H: Kr,
      ma: tn,
      X: rn,
      Y: nn,
      x: on,
      t: sn,
      sa: cn,
      na: hn,
      R: wn,
      I: bn,
      ua: $n,
      pa: Cn,
      N: xn,
      va: Nt,
      D: Sn,
      S: In,
      M: Dn,
      ia: Mn,
      da: An,
      ga: jn,
      ea: Un,
      fa: Vn,
      ha: Wn,
      $: Hn,
      V: zn,
      K: ma,
      C: ba,
      Z: ea,
      T: Oa,
      r: da,
      b: Kn,
      E: va,
      ka: Ca,
      c: ra,
      ja: Ta,
      h: ta,
      i: oa,
      q: ca,
      P: ya,
      v: fa,
      F: ha,
      L: pa,
      z: $a,
      J: _a,
      aa: xa,
      _: Sa,
      f: na,
      l: Yn,
      e: Jn,
      g: Qn,
      O: Pa,
      k: Zn,
      la: ga,
      o: la,
      B: ia,
      u: wa,
      W: ua,
      A: Ea,
      n: aa,
      G: sa,
      y: Gn
    };
    function Yn(t, e2) {
      var r = g();
      try {
        w(t)(e2);
      } catch (n) {
        if (m(r), n !== n + 0) throw n;
        v(1, 0);
      }
    }
    function Zn(t, e2, r, n, a) {
      var i = g();
      try {
        w(t)(e2, r, n, a);
      } catch (s) {
        if (m(i), s !== s + 0) throw s;
        v(1, 0);
      }
    }
    function Qn(t, e2, r, n) {
      var a = g();
      try {
        w(t)(e2, r, n);
      } catch (i) {
        if (m(a), i !== i + 0) throw i;
        v(1, 0);
      }
    }
    function Jn(t, e2, r) {
      var n = g();
      try {
        w(t)(e2, r);
      } catch (a) {
        if (m(n), a !== a + 0) throw a;
        v(1, 0);
      }
    }
    function Kn(t, e2) {
      var r = g();
      try {
        return w(t)(e2);
      } catch (n) {
        if (m(r), n !== n + 0) throw n;
        v(1, 0);
      }
    }
    function ta(t, e2, r, n) {
      var a = g();
      try {
        return w(t)(e2, r, n);
      } catch (i) {
        if (m(a), i !== i + 0) throw i;
        v(1, 0);
      }
    }
    function ea(t, e2, r, n, a, i) {
      var s = g();
      try {
        return w(t)(e2, r, n, a, i);
      } catch (u) {
        if (m(s), u !== u + 0) throw u;
        v(1, 0);
      }
    }
    function ra(t, e2, r) {
      var n = g();
      try {
        return w(t)(e2, r);
      } catch (a) {
        if (m(n), a !== a + 0) throw a;
        v(1, 0);
      }
    }
    function na(t) {
      var e2 = g();
      try {
        w(t)();
      } catch (r) {
        if (m(e2), r !== r + 0) throw r;
        v(1, 0);
      }
    }
    function aa(t, e2, r, n, a, i, s, u, c, h, p) {
      var y = g();
      try {
        w(t)(e2, r, n, a, i, s, u, c, h, p);
      } catch (C) {
        if (m(y), C !== C + 0) throw C;
        v(1, 0);
      }
    }
    function oa(t, e2, r, n, a) {
      var i = g();
      try {
        return w(t)(e2, r, n, a);
      } catch (s) {
        if (m(i), s !== s + 0) throw s;
        v(1, 0);
      }
    }
    function ia(t, e2, r, n, a, i, s) {
      var u = g();
      try {
        w(t)(e2, r, n, a, i, s);
      } catch (c) {
        if (m(u), c !== c + 0) throw c;
        v(1, 0);
      }
    }
    function sa(t, e2, r, n, a, i, s, u, c, h, p, y, C, P, S, x) {
      var O = g();
      try {
        w(t)(e2, r, n, a, i, s, u, c, h, p, y, C, P, S, x);
      } catch (E) {
        if (m(O), E !== E + 0) throw E;
        v(1, 0);
      }
    }
    function ua(t, e2, r, n, a, i, s, u, c) {
      var h = g();
      try {
        w(t)(e2, r, n, a, i, s, u, c);
      } catch (p) {
        if (m(h), p !== p + 0) throw p;
        v(1, 0);
      }
    }
    function ca(t, e2, r, n, a, i) {
      var s = g();
      try {
        return w(t)(e2, r, n, a, i);
      } catch (u) {
        if (m(s), u !== u + 0) throw u;
        v(1, 0);
      }
    }
    function la(t, e2, r, n, a, i) {
      var s = g();
      try {
        w(t)(e2, r, n, a, i);
      } catch (u) {
        if (m(s), u !== u + 0) throw u;
        v(1, 0);
      }
    }
    function fa(t, e2, r, n, a, i, s) {
      var u = g();
      try {
        return w(t)(e2, r, n, a, i, s);
      } catch (c) {
        if (m(u), c !== c + 0) throw c;
        v(1, 0);
      }
    }
    function ha(t, e2, r, n, a, i, s, u) {
      var c = g();
      try {
        return w(t)(e2, r, n, a, i, s, u);
      } catch (h) {
        if (m(c), h !== h + 0) throw h;
        v(1, 0);
      }
    }
    function da(t) {
      var e2 = g();
      try {
        return w(t)();
      } catch (r) {
        if (m(e2), r !== r + 0) throw r;
        v(1, 0);
      }
    }
    function pa(t, e2, r, n, a, i, s, u, c) {
      var h = g();
      try {
        return w(t)(e2, r, n, a, i, s, u, c);
      } catch (p) {
        if (m(h), p !== p + 0) throw p;
        v(1, 0);
      }
    }
    function ya(t, e2, r, n, a, i, s) {
      var u = g();
      try {
        return w(t)(e2, r, n, a, i, s);
      } catch (c) {
        if (m(u), c !== c + 0) throw c;
        v(1, 0);
      }
    }
    function va(t, e2, r, n) {
      var a = g();
      try {
        return w(t)(e2, r, n);
      } catch (i) {
        if (m(a), i !== i + 0) throw i;
        v(1, 0);
      }
    }
    function ma(t, e2, r, n) {
      var a = g();
      try {
        return w(t)(e2, r, n);
      } catch (i) {
        if (m(a), i !== i + 0) throw i;
        v(1, 0);
      }
    }
    function ga(t, e2, r, n, a, i, s, u) {
      var c = g();
      try {
        w(t)(e2, r, n, a, i, s, u);
      } catch (h) {
        if (m(c), h !== h + 0) throw h;
        v(1, 0);
      }
    }
    function wa(t, e2, r, n, a, i, s, u) {
      var c = g();
      try {
        w(t)(e2, r, n, a, i, s, u);
      } catch (h) {
        if (m(c), h !== h + 0) throw h;
        v(1, 0);
      }
    }
    function ba(t, e2, r, n, a, i) {
      var s = g();
      try {
        return w(t)(e2, r, n, a, i);
      } catch (u) {
        if (m(s), u !== u + 0) throw u;
        v(1, 0);
      }
    }
    function $a(t, e2, r, n, a, i, s, u, c, h) {
      var p = g();
      try {
        return w(t)(e2, r, n, a, i, s, u, c, h);
      } catch (y) {
        if (m(p), y !== y + 0) throw y;
        v(1, 0);
      }
    }
    function Ca(t, e2, r) {
      var n = g();
      try {
        return w(t)(e2, r);
      } catch (a) {
        if (m(n), a !== a + 0) throw a;
        v(1, 0);
      }
    }
    function Ta(t, e2, r, n, a) {
      var i = g();
      try {
        return w(t)(e2, r, n, a);
      } catch (s) {
        if (m(i), s !== s + 0) throw s;
        v(1, 0);
      }
    }
    function Ea(t, e2, r, n, a, i, s, u, c, h) {
      var p = g();
      try {
        w(t)(e2, r, n, a, i, s, u, c, h);
      } catch (y) {
        if (m(p), y !== y + 0) throw y;
        v(1, 0);
      }
    }
    function Pa(t, e2, r, n, a, i, s) {
      var u = g();
      try {
        w(t)(e2, r, n, a, i, s);
      } catch (c) {
        if (m(u), c !== c + 0) throw c;
        v(1, 0);
      }
    }
    function Oa(t, e2, r, n) {
      var a = g();
      try {
        return w(t)(e2, r, n);
      } catch (i) {
        if (m(a), i !== i + 0) throw i;
        v(1, 0);
      }
    }
    function _a(t, e2, r, n, a, i, s, u, c, h, p, y) {
      var C = g();
      try {
        return w(t)(e2, r, n, a, i, s, u, c, h, p, y);
      } catch (P) {
        if (m(C), P !== P + 0) throw P;
        v(1, 0);
      }
    }
    function xa(t, e2, r, n, a, i, s) {
      var u = g();
      try {
        return Me(t, e2, r, n, a, i, s);
      } catch (c) {
        if (m(u), c !== c + 0) throw c;
        v(1, 0);
      }
    }
    function Sa(t, e2, r, n, a) {
      var i = g();
      try {
        return Ae(t, e2, r, n, a);
      } catch (s) {
        if (m(i), s !== s + 0) throw s;
        v(1, 0);
      }
    }
    function Ia() {
      ar();
      function t() {
        var e2, r;
        f.calledRun = true, !ht && (or(), (e2 = Qt) === null || e2 === void 0 || e2(f), (r = f.onRuntimeInitialized) === null || r === void 0 || r.call(f), ir());
      }
      f.setStatus ? (f.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => f.setStatus(""), 1), t();
      }, 1)) : t();
    }
    var lt;
    return lt = yield dr(), Ia(), ee ? l = f : l = new Promise((t, e2) => {
      Qt = t, Jt = e2;
    }), l;
  });
}
function qe(o) {
  return Xe(Zt, o);
}
function Za(o, l) {
  return __async(this, null, function* () {
    return Ya(Zt, o, l);
  });
}
var Ye = [["aztec", "Aztec"], ["code_128", "Code128"], ["code_39", "Code39"], ["code_93", "Code93"], ["codabar", "Codabar"], ["databar", "DataBar"], ["databar_expanded", "DataBarExpanded"], ["databar_limited", "DataBarLimited"], ["data_matrix", "DataMatrix"], ["dx_film_edge", "DXFilmEdge"], ["ean_13", "EAN-13"], ["ean_8", "EAN-8"], ["itf", "ITF"], ["maxi_code", "MaxiCode"], ["micro_qr_code", "MicroQRCode"], ["pdf417", "PDF417"], ["qr_code", "QRCode"], ["rm_qr_code", "rMQRCode"], ["upc_a", "UPC-A"], ["upc_e", "UPC-E"], ["linear_codes", "Linear-Codes"], ["matrix_codes", "Matrix-Codes"], ["any", "Any"]];
var Qa = [...Ye, ["unknown"]].map((o) => o[0]);
var Yt = new Map(Ye);
function Ja(o) {
  for (const [l, d] of Yt) if (o === d) return l;
  return "unknown";
}
function Ka(o) {
  if (Ze(o)) return {
    width: o.naturalWidth,
    height: o.naturalHeight
  };
  if (Qe(o)) return {
    width: o.width.baseVal.value,
    height: o.height.baseVal.value
  };
  if (Je(o)) return {
    width: o.videoWidth,
    height: o.videoHeight
  };
  if (tr(o)) return {
    width: o.width,
    height: o.height
  };
  if (rr(o)) return {
    width: o.displayWidth,
    height: o.displayHeight
  };
  if (Ke(o)) return {
    width: o.width,
    height: o.height
  };
  if (er(o)) return {
    width: o.width,
    height: o.height
  };
  throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.");
}
function Ze(o) {
  var l, d;
  try {
    return o instanceof ((d = (l = o == null ? void 0 : o.ownerDocument) == null ? void 0 : l.defaultView) == null ? void 0 : d.HTMLImageElement);
  } catch {
    return false;
  }
}
function Qe(o) {
  var l, d;
  try {
    return o instanceof ((d = (l = o == null ? void 0 : o.ownerDocument) == null ? void 0 : l.defaultView) == null ? void 0 : d.SVGImageElement);
  } catch {
    return false;
  }
}
function Je(o) {
  var l, d;
  try {
    return o instanceof ((d = (l = o == null ? void 0 : o.ownerDocument) == null ? void 0 : l.defaultView) == null ? void 0 : d.HTMLVideoElement);
  } catch {
    return false;
  }
}
function Ke(o) {
  var l, d;
  try {
    return o instanceof ((d = (l = o == null ? void 0 : o.ownerDocument) == null ? void 0 : l.defaultView) == null ? void 0 : d.HTMLCanvasElement);
  } catch {
    return false;
  }
}
function tr(o) {
  try {
    return o instanceof ImageBitmap || Object.prototype.toString.call(o) === "[object ImageBitmap]";
  } catch {
    return false;
  }
}
function er(o) {
  try {
    return o instanceof OffscreenCanvas || Object.prototype.toString.call(o) === "[object OffscreenCanvas]";
  } catch {
    return false;
  }
}
function rr(o) {
  try {
    return o instanceof VideoFrame || Object.prototype.toString.call(o) === "[object VideoFrame]";
  } catch {
    return false;
  }
}
function to(o) {
  try {
    return o instanceof Blob || Object.prototype.toString.call(o) === "[object Blob]";
  } catch {
    return false;
  }
}
function eo(o) {
  try {
    return o instanceof ImageData || Object.prototype.toString.call(o) === "[object ImageData]";
  } catch {
    return false;
  }
}
function ro(o, l) {
  try {
    const d = new OffscreenCanvas(o, l);
    if (d.getContext("2d") instanceof OffscreenCanvasRenderingContext2D) return d;
    throw void 0;
  } catch {
    const d = document.createElement("canvas");
    return d.width = o, d.height = l, d;
  }
}
function nr(o) {
  return __async(this, null, function* () {
    if (Ze(o) && !(yield io(o))) throw new DOMException("Failed to load or decode HTMLImageElement.", "InvalidStateError");
    if (Qe(o) && !(yield so(o))) throw new DOMException("Failed to load or decode SVGImageElement.", "InvalidStateError");
    if (rr(o) && uo(o)) throw new DOMException("VideoFrame is closed.", "InvalidStateError");
    if (Je(o) && (o.readyState === 0 || o.readyState === 1)) throw new DOMException("Invalid element or state.", "InvalidStateError");
    if (tr(o) && lo(o)) throw new DOMException("The image source is detached.", "InvalidStateError");
    const {
      width: l,
      height: d
    } = Ka(o);
    if (l === 0 || d === 0) return null;
    const f = ro(l, d).getContext("2d");
    f.drawImage(o, 0, 0);
    try {
      return f.getImageData(0, 0, l, d);
    } catch {
      throw new DOMException("Source would taint origin.", "SecurityError");
    }
  });
}
function no(o) {
  return __async(this, null, function* () {
    let l;
    try {
      l = yield createImageBitmap(o);
    } catch {
      try {
        if (globalThis.Image) {
          l = new Image();
          let f = "";
          try {
            f = URL.createObjectURL(o), l.src = f, yield l.decode();
          } finally {
            URL.revokeObjectURL(f);
          }
        } else return o;
      } catch {
        throw new DOMException("Failed to load or decode Blob.", "InvalidStateError");
      }
    }
    return yield nr(l);
  });
}
function ao(o) {
  const {
    width: l,
    height: d
  } = o;
  if (l === 0 || d === 0) return null;
  const b = o.getContext("2d");
  try {
    return b.getImageData(0, 0, l, d);
  } catch {
    throw new DOMException("Source would taint origin.", "SecurityError");
  }
}
function oo(o) {
  return __async(this, null, function* () {
    if (to(o)) return yield no(o);
    if (eo(o)) {
      if (co(o)) throw new DOMException("The image data has been detached.", "InvalidStateError");
      return o;
    }
    return Ke(o) || er(o) ? ao(o) : yield nr(o);
  });
}
function io(o) {
  return __async(this, null, function* () {
    try {
      return yield o.decode(), true;
    } catch {
      return false;
    }
  });
}
function so(o) {
  return __async(this, null, function* () {
    var l;
    try {
      return yield (l = o.decode) == null ? void 0 : l.call(o), true;
    } catch {
      return false;
    }
  });
}
function uo(o) {
  return o.format === null;
}
function co(o) {
  return o.data.buffer.byteLength === 0;
}
function lo(o) {
  return o.width === 0 && o.height === 0;
}
function Ge(o, l) {
  return fo(o) ? new DOMException(`${l}: ${o.message}`, o.name) : ho(o) ? new o.constructor(`${l}: ${o.message}`) : new Error(`${l}: ${o}`);
}
function fo(o) {
  return o instanceof DOMException || Object.prototype.toString.call(o) === "[object DOMException]";
}
function ho(o) {
  return o instanceof Error || Object.prototype.toString.call(o) === "[object Error]";
}
var ft;
var bo = class {
  constructor(l = {}) {
    He(this, ft);
    var d;
    try {
      const b = (d = l == null ? void 0 : l.formats) == null ? void 0 : d.filter((f) => f !== "unknown");
      if ((b == null ? void 0 : b.length) === 0) throw new TypeError("Hint option provided, but is empty.");
      for (const f of b != null ? b : []) if (!Yt.has(f)) throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${f}' is not a valid enum value of type BarcodeFormat.`);
      ke(this, ft, b != null ? b : []), qe({
        fireImmediately: true
      }).catch(() => {
      });
    } catch (b) {
      throw Ge(b, "Failed to construct 'BarcodeDetector'");
    }
  }
  static getSupportedFormats() {
    return __async(this, null, function* () {
      return Qa.filter((l) => l !== "unknown");
    });
  }
  detect(l) {
    return __async(this, null, function* () {
      try {
        const d = yield oo(l);
        if (d === null) return [];
        let b;
        const f = {
          tryCode39ExtendedMode: false,
          textMode: "Plain",
          formats: We(this, ft).map((I) => Yt.get(I))
        };
        try {
          b = yield Za(d, f);
        } catch (I) {
          throw console.error(I), new DOMException("Barcode detection service unavailable.", "NotSupportedError");
        }
        return b.map((I) => {
          const {
            topLeft: {
              x: D,
              y: M
            },
            topRight: {
              x: _,
              y: A
            },
            bottomLeft: {
              x: U,
              y: G
            },
            bottomRight: {
              x: tt,
              y: X
            }
          } = I.position, nt = Math.min(D, _, U, tt), V = Math.min(M, A, G, X), q = Math.max(D, _, U, tt), ht = Math.max(M, A, G, X);
          return {
            boundingBox: new DOMRectReadOnly(nt, V, q - nt, ht - V),
            rawValue: I.text,
            format: Ja(I.format),
            cornerPoints: [{
              x: D,
              y: M
            }, {
              x: _,
              y: A
            }, {
              x: tt,
              y: X
            }, {
              x: U,
              y: G
            }]
          };
        });
      } catch (d) {
        throw Ge(d, "Failed to execute 'detect' on 'BarcodeDetector'");
      }
    });
  }
};
ft = /* @__PURE__ */ new WeakMap();

// node_modules/barcode-detector/dist/es/polyfill.js
var e;
(e = globalThis.BarcodeDetector) != null || (globalThis.BarcodeDetector = bo);

// src/main.ts
function HttpLoaderFactory(httpClient) {
  return new TranslateHttpLoader(httpClient);
}
bootstrapApplication(AppComponent, {
  providers: [
    provideLottieOptions({
      player: () => import(
        /* webpackChunkName: 'lottie-web' */
        "./lottie-6DKF7LC3.js"
      )
    }),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideNgxStripe(environment.stripePublicKey),
    provideIonicAngular({ innerHTMLTemplatesEnabled: true, mode: "ios" }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    ...sentryProviders,
    importProvidersFrom(IonicStorageModule.forRoot({}), InlineSVGModule.forRoot(), TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
});
configureAmplify();
export {
  HttpLoaderFactory
};
//# sourceMappingURL=main.js.map
