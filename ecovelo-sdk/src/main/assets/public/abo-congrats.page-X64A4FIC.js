import {
  AbonnementWrapperService
} from "./chunk-JVXQQLXI.js";
import {
  LottieComponent
} from "./chunk-UDDFHALT.js";
import {
  IonContent,
  IonicModule
} from "./chunk-ULLB7OBK.js";
import "./chunk-7UN2TOGU.js";
import "./chunk-H4GUYJEZ.js";
import "./chunk-7NHGY2ON.js";
import {
  AppstateService
} from "./chunk-YSCBVZBE.js";
import "./chunk-5KPTYQ6O.js";
import "./chunk-FGJU3CJK.js";
import "./chunk-GFMHZGOY.js";
import "./chunk-Z4RNZNYE.js";
import "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  Router,
  TranslateModule,
  TranslatePipe,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
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

// src/app/pages/congrats/abonnements/abo-congrats.page.ts
var _c0 = (a0) => ({ program: a0 });
function AboCongratsPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "abo_congrats.waiting_validation", \u0275\u0275pureFunction1(4, _c0, ctx_r0.programName)), " ");
  }
}
function AboCongratsPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "abo_congrats.ready_to_ride", \u0275\u0275pureFunction1(4, _c0, ctx_r0.programName)));
  }
}
var _AboCongratsPage = class _AboCongratsPage {
  constructor(router, appStateService, storage, AbonnementWrapperService2) {
    this.router = router;
    this.appStateService = appStateService;
    this.storage = storage;
    this.AbonnementWrapperService = AbonnementWrapperService2;
    this.options = {
      path: "/assets/icon/animated/check.json"
    };
    effect(() => {
      this.currentAbonnement = this.AbonnementWrapperService.currentAbonnementState();
    });
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      yield this.storage.get("program").then((prg) => {
        this.programName = prg == null ? void 0 : prg.name;
      });
      setTimeout(() => {
        if (this.appStateService.getAppState().state === "onboarding" || this.appStateService.getAppState().state === "launch") {
          this.appStateService.setAppState({
            state: "new_cyclist",
            dring_state: {
              geolocation_dring: "not_shown"
            },
            push_notifications: "not_shown"
          });
          if (this.currentAbonnement.state == "waiting_validation") {
            this.router.navigate(["/account"], { replaceUrl: true });
          } else {
            this.router.navigate(["/renting"], { replaceUrl: true });
          }
        } else {
          this.router.navigate(["/map"], { replaceUrl: true });
        }
      }, 5e3);
    });
  }
};
_AboCongratsPage.\u0275fac = function AboCongratsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboCongratsPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AppstateService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(AbonnementWrapperService));
};
_AboCongratsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboCongratsPage, selectors: [["app-abo-congrats"]], decls: 8, vars: 6, consts: [["color", "primary", 1, "ion-text-center", "ion-justify-content-center", "ion-align-items-center", 3, "fullscreen"], [1, "ecl-congrats-modal"], [3, "options"]], template: function AboCongratsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "ng-lottie", 2);
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AboCongratsPage_Conditional_6_Template, 3, 6, "p")(7, AboCongratsPage_Conditional_7_Template, 3, 6, "p");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx.options);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "abo_congrats.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.programName && ctx.currentAbonnement.state === "waiting_validation" && ctx.currentAbonnement.abonnement.can_rent === false ? 6 : 7);
  }
}, dependencies: [IonicModule, IonContent, CommonModule, TranslateModule, TranslatePipe, LottieComponent], encapsulation: 2 });
var AboCongratsPage = _AboCongratsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboCongratsPage, [{
    type: Component,
    args: [{ selector: "app-abo-congrats", imports: [IonicModule, CommonModule, TranslateModule, LottieComponent], template: `<ion-content
  [fullscreen]="true"
  color="primary"
  class="ion-text-center ion-justify-content-center ion-align-items-center"
>
  <div class="ecl-congrats-modal">
    <ng-lottie [options]="options"></ng-lottie>

    <h1>{{ 'abo_congrats.title' | translate }}</h1>
    @if(programName && currentAbonnement.state === 'waiting_validation' &&
    currentAbonnement.abonnement.can_rent === false) {
    <p>
      {{ 'abo_congrats.waiting_validation' | translate:{program: programName} }}
    </p>
    }@else {
    <p>{{ 'abo_congrats.ready_to_ride' | translate:{program: programName} }}</p>
    }
  </div>
</ion-content>
` }]
  }], () => [{ type: Router }, { type: AppstateService }, { type: StorageService }, { type: AbonnementWrapperService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboCongratsPage, { className: "AboCongratsPage", filePath: "src/app/pages/congrats/abonnements/abo-congrats.page.ts", lineNumber: 21 });
})();
export {
  AboCongratsPage
};
//# sourceMappingURL=abo-congrats.page-X64A4FIC.js.map
