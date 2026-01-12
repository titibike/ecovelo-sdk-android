import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-7GZOXTNY.js";
import {
  AuthService
} from "./chunk-7UN2TOGU.js";
import "./chunk-H4GUYJEZ.js";
import "./chunk-7NHGY2ON.js";
import "./chunk-YSCBVZBE.js";
import "./chunk-5KPTYQ6O.js";
import "./chunk-FGJU3CJK.js";
import "./chunk-GFMHZGOY.js";
import {
  updatePassword
} from "./chunk-Z4RNZNYE.js";
import "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService,
  ToastService,
  ToastType
} from "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  LoadingController,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  Validators,
  setClassMetadata,
  ɵNgNoValidate,
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

// src/app/pages/account/change-password/change-password.page.ts
var _ChangePasswordPage = class _ChangePasswordPage {
  constructor(fb, loadingCtrl, toast, translate, authService, errorHandler) {
    this.fb = fb;
    this.loadingCtrl = loadingCtrl;
    this.toast = toast;
    this.translate = translate;
    this.authService = authService;
    this.errorHandler = errorHandler;
    this.passwordForm = this.fb.group({
      oldPassword: ["", [Validators.required, Validators.minLength(6)]],
      newPassword: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  changePassword() {
    return __async(this, null, function* () {
      const loader = yield this.loadingCtrl.create({
        message: this.translate.instant("auth.updating_password")
      });
      try {
        yield loader.present();
        if (this.passwordForm.valid) {
          yield updatePassword({
            oldPassword: this.passwordForm.value.oldPassword,
            newPassword: this.passwordForm.value.newPassword
          });
          this.toast.createWithJustMessage(this.translate.instant("new_password.success"), ToastType.Success);
          this.passwordForm.reset();
          this.authService.signOut();
        }
      } catch (error) {
        this.errorHandler.handleError(error);
      } finally {
        yield loader.dismiss();
      }
    });
  }
};
_ChangePasswordPage.\u0275fac = function ChangePasswordPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChangePasswordPage)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_ChangePasswordPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordPage, selectors: [["app-change-password"]], decls: 21, vars: 15, consts: [[3, "defaultHref"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], [1, "ion-margin"], [3, "ngSubmit", "formGroup"], ["position", "floating"], ["type", "password", "formControlName", "oldPassword", "required", ""], ["type", "password", "formControlName", "newPassword", "required", ""], ["expand", "block", "type", "submit", 1, "ion-margin-top", 3, "disabled"]], template: function ChangePasswordPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "ion-row", 2)(3, "ion-col", 3)(4, "h1", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 5);
    \u0275\u0275listener("ngSubmit", function ChangePasswordPage_Template_form_ngSubmit_7_listener() {
      return ctx.changePassword();
    });
    \u0275\u0275elementStart(8, "ion-item")(9, "ion-label", 6);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "ion-input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-item")(14, "ion-label", 6);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "ion-input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-button", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account/settings");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "change_password.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.passwordForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "change_password.current_password"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "change_password.new_password"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.passwordForm.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 13, "change_password.update_button"), " ");
  }
}, dependencies: [
  IonContent,
  CommonModule,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  HeaderComponent,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonRow,
  IonCol,
  TranslateModule,
  TranslatePipe
], encapsulation: 2 });
var ChangePasswordPage = _ChangePasswordPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangePasswordPage, [{
    type: Component,
    args: [{ selector: "app-change-password", imports: [
      IonContent,
      CommonModule,
      FormsModule,
      HeaderComponent,
      ReactiveFormsModule,
      IonItem,
      IonInput,
      IonButton,
      IonLabel,
      IonRow,
      IonCol,
      TranslateModule
    ], template: `<app-header [defaultHref]="'/account/settings'"></app-header>
<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <h1 class="ion-margin">{{ 'change_password.title' | translate }}</h1>

      <form [formGroup]="passwordForm" (ngSubmit)="changePassword()">
        <ion-item>
          <ion-label position="floating"
            >{{ 'change_password.current_password' | translate }}</ion-label
          >
          <ion-input type="password" formControlName="oldPassword" required>
          </ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating"
            >{{ 'change_password.new_password' | translate }}</ion-label
          >
          <ion-input type="password" formControlName="newPassword" required>
          </ion-input>
        </ion-item>

        <ion-button
          expand="block"
          type="submit"
          class="ion-margin-top"
          [disabled]="!passwordForm.valid"
        >
          {{ 'change_password.update_button' | translate }}
        </ion-button>
      </form>
    </ion-col>
  </ion-row>
</ion-content>
` }]
  }], () => [{ type: FormBuilder }, { type: LoadingController }, { type: ToastService }, { type: TranslateService }, { type: AuthService }, { type: ErrorHandlerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordPage, { className: "ChangePasswordPage", filePath: "src/app/pages/account/change-password/change-password.page.ts", lineNumber: 49 });
})();
export {
  ChangePasswordPage
};
//# sourceMappingURL=change-password.page-TYZOJW6X.js.map
