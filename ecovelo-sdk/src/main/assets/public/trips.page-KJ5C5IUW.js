import {
  RentingService
} from "./chunk-6TZ6CPLZ.js";
import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-RCWRZ7KJ.js";
import "./chunk-S5TR5TQN.js";
import "./chunk-OEYRANOA.js";
import "./chunk-7GZOXTNY.js";
import "./chunk-RFEPADPA.js";
import {
  IonIcon as IonIcon2,
  IonItem as IonItem2,
  IonLabel as IonLabel2,
  IonRow as IonRow2,
  IonicModule
} from "./chunk-ULLB7OBK.js";
import "./chunk-7UN2TOGU.js";
import "./chunk-H4GUYJEZ.js";
import "./chunk-7NHGY2ON.js";
import "./chunk-YSCBVZBE.js";
import "./chunk-5KPTYQ6O.js";
import "./chunk-FGJU3CJK.js";
import "./chunk-GFMHZGOY.js";
import "./chunk-Z4RNZNYE.js";
import {
  addIcons,
  bicycleOutline,
  flameOutline,
  leafOutline,
  lockOpen
} from "./chunk-3E6DEK7U.js";
import "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  Input,
  IonBadge,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonProgressBar,
  IonRefresher,
  IonRow,
  IonSkeletonText,
  IonText,
  NgForOf,
  NgIf,
  Pipe,
  RouterLink,
  TranslateModule,
  TranslatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
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
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
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
import "./chunk-UESUV5PM.js";

// src/app/pipes/co2saved.pipe.ts
var _co2savedPipe = class _co2savedPipe {
  transform(co2, distance, ...args) {
    if (co2 > 0) {
      return Math.trunc(distance / 1e3 * 220 - co2);
    } else {
      return co2;
    }
  }
};
_co2savedPipe.\u0275fac = function co2savedPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _co2savedPipe)();
};
_co2savedPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "co2saved", type: _co2savedPipe, pure: true });
var co2savedPipe = _co2savedPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(co2savedPipe, [{
    type: Pipe,
    args: [{
      name: "co2saved",
      standalone: true
    }]
  }], null, null);
})();

