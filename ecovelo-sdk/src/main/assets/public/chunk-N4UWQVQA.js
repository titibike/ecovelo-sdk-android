import {
  StationWrapperService
} from "./chunk-GBVLTFX3.js";
import {
  AuthService
} from "./chunk-RK7YL5P5.js";
import {
  SearchService
} from "./chunk-6J5UKKBN.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  addIcons,
  arrowBack,
  close,
  heart,
  person,
  searchOutline
} from "./chunk-3E6DEK7U.js";
import {
  ToastService,
  ToastType
} from "./chunk-UXTOZZ3E.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  ElementRef,
  EventEmitter,
  FormsModule,
  Injectable,
  Input,
  IonButton,
  IonIcon,
  IonInput,
  NavController,
  NgClass,
  NgIf,
  Output,
  Platform,
  Router,
  RouterLink,
  TranslateModule,
  TranslatePipe,
  ViewChild,
  catchError,
  effect,
  map,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/search.service.ts
var _SearchWrapperService = class _SearchWrapperService {
  constructor(searchService) {
    this.searchService = searchService;
    this.searchState = new BehaviorSubject({
      state: "idle"
    });
  }
  search(query) {
    if (!query.trim()) {
      this.searchState.next({ state: "idle" });
      return;
    }
    this.searchState.next({ state: "loading" });
    this.searchService.search({
      program: environment.program,
      query
    }).subscribe({
      next: (response) => {
        var _a, _b;
        const filteredStations = (_a = response.stations) == null ? void 0 : _a.filter((station) => station.status === "open");
        const filteredVehicules = (_b = response.vehicules) == null ? void 0 : _b.filter((vehicule) => vehicule.status === "service");
        if (filteredStations && filteredStations.length > 0 && filteredVehicules && filteredVehicules.length > 0) {
          this.searchState.next({
            state: "success",
            results: {
              stations: filteredStations,
              vehicules: filteredVehicules
            }
          });
        } else if (filteredStations && filteredStations.length > 0) {
          this.searchState.next({
            state: "success",
            results: {
              stations: filteredStations,
              vehicules: []
            }
          });
        } else if (filteredVehicules && filteredVehicules.length > 0) {
          this.searchState.next({
            state: "success",
            results: {
              stations: [],
              vehicules: filteredVehicules
            }
          });
        } else {
          this.searchState.next({
            state: "no_results"
          });
        }
      },
      error: (error) => {
        this.searchState.next({ state: "error", error });
      }
    });
  }
  searchAsync(query) {
    if (!query.trim()) {
      return of({
        stations: [],
        vehicules: []
      });
    }
    return this.searchService.search({
      program: environment.program,
      query
    }).pipe(map((response) => ({
      stations: response.stations || [],
      vehicules: response.vehicules || []
    })), catchError((error) => {
      console.error("Search error:", error);
      return of({
        stations: [],
        vehicules: []
      });
    }));
  }
};
_SearchWrapperService.\u0275fac = function SearchWrapperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchWrapperService)(\u0275\u0275inject(SearchService));
};
_SearchWrapperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SearchWrapperService, factory: _SearchWrapperService.\u0275fac, providedIn: "root" });
var SearchWrapperService = _SearchWrapperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchWrapperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: SearchService }], null);
})();

