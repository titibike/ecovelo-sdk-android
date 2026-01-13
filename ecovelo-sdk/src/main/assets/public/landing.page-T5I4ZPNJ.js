import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import {
  InlineSVGDirective,
  InlineSVGModule
} from "./chunk-ZZAL55Y5.js";
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
import "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonRow,
  IonText,
  RouterLink,
  TranslateModule,
  TranslatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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

// src/app/pages/landing/landing.page.ts
var _c0 = () => ["/signup"];
var _c1 = () => ["/signin"];
var _c2 = () => ["/map"];
var _LandingPage = class _LandingPage {
  constructor(storageService, authService) {
    this.storageService = storageService;
    this.authService = authService;
    addIcons({ logoApple, logoGoogle });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.storageService.get("program").then((p) => {
        this.program = p;
      });
    });
  }
  signInWithSocialProvider(provider) {
    return __async(this, null, function* () {
      this.authService.signInWithSocialProvider(provider);
    });
  }
};
_LandingPage.\u0275fac = function LandingPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingPage)(\u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(AuthService));
};
_LandingPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingPage, selectors: [["app-landing"]], decls: 36, vars: 25, consts: [[1, "ion-padding"], ["aria-label", "Bike icon", 1, "program-bike", 3, "inlineSVG"], [1, "ion-justify-content-center", "ion-padding-top"], ["size", "12", "size-md", "6", "size-lg", "4"], ["expand", "block", "shape", "round", "color", "light", 3, "click"], ["name", "logo-apple", "slot", "start"], [1, "ion-justify-content-center"], ["name", "logo-google", "slot", "start"], ["size", "12", "size-md", "6", "size-lg", "4", 1, "ion-text-center"], ["color", "medium"], ["expand", "block", "shape", "round", 3, "routerLink"], [1, "ion-margin-bottom", "ion-text-center"], ["color", "primary"], [3, "routerLink"], [1, "ion-justify-content-center", "ecl-margin-bottom"], ["replaceUrl", "true", 3, "routerLink"]], template: function LandingPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 0);
    \u0275\u0275element(2, "div", 1);
    \u0275\u0275elementStart(3, "ion-row", 2)(4, "ion-col", 3)(5, "ion-button", 4);
    \u0275\u0275listener("click", function LandingPage_Template_ion_button_click_5_listener() {
      return ctx.signInWithSocialProvider("Apple");
    });
    \u0275\u0275element(6, "ion-icon", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "ion-row", 6)(10, "ion-col", 3)(11, "ion-button", 4);
    \u0275\u0275listener("click", function LandingPage_Template_ion_button_click_11_listener() {
      return ctx.signInWithSocialProvider("Google");
    });
    \u0275\u0275element(12, "ion-icon", 7);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "ion-row", 6)(16, "ion-col", 8)(17, "ion-text", 9);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "ion-row", 6)(21, "ion-col", 3)(22, "ion-button", 10);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "ion-row", 11)(26, "ion-col")(27, "ion-text", 12)(28, "u", 13);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "ion-row", 14)(32, "ion-text", 9)(33, "u", 15);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("inlineSVG", "/assets/svg/home_illustration.svg");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 10, "signup.apple_signup"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "signup.google_signup"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 14, "signup.or"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 16, "signup.title"));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(23, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 18, "signup.signin"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(24, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 20, "signup.skip_step"));
  }
}, dependencies: [
  IonContent,
  CommonModule,
  HeaderComponent,
  TranslateModule,
  TranslatePipe,
  IonRow,
  IonCol,
  IonButton,
  IonText,
  IonIcon,
  InlineSVGModule,
  InlineSVGDirective,
  RouterLink
], styles: ["\n\n.program-bike[_ngcontent-%COMP%], \n.program-logo[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n}\n.program-logo[_ngcontent-%COMP%] {\n  width: 70%;\n  max-height: 350px;\n}\n.program-bike[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 80%;\n  height: 40vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.program-bike[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=landing.page.css.map */"] });
var LandingPage = _LandingPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingPage, [{
    type: Component,
    args: [{ selector: "app-landing", imports: [
      IonContent,
      CommonModule,
      HeaderComponent,
      TranslateModule,
      IonRow,
      IonCol,
      IonButton,
      IonText,
      IonIcon,
      InlineSVGModule,
      RouterLink
    ], template: `<app-header></app-header>
<ion-content class="ion-padding">
  <!-- CONTAINER POUR CENTRER -->
  <!-- SVG -->
  <div
    class="program-bike"
    aria-label="Bike icon"
    [inlineSVG]="'/assets/svg/home_illustration.svg'"
  ></div>
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
  <!-- "OU" -->
  <ion-row class="ion-justify-content-center">
    <ion-col class="ion-text-center" size="12" size-md="6" size-lg="4">
      <ion-text color="medium"> {{"signup.or" | translate}} </ion-text>
    </ion-col>
  </ion-row>
  <!-- BOUTON CLASSIQUE -->
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="6" size-lg="4">
      <ion-button expand="block" shape="round" [routerLink]="['/signup']"
        >{{"signup.title" | translate}}</ion-button
      >
    </ion-col>
  </ion-row>
  <!-- REDIRECT_LOGIN -->
  <ion-row class="ion-margin-bottom ion-text-center">
    <ion-col>
      <ion-text color="primary">
        <u [routerLink]="['/signin']"> {{"signup.signin" | translate}}</u>
      </ion-text>
    </ion-col>
  </ion-row>
  <!-- SKIP -->
  <ion-row class="ion-justify-content-center ecl-margin-bottom">
    <ion-text color="medium">
      <u [routerLink]="['/map']" replaceUrl="true"
        >{{"signup.skip_step" | translate}}</u
      >
    </ion-text>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/landing/landing.page.scss */\n.program-bike,\n.program-logo {\n  margin: 0 auto;\n  text-align: center;\n}\n.program-logo {\n  width: 70%;\n  max-height: 350px;\n}\n.program-bike {\n  width: 80%;\n  max-width: 80%;\n  height: 40vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.program-bike > svg {\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=landing.page.css.map */\n"] }]
  }], () => [{ type: StorageService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingPage, { className: "LandingPage", filePath: "src/app/pages/landing/landing.page.ts", lineNumber: 40 });
})();
export {
  LandingPage
};
//# sourceMappingURL=landing.page-T5I4ZPNJ.js.map
