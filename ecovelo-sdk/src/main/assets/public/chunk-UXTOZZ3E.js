import {
  Injectable,
  ToastController,
  TranslateService,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/utils/toast.service.ts
var ToastType;
(function(ToastType2) {
  ToastType2[ToastType2["Info"] = 0] = "Info";
  ToastType2[ToastType2["Success"] = 1] = "Success";
  ToastType2[ToastType2["Warning"] = 2] = "Warning";
  ToastType2[ToastType2["Error"] = 3] = "Error";
})(ToastType || (ToastType = {}));
var _ToastService = class _ToastService {
  constructor(toastController) {
    this.toastController = toastController;
  }
  createWithJustMessage(_0) {
    return __async(this, arguments, function* (message, type = ToastType.Info) {
      const toast = yield this.toastController.create({
        message,
        duration: 3e3,
        position: "top",
        color: this.getColorFromType(type)
      });
      yield toast.present();
    });
  }
  getColorFromType(type) {
    switch (type) {
      case ToastType.Success:
        return "success";
      case ToastType.Warning:
        return "warning";
      case ToastType.Error:
        return "danger";
      case ToastType.Info:
      default:
        return "primary";
    }
  }
};
_ToastService.\u0275fac = function ToastService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastService)(\u0275\u0275inject(ToastController));
};
_ToastService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
var ToastService = _ToastService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ToastController }], null);
})();

// src/app/services/utils/error-handler.service.ts
var _ErrorHandlerService = class _ErrorHandlerService {
  constructor(translate, toastService) {
    this.translate = translate;
    this.toastService = toastService;
  }
  /**
   * Main entry point for handling any type of error
   * Uses error.title directly as translation key
   */
  handleError(error) {
    let errorKey = null;
    if (error.error && error.error.title) {
      errorKey = error.error.title;
    } else if (error.decline_code) {
      errorKey = error.decline_code;
    } else if (error.code && error.message) {
      errorKey = this.extractCognitoErrorKey(error.message) || error.code;
    } else if (error.name && error.message) {
      errorKey = this.extractCognitoErrorKey(error.message) || error.name;
    } else if (error.message) {
      errorKey = this.convertToSnakeCase(error.message);
    }
    if (!errorKey || errorKey === "" || errorKey === "Bad Request") {
      this.toastService.createWithJustMessage(this.translate.instant("error.generic"), ToastType.Error);
      return;
    }
    this.toastService.createWithJustMessage(this.translate.instant("error.key." + errorKey), ToastType.Error);
  }
  /**
   * Extract Cognito error key from message before the pipe |
   * Example: "PreSignUp failed with error phone_number_already_used | Un utilisateur existe déjà..."
   * Returns: "phone_number_already_used"
   */
  extractCognitoErrorKey(message) {
    const match = message.match(/(\w+)\s*\|/);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  }
  convertToSnakeCase(message) {
    return message.toLowerCase().trim().replace(/[^\w\s]/g, "").replace(/\s+/g, "_");
  }
};
_ErrorHandlerService.\u0275fac = function ErrorHandlerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ErrorHandlerService)(\u0275\u0275inject(TranslateService), \u0275\u0275inject(ToastService));
};
_ErrorHandlerService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ErrorHandlerService, factory: _ErrorHandlerService.\u0275fac, providedIn: "root" });
var ErrorHandlerService = _ErrorHandlerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: TranslateService }, { type: ToastService }], null);
})();

export {
  ToastType,
  ToastService,
  ErrorHandlerService
};
//# sourceMappingURL=chunk-UXTOZZ3E.js.map
