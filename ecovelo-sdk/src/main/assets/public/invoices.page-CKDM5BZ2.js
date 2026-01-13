import {
  FactureService
} from "./chunk-L4K5M43V.js";
import {
  NativeAudioService
} from "./chunk-7T5ES6Q7.js";
import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-7GZOXTNY.js";
import {
  Browser
} from "./chunk-RK7YL5P5.js";
import "./chunk-IBT2NAXJ.js";
import "./chunk-NHPV6IFO.js";
import "./chunk-YSCBVZBE.js";
import "./chunk-6J5UKKBN.js";
import "./chunk-RYICOSCB.js";
import "./chunk-FOJAXRYS.js";
import "./chunk-Z4RNZNYE.js";
import {
  addIcons,
  downloadOutline
} from "./chunk-3E6DEK7U.js";
import "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  DOCUMENT,
  DatePipe,
  FormsModule,
  Inject,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonProgressBar,
  IonRefresher,
  IonRow,
  IonSkeletonText,
  IonText,
  IonThumbnail,
  NgForOf,
  NgZone,
  RouterLink,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
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

// src/app/pages/account/invoices/invoices.page.ts
var _c0 = () => ["/renting"];
var _c1 = (a0) => ({ amount: a0 });
var _c2 = () => [];
function InvoicesPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-progress-bar", 1);
  }
}
function InvoicesPage_Conditional_6_Conditional_0_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 13);
    \u0275\u0275element(1, "ion-icon", 14);
    \u0275\u0275elementStart(2, "ion-label")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-text", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "br");
    \u0275\u0275elementStart(9, "ion-note", 16);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 17)(13, "ion-note", 18);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-button", 19);
    \u0275\u0275listener("click", function InvoicesPage_Conditional_6_Conditional_0_ion_item_12_Template_ion_button_click_15_listener() {
      const invoice_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openInAppBrowser(invoice_r2.status === "paid" ? invoice_r2.pdf_url : invoice_r2.hosted_invoice_url));
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const invoice_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", invoice_r2.number, "");
    \u0275\u0275advance();
    \u0275\u0275property("color", "danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "invoices.status." + invoice_r2.status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 8, invoice_r2.created * 1e3, "dd/MM/yyyy HH:mm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", invoice_r2.amount_final / 100, "\u20AC");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 11, "invoices.pay_button"), "");
  }
}
function InvoicesPage_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-card", 8)(4, "ion-card-content")(5, "div", 9);
    \u0275\u0275element(6, "img", 10);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "ion-list", 11);
    \u0275\u0275template(12, InvoicesPage_Conditional_6_Conditional_0_ion_item_12_Template, 18, 13, "ion-item", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "invoices.unpaid_title"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(7, 6, "invoices.bell_icon_alt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "invoices.unpaid_message"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.invoicesState.dues);
  }
}
function InvoicesPage_Conditional_6_Conditional_4_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 21);
    \u0275\u0275element(1, "ion-icon", 14);
    \u0275\u0275elementStart(2, "ion-label")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-text", 22);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "br");
    \u0275\u0275elementStart(9, "ion-note", 16);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 17)(13, "ion-note", 18);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const invoice_r4 = ctx.$implicit;
    \u0275\u0275property("href", invoice_r4.pdf_url);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", invoice_r4.number || "N/A", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "invoices.status." + invoice_r4.status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 7, invoice_r4.created * 1e3, "dd/MM/yyyy HH:mm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", invoice_r4.amount_final / 100, "\u20AC");
  }
}
function InvoicesPage_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list");
    \u0275\u0275template(1, InvoicesPage_Conditional_6_Conditional_4_ion_item_1_Template, 15, 10, "ion-item", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.invoicesState.invoices);
  }
}
function InvoicesPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InvoicesPage_Conditional_6_Conditional_0_Template, 13, 10);
    \u0275\u0275elementStart(1, "h1", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, InvoicesPage_Conditional_6_Conditional_4_Template, 2, 1, "ion-list");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.invoicesState.dues && ctx_r2.invoicesState.dues.length > 0 ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "invoices.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.invoicesState.invoices.length > 0 ? 4 : -1);
  }
}
function InvoicesPage_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "invoices.no_paid_trips"), " ");
  }
}
function InvoicesPage_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "invoices.upcoming", \u0275\u0275pureFunction1(4, _c1, ctx_r2.invoicesState.upcoming.amount / 100)), " ");
  }
}
function InvoicesPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row")(1, "ion-col")(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275template(6, InvoicesPage_Conditional_7_Conditional_6_Template, 2, 3)(7, InvoicesPage_Conditional_7_Conditional_7_Template, 2, 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-button", 23);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "invoices.title"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.invoicesState.upcoming.amount === 0 ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, "invoices.start_rental"));
  }
}
function InvoicesPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row")(1, "ion-col")(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-button", 23);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "invoices.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "invoices.no_paid_trips"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "invoices.start_rental"));
  }
}
function InvoicesPage_Conditional_9_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-thumbnail", 25);
    \u0275\u0275element(2, "ion-skeleton-text", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label")(4, "h3");
    \u0275\u0275element(5, "ion-skeleton-text", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "ion-skeleton-text", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275element(9, "ion-skeleton-text", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
function InvoicesPage_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list");
    \u0275\u0275template(1, InvoicesPage_Conditional_9_ion_item_1_Template, 10, 4, "ion-item", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c2).constructor(ctx_r2.skeletonCount));
  }
}
var _InvoicesPage = class _InvoicesPage {
  constructor(document, factureService, ngZone, nativeAudioService) {
    this.document = document;
    this.factureService = factureService;
    this.ngZone = ngZone;
    this.nativeAudioService = nativeAudioService;
    this.skeletonCount = 10;
    addIcons({ downloadOutline });
    this.factureService.factureState.subscribe((state) => {
      this.invoicesState = state;
    });
  }
  ngOnInit() {
    this.nativeAudioService.preloadAsset("bikebell", "assets/audio/bikebell.mp3", 1, 0.8);
    this.refresh();
  }
  ngAfterViewInit() {
    this.content.scrollEvents = true;
    this.content.ionScroll.subscribe((event) => {
      const scrollTop = event.detail.scrollTop;
      if (this.leaderLine) {
        this.leaderLine.position();
      }
    });
    this.factureService.factureState.subscribe((state) => __async(this, null, function* () {
      if (state.state === "factures") {
        if (state.dues && state.dues.length > 0) {
          yield setTimeout(() => __async(this, null, function* () {
            this.nativeAudioService.play("bikebell");
            if (this.leaderLine)
              this.leaderLine.remove();
            this.leaderLine = yield new LeaderLine(this.document.getElementById("DringFrom"), this.document.getElementById("DringTo"), {
              path: "magnet",
              color: "#0A0A0A",
              size: 2,
              startSocket: "left",
              endSocket: "top",
              positionByWindowResize: true,
              hide: true
            });
            this.leaderLine.show();
          }), 500);
        }
      }
    }));
  }
  ionViewWillLeave() {
    return __async(this, null, function* () {
      if (this.leaderLine)
        this.leaderLine.remove();
      yield Browser.removeAllListeners();
    });
  }
  handleRefresh(event) {
    this.refresh().then(() => {
      event.target.complete();
    });
  }
  refresh() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        if (this.leaderLine)
          this.leaderLine.hide();
        this.invoicesState = { state: "loading" };
        this.factureService.getFactures().then(() => {
          resolve();
        });
      });
    });
  }
  openInAppBrowser(url) {
    return __async(this, null, function* () {
      yield Browser.open({ url, presentationStyle: "popover" });
      yield Browser.addListener("browserFinished", () => {
        this.ngZone.run(() => {
          this.refresh();
        });
      });
    });
  }
};
_InvoicesPage.\u0275fac = function InvoicesPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InvoicesPage)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(FactureService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(NativeAudioService));
};
_InvoicesPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoicesPage, selectors: [["app-invoices"]], viewQuery: function InvoicesPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(IonContent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
  }
}, decls: 10, vars: 3, consts: [[3, "defaultHref"], ["type", "indeterminate"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], ["slot", "fixed", 3, "ionRefresh"], [1, "ion-margin"], [1, "ion-margin-horizontal"], ["id", "DringFrom", 1, "ion-margin"], [1, "ion-float-left"], ["src", "assets/svg/bikebell.svg", 1, "ion-margin-end", 3, "alt"], ["id", "DringTo", 1, "ion-margin-top"], ["detail", "false", 4, "ngFor", "ngForOf"], ["detail", "false"], ["slot", "start", "name", "download-outline"], [3, "color"], ["color", "medium", 1, "ion-text-wrap"], ["slot", "end", 1, "metadata-end-wrapper"], ["color", "medium"], ["size", "small", "color", "primary", 3, "click"], ["target", "_blank", "detail", "false", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", "detail", "false", 3, "href"], ["color", "success"], [3, "routerLink"], [4, "ngFor", "ngForOf"], ["slot", "start"], [3, "animated"], [2, "width", "80%", 3, "animated"], [2, "width", "60%", 3, "animated"], [2, "width", "30%", 3, "animated"]], template: function InvoicesPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275template(1, InvoicesPage_Conditional_1_Template, 1, 0, "ion-progress-bar", 1);
    \u0275\u0275elementStart(2, "ion-content", 2)(3, "ion-row", 3)(4, "ion-col", 4)(5, "ion-refresher", 5);
    \u0275\u0275listener("ionRefresh", function InvoicesPage_Template_ion_refresher_ionRefresh_5_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InvoicesPage_Conditional_6_Template, 5, 5)(7, InvoicesPage_Conditional_7_Template, 11, 9)(8, InvoicesPage_Conditional_8_Template, 11, 11)(9, InvoicesPage_Conditional_9_Template, 2, 2, "ion-list");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.invoicesState.state === "loading" ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.invoicesState.state === "factures" ? 6 : ctx.invoicesState.state === "upcoming" ? 7 : ctx.invoicesState.state === "noInvoices" ? 8 : ctx.invoicesState.state === "loading" ? 9 : -1);
  }
}, dependencies: [
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonNote,
  IonText,
  IonButton,
  IonCard,
  IonCardContent,
  IonSkeletonText,
  IonProgressBar,
  IonThumbnail,
  IonRefresher,
  CommonModule,
  NgForOf,
  DatePipe,
  FormsModule,
  HeaderComponent,
  TranslateModule,
  TranslatePipe,
  RouterModule,
  RouterLink,
  IonRow,
  IonCol
], styles: ["\n\n.metadata-end-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  inset-inline-end: 10px;\n  font-size: 0.8rem;\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  align-items: right;\n}\nion-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  max-width: calc(100% - 60px);\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-label[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=invoices.page.css.map */"] });
var InvoicesPage = _InvoicesPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoicesPage, [{
    type: Component,
    args: [{ selector: "app-invoices", imports: [
      IonContent,
      IonList,
      IonItem,
      IonIcon,
      IonLabel,
      IonNote,
      IonText,
      IonButton,
      IonCard,
      IonCardContent,
      IonSkeletonText,
      IonProgressBar,
      IonThumbnail,
      IonRefresher,
      CommonModule,
      FormsModule,
      HeaderComponent,
      TranslateModule,
      RouterModule,
      IonRow,
      IonCol
    ], template: `<app-header [defaultHref]="'/account'"></app-header>
@if(invoicesState.state === 'loading'){
<ion-progress-bar type="indeterminate"></ion-progress-bar>
}

<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
      </ion-refresher>

      @if(invoicesState.state === 'factures'){ @if(invoicesState.dues &&
      invoicesState.dues.length > 0){

      <h1 class="ion-margin-horizontal">
        {{ 'invoices.unpaid_title' | translate }}
      </h1>
      <ion-card class="ion-margin" id="DringFrom">
        <ion-card-content>
          <div class="ion-float-left">
            <img
              src="assets/svg/bikebell.svg"
              class="ion-margin-end"
              alt="{{ 'invoices.bell_icon_alt' | translate }}"
            />
          </div>
          <p>{{ 'invoices.unpaid_message' | translate }}</p>
        </ion-card-content>
      </ion-card>
      <ion-list class="ion-margin-top" id="DringTo">
        <ion-item *ngFor="let invoice of invoicesState.dues" detail="false">
          <ion-icon slot="start" name="download-outline"></ion-icon>
          <ion-label>
            <strong>#{{invoice.number}}</strong>
            <ion-text [color]="'danger'"
              >{{ 'invoices.status.' + invoice.status | translate }}</ion-text
            ><br />
            <ion-note color="medium" class="ion-text-wrap">
              {{ invoice.created! * 1000 | date : 'dd/MM/yyyy HH:mm' }}
            </ion-note>
          </ion-label>
          <div class="metadata-end-wrapper" slot="end">
            <ion-note color="medium"
              >{{invoice.amount_final! / 100 }}\u20AC</ion-note
            >
            <ion-button
              size="small"
              color="primary"
              (click)="openInAppBrowser(invoice.status === 'paid' ? invoice.pdf_url! : invoice.hosted_invoice_url!)"
            >
              {{ 'invoices.pay_button' | translate }}</ion-button
            >
          </div>
        </ion-item>
      </ion-list>
      }

      <h1 class="ion-margin">{{ 'invoices.title' | translate }}</h1>
      @if(invoicesState.invoices.length > 0){
      <ion-list>
        <ion-item
          [href]="invoice.pdf_url"
          target="_blank"
          *ngFor="let invoice of invoicesState.invoices"
          detail="false"
        >
          <ion-icon slot="start" name="download-outline"></ion-icon>
          <ion-label>
            <strong>#{{invoice.number || 'N/A'}}</strong>
            <ion-text color="success"
              >{{ 'invoices.status.' + invoice.status | translate }}</ion-text
            ><br />
            <ion-note color="medium" class="ion-text-wrap">
              {{ invoice.created! * 1000 | date : 'dd/MM/yyyy HH:mm' }}
            </ion-note>
          </ion-label>
          <div class="metadata-end-wrapper" slot="end">
            <ion-note color="medium"
              >{{invoice.amount_final! / 100 }}\u20AC</ion-note
            >
          </div>
        </ion-item>
      </ion-list>
      } } @else if(invoicesState.state === 'upcoming'){
      <ion-row>
        <ion-col>
          <h1>{{ 'invoices.title' | translate }}</h1>
          <p>
            @if(invoicesState.upcoming.amount! === 0) { {{
            'invoices.no_paid_trips' | translate }} } @else { {{
            'invoices.upcoming' | translate:{ amount:
            invoicesState.upcoming.amount! / 100 } }} }
          </p>
        </ion-col>
      </ion-row>
      <ion-button [routerLink]="['/renting']"
        >{{ 'invoices.start_rental' | translate }}</ion-button
      >
      } @else if(invoicesState.state === 'noInvoices'){
      <ion-row>
        <ion-col>
          <h1>{{ 'invoices.title' | translate }}</h1>
          <p>{{ 'invoices.no_paid_trips' | translate }}</p>
        </ion-col>
      </ion-row>
      <ion-button [routerLink]="['/renting']"
        >{{ 'invoices.start_rental' | translate }}</ion-button
      >
      } @else if(invoicesState.state === 'loading'){
      <ion-list>
        <ion-item *ngFor="let i of [].constructor(skeletonCount)">
          <ion-thumbnail slot="start">
            <ion-skeleton-text [animated]="true"></ion-skeleton-text>
          </ion-thumbnail>
          <ion-label>
            <h3>
              <ion-skeleton-text
                [animated]="true"
                style="width: 80%"
              ></ion-skeleton-text>
            </h3>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 60%"
              ></ion-skeleton-text>
            </p>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 30%"
              ></ion-skeleton-text>
            </p>
          </ion-label>
        </ion-item>
      </ion-list>
      }
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/account/invoices/invoices.page.scss */\n.metadata-end-wrapper {\n  position: absolute;\n  top: 10px;\n  inset-inline-end: 10px;\n  font-size: 0.8rem;\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  align-items: right;\n}\nion-label strong {\n  display: block;\n  max-width: calc(100% - 60px);\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-label ion-note {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=invoices.page.css.map */\n"] }]
  }], () => [{ type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }, { type: FactureService }, { type: NgZone }, { type: NativeAudioService }], { content: [{
    type: ViewChild,
    args: [IonContent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoicesPage, { className: "InvoicesPage", filePath: "src/app/pages/account/invoices/invoices.page.ts", lineNumber: 75 });
})();
export {
  InvoicesPage
};
//# sourceMappingURL=invoices.page-CKDM5BZ2.js.map
