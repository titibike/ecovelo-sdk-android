import {
  ConfettiComponent
} from "./chunk-QRTAFUNH.js";
import {
  CommonModule,
  Component,
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

// src/app/pages/congrats/report/report-congrats.page.ts
var _ReportCongratsPage = class _ReportCongratsPage {
  constructor(router) {
    this.router = router;
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      setTimeout(() => {
        this.router.navigate(["/map"], { replaceUrl: true });
      }, 3e3);
    });
  }
};
_ReportCongratsPage.\u0275fac = function ReportCongratsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportCongratsPage)(\u0275\u0275directiveInject(Router));
};
_ReportCongratsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportCongratsPage, selectors: [["app-report-congrats"]], decls: 12, vars: 11, consts: [["color", "primary", 1, "ion-text-center", "ion-justify-content-center", "ion-align-items-center", 3, "fullscreen"], [1, "fullheight"], [3, "count"], [1, "inner-content"], ["src", "assets/icon/animated/unlock.gif", 3, "alt"], [1, "ion-padding-top"]], template: function ReportCongratsPage_Template(rf, ctx) {
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
    \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(5, 5, "report_congrats.success_alt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "generic.thanks"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "report_congrats.message"));
  }
}, dependencies: [IonContent, CommonModule, ConfettiComponent, TranslateModule, TranslatePipe], styles: ["\n\n.fullheight[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.fullheight[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 300px;\n}\n.code[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  padding: 1rem 0rem 1rem 1rem;\n  font-size: 2rem;\n  letter-spacing: 1rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=report-congrats.page.css.map */"] });
var ReportCongratsPage = _ReportCongratsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportCongratsPage, [{
    type: Component,
    args: [{ selector: "app-report-congrats", imports: [IonContent, CommonModule, ConfettiComponent, TranslateModule], template: `<ion-content
  [fullscreen]="true"
  color="primary"
  class="ion-text-center ion-justify-content-center ion-align-items-center"
>
  <div class="fullheight">
    <app-confetti [count]="50"></app-confetti>
    <div class="inner-content">
      <img
        src="assets/icon/animated/unlock.gif"
        alt="{{ 'report_congrats.success_alt' | translate }}"
      />
      <h1 class="ion-padding-top">{{ 'generic.thanks' | translate }}</h1>
      <p>{{ 'report_congrats.message' | translate }}</p>
    </div>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/congrats/report/report-congrats.page.scss */\n.fullheight {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.fullheight .inner-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 300px;\n}\n.code {\n  border: 1px solid #fff;\n  padding: 1rem 0rem 1rem 1rem;\n  font-size: 2rem;\n  letter-spacing: 1rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=report-congrats.page.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportCongratsPage, { className: "ReportCongratsPage", filePath: "src/app/pages/congrats/report/report-congrats.page.ts", lineNumber: 13 });
})();
export {
  ReportCongratsPage
};
//# sourceMappingURL=report-congrats.page-WZ6DZJE5.js.map
