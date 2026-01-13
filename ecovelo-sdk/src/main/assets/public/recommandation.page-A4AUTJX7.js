import {
  ConfettiComponent
} from "./chunk-ILM6SVY3.js";
import {
  LottieComponent
} from "./chunk-UDDFHALT.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonContent,
  Router,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
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

// src/app/pages/congrats/recommandation/recommandation.page.ts
var _RecommandationPage = class _RecommandationPage {
  constructor(router) {
    this.router = router;
    this.options = {
      path: "/assets/icon/animated/thumb.json"
    };
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      setTimeout(() => {
        this.router.navigate(["/map"], { replaceUrl: true });
      }, 5e3);
    });
  }
};
_RecommandationPage.\u0275fac = function RecommandationPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecommandationPage)(\u0275\u0275directiveInject(Router));
};
_RecommandationPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecommandationPage, selectors: [["app-recommandation"]], decls: 10, vars: 9, consts: [["color", "primary", 1, "ion-text-center", "ion-justify-content-center", "ion-align-items-center", 3, "fullscreen"], [1, "ecl-congrats-modal"], [3, "count"], [3, "options"], [1, "ion-padding-top"]], template: function RecommandationPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "app-confetti", 2)(3, "ng-lottie", 3);
    \u0275\u0275elementStart(4, "h1", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("count", 50);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx.options);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "generic.thanks"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "recommandation_congrats.message"));
  }
}, dependencies: [
  IonContent,
  CommonModule,
  FormsModule,
  TranslateModule,
  TranslatePipe,
  ConfettiComponent,
  LottieComponent
], encapsulation: 2 });
var RecommandationPage = _RecommandationPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecommandationPage, [{
    type: Component,
    args: [{ selector: "app-recommandation", imports: [
      IonContent,
      CommonModule,
      FormsModule,
      TranslateModule,
      ConfettiComponent,
      LottieComponent
    ], template: `<ion-content
  [fullscreen]="true"
  color="primary"
  class="ion-text-center ion-justify-content-center ion-align-items-center"
>
  <div class="ecl-congrats-modal">
    <app-confetti [count]="50"></app-confetti>
    <ng-lottie [options]="options"></ng-lottie>
    <h1 class="ion-padding-top">{{ 'generic.thanks' | translate }}</h1>
    <p>{{ 'recommandation_congrats.message' | translate }}</p>
  </div>
</ion-content>
` }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecommandationPage, { className: "RecommandationPage", filePath: "src/app/pages/congrats/recommandation/recommandation.page.ts", lineNumber: 28 });
})();
export {
  RecommandationPage
};
//# sourceMappingURL=recommandation.page-A4AUTJX7.js.map
