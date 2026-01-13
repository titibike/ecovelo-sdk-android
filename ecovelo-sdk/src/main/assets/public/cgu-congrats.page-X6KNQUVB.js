import {
  ConfettiComponent
} from "./chunk-ILM6SVY3.js";
import {
  ActivatedRoute,
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
  ɵɵpropertyInterpolate,
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

// src/app/pages/congrats/cgu-congrats/cgu-congrats.page.ts
var _CguCongratsPage = class _CguCongratsPage {
  constructor(route, router) {
    this.route = route;
    this.router = router;
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      this.route.queryParams.subscribe((params) => {
        if (params["nextUrl"]) {
          setTimeout(() => {
            this.router.navigate([params["nextUrl"]], { replaceUrl: true });
          }, 5e3);
        } else {
          setTimeout(() => {
            this.router.navigate(["/account/settings/cgu"], { replaceUrl: true });
          }, 5e3);
        }
      });
    });
  }
};
_CguCongratsPage.\u0275fac = function CguCongratsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CguCongratsPage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_CguCongratsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CguCongratsPage, selectors: [["app-cgu-congrats"]], decls: 12, vars: 11, consts: [["color", "primary", 1, "ion-text-center", "ion-justify-content-center", "ion-align-items-center", 3, "fullscreen"], [1, "fullheight"], [3, "count"], [1, "inner-content"], ["src", "assets/icon/animated/unlock.gif", 3, "alt"], [1, "ion-padding-top"]], template: function CguCongratsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "app-confetti", 2);
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "h1", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("count", 50);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(5, 5, "cgu_congrats.success_alt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "cgu_congrats.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "cgu_congrats.message"));
  }
}, dependencies: [
  IonContent,
  CommonModule,
  FormsModule,
  TranslateModule,
  TranslatePipe,
  ConfettiComponent
], styles: ["\n\n.fullheight[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.fullheight[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 300px;\n}\n.code[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  padding: 1rem 0rem 1rem 1rem;\n  font-size: 2rem;\n  letter-spacing: 1rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=cgu-congrats.page.css.map */"] });
var CguCongratsPage = _CguCongratsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CguCongratsPage, [{
    type: Component,
    args: [{ selector: "app-cgu-congrats", imports: [
      IonContent,
      CommonModule,
      FormsModule,
      TranslateModule,
      ConfettiComponent
    ], template: `<ion-content
  [fullscreen]="true"
  color="primary"
  class="ion-text-center ion-justify-content-center ion-align-items-center"
>
  <div class="fullheight">
    <app-confetti [count]="50"></app-confetti>
    <div class="inner-content">
      <img
        src="assets/icon/animated/unlock.gif"
        alt="{{ 'cgu_congrats.success_alt' | translate }}"
      />
      <h1 class="ion-padding-top">{{ 'cgu_congrats.title' | translate }}</h1>
      <p>{{ 'cgu_congrats.message' | translate }}</p>
    </div>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/congrats/cgu-congrats/cgu-congrats.page.scss */\n.fullheight {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.fullheight .inner-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 300px;\n}\n.code {\n  border: 1px solid #fff;\n  padding: 1rem 0rem 1rem 1rem;\n  font-size: 2rem;\n  letter-spacing: 1rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=cgu-congrats.page.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CguCongratsPage, { className: "CguCongratsPage", filePath: "src/app/pages/congrats/cgu-congrats/cgu-congrats.page.ts", lineNumber: 26 });
})();
export {
  CguCongratsPage
};
//# sourceMappingURL=cgu-congrats.page-X6KNQUVB.js.map
