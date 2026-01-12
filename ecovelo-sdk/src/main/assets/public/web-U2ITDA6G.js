import {
  WebPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor-community/native-audio/dist/esm/audio-asset.js
var AudioAsset = class {
  constructor(audio) {
    this.audio = audio;
  }
};

// node_modules/@capacitor-community/native-audio/dist/esm/web.js
var NativeAudioWeb = class _NativeAudioWeb extends WebPlugin {
  resume(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      if (audio.paused) {
        return audio.play();
      }
    });
  }
  pause(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      return audio.pause();
    });
  }
  getCurrentTime(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      return {
        currentTime: audio.currentTime
      };
    });
  }
  getDuration(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      if (Number.isNaN(audio.duration)) {
        throw "no duration available";
      }
      if (!Number.isFinite(audio.duration)) {
        throw "duration not available => media resource is streaming";
      }
      return {
        duration: audio.duration
      };
    });
  }
  configure(options) {
    return __async(this, null, function* () {
      throw `configure is not supported for web: ${JSON.stringify(options)}`;
    });
  }
  preload(options) {
    return __async(this, null, function* () {
      var _a;
      if (_NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.has(options.assetId)) {
        throw "AssetId already exists. Unload first if like to change!";
      }
      if (!((_a = options.assetPath) === null || _a === void 0 ? void 0 : _a.length)) {
        throw "no assetPath provided";
      }
      if (!options.isUrl && !new RegExp("^/?" + _NativeAudioWeb.FILE_LOCATION).test(options.assetPath)) {
        const slashPrefix = options.assetPath.startsWith("/") ? "" : "/";
        options.assetPath = `${_NativeAudioWeb.FILE_LOCATION}${slashPrefix}${options.assetPath}`;
      }
      const audio = new Audio(options.assetPath);
      audio.autoplay = false;
      audio.loop = false;
      audio.preload = "auto";
      if (options.volume) {
        audio.volume = options.volume;
      }
      _NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.set(options.assetId, new AudioAsset(audio));
    });
  }
  play(options) {
    return __async(this, null, function* () {
      var _a;
      const audio = this.getAudioAsset(options.assetId).audio;
      yield this.stop(options);
      audio.loop = false;
      audio.currentTime = (_a = options.time) !== null && _a !== void 0 ? _a : 0;
      return audio.play();
    });
  }
  loop(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      yield this.stop(options);
      audio.loop = true;
      return audio.play();
    });
  }
  stop(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      audio.pause();
      audio.loop = false;
      audio.currentTime = 0;
    });
  }
  unload(options) {
    return __async(this, null, function* () {
      yield this.stop(options);
      _NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.delete(options.assetId);
    });
  }
  setVolume(options) {
    return __async(this, null, function* () {
      if (typeof (options === null || options === void 0 ? void 0 : options.volume) !== "number") {
        throw "no volume provided";
      }
      const audio = this.getAudioAsset(options.assetId).audio;
      audio.volume = options.volume;
    });
  }
  isPlaying(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      return {
        isPlaying: !audio.paused
      };
    });
  }
  getAudioAsset(assetId) {
    this.checkAssetId(assetId);
    if (!_NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.has(assetId)) {
      throw `no asset for assetId "${assetId}" available. Call preload first!`;
    }
    return _NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.get(assetId);
  }
  checkAssetId(assetId) {
    if (typeof assetId !== "string") {
      throw "assetId must be a string";
    }
    if (!(assetId === null || assetId === void 0 ? void 0 : assetId.length)) {
      throw "no assetId provided";
    }
  }
};
NativeAudioWeb.FILE_LOCATION = "assets/sounds";
NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID = /* @__PURE__ */ new Map();
export {
  NativeAudioWeb
};
//# sourceMappingURL=web-U2ITDA6G.js.map
