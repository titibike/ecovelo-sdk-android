import {
  AppstateService
} from "./chunk-YSCBVZBE.js";
import {
  DevicesService
} from "./chunk-6J5UKKBN.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  ErrorHandlerService
} from "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  Injectable,
  IonButton,
  IonContent,
  ModalController,
  TranslateModule,
  TranslatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UANRONUE.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor/push-notifications/dist/esm/index.js
var PushNotifications = registerPlugin("PushNotifications", {});

// src/app/components/modals/push-notifications/push-notifications.component.ts
var _PushNotificationsComponent = class _PushNotificationsComponent {
  constructor(modalCtrl, fcmService, appState, errorHandler) {
    this.modalCtrl = modalCtrl;
    this.fcmService = fcmService;
    this.appState = appState;
    this.errorHandler = errorHandler;
  }
  accept() {
    return __async(this, null, function* () {
      try {
        yield this.fcmService.askForPermission().then(() => {
          const currentState = this.appState.getAppState();
          if (currentState.state === "fresh_cyclist" || currentState.state === "new_cyclist") {
            this.appState.setAppState(__spreadProps(__spreadValues({}, currentState), {
              push_notifications: "shown"
            }));
          }
          this.modalCtrl.dismiss();
        });
      } catch (error) {
        this.errorHandler.handleError(error);
      }
    });
  }
  dismiss() {
    return __async(this, null, function* () {
      const currentState = this.appState.getAppState();
      if (currentState.state === "fresh_cyclist" || currentState.state === "new_cyclist") {
        yield this.appState.setAppState(__spreadProps(__spreadValues({}, currentState), {
          push_notifications: "shown"
        }));
      }
      yield this.modalCtrl.dismiss();
    });
  }
};
_PushNotificationsComponent.\u0275fac = function PushNotificationsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PushNotificationsComponent)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(FcmService), \u0275\u0275directiveInject(AppstateService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_PushNotificationsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PushNotificationsComponent, selectors: [["app-push-notifications"]], decls: 17, vars: 12, consts: [[1, "ecl-congrats-modal", "ecl-congrats-modal--push-notifications"], [1, "ecl-congrats-modal__icon", "ecl-congrats-modal__icon--bg"], ["src", "assets/icon/animated/notification.gif"], [1, "ecl-congrats-modal--push-notifications__description"], [1, "ecl-congrats-modal__buttons"], ["expand", "block", "color", "light", 3, "click"], ["expand", "block", "fill", "clear", "color", "light", 3, "click"]], template: function PushNotificationsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "div", 0)(2, "div", 1);
    \u0275\u0275element(3, "img", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 3);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 4)(11, "ion-button", 5);
    \u0275\u0275listener("click", function PushNotificationsComponent_Template_ion_button_click_11_listener() {
      return ctx.accept();
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-button", 6);
    \u0275\u0275listener("click", function PushNotificationsComponent_Template_ion_button_click_14_listener() {
      return ctx.dismiss();
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "push_notifications.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "push_notifications.description"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 8, "push_notifications.accept"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 10, "push_notifications.skip"), " ");
  }
}, dependencies: [CommonModule, TranslateModule, TranslatePipe, IonContent, IonButton], encapsulation: 2 });
var PushNotificationsComponent = _PushNotificationsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PushNotificationsComponent, [{
    type: Component,
    args: [{
      selector: "app-push-notifications",
      template: `
    <ion-content>
      <div class="ecl-congrats-modal ecl-congrats-modal--push-notifications">
        <div class="ecl-congrats-modal__icon ecl-congrats-modal__icon--bg">
          <img src="assets/icon/animated/notification.gif" />
        </div>
        <h1>{{ 'push_notifications.title' | translate }}</h1>
        <p class="ecl-congrats-modal--push-notifications__description">
          {{ 'push_notifications.description' | translate }}
        </p>

        <div class="ecl-congrats-modal__buttons">
          <ion-button expand="block" color="light" (click)="accept()">
            {{ 'push_notifications.accept' | translate }}
          </ion-button>
          <ion-button
            expand="block"
            fill="clear"
            color="light"
            (click)="dismiss()"
          >
            {{ 'push_notifications.skip' | translate }}
          </ion-button>
        </div>
      </div>
    </ion-content>
  `,
      imports: [CommonModule, TranslateModule, IonContent, IonButton]
    }]
  }], () => [{ type: ModalController }, { type: FcmService }, { type: AppstateService }, { type: ErrorHandlerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PushNotificationsComponent, { className: "PushNotificationsComponent", filePath: "src/app/components/modals/push-notifications/push-notifications.component.ts", lineNumber: 44 });
})();

