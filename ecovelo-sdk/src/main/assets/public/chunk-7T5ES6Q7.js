import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-UANRONUE.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor-community/native-audio/dist/esm/index.js
var NativeAudio = registerPlugin("NativeAudio", {
  web: () => import("./web-U2ITDA6G.js").then((m) => new m.NativeAudioWeb())
});

// src/app/services/utils/native-audio.service.ts
var _NativeAudioService = class _NativeAudioService {
  constructor() {
    this.loadedAssets = /* @__PURE__ */ new Map();
  }
  /**
   * Précharge un asset audio seulement s'il n'est pas déjà chargé
   */
  preloadAsset(assetId, assetPath, audioChannelNum = 1, volume = 0.8) {
    return __async(this, null, function* () {
      if (this.loadedAssets.has(assetId)) {
        return;
      }
      try {
        const finalPath = Capacitor.isNativePlatform() ? `public/${assetPath}` : assetPath;
        yield NativeAudio.preload({
          assetId,
          assetPath: finalPath,
          audioChannelNum,
          volume,
          isUrl: false
        });
        this.loadedAssets.set(assetId, {
          assetId,
          assetPath: finalPath,
          audioChannelNum,
          volume,
          isLoaded: true
        });
      } catch (error) {
        if (error && typeof error === "object" && "message" in error && typeof error.message === "string" && error.message.includes("already exists")) {
          this.loadedAssets.set(assetId, {
            assetId,
            assetPath: Capacitor.isNativePlatform() ? `public/${assetPath}` : assetPath,
            audioChannelNum,
            volume,
            isLoaded: true
          });
        } else {
          console.error(`Failed to preload audio asset ${assetId}:`, error);
          throw error;
        }
      }
    });
  }
  /**
   * Joue un asset audio
   */
  play(assetId, time) {
    return __async(this, null, function* () {
      if (!this.loadedAssets.has(assetId)) {
        console.warn(`Audio asset ${assetId} not loaded, cannot play`);
        return;
      }
      try {
        yield NativeAudio.play({
          assetId,
          time
        });
      } catch (error) {
        console.error(`Failed to play audio asset ${assetId}:`, error);
      }
    });
  }
};
_NativeAudioService.\u0275fac = function NativeAudioService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NativeAudioService)();
};
_NativeAudioService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NativeAudioService, factory: _NativeAudioService.\u0275fac, providedIn: "root" });
var NativeAudioService = _NativeAudioService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeAudioService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  NativeAudioService
};
//# sourceMappingURL=chunk-7T5ES6Q7.js.map
