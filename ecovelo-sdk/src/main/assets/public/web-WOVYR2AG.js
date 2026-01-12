import {
  WebPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/capacitor-native-settings/dist/esm/web.js
var NativeSettingsWeb = class extends WebPlugin {
  /**
   * Open iOS & Android settings.
   * Not implemented for web!
   */
  open() {
    return __async(this, null, function* () {
      return new Promise((_resolve, reject) => {
        reject(new Error("Not implemented for web."));
      });
    });
  }
  /**
   * Open android settings.
   * Not implemented for web!
   */
  openAndroid() {
    return __async(this, null, function* () {
      return new Promise((_resolve, reject) => {
        reject(new Error("Not implemented for web."));
      });
    });
  }
  /**
   * Open iOS settings.
   * Not implemented for web!
   */
  openIOS() {
    return __async(this, null, function* () {
      return new Promise((_resolve, reject) => {
        reject(new Error("Not implemented for web."));
      });
    });
  }
};
export {
  NativeSettingsWeb
};
//# sourceMappingURL=web-WOVYR2AG.js.map
