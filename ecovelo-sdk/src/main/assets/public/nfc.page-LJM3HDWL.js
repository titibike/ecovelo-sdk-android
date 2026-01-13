import {
  NfcService
} from "./chunk-BKZUDKHO.js";
import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-7GZOXTNY.js";
import "./chunk-RK7YL5P5.js";
import "./chunk-IBT2NAXJ.js";
import "./chunk-NHPV6IFO.js";
import "./chunk-YSCBVZBE.js";
import "./chunk-6J5UKKBN.js";
import "./chunk-RYICOSCB.js";
import "./chunk-FOJAXRYS.js";
import "./chunk-Z4RNZNYE.js";
import {
  addIcons,
  idCardOutline,
  trashOutline
} from "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService
} from "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonProgressBar,
  IonRefresher,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonSkeletonText,
  IonText,
  IonThumbnail,
  JsonPipe,
  LoadingController,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  PatternValidator,
  RequiredValidator,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UANRONUE.js";
import "./chunk-JBNXL77H.js";
import "./chunk-KQEJHESJ.js";
import "./chunk-KGBWUDTS.js";
import "./chunk-HYH3NCU4.js";
import "./chunk-DJK765JH.js";
import "./chunk-MCANDFRG.js";
import "./chunk-3T6NUUZ7.js";
import "./chunk-VSCHB6XS.js";
import "./chunk-LHYYZWFK.js";
import "./chunk-2HURGHOF.js";
import "./chunk-WMICZ6Q4.js";
import "./chunk-PWUDMNGE.js";
import "./chunk-EV4ZQC67.js";
import "./chunk-7OBOYUXW.js";
import "./chunk-34HBWEZ3.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/pages/account/nfc/nfc.page.ts
function NfcPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-progress-bar", 1);
  }
}
function NfcPage_Conditional_6_ion_thumbnail_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-thumbnail", 19);
    \u0275\u0275element(1, "img", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.newPassState.model.picture, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(2, 2, "nfc.card_image"));
  }
}
function NfcPage_Conditional_6_ion_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 21);
  }
}
function NfcPage_Conditional_6_ion_select_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const model_r3 = ctx.$implicit;
    \u0275\u0275property("value", model_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(model_r3.model);
  }
}
function NfcPage_Conditional_6_ion_text_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("color", ctx_r1.newPassState.newPass.valid === void 0 ? "dark" : ctx_r1.newPassState.newPass.valid ? "success" : "danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.newPassState.model.prefix);
  }
}
function NfcPage_Conditional_6_ion_text_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("color", ctx_r1.newPassState.newPass.valid === void 0 ? "dark" : ctx_r1.newPassState.newPass.valid ? "success" : "danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.newPassState.model.suffix);
  }
}
function NfcPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-card")(1, "ion-card-header")(2, "ion-card-subtitle");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-card-content")(6, "ion-list")(7, "ion-item", 9);
    \u0275\u0275template(8, NfcPage_Conditional_6_ion_thumbnail_8_Template, 3, 4, "ion-thumbnail", 10)(9, NfcPage_Conditional_6_ion_icon_9_Template, 1, 0, "ion-icon", 11);
    \u0275\u0275elementStart(10, "ion-select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function NfcPage_Conditional_6_Template_ion_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPassState.model, $event) || (ctx_r1.newPassState.model = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(11, NfcPage_Conditional_6_ion_select_option_11_Template, 2, 2, "ion-select-option", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-item", 9)(13, "ion-input", 14);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function NfcPage_Conditional_6_Template_ion_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPassState.newPass.pass, $event) || (ctx_r1.newPassState.newPass.pass = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionInput", function NfcPage_Conditional_6_Template_ion_input_ionInput_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPassChange($event));
    });
    \u0275\u0275template(16, NfcPage_Conditional_6_ion_text_16_Template, 2, 2, "ion-text", 15)(17, NfcPage_Conditional_6_ion_text_17_Template, 2, 2, "ion-text", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-note", 17);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ion-button", 18);
    \u0275\u0275listener("click", function NfcPage_Conditional_6_Template_ion_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.associatePass());
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 15, "nfc.associate_new_card"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.newPassState.model.picture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.newPassState.model.picture);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPassState.model);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.newPassState.models);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(14, 17, "nfc.card_number"))("pattern", ctx_r1.newPassState.model.regex)("errorText", \u0275\u0275pipeBind1(15, 19, "nfc.invalid_format"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPassState.newPass.pass);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.newPassState.model.prefix);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newPassState.model.suffix);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 21, ctx_r1.passModels), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 23, "nfc.single_card_warning"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.newPassState.newPass.valid === void 0 || !ctx_r1.newPassState.newPass.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 25, "nfc.associate_button"), "");
  }
}
function NfcPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "nfc.no_cards_found"), " ");
  }
}
function NfcPage_Conditional_11_ion_item_1_ion_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "nfc.active"));
  }
}
function NfcPage_Conditional_11_ion_item_1_ion_label_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pass_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "nfc.associated_on"), " ", \u0275\u0275pipeBind2(3, 4, pass_r4.take_timestamp * 1e3, "dd/MM HH:mm"), "");
  }
}
function NfcPage_Conditional_11_ion_item_1_ion_label_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pass_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "nfc.dissociated_on"), " ", \u0275\u0275pipeBind2(3, 4, pass_r4.return_timestamp * 1e3, "dd/MM HH:mm"), "");
  }
}
function NfcPage_Conditional_11_ion_item_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 30);
    \u0275\u0275listener("click", function NfcPage_Conditional_11_ion_item_1_Conditional_6_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const pass_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dissociatePass(pass_r4.uid));
    });
    \u0275\u0275elementEnd();
  }
}
function NfcPage_Conditional_11_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 9)(1, "ion-label");
    \u0275\u0275text(2);
    \u0275\u0275template(3, NfcPage_Conditional_11_ion_item_1_ion_badge_3_Template, 3, 3, "ion-badge", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NfcPage_Conditional_11_ion_item_1_ion_label_4_Template, 4, 7, "ion-label", 27)(5, NfcPage_Conditional_11_ion_item_1_ion_label_5_Template, 4, 7, "ion-label", 27)(6, NfcPage_Conditional_11_ion_item_1_Conditional_6_Template, 1, 0, "ion-icon", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pass_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", pass_r4.uid, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !pass_r4.return_timestamp);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !pass_r4.return_timestamp);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pass_r4.return_timestamp);
    \u0275\u0275advance();
    \u0275\u0275conditional(!pass_r4.return_timestamp ? 6 : -1);
  }
}
function NfcPage_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 8);
    \u0275\u0275template(1, NfcPage_Conditional_11_ion_item_1_Template, 7, 5, "ion-item", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.nfcState.passes.data);
  }
}
function NfcPage_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 8)(1, "ion-item", 9);
    \u0275\u0275element(2, "ion-skeleton-text", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
var _NfcPage = class _NfcPage {
  constructor(nfcService, storage, loadingCtrl, translateService, errorHandler) {
    this.nfcService = nfcService;
    this.storage = storage;
    this.loadingCtrl = loadingCtrl;
    this.translateService = translateService;
    this.errorHandler = errorHandler;
    this.newPassState = { state: "loading" };
    addIcons({ idCardOutline, trashOutline });
    this.storage.get("program").then((program) => {
      var _a;
      if (program && ((_a = program.config.authorised_passes) == null ? void 0 : _a.length) > 0) {
        this.newPassState = {
          state: "models",
          model: program.config.authorised_passes[0],
          models: program.config.authorised_passes,
          newPass: { pass: "" }
        };
      } else {
        const passes = [
          { model: this.translateService.instant("nfc.card_model") }
        ];
        this.newPassState = {
          state: "models",
          model: passes[0],
          models: passes,
          newPass: { pass: "" }
        };
      }
    });
    this.nfcService.nfcState.subscribe((state) => {
      this.nfcState = state;
    });
  }
  handleRefresh(event) {
    this.refresh().then(() => {
      event.target.complete();
    });
  }
  refresh() {
    return new Promise((resolve, reject) => {
      this.nfcService.getPasses().then(() => {
        resolve();
      });
    });
  }
  onPassChange(event) {
    if (this.newPassState.state === "models") {
      this.newPassState.newPass.valid = event.detail.event.target.validity.valid;
    }
  }
  associatePass() {
    return __async(this, null, function* () {
      if (this.newPassState.state === "models") {
        const loading = yield this.loadingCtrl.create({
          message: this.translateService.instant("pass.associating"),
          duration: 3e3
        });
        loading.present();
        this.nfcService.associatePass(this.newPassState.newPass.pass, this.newPassState.model.model).then(() => __async(this, null, function* () {
          yield loading.dismiss();
          this.refresh();
        })).catch((err) => __async(this, null, function* () {
          yield loading.dismiss();
          this.errorHandler.handleError(err);
        }));
      }
    });
  }
  dissociatePass(pass) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("pass.dissociating")
      });
      loading.present();
      this.nfcService.disassociatePass(pass).then(() => __async(this, null, function* () {
        yield loading.dismiss();
        this.refresh();
      })).catch((err) => __async(this, null, function* () {
        yield loading.dismiss();
        this.errorHandler.handleError(err);
      }));
    });
  }
};
_NfcPage.\u0275fac = function NfcPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NfcPage)(\u0275\u0275directiveInject(NfcService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_NfcPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NfcPage, selectors: [["app-nfc"]], decls: 13, vars: 7, consts: [[3, "defaultHref"], ["type", "indeterminate"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], ["slot", "fixed", 3, "ionRefresh"], [1, "ion-margin-bottom", "ion-margin-horizontal"], [1, "ion-margin-horizontal"], [3, "inset"], ["color", "grey"], ["slot", "start", 4, "ngIf"], ["name", "id-card-outline", "size", "large", "slot", "start", 4, "ngIf"], ["interface", "popover", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "labelPlacement", "floating", "required", "", 3, "ngModelChange", "ionInput", "label", "pattern", "errorText", "ngModel"], ["slot", "start", 3, "color", 4, "ngIf"], ["slot", "end", 3, "color", 4, "ngIf"], ["color", "medium"], ["color", "primary", "shape", "round", 1, "ion-margin-vertical", "ion-float-right", 3, "click", "disabled"], ["slot", "start"], [3, "src", "alt"], ["name", "id-card-outline", "size", "large", "slot", "start"], [3, "value"], ["slot", "start", 3, "color"], ["slot", "end", 3, "color"], ["color", "grey", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["slot", "end", 4, "ngIf"], ["name", "trash-outline", "slot", "end", "color", "danger", "size", "small"], ["slot", "end"], ["name", "trash-outline", "slot", "end", "color", "danger", "size", "small", 3, "click"], [3, "animated"]], template: function NfcPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275template(1, NfcPage_Conditional_1_Template, 1, 0, "ion-progress-bar", 1);
    \u0275\u0275elementStart(2, "ion-content", 2)(3, "ion-row", 3)(4, "ion-col", 4)(5, "ion-refresher", 5);
    \u0275\u0275listener("ionRefresh", function NfcPage_Template_ion_refresher_ionRefresh_5_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, NfcPage_Conditional_6_Template, 26, 27, "ion-card");
    \u0275\u0275elementStart(7, "h4", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, NfcPage_Conditional_10_Template, 3, 3, "p", 7)(11, NfcPage_Conditional_11_Template, 2, 2, "ion-list", 8)(12, NfcPage_Conditional_12_Template, 3, 2, "ion-list", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.nfcState.state === "loading" ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.newPassState.state === "models" ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "nfc.my_cards"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.nfcState.state === "noData" ? 10 : ctx.nfcState.state === "loaded" ? 11 : ctx.nfcState.state === "loading" ? 12 : -1);
  }
}, dependencies: [
  IonContent,
  CommonModule,
  NgForOf,
  NgIf,
  JsonPipe,
  DatePipe,
  FormsModule,
  NgControlStatus,
  RequiredValidator,
  PatternValidator,
  NgModel,
  IonRefresher,
  IonProgressBar,
  HeaderComponent,
  IonSkeletonText,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  TranslateModule,
  TranslatePipe,
  IonSelect,
  IonSelectOption,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonThumbnail,
  IonIcon,
  IonNote,
  IonLabel,
  IonBadge,
  IonRow,
  IonCol
], encapsulation: 2 });
var NfcPage = _NfcPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NfcPage, [{
    type: Component,
    args: [{ selector: "app-nfc", imports: [
      IonContent,
      CommonModule,
      FormsModule,
      IonRefresher,
      IonProgressBar,
      HeaderComponent,
      IonSkeletonText,
      IonList,
      IonItem,
      IonInput,
      IonButton,
      TranslateModule,
      IonSelect,
      IonSelectOption,
      IonText,
      IonCard,
      IonCardHeader,
      IonCardSubtitle,
      IonCardContent,
      IonThumbnail,
      IonIcon,
      IonNote,
      IonLabel,
      IonBadge,
      IonRow,
      IonCol
    ], template: `<app-header [defaultHref]="'/account'"></app-header>
@if(nfcState.state === 'loading'){
<ion-progress-bar type="indeterminate"></ion-progress-bar>
}

<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
      </ion-refresher>

      @if(newPassState.state === 'models'){
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle
            >{{ 'nfc.associate_new_card' | translate }}</ion-card-subtitle
          >
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item color="grey">
              <ion-thumbnail slot="start" *ngIf="newPassState.model.picture">
                <img
                  [src]="newPassState.model.picture"
                  [alt]="'nfc.card_image' | translate"
                />
              </ion-thumbnail>
              <ion-icon
                name="id-card-outline"
                size="large"
                slot="start"
                *ngIf="!newPassState.model.picture"
              ></ion-icon>
              <ion-select interface="popover" [(ngModel)]="newPassState.model">
                <ion-select-option
                  [value]="model"
                  *ngFor="let model of newPassState.models"
                  >{{ model.model }}</ion-select-option
                >
              </ion-select>
            </ion-item>
            <ion-item color="grey">
              <ion-input
                type="text"
                [label]="'nfc.card_number' | translate"
                labelPlacement="floating"
                [pattern]="newPassState.model.regex!"
                [errorText]="'nfc.invalid_format' | translate"
                required
                [(ngModel)]="newPassState.newPass.pass"
                (ionInput)="onPassChange($event)"
              >
                <ion-text
                  slot="start"
                  [color]="newPassState.newPass.valid === undefined ? 'dark' : newPassState.newPass.valid ? 'success' : 'danger'"
                  *ngIf="newPassState.model!.prefix"
                  >{{newPassState.model!.prefix}}</ion-text
                ><ion-text
                  slot="end"
                  [color]="newPassState.newPass.valid === undefined ? 'dark' : newPassState.newPass.valid ? 'success' : 'danger'"
                  *ngIf="newPassState.model!.suffix"
                  >{{newPassState.model!.suffix}}</ion-text
                ></ion-input
              >
            </ion-item>

            {{ passModels | json}}
          </ion-list>
          <ion-note color="medium">
            {{ 'nfc.single_card_warning' | translate }}
          </ion-note>
          <ion-button
            class="ion-margin-vertical ion-float-right"
            color="primary"
            shape="round"
            [disabled]="newPassState.newPass.valid === undefined || !newPassState.newPass.valid"
            (click)="associatePass()"
          >
            {{ 'nfc.associate_button' | translate }}</ion-button
          >
        </ion-card-content>
      </ion-card>
      }

      <h4 class="ion-margin-bottom ion-margin-horizontal">
        {{ 'nfc.my_cards' | translate }}
      </h4>
      @if(nfcState.state === 'noData'){
      <p class="ion-margin-horizontal">
        {{ 'nfc.no_cards_found' | translate }}
      </p>
      } @else if(nfcState.state === 'loaded'){
      <ion-list [inset]="true">
        <ion-item color="grey" *ngFor="let pass of nfcState.passes.data!">
          <ion-label
            >{{ pass.uid }}
            <ion-badge *ngIf="!pass.return_timestamp"
              >{{ 'nfc.active' | translate }}</ion-badge
            ></ion-label
          >
          <ion-label slot="end" *ngIf="!pass.return_timestamp"
            >{{ 'nfc.associated_on' | translate }} {{ pass.take_timestamp! *
            1000 | date:'dd/MM HH:mm' }}</ion-label
          >
          <ion-label slot="end" *ngIf="pass.return_timestamp"
            >{{ 'nfc.dissociated_on' | translate }} {{ pass.return_timestamp *
            1000 | date:'dd/MM HH:mm' }}</ion-label
          >
          @if(!pass.return_timestamp){
          <ion-icon
            name="trash-outline"
            slot="end"
            color="danger"
            size="small"
            (click)="dissociatePass(pass.uid!)"
          ></ion-icon>
          }
        </ion-item>
      </ion-list>
      }@else if(nfcState.state === 'loading'){
      <ion-list [inset]="true">
        <ion-item color="grey">
          <ion-skeleton-text [animated]="true"></ion-skeleton-text>
        </ion-item>
      </ion-list>
      }
    </ion-col>
  </ion-row>
</ion-content>
` }]
  }], () => [{ type: NfcService }, { type: StorageService }, { type: LoadingController }, { type: TranslateService }, { type: ErrorHandlerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NfcPage, { className: "NfcPage", filePath: "src/app/pages/account/nfc/nfc.page.ts", lineNumber: 89 });
})();
export {
  NfcPage
};
//# sourceMappingURL=nfc.page-LJM3HDWL.js.map
