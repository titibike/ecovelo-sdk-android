import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import {
  AndroidSettings,
  IOSSettings,
  NativeSettings
} from "./chunk-S5TR5TQN.js";
import "./chunk-7GZOXTNY.js";
import {
  App
} from "./chunk-RFEPADPA.js";
import {
  FcmService,
  PushNotifications
} from "./chunk-7NHGY2ON.js";
import "./chunk-YSCBVZBE.js";
import {
  AccountService
} from "./chunk-5KPTYQ6O.js";
import "./chunk-GFMHZGOY.js";
import {
  fetchUserAttributes
} from "./chunk-Z4RNZNYE.js";
import "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService
} from "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  AlertController,
  CommonModule,
  Component,
  FormsModule,
  IonCol,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonRow,
  IonSkeletonText,
  IonToggle,
  LoadingController,
  NgIf,
  Router,
  RouterLink,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-UANRONUE.js";
import "./chunk-JBNXL77H.js";
import "./chunk-KQEJHESJ.js";
import {
  Capacitor
} from "./chunk-KGBWUDTS.js";
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

// src/app/pages/account/settings/settings.page.ts
var _c0 = ["notificationToggle"];
function SettingsPage_Conditional_7_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 13)(1, "ion-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", "/account/change-password")("disabled", ctx_r1.cyclistState.state === "deletion_requested");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "settings.change_password"));
  }
}
function SettingsPage_Conditional_7_ion_item_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 14)(1, "ion-toggle", 15, 0);
    \u0275\u0275listener("ionChange", function SettingsPage_Conditional_7_ion_item_10_Template_ion_toggle_ionChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPushNotificationToggle($event));
    });
    \u0275\u0275elementStart(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-note", 16);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "settings.notifications.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "settings.notifications.can_disable"));
  }
}
function SettingsPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list", 6);
    \u0275\u0275template(1, SettingsPage_Conditional_7_ion_item_1_Template, 4, 5, "ion-item", 8);
    \u0275\u0275elementStart(2, "ion-item", 9)(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-item", 9)(7, "ion-label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, SettingsPage_Conditional_7_ion_item_10_Template, 9, 6, "ion-item", 10);
    \u0275\u0275elementStart(11, "ion-item", 11);
    \u0275\u0275listener("click", function SettingsPage_Conditional_7_Template_ion_item_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteAccount());
    });
    \u0275\u0275elementStart(12, "ion-label", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userAuthMethod === "classic");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "infos");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "settings.infos.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "cgu");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "settings.terms_of_service"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isNative());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.cyclistState.state === "deletion_requested");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, "settings.delete_account"));
  }
}
function SettingsPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 7)(1, "ion-item");
    \u0275\u0275element(2, "ion-skeleton-text", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-item");
    \u0275\u0275element(4, "ion-skeleton-text", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-item");
    \u0275\u0275element(6, "ion-skeleton-text", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-item");
    \u0275\u0275element(8, "ion-skeleton-text", 17);
    \u0275\u0275elementEnd()();
  }
}
var _SettingsPage = class _SettingsPage {
  constructor(accountService, router, alertController, loadingController, fcmService, translate, errorHandler) {
    this.accountService = accountService;
    this.router = router;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.fcmService = fcmService;
    this.translate = translate;
    this.errorHandler = errorHandler;
    this.userAuthMethod = "classic";
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
      if (this.cyclistState.state === "unknown") {
        this.accountService.loadCyclist();
      }
    });
    if (Capacitor.isNativePlatform()) {
      App.addListener("resume", () => {
        this.checkPermission();
      });
      PushNotifications.checkPermissions().then((permission) => __async(this, null, function* () {
        if (permission.receive === "granted") {
          this.updateToggleState(true);
        } else {
          this.updateToggleState(false);
        }
      }));
    }
    fetchUserAttributes().then((attributes) => {
      var _a, _b;
      if (((_a = attributes.sub) == null ? void 0 : _a.includes("google")) || ((_b = attributes.sub) == null ? void 0 : _b.includes("apple"))) {
        this.userAuthMethod = "external";
      } else {
        this.userAuthMethod = "classic";
      }
    }).catch((err) => {
      this.errorHandler.handleError(err);
    });
  }
  updateToggleState(state) {
    if (this.notificationToggle) {
      this.notificationToggle.checked = state;
    }
  }
  onPushNotificationToggle(event) {
    return __async(this, null, function* () {
      if (event.detail.checked) {
        yield PushNotifications.requestPermissions().then((permission) => __async(this, null, function* () {
          if (permission.receive === "granted") {
            yield this.fcmService.registerPush();
            this.updateToggleState(true);
          } else {
            const alert = yield this.alertController.create({
              header: this.translate.instant("push_notifications.accept_header"),
              message: this.translate.instant("push_notifications.accept_message"),
              buttons: [
                {
                  text: this.translate.instant("generic.cancel"),
                  role: "cancel",
                  handler: () => {
                    this.updateToggleState(false);
                  }
                },
                {
                  text: this.translate.instant("push_notifications.accept_cta"),
                  role: "confirm",
                  handler: () => __async(this, null, function* () {
                    yield NativeSettings.open({
                      optionAndroid: AndroidSettings.ApplicationDetails,
                      optionIOS: IOSSettings.App
                    });
                  })
                }
              ]
            });
            yield alert.present();
          }
        }));
      } else {
        const alert = yield this.alertController.create({
          header: this.translate.instant("push_notifications.deny_header"),
          message: this.translate.instant("push_notifications.deny_message"),
          buttons: [
            {
              text: this.translate.instant("generic.cancel"),
              role: "cancel",
              handler: () => {
                this.updateToggleState(true);
              }
            },
            {
              text: this.translate.instant("push_notifications.deny_cta"),
              role: "confirm",
              handler: () => __async(this, null, function* () {
                yield NativeSettings.open({
                  optionAndroid: AndroidSettings.ApplicationDetails,
                  optionIOS: IOSSettings.App
                });
              })
            }
          ]
        });
        yield alert.present();
      }
    });
  }
  deleteAccount() {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: this.translate.instant("account.deletion.header"),
        message: this.translate.instant("account.deletion.message"),
        buttons: [
          {
            text: this.translate.instant("generic.cancel"),
            role: "cancel"
          },
          {
            text: this.translate.instant("account.deletion.confirm"),
            cssClass: "text-danger",
            role: "confirm",
            handler: () => __async(this, null, function* () {
              const loading = yield this.loadingController.create({
                message: this.translate.instant("account.deletion.loading")
              });
              yield loading.present();
              if (Capacitor.isNativePlatform()) {
                yield this.fcmService.unRegisterPush();
              }
              try {
                yield this.accountService.deleteAccount();
                yield loading.dismiss();
                this.router.navigate(["/account"], { replaceUrl: true });
              } catch (err) {
                this.errorHandler.handleError(err);
                loading.dismiss();
              }
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  isNative() {
    return Capacitor.isNativePlatform();
  }
  checkPermission() {
    return __async(this, null, function* () {
      const permission = yield PushNotifications.checkPermissions();
      if (permission.receive === "granted") {
        yield this.fcmService.registerPush();
        this.updateToggleState(true);
      } else {
        this.fcmService.unRegisterPush();
        this.updateToggleState(false);
      }
    });
  }
};
_SettingsPage.\u0275fac = function SettingsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsPage)(\u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(FcmService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_SettingsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsPage, selectors: [["app-settings"]], viewQuery: function SettingsPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.notificationToggle = _t.first);
  }
}, decls: 9, vars: 5, consts: [["notificationToggle", ""], [3, "defaultHref"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], [1, "ion-margin"], ["mode", "ios", "lines", "full", 3, "inset"], ["lines", "none"], ["color", "grey", "button", "", "detail", "true", 3, "routerLink", "disabled", 4, "ngIf"], ["color", "grey", "button", "", "detail", "true", 3, "routerLink"], ["color", "grey", 4, "ngIf"], ["color", "grey", "button", "", "detail", "true", 3, "click", "disabled"], ["color", "danger"], ["color", "grey", "button", "", "detail", "true", 3, "routerLink", "disabled"], ["color", "grey"], [3, "ionChange"], ["color", "medium"], ["animated", "", 2, "width", "100%", "height", "50px", "margin-top", "10px"]], template: function SettingsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 1);
    \u0275\u0275elementStart(1, "ion-content", 2)(2, "ion-row", 3)(3, "ion-col", 4)(4, "h1", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SettingsPage_Conditional_7_Template, 15, 15, "ion-list", 6)(8, SettingsPage_Conditional_8_Template, 9, 0, "ion-list", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "settings.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.cyclistState && ctx.cyclistState.state !== "unknown" && ctx.cyclistState.state !== "error" ? 7 : 8);
  }
}, dependencies: [
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonNote,
  CommonModule,
  NgIf,
  FormsModule,
  HeaderComponent,
  RouterLink,
  IonSkeletonText,
  IonRow,
  IonCol,
  TranslateModule,
  TranslatePipe
], encapsulation: 2 });
var SettingsPage = _SettingsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsPage, [{
    type: Component,
    args: [{ selector: "app-settings", imports: [
      IonContent,
      IonList,
      IonItem,
      IonLabel,
      IonToggle,
      IonNote,
      CommonModule,
      FormsModule,
      HeaderComponent,
      RouterLink,
      IonSkeletonText,
      IonRow,
      IonCol,
      TranslateModule
    ], template: `<app-header [defaultHref]="'/account'"></app-header>
<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <h1 class="ion-margin">{{ 'settings.title' | translate }}</h1>
      @if(cyclistState && cyclistState.state !== 'unknown' && cyclistState.state
      !== 'error') {
      <ion-list [inset]="true" mode="ios" lines="full">
        <ion-item
          color="grey"
          button
          detail="true"
          [routerLink]="'/account/change-password'"
          *ngIf="userAuthMethod === 'classic'"
          [disabled]="cyclistState.state === 'deletion_requested'"
        >
          <ion-label>{{ 'settings.change_password' | translate }}</ion-label>
        </ion-item>
        <ion-item color="grey" button detail="true" [routerLink]="'infos'">
          <ion-label>{{ 'settings.infos.title' | translate }}</ion-label>
        </ion-item>
        <ion-item color="grey" button detail="true" [routerLink]="'cgu'">
          <ion-label>{{ 'settings.terms_of_service' | translate }}</ion-label>
        </ion-item>
        <ion-item color="grey" *ngIf="isNative()">
          <ion-toggle
            #notificationToggle
            (ionChange)="onPushNotificationToggle($event)"
          >
            <ion-label
              >{{ 'settings.notifications.title' | translate }}</ion-label
            >
            <ion-note color="medium"
              >{{ 'settings.notifications.can_disable' | translate }}</ion-note
            >
          </ion-toggle>
        </ion-item>
        <ion-item
          color="grey"
          button
          detail="true"
          [disabled]="cyclistState.state === 'deletion_requested'"
          (click)="deleteAccount()"
        >
          <ion-label color="danger"
            >{{ 'settings.delete_account' | translate }}</ion-label
          >
        </ion-item>
      </ion-list>
      } @else {
      <ion-list lines="none">
        <ion-item>
          <ion-skeleton-text
            animated
            style="width: 100%; height: 50px; margin-top: 10px"
          ></ion-skeleton-text>
        </ion-item>
        <ion-item>
          <ion-skeleton-text
            animated
            style="width: 100%; height: 50px; margin-top: 10px"
          ></ion-skeleton-text>
        </ion-item>
        <ion-item>
          <ion-skeleton-text
            animated
            style="width: 100%; height: 50px; margin-top: 10px"
          ></ion-skeleton-text>
        </ion-item>
        <ion-item>
          <ion-skeleton-text
            animated
            style="width: 100%; height: 50px; margin-top: 10px"
          ></ion-skeleton-text>
        </ion-item>
      </ion-list>
      }
    </ion-col>
  </ion-row>
</ion-content>
` }]
  }], () => [{ type: AccountService }, { type: Router }, { type: AlertController }, { type: LoadingController }, { type: FcmService }, { type: TranslateService }, { type: ErrorHandlerService }], { notificationToggle: [{
    type: ViewChild,
    args: ["notificationToggle"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsPage, { className: "SettingsPage", filePath: "src/app/pages/account/settings/settings.page.ts", lineNumber: 57 });
})();
export {
  SettingsPage
};
//# sourceMappingURL=settings.page-OQ52HBJ4.js.map
