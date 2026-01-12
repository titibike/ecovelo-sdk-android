import {
  require_showdown
} from "./chunk-7JCEDXGT.js";
import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonicModule
} from "./chunk-ULLB7OBK.js";
import {
  NewsService
} from "./chunk-5KPTYQ6O.js";
import {
  environment
} from "./chunk-GFMHZGOY.js";
import {
  addIcons,
  arrowBack
} from "./chunk-3E6DEK7U.js";
import {
  ErrorHandlerService
} from "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  EventEmitter,
  Injectable,
  Input,
  ModalController,
  NgClass,
  NgIf,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate
} from "./chunk-UANRONUE.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-UESUV5PM.js";

// src/app/components/modals/news-detail/news-detail.component.ts
var Showdown = __toESM(require_showdown());
var _c0 = (a0) => ({ "no-image": a0 });
function NewsDetailComponent_Conditional_0_ion_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-img", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.news.image);
  }
}
function NewsDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-button", 0);
    \u0275\u0275listener("click", function NewsDetailComponent_Conditional_0_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275element(2, "ion-icon", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NewsDetailComponent_Conditional_0_ion_img_3_Template, 1, 1, "ion-img", 2);
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275element(5, "h1", 4)(6, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.news.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, !ctx_r1.news.image));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.showdown(ctx_r1.news.title || ""), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.showdown(ctx_r1.news.text || ""), \u0275\u0275sanitizeHtml);
  }
}
var _NewsDetailComponent = class _NewsDetailComponent {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
    addIcons({ arrowBack });
  }
  cancel() {
    this.modalCtrl.dismiss();
  }
  showdown(text) {
    const converter = new Showdown.Converter();
    return converter.makeHtml(text);
  }
};
_NewsDetailComponent.\u0275fac = function NewsDetailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewsDetailComponent)(\u0275\u0275directiveInject(ModalController));
};
_NewsDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsDetailComponent, selectors: [["app-news-detail"]], inputs: { news: "news" }, decls: 1, vars: 1, consts: [["shape", "round", "color", "light", 3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["alt", "News image", 3, "src", 4, "ngIf"], [1, "ion-padding", "ion-margin-bottom", 3, "ngClass"], [1, "ion-no-margin", "ion-margin-bottom", "ion-margin-top", 3, "innerHTML"], [3, "innerHTML"], ["alt", "News image", 3, "src"]], template: function NewsDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NewsDetailComponent_Conditional_0_Template, 7, 6, "ion-content");
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.news ? 0 : -1);
  }
}, dependencies: [IonicModule, IonButton, IonContent, IonIcon, IonImg, CommonModule, NgClass, NgIf], styles: ["\n\nion-content[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: var(--ion-safe-area-top);\n}\nion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2%;\n  left: 2%;\n}\nh1[_ngcontent-%COMP%]     p {\n  margin: 0;\n}\n.no-image[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=news-detail.component.css.map */"] });
var NewsDetailComponent = _NewsDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewsDetailComponent, [{
    type: Component,
    args: [{ selector: "app-news-detail", imports: [IonicModule, CommonModule], template: `@if (news) {
<ion-content>
  <ion-button (click)="cancel()" shape="round" color="light">
    <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
  </ion-button>
  <ion-img *ngIf="news.image" [src]="news.image" alt="News image"></ion-img>
  <div
    class="ion-padding ion-margin-bottom"
    [ngClass]="{ 'no-image': !news.image }"
  >
    <h1
      [innerHTML]="showdown(news.title || '')"
      class="ion-no-margin ion-margin-bottom ion-margin-top"
    ></h1>
    <div [innerHTML]="showdown(news.text || '')"></div>
  </div>
</ion-content>
}
`, styles: ["/* src/app/components/modals/news-detail/news-detail.component.scss */\nion-content {\n  position: absolute;\n  left: 0;\n  top: var(--ion-safe-area-top);\n}\nion-content ion-button {\n  position: absolute;\n  top: 2%;\n  left: 2%;\n}\nh1 ::ng-deep p {\n  margin: 0;\n}\n.no-image {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=news-detail.component.css.map */\n"] }]
  }], () => [{ type: ModalController }], { news: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsDetailComponent, { className: "NewsDetailComponent", filePath: "src/app/components/modals/news-detail/news-detail.component.ts", lineNumber: 16 });
})();

