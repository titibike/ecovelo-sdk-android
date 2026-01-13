import {
  NearestVehiclesComponent
} from "./chunk-ZVLNP7NM.js";
import {
  RentingService
} from "./chunk-JZSN3FDE.js";
import {
  NativeAudioService
} from "./chunk-7T5ES6Q7.js";
import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import {
  LaunchService
} from "./chunk-AFQ4JVLS.js";
import {
  GeolocationService
} from "./chunk-GBVLTFX3.js";
import "./chunk-S5TR5TQN.js";
import "./chunk-OEYRANOA.js";
import "./chunk-7GZOXTNY.js";
import "./chunk-MIGXUTE7.js";
import "./chunk-JEZ6DLK2.js";
import "./chunk-RFEPADPA.js";
import "./chunk-7JCEDXGT.js";
import "./chunk-ULLB7OBK.js";
import {
  AuthService
} from "./chunk-RK7YL5P5.js";
import "./chunk-IBT2NAXJ.js";
import "./chunk-NHPV6IFO.js";
import {
  AppstateService
} from "./chunk-YSCBVZBE.js";
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
  alertCircleOutline,
  batteryFullOutline,
  checkmarkOutline,
  closeOutline,
  locateOutline,
  locationOutline,
  searchOutline
} from "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService,
  ToastService,
  ToastType
} from "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DOCUMENT,
  FormsModule,
  Inject,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSearchbar,
  IonSpinner,
  NgClass,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  TranslateService,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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

