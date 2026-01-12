import {
  RentingService
} from "./chunk-6TZ6CPLZ.js";
import {
  GeolocationService,
  StationWrapperService
} from "./chunk-RCWRZ7KJ.js";
import {
  AccountService
} from "./chunk-5KPTYQ6O.js";
import {
  addIcons,
  batteryCharging,
  batteryDead,
  batteryFull,
  batteryHalf,
  bicycle,
  locationOutline,
  lockOpen,
  thumbsUp
} from "./chunk-3E6DEK7U.js";
import {
  CommonModule,
  Component,
  Input,
  IonButton,
  IonIcon,
  IonItem,
  IonList,
  IonNote,
  IonPopover2 as IonPopover,
  IonSkeletonText,
  IonText,
  NgForOf,
  NgIf,
  TranslateModule,
  TranslatePipe,
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
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/components/recommandation/recommandation.component.ts
var _c0 = ["popover"];
function RecommandationComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "recommandation.recommanded_by"), " ", ctx_r1.recommended.created_by_name, "");
  }
}
var _RecommandationComponent = class _RecommandationComponent {
  presentPopover(e) {
    this.popover.event = e;
    this.isOpen = true;
  }
  constructor() {
    this.isOpen = false;
    addIcons({ thumbsUp });
  }
};
_RecommandationComponent.\u0275fac = function RecommandationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecommandationComponent)();
};
_RecommandationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecommandationComponent, selectors: [["app-recommandation"]], viewQuery: function RecommandationComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.popover = _t.first);
  }
}, inputs: { recommended: "recommended" }, decls: 5, vars: 1, consts: [["popover", ""], ["shape", "round", "fill", "clear", 3, "click"], ["name", "thumbs-up", "color", "warning", "slot", "icon-only"], ["side", "top", "color", "dark", 1, "ecl-ionpopover", 3, "didDismiss", "isOpen"]], template: function RecommandationComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 1);
    \u0275\u0275listener("click", function RecommandationComponent_Template_ion_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.presentPopover($event));
    });
    \u0275\u0275element(1, "ion-icon", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ion-popover", 3, 0);
    \u0275\u0275listener("didDismiss", function RecommandationComponent_Template_ion_popover_didDismiss_2_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.isOpen = false);
    });
    \u0275\u0275template(4, RecommandationComponent_ng_template_4_Template, 3, 4, "ng-template");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.isOpen);
  }
}, dependencies: [IonIcon, TranslateModule, TranslatePipe, IonPopover, IonButton], encapsulation: 2 });
var RecommandationComponent = _RecommandationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecommandationComponent, [{
    type: Component,
    args: [{ selector: "app-recommandation", imports: [IonIcon, TranslateModule, IonPopover, IonButton], template: `<ion-button (click)="presentPopover($event)" shape="round" fill="clear"
  ><ion-icon name="thumbs-up" color="warning" slot="icon-only"></ion-icon
></ion-button>
<ion-popover
  #popover
  [isOpen]="isOpen"
  (didDismiss)="isOpen = false"
  side="top"
  color="dark"
  class="ecl-ionpopover"
>
  <ng-template>
    <i
      >{{ 'recommandation.recommanded_by' | translate }}
      {{ recommended.created_by_name }}</i
    >
  </ng-template>
</ion-popover>
` }]
  }], () => [], { popover: [{
    type: ViewChild,
    args: ["popover"]
  }], recommended: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecommandationComponent, { className: "RecommandationComponent", filePath: "src/app/components/recommandation/recommandation.component.ts", lineNumber: 14 });
})();

