import {
  SearchWrapperService,
  SearchbarComponent
} from "./chunk-N4UWQVQA.js";
import {
  RentingService
} from "./chunk-JZSN3FDE.js";
import {
  StationWrapperService
} from "./chunk-GBVLTFX3.js";
import "./chunk-S5TR5TQN.js";
import "./chunk-OEYRANOA.js";
import "./chunk-RFEPADPA.js";
import "./chunk-ULLB7OBK.js";
import "./chunk-RK7YL5P5.js";
import "./chunk-IBT2NAXJ.js";
import "./chunk-NHPV6IFO.js";
import "./chunk-YSCBVZBE.js";
import {
  AccountService,
  VehiculesService
} from "./chunk-6J5UKKBN.js";
import "./chunk-RYICOSCB.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import "./chunk-Z4RNZNYE.js";
import {
  addIcons,
  arrowBackOutline,
  batteryDead,
  batteryFull,
  batteryFullOutline,
  batteryHalf,
  closeOutline,
  informationCircleOutline
} from "./chunk-3E6DEK7U.js";
import "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonRow,
  IonSpinner,
  IonText,
  NavController,
  NgForOf,
  NgIf,
  TranslateModule,
  TranslatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
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
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/pages/search/search.page.ts
function SearchPage_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 3);
    \u0275\u0275element(2, "ion-spinner", 4);
    \u0275\u0275elementEnd()();
  }
}
function SearchPage_ion_row_3_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 9);
    \u0275\u0275listener("click", function SearchPage_ion_row_3_ion_item_7_Template_ion_item_click_0_listener() {
      const station_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openStation(station_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const station_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", station_r2.name, " ");
  }
}
function SearchPage_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 5)(2, "ion-text", 6)(3, "h6");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-list", 7);
    \u0275\u0275template(7, SearchPage_ion_row_3_ion_item_7_Template, 2, 1, "ion-item", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "search.stations"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.searchState.results.stations);
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 17);
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 18);
  }
}
function SearchPage_ion_row_4_ion_item_7_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vehicle_r5.number, " ");
  }
}
function SearchPage_ion_row_4_ion_item_7_h5_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vehicle_r5.number, " ");
  }
}
function SearchPage_ion_row_4_ion_item_7_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vehicle_r5.number, " ");
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label")(1, "p", 20);
    \u0275\u0275element(2, "ion-spinner", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "bike-number.searching"), " ");
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae.percent, "% ");
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_8_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " -- ");
    \u0275\u0275elementContainerEnd();
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_8_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", (((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae.remaining_distance / 1e3).toFixed(1), "km) ");
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_8_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275element(1, "ion-icon", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "search.not_rentable"), " ");
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label")(1, "p");
    \u0275\u0275element(2, "ion-icon", 21);
    \u0275\u0275template(3, SearchPage_ion_row_4_ion_item_7_ion_label_8_ng_container_3_Template, 2, 1, "ng-container", 15)(4, SearchPage_ion_row_4_ion_item_7_ion_label_8_ng_container_4_Template, 2, 0, "ng-container", 15)(5, SearchPage_ion_row_4_ion_item_7_ion_label_8_ng_container_5_Template, 2, 1, "ng-container", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SearchPage_ion_row_4_ion_item_7_ion_label_8_p_6_Template, 4, 3, "p", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const vehicle_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r2.getBatteryIcon((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5))("color", ctx_r2.getBatteryColor((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae) == null ? null : tmp_6_0.percent) !== void 0 && ((tmp_6_0 = ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae) == null ? null : tmp_6_0.percent) !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae) == null ? null : tmp_7_0.percent) === void 0 || ((tmp_7_0 = ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae) == null ? null : tmp_7_0.percent) === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_8_0 = ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae) == null ? null : tmp_8_0.remaining_distance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).rentable);
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_9_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275element(1, "ion-icon", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "search.not_rentable"), " ");
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label")(1, "p", 20);
    \u0275\u0275element(2, "ion-icon", 25);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SearchPage_ion_row_4_ion_item_7_ion_label_9_p_5_Template, 4, 3, "p", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "search.no_info"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).rentable === false);
  }
}
function SearchPage_ion_row_4_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-note", 11);
    \u0275\u0275template(2, SearchPage_ion_row_4_ion_item_7_ion_icon_2_Template, 1, 0, "ion-icon", 12)(3, SearchPage_ion_row_4_ion_item_7_ion_icon_3_Template, 1, 0, "ion-icon", 13)(4, SearchPage_ion_row_4_ion_item_7_h4_4_Template, 2, 1, "h4", 14)(5, SearchPage_ion_row_4_ion_item_7_h5_5_Template, 2, 1, "h5", 14)(6, SearchPage_ion_row_4_ion_item_7_h6_6_Template, 2, 1, "h6", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SearchPage_ion_row_4_ion_item_7_ion_label_7_Template, 5, 3, "ion-label", 15)(8, SearchPage_ion_row_4_ion_item_7_ion_label_8_Template, 7, 6, "ion-label", 15)(9, SearchPage_ion_row_4_ion_item_7_ion_label_9_Template, 6, 4, "ion-label", 15);
    \u0275\u0275elementStart(10, "ion-button", 16);
    \u0275\u0275listener("click", function SearchPage_ion_row_4_ion_item_7_Template_ion_button_click_10_listener() {
      const vehicle_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rentVehicle(vehicle_r5));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vehicle_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", vehicle_r5.type === "scooter");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vehicle_r5.type !== "scooter");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vehicle_r5.number < 1e3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vehicle_r5.number > 999 && vehicle_r5.number < 1e4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vehicle_r5.number > 9999);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isVehicleLoading(vehicle_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isVehicleLoading(vehicle_r5) && ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isVehicleLoading(vehicle_r5) && !((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isVehicleLoading(vehicle_r5) || ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).rentable !== true || ctx_r2.accountService.hasBlockedReasons());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "vehicle.unlock"), " ");
  }
}
function SearchPage_ion_row_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 5)(2, "ion-text", 6)(3, "h6");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-list", 7);
    \u0275\u0275template(7, SearchPage_ion_row_4_ion_item_7_Template, 13, 12, "ion-item", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "search.vehicles"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.searchState.results.vehicules);
  }
}
function SearchPage_ion_row_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 26)(2, "ion-text");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "searchbar.no_results"), " ");
  }
}
var _SearchPage = class _SearchPage {
  constructor(navCtrl, storage, stationWrapperService, searchWrapperService, rentingService, accountService, vehiculesService) {
    this.navCtrl = navCtrl;
    this.storage = storage;
    this.stationWrapperService = stationWrapperService;
    this.searchWrapperService = searchWrapperService;
    this.rentingService = rentingService;
    this.accountService = accountService;
    this.vehiculesService = vehiculesService;
    this.stations = [];
    this.searchState = {
      state: "loading"
    };
    this.detailedVehicles = /* @__PURE__ */ new Map();
    this.loadingVehicles = /* @__PURE__ */ new Set();
    this.searchWrapperService.searchState.subscribe((state) => {
      this.searchState = state;
      if (state.state === "success") {
        const filteredVehicles = state.results.vehicules.filter((vehicule) => vehicule.status === "service");
        this.searchState = {
          state: "success",
          results: {
            stations: state.results.stations.filter((station) => station.status === "open"),
            vehicules: filteredVehicles
          }
        };
        filteredVehicles.forEach((vehicle) => {
          if (vehicle.id) {
            this.loadVehicleDetails(vehicle.id);
          }
        });
      }
    });
    addIcons({
      arrowBackOutline,
      batteryFull,
      batteryHalf,
      batteryDead,
      batteryFullOutline,
      closeOutline,
      informationCircleOutline
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const stationsData = yield this.storage.get("stations");
      this.stations = (stationsData == null ? void 0 : stationsData.data) || [];
      this.searchState = {
        state: "success",
        results: {
          stations: this.stations,
          vehicules: []
        }
      };
    });
  }
  handleSearch(query) {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm || searchTerm === "" || searchTerm.length == 0) {
      this.searchState = {
        state: "success",
        results: {
          stations: this.stations,
          vehicules: []
        }
      };
      return;
    }
    this.searchWrapperService.search(searchTerm);
  }
  openStation(station) {
    this.navCtrl.navigateForward("/map", {
      animated: false
    }).then(() => {
      this.stationWrapperService.setStationState("station-selected", station);
    });
  }
  onSearchbarStateChange() {
    this.searchState = { state: "idle" };
  }
  getBatteryIcon(vehicle) {
    var _a;
    const percent = (_a = vehicle == null ? void 0 : vehicle.battery_vae) == null ? void 0 : _a.percent;
    if (percent === void 0 || percent === null) {
      return "battery-full-outline";
    }
    if (percent > 70)
      return "battery-full";
    if (percent > 30)
      return "battery-half";
    return "battery-dead";
  }
  getBatteryColor(vehicle) {
    var _a;
    const percent = (_a = vehicle == null ? void 0 : vehicle.battery_vae) == null ? void 0 : _a.percent;
    if (percent === void 0 || percent === null) {
      return "medium";
    }
    if (percent > 70)
      return "success";
    if (percent > 30)
      return "warning";
    return "danger";
  }
  rentVehicle(vehicle) {
    return __async(this, null, function* () {
      if (!vehicle) {
        return;
      }
      this.rentingService.startRenting(vehicle.id ? this.detailedVehicles.get(vehicle.id) || vehicle : vehicle);
    });
  }
  loadVehicleDetails(vehicleId) {
    if (!vehicleId || this.detailedVehicles.has(vehicleId) || this.loadingVehicles.has(vehicleId)) {
      return;
    }
    this.loadingVehicles.add(vehicleId);
    this.vehiculesService.retrieveVehicule({
      program: environment.program,
      id: vehicleId
    }).subscribe({
      next: (vehicle) => {
        if (vehicle && vehicleId) {
          this.detailedVehicles.set(vehicleId, vehicle);
        }
        this.loadingVehicles.delete(vehicleId);
      },
      error: (error) => {
        console.error("Error loading vehicle details:", error);
        this.loadingVehicles.delete(vehicleId);
      }
    });
  }
  isVehicleLoading(vehicle) {
    if (!(vehicle == null ? void 0 : vehicle.id)) {
      return false;
    }
    return this.loadingVehicles.has(vehicle.id);
  }
};
_SearchPage.\u0275fac = function SearchPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchPage)(\u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(StationWrapperService), \u0275\u0275directiveInject(SearchWrapperService), \u0275\u0275directiveInject(RentingService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(VehiculesService));
};
_SearchPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchPage, selectors: [["app-search"]], decls: 6, vars: 5, consts: [[3, "stateChange", "searchQuery", "state"], ["class", "ion-margin-top", 4, "ngIf"], [1, "ion-margin-top"], ["size", "12", "size-md", "8", "size-lg", "6", 1, "ion-padding", "ion-text-center"], ["name", "crescent"], ["size", "12", "size-md", "8", "size-lg", "6"], ["color", "medium"], ["lines", "none"], ["button", "", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", 3, "click"], [4, "ngFor", "ngForOf"], ["slot", "start", "color", "dark", 1, "ion-text-center"], ["src", "../../../../assets/svg/vehiculeType/scooter.svg", "size", "large", 4, "ngIf"], ["src", "../../../../assets/svg/fontawesome/tricycle-light.svg", "size", "large", 4, "ngIf"], ["class", "ion-no-margin", 4, "ngIf"], [4, "ngIf"], ["slot", "end", "shape", "round", "size", "medium", 3, "click", "disabled"], ["src", "../../../../assets/svg/vehiculeType/scooter.svg", "size", "large"], ["src", "../../../../assets/svg/fontawesome/tricycle-light.svg", "size", "large"], [1, "ion-no-margin"], [1, "ion-color-medium"], [3, "name", "color"], ["class", "ion-color-danger", 4, "ngIf"], [1, "ion-color-danger"], ["name", "close-outline"], ["name", "information-circle-outline"], ["size", "12", "size-md", "8", "size-lg", "6", 1, "ion-padding-start"]], template: function SearchPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-searchbar", 0);
    \u0275\u0275listener("stateChange", function SearchPage_Template_app_searchbar_stateChange_0_listener() {
      return ctx.onSearchbarStateChange();
    })("searchQuery", function SearchPage_Template_app_searchbar_searchQuery_0_listener($event) {
      return ctx.handleSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "ion-content");
    \u0275\u0275template(2, SearchPage_ion_row_2_Template, 3, 0, "ion-row", 1)(3, SearchPage_ion_row_3_Template, 8, 4, "ion-row", 1)(4, SearchPage_ion_row_4_Template, 8, 4, "ion-row", 1)(5, SearchPage_ion_row_5_Template, 5, 3, "ion-row", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("state", ctx.searchState);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.searchState.state === "loading");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchState.state === "success" && ctx.searchState.results.stations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchState.state === "success" && ctx.searchState.results.vehicules.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchState.state === "no_results");
  }
}, dependencies: [
  IonContent,
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  IonList,
  IonText,
  IonItem,
  IonNote,
  IonIcon,
  IonButton,
  IonSpinner,
  IonLabel,
  SearchbarComponent,
  IonRow,
  IonCol,
  TranslateModule,
  TranslatePipe
], styles: ["\n\nion-content[_ngcontent-%COMP%] {\n  --padding-top: calc(max(var(--ion-safe-area-top), 24px) + 76px) !important;\n  --padding-start: 16px;\n  --background: white;\n}\nion-item[_ngcontent-%COMP%] {\n  --background: white;\n}\nion-row[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n}\nion-list[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  width: 50px;\n}\nion-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nion-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\nion-list[_ngcontent-%COMP%]   .ecl-padding-start[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\nh6[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  padding: 0 1rem;\n}\nion-spinner[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=search.page.css.map */"] });
var SearchPage = _SearchPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchPage, [{
    type: Component,
    args: [{ selector: "app-search", imports: [
      IonContent,
      CommonModule,
      FormsModule,
      IonList,
      IonText,
      IonItem,
      IonNote,
      IonIcon,
      IonButton,
      IonSpinner,
      IonLabel,
      SearchbarComponent,
      IonRow,
      IonCol,
      TranslateModule
    ], template: `<app-searchbar
  [state]="searchState"
  (stateChange)="onSearchbarStateChange()"
  (searchQuery)="handleSearch($event)"
></app-searchbar>

<ion-content>
  <!-- Loading State -->
  <ion-row *ngIf="searchState.state === 'loading'" class="ion-margin-top">
    <ion-col
      size="12"
      size-md="8"
      size-lg="6"
      class="ion-padding ion-text-center"
    >
      <ion-spinner name="crescent"></ion-spinner>
    </ion-col>
  </ion-row>

  <!-- Stations Results -->
  <ion-row
    class="ion-margin-top"
    *ngIf="
      searchState.state === 'success' &&
      searchState.results.stations.length > 0
    "
  >
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-text color="medium">
        <h6>{{ 'search.stations' | translate }}</h6>
      </ion-text>
      <ion-list lines="none">
        <ion-item
          button
          *ngFor="let station of searchState.results.stations"
          (click)="openStation(station)"
        >
          {{ station.name }}
        </ion-item>
      </ion-list>
    </ion-col>
  </ion-row>

  <!-- Vehicles Results -->
  <ion-row
    class="ion-margin-top"
    *ngIf="
      searchState.state === 'success' &&
      searchState.results.vehicules.length > 0
    "
  >
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-text color="medium">
        <h6>{{ 'search.vehicles' | translate }}</h6>
      </ion-text>
      <ion-list lines="none">
        <ion-item *ngFor="let vehicle of searchState.results.vehicules">
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

          <!-- Loading state for vehicle details -->
          <ion-label *ngIf="isVehicleLoading(vehicle)">
            <p class="ion-color-medium">
              <ion-spinner name="crescent"></ion-spinner>
              {{ 'bike-number.searching' | translate }}
            </p>
          </ion-label>

          <!-- Vehicle details with battery info -->
          <ion-label
            *ngIf="!isVehicleLoading(vehicle) && (vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae"
          >
            <p>
              <ion-icon
                [name]="getBatteryIcon(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle)"
                [color]="getBatteryColor(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle)"
              ></ion-icon>
              <ng-container
                *ngIf="(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae?.percent !== undefined && (vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae?.percent !== null"
              >
                {{ (vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle)
                : vehicle).battery_vae.percent }}%
              </ng-container>
              <ng-container
                *ngIf="(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae?.percent === undefined || (vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae?.percent === null"
              >
                --
              </ng-container>
              <ng-container
                *ngIf="(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae?.remaining_distance"
              >
                ({{ ((vehicle?.id ? (detailedVehicles.get(vehicle.id!) ||
                vehicle) : vehicle).battery_vae.remaining_distance /
                1000).toFixed(1) }}km)
              </ng-container>
            </p>
            <p
              *ngIf="!(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).rentable"
              class="ion-color-danger"
            >
              <ion-icon name="close-outline"></ion-icon>
              {{ 'search.not_rentable' | translate }}
            </p>
          </ion-label>

          <!-- No battery info available -->
          <ion-label
            *ngIf="!isVehicleLoading(vehicle) && !(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae"
          >
            <p class="ion-color-medium">
              <ion-icon name="information-circle-outline"></ion-icon>
              {{ 'search.no_info' | translate }}
            </p>
            <p
              *ngIf="(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).rentable === false"
              class="ion-color-danger"
            >
              <ion-icon name="close-outline"></ion-icon>
              {{ 'search.not_rentable' | translate }}
            </p>
          </ion-label>

          <ion-button
            slot="end"
            shape="round"
            size="medium"
            [disabled]="isVehicleLoading(vehicle) || (vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).rentable !== true || accountService.hasBlockedReasons()"
            (click)="rentVehicle(vehicle)"
          >
            {{ 'vehicle.unlock' | translate }}
          </ion-button>
        </ion-item>
      </ion-list>
    </ion-col>
  </ion-row>

  <!-- No Results -->
  <ion-row *ngIf="searchState.state === 'no_results'" class="ion-margin-top">
    <ion-col size="12" size-md="8" size-lg="6" class="ion-padding-start">
      <ion-text> {{ 'searchbar.no_results' | translate }} </ion-text>
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/search/search.page.scss */\nion-content {\n  --padding-top: calc(max(var(--ion-safe-area-top), 24px) + 76px) !important;\n  --padding-start: 16px;\n  --background: white;\n}\nion-item {\n  --background: white;\n}\nion-row {\n  width: 100%;\n  max-width: 1000px;\n}\nion-list ion-note {\n  width: 50px;\n}\nion-list ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nion-list ul li {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\nion-list .ecl-padding-start {\n  padding-left: 1rem;\n}\nh6 {\n  margin: 0.5rem 0;\n  padding: 0 1rem;\n}\nion-spinner {\n  margin-top: 2rem;\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=search.page.css.map */\n"] }]
  }], () => [{ type: NavController }, { type: StorageService }, { type: StationWrapperService }, { type: SearchWrapperService }, { type: RentingService }, { type: AccountService }, { type: VehiculesService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchPage, { className: "SearchPage", filePath: "src/app/pages/search/search.page.ts", lineNumber: 67 });
})();
export {
  SearchPage
};
//# sourceMappingURL=search.page-K2BIJVV2.js.map
