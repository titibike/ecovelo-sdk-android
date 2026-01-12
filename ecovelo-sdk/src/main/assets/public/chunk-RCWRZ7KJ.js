import {
  AndroidSettings,
  IOSSettings,
  NativeSettings
} from "./chunk-S5TR5TQN.js";
import {
  f
} from "./chunk-OEYRANOA.js";
import {
  App
} from "./chunk-RFEPADPA.js";
import {
  StationsService
} from "./chunk-5KPTYQ6O.js";
import {
  environment
} from "./chunk-GFMHZGOY.js";
import {
  ErrorHandlerService
} from "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  AlertController,
  BehaviorSubject,
  CommonModule,
  Component,
  Injectable,
  IonButton,
  IonCol,
  IonRow,
  ModalController,
  NgIf,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UANRONUE.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor/geolocation/dist/esm/index.js
var Geolocation = registerPlugin("Geolocation", {
  web: () => import("./web-73TODZWW.js").then((m) => new m.GeolocationWeb())
});
f();

// src/app/components/modals/browser-geolocation-instructions/browser-geolocation-instructions.component.ts
var _c0 = () => ["edge", "ie", "unknown"];
var _c1 = (a0) => ({ program: a0 });
function BrowserGeolocationInstructionsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ol")(5, "li");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a", 5);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "map.browser_geolocation.chrome.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "map.browser_geolocation.chrome.step1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "map.browser_geolocation.chrome.step2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "map.browser_geolocation.chrome.step3"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, "map.browser_geolocation.chrome.step4"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 16, "map.browser_geolocation.chrome.documentation"), " ");
  }
}
function BrowserGeolocationInstructionsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ol")(5, "li");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "map.browser_geolocation.firefox.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "map.browser_geolocation.firefox.step1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "map.browser_geolocation.firefox.step2"));
  }
}
function BrowserGeolocationInstructionsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ol")(5, "li");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "map.browser_geolocation.safari.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, "map.browser_geolocation.safari.step1", \u0275\u0275pureFunction1(10, _c1, ctx_r0.program)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "map.browser_geolocation.safari.step2"));
  }
}
function BrowserGeolocationInstructionsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ol")(5, "li");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "map.browser_geolocation.generic.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "map.browser_geolocation.generic.step1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "map.browser_geolocation.generic.step2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "map.browser_geolocation.generic.step3"));
  }
}
var _BrowserGeolocationInstructionsComponent = class _BrowserGeolocationInstructionsComponent {
  constructor(modalCtrl, storage) {
    this.modalCtrl = modalCtrl;
    this.storage = storage;
    this.browserName = this.detectBrowser();
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.storage.get("program").then((program) => {
        this.program = program.name;
      });
    });
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
  detectBrowser() {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Chrome") > -1) {
      return "chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      return "safari";
    } else if (userAgent.indexOf("Firefox") > -1) {
      return "firefox";
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
      return "ie";
    } else if (userAgent.indexOf("Edge") > -1) {
      return "edge";
    } else {
      return "unknown";
    }
  }
};
_BrowserGeolocationInstructionsComponent.\u0275fac = function BrowserGeolocationInstructionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BrowserGeolocationInstructionsComponent)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(StorageService));
};
_BrowserGeolocationInstructionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrowserGeolocationInstructionsComponent, selectors: [["app-browser-geolocation-instructions"]], decls: 17, vars: 14, consts: [[1, "ion-padding"], [1, "browser-instructions"], [4, "ngIf"], [1, "ion-text-end"], ["color", "primary", 3, "click"], ["href", "https://support.google.com/chrome/answer/142065?hl=fr&co=GENIE.Platform%3DDesktop", "target", "_blank", "rel", "noopener noreferrer"]], template: function BrowserGeolocationInstructionsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 1);
    \u0275\u0275template(8, BrowserGeolocationInstructionsComponent_div_8_Template, 20, 18, "div", 2)(9, BrowserGeolocationInstructionsComponent_div_9_Template, 11, 9, "div", 2)(10, BrowserGeolocationInstructionsComponent_div_10_Template, 11, 12, "div", 2)(11, BrowserGeolocationInstructionsComponent_div_11_Template, 14, 12, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-row", 3)(13, "ion-col")(14, "ion-button", 4);
    \u0275\u0275listener("click", function BrowserGeolocationInstructionsComponent_Template_ion_button_click_14_listener() {
      return ctx.closeModal();
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "map.browser_geolocation.header"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "map.browser_geolocation.message"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.browserName === "chrome");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.browserName === "firefox");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.browserName === "safari");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(13, _c0).includes(ctx.browserName));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 11, "generic.close"), " ");
  }
}, dependencies: [IonButton, IonRow, IonCol, CommonModule, NgIf, TranslateModule, TranslatePipe], styles: ["\n\n.browser-instructions[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.browser-screenshot[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 300px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  display: block;\n  margin: 15px auto;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\nol[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\nli[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\nh3[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=browser-geolocation-instructions.component.css.map */"] });
var BrowserGeolocationInstructionsComponent = _BrowserGeolocationInstructionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserGeolocationInstructionsComponent, [{
    type: Component,
    args: [{ selector: "app-browser-geolocation-instructions", imports: [IonButton, IonRow, IonCol, CommonModule, TranslateModule], template: `<div class="ion-padding">
  <h2>{{ 'map.browser_geolocation.header' | translate }}</h2>
  <p>{{ 'map.browser_geolocation.message' | translate }}</p>

  <div class="browser-instructions">
    <!-- Chrome instructions -->
    <div *ngIf="browserName === 'chrome'">
      <h3>{{ 'map.browser_geolocation.chrome.title' | translate }}</h3>
      <ol>
        <li>{{ 'map.browser_geolocation.chrome.step1' | translate }}</li>
        <li>{{ 'map.browser_geolocation.chrome.step2' | translate }}</li>
        <li>{{ 'map.browser_geolocation.chrome.step3' | translate }}</li>
        <li>{{ 'map.browser_geolocation.chrome.step4' | translate }}</li>
      </ol>
      <a
        href="https://support.google.com/chrome/answer/142065?hl=fr&co=GENIE.Platform%3DDesktop"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ 'map.browser_geolocation.chrome.documentation' | translate }}
      </a>
    </div>

    <!-- Firefox instructions -->
    <div *ngIf="browserName === 'firefox'">
      <h3>{{ 'map.browser_geolocation.firefox.title' | translate }}</h3>
      <ol>
        <li>{{ 'map.browser_geolocation.firefox.step1' | translate }}</li>
        <li>{{ 'map.browser_geolocation.firefox.step2' | translate }}</li>
      </ol>
    </div>

    <!-- Safari instructions -->
    <div *ngIf="browserName === 'safari'">
      <h3>{{ 'map.browser_geolocation.safari.title' | translate }}</h3>
      <ol>
        <li>
          {{
            'map.browser_geolocation.safari.step1'
              | translate : { program: program }
          }}
        </li>
        <li>{{ 'map.browser_geolocation.safari.step2' | translate }}</li>
      </ol>
    </div>

    <!-- Generic instructions for other browsers -->
    <div *ngIf="['edge', 'ie', 'unknown'].includes(browserName)">
      <h3>{{ 'map.browser_geolocation.generic.title' | translate }}</h3>
      <ol>
        <li>{{ 'map.browser_geolocation.generic.step1' | translate }}</li>
        <li>{{ 'map.browser_geolocation.generic.step2' | translate }}</li>
        <li>{{ 'map.browser_geolocation.generic.step3' | translate }}</li>
      </ol>
    </div>
  </div>

  <ion-row class="ion-text-end">
    <ion-col>
      <ion-button color="primary" (click)="closeModal()">
        {{ 'generic.close' | translate }}
      </ion-button>
    </ion-col>
  </ion-row>
</div>
`, styles: ["/* src/app/components/modals/browser-geolocation-instructions/browser-geolocation-instructions.component.scss */\n.browser-instructions {\n  margin: 20px 0;\n}\n.browser-screenshot {\n  max-width: 100%;\n  max-height: 300px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  display: block;\n  margin: 15px auto;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\nol {\n  padding-left: 20px;\n}\nli {\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\nh3 {\n  margin-top: 20px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=browser-geolocation-instructions.component.css.map */\n"] }]
  }], () => [{ type: ModalController }, { type: StorageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrowserGeolocationInstructionsComponent, { className: "BrowserGeolocationInstructionsComponent", filePath: "src/app/components/modals/browser-geolocation-instructions/browser-geolocation-instructions.component.ts", lineNumber: 19 });
})();

