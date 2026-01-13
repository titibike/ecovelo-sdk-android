import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-7GZOXTNY.js";
import {
  AuthService,
  Browser
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
  alertCircleOutline,
  logInOutline
} from "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService
} from "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  IonButton,
  IonContent,
  IonIcon,
  IonText,
  NgIf,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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

// src/app/pages/auth/external-auth-failed/external-auth-failed.page.ts
function ExternalAuthFailedPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "ion-text", 7)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "external_auth.signing_out"));
  }
}
function ExternalAuthFailedPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "ion-button", 13);
    \u0275\u0275listener("click", function ExternalAuthFailedPage_div_14_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signInAgain());
    });
    \u0275\u0275element(2, "ion-icon", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "external_auth.sign_in_again"), " ");
  }
}
var _ExternalAuthFailedPage = class _ExternalAuthFailedPage {
  constructor(translateService, route, router, authService, errorHandler) {
    this.translateService = translateService;
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.errorHandler = errorHandler;
    this.errorMessage = "";
    this.isSigningOut = true;
    addIcons({ logInOutline, alertCircleOutline });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.closeInAppBrowser();
      yield this.signOutUser();
      this.route.queryParams.subscribe((params) => {
        if (params["error"]) {
          this.errorMessage = params["error"];
        } else {
          this.errorMessage = this.translateService.instant("external_auth.generic_error");
        }
      });
    });
  }
  closeInAppBrowser() {
    return __async(this, null, function* () {
      try {
        if (Capacitor.isNativePlatform()) {
          yield Browser.close();
        }
      } catch (error) {
        console.log("No browser to close or error closing browser:", error);
      }
    });
  }
  signOutUser() {
    return __async(this, null, function* () {
      try {
        this.authService.signOut(true);
        this.isSigningOut = false;
      } catch (error) {
        this.errorHandler.handleError(error);
        this.isSigningOut = false;
      }
    });
  }
  signInAgain() {
    return __async(this, null, function* () {
      this.router.navigate(["/signin"], { replaceUrl: true });
    });
  }
};
_ExternalAuthFailedPage.\u0275fac = function ExternalAuthFailedPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExternalAuthFailedPage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_ExternalAuthFailedPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExternalAuthFailedPage, selectors: [["app-external-auth-failed"]], decls: 20, vars: 12, consts: [[3, "title"], [1, "ion-padding"], [1, "error-container"], [1, "error-icon"], ["name", "alert-circle-outline", "size", "large", "color", "danger"], [1, "error-title"], [1, "error-message"], ["color", "medium"], ["class", "loading-container", 4, "ngIf"], ["class", "action-buttons", 4, "ngIf"], [1, "help-text"], [1, "loading-container"], [1, "action-buttons"], ["expand", "block", "color", "primary", 1, "action-button", 3, "click"], ["name", "log-in-outline", "slot", "start"]], template: function ExternalAuthFailedPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "ion-content", 1)(3, "div", 2)(4, "div", 3);
    \u0275\u0275element(5, "ion-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6)(10, "ion-text", 7)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, ExternalAuthFailedPage_div_13_Template, 5, 3, "div", 8)(14, ExternalAuthFailedPage_div_14_Template, 5, 3, "div", 9);
    \u0275\u0275elementStart(15, "div", 10)(16, "ion-text", 7)(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 6, "external_auth.title"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "external_auth.failed_title"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSigningOut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isSigningOut);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 10, "external_auth.help_text"));
  }
}, dependencies: [
  IonContent,
  IonButton,
  IonText,
  IonIcon,
  CommonModule,
  NgIf,
  TranslateModule,
  TranslatePipe,
  HeaderComponent
], styles: ["\n\n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 70vh;\n  text-align: center;\n  padding: 2rem 1rem;\n}\n.error-icon[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.error-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  opacity: 0.8;\n}\n.error-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  margin-top: 0;\n}\n.error-message[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  max-width: 400px;\n}\n.error-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.loading-container[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  max-width: 400px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0;\n  text-align: center;\n  font-style: italic;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 320px;\n}\n.action-buttons[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  --border-radius: 12px;\n  height: 48px;\n}\n.action-buttons[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.help-text[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  max-width: 350px;\n}\n.help-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.4;\n  margin: 0;\n}\n@media (max-height: 600px) {\n  .error-container[_ngcontent-%COMP%] {\n    min-height: 60vh;\n    padding: 1rem;\n  }\n  .error-icon[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .error-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .error-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    margin-bottom: 0.5rem;\n  }\n  .error-message[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .help-text[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=external-auth-failed.page.css.map */"] });
var ExternalAuthFailedPage = _ExternalAuthFailedPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExternalAuthFailedPage, [{
    type: Component,
    args: [{ selector: "app-external-auth-failed", imports: [
      IonContent,
      IonButton,
      IonText,
      IonIcon,
      CommonModule,
      TranslateModule,
      HeaderComponent
    ], template: `<app-header [title]="'external_auth.title' | translate"></app-header>

<ion-content class="ion-padding">
  <div class="error-container">
    <!-- Error Icon -->
    <div class="error-icon">
      <ion-icon
        name="alert-circle-outline"
        size="large"
        color="danger"
      ></ion-icon>
    </div>

    <!-- Error Title -->
    <h2 class="error-title">{{ 'external_auth.failed_title' | translate }}</h2>

    <!-- Error Message -->
    <div class="error-message">
      <ion-text color="medium">
        <p>{{ errorMessage }}</p>
      </ion-text>
    </div>

    <!-- Loading State -->
    <div *ngIf="isSigningOut" class="loading-container">
      <ion-text color="medium">
        <p>{{ 'external_auth.signing_out' | translate }}</p>
      </ion-text>
    </div>

    <!-- Action Button -->
    <div *ngIf="!isSigningOut" class="action-buttons">
      <!-- Sign In Again Button -->
      <ion-button
        expand="block"
        color="primary"
        (click)="signInAgain()"
        class="action-button"
      >
        <ion-icon name="log-in-outline" slot="start"></ion-icon>
        {{ 'external_auth.sign_in_again' | translate }}
      </ion-button>
    </div>

    <!-- Help Text -->
    <div class="help-text">
      <ion-text color="medium">
        <p>{{ 'external_auth.help_text' | translate }}</p>
      </ion-text>
    </div>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/auth/external-auth-failed/external-auth-failed.page.scss */\n.error-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 70vh;\n  text-align: center;\n  padding: 2rem 1rem;\n}\n.error-icon {\n  margin-bottom: 2rem;\n}\n.error-icon ion-icon {\n  font-size: 4rem;\n  opacity: 0.8;\n}\n.error-title {\n  color: var(--ion-color-primary);\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  margin-top: 0;\n}\n.error-message {\n  margin-bottom: 2.5rem;\n  max-width: 400px;\n}\n.error-message p {\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.loading-container {\n  margin-bottom: 2.5rem;\n  max-width: 400px;\n}\n.loading-container p {\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0;\n  text-align: center;\n  font-style: italic;\n}\n.action-buttons {\n  width: 100%;\n  max-width: 320px;\n}\n.action-buttons .action-button {\n  margin-bottom: 1rem;\n  --border-radius: 12px;\n  height: 48px;\n}\n.action-buttons .action-button:last-child {\n  margin-bottom: 0;\n}\n.help-text {\n  margin-top: 2rem;\n  max-width: 350px;\n}\n.help-text p {\n  font-size: 0.875rem;\n  line-height: 1.4;\n  margin: 0;\n}\n@media (max-height: 600px) {\n  .error-container {\n    min-height: 60vh;\n    padding: 1rem;\n  }\n  .error-icon {\n    margin-bottom: 1rem;\n  }\n  .error-icon ion-icon {\n    font-size: 3rem;\n  }\n  .error-title {\n    font-size: 1.25rem;\n    margin-bottom: 0.5rem;\n  }\n  .error-message {\n    margin-bottom: 1.5rem;\n  }\n  .help-text {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=external-auth-failed.page.css.map */\n"] }]
  }], () => [{ type: TranslateService }, { type: ActivatedRoute }, { type: Router }, { type: AuthService }, { type: ErrorHandlerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExternalAuthFailedPage, { className: "ExternalAuthFailedPage", filePath: "src/app/pages/auth/external-auth-failed/external-auth-failed.page.ts", lineNumber: 33 });
})();
export {
  ExternalAuthFailedPage
};
//# sourceMappingURL=external-auth-failed.page-MEXOCTRW.js.map
