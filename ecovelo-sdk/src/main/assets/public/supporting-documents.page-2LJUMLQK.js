import {
  DocumentUploaderComponent
} from "./chunk-ATMQL2VM.js";
import {
  AbonnementWrapperService
} from "./chunk-HXPAB5CU.js";
import "./chunk-2NC5PCU4.js";
import "./chunk-NEYQRVBS.js";
import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-OEYRANOA.js";
import "./chunk-7GZOXTNY.js";
import "./chunk-ULLB7OBK.js";
import "./chunk-RK7YL5P5.js";
import "./chunk-IBT2NAXJ.js";
import "./chunk-NHPV6IFO.js";
import "./chunk-YSCBVZBE.js";
import {
  SubscriptionProcessService
} from "./chunk-6J5UKKBN.js";
import "./chunk-RYICOSCB.js";
import "./chunk-FOJAXRYS.js";
import "./chunk-Z4RNZNYE.js";
import "./chunk-3E6DEK7U.js";
import {
  ToastService,
  ToastType
} from "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonButton,
  IonCol,
  IonContent,
  IonRow,
  LoadingController,
  NgForOf,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  firstValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UANRONUE.js";
import "./chunk-SE3ANTEE.js";
import "./chunk-H7W7X3R4.js";
import "./chunk-644FBQT2.js";
import "./chunk-QATEHYOA.js";
import "./chunk-3MKGIXIK.js";
import "./chunk-5VP4V3BN.js";
import "./chunk-TXLH22R2.js";
import "./chunk-7NA53B7M.js";
import "./chunk-J5JVDPFK.js";
import "./chunk-MUBGKTGO.js";
import "./chunk-FU6YP5BE.js";
import "./chunk-AS7GTWVF.js";
import "./chunk-LYXK2PRG.js";
import "./chunk-2BRJTTQT.js";
import "./chunk-RZR7LWTQ.js";
import "./chunk-YSZWGYJT.js";
import "./chunk-BFPTXCSH.js";
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