// src/app/services/api-wrappers/news.service.ts
var Showdown2 = __toESM(require_showdown());
var _NewsStateService = class _NewsStateService {
  constructor(modalCtrl, storageService, newsService, errorHandler) {
    this.modalCtrl = modalCtrl;
    this.storageService = storageService;
    this.newsService = newsService;
    this.errorHandler = errorHandler;
    this.state = new BehaviorSubject({ state: "no_news" });
    this.mandatoryState = signal({ state: "not_shown" });
    this.mandatoryDismissed = new EventEmitter();
    this.initMandatoryState();
    this.converter = new Showdown2.Converter();
  }
  // Initialize mandatory state from storage
  initMandatoryState() {
    return __async(this, null, function* () {
      try {
        const storedState = yield this.storageService.get("mandatory");
        if (storedState) {
          this.mandatoryState.set(storedState);
        }
      } catch (error) {
        this.errorHandler.handleError(error);
      }
    });
  }
  // Save mandatory state to storage
  saveMandatoryState() {
    return __async(this, null, function* () {
      try {
        yield this.storageService.set("mandatory", this.mandatoryState());
      } catch (error) {
        this.errorHandler.handleError(error);
      }
    });
  }
  getState() {
    return this.state.asObservable();
  }
  retrieveNews() {
    return __async(this, null, function* () {
      this.state.next({ state: "loading" });
      this.newsService.listNew({
        program: environment.program,
        program2: environment.program,
        status: "active",
        limit: 100
      }).subscribe((news) => __async(this, null, function* () {
        var _a;
        if (news.data) {
          news.data = news.data.map((item) => __spreadProps(__spreadValues({}, item), {
            title: item.title ? this.converter.makeHtml(item.title) : item.title,
            text: item.text ? this.converter.makeHtml(item.text) : item.text
          }));
        }
        yield this.storageService.set("news", news);
        const mandatoryNews = (_a = news.data) == null ? void 0 : _a.find((news2) => news2.priority === "highlighted");
        if (mandatoryNews && mandatoryNews.id) {
          yield this.updateMandatory(mandatoryNews);
        }
        if (!(news == null ? void 0 : news.data) || news.data.length === 0) {
          this.state.next({ state: "no_news" });
          return;
        }
        this.state.next({ state: "success", news: news.data });
      }), (error) => {
        this.errorHandler.handleError(error);
        this.state.next({
          state: "error",
          error: error instanceof Error ? error : new Error("Unknown error")
        });
      });
    });
  }
  updateMandatory(newMandatory) {
    return __async(this, null, function* () {
      var _a;
      const now = Date.now();
      if (!this.mandatoryState().state || this.mandatoryState().state === "shown" && ((_a = this.mandatoryState().lastShown) == null ? void 0 : _a.id) !== newMandatory.id || this.mandatoryState().state === "shown" && this.mandatoryState().lastShownTimestamp && now - this.mandatoryState().lastShownTimestamp >= 1e3 * 60 * 60 * 24) {
        this.mandatoryState.set({ state: "not_shown" });
      }
      yield this.saveMandatoryState();
    });
  }
  getNews() {
    const currentState = this.state.value;
    return currentState.state === "success" ? currentState.news : void 0;
  }
  getMandatory() {
    return __async(this, null, function* () {
      const currentState = this.state.value;
      if (currentState.state !== "success")
        return;
      return currentState.news.find((news) => news.priority === "highlighted");
    });
  }
  openDetail(news, type) {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: NewsDetailComponent,
        componentProps: {
          news
        },
        initialBreakpoint: 1
      });
      yield modal.present();
      yield modal.onDidDismiss().then(() => __async(this, null, function* () {
        if (type === "mandatory") {
          this.mandatoryState.set({
            state: "shown",
            lastShownTimestamp: Date.now(),
            lastShown: news
          });
          yield this.saveMandatoryState();
          this.mandatoryDismissed.emit();
        }
      }));
    });
  }
};
_NewsStateService.\u0275fac = function NewsStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewsStateService)(\u0275\u0275inject(ModalController), \u0275\u0275inject(StorageService), \u0275\u0275inject(NewsService), \u0275\u0275inject(ErrorHandlerService));
};
_NewsStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NewsStateService, factory: _NewsStateService.\u0275fac, providedIn: "root" });
var NewsStateService = _NewsStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewsStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ModalController }, { type: StorageService }, { type: NewsService }, { type: ErrorHandlerService }], null);
})();

export {
  NewsStateService
};
//# sourceMappingURL=chunk-CBD46IRE.js.map
