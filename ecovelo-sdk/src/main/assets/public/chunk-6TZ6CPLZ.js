import {
  GeolocationService,
  StationWrapperService
} from "./chunk-RCWRZ7KJ.js";
import {
  AuthService
} from "./chunk-7UN2TOGU.js";
import {
  FcmService
} from "./chunk-7NHGY2ON.js";
import {
  AppstateService
} from "./chunk-YSCBVZBE.js";
import {
  AccountService,
  BASE_PATH,
  Configuration,
  CustomHttpParameterCodec,
  TerminationRequestsService,
  TripsService
} from "./chunk-5KPTYQ6O.js";
import {
  environment
} from "./chunk-GFMHZGOY.js";
import {
  ErrorHandlerService,
  ToastService
} from "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  AlertController,
  BehaviorSubject,
  HttpClient,
  HttpContext,
  HttpHeaders,
  Inject,
  Injectable,
  LoadingController,
  Optional,
  Router,
  ToastController,
  TranslateService,
  effect,
  firstValueFrom,
  forkJoin,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  Capacitor
} from "./chunk-KGBWUDTS.js";
import {
  __async,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// src/api-cyclist/api/tripsPony.service.ts
var _TripsPonyService = class _TripsPonyService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = environment.basePath;
    this.defaultHeaders = new HttpHeaders();
    this.configuration = new Configuration();
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== "string") {
      const firstBasePath = Array.isArray(basePath) ? basePath[0] : void 0;
      if (firstBasePath != void 0) {
        basePath = firstBasePath;
      }
      if (typeof basePath !== "string") {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }
  // @ts-ignore
  addToHttpParams(httpParams, value, key) {
    if (typeof value === "object" && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }
  addToHttpParamsRecursive(httpParams, value, key) {
    if (value == null) {
      return httpParams;
    }
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        ;
        value.forEach((elem) => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(key, value.toISOString().substring(0, 10));
        } else {
          throw Error("key may not be null if value is Date");
        }
      } else {
        Object.keys(value).forEach((k) => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error("key may not be null if value is not object or array");
    }
    return httpParams;
  }
  pauseTrip(requestParameters, observe = "body", reportProgress = false, options) {
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling pauseTrip.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const pauseTripRequest = requestParameters == null ? void 0 : requestParameters.pauseTripRequest;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    let localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === void 0) {
      const httpHeaderAccepts = [];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    let localVarHttpContext = options && options.context;
    if (localVarHttpContext === void 0) {
      localVarHttpContext = new HttpContext();
    }
    let localVarTransferCache = options && options.transferCache;
    if (localVarTransferCache === void 0) {
      localVarTransferCache = true;
    }
    const consumes = ["application/json"];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Content-Type", httpContentTypeSelected);
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/pony/trips/${this.configuration.encodeParam({
      name: "id",
      value: id,
      in: "path",
      style: "simple",
      explode: false,
      dataType: "string",
      dataFormat: void 0
    })}/pause`;
    return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: pauseTripRequest,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  resumeTrip(requestParameters, observe = "body", reportProgress = false, options) {
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling resumeTrip.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const resumeTripRequest = requestParameters == null ? void 0 : requestParameters.resumeTripRequest;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    let localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === void 0) {
      const httpHeaderAccepts = [];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    let localVarHttpContext = options && options.context;
    if (localVarHttpContext === void 0) {
      localVarHttpContext = new HttpContext();
    }
    let localVarTransferCache = options && options.transferCache;
    if (localVarTransferCache === void 0) {
      localVarTransferCache = true;
    }
    const consumes = ["application/json"];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Content-Type", httpContentTypeSelected);
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/pony/trips/${this.configuration.encodeParam({
      name: "id",
      value: id,
      in: "path",
      style: "simple",
      explode: false,
      dataType: "string",
      dataFormat: void 0
    })}/resume`;
    return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: resumeTripRequest,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
};
_TripsPonyService.\u0275fac = function TripsPonyService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TripsPonyService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_TripsPonyService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TripsPonyService, factory: _TripsPonyService.\u0275fac, providedIn: "root" });
var TripsPonyService = _TripsPonyService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripsPonyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [BASE_PATH]
  }] }, { type: Configuration, decorators: [{
    type: Optional
  }] }], null);
})();