// src/app/pages/renting/bike-number/bike-number.page.ts
var _c0 = (a0) => ["ecl-searchbar", a0];
var _c1 = () => ["initial"];
var _c2 = () => ["notFound"];
var _c3 = () => ["found", "renting"];
var _c4 = (a0, a1) => ({ percent: a0, distance: a1 });
var _c5 = () => ["/map"];
function BikeNumberPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "ion-spinner", 2);
    \u0275\u0275elementEnd()();
  }
}
function BikeNumberPage_Conditional_1_ion_spinner_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 13);
  }
}
function BikeNumberPage_Conditional_1_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 14);
  }
}
function BikeNumberPage_Conditional_1_ion_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 15);
  }
}
function BikeNumberPage_Conditional_1_ion_icon_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 16);
  }
}
function BikeNumberPage_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "bike-number.searching"));
  }
}
function BikeNumberPage_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "bike-number.not-found"));
  }
}
function BikeNumberPage_Conditional_1_Conditional_19_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 19);
    \u0275\u0275element(1, "ion-icon", 20);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "bike-number.not-available"));
  }
}
function BikeNumberPage_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 11)(1, "ion-item");
    \u0275\u0275element(2, "ion-icon", 17);
    \u0275\u0275elementStart(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, BikeNumberPage_Conditional_1_Conditional_19_ion_item_6_Template, 5, 3, "ion-item", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, "bike-number.battery-info", \u0275\u0275pureFunction2(5, _c4, ctx_r1.bikeNumberSearchState.vehicle.battery_vae.percent, (ctx_r1.bikeNumberSearchState.vehicle.battery_vae.remaining_distance / 1e3).toFixed(1))));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.bikeNumberSearchState.vehicle.rentable);
  }
}
function BikeNumberPage_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 3)(1, "ion-col", 21)(2, "ion-button", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "bike-number.discover-stations"), " ");
  }
}
function BikeNumberPage_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr")(1, "app-nearest-vehicles");
  }
}
function BikeNumberPage_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "hr");
    \u0275\u0275elementStart(1, "ion-item", 23)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 24)(6, "div", 25);
    \u0275\u0275element(7, "img", 26);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 27);
    \u0275\u0275text(10, "Dring Dring!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "ion-button", 28);
    \u0275\u0275listener("click", function BikeNumberPage_Conditional_1_Conditional_25_Template_ion_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.requestLocation());
    });
    \u0275\u0275element(15, "ion-icon", 29);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "nearest_vehicles.title"));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(8, 6, "bike-number.bikebell-image"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 8, "bike-number.location-request-message"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 10, "bike-number.request-location"), " ");
  }
}
function BikeNumberPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 0)(2, "ion-row", 3)(3, "ion-col", 4)(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-searchbar", 5);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("ionInput", function BikeNumberPage_Conditional_1_Template_ion_searchbar_ionInput_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleInput($event));
    })("ionFocus", function BikeNumberPage_Conditional_1_Template_ion_searchbar_ionFocus_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleFocus());
    })("paste", function BikeNumberPage_Conditional_1_Template_ion_searchbar_paste_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.preventPaste($event));
    })("keypress", function BikeNumberPage_Conditional_1_Template_ion_searchbar_keypress_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event));
    });
    \u0275\u0275elementStart(12, "div", 6);
    \u0275\u0275template(13, BikeNumberPage_Conditional_1_ion_spinner_13_Template, 1, 0, "ion-spinner", 7)(14, BikeNumberPage_Conditional_1_ion_icon_14_Template, 1, 0, "ion-icon", 8)(15, BikeNumberPage_Conditional_1_ion_icon_15_Template, 1, 0, "ion-icon", 9)(16, BikeNumberPage_Conditional_1_ion_icon_16_Template, 1, 0, "ion-icon", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, BikeNumberPage_Conditional_1_Conditional_17_Template, 3, 3, "p")(18, BikeNumberPage_Conditional_1_Conditional_18_Template, 3, 3, "p")(19, BikeNumberPage_Conditional_1_Conditional_19_Template, 7, 8, "ion-list", 11);
    \u0275\u0275elementStart(20, "ion-button", 12);
    \u0275\u0275listener("click", function BikeNumberPage_Conditional_1_Template_ion_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startRenting());
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, BikeNumberPage_Conditional_1_Conditional_23_Template, 5, 5, "ion-row", 3)(24, BikeNumberPage_Conditional_1_Conditional_24_Template, 2, 0)(25, BikeNumberPage_Conditional_1_Conditional_25_Template, 18, 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 16, "bike-number.enter-number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 18, "bike-number.enter-number-description"));
    \u0275\u0275advance(2);
    \u0275\u0275property("debounce", 500)("placeholder", \u0275\u0275pipeBind1(11, 20, "bike-number.number"))("ngClass", \u0275\u0275pureFunction1(24, _c0, "searching" === ctx_r1.bikeNumberSearchState.state ? "ecl-searchbar__searching" : ""));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.bikeNumberSearchState.state === "searching");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(26, _c1).includes(ctx_r1.bikeNumberSearchState.state));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(27, _c2).includes(ctx_r1.bikeNumberSearchState.state));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(28, _c3).includes(ctx_r1.bikeNumberSearchState.state));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bikeNumberSearchState.state === "searching" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bikeNumberSearchState.state === "notFound" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bikeNumberSearchState.state === "found" || ctx_r1.bikeNumberSearchState.state === "renting" ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canStartRenting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 22, "bike-number.start-renting"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.appState == null ? null : ctx_r1.appState.state) === "new_cyclist" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.geolocState == null ? null : ctx_r1.geolocState.state) === "live_position" || (ctx_r1.geolocState == null ? null : ctx_r1.geolocState.state) === "unique_position" ? 24 : 25);
  }
}
var _BikeNumberPage = class _BikeNumberPage {
  constructor(document, vehicleService, rentingService, toastService, geolocationService, appStateService, nativeAudioService, router, route, authService, accountService, launchService, toastrService, translate, errorHandlerService) {
    this.document = document;
    this.vehicleService = vehicleService;
    this.rentingService = rentingService;
    this.toastService = toastService;
    this.geolocationService = geolocationService;
    this.appStateService = appStateService;
    this.nativeAudioService = nativeAudioService;
    this.router = router;
    this.route = route;
    this.authService = authService;
    this.accountService = accountService;
    this.launchService = launchService;
    this.toastrService = toastrService;
    this.translate = translate;
    this.errorHandlerService = errorHandlerService;
    this.pageState = {
      state: "loading_started"
    };
    this.bikeNumberSearchState = { state: "initial" };
    this.lastRequest = null;
    this.geolocState = null;
    this.appState = null;
    this.auth = { state: "SignedOut" };
    this.cyclist = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    addIcons({
      searchOutline,
      alertCircleOutline,
      checkmarkOutline,
      batteryFullOutline,
      closeOutline,
      locateOutline,
      locationOutline
    });
    this.geolocationService.geolocationState.subscribe((state) => {
      this.geolocState = state;
    });
    this.appStateService.appState.subscribe((state) => {
      this.appState = state;
    });
    effect(() => {
      this.auth = this.authService.authState();
    });
    effect(() => {
      this.cyclist = this.accountService.cyclistState();
    });
  }
  ionViewWillEnter() {
    this.performBackgroundLaunch();
  }
  ngOnInit() {
    this.nativeAudioService.preloadAsset("bikebell", "assets/audio/bikebell.mp3", 1, 0.8);
  }
  ionViewDidEnter() {
    var _a, _b;
    const el = this.document.getElementById("bike-number");
    el == null ? void 0 : el.setFocus();
    if (((_a = this.geolocState) == null ? void 0 : _a.state) !== "live_position" && ((_b = this.geolocState) == null ? void 0 : _b.state) !== "unique_position") {
      this.nativeAudioService.play("bikebell");
    }
  }
  canStartRenting() {
    return this.bikeNumberSearchState.state === "found" && this.bikeNumberSearchState.vehicle.rentable === true;
  }
  handleInput(event) {
    var _a;
    if (this.lastRequest) {
      this.lastRequest.unsubscribe();
      this.lastRequest = null;
    }
    const value = (_a = event.detail.value) == null ? void 0 : _a.trim();
    if (!value) {
      this.bikeNumberSearchState = { state: "initial" };
      return;
    }
    this.bikeNumberSearchState = {
      state: "searching",
      searchInput: value
    };
    this.lastRequest = this.vehicleService.retrieveVehicule({
      program: environment.program,
      id: value
    }).subscribe({
      next: (vehicle) => {
        if (this.bikeNumberSearchState.state === "searching") {
          this.bikeNumberSearchState = {
            state: "found",
            searchInput: value,
            vehicle
          };
        }
      },
      error: (error) => {
        if (error.status === 404) {
          this.bikeNumberSearchState = {
            state: "notFound"
          };
        } else {
          this.toastService.createWithJustMessage(error.message, ToastType.Error);
        }
      }
    });
  }
  handleFocus() {
  }
  startRenting() {
    if (this.bikeNumberSearchState.state === "found") {
      try {
        this.bikeNumberSearchState = {
          state: "renting",
          searchInput: this.bikeNumberSearchState.searchInput,
          vehicle: this.bikeNumberSearchState.vehicle
        };
        this.rentingService.startRenting(this.bikeNumberSearchState.vehicle);
      } catch (error) {
        this.bikeNumberSearchState = {
          state: "rentingError",
          error
        };
      }
    }
  }
  ngOnDestroy() {
    if (this.lastRequest) {
      this.lastRequest.unsubscribe();
    }
  }
  requestLocation() {
    return __async(this, null, function* () {
      var _a, _b;
      if (((_a = this.geolocState) == null ? void 0 : _a.state) === "denied" || ((_b = this.geolocState) == null ? void 0 : _b.state) === "error") {
        this.geolocationService.presentDeniedPositionAlert();
      } else {
        this.geolocationService.askForPermission();
      }
    });
  }
  preventPaste(event) {
    event.preventDefault();
    return false;
  }
  onKeyPress(event) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  /** *************************************************************** */
  /** ********** Ces méthodes servent principalement dans le cas ou l'utilisateur arrive par universal link avec une app fermée, si l'app est déjà lancé les vérifications se feront instantanément ********** */
  /** *************************************************************** */
  performBackgroundLaunch() {
    return __async(this, null, function* () {
      this.pageState = { state: "loading_started" };
      try {
        yield this.launchService.loadEssentialData({
          skipIfDataExists: true,
          forceRefreshStations: false
        });
        yield this.waitForAuthentication();
      } catch (error) {
        this.errorHandlerService.handleError(error);
      }
    });
  }
  waitForAuthentication() {
    return __async(this, null, function* () {
      if (this.auth.state === "SignedOut") {
        yield new Promise((resolve) => setTimeout(resolve, 2e3)).then(() => {
          if (this.auth.state === "SignedOut") {
            this.toastrService.createWithJustMessage(this.translate.instant("qr_code.error.authentication_required"), ToastType.Info);
            this.router.navigate(["/landing"], { replaceUrl: true });
          } else {
            this.waitForCyclistState();
          }
        });
      } else
        this.waitForCyclistState();
    });
  }
  waitForCyclistState() {
    return __async(this, null, function* () {
      if (this.cyclist.blocked_reasons.length > 0) {
        const maxRetries = 25;
        const checkInterval = 200;
        for (let i = 0; i < maxRetries; i++) {
          if (!this.cyclist.blocked_reasons.includes("Unknown account state")) {
            break;
          }
          yield new Promise((resolve) => setTimeout(resolve, checkInterval));
        }
        if (this.cyclist.blocked_reasons.length > 0) {
          this.errorHandlerService.handleError({
            error: { decline_code: "account_blocked" }
          });
        } else {
          this.handleQrCodeRedirection();
        }
      } else {
        this.handleQrCodeRedirection();
      }
    });
  }
  handleQrCodeRedirection() {
    this.route.queryParams.subscribe((params) => __async(this, null, function* () {
      if (params["qrcode"] && params["qrcode"] !== void 0) {
        this.router.navigate(["/renting/qr-code"], {
          queryParams: { qrcode: params["qrcode"] }
        });
      } else {
        this.pageState = { state: "loading_finished" };
      }
    }));
  }
};
_BikeNumberPage.\u0275fac = function BikeNumberPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BikeNumberPage)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(VehiculesService), \u0275\u0275directiveInject(RentingService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(GeolocationService), \u0275\u0275directiveInject(AppstateService), \u0275\u0275directiveInject(NativeAudioService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(LaunchService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_BikeNumberPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BikeNumberPage, selectors: [["app-bike-number"]], decls: 2, vars: 1, consts: [[1, "ion-padding"], [1, "center"], ["color", "primary"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], ["id", "bike-number", "type", "tel", "inputmode", "numeric", "pattern", "[0-9]*", "search-icon", "search-outline", 3, "ionInput", "ionFocus", "paste", "keypress", "debounce", "placeholder", "ngClass"], [1, "ecl-searchbar-icon"], ["name", "lines", 4, "ngIf"], ["size", "large", "color", "medium", "name", "search-outline", 4, "ngIf"], ["size", "large", "color", "medium", "name", "alert-circle-outline", 4, "ngIf"], ["size", "large", "color", "medium", "name", "checkmark-outline", 4, "ngIf"], ["lines", "none"], ["id", "DringTo", "expand", "full", "shape", "round", "color", "primary", 1, "ion-margin-top", 3, "click", "disabled"], ["name", "lines"], ["size", "large", "color", "medium", "name", "search-outline"], ["size", "large", "color", "medium", "name", "alert-circle-outline"], ["size", "large", "color", "medium", "name", "checkmark-outline"], ["name", "battery-full-outline", "slot", "start"], ["color", "danger", 4, "ngIf"], ["color", "danger"], ["name", "close-outline", "slot", "start"], ["size", "12", "size-md", "6", "size-lg", "4"], ["expand", "block", "fill", "clear", "shape", "round", 3, "routerLink"], ["lines", "none", 1, "ecl-ionitem_title"], ["id", "DringFrom", 1, "ion-margin"], [1, "ion-float-left"], ["src", "assets/svg/dring_dring.svg", 1, "ion-margin-end", 3, "alt"], [1, "pacifico-regular"], ["fill", "outline", "color", "dark", 1, "ion-float-right", "ion-margin-vertical", 3, "click"], ["name", "locate-outline"]], template: function BikeNumberPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BikeNumberPage_Conditional_0_Template, 3, 0, "ion-content", 0)(1, BikeNumberPage_Conditional_1_Template, 26, 29);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.pageState.state === "loading_started" ? 0 : 1);
  }
}, dependencies: [
  IonContent,
  IonSearchbar,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonSpinner,
  HeaderComponent,
  CommonModule,
  NgClass,
  NgIf,
  FormsModule,
  TranslateModule,
  TranslatePipe,
  NearestVehiclesComponent,
  RouterModule,
  RouterLink
], styles: ["\n\nhr[_ngcontent-%COMP%] {\n  background: var(--ion-color-dark) !important;\n  margin: 25px 0 !important;\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=bike-number.page.css.map */"] });
var BikeNumberPage = _BikeNumberPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BikeNumberPage, [{
    type: Component,
    args: [{ selector: "app-bike-number", imports: [
      IonContent,
      IonSearchbar,
      IonButton,
      IonIcon,
      IonList,
      IonItem,
      IonLabel,
      IonRow,
      IonCol,
      IonSpinner,
      HeaderComponent,
      CommonModule,
      FormsModule,
      TranslateModule,
      NearestVehiclesComponent,
      RouterModule
    ], template: `@if (pageState.state === 'loading_started') {
<ion-content class="ion-padding">
  <div class="center">
    <ion-spinner color="primary"></ion-spinner>
  </div>
</ion-content>
} @else {
<app-header></app-header>
<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <h1>{{ 'bike-number.enter-number' | translate }}</h1>
      <p>{{ 'bike-number.enter-number-description' | translate }}</p>
      <ion-searchbar
        id="bike-number"
        [debounce]="500"
        type="tel"
        inputmode="numeric"
        pattern="[0-9]*"
        search-icon="search-outline"
        [placeholder]="'bike-number.number' | translate"
        (ionInput)="handleInput($event)"
        (ionFocus)="handleFocus()"
        (paste)="preventPaste($event)"
        (keypress)="onKeyPress($event)"
        [ngClass]="['ecl-searchbar', 'searching' === bikeNumberSearchState.state ? 'ecl-searchbar__searching' : '']"
      >
        <div class="ecl-searchbar-icon">
          <ion-spinner
            name="lines"
            *ngIf="bikeNumberSearchState.state === 'searching'"
          ></ion-spinner>
          <ion-icon
            size="large"
            color="medium"
            *ngIf="['initial'].includes(bikeNumberSearchState.state) "
            name="search-outline"
          ></ion-icon>
          <ion-icon
            size="large"
            color="medium"
            *ngIf="['notFound'].includes(bikeNumberSearchState.state) "
            name="alert-circle-outline"
          ></ion-icon>
          <ion-icon
            size="large"
            color="medium"
            *ngIf="['found', 'renting'].includes(bikeNumberSearchState.state) "
            name="checkmark-outline"
          ></ion-icon>
        </div>
      </ion-searchbar>

      @if (bikeNumberSearchState.state === 'searching') {
      <p>{{ 'bike-number.searching' | translate }}</p>
      } @if (bikeNumberSearchState.state === 'notFound') {
      <p>{{ 'bike-number.not-found' | translate }}</p>
      } @if (bikeNumberSearchState.state === 'found' ||
      bikeNumberSearchState.state === 'renting') {
      <ion-list lines="none">
        <ion-item>
          <ion-icon name="battery-full-outline" slot="start"></ion-icon>
          <ion-label
            >{{ 'bike-number.battery-info' | translate: { percent:
            bikeNumberSearchState.vehicle.battery_vae.percent, distance:
            (bikeNumberSearchState.vehicle.battery_vae.remaining_distance /
            1000).toFixed(1) } }}</ion-label
          >
        </ion-item>
        <ion-item
          color="danger"
          *ngIf="!bikeNumberSearchState.vehicle.rentable"
        >
          <ion-icon name="close-outline" slot="start"></ion-icon>
          <ion-label>{{ 'bike-number.not-available' | translate }}</ion-label>
        </ion-item>
      </ion-list>
      }
      <ion-button
        id="DringTo"
        expand="full"
        shape="round"
        color="primary"
        [disabled]="!canStartRenting()"
        (click)="startRenting()"
        class="ion-margin-top"
        >{{ 'bike-number.start-renting' | translate }}</ion-button
      >

      @if (appState?.state === 'new_cyclist') {
      <ion-row class="ion-justify-content-center">
        <ion-col size="12" size-md="6" size-lg="4">
          <ion-button
            expand="block"
            fill="clear"
            shape="round"
            [routerLink]="['/map']"
          >
            {{ 'bike-number.discover-stations' | translate }}
          </ion-button>
        </ion-col>
      </ion-row>
      } @if (geolocState?.state === 'live_position' || geolocState?.state ===
      'unique_position') {
      <hr />
      <app-nearest-vehicles></app-nearest-vehicles>
      } @else {
      <hr />
      <ion-item lines="none" class="ecl-ionitem_title">
        <h2>{{ 'nearest_vehicles.title' | translate }}</h2>
      </ion-item>
      <div class="ion-margin" id="DringFrom">
        <div class="ion-float-left">
          <img
            src="assets/svg/dring_dring.svg"
            class="ion-margin-end"
            alt="{{ 'bike-number.bikebell-image' | translate }}"
          />
        </div>
        <h1 class="pacifico-regular">Dring Dring!</h1>
        <p>
          {{ 'bike-number.location-request-message' | translate }}
          <ion-button
            class="ion-float-right ion-margin-vertical"
            fill="outline"
            color="dark"
            (click)="requestLocation()"
          >
            <ion-icon name="locate-outline"></ion-icon>
            {{ 'bike-number.request-location' | translate }}
          </ion-button>
        </p>
      </div>
      }
    </ion-col>
  </ion-row>
</ion-content>
}
`, styles: ["/* src/app/pages/renting/bike-number/bike-number.page.scss */\nhr {\n  background: var(--ion-color-dark) !important;\n  margin: 25px 0 !important;\n}\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=bike-number.page.css.map */\n"] }]
  }], () => [{ type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }, { type: VehiculesService }, { type: RentingService }, { type: ToastService }, { type: GeolocationService }, { type: AppstateService }, { type: NativeAudioService }, { type: Router }, { type: ActivatedRoute }, { type: AuthService }, { type: AccountService }, { type: LaunchService }, { type: ToastService }, { type: TranslateService }, { type: ErrorHandlerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BikeNumberPage, { className: "BikeNumberPage", filePath: "src/app/pages/renting/bike-number/bike-number.page.ts", lineNumber: 106 });
})();
export {
  BikeNumberPage
};
//# sourceMappingURL=bike-number.page-SHOBLIXW.js.map
