import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-UANRONUE.js";

// src/app/pipes/formatPin.pipe.ts
var _FormatPinPipe = class _FormatPinPipe {
  transform(value) {
    if (!value)
      return "";
    const cleanValue = value.replace(/\s/g, "");
    const withSpaces = cleanValue.replace(/(.{2})/g, "$1\xA0");
    return withSpaces.replace(/\u00A0$/, "");
  }
};
_FormatPinPipe.\u0275fac = function FormatPinPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormatPinPipe)();
};
_FormatPinPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "formatPin", type: _FormatPinPipe, pure: true });
var FormatPinPipe = _FormatPinPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormatPinPipe, [{
    type: Pipe,
    args: [{
      name: "formatPin",
      standalone: true
    }]
  }], null, null);
})();

export {
  FormatPinPipe
};
//# sourceMappingURL=chunk-7FAYIW5R.js.map