// src/app/services/api-wrappers/renting.service.ts
var _RentingService = class _RentingService {
  constructor(translate, loadingController, toastController, tripsService, router, alertController, geolocationService, terminationRequestsService, authService, toastService, storageService, fcmService, appService, stationWrapperService, tripsPonyService, accountService, errorHandler) {
    this.translate = translate;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.tripsService = tripsService;
    this.router = router;
    this.alertController = alertController;
    this.geolocationService = geolocationService;
    this.terminationRequestsService = terminationRequestsService;
    this.authService = authService;
    this.toastService = toastService;
    this.storageService = storageService;
    this.fcmService = fcmService;
    this.appService = appService;
    this.stationWrapperService = stationWrapperService;
    this.tripsPonyService = tripsPonyService;
    this.accountService = accountService;
    this.errorHandler = errorHandler;
    this.rentingState = new BehaviorSubject({ state: "loading" });
    this.RECOMMENDATION_TTL = 24 * 60 * 60 * 1e3;
    this.recommendations$ = new BehaviorSubject(/* @__PURE__ */ new Map());
    effect(() => {
      if (this.authService.authState().state === "SignedOut") {
        this.rentingState.next({ state: "noData" });
      }
    });
    this.appService.appState.subscribe((state) => {
      this.appState = state;
    });
    this.geolocationService.geolocationState.subscribe((state) => {
      this.geolocState = state;
    });
    this.getCurrentTrips();
    this.initializeRecommendations();
  }
  initializeRecommendations() {
    return __async(this, null, function* () {
      const stored = yield this.storageService.get("user-recommendations");
      if (stored) {
        const recommendations = /* @__PURE__ */ new Map();
        const currentTime = Date.now();
        stored.filter((rec) => currentTime - rec.timestamp < this.RECOMMENDATION_TTL).forEach((rec) => recommendations.set(rec.tripId, rec.timestamp));
        this.recommendations$.next(recommendations);
        if (stored.length !== recommendations.size) {
          yield this.saveRecommendations(recommendations);
        }
      }
    });
  }
  saveRecommendations(recommendations) {
    return __async(this, null, function* () {
      const storedFormat = Array.from(recommendations.entries()).map(([tripId, timestamp]) => ({
        tripId,
        timestamp
      }));
      yield this.storageService.set("user-recommendations", storedFormat);
    });
  }
  hasRecommended(tripId) {
    const recommendations = this.recommendations$.value;
    const timestamp = recommendations.get(tripId);
    if (!timestamp)
      return false;
    return Date.now() - timestamp < this.RECOMMENDATION_TTL;
  }
  startRenting(vehicle, checkLocation = true, autoUnlock = false, showLoader = true, skipRedirect = false) {
    return __async(this, null, function* () {
      yield this.fcmService.checkPermission();
      if (checkLocation) {
        if (this.geolocState.state === "live_position" || this.geolocState.state === "unique_position") {
          const canRent = yield this.isInRangeForRenting(vehicle, this.geolocState.position.coords);
          if (!canRent) {
            return;
          }
        }
      }
      let loading = null;
      if (showLoader) {
        loading = yield this.loadingController.create({
          message: this.translate.instant("generic.loading")
        });
        yield loading.present();
      }
      return new Promise((resolve, reject) => {
        this.tripsService.createTrip({
          program: environment.program,
          body: {
            vehicule: vehicle.id,
            origin: Capacitor.isNativePlatform() ? "mobile" : "web",
            auto_unlock: autoUnlock
          }
        }).subscribe({
          next: (trip) => __async(this, null, function* () {
            this.getCurrentTrips();
            yield this.stationWrapperService.refreshStations(true);
            if (loading)
              yield loading.dismiss();
            if (skipRedirect) {
              resolve(trip);
            } else {
              this.router.navigate(["/trips/congrats"], {
                state: { trip }
              });
              resolve(void 0);
            }
          }),
          error: (err) => __async(this, null, function* () {
            var _a;
            if (loading)
              yield loading.dismiss();
            if (!autoUnlock) {
              const error = yield this.toastController.create({
                message: ((_a = err.error.message.split("|")[1]) == null ? void 0 : _a.trim()) || err.error.message,
                duration: 3e3,
                color: "danger"
              });
              yield error.present();
            }
            reject(err);
          })
        });
      });
    });
  }
  pauseTrip(tripId) {
    return __async(this, null, function* () {
      const confirmAlert = yield this.alertController.create({
        header: this.translate.instant("renting.alerts.pause_trip"),
        message: this.translate.instant("renting.alerts.pause_trip_confirmation"),
        buttons: [
          {
            text: this.translate.instant("generic.cancel"),
            role: "cancel",
            handler: () => false
          },
          {
            text: this.translate.instant("renting.actions.pause"),
            role: "confirm",
            handler: () => true
          }
        ]
      });
      yield confirmAlert.present();
      const result = yield confirmAlert.onDidDismiss();
      if (result.role !== "confirm") {
        return false;
      }
      const loading = yield this.loadingController.create({
        message: this.translate.instant("generic.loading")
      });
      yield loading.present();
      try {
        yield firstValueFrom(this.tripsPonyService.pauseTrip({
          id: tripId,
          liveMode: environment.production,
          pauseTripRequest: {
            cyclist: this.accountService.getCurrentCyclist().id
          }
        }));
        yield new Promise((resolve) => setTimeout(resolve, 2500));
        yield loading.dismiss();
        this.getCurrentTrips();
        return true;
      } catch (err) {
        yield loading.dismiss();
        this.errorHandler.handleError(err);
        return false;
      }
    });
  }
  isInRangeForRenting(vehicle, userCoords) {
    return __async(this, null, function* () {
      let distance;
      if (!userCoords || !vehicle.position) {
        distance = null;
      } else {
        distance = this.geolocationService.calculateDistance(vehicle.position, {
          latitude: userCoords.latitude,
          longitude: userCoords.longitude
        });
      }
      if (distance === null) {
        const alert = yield this.alertController.create({
          header: this.translate.instant("renting.alerts.attention"),
          message: this.translate.instant("renting.alerts.position_unknown"),
          buttons: [
            {
              text: this.translate.instant("generic.cancel"),
              role: "cancel",
              handler: () => false
            },
            {
              text: this.translate.instant("renting.actions.start"),
              role: "confirm",
              handler: () => true
            }
          ]
        });
        yield alert.present();
        const result = yield alert.onDidDismiss();
        return result.role === "confirm";
      }
      if (distance && distance > 100) {
        const alert = yield this.alertController.create({
          header: this.translate.instant("renting.alerts.attention"),
          message: this.translate.instant("renting.alerts.vehicle_far", {
            distance
          }),
          buttons: [
            {
              text: this.translate.instant("generic.cancel"),
              role: "cancel",
              handler: () => false
            },
            {
              text: this.translate.instant("renting.actions.start"),
              role: "confirm",
              handler: () => true
            }
          ]
        });
        yield alert.present();
        const result = yield alert.onDidDismiss();
        return result.role === "confirm";
      } else {
        return true;
      }
    });
  }
  getCurrentTrips() {
    if (this.authService.authState().state === "SignedOut") {
      this.rentingState.next({ state: "noData" });
      return;
    } else {
      this.rentingState.next({ state: "loading" });
      forkJoin({
        renting: this.tripsService.listTrip({
          program: environment.program,
          expand: ["vehicule"],
          statusIn: ["renting,pitstop,terminating,termination_requested"]
        }),
        completed: this.tripsService.listTrip({
          program: environment.program,
          expand: ["vehicule"],
          statusIn: ["completed"],
          endTimestampGte: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3) - 20 * 60
          // 20 minutes
        })
      }).subscribe(({ renting, completed }) => {
        var _a;
        const uniqueTrips = [
          .../* @__PURE__ */ new Set([...renting.data || [], ...completed.data || []])
        ];
        if (uniqueTrips.length === 0) {
          this.rentingState.next({ state: "noData" });
        } else if (uniqueTrips.length >= 1) {
          this.rentingState.next({
            state: "trips",
            trips: renting.data || [],
            tripsCompleted: completed.data || []
          });
        }
        if (((_a = completed.data) == null ? void 0 : _a.length) > 0) {
          this.accountService.loadCyclist();
        }
      });
    }
  }
  getState() {
    return this.rentingState.getValue();
  }
  endTripWithCode(tripId, endCode) {
    return __async(this, null, function* () {
      const loading = yield this.loadingController.create({
        message: this.translate.instant("renting.loading.end_trip_request")
      });
      yield loading.present();
      try {
        yield firstValueFrom(this.terminationRequestsService.markTripForTermination({
          program: environment.program,
          liveMode: environment.production,
          id: tripId,
          body: { end_code: endCode }
        }));
        yield loading.dismiss();
        const successToast = yield this.toastController.create({
          message: this.translate.instant("renting.success.end_trip_request"),
          duration: 2e3,
          color: "success"
        });
        yield successToast.present();
        this.getCurrentTrips();
        return true;
      } catch (err) {
        yield loading.dismiss();
        throw err;
      }
    });
  }
  resumeTrip(tripId) {
    return __async(this, null, function* () {
      const loading = yield this.loadingController.create({
        message: this.translate.instant("renting.loading.resume_trip")
      });
      yield loading.present();
      try {
        yield firstValueFrom(this.tripsPonyService.resumeTrip({
          id: tripId,
          liveMode: environment.production,
          resumeTripRequest: {
            cyclist: this.accountService.getCurrentCyclist().id
          }
        }));
        yield new Promise((resolve) => setTimeout(resolve, 2500));
        yield loading.dismiss();
        this.getCurrentTrips();
        return true;
      } catch (err) {
        yield loading.dismiss();
        this.errorHandler.handleError(err);
        return false;
      }
    });
  }
  endTripWithPhoto(_0, _1) {
    return __async(this, arguments, function* (tripId, photoUrl, positionData = {}) {
      const loading = yield this.loadingController.create({
        message: this.translate.instant("renting.loading.end_trip")
      });
      yield loading.present();
      try {
        yield firstValueFrom(this.terminationRequestsService.markTripForTermination({
          program: environment.program,
          liveMode: environment.production,
          id: tripId,
          body: __spreadValues({
            photo: photoUrl
          }, positionData)
        }));
        yield loading.dismiss();
        const successToast = yield this.toastController.create({
          message: this.translate.instant("renting.success.end_trip_request"),
          duration: 2e3,
          color: "success"
        });
        yield successToast.present();
        this.getCurrentTrips();
        return true;
      } catch (err) {
        yield loading.dismiss();
        this.errorHandler.handleError(err);
        throw err;
      }
    });
  }
  getUserTrips() {
    return this.tripsService.listTrip({
      program: environment.program,
      limit: 100
    });
  }
  hasActiveTripOverThreeHours(t) {
    if (this.rentingState.value.state === "trips") {
      const currentTime = Math.floor(Date.now() / 1e3);
      if (t) {
        const duration = currentTime - t.start_timestamp;
        return (t.status === "renting" || t.status === "pitstop") && duration > 10800 && duration < 86400;
      } else {
        return this.rentingState.value.trips.some((trip) => {
          const duration = currentTime - trip.start_timestamp;
          return (trip.status === "renting" || trip.status === "pitstop") && duration > 10800 && duration < 86400;
        });
      }
    }
    return false;
  }
  hasActiveTripOver24Hours(t) {
    if (this.rentingState.value.state === "trips") {
      const currentTime = Math.floor(Date.now() / 1e3);
      if (t) {
        const duration = currentTime - t.start_timestamp;
        return (t.status === "renting" || t.status === "pitstop") && duration > 86400;
      } else {
        return this.rentingState.value.trips.some((trip) => {
          const duration = currentTime - trip.start_timestamp;
          return (trip.status === "renting" || trip.status === "pitstop") && duration > 86400;
        });
      }
    }
    return false;
  }
  recommendVehicule(tripID) {
    return __async(this, null, function* () {
      const loading = yield this.loadingController.create({
        message: this.translate.instant("recommandation.loading")
      });
      yield loading.present();
      try {
        const recommendation = yield firstValueFrom(this.tripsService.recommendVehicule({
          program: environment.program,
          id: tripID
        }));
        const current = this.recommendations$.value;
        current.set(tripID, Date.now());
        this.recommendations$.next(current);
        yield this.saveRecommendations(current);
        yield this.router.navigate(["/recommandation-congrats"]);
        return recommendation;
      } catch (err) {
        this.errorHandler.handleError(err);
        throw err;
      } finally {
        yield loading.dismiss();
      }
    });
  }
  // Méthode utilitaire pour nettoyer manuellement les recommandations expirées
  cleanExpiredRecommendations() {
    return __async(this, null, function* () {
      const current = this.recommendations$.value;
      const currentTime = Date.now();
      let hasChanges = false;
      for (const [tripId, timestamp] of current.entries()) {
        if (currentTime - timestamp >= this.RECOMMENDATION_TTL) {
          current.delete(tripId);
          hasChanges = true;
        }
      }
      if (hasChanges) {
        this.recommendations$.next(current);
        yield this.saveRecommendations(current);
      }
    });
  }
};
_RentingService.\u0275fac = function RentingService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RentingService)(\u0275\u0275inject(TranslateService), \u0275\u0275inject(LoadingController), \u0275\u0275inject(ToastController), \u0275\u0275inject(TripsService), \u0275\u0275inject(Router), \u0275\u0275inject(AlertController), \u0275\u0275inject(GeolocationService), \u0275\u0275inject(TerminationRequestsService), \u0275\u0275inject(AuthService), \u0275\u0275inject(ToastService), \u0275\u0275inject(StorageService), \u0275\u0275inject(FcmService), \u0275\u0275inject(AppstateService), \u0275\u0275inject(StationWrapperService), \u0275\u0275inject(TripsPonyService), \u0275\u0275inject(AccountService), \u0275\u0275inject(ErrorHandlerService));
};
_RentingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RentingService, factory: _RentingService.\u0275fac, providedIn: "root" });
var RentingService = _RentingService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RentingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: TranslateService }, { type: LoadingController }, { type: ToastController }, { type: TripsService }, { type: Router }, { type: AlertController }, { type: GeolocationService }, { type: TerminationRequestsService }, { type: AuthService }, { type: ToastService }, { type: StorageService }, { type: FcmService }, { type: AppstateService }, { type: StationWrapperService }, { type: TripsPonyService }, { type: AccountService }, { type: ErrorHandlerService }], null);
})();

export {
  RentingService
};
//# sourceMappingURL=chunk-6TZ6CPLZ.js.map