// src/app/shared/components/trip-item/trip-item.component.ts
function TripItemComponent_strong_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.trip.amount / 100, "\u20AC");
  }
}
function TripItemComponent_strong_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "ion-icon", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "trip.status." + ctx_r0.trip.status), " - ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.trip.pin, "");
  }
}
function TripItemComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.trip.end_timestamp * 1e3, "dd/MM/yy HH:mm"), " ");
  }
}
function TripItemComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.trip.termination_requested_timestamp * 1e3, "dd/MM/yy HH:mm"), " ");
  }
}
var _TripItemComponent = class _TripItemComponent {
  constructor(rentingService) {
    this.rentingService = rentingService;
    addIcons({
      lockOpen
    });
  }
  hasActiveTripOverThreeHours() {
    return this.rentingService.hasActiveTripOverThreeHours(this.trip);
  }
  hasActiveTripOver24Hours() {
    return this.rentingService.hasActiveTripOver24Hours(this.trip);
  }
};
_TripItemComponent.\u0275fac = function TripItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TripItemComponent)(\u0275\u0275directiveInject(RentingService));
};
_TripItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TripItemComponent, selectors: [["app-trip-item"]], inputs: { trip: "trip" }, decls: 35, vars: 23, consts: [[3, "color"], [1, "ion-text-wrap"], [1, "ion-justify-content-between"], [2, "display", "flex", "align-items", "center", "gap", "3px"], ["src", "../../../../assets/svg/fontawesome/tricycle-regular.svg"], [4, "ngIf"], ["name", "leaf-outline", "color", "success"], ["name", "flame-outline", "color", "danger"], ["name", "lock-open"]], template: function TripItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 0)(1, "ion-label", 1)(2, "ion-row", 2)(3, "div", 3);
    \u0275\u0275element(4, "ion-icon", 4);
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, TripItemComponent_strong_7_Template, 2, 1, "strong", 5)(8, TripItemComponent_strong_8_Template, 5, 4, "strong", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-row", 2)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-row", 2)(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, TripItemComponent_p_18_Template, 3, 4, "p", 5)(19, TripItemComponent_p_19_Template, 3, 4, "p", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-row", 2)(21, "p");
    \u0275\u0275element(22, "ion-icon", 6);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "co2saved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "ion-row", 2)(29, "p");
    \u0275\u0275element(30, "ion-icon", 7);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("color", ctx.hasActiveTripOverThreeHours() ? "primary" : ctx.hasActiveTripOver24Hours() ? "warning" : "grey");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.trip.vehicule_number);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.trip.status === "completed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.trip.status !== "completed");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.trip.start_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.trip.end_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 13, ctx.trip.start_timestamp * 1e3, "dd/MM/yy HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.trip.end_timestamp > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.trip.status === "termination_requested");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 16, "trip.metrics.co2_saved"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 18, ctx.trip.g_CO2_km, ctx.trip.distance || 0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 21, "trip.metrics.kcal_burned"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.trip.kcal_burned || 0);
  }
}, dependencies: [IonicModule, IonIcon2, IonItem2, IonLabel2, IonRow2, CommonModule, NgIf, DatePipe, co2savedPipe, TranslateModule, TranslatePipe], encapsulation: 2 });
var TripItemComponent = _TripItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripItemComponent, [{
    type: Component,
    args: [{ selector: "app-trip-item", imports: [IonicModule, CommonModule, co2savedPipe, TranslateModule], template: `<ion-item
  [color]="
    hasActiveTripOverThreeHours()
      ? 'primary'
      : hasActiveTripOver24Hours()
      ? 'warning'
      : 'grey'
  "
>
  <ion-label class="ion-text-wrap">
    <ion-row class="ion-justify-content-between">
      <div style="display: flex; align-items: center; gap: 3px">
        <ion-icon
          src="../../../../assets/svg/fontawesome/tricycle-regular.svg"
        ></ion-icon>
        <strong>{{ trip.vehicule_number }}</strong>
      </div>
      <strong *ngIf="trip.status === 'completed'"
        >{{ trip.amount / 100 }}\u20AC</strong
      >

      <strong *ngIf="trip.status !== 'completed'">
        {{ 'trip.status.' + trip.status | translate }} -
        <ion-icon name="lock-open"></ion-icon> {{ trip.pin }}</strong
      >
    </ion-row>
    <ion-row class="ion-justify-content-between">
      <p>{{ trip.start_name }}</p>
      <p>{{ trip.end_name }}</p>
    </ion-row>
    <ion-row class="ion-justify-content-between">
      <p>{{ trip.start_timestamp * 1000 | date : 'dd/MM/yy HH:mm' }}</p>
      <p *ngIf="trip.end_timestamp > 0">
        {{ trip.end_timestamp * 1000 | date : 'dd/MM/yy HH:mm' }}
      </p>
      <p *ngIf="trip.status === 'termination_requested'">
        {{
          trip.termination_requested_timestamp * 1000 | date : 'dd/MM/yy HH:mm'
        }}
      </p>
    </ion-row>
    <ion-row class="ion-justify-content-between">
      <p>
        <ion-icon name="leaf-outline" color="success"></ion-icon>
        {{ 'trip.metrics.co2_saved' | translate }}
      </p>
      <p>{{ trip.g_CO2_km | co2saved : trip.distance || 0 }}</p>
    </ion-row>
    <ion-row class="ion-justify-content-between">
      <p>
        <ion-icon name="flame-outline" color="danger"></ion-icon>
        {{ 'trip.metrics.kcal_burned' | translate }}
      </p>
      <p>{{ trip.kcal_burned || 0 }}</p>
    </ion-row>
  </ion-label>
</ion-item>
` }]
  }], () => [{ type: RentingService }], { trip: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TripItemComponent, { className: "TripItemComponent", filePath: "src/app/shared/components/trip-item/trip-item.component.ts", lineNumber: 15 });
})();

