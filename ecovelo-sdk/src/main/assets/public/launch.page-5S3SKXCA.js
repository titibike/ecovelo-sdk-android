import {
  LaunchService
} from "./chunk-F3CFQ2UQ.js";
import "./chunk-RCWRZ7KJ.js";
import "./chunk-S5TR5TQN.js";
import "./chunk-OEYRANOA.js";
import "./chunk-MIGXUTE7.js";
import "./chunk-CBD46IRE.js";
import "./chunk-RFEPADPA.js";
import "./chunk-7JCEDXGT.js";
import "./chunk-ULLB7OBK.js";
import {
  AuthService
} from "./chunk-7UN2TOGU.js";
import {
  KYCWrapperService
} from "./chunk-H4GUYJEZ.js";
import "./chunk-7NHGY2ON.js";
import {
  AppstateService
} from "./chunk-YSCBVZBE.js";
import {
  AccountService
} from "./chunk-5KPTYQ6O.js";
import "./chunk-FGJU3CJK.js";
import {
  environment
} from "./chunk-GFMHZGOY.js";
import "./chunk-Z4RNZNYE.js";
import {
  addIcons,
  cloudDownloadOutline
} from "./chunk-3E6DEK7U.js";
import "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  Injectable,
  IonCol,
  IonContent,
  IonImg,
  IonProgressBar,
  IonRow,
  NgIf,
  Router,
  Subject,
  TranslateModule,
  TranslatePipe,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
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
import {
  Capacitor,
  registerPlugin
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

// node_modules/capacitor-plugin-app-tracking-transparency/dist/esm/index.js
var AppTrackingTransparency = registerPlugin("AppTrackingTransparency", {
  web: () => import("./web-7GDQ42YT.js").then((m) => new m.AppTrackingTransparencyWeb())
});

// node_modules/@capawesome/capacitor-live-update/dist/esm/index.js
var LiveUpdate = registerPlugin("LiveUpdate", {
  web: () => import("./web-DV2B77CC.js").then((m) => new m.LiveUpdateWeb())
});

// src/app/services/liveupdate.service.ts
var _LiveUpdateService = class _LiveUpdateService {
  constructor() {
    this.updateSubject = new Subject();
    this.updates$ = this.updateSubject.asObservable();
  }
  // Méthode principale pour vérifier et appliquer les mises à jour
  checkForUpdate() {
    return __async(this, null, function* () {
      var _a, _b;
      try {
        this.updateSubject.next("check_started");
        const bundle = yield LiveUpdate.fetchLatestBundle();
        if (bundle && bundle.bundleId && ((_a = bundle.customProperties) == null ? void 0 : _a["timestamp"]) && environment.timestamp < ((_b = bundle.customProperties) == null ? void 0 : _b["timestamp"])) {
          const currentBundles = yield LiveUpdate.getBundles();
          const currentBundle = yield LiveUpdate.getCurrentBundle();
          if (currentBundles.bundleIds.includes(bundle.bundleId) && currentBundle.bundleId === bundle.bundleId) {
            this.updateSubject.next("bundle_not_found");
            return;
          } else {
            this.updateSubject.next("bundle_found");
          }
          this.updateSubject.next("download_started");
          const syncResult = yield LiveUpdate.sync();
          if (syncResult.nextBundleId) {
            this.updateSubject.next("download_completed");
            yield new Promise((resolve) => setTimeout(resolve, 500));
            this.updateSubject.next("reload_started");
            yield LiveUpdate.reload();
          } else {
            this.updateSubject.next("bundle_not_found");
          }
        } else {
          this.updateSubject.next("bundle_not_found");
        }
      } catch (error) {
        console.error("Erreur lors de la mise \xE0 jour LiveUpdate :", error);
        this.updateSubject.next("error");
      }
    });
  }
  // Méthode pour indiquer que l'application s'est chargée
  ready() {
    return __async(this, null, function* () {
      yield LiveUpdate.ready();
    });
  }
};
_LiveUpdateService.\u0275fac = function LiveUpdateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LiveUpdateService)();
};
_LiveUpdateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LiveUpdateService, factory: _LiveUpdateService.\u0275fac, providedIn: "root" });
var LiveUpdateService = _LiveUpdateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/pages/launch/launch.page.ts
function LaunchPage_ion_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.program == null ? null : ctx_r0.program.config == null ? null : ctx_r0.program.config.logo);
  }
}
function LaunchPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row", 5)(2, "ion-col", 6)(3, "p", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-row", 8)(7, "ion-col", 6);
    \u0275\u0275element(8, "ion-progress-bar", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "launch.searching_for_updates"), " ");
  }
}
var _LaunchPage = class _LaunchPage {
  constructor(storageService, accountService, router, authService, liveUpdateService, appstateService, route, launchService, kycService) {
    this.storageService = storageService;
    this.accountService = accountService;
    this.router = router;
    this.authService = authService;
    this.liveUpdateService = liveUpdateService;
    this.appstateService = appstateService;
    this.route = route;
    this.launchService = launchService;
    this.kycService = kycService;
    this.auth = { state: "SignedOut" };
    this.cyclist = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    this.isFirstVisit = false;
    this.loaderStateText = "launch.update_checking";
    this.nextUrl = null;
    this.liveUpdateState = "idle";
    this.route.queryParams.subscribe((params) => {
      if (params["next"]) {
        this.nextUrl = params["next"];
      }
    });
    effect(() => {
      this.auth = this.authService.authState();
    });
    effect(() => {
      this.cyclist = this.accountService.cyclistState();
    });
    addIcons({
      cloudDownloadOutline
    });
    this.updateSubscription = this.liveUpdateService.updates$.subscribe((event) => {
      switch (event) {
        case "download_started":
          this.liveUpdateState = "download_started";
          break;
        case "download_completed":
          this.liveUpdateState = "download_completed";
          break;
        case "error":
        case "bundle_not_found":
          this.liveUpdateState = "bundle_not_found";
          break;
      }
    });
  }
  ngOnDestroy() {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.app = yield this.appstateService.getSavedAppState();
      if (Capacitor.getPlatform() === "ios") {
        const response = yield AppTrackingTransparency.getStatus();
        if (response.status === "notDetermined") {
          const appTrackingResponse = yield AppTrackingTransparency.requestPermission();
          if (appTrackingResponse.status === "authorized") {
          } else {
          }
        }
      }
      const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 5e3));
      yield Promise.race([this.loadData(), timeoutPromise]);
      if (Capacitor.isNativePlatform()) {
        yield this.checkForLiveUpdate();
        yield this.liveUpdateService.ready();
      }
      if (!this.app) {
        this.appstateService.setAppState({ state: "onboarding" });
        yield this.router.navigate(["/landing"], { replaceUrl: true });
      }
      switch (this.auth.state) {
        case "SignedIn":
          if (this.cyclist.state === "unknown" || this.cyclist.state === "error") {
            yield this.waitForCyclistState();
          }
          if (this.app.state === "onboarding") {
            this.redirectOnboarding();
          } else {
            this.redirect();
          }
          break;
        case "SignedOut":
          yield this.router.navigate(["/landing"], { replaceUrl: true });
          break;
        default:
          yield this.router.navigate(["/map"], { replaceUrl: true });
          break;
      }
    });
  }
  loadData() {
    return __async(this, null, function* () {
      try {
        yield this.launchService.loadEssentialData({
          skipIfDataExists: false,
          // Always load on launch page
          forceRefreshStations: true
        });
        this.program = yield this.storageService.get("program");
      } catch (error) {
        console.error("Error in loadData:", error);
      }
    });
  }
  checkForLiveUpdate() {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      const subscription = this.liveUpdateService.updates$.subscribe((event) => __async(this, null, function* () {
        switch (event) {
          case "check_started":
            this.loaderStateText = "launch.update_checking";
            break;
          case "bundle_found":
            this.loaderStateText = "launch.update_available";
            break;
          case "bundle_not_found":
            this.loaderStateText = "launch.no_update";
            subscription.unsubscribe();
            resolve();
            break;
          case "download_started":
            this.loaderStateText = "launch.update_downloading";
            break;
          case "download_completed":
            this.loaderStateText = "launch.update_downloaded";
            break;
          case "reload_started":
            this.loaderStateText = "launch.update_app_reloading";
            resolve();
            break;
          case "error":
            this.loaderStateText = "launch.error";
            subscription.unsubscribe();
            reject("liveUpdateError");
            break;
        }
      }));
      this.liveUpdateService.checkForUpdate();
    }));
  }
  redirectOnboarding() {
    return __async(this, null, function* () {
      if (this.cyclist.state === "unconfirmed") {
        if (this.accountService.hasMissingPaymentMethodOrCgu()) {
          yield this.router.navigate(["/payment-method"], {
            replaceUrl: true
          });
        } else if (this.kycService.kycCompletionState() === "missing" || this.kycService.kycCompletionState() === "rejected") {
          yield this.router.navigate(["/kyc"], {
            replaceUrl: true,
            queryParams: {
              onboarding: "true"
            }
          });
        } else {
          yield this.router.navigate(["/map"], {
            replaceUrl: true
          });
        }
      } else {
        yield this.router.navigate(["/map"], {
          replaceUrl: true
        });
      }
    });
  }
  redirect() {
    return __async(this, null, function* () {
      if (this.kycService.kycCompletionState() === "missing" || this.kycService.kycCompletionState() === "rejected") {
        yield this.router.navigate(["/kyc"], { replaceUrl: true });
      } else if (this.nextUrl && this.nextUrl !== "/") {
        yield this.router.navigate([this.nextUrl], { replaceUrl: true });
      } else {
        yield this.router.navigate(["/map"], { replaceUrl: true });
      }
    });
  }
  waitForCyclistState() {
    return __async(this, null, function* () {
      const maxRetries = 1e3;
      for (let i = 0; i < maxRetries; i++) {
        if (this.cyclist.state !== "unknown" && this.cyclist.state !== "error") {
          return;
        }
        yield new Promise((resolve) => setTimeout(resolve, 5));
      }
      console.warn("Cyclist state did not change within the allowed time");
    });
  }
};
_LaunchPage.\u0275fac = function LaunchPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LaunchPage)(\u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(LiveUpdateService), \u0275\u0275directiveInject(AppstateService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LaunchService), \u0275\u0275directiveInject(KYCWrapperService));
};
_LaunchPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LaunchPage, selectors: [["app-launch"]], features: [\u0275\u0275ProvidersFeature([Storage, StorageService])], decls: 4, vars: 3, consts: [[3, "fullscreen"], [1, "ecl-launch__container", "logo"], ["class", "fade-in", "alt", "logo", 3, "src", 4, "ngIf"], [4, "ngIf"], ["alt", "logo", 1, "fade-in", 3, "src"], [1, "ion-margin-top", "ion-margin-horizontal", "ion-justify-content-center"], ["size", "12", "size-md", "6", "size-lg", "4"], [1, "ion-text-center"], [1, "ion-margin-horizontal", "ion-margin-bottom", "ion-justify-content-center"], ["type", "indeterminate"]], template: function LaunchPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275template(2, LaunchPage_ion_img_2_Template, 1, 1, "ion-img", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LaunchPage_ng_container_3_Template, 9, 3, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.program);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.liveUpdateState === "download_started");
  }
}, dependencies: [
  IonContent,
  CommonModule,
  NgIf,
  IonRow,
  IonImg,
  TranslateModule,
  TranslatePipe,
  IonProgressBar,
  IonCol
], styles: ["\n\n.ecl-launch__container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50%;\n  width: 100%;\n}\n.ecl-launch__container.logo[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.ecl-launch__container.logo[_ngcontent-%COMP%]    > .fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 1s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=launch.page.css.map */"] });
var LaunchPage = _LaunchPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LaunchPage, [{
    type: Component,
    args: [{ selector: "app-launch", providers: [Storage, StorageService], imports: [
      IonContent,
      CommonModule,
      IonRow,
      IonImg,
      TranslateModule,
      IonProgressBar,
      IonCol
    ], template: `<ion-content [fullscreen]="true">
  <div class="ecl-launch__container logo">
    <ion-img
      *ngIf="program"
      class="fade-in"
      [src]="program?.config?.logo"
      alt="logo"
    ></ion-img>
  </div>
  <ng-container *ngIf="liveUpdateState === 'download_started'">
    <ion-row
      class="ion-margin-top ion-margin-horizontal ion-justify-content-center"
    >
      <ion-col size="12" size-md="6" size-lg="4">
        <p class="ion-text-center">
          {{ 'launch.searching_for_updates' | translate }}
        </p>
      </ion-col>
    </ion-row>
    <ion-row
      class="ion-margin-horizontal ion-margin-bottom ion-justify-content-center"
    >
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-progress-bar type="indeterminate"></ion-progress-bar>
      </ion-col>
    </ion-row>
  </ng-container>
</ion-content>
`, styles: ["/* src/app/pages/launch/launch.page.scss */\n.ecl-launch__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50%;\n  width: 100%;\n}\n.ecl-launch__container.logo {\n  align-items: flex-end;\n}\n.ecl-launch__container.logo > .fade-in {\n  animation: fadeIn 1s ease-in-out;\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=launch.page.css.map */\n"] }]
  }], () => [{ type: StorageService }, { type: AccountService }, { type: Router }, { type: AuthService }, { type: LiveUpdateService }, { type: AppstateService }, { type: ActivatedRoute }, { type: LaunchService }, { type: KYCWrapperService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LaunchPage, { className: "LaunchPage", filePath: "src/app/pages/launch/launch.page.ts", lineNumber: 49 });
})();
export {
  LaunchPage
};
//# sourceMappingURL=launch.page-5S3SKXCA.js.map
