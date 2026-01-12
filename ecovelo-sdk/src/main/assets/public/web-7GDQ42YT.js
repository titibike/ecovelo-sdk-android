import {
  WebPlugin
} from "./chunk-KGBWUDTS.js";
import "./chunk-UESUV5PM.js";

// node_modules/capacitor-plugin-app-tracking-transparency/dist/esm/web.js
var AppTrackingTransparencyWeb = class extends WebPlugin {
  getStatus() {
    return Promise.resolve({
      status: "authorized"
    });
  }
  requestPermission() {
    return Promise.resolve({
      status: "authorized"
    });
  }
};
export {
  AppTrackingTransparencyWeb
};
//# sourceMappingURL=web-7GDQ42YT.js.map