// src/app/components/dring/trips-dring/trips-dring.component.ts
var _c0 = () => ["/renting"];
var _TripsDringComponent = class _TripsDringComponent {
  constructor() {
  }
};
_TripsDringComponent.\u0275fac = function TripsDringComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TripsDringComponent)();
};
_TripsDringComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TripsDringComponent, selectors: [["app-trips-dring"]], decls: 12, vars: 11, consts: [[1, "ion-no-margin", 2, "display", "flex", "align-items", "center"], ["src", "assets/svg/dring_dring.svg"], [1, "ion-margin-start", "pacifico-regular"], [1, "ion-margin-bottom"], ["expand", "block", "color", "primary", 1, "ion-margin-top", 3, "routerLink"], ["name", "bicycle-outline", "slot", "start"]], template: function TripsDringComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 0);
    \u0275\u0275element(1, "img", 1);
    \u0275\u0275elementStart(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-button", 4);
    \u0275\u0275element(9, "ion-icon", 5);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "generic.dring"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "trips_dring.description"), "\n");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "trips_dring.start_trip"), "\n");
  }
}, dependencies: [CommonModule, TranslateModule, TranslatePipe, IonButton, IonIcon, RouterLink], encapsulation: 2 });
var TripsDringComponent = _TripsDringComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripsDringComponent, [{
    type: Component,
    args: [{ selector: "app-trips-dring", imports: [CommonModule, TranslateModule, IonButton, IonIcon, RouterLink], template: `<h1 style="display: flex; align-items: center" class="ion-no-margin">
  <img src="assets/svg/dring_dring.svg" />
  <span class="ion-margin-start pacifico-regular">{{
    'generic.dring' | translate
  }}</span>
</h1>

<p class="ion-margin-bottom">
  {{ 'trips_dring.description' | translate }}
</p>

<ion-button
  expand="block"
  color="primary"
  class="ion-margin-top"
  [routerLink]="['/renting']"
>
  <ion-icon name="bicycle-outline" slot="start"></ion-icon>
  {{ 'trips_dring.start_trip' | translate }}
</ion-button>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TripsDringComponent, { className: "TripsDringComponent", filePath: "src/app/components/dring/trips-dring/trips-dring.component.ts", lineNumber: 20 });
})();

// src/app/pages/account/trips/trips.page.ts
var _c02 = () => [];
function TripsPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-progress-bar", 1);
  }
}
function TripsPage_Conditional_6_app_trip_item_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-trip-item", 11);
  }
  if (rf & 2) {
    const trip_r1 = ctx.$implicit;
    \u0275\u0275property("trip", trip_r1);
  }
}
function TripsPage_Conditional_6_app_trip_item_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-trip-item", 11);
  }
  if (rf & 2) {
    const trip_r2 = ctx.$implicit;
    \u0275\u0275property("trip", trip_r2);
  }
}
function TripsPage_Conditional_6_ion_text_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text");
    \u0275\u0275text(1, "+");
    \u0275\u0275elementEnd();
  }
}
function TripsPage_Conditional_6_app_trip_item_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-trip-item", 11);
  }
  if (rf & 2) {
    const trip_r3 = ctx.$implicit;
    \u0275\u0275property("trip", trip_r3);
  }
}
function TripsPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "ion-badge", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-list", 8);
    \u0275\u0275template(6, TripsPage_Conditional_6_app_trip_item_6_Template, 1, 1, "app-trip-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "ion-badge", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-list", 8);
    \u0275\u0275template(13, TripsPage_Conditional_6_app_trip_item_13_Template, 1, 1, "app-trip-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h4", 6);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "ion-badge", 7);
    \u0275\u0275text(18);
    \u0275\u0275template(19, TripsPage_Conditional_6_ion_text_19_Template, 2, 0, "ion-text", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ion-list", 8);
    \u0275\u0275template(21, TripsPage_Conditional_6_app_trip_item_21_Template, 1, 1, "app-trip-item", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 13, "trips.today"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.tripsState.todayTrips.length);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.tripsState.todayTrips);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 15, "trips.yesterday"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.tripsState.yesterdayTrips.length);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.tripsState.yesterdayTrips);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 17, "trips.previous"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.tripsState.olderTrips.length, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.tripsState.hasMoreTrips);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.tripsState.olderTrips);
  }
}
function TripsPage_Conditional_7_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h3");
    \u0275\u0275element(3, "ion-skeleton-text", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275element(5, "ion-skeleton-text", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "ion-skeleton-text", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
function TripsPage_Conditional_7_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h3");
    \u0275\u0275element(3, "ion-skeleton-text", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275element(5, "ion-skeleton-text", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "ion-skeleton-text", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
function TripsPage_Conditional_7_ion_item_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h3");
    \u0275\u0275element(3, "ion-skeleton-text", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275element(5, "ion-skeleton-text", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "ion-skeleton-text", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
function TripsPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-list");
    \u0275\u0275template(4, TripsPage_Conditional_7_ion_item_4_Template, 8, 3, "ion-item", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-list");
    \u0275\u0275template(9, TripsPage_Conditional_7_ion_item_9_Template, 8, 3, "ion-item", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h4", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-list");
    \u0275\u0275template(14, TripsPage_Conditional_7_ion_item_14_Template, 8, 3, "ion-item", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 6, "trips.today"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(12, _c02).constructor(ctx_r3.skeletonCount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "trips.yesterday"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(13, _c02).constructor(ctx_r3.skeletonCount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "trips.previous"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(14, _c02).constructor(ctx_r3.skeletonCount));
  }
}
function TripsPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-trips-dring");
  }
}
var _TripsPage = class _TripsPage {
  constructor(rentingService) {
    this.rentingService = rentingService;
    this.tripsState = { state: "loading" };
    this.skeletonCount = 2;
    addIcons({ leafOutline, flameOutline, bicycleOutline });
  }
  ngOnInit() {
    this.refresh();
  }
  handleRefresh(event) {
    this.refresh().then(() => {
      event.target.complete();
    });
  }
  refresh() {
    return new Promise((resolve, reject) => {
      this.tripsState = { state: "loading" };
      this.rentingService.getUserTrips().subscribe((trips) => {
        if (trips.data.length === 0) {
          this.tripsState = { state: "noData" };
          resolve();
          return;
        }
        const now = Math.floor(Date.now() / 1e3);
        const todayStart = now - now % 86400;
        const yesterdayStart = todayStart - 86400;
        const newState = {
          state: "loaded",
          hasMoreTrips: trips.has_more,
          todayTrips: [],
          yesterdayTrips: [],
          olderTrips: []
        };
        trips.data.forEach((trip) => {
          if (trip.created >= todayStart) {
            newState.todayTrips.push(trip);
          } else if (trip.created >= yesterdayStart) {
            newState.yesterdayTrips.push(trip);
          } else {
            newState.olderTrips.push(trip);
          }
        });
        this.tripsState = newState;
        resolve();
      });
    });
  }
};
_TripsPage.\u0275fac = function TripsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TripsPage)(\u0275\u0275directiveInject(RentingService));
};
_TripsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TripsPage, selectors: [["app-trips"]], decls: 9, vars: 5, consts: [[3, "defaultHref"], ["type", "indeterminate"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], ["slot", "fixed", 3, "ionRefresh"], [1, "ion-margin"], ["color", "primary"], ["mode", "ios", 3, "inset"], [3, "trip", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "trip"], [4, "ngFor", "ngForOf"], [2, "width", "80%", 3, "animated"], [2, "width", "60%", 3, "animated"], [2, "width", "30%", 3, "animated"]], template: function TripsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275template(1, TripsPage_Conditional_1_Template, 1, 0, "ion-progress-bar", 1);
    \u0275\u0275elementStart(2, "ion-content", 2)(3, "ion-row", 3)(4, "ion-col", 4)(5, "ion-refresher", 5);
    \u0275\u0275listener("ionRefresh", function TripsPage_Template_ion_refresher_ionRefresh_5_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TripsPage_Conditional_6_Template, 22, 19)(7, TripsPage_Conditional_7_Template, 15, 15)(8, TripsPage_Conditional_8_Template, 1, 0, "app-trips-dring");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tripsState.state === "loading" ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.tripsState.state === "loaded" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tripsState.state === "loading" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tripsState.state === "noData" ? 8 : -1);
  }
}, dependencies: [
  IonContent,
  IonList,
  IonItem,
  IonRow,
  TripsDringComponent,
  IonCol,
  IonLabel,
  IonBadge,
  IonText,
  IonProgressBar,
  IonRefresher,
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  HeaderComponent,
  TranslateModule,
  TranslatePipe,
  TripItemComponent,
  IonSkeletonText
], encapsulation: 2 });
var TripsPage = _TripsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripsPage, [{
    type: Component,
    args: [{ selector: "app-trips", imports: [
      IonContent,
      IonList,
      IonItem,
      IonRow,
      TripsDringComponent,
      IonCol,
      IonLabel,
      IonBadge,
      IonText,
      IonProgressBar,
      IonRefresher,
      CommonModule,
      FormsModule,
      HeaderComponent,
      TranslateModule,
      TripItemComponent,
      IonSkeletonText
    ], template: `<app-header [defaultHref]="'/account'"></app-header>
@if(tripsState.state === 'loading'){
<ion-progress-bar type="indeterminate"></ion-progress-bar>
}

<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
      </ion-refresher>
      @if(tripsState.state === 'loaded'){
      <h4 class="ion-margin">
        {{ 'trips.today' | translate }}
        <ion-badge color="primary"
          >{{ tripsState.todayTrips.length }}</ion-badge
        >
      </h4>
      <ion-list [inset]="true" mode="ios">
        <app-trip-item
          *ngFor="let trip of tripsState.todayTrips"
          [trip]="trip"
        ></app-trip-item>
      </ion-list>

      <h4 class="ion-margin">
        {{ 'trips.yesterday' | translate }}
        <ion-badge color="primary"
          >{{ tripsState.yesterdayTrips.length }}</ion-badge
        >
      </h4>
      <ion-list [inset]="true" mode="ios">
        <app-trip-item
          *ngFor="let trip of tripsState.yesterdayTrips"
          [trip]="trip"
        ></app-trip-item>
      </ion-list>

      <h4 class="ion-margin">
        {{ 'trips.previous' | translate }}
        <ion-badge color="primary">
          {{ tripsState.olderTrips.length }}
          <ion-text *ngIf="tripsState.hasMoreTrips">+</ion-text>
        </ion-badge>
      </h4>
      <ion-list [inset]="true" mode="ios">
        <app-trip-item
          *ngFor="let trip of tripsState.olderTrips"
          [trip]="trip"
        ></app-trip-item>
      </ion-list>
      } @if (tripsState.state === 'loading') {
      <h4 class="ion-margin">{{ 'trips.today' | translate }}</h4>
      <ion-list>
        <ion-item *ngFor="let i of [].constructor(skeletonCount)">
          <ion-label>
            <h3>
              <ion-skeleton-text
                [animated]="true"
                style="width: 80%"
              ></ion-skeleton-text>
            </h3>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 60%"
              ></ion-skeleton-text>
            </p>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 30%"
              ></ion-skeleton-text>
            </p>
          </ion-label>
        </ion-item>
      </ion-list>
      <h4 class="ion-margin">{{ 'trips.yesterday' | translate }}</h4>
      <ion-list>
        <ion-item *ngFor="let i of [].constructor(skeletonCount)">
          <ion-label>
            <h3>
              <ion-skeleton-text
                [animated]="true"
                style="width: 80%"
              ></ion-skeleton-text>
            </h3>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 60%"
              ></ion-skeleton-text>
            </p>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 30%"
              ></ion-skeleton-text>
            </p>
          </ion-label>
        </ion-item>
      </ion-list>
      <h4 class="ion-margin">{{ 'trips.previous' | translate }}</h4>
      <ion-list>
        <ion-item *ngFor="let i of [].constructor(skeletonCount)">
          <ion-label>
            <h3>
              <ion-skeleton-text
                [animated]="true"
                style="width: 80%"
              ></ion-skeleton-text>
            </h3>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 60%"
              ></ion-skeleton-text>
            </p>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 30%"
              ></ion-skeleton-text>
            </p>
          </ion-label>
        </ion-item>
      </ion-list>
      } @if (tripsState.state === 'noData') {
      <app-trips-dring></app-trips-dring>
      }
    </ion-col>
  </ion-row>
</ion-content>
` }]
  }], () => [{ type: RentingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TripsPage, { className: "TripsPage", filePath: "src/app/pages/account/trips/trips.page.ts", lineNumber: 69 });
})();
export {
  TripsPage
};
//# sourceMappingURL=trips.page-KJ5C5IUW.js.map
