import {
  FillButtonComponent
} from "./chunk-WPI72MTA.js";
import {
  ConfettiComponent
} from "./chunk-SMVESX3P.js";
import {
  FormatPinPipe
} from "./chunk-7FAYIW5R.js";
import {
  LottieComponent
} from "./chunk-UDDFHALT.js";
import {
  AppstateService
} from "./chunk-YSCBVZBE.js";
import "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonContent,
  Router,
  TranslateModule,
  TranslatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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

// src/app/pages/congrats/trips/trips-congrats.page.ts
var _c0 = (a0) => ({ number: a0 });
function TripsCongratsPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "formatPin");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "trips_congrats.unlock_code_message", \u0275\u0275pureFunction1(7, _c0, ctx_r0.trip.vehicule_number || "****")), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, ctx_r0.trip.pin || "******"));
  }
}
function TripsCongratsPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "trips_congrats.scooter_message"));
  }
}
var _TripsCongratsPage = class _TripsCongratsPage {
  constructor(router, appState) {
    this.router = router;
    this.appState = appState;
    this.options = {
      path: "/assets/icon/animated/lock.json"
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      var _a;
      const navigation = yield this.router.getCurrentNavigation();
      if (((_a = navigation == null ? void 0 : navigation.extras) == null ? void 0 : _a.state) && navigation.extras.state["trip"]) {
        this.trip = navigation.extras.state["trip"];
      } else {
        console.warn("No trip data found, redirecting to map");
        setTimeout(() => {
          this.router.navigate(["/map"]);
        }, 2e3);
        return;
      }
    });
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      const appState = this.appState.getAppState();
      if (appState.state === "fresh_cyclist" || appState.state === "regular_cyclist") {
        let tripStarted = (appState.trip_started || 0) + 1;
        switch (true) {
          case tripStarted == 1:
            this.appState.setAppState({
              state: "fresh_cyclist",
              trip_started: tripStarted,
              dring_state: {
                geolocation_dring: appState.state === "fresh_cyclist" ? appState.dring_state.geolocation_dring : "not_shown"
              },
              push_notifications: appState.state === "fresh_cyclist" ? appState.push_notifications : "not_shown"
            });
            break;
          case (tripStarted >= 2 && tripStarted < 30):
            this.appState.setAppState({
              state: "regular_cyclist",
              trip_started: tripStarted
            });
            break;
          case tripStarted >= 30:
            this.appState.setAppState({
              state: "passionate_cyclist",
              trip_started: tripStarted
            });
            break;
          default:
            break;
        }
      } else if (appState.state === "new_cyclist") {
        this.appState.setAppState({
          state: "fresh_cyclist",
          trip_started: 1,
          dring_state: {
            geolocation_dring: appState.dring_state.geolocation_dring
          },
          push_notifications: appState.push_notifications
        });
      }
    });
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.router.navigate(["/map"]);
    }, 14e3);
  }
};
_TripsCongratsPage.\u0275fac = function TripsCongratsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TripsCongratsPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AppstateService));
};
_TripsCongratsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TripsCongratsPage, selectors: [["app-trips-congrats"]], decls: 12, vars: 11, consts: [["color", "primary", 1, "ion-text-center", "ion-justify-content-center", "ion-align-items-center", 3, "fullscreen"], [1, "ecl-congrats-modal"], [3, "count"], [3, "options"], ["color", "light", "fill", "outline", 3, "buttonClick", "animationDuration"], [1, "code"]], template: function TripsCongratsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "app-confetti", 2)(3, "ng-lottie", 3);
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TripsCongratsPage_Conditional_7_Template, 6, 9)(8, TripsCongratsPage_Conditional_8_Template, 3, 3, "p");
    \u0275\u0275elementStart(9, "app-fill-button", 4);
    \u0275\u0275listener("buttonClick", function TripsCongratsPage_Template_app_fill_button_buttonClick_9_listener() {
      return ctx.router.navigate(["/map"]);
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("count", 50);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx.options);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "trips_congrats.lets_go"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.trip && ctx.trip.vehicule_type !== "scooter" ? 7 : ctx.trip && ctx.trip.vehicule_type === "scooter" ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", 14e3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "vehicle.continue"), " ");
  }
}, dependencies: [
  IonContent,
  CommonModule,
  FormsModule,
  ConfettiComponent,
  TranslateModule,
  TranslatePipe,
  LottieComponent,
  FormatPinPipe,
  FillButtonComponent
], styles: ["\n\n.code[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  padding: 1rem;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=trips-congrats.page.css.map */"] });
var TripsCongratsPage = _TripsCongratsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripsCongratsPage, [{
    type: Component,
    args: [{ selector: "app-trips-congrats", imports: [
      IonContent,
      CommonModule,
      FormsModule,
      ConfettiComponent,
      TranslateModule,
      LottieComponent,
      FormatPinPipe,
      FillButtonComponent
    ], template: `<ion-content
  [fullscreen]="true"
  color="primary"
  class="ion-text-center ion-justify-content-center ion-align-items-center"
>
  <div class="ecl-congrats-modal">
    <app-confetti [count]="50"></app-confetti>
    <ng-lottie [options]="options"></ng-lottie>
    <h1>{{ 'trips_congrats.lets_go' | translate }}</h1>
    @if (trip && trip.vehicule_type !== 'scooter') {
    <p>
      {{ 'trips_congrats.unlock_code_message' | translate:{ number:
      trip.vehicule_number || '****' } }}
    </p>
    <div class="code">{{ trip.pin || '******' | formatPin }}</div>
    } @else if (trip && trip.vehicule_type === 'scooter') {
    <p>{{ 'trips_congrats.scooter_message' | translate }}</p>
    }
    <!-- <ion-button
      color="light"
      shape="round"
      [routerLink]="['/map']"
      class="animated-button"
    >
      {{ 'trips_congrats.continue' | translate }}
    </ion-button> -->
    <app-fill-button
      color="light"
      fill="outline"
      [animationDuration]="14000"
      (buttonClick)="router.navigate(['/map'])"
    >
      {{ 'vehicle.continue' | translate }}
    </app-fill-button>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/congrats/trips/trips-congrats.page.scss */\n.code {\n  border: 1px solid #fff;\n  padding: 1rem;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=trips-congrats.page.css.map */\n"] }]
  }], () => [{ type: Router }, { type: AppstateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TripsCongratsPage, { className: "TripsCongratsPage", filePath: "src/app/pages/congrats/trips/trips-congrats.page.ts", lineNumber: 38 });
})();
export {
  TripsCongratsPage
};
//# sourceMappingURL=trips-congrats.page-75WLRK25.js.map
