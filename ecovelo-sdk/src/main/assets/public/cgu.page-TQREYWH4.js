import {
  CguComponent
} from "./chunk-K2F2EZUY.js";
import {
  CguService
} from "./chunk-DDZL24WD.js";
import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-7GZOXTNY.js";
import "./chunk-7JCEDXGT.js";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonItem,
  IonText,
  IonicModule
} from "./chunk-ULLB7OBK.js";
import {
  AccountService
} from "./chunk-5KPTYQ6O.js";
import "./chunk-GFMHZGOY.js";
import "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService
} from "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
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

// src/app/pages/account/cgu/cgu.page.ts
function CguPage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 2)(1, "ion-text");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 2, "cgu.accepted_on"), " ", \u0275\u0275pipeBind2(4, 4, (ctx_r0.cyclistState.cyclist.registrations == null ? null : ctx_r0.cyclistState.cyclist.registrations.data == null ? null : ctx_r0.cyclistState.cyclist.registrations.data[0] == null ? null : ctx_r0.cyclistState.cyclist.registrations.data[0].terms_validated_at) * 1e3, "dd/MM/yyyy"), " ");
  }
}
function CguPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-card", 3)(1, "ion-card-content", 4)(2, "ion-text");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-button", 5);
    \u0275\u0275listener("click", function CguPage_Conditional_5_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.validateTerms());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 3, "cgu.update_message"), " ", \u0275\u0275pipeBind2(5, 5, ctx_r0.cguLoadingState.cgu.updated * 1e3, "dd/MM/yyyy"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "cgu.accept_button"), " ");
  }
}
var _CguPage = class _CguPage {
  constructor(cguService, router, accountService, errorHandler, route) {
    this.cguService = cguService;
    this.router = router;
    this.accountService = accountService;
    this.errorHandler = errorHandler;
    this.route = route;
    this.cyclistState = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    this.nextUrl = null;
    this.route.queryParams.subscribe((params) => {
      if (params["nextUrl"]) {
        this.nextUrl = params["nextUrl"];
      }
    });
    this.cguService.cguLoadingState.subscribe((state) => {
      this.cguLoadingState = state;
    });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
    });
  }
  validateTerms() {
    return __async(this, null, function* () {
      yield this.cguService.validateTerms().then(() => __async(this, null, function* () {
        yield this.router.navigate(["/cgu-congrats"], {
          queryParams: { nextUrl: this.nextUrl }
        });
      })).catch((error) => __async(this, null, function* () {
        this.errorHandler.handleError(error);
      }));
    });
  }
};
_CguPage.\u0275fac = function CguPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CguPage)(\u0275\u0275directiveInject(CguService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(ErrorHandlerService), \u0275\u0275directiveInject(ActivatedRoute));
};
_CguPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CguPage, selectors: [["app-cgu-page"]], decls: 6, vars: 2, consts: [[3, "defaultHref"], [1, "ion-padding"], ["lines", "none", 1, "ion-text-center"], [1, "ion-no-margin"], [1, "ion-text-center"], ["expand", "block", 1, "ion-margin", 3, "click"]], template: function CguPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275elementStart(1, "ion-content");
    \u0275\u0275element(2, "app-cgu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-footer", 1);
    \u0275\u0275template(4, CguPage_Conditional_4_Template, 5, 7, "ion-item", 2)(5, CguPage_Conditional_5_Template, 9, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account/settings");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.cguLoadingState.state === "success" && ctx.cyclistState.state === "active" && (ctx.cyclistState.cyclist.registrations == null ? null : ctx.cyclistState.cyclist.registrations.data == null ? null : ctx.cyclistState.cyclist.registrations.data[0] == null ? null : ctx.cyclistState.cyclist.registrations.data[0].terms_validated) ? 4 : ctx.cguLoadingState.state === "success" && ctx.cyclistState.state !== "unknown" && ctx.cyclistState.state !== "error" && (ctx.cyclistState.cyclist.registrations == null ? null : ctx.cyclistState.cyclist.registrations.data == null ? null : ctx.cyclistState.cyclist.registrations.data[0] == null ? null : ctx.cyclistState.cyclist.registrations.data[0].terms_validated) === false ? 5 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  IonicModule,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonItem,
  IonText,
  CguComponent,
  HeaderComponent,
  TranslateModule,
  TranslatePipe
], encapsulation: 2 });
var CguPage = _CguPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CguPage, [{
    type: Component,
    args: [{ selector: "app-cgu-page", imports: [
      CommonModule,
      IonicModule,
      CguComponent,
      HeaderComponent,
      TranslateModule
    ], template: `<app-header [defaultHref]="'/account/settings'"></app-header>
<ion-content>
  <app-cgu></app-cgu>
</ion-content>
<ion-footer class="ion-padding">
  @if(cguLoadingState.state === 'success' && cyclistState.state === 'active' &&
  cyclistState.cyclist.registrations?.data?.[0]?.terms_validated) {
  <ion-item lines="none" class="ion-text-center">
    <ion-text>
      {{ 'cgu.accepted_on' | translate }} {{
      cyclistState.cyclist.registrations?.data?.[0]?.terms_validated_at! * 1000
      | date : 'dd/MM/yyyy' }}
    </ion-text>
  </ion-item>
  } @else if (cguLoadingState.state === 'success' && cyclistState.state !==
  'unknown' && cyclistState.state !== 'error' &&
  cyclistState.cyclist.registrations?.data?.[0]?.terms_validated === false) {
  <ion-card class="ion-no-margin">
    <ion-card-content class="ion-text-center">
      <ion-text
        >{{ 'cgu.update_message' | translate }} {{ cguLoadingState.cgu.updated!
        * 1000 | date : 'dd/MM/yyyy' }}</ion-text
      >
    </ion-card-content>
  </ion-card>
  <ion-button (click)="validateTerms()" expand="block" class="ion-margin">
    {{ 'cgu.accept_button' | translate }}
  </ion-button>
  }
</ion-footer>
` }]
  }], () => [{ type: CguService }, { type: Router }, { type: AccountService }, { type: ErrorHandlerService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CguPage, { className: "CguPage", filePath: "src/app/pages/account/cgu/cgu.page.ts", lineNumber: 28 });
})();
export {
  CguPage
};
//# sourceMappingURL=cgu.page-TQREYWH4.js.map
