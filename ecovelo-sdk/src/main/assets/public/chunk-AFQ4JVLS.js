import {
  StationWrapperService
} from "./chunk-GBVLTFX3.js";
import {
  PersonnalisationService
} from "./chunk-MIGXUTE7.js";
import {
  NewsStateService
} from "./chunk-JEZ6DLK2.js";
import {
  ForfaitsWrapperService
} from "./chunk-RK7YL5P5.js";
import {
  KYCWrapperService
} from "./chunk-IBT2NAXJ.js";
import {
  ProgramsService,
  ZonesService
} from "./chunk-6J5UKKBN.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  ErrorHandlerService
} from "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  Injectable,
  firstValueFrom,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/internal/launch.service.ts
var _LaunchService = class _LaunchService {
  constructor(programsService, zonesService, stationWrapperService, newsStateService, forfaitService, kycService, personnalisationService, storageService, errorHandler) {
    this.programsService = programsService;
    this.zonesService = zonesService;
    this.stationWrapperService = stationWrapperService;
    this.newsStateService = newsStateService;
    this.forfaitService = forfaitService;
    this.kycService = kycService;
    this.personnalisationService = personnalisationService;
    this.storageService = storageService;
    this.errorHandler = errorHandler;
  }
  /**
   * Load all essential app data with retry logic
   */
  loadEssentialData() {
    return __async(this, arguments, function* (options = {}) {
      if (options.skipIfDataExists) {
        const existingProgram = yield this.storageService.get("program");
        const existingZones = yield this.storageService.get("zones");
        const existingForfaits = yield this.storageService.get("forfaits");
        const existingStations = yield this.storageService.get("stations");
        if (existingProgram && existingZones && existingForfaits && existingStations) {
          this.personnalisationService.setColors();
          this.personnalisationService.setTitle();
          this.kycService.setKycDocumentTypes();
          return;
        }
      }
      const retryOperation = (operation, name, maxRetries = 3) => __async(this, null, function* () {
        for (let i = 0; i < maxRetries; i++) {
          try {
            return yield operation();
          } catch (error) {
            if (i === maxRetries - 1) {
              console.error(`Final retry failed for ${name}:`, error);
              throw error;
            }
            console.warn(`Retry ${i + 1}/${maxRetries} for ${name} after error:`, error);
            yield new Promise((resolve) => setTimeout(resolve, 1e3 * (i + 1)));
          }
        }
      });
      try {
        const operations = [];
        const existingProgram = yield this.storageService.get("program");
        const existingZones = yield this.storageService.get("zones");
        if (!existingProgram || !options.skipIfDataExists) {
          operations.push(retryOperation(() => this.loadProgram(), "loadProgram"));
        }
        operations.push(retryOperation(() => this.loadStations(options.forceRefreshStations), "loadStations"));
        if (!existingZones || !options.skipIfDataExists) {
          operations.push(retryOperation(() => this.loadZones(), "loadZones"));
        }
        operations.push(retryOperation(() => this.newsStateService.retrieveNews(), "retrieveNews"), retryOperation(() => this.forfaitService.loadForfaits(), "loadForfaits"));
        yield Promise.all(operations);
      } catch (error) {
        this.errorHandler.handleError(error);
        console.error("\u274C LaunchService: Error loading essential data:", error);
      }
    });
  }
  /**
   * Load program configuration
   */
  loadProgram() {
    return __async(this, null, function* () {
      var _a;
      const program = yield firstValueFrom(this.programsService.retrieveProgram({
        program: environment.program,
        expand: ["config"]
      }));
      if ((_a = program.config) == null ? void 0 : _a.kyc_document_types) {
        this.kycService.kyc_document_types.set(program.config.kyc_document_types);
      }
      yield this.storageService.set("program", program);
      this.personnalisationService.setColors();
      this.personnalisationService.setTitle();
      this.kycService.setKycDocumentTypes();
    });
  }
  /**
   * Load stations data
   */
  loadStations(forceRefresh = true) {
    return __async(this, null, function* () {
      yield this.stationWrapperService.refreshStations(forceRefresh);
    });
  }
  /**
   * Load zones data
   */
  loadZones() {
    return __async(this, null, function* () {
      const response = yield firstValueFrom(this.zonesService.listZone({
        program: environment.program,
        status: "open",
        liveMode: environment.production,
        limit: 100
      }));
      const zonesToStore = "zones" in response ? response.zones : response;
      yield this.storageService.set("zones", zonesToStore);
    });
  }
};
_LaunchService.\u0275fac = function LaunchService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LaunchService)(\u0275\u0275inject(ProgramsService), \u0275\u0275inject(ZonesService), \u0275\u0275inject(StationWrapperService), \u0275\u0275inject(NewsStateService), \u0275\u0275inject(ForfaitsWrapperService), \u0275\u0275inject(KYCWrapperService), \u0275\u0275inject(PersonnalisationService), \u0275\u0275inject(StorageService), \u0275\u0275inject(ErrorHandlerService));
};
_LaunchService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LaunchService, factory: _LaunchService.\u0275fac, providedIn: "root" });
var LaunchService = _LaunchService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LaunchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ProgramsService }, { type: ZonesService }, { type: StationWrapperService }, { type: NewsStateService }, { type: ForfaitsWrapperService }, { type: KYCWrapperService }, { type: PersonnalisationService }, { type: StorageService }, { type: ErrorHandlerService }], null);
})();

export {
  LaunchService
};
//# sourceMappingURL=chunk-AFQ4JVLS.js.map