// src/app/pages/supporting-documents/supporting-documents.page.ts
var _c0 = () => ({});
function SupportingDocumentsPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-document-uploader", 6);
    \u0275\u0275listener("documentUpdate", function SupportingDocumentsPage_div_13_Template_app_document_uploader_documentUpdate_1_listener($event) {
      const doc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDocumentImagesChange(doc_r2, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("documentName", doc_r2)("documentImages", ctx_r2.documentImages[doc_r2] || \u0275\u0275pureFunction0(2, _c0));
  }
}
var _SupportingDocumentsPage = class _SupportingDocumentsPage {
  constructor(AbonnementWrapperService2, router, toastService, translate, loadingCtrl, subscriptionProcess) {
    this.AbonnementWrapperService = AbonnementWrapperService2;
    this.router = router;
    this.toastService = toastService;
    this.translate = translate;
    this.loadingCtrl = loadingCtrl;
    this.subscriptionProcess = subscriptionProcess;
    this.requiredDocuments = [];
    this.documentImages = {};
    this.next = null;
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      var _a, _b;
      const hasForfaitSelected = yield this.subscriptionProcess.hasForfaitSelected();
      if (hasForfaitSelected) {
        yield this.subscriptionProcess.updateStep("documents");
        const process = yield firstValueFrom(this.subscriptionProcess.getCurrentProcess());
        if (((_a = process == null ? void 0 : process.forfait) == null ? void 0 : _a.supporting_documents) && ((_b = process.forfait) == null ? void 0 : _b.supporting_documents.length) > 0) {
          this.requiredDocuments = process.forfait.supporting_documents;
        }
      }
      const queryParams = new URLSearchParams(window.location.search);
      this.next = queryParams.get("next");
    });
  }
  onDocumentImagesChange(documentName, images) {
    this.documentImages[documentName] = images;
  }
  submitDocuments() {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translate.instant("subscription.creation.loading")
      });
      yield loading.present();
      if (this.requiredDocuments.length > 0) {
        const supportingDocuments = Object.entries(this.documentImages).map(([name, images]) => ({
          name,
          front_image: images.front_image,
          back_image: images.back_image
        }));
        yield this.subscriptionProcess.updateSupportingDocuments(supportingDocuments);
      }
      if (this.next) {
        yield this.router.navigate([this.next]);
        yield loading.dismiss();
      } else {
        const payload = yield this.subscriptionProcess.getCreateAbonnementPayload();
        if (!payload) {
          this.toastService.createWithJustMessage(this.translate.instant("error.generic"), ToastType.Error);
          yield loading.dismiss();
          return;
        }
        this.AbonnementWrapperService.createAbonnement(payload).then(() => __async(this, null, function* () {
          yield loading.dismiss();
        }));
      }
    });
  }
  isComplete() {
    return this.requiredDocuments.length === 0 || this.requiredDocuments.every((doc) => {
      var _a;
      return (_a = this.documentImages[doc]) == null ? void 0 : _a.front_image;
    });
  }
};
_SupportingDocumentsPage.\u0275fac = function SupportingDocumentsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SupportingDocumentsPage)(\u0275\u0275directiveInject(AbonnementWrapperService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(SubscriptionProcessService));
};
_SupportingDocumentsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupportingDocumentsPage, selectors: [["app-supporting-documents"]], decls: 19, vars: 15, consts: [[3, "title"], [3, "fullscreen"], [1, "ion-padding-horizontal"], [4, "ngFor", "ngForOf"], [1, "ion-padding"], ["expand", "block", 3, "click", "disabled"], [3, "documentUpdate", "documentName", "documentImages"]], template: function SupportingDocumentsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "ion-content", 1)(3, "ion-row", 2)(4, "ion-col")(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "ion-row", 2)(12, "ion-col");
    \u0275\u0275template(13, SupportingDocumentsPage_div_13_Template, 2, 3, "div", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-row", 4)(15, "ion-col")(16, "ion-button", 5);
    \u0275\u0275listener("click", function SupportingDocumentsPage_Template_ion_button_click_16_listener() {
      return ctx.submitDocuments();
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 7, "documents.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, "documents.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "documents.description"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.requiredDocuments);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.isComplete());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 13, "documents.submit"), " ");
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  FormsModule,
  IonContent,
  IonRow,
  IonCol,
  IonButton,
  TranslateModule,
  TranslatePipe,
  HeaderComponent,
  DocumentUploaderComponent
], styles: ["\n\nion-thumbnail[_ngcontent-%COMP%] {\n  --border-radius: 4px;\n}\np[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  font-size: 0.9em;\n  margin-top: -0.5em;\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=supporting-documents.page.css.map */"] });
var SupportingDocumentsPage = _SupportingDocumentsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupportingDocumentsPage, [{
    type: Component,
    args: [{ selector: "app-supporting-documents", imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonRow,
      IonCol,
      IonButton,
      TranslateModule,
      HeaderComponent,
      DocumentUploaderComponent
    ], template: `<app-header [title]="'documents.title' | translate"></app-header>

<ion-content [fullscreen]="true">
  <ion-row class="ion-padding-horizontal">
    <ion-col>
      <h2>{{ 'documents.subtitle' | translate }}</h2>
      <p>{{ 'documents.description' | translate }}</p>
    </ion-col>
  </ion-row>

  <ion-row class="ion-padding-horizontal">
    <ion-col>
      <div *ngFor="let doc of requiredDocuments">
        <app-document-uploader
          [documentName]="doc"
          [documentImages]="documentImages[doc] || {}"
          (documentUpdate)="onDocumentImagesChange(doc, $event)"
        ></app-document-uploader>
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-padding">
    <ion-col>
      <ion-button
        expand="block"
        (click)="submitDocuments()"
        [disabled]="!isComplete()"
      >
        {{ 'documents.submit' | translate }}
      </ion-button>
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/supporting-documents/supporting-documents.page.scss */\nion-thumbnail {\n  --border-radius: 4px;\n}\np {\n  color: var(--ion-color-medium);\n  font-size: 0.9em;\n  margin-top: -0.5em;\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=supporting-documents.page.css.map */\n"] }]
  }], () => [{ type: AbonnementWrapperService }, { type: Router }, { type: ToastService }, { type: TranslateService }, { type: LoadingController }, { type: SubscriptionProcessService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupportingDocumentsPage, { className: "SupportingDocumentsPage", filePath: "src/app/pages/supporting-documents/supporting-documents.page.ts", lineNumber: 43 });
})();
export {
  SupportingDocumentsPage
};
//# sourceMappingURL=supporting-documents.page-2LJUMLQK.js.map