// src/app/services/utils/geolocation.service.ts
var _GeolocationService = class _GeolocationService {
  constructor(alertController, translate, modalController, errorHandler) {
    this.alertController = alertController;
    this.translate = translate;
    this.modalController = modalController;
    this.errorHandler = errorHandler;
    this.geolocationState = new BehaviorSubject({
      state: "idle"
    });
    this.activeWatchId = null;
    this.positionTimer = null;
    this.lastPositionUpdate = 0;
    this.POSITION_UPDATE_INTERVAL = 3e4;
    this.resumeListener = App.addListener("resume", () => {
      this.checkPermission();
    });
  }
  startPositionTimer() {
    this.stopPositionTimer();
    this.positionTimer = setInterval(() => {
      const now = Date.now();
      if (now - this.lastPositionUpdate >= this.POSITION_UPDATE_INTERVAL) {
        this.getPosition();
      }
    }, this.POSITION_UPDATE_INTERVAL);
  }
  stopPositionTimer() {
    if (this.positionTimer) {
      clearInterval(this.positionTimer);
      this.positionTimer = null;
    }
  }
  /*********** CAPACITOR/GEOLOCATION ***********/
  checkPermission() {
    return __async(this, null, function* () {
      yield Geolocation.checkPermissions().then((permission) => {
        if (permission.location === "granted" || permission.coarseLocation === "granted") {
          this.geolocationState.next({ state: "granted" });
        } else if (permission.location === "denied" && permission.coarseLocation === "denied") {
          this.geolocationState.next({ state: "denied" });
        } else {
          this.geolocationState.next({ state: "prompt" });
        }
      });
    });
  }
  presentDeniedPositionAlert() {
    return __async(this, null, function* () {
      if (Capacitor.isNativePlatform()) {
        let buttons = [
          {
            text: this.translate.instant("map.denied_position_alert.button"),
            role: "cancel"
          },
          {
            text: this.translate.instant("map.denied_position_alert.settings"),
            handler: () => {
              NativeSettings.open({
                optionAndroid: AndroidSettings.ApplicationDetails,
                optionIOS: IOSSettings.App
              });
            }
          }
        ];
        const alert = yield this.alertController.create({
          header: this.translate.instant("map.denied_position_alert.header"),
          subHeader: this.translate.instant("map.denied_position_alert.subheader"),
          message: this.translate.instant("map.denied_position_alert.message"),
          buttons
        });
        yield alert.present();
      } else {
        const browserInstructionsModal = yield this.modalController.create({
          component: BrowserGeolocationInstructionsComponent,
          cssClass: "dialog-modal"
        });
        yield browserInstructionsModal.present();
      }
    });
  }
  askForPermission() {
    return __async(this, null, function* () {
      if (Capacitor.isNativePlatform()) {
        yield Geolocation.requestPermissions().then((permission) => {
          if (permission.location === "granted" || permission.coarseLocation === "granted") {
            this.geolocationState.next({ state: "granted" });
          } else if (permission.location === "denied" && permission.coarseLocation === "denied") {
            this.geolocationState.next({ state: "denied" });
          } else {
            this.geolocationState.next({ state: "prompt" });
          }
        });
      } else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((success) => {
            this.geolocationState.next({
              state: "unique_position",
              position: success
            });
          }, (error) => {
            if (error.message === "User denied Geolocation") {
              this.geolocationState.next({
                state: "denied"
              });
            } else {
              this.geolocationState.next({
                state: "error",
                error: error.message
              });
            }
          });
        }
      }
    });
  }
  getPosition(forceUpdate = false) {
    return __async(this, null, function* () {
      const now = Date.now();
      if (!forceUpdate && now - this.lastPositionUpdate < this.POSITION_UPDATE_INTERVAL) {
        return;
      }
      if (Capacitor.isNativePlatform()) {
        if (this.geolocationState.value.state === "granted") {
          yield Geolocation.getCurrentPosition().then((position) => {
            this.lastPositionUpdate = now;
            this.geolocationState.next({
              state: "unique_position",
              position
            });
            this.startPositionTimer();
          }).catch((error) => {
            this.errorHandler.handleError(error);
            this.stopPositionTimer();
          });
        }
      } else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((success) => {
            this.lastPositionUpdate = now;
            this.geolocationState.next({
              state: "unique_position",
              position: success
            });
            this.startPositionTimer();
          }, (error) => {
            if (error.message === "User denied Geolocation") {
              this.geolocationState.next({
                state: "denied"
              });
            } else {
              this.geolocationState.next({
                state: "error",
                error: error.message
              });
            }
            this.stopPositionTimer();
          });
        }
      }
    });
  }
  watchPosition() {
    return __async(this, null, function* () {
      if (this.isPositionGranted()) {
        if (this.activeWatchId) {
          return;
        }
        const watchId = Math.random().toString();
        this.activeWatchId = watchId;
        yield Geolocation.watchPosition({
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 1e4
        }, (position) => {
          if (position && position.coords && this.activeWatchId) {
            this.geolocationState.next({
              state: "live_position",
              position,
              watchId: this.activeWatchId
            });
          }
        }).catch((error) => {
          this.errorHandler.handleError(error);
          this.activeWatchId = null;
          this.geolocationState.next({
            state: "error",
            error: error.message
          });
        });
      }
    });
  }
  isPositionGranted() {
    return this.geolocationState.value.state === "granted" || this.geolocationState.value.state === "unique_position" || this.geolocationState.value.state === "live_position";
  }
  unwatchPosition() {
    return __async(this, null, function* () {
      if (this.geolocationState.value.state === "live_position") {
        yield Geolocation.clearWatch({
          id: this.geolocationState.value.watchId
        });
        this.activeWatchId = null;
      }
    });
  }
  goBackToIdle() {
    this.geolocationState.next({ state: "idle" });
  }
  /*********** UTILS ***********/
  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  openMaps(latitude, longitude, travelMode = "walking") {
    const lat = typeof latitude === "string" ? parseFloat(latitude) : latitude;
    const lng = typeof longitude === "string" ? parseFloat(longitude) : longitude;
    if (typeof lat === "number" && typeof lng === "number" && !isNaN(lat) && !isNaN(lng)) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=${travelMode}`;
      window.open(url, "_blank");
    }
  }
  calculateDistance(firstPosition, secondPosition) {
    const R = 6371e3;
    const dLat = this.deg2rad(secondPosition.latitude - firstPosition.latitude);
    const dLon = this.deg2rad(secondPosition.longitude - firstPosition.longitude);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(firstPosition.latitude)) * Math.cos(this.deg2rad(secondPosition.latitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
  }
  // N'oubliez pas de nettoyer le listener quand le service est détruit
  ngOnDestroy() {
    if (this.resumeListener) {
      this.resumeListener.remove();
    }
  }
};
_GeolocationService.\u0275fac = function GeolocationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GeolocationService)(\u0275\u0275inject(AlertController), \u0275\u0275inject(TranslateService), \u0275\u0275inject(ModalController), \u0275\u0275inject(ErrorHandlerService));
};
_GeolocationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GeolocationService, factory: _GeolocationService.\u0275fac, providedIn: "root" });
var GeolocationService = _GeolocationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeolocationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AlertController }, { type: TranslateService }, { type: ModalController }, { type: ErrorHandlerService }], null);
})();

// src/app/services/api-wrappers/stations.service.ts
var _StationWrapperService = class _StationWrapperService {
  constructor(geolocationService, storage, stationsService) {
    this.geolocationService = geolocationService;
    this.storage = storage;
    this.stationsService = stationsService;
    this.stationState = new BehaviorSubject({
      state: "no-station"
    });
    this.stationState$ = this.stationState.asObservable();
  }
  setStationState(state, station) {
    switch (state) {
      case "favorites-stations":
        this.stationState.next({ state: "favorites-stations" });
        break;
      case "no-station":
        this.stationState.next({ state: "no-station" });
        break;
      case "station-selected":
        if (station) {
          this.stationState.next({
            state: "station-selected",
            station
          });
        } else {
          this.stationState.next({ state: "no-station" });
        }
        break;
    }
  }
  getState() {
    return this.stationState.getValue();
  }
  getNearbyStations(position, radius, expandVehicles) {
    return __async(this, null, function* () {
      let stations;
      if (expandVehicles) {
        stations = yield new Promise((resolve) => {
          this.stationsService.listStation({
            program: environment.program,
            expand: ["vehicules"]
          }).subscribe((response) => resolve(response.data));
        });
      } else {
        stations = (yield this.storage.get("stations")).data;
      }
      return stations.filter((station) => {
        if (!station.position)
          return false;
        const distance = this.geolocationService.calculateDistance(position, {
          latitude: Number(station.position.latitude),
          longitude: Number(station.position.longitude)
        });
        return distance <= radius;
      });
    });
  }
  refreshStations(forceRefresh = false) {
    return __async(this, null, function* () {
      return new Promise((resolve) => __async(this, null, function* () {
        const stations = yield this.storage.get("stations");
        if (stations && stations.lastUpdate && Date.now() - stations.lastUpdate < 1e3 * 30 && !forceRefresh) {
          resolve();
          return;
        }
        const loadAllStations = (lastId = null, allStations = []) => {
          const params = {
            liveMode: environment.production,
            program: environment.program,
            limit: 100
          };
          if (lastId) {
            params.startingAfter = lastId;
          }
          this.stationsService.listStation(params).subscribe({
            next: (response) => __async(this, null, function* () {
              const combinedStations = [...allStations, ...response.data];
              if (response.has_more && response.data.length > 0) {
                const lastStation = response.data[response.data.length - 1];
                loadAllStations(lastStation.id, combinedStations);
              } else {
                yield this.storage.set("stations", {
                  data: combinedStations,
                  lastUpdate: Date.now()
                });
                resolve();
              }
            }),
            error: (error) => __async(this, null, function* () {
              console.error("Error loading stations:", error);
              if (allStations.length > 0) {
                yield this.storage.set("stations", {
                  data: allStations,
                  lastUpdate: Date.now()
                });
              }
              resolve();
            })
          });
        };
        loadAllStations();
      }));
    });
  }
  getBestVehicles(vehicles, amount) {
    if (!(vehicles == null ? void 0 : vehicles.length) || amount <= 0) {
      return [];
    }
    return vehicles.filter((vehicle) => {
      var _a;
      return ((_a = vehicle == null ? void 0 : vehicle.battery_vae) == null ? void 0 : _a.percent) != null;
    }).sort((vehicleA, vehicleB) => {
      var _a, _b, _c, _d;
      const batteryA = (_b = (_a = vehicleA.battery_vae) == null ? void 0 : _a.percent) != null ? _b : 0;
      const batteryB = (_d = (_c = vehicleB.battery_vae) == null ? void 0 : _c.percent) != null ? _d : 0;
      return batteryB - batteryA;
    }).slice(0, amount);
  }
};
_StationWrapperService.\u0275fac = function StationWrapperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StationWrapperService)(\u0275\u0275inject(GeolocationService), \u0275\u0275inject(StorageService), \u0275\u0275inject(StationsService));
};
_StationWrapperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StationWrapperService, factory: _StationWrapperService.\u0275fac, providedIn: "root" });
var StationWrapperService = _StationWrapperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StationWrapperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: GeolocationService }, { type: StorageService }, { type: StationsService }], null);
})();

export {
  GeolocationService,
  StationWrapperService
};
//# sourceMappingURL=chunk-RCWRZ7KJ.js.map