// src/app/services/external/fcm.service.ts
var _FcmService = class _FcmService {
  constructor(modalCtrl, devicesService, storage, errorHandler, appStateService) {
    this.modalCtrl = modalCtrl;
    this.devicesService = devicesService;
    this.storage = storage;
    this.errorHandler = errorHandler;
    this.appStateService = appStateService;
    this.appStateService.appState.subscribe((state) => {
      this.appState = state;
    });
  }
  checkPermission() {
    return __async(this, null, function* () {
      let permission;
      if (Capacitor.isNativePlatform()) {
        permission = yield PushNotifications.checkPermissions();
      } else {
        permission = null;
      }
      if (Capacitor.isNativePlatform() && (this.appState.state === "new_cyclist" || this.appState.state === "fresh_cyclist") && (permission == null ? void 0 : permission.receive) === "prompt" && this.appState.push_notifications === "not_shown") {
        yield this.initPush();
      }
    });
  }
  initPush() {
    return __async(this, null, function* () {
      if (Capacitor.isNativePlatform()) {
        const modal = yield this.modalCtrl.create({
          component: PushNotificationsComponent,
          cssClass: "fullscreen-modal"
        });
        yield modal.present();
        yield modal.onDidDismiss();
      }
    });
  }
  askForPermission() {
    return __async(this, null, function* () {
      yield PushNotifications.requestPermissions().then((permission) => __async(this, null, function* () {
        if (permission.receive === "granted") {
          yield this.registerPush();
        } else {
          console.error("No permission for push granted");
        }
      })).catch((error) => {
        this.errorHandler.handleError(error);
      });
    });
  }
  registerPush() {
    return __async(this, null, function* () {
      PushNotifications.addListener("registration", (token) => __async(this, null, function* () {
        yield this.storage.set("fcmToken", token.value);
        this.devicesService.subscribeDevice({
          program: environment.program,
          subscribeDeviceRequest: {
            token: token.value
          }
        }).subscribe({
          error: (error) => __async(this, null, function* () {
            console.error("Error subscribing to device", error);
          }),
          next: () => __async(this, null, function* () {
          })
        });
      }));
      PushNotifications.addListener("pushNotificationActionPerformed", (notification) => {
      });
      try {
        yield PushNotifications.register();
      } catch (error) {
        this.errorHandler.handleError(error);
      }
    });
  }
  unRegisterPush() {
    return __async(this, null, function* () {
      try {
        yield PushNotifications.unregister();
        yield PushNotifications.removeAllListeners();
        const token = yield this.storage.get("fcmToken");
        if (token) {
          this.devicesService.unsubscribeDevice({
            program: environment.program,
            token
          }).subscribe();
          yield this.storage.remove("fcmToken");
        }
      } catch (error) {
        this.errorHandler.handleError(error);
      }
    });
  }
};
_FcmService.\u0275fac = function FcmService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FcmService)(\u0275\u0275inject(ModalController), \u0275\u0275inject(DevicesService), \u0275\u0275inject(StorageService), \u0275\u0275inject(ErrorHandlerService), \u0275\u0275inject(AppstateService));
};
_FcmService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FcmService, factory: _FcmService.\u0275fac, providedIn: "root" });
var FcmService = _FcmService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FcmService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ModalController }, { type: DevicesService }, { type: StorageService }, { type: ErrorHandlerService }, { type: AppstateService }], null);
})();

export {
  PushNotifications,
  FcmService
};
//# sourceMappingURL=chunk-NHPV6IFO.js.map
