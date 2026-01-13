import {
  FillButtonComponent
} from "./chunk-WPI72MTA.js";
import {
  RentingService
} from "./chunk-JZSN3FDE.js";
import "./chunk-GBVLTFX3.js";
import "./chunk-S5TR5TQN.js";
import "./chunk-OEYRANOA.js";
import "./chunk-RFEPADPA.js";
import "./chunk-RK7YL5P5.js";
import "./chunk-IBT2NAXJ.js";
import "./chunk-NHPV6IFO.js";
import "./chunk-YSCBVZBE.js";
import {
  VehiculesService
} from "./chunk-6J5UKKBN.js";
import "./chunk-RYICOSCB.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import "./chunk-Z4RNZNYE.js";
import {
  addIcons,
  ban,
  batteryDead,
  batteryFull,
  batteryHalf
} from "./chunk-3E6DEK7U.js";
import "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
  IonSkeletonText,
  IonSpinner,
  Router,
  RouterLink,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  firstValueFrom,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
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

// src/app/pages/renting/qr-code/qr-code.page.ts
var _c0 = (a0, a1) => ({ percent: a0, km: a1 });
var _c1 = () => ["/map"];
function QrCodePage_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 4);
  }
}
function QrCodePage_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row")(1, "ion-col", 6)(2, "div", 7);
    \u0275\u0275element(3, "ion-skeleton-text", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-row", 9)(5, "ion-col", 6);
    \u0275\u0275element(6, "ion-skeleton-text", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-row")(8, "ion-col", 6);
    \u0275\u0275element(9, "ion-skeleton-text", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-row")(11, "ion-col", 12);
    \u0275\u0275element(12, "ion-skeleton-text", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-row")(14, "ion-col", 6);
    \u0275\u0275element(15, "ion-skeleton-text", 14);
    \u0275\u0275elementEnd()();
  }
}
function QrCodePage_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-row")(1, "ion-col", 6);
    \u0275\u0275element(2, "ion-icon", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "ion-row", 9)(4, "ion-col", 6)(5, "h4", 16);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-row")(9, "ion-col", 12)(10, "app-fill-button", 17);
    \u0275\u0275listener("buttonClick", function QrCodePage_Case_6_Template_app_fill_button_buttonClick_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmUnlock());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ion-row")(14, "ion-col", 6)(15, "ion-button", 18);
    \u0275\u0275listener("click", function QrCodePage_Case_6_Template_ion_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetState());
    });
    \u0275\u0275elementStart(16, "u");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r1.pageState.vehicle.battery_vae.percent > 30 ? "battery-half" : "battery-dead");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 6, "vehicle.battery_remaining", \u0275\u0275pureFunction2(13, _c0, ctx_r1.pageState.vehicle.battery_vae.percent || 0, ctx_r1.pageState.vehicle.battery_vae.remaining_distance / 1e3 || 0)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("animationDuration", 5e3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "vehicle.continue"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 11, "generic.cancel"));
  }
}
function QrCodePage_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "ion-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h2", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-row")(9, "ion-col", 12)(10, "ion-button", 22);
    \u0275\u0275listener("click", function QrCodePage_Case_7_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetState());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "qr_code.not_rentable.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "qr_code.not_rentable.general"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, "qr_code.not_rentable.back_to_map"), " ");
  }
}
function QrCodePage_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "auto_unlock.unlocking_title"), " ");
  }
}
function QrCodePage_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "auto_unlock.success"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "auto_unlock.success_message"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "auto_unlock.start_ride"), " ");
  }
}
function QrCodePage_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "ion-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h2", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "auto_unlock.error_title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.pageState.error);
  }
}
var _QrCodePage = class _QrCodePage {
  constructor(route, router, vehiclesService, rentingService, translate) {
    this.route = route;
    this.router = router;
    this.vehiclesService = vehiclesService;
    this.rentingService = rentingService;
    this.translate = translate;
    this.vehicleID = null;
    this.pageState = { state: "loading_program" };
    addIcons({
      ban,
      batteryFull,
      batteryHalf,
      batteryDead
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.route.queryParams.subscribe((params) => __async(this, null, function* () {
        this.vehicleID = params["qrcode"];
        if (!this.vehicleID) {
          this.onError(this.translate.instant("qr_code.error.missing_vehicle_id"));
          return;
        }
        yield this.loadVehicleDetails();
      }));
    });
  }
  ngOnDestroy() {
    this.resetState();
  }
  loadVehicleDetails() {
    return __async(this, null, function* () {
      var _a;
      this.pageState = { state: "loading_vehicle" };
      if (!this.vehicleID) {
        throw new Error("No vehicleID available");
      }
      try {
        const vehicle = yield firstValueFrom(this.vehiclesService.retrieveVehicule({
          program: environment.program,
          id: this.vehicleID,
          liveMode: environment.production
        }));
        if (!vehicle || !vehicle.id) {
          throw new Error("Vehicle data incomplete");
        }
        if (!vehicle.rentable) {
          this.pageState = {
            state: "vehicle_not_rentable",
            vehicle
          };
          return;
        }
        const batteryPercent = (_a = vehicle.battery_vae) == null ? void 0 : _a.percent;
        if (batteryPercent && batteryPercent > 40) {
          yield this.startRenting(vehicle);
        } else {
          this.pageState = { state: "vehicle_loaded", vehicle };
          this.startAutoUnlockTimer();
        }
      } catch (error) {
        this.onError(this.translate.instant("qr_code.error." + error.error.error) || `Impossible de trouver le v\xE9hicule n\xB0 ${this.vehicleID}`);
      }
    });
  }
  confirmUnlock() {
    return __async(this, null, function* () {
      if (this.pageState.state !== "vehicle_loaded" || !this.pageState.vehicle)
        return;
      this.clearAutoUnlockTimer();
      yield this.startRenting(this.pageState.vehicle);
    });
  }
  resetState() {
    this.clearAutoUnlockTimer();
    this.pageState = { state: "loading_program" };
  }
  startRenting(vehicle) {
    return __async(this, null, function* () {
      var _a, _b, _c, _d;
      try {
        this.pageState = { state: "unlocking", vehicle };
        const trip = yield this.rentingService.startRenting(
          vehicle,
          false,
          // checkLocation
          vehicle.boitier_model === "bill" ? true : false,
          // autoUnlock
          false,
          // showLoader
          vehicle.boitier_model === "bill" ? true : false
          // skipRedirect
        );
        vehicle.boitier_model === "bill" && this.onSuccess(trip);
      } catch (error) {
        console.error("\u274C Error during unlock:", error);
        const errorMessage = ((_c = (_b = (_a = error.error) == null ? void 0 : _a.message) == null ? void 0 : _b.split("|")[1]) == null ? void 0 : _c.trim()) || ((_d = error.error) == null ? void 0 : _d.message) || `Impossible de d\xE9verrouiller le v\xE9lo ${(vehicle == null ? void 0 : vehicle.number) || ""}`;
        this.onError(errorMessage);
      }
    });
  }
  startAutoUnlockTimer() {
    this.clearAutoUnlockTimer();
    this.autoUnlockTimer = window.setTimeout(() => __async(this, null, function* () {
      if (this.pageState.state === "vehicle_loaded" && this.pageState.vehicle) {
        yield this.startRenting(this.pageState.vehicle);
      }
    }), 5e3);
  }
  clearAutoUnlockTimer() {
    if (this.autoUnlockTimer) {
      clearTimeout(this.autoUnlockTimer);
      this.autoUnlockTimer = void 0;
    }
  }
  onError(error) {
    this.pageState = { state: "error", error };
    setTimeout(() => {
      this.resetState();
      this.router.navigate(["/map"], { replaceUrl: true });
    }, 5e3);
  }
  onSuccess(trip) {
    this.pageState = { state: "success", trip };
    setTimeout(() => {
      this.resetState();
      this.router.navigate(["/map"], { replaceUrl: true });
    }, 6e3);
  }
};
_QrCodePage.\u0275fac = function QrCodePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QrCodePage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(VehiculesService), \u0275\u0275directiveInject(RentingService), \u0275\u0275directiveInject(TranslateService));
};
_QrCodePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QrCodePage, selectors: [["app-qr-code"]], decls: 11, vars: 3, consts: [[1, "ion-text-center", "ion-align-items-center", "ion-justify-content-center", 2, "--padding-top", "0", "--padding-bottom", "0", 3, "fullscreen", "color"], [1, "ion-no-padding", 2, "height", "100vh"], [1, "ion-align-items-center", "ion-justify-content-center", 2, "height", "100%"], ["size", "8", "size-md", "8", "size-lg", "6", 1, "ion-text-center"], ["color", "primary"], [1, "ion-color-light"], ["size", "12", 1, "ion-text-center"], [2, "display", "flex", "justify-content", "center", "margin-bottom", "1rem"], ["animated", "", 2, "width", "96px", "height", "96px", "border-radius", "50%"], [2, "margin-top", "-1rem"], ["animated", "", 2, "width", "80%", "height", "24px", "margin", "0 auto 1rem auto"], ["animated", "", 2, "width", "60%", "height", "20px", "margin", "0 auto 1rem auto"], ["size", "12", 1, "ion-text-center", "ion-margin-top"], ["animated", "", 2, "width", "100%", "height", "44px", "border-radius", "22px", "margin-bottom", "1rem"], ["animated", "", 2, "width", "30%", "height", "16px", "margin", "0 auto"], ["color", "light", 2, "font-size", "6rem", 3, "name"], [1, "ion-color-light", "battery-message"], ["color", "light", "fill", "outline", 3, "buttonClick", "animationDuration"], ["fill", "clear", "color", "light", 3, "click", "routerLink"], [1, "ion-margin-bottom"], ["name", "ban", "color", "light", 2, "font-size", "8rem"], [1, "ion-color-light", "ion-margin-top"], ["fill", "solid", "color", "light", 3, "click", "routerLink"]], template: function QrCodePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-grid", 1)(2, "ion-row", 2)(3, "ion-col", 3);
    \u0275\u0275template(4, QrCodePage_Case_4_Template, 1, 0, "ion-spinner", 4)(5, QrCodePage_Case_5_Template, 16, 0)(6, QrCodePage_Case_6_Template, 19, 17)(7, QrCodePage_Case_7_Template, 13, 11)(8, QrCodePage_Case_8_Template, 3, 3, "h2", 5)(9, QrCodePage_Case_9_Template, 9, 9)(10, QrCodePage_Case_10_Template, 7, 4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275property("fullscreen", true)("color", ctx.pageState.state === "error" ? "danger" : ctx.pageState.state === "loading_program" ? "light" : "primary");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_2_0 = ctx.pageState.state) === "loading_program" ? 4 : tmp_2_0 === "loading_vehicle" ? 5 : tmp_2_0 === "vehicle_loaded" ? 6 : tmp_2_0 === "vehicle_not_rentable" ? 7 : tmp_2_0 === "unlocking" ? 8 : tmp_2_0 === "success" ? 9 : tmp_2_0 === "error" ? 10 : -1);
  }
}, dependencies: [
  IonContent,
  IonSpinner,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonSkeletonText,
  CommonModule,
  TranslateModule,
  TranslatePipe,
  FillButtonComponent,
  RouterLink
], styles: ["\n\nion-checkbox[_ngcontent-%COMP%]::part(container) {\n  border-radius: 6px;\n}\n/*# sourceMappingURL=qr-code.page.css.map */"] });
var QrCodePage = _QrCodePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrCodePage, [{
    type: Component,
    args: [{ selector: "app-qr-code", standalone: true, imports: [
      IonContent,
      IonSpinner,
      IonButton,
      IonIcon,
      IonGrid,
      IonRow,
      IonCol,
      IonSkeletonText,
      CommonModule,
      TranslateModule,
      FillButtonComponent,
      RouterLink
    ], template: `<ion-content
  [fullscreen]="true"
  [color]="pageState.state === 'error' ? 'danger' : pageState.state === 'loading_program' ? 'light' : 'primary'"
  class="ion-text-center ion-align-items-center ion-justify-content-center"
  style="--padding-top: 0; --padding-bottom: 0"
>
  <ion-grid class="ion-no-padding" style="height: 100vh">
    <ion-row
      class="ion-align-items-center ion-justify-content-center"
      style="height: 100%"
    >
      <ion-col class="ion-text-center" size="8" size-md="8" size-lg="6">
        @switch (pageState.state) { @case ('loading_program') {
        <!-- Universal Link: Chargement program + colors (fond blanc) -->
        <ion-spinner color="primary"></ion-spinner>
        } @case ('loading_vehicle') {
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <div
              style="
                display: flex;
                justify-content: center;
                margin-bottom: 1rem;
              "
            >
              <ion-skeleton-text
                animated
                style="width: 96px; height: 96px; border-radius: 50%"
              ></ion-skeleton-text>
            </div>
          </ion-col>
        </ion-row>

        <!-- Row 2: Skeleton message batterie -->
        <ion-row style="margin-top: -1rem">
          <ion-col size="12" class="ion-text-center">
            <ion-skeleton-text
              animated
              style="width: 80%; height: 24px; margin: 0 auto 1rem auto"
            ></ion-skeleton-text>
          </ion-col>
        </ion-row>

        <!-- Row 3: Skeleton question suffisant -->
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <ion-skeleton-text
              animated
              style="width: 60%; height: 20px; margin: 0 auto 1rem auto"
            ></ion-skeleton-text>
          </ion-col>
        </ion-row>

        <!-- Row 4: Skeleton bouton -->
        <ion-row>
          <ion-col size="12" class="ion-text-center ion-margin-top">
            <ion-skeleton-text
              animated
              style="
                width: 100%;
                height: 44px;
                border-radius: 22px;
                margin-bottom: 1rem;
              "
            ></ion-skeleton-text>
          </ion-col>
        </ion-row>

        <!-- Row 5: Skeleton lien annuler -->
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <ion-skeleton-text
              animated
              style="width: 30%; height: 16px; margin: 0 auto"
            ></ion-skeleton-text>
          </ion-col>
        </ion-row>

        } @case ('vehicle_loaded') {
        <!-- Nouvelle interface avec 6 rows -->
        <!-- Row 1: Ic\xF4ne batterie -->
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <ion-icon
              [name]="pageState.vehicle.battery_vae.percent > 30 ? 'battery-half' : 'battery-dead'"
              color="light"
              style="font-size: 6rem"
            ></ion-icon>
          </ion-col>
        </ion-row>
        <!-- Row 2: Message batterie -->
        <ion-row style="margin-top: -1rem">
          <ion-col size="12" class="ion-text-center">
            <h4 class="ion-color-light battery-message">
              {{ 'vehicle.battery_remaining' | translate:{ percent:
              pageState.vehicle.battery_vae.percent || 0, km:
              pageState.vehicle.battery_vae.remaining_distance / 1000 || 0 } }}
            </h4>
          </ion-col>
        </ion-row>
        <!-- Row 3: Bouton avec timer -->
        <ion-row>
          <ion-col size="12" class="ion-text-center ion-margin-top">
            <app-fill-button
              color="light"
              fill="outline"
              [animationDuration]="5000"
              (buttonClick)="confirmUnlock()"
            >
              {{ 'vehicle.continue' | translate }}
            </app-fill-button>
          </ion-col>
        </ion-row>

        <!-- Row 4: Lien annuler -->
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <ion-button
              fill="clear"
              color="light"
              (click)="resetState()"
              [routerLink]="['/map']"
            >
              <u>{{ 'generic.cancel' | translate }}</u>
            </ion-button>
          </ion-col>
        </ion-row>
        } @case ('vehicle_not_rentable') {
        <!-- \xC9tat v\xE9hicule non louable -->
        <div class="ion-margin-bottom">
          <ion-icon name="ban" color="light" style="font-size: 8rem"></ion-icon>
        </div>
        <h2 class="ion-color-light">
          {{ 'qr_code.not_rentable.title' | translate }}
        </h2>
        <p class="ion-color-light ion-margin-top">
          {{ 'qr_code.not_rentable.general' | translate }}
        </p>

        <!-- Bouton retour \xE0 la carte -->
        <ion-row>
          <ion-col size="12" class="ion-text-center ion-margin-top">
            <ion-button
              fill="solid"
              color="light"
              (click)="resetState()"
              [routerLink]="['/map']"
            >
              {{ 'qr_code.not_rentable.back_to_map' | translate }}
            </ion-button>
          </ion-col>
        </ion-row>
        } @case ('unlocking') {
        <!-- \xC9tat de d\xE9verrouillage en cours -->
        <h2 class="ion-color-light">
          {{ 'auto_unlock.unlocking_title' | translate }}
        </h2>
        } @case ('success') {
        <!-- \xC9tat de succ\xE8s -->
        <h2 class="ion-color-light">{{ 'auto_unlock.success' | translate }}</h2>
        <p class="ion-color-light">
          {{ 'auto_unlock.success_message' | translate }}
        </p>
        <p class="ion-color-light">
          {{ 'auto_unlock.start_ride' | translate }}
        </p>
        } @case ('error') {
        <!-- \xC9tat d'erreur -->
        <div class="ion-margin-bottom">
          <ion-icon name="ban" color="light" style="font-size: 8rem"></ion-icon>
        </div>
        <h2 class="ion-color-light">
          {{ 'auto_unlock.error_title' | translate }}
        </h2>
        <p class="ion-color-light ion-margin-top">{{ pageState.error }}</p>
        } }
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>
`, styles: ["/* src/app/pages/renting/qr-code/qr-code.page.scss */\nion-checkbox::part(container) {\n  border-radius: 6px;\n}\n/*# sourceMappingURL=qr-code.page.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: VehiculesService }, { type: RentingService }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QrCodePage, { className: "QrCodePage", filePath: "src/app/pages/renting/qr-code/qr-code.page.ts", lineNumber: 59 });
})();
export {
  QrCodePage
};
//# sourceMappingURL=qr-code.page-RFJRJLO4.js.map