// src/app/components/searchbar/searchbar.component.ts
var _c0 = ["searchInput"];
var _c1 = (a0) => ({ focused: a0 });
function SearchbarComponent_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 8);
  }
}
function SearchbarComponent_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 9);
    \u0275\u0275listener("click", function SearchbarComponent_ion_icon_2_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onBackClick());
    });
    \u0275\u0275elementEnd();
  }
}
function SearchbarComponent_ion_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 10);
    \u0275\u0275listener("click", function SearchbarComponent_ion_button_6_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFavoriteClick());
    });
    \u0275\u0275element(1, "ion-icon", 11);
    \u0275\u0275elementEnd();
  }
}
function SearchbarComponent_ion_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 12);
    \u0275\u0275listener("click", function SearchbarComponent_ion_button_7_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearInput());
    });
    \u0275\u0275element(1, "ion-icon", 13);
    \u0275\u0275elementEnd();
  }
}
function SearchbarComponent_ion_button_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-button", 14);
    \u0275\u0275element(1, "ion-icon", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", "/account");
  }
}
var _SearchbarComponent = class _SearchbarComponent {
  constructor(stationWrapperService, navCtrl, authService, toastService, router, platform, elementRef) {
    this.stationWrapperService = stationWrapperService;
    this.navCtrl = navCtrl;
    this.authService = authService;
    this.toastService = toastService;
    this.router = router;
    this.platform = platform;
    this.elementRef = elementRef;
    this.isAndroid = false;
    this.searchBarState = {
      state: "idle"
    };
    this.state = {
      state: "idle"
    };
    this.stateChange = new EventEmitter();
    this.searchQuery = new EventEmitter();
    addIcons({ searchOutline, heart, person, arrowBack, close });
    effect(() => {
      this.authState = this.authService.authState();
    });
  }
  ngOnInit() {
    this.isAndroid = this.platform.is("android");
    if (this.isAndroid) {
      this.handleAndroidSafeArea();
    }
  }
  ngAfterViewInit() {
    if (this.router.url === "/search-page") {
      setTimeout(() => {
        if (this.searchInput) {
          this.searchInput.setFocus();
        }
      }, 300);
    }
  }
  handleAndroidSafeArea() {
    const searchbarElement = this.elementRef.nativeElement.querySelector(".custom-searchbar");
    if (searchbarElement) {
      const safeAreaTop = getComputedStyle(document.documentElement).getPropertyValue("--ion-safe-area-top");
      if (!safeAreaTop || safeAreaTop === "0px" || safeAreaTop === "unset") {
        searchbarElement.classList.add("android-safe-area");
      }
    }
  }
  onFocus(event) {
    return __async(this, null, function* () {
      if (this.router.url === "/map") {
        this.navCtrl.navigateForward("/search-page", { animated: false });
      } else if (this.router.url === "/search-page") {
      } else {
        event.target.blur();
      }
    });
  }
  onInput(event) {
    const query = event.target.value;
    if (!query || query.trim() === "") {
      this.searchBarState = { state: "idle" };
    } else {
      this.searchBarState = { state: "searching" };
    }
    this.searchQuery.emit(query);
  }
  onFavoriteClick() {
    if (this.authState.state === "SignedIn") {
      this.stationWrapperService.setStationState("favorites-stations");
    } else {
      this.toastService.createWithJustMessage("Vous devez \xEAtre connect\xE9 pour acc\xE9der \xE0 vos favoris", ToastType.Info);
      this.navCtrl.navigateForward("/account", { animated: false });
    }
  }
  onBackClick() {
    this.searchBarState = { state: "idle" };
    this.navCtrl.navigateBack("/map", { animated: false });
    this.stateChange.emit();
  }
  clearInput() {
    if (this.searchInput) {
      this.searchInput.value = "";
      this.searchBarState = { state: "idle" };
      this.searchQuery.emit("");
      setTimeout(() => {
        if (this.searchInput) {
          this.searchInput.setFocus();
        }
      }, 100);
    }
  }
};
_SearchbarComponent.\u0275fac = function SearchbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchbarComponent)(\u0275\u0275directiveInject(StationWrapperService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(ElementRef));
};
_SearchbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchbarComponent, selectors: [["app-searchbar"]], viewQuery: function SearchbarComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
  }
}, inputs: { state: "state" }, outputs: { stateChange: "stateChange", searchQuery: "searchQuery" }, decls: 9, vars: 12, consts: [["searchInput", ""], [1, "custom-searchbar", 3, "ngClass"], ["name", "search-outline", "size", "large", 4, "ngIf"], ["style", "cursor: pointer", "name", "arrow-back", "size", "large", 3, "click", 4, "ngIf"], [3, "ionFocus", "ionInput", "placeholder", "debounce"], ["fill", "clear", "slot", "end", "color", "danger", 3, "click", 4, "ngIf"], ["fill", "clear", "slot", "end", 3, "click", 4, "ngIf"], ["slot", "end", "shape", "round", "color", "dark", "class", "ecl-btn--badge", 3, "routerLink", 4, "ngIf"], ["name", "search-outline", "size", "large"], ["name", "arrow-back", "size", "large", 2, "cursor", "pointer", 3, "click"], ["fill", "clear", "slot", "end", "color", "danger", 3, "click"], ["slot", "icon-only", "name", "heart"], ["fill", "clear", "slot", "end", 3, "click"], ["slot", "icon-only", "name", "close"], ["slot", "end", "shape", "round", "color", "dark", 1, "ecl-btn--badge", 3, "routerLink"], ["slot", "icon-only", "name", "person"]], template: function SearchbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, SearchbarComponent_ion_icon_1_Template, 1, 0, "ion-icon", 2)(2, SearchbarComponent_ion_icon_2_Template, 1, 0, "ion-icon", 3);
    \u0275\u0275elementStart(3, "ion-input", 4, 0);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ionFocus", function SearchbarComponent_Template_ion_input_ionFocus_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFocus($event));
    })("ionInput", function SearchbarComponent_Template_ion_input_ionInput_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SearchbarComponent_ion_button_6_Template, 2, 0, "ion-button", 5)(7, SearchbarComponent_ion_button_7_Template, 2, 0, "ion-button", 6)(8, SearchbarComponent_ion_button_8_Template, 2, 1, "ion-button", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ctx.state.state !== "idle"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.state.state === "idle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.state.state !== "idle");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 8, "searchbar.placeholder"))("debounce", 500);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.state.state === "idle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchBarState.state === "searching");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchBarState.state === "idle" && ctx.router.url !== "/search-page");
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgIf,
  FormsModule,
  IonInput,
  IonButton,
  IonIcon,
  TranslateModule,
  TranslatePipe,
  RouterLink
], styles: ["\n\n.custom-searchbar[_ngcontent-%COMP%] {\n  z-index: 1001;\n  position: absolute;\n  top: max(var(--ion-safe-area-top), 24px);\n  left: 2.5%;\n  width: 95%;\n  margin-top: 16px;\n  max-width: 400px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  background-color: white;\n  border-radius: 54px;\n  height: 60px;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-dark);\n}\n.custom-searchbar.focused[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  box-shadow: none;\n  border: none;\n}\n@supports not (top: max(var(--ion-safe-area-top), 24px)) {\n  .custom-searchbar[_ngcontent-%COMP%] {\n    top: var(--ion-safe-area-top);\n    padding-top: 24px;\n  }\n}\n.custom-searchbar.android-safe-area[_ngcontent-%COMP%] {\n  top: calc(var(--ion-safe-area-top) + 24px);\n  min-height: 60px;\n}\n@supports (top: max(40px, calc(var(--ion-safe-area-top) + 24px))) {\n  .custom-searchbar.android-safe-area[_ngcontent-%COMP%] {\n    top: max(40px, var(--ion-safe-area-top) + 24px);\n  }\n}\n@media screen and (-webkit-device-pixel-ratio: 2) {\n  .custom-searchbar[_ngcontent-%COMP%] {\n    top: max(var(--ion-safe-area-top), 28px);\n  }\n}\n@media screen and (-webkit-device-pixel-ratio: 3) {\n  .custom-searchbar[_ngcontent-%COMP%] {\n    top: max(var(--ion-safe-area-top), 32px);\n  }\n}\n@supports not (top: max(var(--ion-safe-area-top), 24px)) {\n  .custom-searchbar[_ngcontent-%COMP%] {\n    top: env(safe-area-inset-top, 40px);\n    margin-top: 24px;\n  }\n}\n.searchbar-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  z-index: 1000;\n}\nion-input[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n}\nion-list[_ngcontent-%COMP%] {\n  width: 100%;\n  --ion-background-color: white;\n}\n.searchbar-overlay[_ngcontent-%COMP%] {\n  padding-top: calc(max(var(--ion-safe-area-top), 24px) + 76px);\n}\n@supports not (padding-top: calc(max(var(--ion-safe-area-top), 24px) + 76px)) {\n  .searchbar-overlay[_ngcontent-%COMP%] {\n    padding-top: calc(var(--ion-safe-area-top) + 100px);\n    min-height: 100vh;\n  }\n}\n/*# sourceMappingURL=searchbar.component.css.map */"] });
var SearchbarComponent = _SearchbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchbarComponent, [{
    type: Component,
    args: [{ selector: "app-searchbar", imports: [
      CommonModule,
      FormsModule,
      IonInput,
      IonButton,
      IonIcon,
      TranslateModule,
      RouterLink
    ], template: `<div class="custom-searchbar" [ngClass]="{ focused: state.state !== 'idle' }">
  <!-- Show arrow-back when not idle, search icon when idle -->
  <ion-icon
    *ngIf="state.state === 'idle'"
    name="search-outline"
    size="large"
  ></ion-icon>

  <ion-icon
    *ngIf="state.state !== 'idle'"
    style="cursor: pointer"
    (click)="onBackClick()"
    name="arrow-back"
    size="large"
  ></ion-icon>
  <ion-input
    #searchInput
    [placeholder]="'searchbar.placeholder' | translate"
    [debounce]="500"
    (ionFocus)="onFocus($event)"
    (ionInput)="onInput($event)"
  />
  <ion-button
    fill="clear"
    slot="end"
    color="danger"
    (click)="onFavoriteClick()"
    *ngIf="state.state === 'idle'"
  >
    <ion-icon slot="icon-only" name="heart"></ion-icon>
  </ion-button>

  <!-- Clear button when typing on search page -->
  <ion-button
    *ngIf="searchBarState.state === 'searching'"
    fill="clear"
    slot="end"
    (click)="clearInput()"
  >
    <ion-icon slot="icon-only" name="close"></ion-icon>
  </ion-button>

  <!-- Account button only on map page -->
  <ion-button
    *ngIf="searchBarState.state === 'idle' && router.url !== '/search-page'"
    slot="end"
    shape="round"
    color="dark"
    [routerLink]="'/account'"
    class="ecl-btn--badge"
  >
    <ion-icon slot="icon-only" name="person"></ion-icon>
  </ion-button>
</div>
`, styles: ["/* src/app/components/searchbar/searchbar.component.scss */\n.custom-searchbar {\n  z-index: 1001;\n  position: absolute;\n  top: max(var(--ion-safe-area-top), 24px);\n  left: 2.5%;\n  width: 95%;\n  margin-top: 16px;\n  max-width: 400px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  background-color: white;\n  border-radius: 54px;\n  height: 60px;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-dark);\n}\n.custom-searchbar.focused {\n  background-color: #f2f2f2;\n  box-shadow: none;\n  border: none;\n}\n@supports not (top: max(var(--ion-safe-area-top), 24px)) {\n  .custom-searchbar {\n    top: var(--ion-safe-area-top);\n    padding-top: 24px;\n  }\n}\n.custom-searchbar.android-safe-area {\n  top: calc(var(--ion-safe-area-top) + 24px);\n  min-height: 60px;\n}\n@supports (top: max(40px, calc(var(--ion-safe-area-top) + 24px))) {\n  .custom-searchbar.android-safe-area {\n    top: max(40px, var(--ion-safe-area-top) + 24px);\n  }\n}\n@media screen and (-webkit-device-pixel-ratio: 2) {\n  .custom-searchbar {\n    top: max(var(--ion-safe-area-top), 28px);\n  }\n}\n@media screen and (-webkit-device-pixel-ratio: 3) {\n  .custom-searchbar {\n    top: max(var(--ion-safe-area-top), 32px);\n  }\n}\n@supports not (top: max(var(--ion-safe-area-top), 24px)) {\n  .custom-searchbar {\n    top: env(safe-area-inset-top, 40px);\n    margin-top: 24px;\n  }\n}\n.searchbar-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  z-index: 1000;\n}\nion-input {\n  --padding-start: 10px;\n}\nion-list {\n  width: 100%;\n  --ion-background-color: white;\n}\n.searchbar-overlay {\n  padding-top: calc(max(var(--ion-safe-area-top), 24px) + 76px);\n}\n@supports not (padding-top: calc(max(var(--ion-safe-area-top), 24px) + 76px)) {\n  .searchbar-overlay {\n    padding-top: calc(var(--ion-safe-area-top) + 100px);\n    min-height: 100vh;\n  }\n}\n/*# sourceMappingURL=searchbar.component.css.map */\n"] }]
  }], () => [{ type: StationWrapperService }, { type: NavController }, { type: AuthService }, { type: ToastService }, { type: Router }, { type: Platform }, { type: ElementRef }], { state: [{
    type: Input
  }], stateChange: [{
    type: Output
  }], searchQuery: [{
    type: Output
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchbarComponent, { className: "SearchbarComponent", filePath: "src/app/components/searchbar/searchbar.component.ts", lineNumber: 53 });
})();

export {
  SearchWrapperService,
  SearchbarComponent
};
//# sourceMappingURL=chunk-N4UWQVQA.js.map
