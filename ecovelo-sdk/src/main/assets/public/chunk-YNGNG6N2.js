import {
  LanguageService
} from "./chunk-7GZOXTNY.js";
import {
  addIcons,
  arrowBackOutline,
  caretBack
} from "./chunk-3E6DEK7U.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  Inject,
  Input,
  IonBackButton2 as IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  NgIf,
  PopoverController,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/components/header/language-popover/language-popover.component.ts
var _LanguagePopoverComponent = class _LanguagePopoverComponent {
  constructor(popoverController, language) {
    this.popoverController = popoverController;
    this.language = language;
  }
  selectLanguage(lang) {
    this.popoverController.dismiss({
      language: lang
    });
  }
};
_LanguagePopoverComponent.\u0275fac = function LanguagePopoverComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LanguagePopoverComponent)(\u0275\u0275directiveInject(PopoverController), \u0275\u0275directiveInject(LanguageService));
};
_LanguagePopoverComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguagePopoverComponent, selectors: [["app-language-popover"]], decls: 22, vars: 5, consts: [["button", "", 3, "click", "disabled"], ["slot", "start", "src", "assets/svg/flags/fr.svg"], ["slot", "start", "src", "assets/svg/flags/en.svg"], ["slot", "start", "src", "assets/svg/flags/de.svg"], ["slot", "start", "src", "assets/svg/flags/it.svg"], ["slot", "start", "src", "assets/svg/flags/es.svg"]], template: function LanguagePopoverComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-list")(2, "ion-item", 0);
    \u0275\u0275listener("click", function LanguagePopoverComponent_Template_ion_item_click_2_listener() {
      return ctx.selectLanguage("fr");
    });
    \u0275\u0275element(3, "ion-icon", 1);
    \u0275\u0275elementStart(4, "ion-label");
    \u0275\u0275text(5, "Fran\xE7ais");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-item", 0);
    \u0275\u0275listener("click", function LanguagePopoverComponent_Template_ion_item_click_6_listener() {
      return ctx.selectLanguage("en");
    });
    \u0275\u0275element(7, "ion-icon", 2);
    \u0275\u0275elementStart(8, "ion-label");
    \u0275\u0275text(9, "English");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-item", 0);
    \u0275\u0275listener("click", function LanguagePopoverComponent_Template_ion_item_click_10_listener() {
      return ctx.selectLanguage("de");
    });
    \u0275\u0275element(11, "ion-icon", 3);
    \u0275\u0275elementStart(12, "ion-label");
    \u0275\u0275text(13, "Deutsch");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-item", 0);
    \u0275\u0275listener("click", function LanguagePopoverComponent_Template_ion_item_click_14_listener() {
      return ctx.selectLanguage("it");
    });
    \u0275\u0275element(15, "ion-icon", 4);
    \u0275\u0275elementStart(16, "ion-label");
    \u0275\u0275text(17, "Italiano");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ion-item", 0);
    \u0275\u0275listener("click", function LanguagePopoverComponent_Template_ion_item_click_18_listener() {
      return ctx.selectLanguage("es");
    });
    \u0275\u0275element(19, "ion-icon", 5);
    \u0275\u0275elementStart(20, "ion-label");
    \u0275\u0275text(21, "Espa\xF1ol");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.language.getLanguage() === "fr");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.language.getLanguage() === "en");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.language.getLanguage() === "de");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.language.getLanguage() === "it");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.language.getLanguage() === "es");
  }
}, dependencies: [CommonModule, IonList, IonItem, IonLabel, IonIcon, IonContent], encapsulation: 2 });
var LanguagePopoverComponent = _LanguagePopoverComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguagePopoverComponent, [{
    type: Component,
    args: [{
      selector: "app-language-popover",
      template: `
    <ion-content>
      <ion-list>
        <ion-item
          button
          (click)="selectLanguage('fr')"
          [disabled]="language.getLanguage() === 'fr'"
        >
          <ion-icon slot="start" src="assets/svg/flags/fr.svg"></ion-icon>
          <ion-label>Fran\xE7ais</ion-label>
        </ion-item>
        <ion-item
          button
          (click)="selectLanguage('en')"
          [disabled]="language.getLanguage() === 'en'"
        >
          <ion-icon slot="start" src="assets/svg/flags/en.svg"></ion-icon>
          <ion-label>English</ion-label>
        </ion-item>
        <ion-item
          button
          (click)="selectLanguage('de')"
          [disabled]="language.getLanguage() === 'de'"
        >
          <ion-icon slot="start" src="assets/svg/flags/de.svg"></ion-icon>
          <ion-label>Deutsch</ion-label>
        </ion-item>
        <ion-item
          button
          (click)="selectLanguage('it')"
          [disabled]="language.getLanguage() === 'it'"
        >
          <ion-icon slot="start" src="assets/svg/flags/it.svg"></ion-icon>
          <ion-label>Italiano</ion-label>
        </ion-item>
        <ion-item
          button
          (click)="selectLanguage('es')"
          [disabled]="language.getLanguage() === 'es'"
        >
          <ion-icon slot="start" src="assets/svg/flags/es.svg"></ion-icon>
          <ion-label>Espa\xF1ol</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
      imports: [CommonModule, IonList, IonItem, IonLabel, IonIcon, IonContent]
    }]
  }], () => [{ type: PopoverController }, { type: LanguageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguagePopoverComponent, { className: "LanguagePopoverComponent", filePath: "src/app/components/header/language-popover/language-popover.component.ts", lineNumber: 63 });
})();

// src/app/components/header/header.component.ts
function HeaderComponent_ion_buttons_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-buttons", 7);
    \u0275\u0275element(1, "ion-back-button", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("defaultHref", ctx_r0.defaultHref ? ctx_r0.defaultHref : "/launch");
  }
}
var _HeaderComponent = class _HeaderComponent {
  constructor(storageService, router, language, popoverController) {
    this.storageService = storageService;
    this.router = router;
    this.language = language;
    this.popoverController = popoverController;
    this.showBackButton = true;
    addIcons({
      "flag-fr": "assets/svg/flags/fr.svg",
      "flag-uk": "assets/svg/flags/uk.svg",
      "flag-de": "assets/svg/flags/de.svg",
      "flag-it": "assets/svg/flags/it.svg",
      "flag-es": "assets/svg/flags/es.svg",
      caretBack,
      arrowBackOutline
    });
    this.router.url.includes("landing") ? this.showBackButton = false : this.showBackButton = true;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.storageService.get("program").then((program) => {
        this.program = program;
      });
    });
  }
  changeLanguage(lang) {
    this.language.setLanguage(lang);
  }
  openLanguagePopover(event) {
    return __async(this, null, function* () {
      const popover = yield this.popoverController.create({
        component: LanguagePopoverComponent,
        event
      });
      popover.onDidDismiss().then((data) => {
        if (data.data) {
          this.changeLanguage(data.data.language);
        }
      });
      yield popover.present();
    });
  }
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(PopoverController));
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], inputs: { defaultHref: "defaultHref" }, decls: 8, vars: 3, consts: [["id", "header"], [2, "--background", "#f2f2f2", "padding-left", "8px", "padding-right", "8px", "--border-width", "0"], ["slot", "start", 4, "ngIf"], [3, "src"], ["slot", "end"], ["shape", "round", 1, "ecl-no-shadow", 3, "click"], ["slot", "icon-only", 3, "src"], ["slot", "start"], ["text", "", "icon", "arrow-back-outline", "color", "dark", 3, "defaultHref"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1);
    \u0275\u0275template(2, HeaderComponent_ion_buttons_2_Template, 2, 1, "ion-buttons", 2);
    \u0275\u0275elementStart(3, "ion-title");
    \u0275\u0275element(4, "ion-img", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 4)(6, "ion-button", 5);
    \u0275\u0275listener("click", function HeaderComponent_Template_ion_button_click_6_listener($event) {
      return ctx.openLanguagePopover($event);
    });
    \u0275\u0275element(7, "ion-icon", 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.showBackButton);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx.program == null ? null : ctx.program.config == null ? null : ctx.program.config.logo);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", "assets/svg/flags/" + ctx.language.getLanguage() + ".svg");
  }
}, dependencies: [
  IonHeader,
  CommonModule,
  NgIf,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonButton,
  IonImg
], styles: ["\n\nion-toolbar[_ngcontent-%COMP%] {\n  --min-height: 100px !important;\n}\nion-img[_ngcontent-%COMP%]::part(image) {\n  max-height: 60px !important;\n}\n/*# sourceMappingURL=header.component.css.map */"] });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", imports: [
      IonHeader,
      CommonModule,
      IonTitle,
      IonToolbar,
      IonBackButton,
      IonButtons,
      IonIcon,
      IonButton,
      IonImg
    ], template: `<ion-header id="header">
  <ion-toolbar
    style="
      --background: #f2f2f2;
      padding-left: 8px;
      padding-right: 8px;
      --border-width: 0;
    "
  >
    <ion-buttons slot="start" *ngIf="showBackButton">
      <ion-back-button
        text=""
        [defaultHref]="defaultHref ? defaultHref : '/launch'"
        icon="arrow-back-outline"
        color="dark"
      ></ion-back-button>
    </ion-buttons>
    <ion-title>
      <ion-img [src]="program?.config?.logo"></ion-img>
    </ion-title>
    <ion-buttons slot="end">
      <ion-button
        shape="round"
        class="ecl-no-shadow"
        (click)="openLanguagePopover($event)"
      >
        <ion-icon
          slot="icon-only"
          [src]="'assets/svg/flags/' + language.getLanguage() + '.svg'"
        ></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
`, styles: ["/* src/app/components/header/header.component.scss */\nion-toolbar {\n  --min-height: 100px !important;\n}\nion-img::part(image) {\n  max-height: 60px !important;\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], () => [{ type: StorageService, decorators: [{
    type: Inject,
    args: [StorageService]
  }] }, { type: Router }, { type: LanguageService }, { type: PopoverController }], { defaultHref: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/components/header/header.component.ts", lineNumber: 51 });
})();

export {
  HeaderComponent
};
//# sourceMappingURL=chunk-YNGNG6N2.js.map