// src/app/components/vehicle/vehicle.component.ts
function VehicleComponent_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 11);
  }
}
function VehicleComponent_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 12);
  }
}
function VehicleComponent_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.vehicle.number, " ");
  }
}
function VehicleComponent_h5_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.vehicle.number, " ");
  }
}
function VehicleComponent_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.vehicle.number, " ");
  }
}
function VehicleComponent_app_recommandation_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-recommandation", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("recommended", ctx_r0.vehicle.recommended);
  }
}
var _VehicleComponent = class _VehicleComponent {
  constructor(rentingService, accountService) {
    this.rentingService = rentingService;
    this.accountService = accountService;
    this.cyclistState = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    addIcons({
      bicycle,
      batteryFull,
      batteryHalf,
      batteryDead,
      batteryCharging,
      lockOpen,
      thumbsUp
    });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
    });
  }
  getBatteryIcon() {
    var _a;
    const percent = ((_a = this.vehicle.battery_vae) == null ? void 0 : _a.percent) || 0;
    if (percent > 70)
      return "battery-full";
    if (percent > 30)
      return "battery-half";
    return "battery-dead";
  }
  rent() {
    return __async(this, null, function* () {
      yield this.rentingService.startRenting(this.vehicle);
    });
  }
};
_VehicleComponent.\u0275fac = function VehicleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VehicleComponent)(\u0275\u0275directiveInject(RentingService), \u0275\u0275directiveInject(AccountService));
};
_VehicleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VehicleComponent, selectors: [["app-vehicle"]], inputs: { vehicle: "vehicle" }, decls: 23, vars: 13, consts: [["lines", "none", 1, "ion-no-padding", "ion-no-margin", "ecl-modal-items"], ["slot", "start", "color", "dark", 1, "ion-text-center"], ["src", "../../../../assets/svg/vehiculeType/scooter.svg", "size", "large", 4, "ngIf"], ["src", "../../../../assets/svg/fontawesome/tricycle-light.svg", "size", "large", 4, "ngIf"], ["class", "ion-no-margin", 4, "ngIf"], [1, "ion-no-padding"], [3, "name"], ["src", "../../../../assets/svg/fontawesome/tild.svg"], [1, "ion-no-padding", "ecl-padding-start"], ["slot", "end", 3, "recommended", 4, "ngIf"], ["slot", "end", "shape", "round", "size", "medium", 3, "click", "disabled"], ["src", "../../../../assets/svg/vehiculeType/scooter.svg", "size", "large"], ["src", "../../../../assets/svg/fontawesome/tricycle-light.svg", "size", "large"], [1, "ion-no-margin"], ["slot", "end", 3, "recommended"]], template: function VehicleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 0)(1, "ion-note", 1);
    \u0275\u0275template(2, VehicleComponent_ion_icon_2_Template, 1, 0, "ion-icon", 2)(3, VehicleComponent_ion_icon_3_Template, 1, 0, "ion-icon", 3)(4, VehicleComponent_h4_4_Template, 2, 1, "h4", 4)(5, VehicleComponent_h5_5_Template, 2, 1, "h5", 4)(6, VehicleComponent_h6_6_Template, 2, 1, "h6", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 5)(8, "li");
    \u0275\u0275element(9, "ion-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275element(11, "ion-icon", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ul", 8)(13, "li")(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, VehicleComponent_app_recommandation_19_Template, 1, 1, "app-recommandation", 9);
    \u0275\u0275elementStart(20, "ion-button", 10);
    \u0275\u0275listener("click", function VehicleComponent_Template_ion_button_click_20_listener() {
      return ctx.rent();
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.vehicle.type === "scooter");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.vehicle.type !== "scooter");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.vehicle.number < 1e3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.vehicle.number > 999 && ctx.vehicle.number < 1e4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.vehicle.number > 9999);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", ctx.getBatteryIcon());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx.vehicle.battery_vae == null ? null : ctx.vehicle.battery_vae.percent, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ((ctx.vehicle.battery_vae == null ? null : ctx.vehicle.battery_vae.remaining_distance) / 1e3).toFixed(1), "km");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.vehicle.recommended !== null);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx.vehicle.rentable || ctx.accountService.hasBlockedReasons());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 11, "vehicle.unlock"));
  }
}, dependencies: [
  IonItem,
  IonButton,
  IonIcon,
  IonNote,
  RecommandationComponent,
  TranslateModule,
  TranslatePipe,
  CommonModule,
  NgIf
], styles: ["\n\nion-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-note[_ngcontent-%COMP%] {\n  width: 50px;\n}\n/*# sourceMappingURL=vehicle.component.css.map */"] });
var VehicleComponent = _VehicleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VehicleComponent, [{
    type: Component,
    args: [{ selector: "app-vehicle", imports: [
      IonItem,
      IonButton,
      IonIcon,
      IonNote,
      RecommandationComponent,
      TranslateModule,
      CommonModule
    ], template: `<ion-item class="ion-no-padding ion-no-margin ecl-modal-items" lines="none">
  <ion-note slot="start" color="dark" class="ion-text-center">
    <ion-icon
      *ngIf="vehicle.type === 'scooter'"
      src="../../../../assets/svg/vehiculeType/scooter.svg"
      size="large"
    ></ion-icon>
    <ion-icon
      *ngIf="vehicle.type !== 'scooter'"
      src="../../../../assets/svg/fontawesome/tricycle-light.svg"
      size="large"
    ></ion-icon>

    <h4 *ngIf="vehicle.number! < 1000" class="ion-no-margin">
      {{ vehicle.number }}
    </h4>
    <h5
      *ngIf="vehicle.number! > 999 && vehicle.number! < 10000"
      class="ion-no-margin"
    >
      {{ vehicle.number }}
    </h5>
    <h6 *ngIf="vehicle.number! > 9999" class="ion-no-margin">
      {{ vehicle.number }}
    </h6>
  </ion-note>
  <ul class="ion-no-padding">
    <li>
      <ion-icon [name]="getBatteryIcon()"></ion-icon>
    </li>
    <li>
      <ion-icon src="../../../../assets/svg/fontawesome/tild.svg"></ion-icon>
    </li>
  </ul>
  <ul class="ion-no-padding ecl-padding-start">
    <li>
      <span>{{ vehicle.battery_vae?.percent }}%</span>
    </li>
    <li>
      <span
        >{{
          (vehicle.battery_vae?.remaining_distance / 1000).toFixed(1)
        }}km</span
      >
    </li>
  </ul>

  <app-recommandation
    *ngIf="vehicle.recommended !== null"
    [recommended]="vehicle.recommended!"
    slot="end"
  ></app-recommandation>
  <ion-button
    slot="end"
    shape="round"
    size="medium"
    [disabled]="!vehicle.rentable || accountService.hasBlockedReasons()"
    (click)="rent()"
    >{{ 'vehicle.unlock' | translate }}</ion-button
  >
</ion-item>
`, styles: ["/* src/app/components/vehicle/vehicle.component.scss */\nion-row {\n  width: 100%;\n}\nion-note {\n  width: 50px;\n}\n/*# sourceMappingURL=vehicle.component.css.map */\n"] }]
  }], () => [{ type: RentingService }, { type: AccountService }], { vehicle: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VehicleComponent, { className: "VehicleComponent", filePath: "src/app/components/vehicle/vehicle.component.ts", lineNumber: 51 });
})();

