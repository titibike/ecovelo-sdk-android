import {
  CguService
} from "./chunk-7KL7UR6Z.js";
import {
  IonContent,
  IonProgressBar,
  IonicModule
} from "./chunk-ULLB7OBK.js";
import {
  addIcons,
  close
} from "./chunk-3E6DEK7U.js";
import {
  CommonModule,
  Component,
  ModalController,
  TranslateModule,
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
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtemplate
} from "./chunk-UANRONUE.js";

// src/app/components/modals/cgu/cgu.component.ts
function CguComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-progress-bar", 1);
  }
}
function CguComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r0.cguLoadingState.terms, \u0275\u0275sanitizeHtml);
  }
}
var _CguComponent = class _CguComponent {
  constructor(modalCtrl, cguService) {
    this.modalCtrl = modalCtrl;
    this.cguService = cguService;
    this.cguLoadingState = { state: "loading" };
    this.cguService.cguLoadingState.subscribe((state) => {
      this.cguLoadingState = state;
    });
    addIcons({ close });
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
};
_CguComponent.\u0275fac = function CguComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CguComponent)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(CguService));
};
_CguComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CguComponent, selectors: [["app-cgu"]], decls: 3, vars: 1, consts: [[1, "ion-padding"], ["type", "indeterminate"], [3, "innerHTML"]], template: function CguComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0);
    \u0275\u0275template(1, CguComponent_Conditional_1_Template, 1, 0, "ion-progress-bar", 1)(2, CguComponent_Conditional_2_Template, 1, 1, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.cguLoadingState.state === "loading" ? 1 : ctx.cguLoadingState.state === "success" ? 2 : -1);
  }
}, dependencies: [CommonModule, IonicModule, IonContent, IonProgressBar, TranslateModule], encapsulation: 2 });
var CguComponent = _CguComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CguComponent, [{
    type: Component,
    args: [{ selector: "app-cgu", imports: [CommonModule, IonicModule, TranslateModule], template: `<ion-content class="ion-padding">
  @if (cguLoadingState.state === 'loading') {
  <ion-progress-bar type="indeterminate"></ion-progress-bar>
  } @else if (cguLoadingState.state === 'success') {
  <div [innerHTML]="cguLoadingState.terms"></div>
  }
</ion-content>
` }]
  }], () => [{ type: ModalController }, { type: CguService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CguComponent, { className: "CguComponent", filePath: "src/app/components/modals/cgu/cgu.component.ts", lineNumber: 19 });
})();

export {
  CguComponent
};
//# sourceMappingURL=chunk-I5GRYM4M.js.map
