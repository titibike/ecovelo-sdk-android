import {
  CommonModule,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  IonButton,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-UANRONUE.js";

// src/app/components/fill-button/fill-button.component.ts
var _c0 = ["*"];
var _FillButtonComponent = class _FillButtonComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.disabled = false;
    this.color = "light";
    this.fill = "outline";
    this.autoAnimate = true;
    this.animationDuration = 2e3;
    this.buttonClick = new EventEmitter();
  }
  ngAfterViewInit() {
    if (this.autoAnimate) {
      this.waitForElementAndAnimate();
    }
  }
  waitForElementAndAnimate() {
    setTimeout(() => {
      this.startAnimation();
    }, 200);
  }
  onButtonClick() {
    this.buttonClick.emit();
  }
  startAnimation() {
    const buttonElement = this.elementRef.nativeElement.querySelector(".fill-button");
    if (!buttonElement) {
      console.warn("FillButtonComponent: ion-button element not found in DOM");
      return;
    }
    const duration = this.animationDuration;
    const steps = 100;
    const interval = duration / steps;
    let currentStep = 0;
    const animation = setInterval(() => {
      if (currentStep >= steps) {
        clearInterval(animation);
        return;
      }
      const progress = currentStep / steps * 100;
      buttonElement.style.setProperty("--fill-width", `${progress}%`);
      currentStep++;
    }, interval);
  }
  resetAnimation() {
    const buttonElement = this.elementRef.nativeElement.querySelector(".fill-button");
    if (buttonElement) {
      buttonElement.style.setProperty("--fill-width", "0%");
    }
  }
};
_FillButtonComponent.\u0275fac = function FillButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FillButtonComponent)(\u0275\u0275directiveInject(ElementRef));
};
_FillButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FillButtonComponent, selectors: [["app-fill-button"]], inputs: { disabled: "disabled", color: "color", fill: "fill", autoAnimate: "autoAnimate", animationDuration: "animationDuration" }, outputs: { buttonClick: "buttonClick" }, ngContentSelectors: _c0, decls: 2, vars: 3, consts: [[1, "fill-button", 3, "click", "color", "fill", "disabled"]], template: function FillButtonComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "ion-button", 0);
    \u0275\u0275listener("click", function FillButtonComponent_Template_ion_button_click_0_listener() {
      return ctx.onButtonClick();
    });
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("color", ctx.color)("fill", ctx.fill)("disabled", ctx.disabled);
  }
}, dependencies: [CommonModule, IonButton], styles: ['\n\n.fill-button[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  color: #fff;\n  --border-style: none;\n  --fill-width: 0%;\n}\n.fill-button[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  background: var(--ion-color-primary-tint);\n  top: 0;\n  left: 0;\n  width: var(--fill-width);\n  height: 100%;\n  z-index: -1;\n  transition: width 0.1s linear;\n}\n/*# sourceMappingURL=fill-button.component.css.map */'] });
var FillButtonComponent = _FillButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FillButtonComponent, [{
    type: Component,
    args: [{ selector: "app-fill-button", imports: [CommonModule, IonButton], template: '<ion-button\n  class="fill-button"\n  [color]="color"\n  [fill]="fill"\n  [disabled]="disabled"\n  (click)="onButtonClick()"\n>\n  <ng-content></ng-content>\n</ion-button>\n', styles: ['/* src/app/components/fill-button/fill-button.component.scss */\n.fill-button {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  color: #fff;\n  --border-style: none;\n  --fill-width: 0%;\n}\n.fill-button::before {\n  content: "";\n  position: absolute;\n  background: var(--ion-color-primary-tint);\n  top: 0;\n  left: 0;\n  width: var(--fill-width);\n  height: 100%;\n  z-index: -1;\n  transition: width 0.1s linear;\n}\n/*# sourceMappingURL=fill-button.component.css.map */\n'] }]
  }], () => [{ type: ElementRef }], { disabled: [{
    type: Input
  }], color: [{
    type: Input
  }], fill: [{
    type: Input
  }], autoAnimate: [{
    type: Input
  }], animationDuration: [{
    type: Input
  }], buttonClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FillButtonComponent, { className: "FillButtonComponent", filePath: "src/app/components/fill-button/fill-button.component.ts", lineNumber: 18 });
})();

export {
  FillButtonComponent
};
//# sourceMappingURL=chunk-WPI72MTA.js.map
