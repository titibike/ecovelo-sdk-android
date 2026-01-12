import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-7GZOXTNY.js";
import {
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonRow,
  IonSpinner,
  IonicModule,
  TextValueAccessorDirective
} from "./chunk-ULLB7OBK.js";
import {
  AccountService
} from "./chunk-5KPTYQ6O.js";
import "./chunk-GFMHZGOY.js";
import "./chunk-3E6DEK7U.js";
import {
  ToastService
} from "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  FormsModule,
  NgControlStatus,
  NgModel,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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

// src/app/pages/account/infos/infos.page.ts
function InfosPage_Conditional_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 9);
  }
}
function InfosPage_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "generic.edit"), " ");
  }
}
function InfosPage_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "settings.infos.errors.invalid_email"), " ");
  }
}
function InfosPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list", 5)(1, "ion-item", 6)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ion-item", 6)(5, "ion-label");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-item", 6)(8, "ion-input", 7);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function InfosPage_Conditional_8_Template_ion_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.emailValue, $event) || (ctx_r1.emailValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "ion-button", 8);
    \u0275\u0275listener("click", function InfosPage_Conditional_8_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeEmail());
    });
    \u0275\u0275template(11, InfosPage_Conditional_8_Conditional_11_Template, 1, 0, "ion-spinner", 9)(12, InfosPage_Conditional_8_Conditional_12_Template, 2, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, InfosPage_Conditional_8_Conditional_13_Template, 3, 3, "ion-note", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11)(15, "ion-note", 12);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cyclistState.cyclist.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cyclistState.cyclist.phone_number);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ion-invalid", ctx_r1.emailValue && !ctx_r1.isEmailValid);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(9, 11, "generic.email"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isButtonDisabled || ctx_r1.isChangingEmail);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isChangingEmail ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.emailValue && !ctx_r1.isEmailValid ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 13, "settings.infos.email_changed_note"), " ");
  }
}
var _InfosPage = class _InfosPage {
  constructor(toastrService, translateService, accountService) {
    this.toastrService = toastrService;
    this.translateService = translateService;
    this.accountService = accountService;
    this.cyclistState = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    this.nextUrl = null;
    this.emailValue = "";
    this.isChangingEmail = false;
    this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    effect(() => {
      var _a;
      this.cyclistState = this.accountService.cyclistState();
      if (this.cyclistState.state !== "unknown" && this.cyclistState.state !== "error" && ((_a = this.cyclistState.cyclist) == null ? void 0 : _a.email)) {
        this.emailValue = this.cyclistState.cyclist.email;
      }
    });
  }
  get isEmailValid() {
    return this.emailRegex.test(this.emailValue);
  }
  get isButtonDisabled() {
    var _a;
    const originalEmail = this.cyclistState.state !== "unknown" && this.cyclistState.state !== "error" ? ((_a = this.cyclistState.cyclist) == null ? void 0 : _a.email) || "" : "";
    return this.emailValue === originalEmail || !this.isEmailValid;
  }
  changeEmail() {
    return __async(this, null, function* () {
      if (this.isButtonDisabled || this.isChangingEmail) {
        return;
      }
      this.isChangingEmail = true;
      try {
        yield this.accountService.changeEmail(this.emailValue);
      } catch (error) {
        console.error("Error changing email:", error);
      } finally {
        this.isChangingEmail = false;
      }
    });
  }
};
_InfosPage.\u0275fac = function InfosPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InfosPage)(\u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(AccountService));
};
_InfosPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfosPage, selectors: [["app-infos-page"]], decls: 9, vars: 5, consts: [[3, "defaultHref"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], [1, "ion-margin"], ["mode", "ios", "lines", "full", 3, "inset"], ["color", "grey"], ["type", "email", 3, "ngModelChange", "ngModel", "placeholder"], ["slot", "end", "color", "primary", "fill", "outline", 3, "click", "disabled"], ["name", "dots", 2, "max-height", "20px"], ["color", "danger", 1, "ion-padding-start"], [1, "ion-margin-horizontal"], ["color", "medium"]], template: function InfosPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275elementStart(1, "ion-content")(2, "ion-content", 1)(3, "ion-row", 2)(4, "ion-col", 3)(5, "h1", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, InfosPage_Conditional_8_Template, 18, 15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account/settings");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "settings.infos.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.cyclistState && ctx.cyclistState.state !== "unknown" && ctx.cyclistState.state !== "error" ? 8 : -1);
  }
}, dependencies: [
  CommonModule,
  IonicModule,
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonRow,
  IonSpinner,
  TextValueAccessorDirective,
  FormsModule,
  NgControlStatus,
  NgModel,
  HeaderComponent,
  TranslateModule,
  TranslatePipe
], encapsulation: 2 });
var InfosPage = _InfosPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfosPage, [{
    type: Component,
    args: [{ selector: "app-infos-page", imports: [
      CommonModule,
      IonicModule,
      FormsModule,
      HeaderComponent,
      TranslateModule
    ], template: `<app-header [defaultHref]="'/account/settings'"></app-header>
<ion-content>
  <ion-content class="ion-padding">
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="8" size-lg="6">
        <h1 class="ion-margin">{{ 'settings.infos.title' | translate }}</h1>
        @if(cyclistState && cyclistState.state !== 'unknown' &&
        cyclistState.state !== 'error') {
        <ion-list [inset]="true" mode="ios" lines="full">
          <ion-item color="grey">
            <ion-label>{{ cyclistState.cyclist.name }}</ion-label>
          </ion-item>
          <ion-item color="grey">
            <ion-label>{{ cyclistState.cyclist.phone_number }}</ion-label>
          </ion-item>
          <ion-item color="grey">
            <ion-input
              [(ngModel)]="emailValue"
              type="email"
              [class.ion-invalid]="emailValue && !isEmailValid"
              placeholder="{{ 'generic.email' | translate }}"
            >
              <ion-button
                slot="end"
                color="primary"
                fill="outline"
                [disabled]="isButtonDisabled || isChangingEmail"
                (click)="changeEmail()"
              >
                @if(isChangingEmail) {
                <ion-spinner name="dots" style="max-height: 20px"></ion-spinner>
                } @else { {{ 'generic.edit' | translate }} }
              </ion-button>
            </ion-input>
          </ion-item>
          @if(emailValue && !isEmailValid) {
          <ion-note color="danger" class="ion-padding-start">
            {{ 'settings.infos.errors.invalid_email' | translate }}
          </ion-note>
          }
        </ion-list>
        <div class="ion-margin-horizontal">
          <ion-note color="medium"
            >{{ 'settings.infos.email_changed_note' | translate }}
          </ion-note>
        </div>
        }
      </ion-col>
    </ion-row>
  </ion-content>
</ion-content>
` }]
  }], () => [{ type: ToastService }, { type: TranslateService }, { type: AccountService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfosPage, { className: "InfosPage", filePath: "src/app/pages/account/infos/infos.page.ts", lineNumber: 23 });
})();
export {
  InfosPage
};
//# sourceMappingURL=infos.page-NIVYJ6WG.js.map
