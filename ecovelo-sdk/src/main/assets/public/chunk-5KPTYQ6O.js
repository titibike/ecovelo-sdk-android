import {
  environment
} from "./chunk-GFMHZGOY.js";
import {
  ErrorHandlerService,
  ToastService,
  ToastType
} from "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  BehaviorSubject,
  HttpClient,
  HttpContext,
  HttpHeaders,
  HttpParams,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  Optional,
  SkipSelf,
  TranslateService,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// src/api-cyclist/variables.ts
var BASE_PATH = new InjectionToken("basePath");

// src/api-cyclist/encoder.ts
var CustomHttpParameterCodec = class {
  encodeKey(k) {
    return encodeURIComponent(k);
  }
  encodeValue(v) {
    return encodeURIComponent(v);
  }
  decodeKey(k) {
    return decodeURIComponent(k);
  }
  decodeValue(v) {
    return decodeURIComponent(v);
  }
};

// src/api-cyclist/configuration.ts
var Configuration = class {
  constructor({ accessToken, apiKeys, basePath, credentials, encodeParam, encoder, password, username, withCredentials } = {}) {
    if (apiKeys) {
      this.apiKeys = apiKeys;
    }
    if (username !== void 0) {
      this.username = username;
    }
    if (password !== void 0) {
      this.password = password;
    }
    if (accessToken !== void 0) {
      this.accessToken = accessToken;
    }
    if (basePath !== void 0) {
      this.basePath = basePath;
    }
    if (withCredentials !== void 0) {
      this.withCredentials = withCredentials;
    }
    if (encoder) {
      this.encoder = encoder;
    }
    this.encodeParam = encodeParam != null ? encodeParam : (param) => this.defaultEncodeParam(param);
    this.credentials = credentials != null ? credentials : {};
  }
  /**
   * Select the correct content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param contentTypes - the array of content types that are available for selection
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderContentType(contentTypes) {
    if (contentTypes.length === 0) {
      return void 0;
    }
    const type = contentTypes.find((x) => this.isJsonMime(x));
    if (type === void 0) {
      return contentTypes[0];
    }
    return type;
  }
  /**
   * Select the correct accept content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param accepts - the array of content types that are available for selection.
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderAccept(accepts) {
    if (accepts.length === 0) {
      return void 0;
    }
    const type = accepts.find((x) => this.isJsonMime(x));
    if (type === void 0) {
      return accepts[0];
    }
    return type;
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    const jsonMime = new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$", "i");
    return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === "application/json-patch+json");
  }
  lookupCredential(key) {
    const value = this.credentials[key];
    return typeof value === "function" ? value() : value;
  }
  addCredentialToHeaders(credentialKey, headerName, headers, prefix) {
    const value = this.lookupCredential(credentialKey);
    return value ? headers.set(headerName, (prefix != null ? prefix : "") + value) : headers;
  }
  addCredentialToQuery(credentialKey, paramName, query) {
    const value = this.lookupCredential(credentialKey);
    return value ? query.set(paramName, value) : query;
  }
  defaultEncodeParam(param) {
    const value = param.dataFormat === "date-time" && param.value instanceof Date ? param.value.toISOString() : param.value;
    return encodeURIComponent(String(value));
  }
};

// src/api-cyclist/api.base.service.ts
var BaseService = class {
  constructor(basePath, configuration) {
    this.basePath = environment.basePath;
    this.defaultHeaders = new HttpHeaders();
    this.configuration = configuration || new Configuration();
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
  canConsumeForm(consumes) {
    return consumes.indexOf("multipart/form-data") !== -1;
  }
  addToHttpParams(httpParams, value, key, isDeep = false) {
    if (typeof value === "object" && !(value instanceof Date)) {
      return this.addToHttpParamsRecursive(httpParams, value, isDeep ? key : void 0, isDeep);
    }
    return this.addToHttpParamsRecursive(httpParams, value, key);
  }
  addToHttpParamsRecursive(httpParams, value, key, isDeep = false) {
    if (value === null || value === void 0) {
      return httpParams;
    }
    if (typeof value === "object") {
      if (key != null) {
        return isDeep ? Object.keys(value).reduce((hp, k) => hp.append(`${key}[${k}]`, value[k]), httpParams) : httpParams.append(key, JSON.stringify(value));
      }
      if (Array.isArray(value)) {
        value.forEach((elem) => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(key, value.toISOString());
        } else {
          throw Error("key may not be null if value is Date");
        }
      } else {
        Object.keys(value).forEach((k) => {
          const paramKey = key ? `${key}.${k}` : k;
          httpParams = this.addToHttpParamsRecursive(httpParams, value[k], paramKey);
        });
      }
      return httpParams;
    } else if (key != null) {
      return httpParams.append(key, value);
    }
    throw Error("key may not be null if value is not object or array");
  }
};

// src/api-cyclist/api/cyclists.service.ts
var _CyclistsService = class _CyclistsService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  changeCyclistEmail(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const changeCyclistEmailRequest = requestParameters == null ? void 0 : requestParameters.changeCyclistEmailRequest;
    let localVarHeaders = this.defaultHeaders;
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/cyclists/change-email`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body: changeCyclistEmailRequest,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  changeCyclistPassword(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const changeCyclistPasswordRequest = requestParameters == null ? void 0 : requestParameters.changeCyclistPasswordRequest;
    let localVarHeaders = this.defaultHeaders;
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/cyclists/change-password`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body: changeCyclistPasswordRequest,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  confirmCyclist(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarHeaders = this.defaultHeaders;
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/cyclists/confirm`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  createCyclist(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling createCyclist.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/cyclists`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  cyclistExists(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const phoneNumber = requestParameters == null ? void 0 : requestParameters.phoneNumber;
    if (phoneNumber === null || phoneNumber === void 0) {
      throw new Error("Required parameter phoneNumber was null or undefined when calling cyclistExists.");
    }
    let localVarHeaders = this.defaultHeaders;
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/cyclists/${this.configuration.encodeParam({ name: "phoneNumber", value: phoneNumber, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}/exists`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  deleteCyclist(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling deleteCyclist.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/cyclists`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("delete", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  retrieveCyclist(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveCyclist.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const currentProgram = requestParameters == null ? void 0 : requestParameters.currentProgram;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, currentProgram, "current_program");
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/cyclists`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_CyclistsService.\u0275fac = function CyclistsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CyclistsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_CyclistsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CyclistsService, factory: _CyclistsService.\u0275fac, providedIn: "root" });
var CyclistsService = _CyclistsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CyclistsService, [{
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

// src/api-cyclist/api/notificationPreferences.service.ts
var _NotificationPreferencesService = class _NotificationPreferencesService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  createNotificationPreference(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling createNotificationPreference.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/notification_preferences`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  deleteNotificationPreference(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling deleteNotificationPreference.");
    }
    const notificationSubscriptionId = requestParameters == null ? void 0 : requestParameters.notificationSubscriptionId;
    if (notificationSubscriptionId === null || notificationSubscriptionId === void 0) {
      throw new Error("Required parameter notificationSubscriptionId was null or undefined when calling deleteNotificationPreference.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/notification_preferences/${this.configuration.encodeParam({ name: "notificationSubscriptionId", value: notificationSubscriptionId, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("delete", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  listNotificationPreference(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling listNotificationPreference.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const limit = requestParameters == null ? void 0 : requestParameters.limit;
    const startingAfter = requestParameters == null ? void 0 : requestParameters.startingAfter;
    const endingBefore = requestParameters == null ? void 0 : requestParameters.endingBefore;
    const withTotal = requestParameters == null ? void 0 : requestParameters.withTotal;
    const program2 = requestParameters == null ? void 0 : requestParameters.program2;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startingAfter, "starting_after");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endingBefore, "ending_before");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, withTotal, "with_total");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, program2, "program");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/notification_preferences`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_NotificationPreferencesService.\u0275fac = function NotificationPreferencesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotificationPreferencesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_NotificationPreferencesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationPreferencesService, factory: _NotificationPreferencesService.\u0275fac, providedIn: "root" });
var NotificationPreferencesService = _NotificationPreferencesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationPreferencesService, [{
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

// src/api-cyclist/api/vehicules.service.ts
var _VehiculesService = class _VehiculesService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  listVehicule(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling listVehicule.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const ids = requestParameters == null ? void 0 : requestParameters.ids;
    const limit = requestParameters == null ? void 0 : requestParameters.limit;
    const startingAfter = requestParameters == null ? void 0 : requestParameters.startingAfter;
    const endingBefore = requestParameters == null ? void 0 : requestParameters.endingBefore;
    const withTotal = requestParameters == null ? void 0 : requestParameters.withTotal;
    const created = requestParameters == null ? void 0 : requestParameters.created;
    const createdGt = requestParameters == null ? void 0 : requestParameters.createdGt;
    const createdLt = requestParameters == null ? void 0 : requestParameters.createdLt;
    const createdGte = requestParameters == null ? void 0 : requestParameters.createdGte;
    const createdLte = requestParameters == null ? void 0 : requestParameters.createdLte;
    const battery = requestParameters == null ? void 0 : requestParameters.battery;
    const batteryGte = requestParameters == null ? void 0 : requestParameters.batteryGte;
    const batteryLte = requestParameters == null ? void 0 : requestParameters.batteryLte;
    const batteryVae = requestParameters == null ? void 0 : requestParameters.batteryVae;
    const batteryVaeGte = requestParameters == null ? void 0 : requestParameters.batteryVaeGte;
    const batteryVaeLte = requestParameters == null ? void 0 : requestParameters.batteryVaeLte;
    const chainType = requestParameters == null ? void 0 : requestParameters.chainType;
    const chainTypeIn = requestParameters == null ? void 0 : requestParameters.chainTypeIn;
    const connected = requestParameters == null ? void 0 : requestParameters.connected;
    const dockless = requestParameters == null ? void 0 : requestParameters.dockless;
    const fw = requestParameters == null ? void 0 : requestParameters.fw;
    const fwGte = requestParameters == null ? void 0 : requestParameters.fwGte;
    const fwLte = requestParameters == null ? void 0 : requestParameters.fwLte;
    const fwIn = requestParameters == null ? void 0 : requestParameters.fwIn;
    const lock = requestParameters == null ? void 0 : requestParameters.lock;
    const lockIn = requestParameters == null ? void 0 : requestParameters.lockIn;
    const model = requestParameters == null ? void 0 : requestParameters.model;
    const modelIn = requestParameters == null ? void 0 : requestParameters.modelIn;
    const program2 = requestParameters == null ? void 0 : requestParameters.program2;
    const rentable = requestParameters == null ? void 0 : requestParameters.rentable;
    const score = requestParameters == null ? void 0 : requestParameters.score;
    const scoreGte = requestParameters == null ? void 0 : requestParameters.scoreGte;
    const scoreLte = requestParameters == null ? void 0 : requestParameters.scoreLte;
    const station = requestParameters == null ? void 0 : requestParameters.station;
    const stationIn = requestParameters == null ? void 0 : requestParameters.stationIn;
    const status = requestParameters == null ? void 0 : requestParameters.status;
    const statusIn = requestParameters == null ? void 0 : requestParameters.statusIn;
    const type = requestParameters == null ? void 0 : requestParameters.type;
    const typeIn = requestParameters == null ? void 0 : requestParameters.typeIn;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    if (ids) {
      ids.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "ids");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startingAfter, "starting_after");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endingBefore, "ending_before");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, withTotal, "with_total");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, created, "created");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdGt, "created_gt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdLt, "created_lt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdGte, "created_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdLte, "created_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, battery, "battery");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, batteryGte, "battery_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, batteryLte, "battery_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, batteryVae, "battery_vae");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, batteryVaeGte, "battery_vae_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, batteryVaeLte, "battery_vae_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, chainType, "chain_type");
    if (chainTypeIn) {
      chainTypeIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "chain_type_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, connected, "connected");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, dockless, "dockless");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, fw, "fw");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, fwGte, "fw_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, fwLte, "fw_lte");
    if (fwIn) {
      fwIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "fw_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, lock, "lock");
    if (lockIn) {
      lockIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "lock_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, model, "model");
    if (modelIn) {
      modelIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "model_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, program2, "program");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, rentable, "rentable");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, score, "score");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, scoreGte, "score_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, scoreLte, "score_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, station, "station");
    if (stationIn) {
      stationIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "station_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, status, "status");
    if (statusIn) {
      statusIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "status_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, type, "type");
    if (typeIn) {
      typeIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "type_in");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/vehicules`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  retrieveVehicule(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveVehicule.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling retrieveVehicule.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/vehicules/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_VehiculesService.\u0275fac = function VehiculesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VehiculesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_VehiculesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VehiculesService, factory: _VehiculesService.\u0275fac, providedIn: "root" });
var VehiculesService = _VehiculesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VehiculesService, [{
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

// src/api-cyclist/api/abonnements.service.ts
var _AbonnementsService = class _AbonnementsService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  createAbonnement(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling createAbonnement.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const createAbonnementRequest = requestParameters == null ? void 0 : requestParameters.createAbonnementRequest;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/abonnements`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body: createAbonnementRequest,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  deleteAbonnement(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling deleteAbonnement.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling deleteAbonnement.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/abonnements/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("delete", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  listAbonnement(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling listAbonnement.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const ids = requestParameters == null ? void 0 : requestParameters.ids;
    const created = requestParameters == null ? void 0 : requestParameters.created;
    const createdGt = requestParameters == null ? void 0 : requestParameters.createdGt;
    const createdLt = requestParameters == null ? void 0 : requestParameters.createdLt;
    const createdGte = requestParameters == null ? void 0 : requestParameters.createdGte;
    const createdLte = requestParameters == null ? void 0 : requestParameters.createdLte;
    const language = requestParameters == null ? void 0 : requestParameters.language;
    const limit = requestParameters == null ? void 0 : requestParameters.limit;
    const startingAfter = requestParameters == null ? void 0 : requestParameters.startingAfter;
    const endingBefore = requestParameters == null ? void 0 : requestParameters.endingBefore;
    const withTotal = requestParameters == null ? void 0 : requestParameters.withTotal;
    const activatedAt = requestParameters == null ? void 0 : requestParameters.activatedAt;
    const activatedAtGte = requestParameters == null ? void 0 : requestParameters.activatedAtGte;
    const activatedAtLte = requestParameters == null ? void 0 : requestParameters.activatedAtLte;
    const cyclist = requestParameters == null ? void 0 : requestParameters.cyclist;
    const forfait = requestParameters == null ? void 0 : requestParameters.forfait;
    const forfaitIn = requestParameters == null ? void 0 : requestParameters.forfaitIn;
    const organization = requestParameters == null ? void 0 : requestParameters.organization;
    const status = requestParameters == null ? void 0 : requestParameters.status;
    const statusIn = requestParameters == null ? void 0 : requestParameters.statusIn;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    if (ids) {
      ids.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "ids");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, created, "created");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdGt, "created_gt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdLt, "created_lt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdGte, "created_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdLte, "created_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, language, "language");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startingAfter, "starting_after");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endingBefore, "ending_before");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, withTotal, "with_total");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, activatedAt, "activated_at");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, activatedAtGte, "activated_at_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, activatedAtLte, "activated_at_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, cyclist, "cyclist");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, forfait, "forfait");
    if (forfaitIn) {
      forfaitIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "forfait_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, organization, "organization");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, status, "status");
    if (statusIn) {
      statusIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "status_in");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/abonnements`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  retrieveAbonnement(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveAbonnement.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling retrieveAbonnement.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const language = requestParameters == null ? void 0 : requestParameters.language;
    const valid = requestParameters == null ? void 0 : requestParameters.valid;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, language, "language");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, valid, "valid");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/abonnements/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_AbonnementsService.\u0275fac = function AbonnementsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbonnementsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_AbonnementsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AbonnementsService, factory: _AbonnementsService.\u0275fac, providedIn: "root" });
var AbonnementsService = _AbonnementsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbonnementsService, [{
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

// src/api-cyclist/api/cards.service.ts
var _CardsService = class _CardsService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  createSetupIntent(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling createSetupIntent.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const createSetupIntentRequest = requestParameters == null ? void 0 : requestParameters.createSetupIntentRequest;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/cards/create_setup_intent`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body: createSetupIntentRequest,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  deleteCard(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling deleteCard.");
    }
    const cyclist = requestParameters == null ? void 0 : requestParameters.cyclist;
    if (cyclist === null || cyclist === void 0) {
      throw new Error("Required parameter cyclist was null or undefined when calling deleteCard.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling deleteCard.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/cards/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("delete", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  listCards(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling listCards.");
    }
    const cyclist = requestParameters == null ? void 0 : requestParameters.cyclist;
    if (cyclist === null || cyclist === void 0) {
      throw new Error("Required parameter cyclist was null or undefined when calling listCards.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/cards`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  updateCard(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling updateCard.");
    }
    const cyclist = requestParameters == null ? void 0 : requestParameters.cyclist;
    if (cyclist === null || cyclist === void 0) {
      throw new Error("Required parameter cyclist was null or undefined when calling updateCard.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling updateCard.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/cards/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_CardsService.\u0275fac = function CardsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CardsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_CardsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CardsService, factory: _CardsService.\u0275fac, providedIn: "root" });
var CardsService = _CardsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardsService, [{
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

// src/api-cyclist/api/default.service.ts
var _DefaultService = class _DefaultService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  tasksPost(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling tasksPost.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const tasksPostRequest = requestParameters == null ? void 0 : requestParameters.tasksPostRequest;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/tasks`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body: tasksPostRequest,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_DefaultService.\u0275fac = function DefaultService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_DefaultService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DefaultService, factory: _DefaultService.\u0275fac, providedIn: "root" });
var DefaultService = _DefaultService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultService, [{
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

// src/api-cyclist/api/devices.service.ts
var _DevicesService = class _DevicesService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  subscribeDevice(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling subscribeDevice.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const subscribeDeviceRequest = requestParameters == null ? void 0 : requestParameters.subscribeDeviceRequest;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/devices`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body: subscribeDeviceRequest,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  unsubscribeDevice(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling unsubscribeDevice.");
    }
    const token = requestParameters == null ? void 0 : requestParameters.token;
    if (token === null || token === void 0) {
      throw new Error("Required parameter token was null or undefined when calling unsubscribeDevice.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/devices/${this.configuration.encodeParam({ name: "token", value: token, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("delete", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_DevicesService.\u0275fac = function DevicesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DevicesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_DevicesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DevicesService, factory: _DevicesService.\u0275fac, providedIn: "root" });
var DevicesService = _DevicesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevicesService, [{
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

// src/api-cyclist/api/docks.service.ts
var _DocksService = class _DocksService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  listDock(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling listDock.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const ids = requestParameters == null ? void 0 : requestParameters.ids;
    const limit = requestParameters == null ? void 0 : requestParameters.limit;
    const startingAfter = requestParameters == null ? void 0 : requestParameters.startingAfter;
    const endingBefore = requestParameters == null ? void 0 : requestParameters.endingBefore;
    const withTotal = requestParameters == null ? void 0 : requestParameters.withTotal;
    const program2 = requestParameters == null ? void 0 : requestParameters.program2;
    const station = requestParameters == null ? void 0 : requestParameters.station;
    const status = requestParameters == null ? void 0 : requestParameters.status;
    const statusIn = requestParameters == null ? void 0 : requestParameters.statusIn;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    if (ids) {
      ids.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "ids");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startingAfter, "starting_after");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endingBefore, "ending_before");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, withTotal, "with_total");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, program2, "program");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, station, "station");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, status, "status");
    if (statusIn) {
      statusIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "status_in");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/docks`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  retrieveDock(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveDock.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling retrieveDock.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/docks/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_DocksService.\u0275fac = function DocksService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocksService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_DocksService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DocksService, factory: _DocksService.\u0275fac, providedIn: "root" });
var DocksService = _DocksService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocksService, [{
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

// src/api-cyclist/api/fAQ.service.ts
var _FAQService = class _FAQService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  retrieveFaq(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveFaq.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const language = requestParameters == null ? void 0 : requestParameters.language;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, language, "language");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/faq`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_FAQService.\u0275fac = function FAQService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FAQService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_FAQService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FAQService, factory: _FAQService.\u0275fac, providedIn: "root" });
var FAQService = _FAQService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FAQService, [{
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

// src/api-cyclist/api/factures.service.ts
var _FacturesService = class _FacturesService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  listFacture(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling listFacture.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const created = requestParameters == null ? void 0 : requestParameters.created;
    const createdGt = requestParameters == null ? void 0 : requestParameters.createdGt;
    const createdLt = requestParameters == null ? void 0 : requestParameters.createdLt;
    const createdGte = requestParameters == null ? void 0 : requestParameters.createdGte;
    const createdLte = requestParameters == null ? void 0 : requestParameters.createdLte;
    const limit = requestParameters == null ? void 0 : requestParameters.limit;
    const startingAfter = requestParameters == null ? void 0 : requestParameters.startingAfter;
    const endingBefore = requestParameters == null ? void 0 : requestParameters.endingBefore;
    const abonnement = requestParameters == null ? void 0 : requestParameters.abonnement;
    const amount = requestParameters == null ? void 0 : requestParameters.amount;
    const amountGt = requestParameters == null ? void 0 : requestParameters.amountGt;
    const amountLt = requestParameters == null ? void 0 : requestParameters.amountLt;
    const amountGte = requestParameters == null ? void 0 : requestParameters.amountGte;
    const amountLte = requestParameters == null ? void 0 : requestParameters.amountLte;
    const closed = requestParameters == null ? void 0 : requestParameters.closed;
    const cyclist = requestParameters == null ? void 0 : requestParameters.cyclist;
    const organization = requestParameters == null ? void 0 : requestParameters.organization;
    const pastDue = requestParameters == null ? void 0 : requestParameters.pastDue;
    const status = requestParameters == null ? void 0 : requestParameters.status;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, created, "created");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdGt, "created_gt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdLt, "created_lt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdGte, "created_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdLte, "created_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startingAfter, "starting_after");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endingBefore, "ending_before");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, abonnement, "abonnement");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, amount, "amount");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, amountGt, "amount_gt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, amountLt, "amount_lt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, amountGte, "amount_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, amountLte, "amount_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, closed, "closed");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, cyclist, "cyclist");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, organization, "organization");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, pastDue, "past_due");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, status, "status");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/factures`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  retrieveFacture(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveFacture.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling retrieveFacture.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/factures/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  upcomingFactures(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling upcomingFactures.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/factures/upcoming`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_FacturesService.\u0275fac = function FacturesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FacturesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_FacturesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FacturesService, factory: _FacturesService.\u0275fac, providedIn: "root" });
var FacturesService = _FacturesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacturesService, [{
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

// src/api-cyclist/api/fileUpload.service.ts
var _FileUploadService = class _FileUploadService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  filesUpload(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/files`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_FileUploadService.\u0275fac = function FileUploadService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FileUploadService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_FileUploadService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FileUploadService, factory: _FileUploadService.\u0275fac, providedIn: "root" });
var FileUploadService = _FileUploadService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadService, [{
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

// src/api-cyclist/api/forfaits.service.ts
var _ForfaitsService = class _ForfaitsService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  listForfait(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling listForfait.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const ids = requestParameters == null ? void 0 : requestParameters.ids;
    const language = requestParameters == null ? void 0 : requestParameters.language;
    const limit = requestParameters == null ? void 0 : requestParameters.limit;
    const startingAfter = requestParameters == null ? void 0 : requestParameters.startingAfter;
    const endingBefore = requestParameters == null ? void 0 : requestParameters.endingBefore;
    const withTotal = requestParameters == null ? void 0 : requestParameters.withTotal;
    const organization = requestParameters == null ? void 0 : requestParameters.organization;
    const status = requestParameters == null ? void 0 : requestParameters.status;
    const statusIn = requestParameters == null ? void 0 : requestParameters.statusIn;
    const type = requestParameters == null ? void 0 : requestParameters.type;
    const typeIn = requestParameters == null ? void 0 : requestParameters.typeIn;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    if (ids) {
      ids.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "ids");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, language, "language");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startingAfter, "starting_after");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endingBefore, "ending_before");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, withTotal, "with_total");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, organization, "organization");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, status, "status");
    if (statusIn) {
      statusIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "status_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, type, "type");
    if (typeIn) {
      typeIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "type_in");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/forfaits`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  retrieveForfait(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveForfait.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling retrieveForfait.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const language = requestParameters == null ? void 0 : requestParameters.language;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, language, "language");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/forfaits/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_ForfaitsService.\u0275fac = function ForfaitsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForfaitsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_ForfaitsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ForfaitsService, factory: _ForfaitsService.\u0275fac, providedIn: "root" });
var ForfaitsService = _ForfaitsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForfaitsService, [{
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

// src/api-cyclist/api/kYC.service.ts
var _KYCService = class _KYCService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  createKycDocument(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const createKycDocumentRequest = requestParameters == null ? void 0 : requestParameters.createKycDocumentRequest;
    let localVarHeaders = this.defaultHeaders;
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/kycs`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body: createKycDocumentRequest,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  uploadFile(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling uploadFile.");
    }
    const uploadFileRequest = requestParameters == null ? void 0 : requestParameters.uploadFileRequest;
    let localVarHeaders = this.defaultHeaders;
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/kycs/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}/upload`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body: uploadFileRequest,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_KYCService.\u0275fac = function KYCService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _KYCService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_KYCService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KYCService, factory: _KYCService.\u0275fac, providedIn: "root" });
var KYCService = _KYCService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KYCService, [{
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

// src/api-cyclist/api/memberships.service.ts
var _MembershipsService = class _MembershipsService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  removeMemberOrganization(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling removeMemberOrganization.");
    }
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling removeMemberOrganization.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/organizations/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}/members`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("delete", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_MembershipsService.\u0275fac = function MembershipsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MembershipsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_MembershipsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MembershipsService, factory: _MembershipsService.\u0275fac, providedIn: "root" });
var MembershipsService = _MembershipsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MembershipsService, [{
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

// src/api-cyclist/api/news.service.ts
var _NewsService = class _NewsService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  listNew(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling listNew.");
    }
    const program2 = requestParameters == null ? void 0 : requestParameters.program2;
    if (program2 === null || program2 === void 0) {
      throw new Error("Required parameter program2 was null or undefined when calling listNew.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const ids = requestParameters == null ? void 0 : requestParameters.ids;
    const language = requestParameters == null ? void 0 : requestParameters.language;
    const limit = requestParameters == null ? void 0 : requestParameters.limit;
    const startingAfter = requestParameters == null ? void 0 : requestParameters.startingAfter;
    const endingBefore = requestParameters == null ? void 0 : requestParameters.endingBefore;
    const withTotal = requestParameters == null ? void 0 : requestParameters.withTotal;
    const status = requestParameters == null ? void 0 : requestParameters.status;
    const priority = requestParameters == null ? void 0 : requestParameters.priority;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    if (ids) {
      ids.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "ids");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, language, "language");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startingAfter, "starting_after");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endingBefore, "ending_before");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, withTotal, "with_total");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, status, "status");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, priority, "priority");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, program2, "program");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/news`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_NewsService.\u0275fac = function NewsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_NewsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NewsService, factory: _NewsService.\u0275fac, providedIn: "root" });
var NewsService = _NewsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewsService, [{
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

// src/api-cyclist/api/passes.service.ts
var _PassesService = class _PassesService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  associatePass(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling associatePass.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const associatePassRequest = requestParameters == null ? void 0 : requestParameters.associatePassRequest;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/pass`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body: associatePassRequest,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  disassociatePass(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling disassociatePass.");
    }
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling disassociatePass.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const program2 = requestParameters == null ? void 0 : requestParameters.program2;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, program2, "program");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/pass/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("delete", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  listPass(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling listPass.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const ids = requestParameters == null ? void 0 : requestParameters.ids;
    const limit = requestParameters == null ? void 0 : requestParameters.limit;
    const startingAfter = requestParameters == null ? void 0 : requestParameters.startingAfter;
    const endingBefore = requestParameters == null ? void 0 : requestParameters.endingBefore;
    const withTotal = requestParameters == null ? void 0 : requestParameters.withTotal;
    const disabled = requestParameters == null ? void 0 : requestParameters.disabled;
    const model = requestParameters == null ? void 0 : requestParameters.model;
    const modelIn = requestParameters == null ? void 0 : requestParameters.modelIn;
    const passId = requestParameters == null ? void 0 : requestParameters.passId;
    const program2 = requestParameters == null ? void 0 : requestParameters.program2;
    const type = requestParameters == null ? void 0 : requestParameters.type;
    const typeIn = requestParameters == null ? void 0 : requestParameters.typeIn;
    const user = requestParameters == null ? void 0 : requestParameters.user;
    const uid = requestParameters == null ? void 0 : requestParameters.uid;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    if (ids) {
      ids.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "ids");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startingAfter, "starting_after");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endingBefore, "ending_before");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, withTotal, "with_total");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, disabled, "disabled");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, model, "model");
    if (modelIn) {
      modelIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "model_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, passId, "pass_id");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, program2, "program");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, type, "type");
    if (typeIn) {
      typeIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "type_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, user, "user");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, uid, "uid");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/pass`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  retrievePass(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling retrievePass.");
    }
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrievePass.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const program2 = requestParameters == null ? void 0 : requestParameters.program2;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, program2, "program");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/pass/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_PassesService.\u0275fac = function PassesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PassesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_PassesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PassesService, factory: _PassesService.\u0275fac, providedIn: "root" });
var PassesService = _PassesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PassesService, [{
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

// src/api-cyclist/api/programs.service.ts
var _ProgramsService = class _ProgramsService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  retrieveProgram(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveProgram.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const language = requestParameters == null ? void 0 : requestParameters.language;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, language, "language");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/programs`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_ProgramsService.\u0275fac = function ProgramsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProgramsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_ProgramsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProgramsService, factory: _ProgramsService.\u0275fac, providedIn: "root" });
var ProgramsService = _ProgramsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgramsService, [{
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

// src/api-cyclist/api/registrations.service.ts
var _RegistrationsService = class _RegistrationsService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  retrieveRegistration(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveRegistration.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/cyclists/registrations`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  updateRegistration(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling updateRegistration.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/cyclists/registrations`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_RegistrationsService.\u0275fac = function RegistrationsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegistrationsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_RegistrationsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RegistrationsService, factory: _RegistrationsService.\u0275fac, providedIn: "root" });
var RegistrationsService = _RegistrationsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrationsService, [{
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

// src/api-cyclist/api/remises.service.ts
var _RemisesService = class _RemisesService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  createRemise(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling createRemise.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const createRemiseRequest = requestParameters == null ? void 0 : requestParameters.createRemiseRequest;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/remises`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body: createRemiseRequest,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_RemisesService.\u0275fac = function RemisesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RemisesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_RemisesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RemisesService, factory: _RemisesService.\u0275fac, providedIn: "root" });
var RemisesService = _RemisesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemisesService, [{
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

// src/api-cyclist/api/search.service.ts
var _SearchService = class _SearchService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  search(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling search.");
    }
    const query = requestParameters == null ? void 0 : requestParameters.query;
    if (query === null || query === void 0) {
      throw new Error("Required parameter query was null or undefined when calling search.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, query, "query");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/search`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_SearchService.\u0275fac = function SearchService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_SearchService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SearchService, factory: _SearchService.\u0275fac, providedIn: "root" });
var SearchService = _SearchService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchService, [{
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

// src/api-cyclist/api/stations.service.ts
var _StationsService = class _StationsService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  listStation(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling listStation.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const ids = requestParameters == null ? void 0 : requestParameters.ids;
    const limit = requestParameters == null ? void 0 : requestParameters.limit;
    const startingAfter = requestParameters == null ? void 0 : requestParameters.startingAfter;
    const endingBefore = requestParameters == null ? void 0 : requestParameters.endingBefore;
    const withTotal = requestParameters == null ? void 0 : requestParameters.withTotal;
    const cyclist = requestParameters == null ? void 0 : requestParameters.cyclist;
    const electrical = requestParameters == null ? void 0 : requestParameters.electrical;
    const favorite = requestParameters == null ? void 0 : requestParameters.favorite;
    const latitude = requestParameters == null ? void 0 : requestParameters.latitude;
    const longitude = requestParameters == null ? void 0 : requestParameters.longitude;
    const option = requestParameters == null ? void 0 : requestParameters.option;
    const program2 = requestParameters == null ? void 0 : requestParameters.program2;
    const score = requestParameters == null ? void 0 : requestParameters.score;
    const scoreGte = requestParameters == null ? void 0 : requestParameters.scoreGte;
    const scoreLte = requestParameters == null ? void 0 : requestParameters.scoreLte;
    const status = requestParameters == null ? void 0 : requestParameters.status;
    const statusIn = requestParameters == null ? void 0 : requestParameters.statusIn;
    const user = requestParameters == null ? void 0 : requestParameters.user;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    if (ids) {
      ids.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "ids");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startingAfter, "starting_after");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endingBefore, "ending_before");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, withTotal, "with_total");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, cyclist, "cyclist");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, electrical, "electrical");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, favorite, "favorite");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, latitude, "latitude");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, longitude, "longitude");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, option, "option");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, program2, "program");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, score, "score");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, scoreGte, "score_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, scoreLte, "score_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, status, "status");
    if (statusIn) {
      statusIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "status_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, user, "user");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/stations`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  retrieveStation(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveStation.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling retrieveStation.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const cyclist = requestParameters == null ? void 0 : requestParameters.cyclist;
    const user = requestParameters == null ? void 0 : requestParameters.user;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, cyclist, "cyclist");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, user, "user");
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/stations/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  toggleStationFavorite(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling toggleStationFavorite.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling toggleStationFavorite.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/stations/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}/favorite`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_StationsService.\u0275fac = function StationsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StationsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_StationsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StationsService, factory: _StationsService.\u0275fac, providedIn: "root" });
var StationsService = _StationsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StationsService, [{
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

// src/api-cyclist/api/subscriptions.service.ts
var _SubscriptionsService = class _SubscriptionsService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  createSubscription(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling createSubscription.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const createSubscriptionRequest = requestParameters == null ? void 0 : requestParameters.createSubscriptionRequest;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/subscriptions`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body: createSubscriptionRequest,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_SubscriptionsService.\u0275fac = function SubscriptionsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SubscriptionsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_SubscriptionsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SubscriptionsService, factory: _SubscriptionsService.\u0275fac, providedIn: "root" });
var SubscriptionsService = _SubscriptionsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionsService, [{
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

// src/api-cyclist/api/terminationRequests.service.ts
var _TerminationRequestsService = class _TerminationRequestsService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  markTripForTermination(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling markTripForTermination.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling markTripForTermination.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/trips/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}/mark_for_termination`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  updateTerminationRequest(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling updateTerminationRequest.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling updateTerminationRequest.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/trips/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}/update_termination_request`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_TerminationRequestsService.\u0275fac = function TerminationRequestsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TerminationRequestsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_TerminationRequestsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TerminationRequestsService, factory: _TerminationRequestsService.\u0275fac, providedIn: "root" });
var TerminationRequestsService = _TerminationRequestsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TerminationRequestsService, [{
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

// src/api-cyclist/api/terms.service.ts
var _TermsService = class _TermsService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  retrieveTerms(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveTerms.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const language = requestParameters == null ? void 0 : requestParameters.language;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, language, "language");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/terms`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_TermsService.\u0275fac = function TermsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TermsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_TermsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TermsService, factory: _TermsService.\u0275fac, providedIn: "root" });
var TermsService = _TermsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TermsService, [{
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

// src/api-cyclist/api/transactionsDeSolde.service.ts
var _TransactionsDeSoldeService = class _TransactionsDeSoldeService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  listBalanceTransaction(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling listBalanceTransaction.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const limit = requestParameters == null ? void 0 : requestParameters.limit;
    const startingAfter = requestParameters == null ? void 0 : requestParameters.startingAfter;
    const endingBefore = requestParameters == null ? void 0 : requestParameters.endingBefore;
    const withTotal = requestParameters == null ? void 0 : requestParameters.withTotal;
    const cyclist = requestParameters == null ? void 0 : requestParameters.cyclist;
    const type = requestParameters == null ? void 0 : requestParameters.type;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startingAfter, "starting_after");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endingBefore, "ending_before");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, withTotal, "with_total");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, cyclist, "cyclist");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, type, "type");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/balance_transactions`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  retrieveBalanceTransaction(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveBalanceTransaction.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling retrieveBalanceTransaction.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/balance_transactions/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_TransactionsDeSoldeService.\u0275fac = function TransactionsDeSoldeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TransactionsDeSoldeService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_TransactionsDeSoldeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TransactionsDeSoldeService, factory: _TransactionsDeSoldeService.\u0275fac, providedIn: "root" });
var TransactionsDeSoldeService = _TransactionsDeSoldeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransactionsDeSoldeService, [{
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

// src/api-cyclist/api/trips.service.ts
var _TripsService = class _TripsService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  createTrip(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling createTrip.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/trips`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  listTrip(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling listTrip.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const ids = requestParameters == null ? void 0 : requestParameters.ids;
    const limit = requestParameters == null ? void 0 : requestParameters.limit;
    const startingAfter = requestParameters == null ? void 0 : requestParameters.startingAfter;
    const endingBefore = requestParameters == null ? void 0 : requestParameters.endingBefore;
    const withTotal = requestParameters == null ? void 0 : requestParameters.withTotal;
    const created = requestParameters == null ? void 0 : requestParameters.created;
    const createdGt = requestParameters == null ? void 0 : requestParameters.createdGt;
    const createdLt = requestParameters == null ? void 0 : requestParameters.createdLt;
    const createdGte = requestParameters == null ? void 0 : requestParameters.createdGte;
    const createdLte = requestParameters == null ? void 0 : requestParameters.createdLte;
    const agent = requestParameters == null ? void 0 : requestParameters.agent;
    const agentRole = requestParameters == null ? void 0 : requestParameters.agentRole;
    const agentRoleIn = requestParameters == null ? void 0 : requestParameters.agentRoleIn;
    const amount = requestParameters == null ? void 0 : requestParameters.amount;
    const amountGte = requestParameters == null ? void 0 : requestParameters.amountGte;
    const amountLte = requestParameters == null ? void 0 : requestParameters.amountLte;
    const cyclist = requestParameters == null ? void 0 : requestParameters.cyclist;
    const cyclistRole = requestParameters == null ? void 0 : requestParameters.cyclistRole;
    const cyclistRoleIn = requestParameters == null ? void 0 : requestParameters.cyclistRoleIn;
    const distance = requestParameters == null ? void 0 : requestParameters.distance;
    const distanceGte = requestParameters == null ? void 0 : requestParameters.distanceGte;
    const distanceLte = requestParameters == null ? void 0 : requestParameters.distanceLte;
    const endRegion = requestParameters == null ? void 0 : requestParameters.endRegion;
    const endRegionIn = requestParameters == null ? void 0 : requestParameters.endRegionIn;
    const endStation = requestParameters == null ? void 0 : requestParameters.endStation;
    const endStationIn = requestParameters == null ? void 0 : requestParameters.endStationIn;
    const endTimestamp = requestParameters == null ? void 0 : requestParameters.endTimestamp;
    const endTimestampGte = requestParameters == null ? void 0 : requestParameters.endTimestampGte;
    const endTimestampLte = requestParameters == null ? void 0 : requestParameters.endTimestampLte;
    const endTimestampGt = requestParameters == null ? void 0 : requestParameters.endTimestampGt;
    const endTimestampLt = requestParameters == null ? void 0 : requestParameters.endTimestampLt;
    const forfait = requestParameters == null ? void 0 : requestParameters.forfait;
    const forfaitIn = requestParameters == null ? void 0 : requestParameters.forfaitIn;
    const organization = requestParameters == null ? void 0 : requestParameters.organization;
    const program2 = requestParameters == null ? void 0 : requestParameters.program2;
    const startRegion = requestParameters == null ? void 0 : requestParameters.startRegion;
    const startRegionIn = requestParameters == null ? void 0 : requestParameters.startRegionIn;
    const startStation = requestParameters == null ? void 0 : requestParameters.startStation;
    const startStationIn = requestParameters == null ? void 0 : requestParameters.startStationIn;
    const startTimestamp = requestParameters == null ? void 0 : requestParameters.startTimestamp;
    const startTimestampGte = requestParameters == null ? void 0 : requestParameters.startTimestampGte;
    const startTimestampLte = requestParameters == null ? void 0 : requestParameters.startTimestampLte;
    const startTimestampGt = requestParameters == null ? void 0 : requestParameters.startTimestampGt;
    const startTimestampLt = requestParameters == null ? void 0 : requestParameters.startTimestampLt;
    const status = requestParameters == null ? void 0 : requestParameters.status;
    const statusIn = requestParameters == null ? void 0 : requestParameters.statusIn;
    const vehicule = requestParameters == null ? void 0 : requestParameters.vehicule;
    const vehiculeIn = requestParameters == null ? void 0 : requestParameters.vehiculeIn;
    const user = requestParameters == null ? void 0 : requestParameters.user;
    const userRole = requestParameters == null ? void 0 : requestParameters.userRole;
    const userRoleIn = requestParameters == null ? void 0 : requestParameters.userRoleIn;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    if (ids) {
      ids.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "ids");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startingAfter, "starting_after");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endingBefore, "ending_before");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, withTotal, "with_total");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, created, "created");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdGt, "created_gt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdLt, "created_lt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdGte, "created_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, createdLte, "created_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, agent, "agent");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, agentRole, "agent_role");
    if (agentRoleIn) {
      agentRoleIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "agent_role_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, amount, "amount");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, amountGte, "amount_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, amountLte, "amount_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, cyclist, "cyclist");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, cyclistRole, "cyclist_role");
    if (cyclistRoleIn) {
      cyclistRoleIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "cyclist_role_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, distance, "distance");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, distanceGte, "distance_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, distanceLte, "distance_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endRegion, "end_region");
    if (endRegionIn) {
      endRegionIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "end_region_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endStation, "end_station");
    if (endStationIn) {
      endStationIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "end_station_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endTimestamp, "end_timestamp");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endTimestampGte, "end_timestamp_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endTimestampLte, "end_timestamp_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endTimestampGt, "end_timestamp_gt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endTimestampLt, "end_timestamp_lt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, forfait, "forfait");
    if (forfaitIn) {
      forfaitIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "forfait_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, organization, "organization");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, program2, "program");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startRegion, "start_region");
    if (startRegionIn) {
      startRegionIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "start_region_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startStation, "start_station");
    if (startStationIn) {
      startStationIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "start_station_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startTimestamp, "start_timestamp");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startTimestampGte, "start_timestamp_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startTimestampLte, "start_timestamp_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startTimestampGt, "start_timestamp_gt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startTimestampLt, "start_timestamp_lt");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, status, "status");
    if (statusIn) {
      statusIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "status_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, vehicule, "vehicule");
    if (vehiculeIn) {
      vehiculeIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "vehicule_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, user, "user");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, userRole, "user_role");
    if (userRoleIn) {
      userRoleIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "user_role_in");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/trips`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  pauseTrip(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling pauseTrip.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/pony/trips/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}/pause`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  pauseTrip_1(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling pauseTrip_1.");
    }
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling pauseTrip_1.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/trips/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}/pause`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  recommendVehicule(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling recommendVehicule.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling recommendVehicule.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/trips/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}/recommended`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  resumeTrip(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling resumeTrip.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const body = requestParameters == null ? void 0 : requestParameters.body;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
    const consumes = [
      "application/json"
    ];
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
    let localVarPath = `/pony/trips/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}/resume`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      body,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  resumeTrip_2(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling resumeTrip_2.");
    }
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling resumeTrip_2.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/trips/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}/resume`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  retrieveTrip(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveTrip.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling retrieveTrip.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/trips/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  unlockTrip(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling unlockTrip.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling unlockTrip.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/trips/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}/unlock`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("post", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_TripsService.\u0275fac = function TripsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TripsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_TripsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TripsService, factory: _TripsService.\u0275fac, providedIn: "root" });
var TripsService = _TripsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripsService, [{
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

// src/api-cyclist/api/zones.service.ts
var _ZonesService = class _ZonesService extends BaseService {
  constructor(httpClient, basePath, configuration) {
    super(basePath, configuration);
    this.httpClient = httpClient;
  }
  listZone(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling listZone.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    const ids = requestParameters == null ? void 0 : requestParameters.ids;
    const limit = requestParameters == null ? void 0 : requestParameters.limit;
    const startingAfter = requestParameters == null ? void 0 : requestParameters.startingAfter;
    const endingBefore = requestParameters == null ? void 0 : requestParameters.endingBefore;
    const withTotal = requestParameters == null ? void 0 : requestParameters.withTotal;
    const latitude = requestParameters == null ? void 0 : requestParameters.latitude;
    const longitude = requestParameters == null ? void 0 : requestParameters.longitude;
    const option = requestParameters == null ? void 0 : requestParameters.option;
    const program2 = requestParameters == null ? void 0 : requestParameters.program2;
    const score = requestParameters == null ? void 0 : requestParameters.score;
    const scoreGte = requestParameters == null ? void 0 : requestParameters.scoreGte;
    const scoreLte = requestParameters == null ? void 0 : requestParameters.scoreLte;
    const status = requestParameters == null ? void 0 : requestParameters.status;
    const statusIn = requestParameters == null ? void 0 : requestParameters.statusIn;
    const type = requestParameters == null ? void 0 : requestParameters.type;
    const typeIn = requestParameters == null ? void 0 : requestParameters.typeIn;
    const vehiculeType = requestParameters == null ? void 0 : requestParameters.vehiculeType;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    if (ids) {
      ids.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "ids");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, limit, "limit");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, startingAfter, "starting_after");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, endingBefore, "ending_before");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, withTotal, "with_total");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, latitude, "latitude");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, longitude, "longitude");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, option, "option");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, program2, "program");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, score, "score");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, scoreGte, "score_gte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, scoreLte, "score_lte");
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, status, "status");
    if (statusIn) {
      statusIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "status_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, type, "type");
    if (typeIn) {
      typeIn.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "type_in");
      });
    }
    localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, vehiculeType, "vehicule_type");
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/zones`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
  retrieveZone(requestParameters, observe = "body", reportProgress = false, options) {
    var _a, _b, _c;
    const program = requestParameters == null ? void 0 : requestParameters.program;
    if (program === null || program === void 0) {
      throw new Error("Required parameter program was null or undefined when calling retrieveZone.");
    }
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling retrieveZone.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    if (program !== void 0 && program !== null) {
      localVarHeaders = localVarHeaders.set("program", String(program));
    }
    const localVarHttpHeaderAcceptSelected = (_a = options == null ? void 0 : options.httpHeaderAccept) != null ? _a : this.configuration.selectHeaderAccept([
      "application/json"
    ]);
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    const localVarHttpContext = (_b = options == null ? void 0 : options.context) != null ? _b : new HttpContext();
    const localVarTransferCache = (_c = options == null ? void 0 : options.transferCache) != null ? _c : true;
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
    let localVarPath = `/zones/${this.configuration.encodeParam({ name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: void 0 })}`;
    const { basePath, withCredentials } = this.configuration;
    return this.httpClient.request("get", `${basePath}${localVarPath}`, __spreadProps(__spreadValues({
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_
    }, withCredentials ? { withCredentials } : {}), {
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    }));
  }
};
_ZonesService.\u0275fac = function ZonesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ZonesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_ZonesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ZonesService, factory: _ZonesService.\u0275fac, providedIn: "root" });
var ZonesService = _ZonesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZonesService, [{
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

// src/api-cyclist/api.module.ts
var _ApiModule = class _ApiModule {
  static forRoot(configurationFactory) {
    return {
      ngModule: _ApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }]
    };
  }
  constructor(parentModule, http) {
    if (parentModule) {
      throw new Error("ApiModule is already loaded. Import in your base AppModule only.");
    }
    if (!http) {
      throw new Error("You need to import the HttpClientModule in your AppModule! \nSee also https://github.com/angular/angular/issues/20575");
    }
  }
};
_ApiModule.\u0275fac = function ApiModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApiModule)(\u0275\u0275inject(_ApiModule, 12), \u0275\u0275inject(HttpClient, 8));
};
_ApiModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ApiModule });
_ApiModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var ApiModule = _ApiModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiModule, [{
    type: NgModule,
    args: [{
      imports: [],
      declarations: [],
      exports: [],
      providers: []
    }]
  }], () => [{ type: ApiModule, decorators: [{
    type: Optional
  }, {
    type: SkipSelf
  }] }, { type: HttpClient, decorators: [{
    type: Optional
  }] }], null);
})();

// src/app/services/utils/subscription-process.service.ts
var _SubscriptionProcessService = class _SubscriptionProcessService {
  constructor(storage) {
    this.storage = storage;
    this.currentProcess = new BehaviorSubject(null);
    this.initFromStorage();
  }
  // Méthodes d'initialisation et de gestion du stockage
  initFromStorage() {
    return __async(this, null, function* () {
      const stored = yield this.storage.get(_SubscriptionProcessService.STORAGE_KEY);
      if (stored) {
        this.currentProcess.next(stored);
      }
    });
  }
  // Méthodes de gestion du processus d'abonnement
  startProcess(forfait, reduction) {
    return __async(this, null, function* () {
      const process = {
        forfait,
        startedAt: Date.now(),
        reduction: reduction && reduction.length > 0 ? reduction : null,
        currentStep: "forfait"
      };
      yield this.storage.set(_SubscriptionProcessService.STORAGE_KEY, process);
      this.currentProcess.next(process);
    });
  }
  // Méthodes de mise à jour
  updateStep(step) {
    return __async(this, null, function* () {
      const current = this.currentProcess.value;
      if (current) {
        const updated = __spreadProps(__spreadValues({}, current), { currentStep: step });
        yield this.storage.set(_SubscriptionProcessService.STORAGE_KEY, updated);
        this.currentProcess.next(updated);
      }
    });
  }
  updateSupportingDocuments(documents) {
    return __async(this, null, function* () {
      const current = this.currentProcess.value;
      if (current) {
        const updated = __spreadProps(__spreadValues({}, current), { supportingDocuments: documents });
        yield this.storage.set(_SubscriptionProcessService.STORAGE_KEY, updated);
        this.currentProcess.next(updated);
      }
    });
  }
  updateReduction(reduction) {
    return __async(this, null, function* () {
      const current = this.currentProcess.value;
      if (current) {
        if (reduction.length > 0) {
          const updated = __spreadProps(__spreadValues({}, current), { reduction });
          yield this.storage.set(_SubscriptionProcessService.STORAGE_KEY, updated);
          this.currentProcess.next(updated);
        } else {
          const updated = __spreadProps(__spreadValues({}, current), { reduction: null });
          yield this.storage.set(_SubscriptionProcessService.STORAGE_KEY, updated);
          this.currentProcess.next(updated);
        }
      } else {
        this.startProcess(null, reduction);
      }
    });
  }
  // Méthodes utilitaires
  clearProcess() {
    return __async(this, null, function* () {
      yield this.storage.remove(_SubscriptionProcessService.STORAGE_KEY);
      this.currentProcess.next(null);
    });
  }
  getCurrentProcess() {
    return this.currentProcess.asObservable();
  }
  // Méthodes de validation et de préparation des données
  hasForfaitSelected() {
    return __async(this, null, function* () {
      var _a;
      const process = this.currentProcess.value;
      return !!((_a = process == null ? void 0 : process.forfait) == null ? void 0 : _a.id);
    });
  }
  getCreateAbonnementPayload() {
    return __async(this, null, function* () {
      var _a;
      const process = this.currentProcess.value;
      if (!((_a = process == null ? void 0 : process.forfait) == null ? void 0 : _a.id))
        return null;
      return __spreadValues(__spreadValues({
        forfaitID: process.forfait.id
      }, process.reduction && { reduction: process.reduction }), process.supportingDocuments && {
        supporting_documents: process.supportingDocuments
      });
    });
  }
};
_SubscriptionProcessService.STORAGE_KEY = "subscription_process";
_SubscriptionProcessService.\u0275fac = function SubscriptionProcessService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SubscriptionProcessService)(\u0275\u0275inject(StorageService));
};
_SubscriptionProcessService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SubscriptionProcessService, factory: _SubscriptionProcessService.\u0275fac, providedIn: "root" });
var SubscriptionProcessService = _SubscriptionProcessService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionProcessService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: StorageService }], null);
})();

// src/api-cyclist/api/aPIAccount.service.ts
var _APIAccountService = class _APIAccountService {
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
  deleteMyUser(requestParameters, observe = "body", reportProgress = false, options) {
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    let localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === void 0) {
      const httpHeaderAccepts = ["application/json"];
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
    let localVarPath = `/users/me`;
    return this.httpClient.request("delete", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  retrieveMyUser(requestParameters, observe = "body", reportProgress = false, options) {
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const expand = requestParameters == null ? void 0 : requestParameters.expand;
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (expand) {
      expand.forEach((element) => {
        localVarQueryParameters = this.addToHttpParams(localVarQueryParameters, element, "expand");
      });
    }
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    let localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === void 0) {
      const httpHeaderAccepts = ["application/json"];
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
    let localVarPath = `/users/me`;
    return this.httpClient.request("get", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      params: localVarQueryParameters,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
};
_APIAccountService.\u0275fac = function APIAccountService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _APIAccountService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_APIAccountService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _APIAccountService, factory: _APIAccountService.\u0275fac, providedIn: "root" });
var APIAccountService = _APIAccountService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(APIAccountService, [{
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

// src/app/services/api-wrappers/account.service.ts
var _AccountService = class _AccountService {
  constructor(CyclistsService2, accountService, subscriptionProcess, registrationsService, errorHandler, toastService, translateService) {
    this.CyclistsService = CyclistsService2;
    this.accountService = accountService;
    this.subscriptionProcess = subscriptionProcess;
    this.registrationsService = registrationsService;
    this.errorHandler = errorHandler;
    this.toastService = toastService;
    this.translateService = translateService;
    this.cyclistState = signal({
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    });
  }
  loadCyclist() {
    return __async(this, null, function* () {
      yield this.registrationsService.retrieveRegistration({
        program: environment.program,
        liveMode: environment.production
      }).toPromise();
      return new Promise((resolve) => {
        this.CyclistsService.retrieveCyclist({
          program: environment.program,
          currentProgram: environment.program,
          expand: [
            "registrations.customer,kyc_documents,registrations.grace_period_usage,registrations.memberships"
          ],
          liveMode: environment.production
        }).subscribe({
          next: (cyclist) => {
            this.checkCyclistAccount(cyclist);
            resolve(cyclist);
          },
          error: (error) => __async(this, null, function* () {
            this.cyclistState.set({
              state: "error",
              error,
              blocked_reasons: ["Error loading account"]
            });
            this.errorHandler.handleError(error);
            throw error;
          })
        });
      });
    });
  }
  deleteAccount() {
    return __async(this, null, function* () {
      const currentState = this.cyclistState();
      if (currentState.state !== "unknown" && currentState.state !== "error" && currentState.state !== "deletion_requested" && currentState.state !== "deleted") {
        this.accountService.deleteMyUser().subscribe({
          next: () => __async(this, null, function* () {
            if ("cyclist" in currentState) {
              if (currentState.state === "unconfirmed") {
                this.cyclistState.set({
                  state: "unconfirmed",
                  cyclist: currentState.cyclist,
                  blocked_reasons: currentState.blocked_reasons,
                  deletionRequested: true
                });
              } else {
                this.cyclistState.set({
                  state: "deletion_requested",
                  cyclist: currentState.cyclist,
                  blocked_reasons: ["Deletion requested"]
                });
              }
            }
            this.subscriptionProcess.clearProcess();
          }),
          error: (err) => __async(this, null, function* () {
            this.errorHandler.handleError(err);
            throw err;
          })
        });
      } else {
        this.toastService.createWithJustMessage(this.translateService.instant("generic.deletion_account_impossible"), ToastType.Error);
        throw new Error("Account is already deleted");
      }
    });
  }
  changeEmail(email) {
    return new Promise((resolve, reject) => {
      this.CyclistsService.changeCyclistEmail({
        changeCyclistEmailRequest: {
          email
        }
      }).subscribe({
        next: (cyclist) => {
          this.checkCyclistAccount(cyclist);
          this.toastService.createWithJustMessage(this.translateService.instant("settings.infos.email_changed"), ToastType.Success);
          resolve(cyclist);
        },
        error: (error) => {
          this.errorHandler.handleError(error);
          reject(error);
        }
      });
    });
  }
  /**
   * Gets the current cyclist if available, or throws an error if not
   * @returns The current cyclist
   * @throws Error if cyclist is not available
   */
  getCurrentCyclist() {
    const currentState = this.cyclistState();
    if (!("cyclist" in currentState)) {
      throw new Error("No cyclist available");
    }
    return currentState.cyclist;
  }
  /**
   * Updates the cyclist data while preserving the current state
   * @param cyclist The updated cyclist data
   */
  updateCyclistData(cyclist) {
    const currentState = this.cyclistState();
    if (currentState.state !== "unknown" && currentState.state !== "error") {
      this.cyclistState.set(__spreadProps(__spreadValues({}, currentState), {
        cyclist
      }));
    }
  }
  checkCyclistAccount(cyclist) {
    var _a;
    const currentState = this.cyclistState();
    const getFilteredBlockedReasons = (reasons) => reasons.filter((reason) => reason !== "Unknown account state");
    if ("blocked_reasons" in currentState) {
      switch (cyclist.status) {
        case "active":
          this.cyclistState.set({
            state: "active",
            cyclist,
            blocked_reasons: getFilteredBlockedReasons(currentState.blocked_reasons)
          });
          break;
        case "unconfirmed":
          this.cyclistState.set({
            state: "unconfirmed",
            cyclist,
            blocked_reasons: [
              ...getFilteredBlockedReasons(currentState.blocked_reasons),
              "Account not confirmed"
            ],
            deletionRequested: false
          });
          break;
        case "deleted":
          this.cyclistState.set({
            state: "deleted",
            cyclist,
            blocked_reasons: [
              ...getFilteredBlockedReasons(currentState.blocked_reasons),
              "Account deleted"
            ]
          });
          break;
        case "deletion_requested":
          this.cyclistState.set({
            state: "deletion_requested",
            cyclist,
            blocked_reasons: [
              ...getFilteredBlockedReasons(currentState.blocked_reasons),
              "Account deletion requested"
            ]
          });
          break;
        case "blocked":
          this.cyclistState.set({
            state: "blocked",
            cyclist,
            blocked_reasons: [
              ...getFilteredBlockedReasons(currentState.blocked_reasons),
              "Account blocked"
            ]
          });
          break;
        default:
          this.cyclistState.set({
            state: "unknown",
            blocked_reasons: [
              ...getFilteredBlockedReasons(currentState.blocked_reasons),
              "Unknown account state"
            ]
          });
          break;
      }
      if (((_a = cyclist.registrations) == null ? void 0 : _a.data[0].status) === "blocked") {
        this.cyclistState.set({
          state: "blocked",
          cyclist,
          blocked_reasons: [
            ...getFilteredBlockedReasons(currentState.blocked_reasons),
            "Account blocked"
          ]
        });
      }
    }
  }
  /**
   * Safely gets blocked reasons from the current cyclist state
   * External users bypass blocked reasons
   * @returns Array of blocked reasons, empty array if none exist or if user is external
   */
  getBlockedReasons() {
    const currentState = this.cyclistState();
    return "blocked_reasons" in currentState ? currentState.blocked_reasons : [];
  }
  /**
   * Checks if the cyclist has any blocked reasons
   * @returns true if there are blocked reasons, false otherwise
   */
  hasBlockedReasons() {
    return this.getBlockedReasons().length > 0;
  }
  /**
   * Checks if the cyclist has a specific blocked reason
   * @param reason The reason to check for
   * @returns true if the reason exists, false otherwise
   */
  hasBlockedReason(reason) {
    return this.getBlockedReasons().includes(reason);
  }
  addBlockedReason(reason) {
    var _a, _b, _c;
    const currentState = this.cyclistState();
    if ("cyclist" in currentState && (currentState.cyclist.role == "guest" || ((_c = (_b = (_a = currentState.cyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]) == null ? void 0 : _c.role) == "guest")) {
      return;
    }
    if ("blocked_reasons" in currentState && !currentState.blocked_reasons.includes(reason)) {
      this.cyclistState.set(__spreadProps(__spreadValues({}, currentState), {
        blocked_reasons: [...currentState.blocked_reasons, reason]
      }));
    }
  }
  removeBlockedReason(reason) {
    const currentState = this.cyclistState();
    if (currentState.state !== "unknown" && currentState.state !== "error" && "blocked_reasons" in currentState && currentState.blocked_reasons.includes(reason)) {
      const newReasons = currentState.blocked_reasons.filter((r) => r !== reason);
      this.cyclistState.set(__spreadProps(__spreadValues({}, currentState), {
        blocked_reasons: newReasons
      }));
    }
  }
  hasMissingPaymentMethodOrCgu() {
    var _a, _b, _c, _d, _e, _f;
    const cyclistState = this.cyclistState();
    if ("cyclist" in cyclistState && (cyclistState.cyclist.role == "guest" || ((_c = (_b = (_a = cyclistState.cyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]) == null ? void 0 : _c.role) == "guest")) {
      return false;
    }
    if (cyclistState.state !== "unknown" && cyclistState.state !== "error") {
      if (!((_d = cyclistState.cyclist.registrations) == null ? void 0 : _d.data[0].terms_validated) || !((_f = (_e = cyclistState.cyclist.registrations) == null ? void 0 : _e.data[0].customer) == null ? void 0 : _f.invoice_settings.default_payment_method)) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
  /**
   * Checks if the current user has requested account deletion
   * @returns true if deletion has been requested, false otherwise
   */
  hasRequestedDeletion() {
    const currentState = this.cyclistState();
    if (currentState.state === "deletion_requested") {
      return true;
    }
    if (currentState.state === "unconfirmed" && currentState.deletionRequested) {
      return true;
    }
    return false;
  }
};
_AccountService.\u0275fac = function AccountService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccountService)(\u0275\u0275inject(CyclistsService), \u0275\u0275inject(APIAccountService), \u0275\u0275inject(SubscriptionProcessService), \u0275\u0275inject(RegistrationsService), \u0275\u0275inject(ErrorHandlerService), \u0275\u0275inject(ToastService), \u0275\u0275inject(TranslateService));
};
_AccountService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccountService, factory: _AccountService.\u0275fac, providedIn: "root" });
var AccountService = _AccountService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: CyclistsService }, { type: APIAccountService }, { type: SubscriptionProcessService }, { type: RegistrationsService }, { type: ErrorHandlerService }, { type: ToastService }, { type: TranslateService }], null);
})();

export {
  BASE_PATH,
  CustomHttpParameterCodec,
  Configuration,
  AbonnementsService,
  CardsService,
  CyclistsService,
  DefaultService,
  DevicesService,
  FAQService,
  FacturesService,
  FileUploadService,
  ForfaitsService,
  KYCService,
  NewsService,
  NotificationPreferencesService,
  PassesService,
  ProgramsService,
  RegistrationsService,
  RemisesService,
  SearchService,
  StationsService,
  TerminationRequestsService,
  TermsService,
  TransactionsDeSoldeService,
  TripsService,
  VehiculesService,
  ZonesService,
  SubscriptionProcessService,
  AccountService
};
//# sourceMappingURL=chunk-5KPTYQ6O.js.map