// src/app/components/drawers/nearest-vehicles/nearest-vehicles.component.ts
var _c02 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function NearestVehiclesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-skeleton-text", 2)(1, "ion-skeleton-text", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("animated", true);
    \u0275\u0275advance();
    \u0275\u0275property("animated", true);
  }
}
function NearestVehiclesComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 1);
    \u0275\u0275text(1, "Aucun v\xE9hicule \xE0 proximit\xE9");
    \u0275\u0275elementEnd();
  }
}
function NearestVehiclesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "nearest_vehicles.error"), " ", ctx_r0.loadingState.error, "");
  }
}
function NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const station_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" - ", ctx_r0.calculateDistance(station_r2), "m");
  }
}
function NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 10);
    \u0275\u0275listener("click", function NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_Conditional_6_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const station_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.geolocationService.openMaps(station_r2.position.latitude, station_r2.position.longitude, "walking"));
    });
    \u0275\u0275element(1, "ion-icon", 11);
    \u0275\u0275elementStart(2, "i");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "generic.get_directions"));
  }
}
function NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_app_vehicle_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-vehicle", 12);
  }
  if (rf & 2) {
    const vehicle_r4 = ctx.$implicit;
    \u0275\u0275property("vehicle", vehicle_r4);
  }
}
function NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 4)(1, "ion-note", 5);
    \u0275\u0275element(2, "ion-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "i");
    \u0275\u0275text(4);
    \u0275\u0275template(5, NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_span_5_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_Conditional_6_Template, 5, 3, "ion-button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_app_vehicle_7_Template, 1, 1, "app-vehicle", 9);
  }
  if (rf & 2) {
    const station_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", station_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.calculateDistance(station_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(station_r2.position ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", station_r2.vehicules.data.slice(0, 3) || \u0275\u0275pureFunction0(4, _c02));
  }
}
function NearestVehiclesComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_Template, 8, 5);
  }
  if (rf & 2) {
    const station_r2 = ctx.$implicit;
    \u0275\u0275conditional(station_r2.vehicules && station_r2.vehicules.data && station_r2.vehicules.data.length > 0 ? 0 : -1);
  }
}
function NearestVehiclesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list");
    \u0275\u0275repeaterCreate(1, NearestVehiclesComponent_Conditional_7_For_2_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.loadingState.stations);
  }
}
var _NearestVehiclesComponent = class _NearestVehiclesComponent {
  constructor(geolocationService, stationWrapperService) {
    this.geolocationService = geolocationService;
    this.stationWrapperService = stationWrapperService;
    this.loadingState = {
      state: "LOADING"
    };
    this.geolocationService.geolocationState.subscribe((state) => {
      this.geolocState = state;
    });
    addIcons({ locationOutline });
  }
  ngOnInit() {
    this.loadStations();
  }
  loadStations() {
    return __async(this, null, function* () {
      this.loadingState = { state: "LOADING" };
      if (this.geolocState.state === "live_position" || this.geolocState.state === "unique_position") {
        this.stationWrapperService.getNearbyStations(this.geolocState.position.coords, 1e3, true).then((stations) => {
          if (stations.length > 0) {
            this.loadingState = { state: "SUCCESS", stations };
          } else {
            this.loadingState = { state: "NO_NEARBY_STATIONS_OR_VEHICLES" };
          }
        }).catch((error) => {
          this.loadingState = { state: "ERROR", error };
        });
      } else {
        this.loadingState = { state: "NO_NEARBY_STATIONS_OR_VEHICLES" };
      }
    });
  }
  calculateDistance(station) {
    var _a, _b;
    if (this.geolocState.state === "live_position" || this.geolocState.state === "unique_position") {
      const distance = this.geolocationService.calculateDistance(this.geolocState.position.coords, {
        latitude: Number((_a = station.position) == null ? void 0 : _a.latitude),
        longitude: Number((_b = station.position) == null ? void 0 : _b.longitude)
      });
      return distance;
    }
    return 0;
  }
};
_NearestVehiclesComponent.\u0275fac = function NearestVehiclesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NearestVehiclesComponent)(\u0275\u0275directiveInject(GeolocationService), \u0275\u0275directiveInject(StationWrapperService));
};
_NearestVehiclesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NearestVehiclesComponent, selectors: [["app-nearest-vehicles"]], decls: 8, vars: 5, consts: [["lines", "none", 1, "ecl-ionitem_title"], [1, "ion-margin-start"], [2, "width", "80%", 3, "animated"], [2, "width", "100%", "height", "200px", "margin-top", "10px", 3, "animated"], ["lines", "none", 1, "ion-no-padding", "ion-no-margin", "ecl-modal-items"], ["slot", "start", "color", "dark", 1, "ion-text-center", "ion-no-margin"], ["name", "location-outline", "size", "large"], [4, "ngIf"], ["slot", "end", "fill", "outline", "color", "dark", "shape", "round", 1, "ecl-no-shadow"], [3, "vehicle", 4, "ngFor", "ngForOf"], ["slot", "end", "fill", "outline", "color", "dark", "shape", "round", 1, "ecl-no-shadow", 3, "click"], ["src", "../../../../assets/svg/fontawesome/diamond-turn-right-regular.svg", "slot", "start"], [3, "vehicle"]], template: function NearestVehiclesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 0)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, NearestVehiclesComponent_Conditional_4_Template, 2, 2)(5, NearestVehiclesComponent_Conditional_5_Template, 2, 0, "ion-text", 1)(6, NearestVehiclesComponent_Conditional_6_Template, 3, 4, "ion-text")(7, NearestVehiclesComponent_Conditional_7_Template, 3, 0, "ion-list");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "nearest_vehicles.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loadingState.state === "LOADING" || ctx.loadingState.state === "LOADING_IN_PROGRESS" ? 4 : ctx.loadingState.state === "NO_NEARBY_STATIONS_OR_VEHICLES" ? 5 : ctx.loadingState.state === "ERROR" ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.loadingState.state === "SUCCESS" ? 7 : -1);
  }
}, dependencies: [
  IonList,
  IonItem,
  IonSkeletonText,
  IonNote,
  IonButton,
  IonText,
  IonIcon,
  CommonModule,
  NgForOf,
  NgIf,
  TranslateModule,
  TranslatePipe,
  VehicleComponent
], styles: ["\n\nion-button[_ngcontent-%COMP%]::part(native) {\n  padding: 0 15px;\n  width: auto;\n}\nion-note[_ngcontent-%COMP%] {\n  width: 50px;\n}\n/*# sourceMappingURL=nearest-vehicles.component.css.map */"] });
var NearestVehiclesComponent = _NearestVehiclesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NearestVehiclesComponent, [{
    type: Component,
    args: [{ selector: "app-nearest-vehicles", imports: [
      IonList,
      IonItem,
      IonSkeletonText,
      IonNote,
      IonButton,
      IonText,
      IonIcon,
      CommonModule,
      TranslateModule,
      VehicleComponent
    ], template: `<ion-item lines="none" class="ecl-ionitem_title">
  <h2>
    {{ 'nearest_vehicles.title' | translate }}
  </h2>
</ion-item>
@if(loadingState.state === 'LOADING' || loadingState.state ===
'LOADING_IN_PROGRESS') {
<ion-skeleton-text [animated]="true" style="width: 80%"></ion-skeleton-text>
<ion-skeleton-text
  [animated]="true"
  style="width: 100%; height: 200px; margin-top: 10px"
></ion-skeleton-text>
} @else if(loadingState.state === 'NO_NEARBY_STATIONS_OR_VEHICLES') {
<ion-text class="ion-margin-start">Aucun v\xE9hicule \xE0 proximit\xE9</ion-text>
} @else if (loadingState.state === 'ERROR') {
<ion-text
  >{{ 'nearest_vehicles.error' | translate }} {{ loadingState.error }}</ion-text
>
} @if(loadingState.state === 'SUCCESS') {
<ion-list>
  @for (station of loadingState.stations; track station.id) {
  @if(station.vehicules && station.vehicules.data &&
  station.vehicules.data.length > 0) {
  <ion-item lines="none" class="ion-no-padding ion-no-margin ecl-modal-items">
    <ion-note slot="start" color="dark" class="ion-text-center ion-no-margin">
      <ion-icon name="location-outline" size="large"></ion-icon>
    </ion-note>
    <i
      >{{ station.name }}
      <span *ngIf="calculateDistance(station)">
        -
        {{ calculateDistance(station) }}m</span
      ></i
    >
    @if(station.position) {
    <ion-button
      slot="end"
      fill="outline"
      color="dark"
      shape="round"
      class="ecl-no-shadow"
      (click)="
        geolocationService.openMaps(
          station.position.latitude,
          station.position.longitude,
          'walking'
        )
      "
    >
      <ion-icon
        src="../../../../assets/svg/fontawesome/diamond-turn-right-regular.svg"
        slot="start"
      ></ion-icon>
      <i>{{ 'generic.get_directions' | translate }}</i>
    </ion-button>
    }
  </ion-item>
  <app-vehicle
    *ngFor="let vehicle of station.vehicules.data.slice(0, 3) || []"
    [vehicle]="vehicle"
  ></app-vehicle>
  } }
</ion-list>
}
`, styles: ["/* src/app/components/drawers/nearest-vehicles/nearest-vehicles.component.scss */\nion-button::part(native) {\n  padding: 0 15px;\n  width: auto;\n}\nion-note {\n  width: 50px;\n}\n/*# sourceMappingURL=nearest-vehicles.component.css.map */\n"] }]
  }], () => [{ type: GeolocationService }, { type: StationWrapperService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NearestVehiclesComponent, { className: "NearestVehiclesComponent", filePath: "src/app/components/drawers/nearest-vehicles/nearest-vehicles.component.ts", lineNumber: 59 });
})();

export {
  VehicleComponent,
  NearestVehiclesComponent
};
//# sourceMappingURL=chunk-B2OXEJ4T.js.map
