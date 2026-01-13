import {
  MediaService
} from "./chunk-2NC5PCU4.js";
import {
  addIcons,
  cameraOutline,
  cloudUploadOutline,
  documentOutline,
  trashOutline
} from "./chunk-3E6DEK7U.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  FormsModule,
  Input,
  IonActionSheet,
  IonButton,
  IonCol,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonThumbnail,
  Output,
  ToastController,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UANRONUE.js";
import {
  __async,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// src/app/components/document-uploader/document-uploader.component.ts
var DocumentSide;
(function(DocumentSide2) {
  DocumentSide2["FRONT"] = "front";
  DocumentSide2["BACK"] = "back";
})(DocumentSide || (DocumentSide = {}));
var UIState;
(function(UIState2) {
  UIState2["OPEN"] = "open";
  UIState2["CLOSED"] = "closed";
})(UIState || (UIState = {}));
var LoadingState;
(function(LoadingState2) {
  LoadingState2["LOADING"] = "loading";
  LoadingState2["IDLE"] = "idle";
})(LoadingState || (LoadingState = {}));
var _DocumentUploaderComponent = class _DocumentUploaderComponent {
  constructor(mediaService, translate, toastCtrl) {
    this.mediaService = mediaService;
    this.translate = translate;
    this.toastCtrl = toastCtrl;
    this.documentName = "";
    this.documentImages = {};
    this.documentUpdate = new EventEmitter();
    this.documentDelete = new EventEmitter();
    this.DocumentSide = DocumentSide;
    this.UIState = UIState;
    this.LoadingState = LoadingState;
    this.actionSheetState = UIState.CLOSED;
    this.currentSide = null;
    this.uploadState = LoadingState.IDLE;
    this.actionSheetButtons = [
      {
        text: "Camera",
        icon: "camera",
        handler: () => this.handleCamera()
      },
      {
        text: "Gallery",
        icon: "document",
        handler: () => this.handleGallery()
      },
      {
        text: "Cancel",
        role: "cancel",
        data: {
          action: "cancel"
        }
      }
    ];
    addIcons({
      camera: cameraOutline,
      document: documentOutline,
      trash: trashOutline,
      "cloud-upload": cloudUploadOutline
    });
  }
  openActionSheet(side) {
    this.currentSide = side;
    this.actionSheetState = UIState.OPEN;
  }
  isDeleteDisabled() {
    return this.uploadState === LoadingState.LOADING;
  }
  handleCamera() {
    return __async(this, null, function* () {
      if (!this.currentSide)
        return;
      this.uploadState = LoadingState.LOADING;
      const { blob } = yield this.mediaService.captureAndProcessPhoto();
      if (!blob) {
        throw new Error("No image captured");
      }
      const uploadedUrl = yield this.mediaService.uploadMedia(blob);
      if (!uploadedUrl) {
        throw new Error("Failed to upload image");
      }
      yield this.updateDocumentImage(uploadedUrl).then(() => {
        this.uploadState = LoadingState.IDLE;
      });
    });
  }
  handleGallery() {
    return __async(this, null, function* () {
      if (!this.currentSide)
        return;
      this.uploadState = LoadingState.LOADING;
      const { blob } = yield this.mediaService.selectAndProcessFile();
      if (!blob) {
        throw new Error("No file selected");
      }
      const uploadedUrl = yield this.mediaService.uploadMedia(blob);
      if (!uploadedUrl) {
        throw new Error("Failed to upload file");
      }
      yield this.updateDocumentImage(uploadedUrl).then(() => {
        this.uploadState = LoadingState.IDLE;
      });
    });
  }
  updateDocumentImage(url) {
    return __async(this, null, function* () {
      if (!this.currentSide)
        return;
      const updatedImages = __spreadValues({}, this.documentImages);
      if (this.currentSide === DocumentSide.FRONT) {
        updatedImages.front_image = url;
      } else {
        updatedImages.back_image = url;
      }
      this.documentUpdate.emit(updatedImages);
    });
  }
  removeDocument(side) {
    return __async(this, null, function* () {
      const updatedImages = __spreadValues({}, this.documentImages);
      if (side === DocumentSide.FRONT) {
        updatedImages.front_image = void 0;
      } else {
        updatedImages.back_image = void 0;
      }
      this.documentUpdate.emit(updatedImages);
      this.documentDelete.emit(side);
    });
  }
  getDocumentDisplayName() {
    const kycDocumentKey = `documents.kyc.${this.documentName}`;
    const kycDocumentName = this.translate.instant(kycDocumentKey);
    if (kycDocumentName !== kycDocumentKey) {
      return kycDocumentName;
    }
    return this.documentName.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
};
_DocumentUploaderComponent.\u0275fac = function DocumentUploaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocumentUploaderComponent)(\u0275\u0275directiveInject(MediaService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ToastController));
};
_DocumentUploaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentUploaderComponent, selectors: [["app-document-uploader"]], inputs: { documentName: "documentName", documentImages: "documentImages", documentStatus: "documentStatus" }, outputs: { documentUpdate: "documentUpdate", documentDelete: "documentDelete" }, decls: 36, vars: 24, consts: [["mode", "ios", 3, "inset"], ["color", "grey"], ["slot", "start"], [3, "src", "alt"], [1, "ion-align-items-center"], ["size", "auto", 1, "button-container"], ["color", "danger", "fill", "clear", "shape", "round", "size", "large", 3, "click", "disabled"], ["name", "trash", "slot", "icon-only"], ["shape", "round", "size", "large", 3, "click"], ["name", "cloud-upload", "slot", "icon-only"], [3, "didDismiss", "isOpen", "buttons"]], template: function DocumentUploaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 0)(1, "ion-item", 1)(2, "ion-label")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "ion-item", 1)(6, "ion-thumbnail", 2);
    \u0275\u0275element(7, "ion-img", 3);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-label")(10, "ion-row", 4)(11, "ion-col")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ion-col", 5)(16, "ion-button", 6);
    \u0275\u0275listener("click", function DocumentUploaderComponent_Template_ion_button_click_16_listener() {
      return ctx.removeDocument(ctx.DocumentSide.FRONT);
    });
    \u0275\u0275element(17, "ion-icon", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-button", 8);
    \u0275\u0275listener("click", function DocumentUploaderComponent_Template_ion_button_click_18_listener() {
      return ctx.openActionSheet(ctx.DocumentSide.FRONT);
    });
    \u0275\u0275element(19, "ion-icon", 9);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(20, "ion-item", 1)(21, "ion-thumbnail", 2);
    \u0275\u0275element(22, "ion-img", 3);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-label")(25, "ion-row", 4)(26, "ion-col")(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "ion-col", 5)(31, "ion-button", 6);
    \u0275\u0275listener("click", function DocumentUploaderComponent_Template_ion_button_click_31_listener() {
      return ctx.removeDocument(ctx.DocumentSide.BACK);
    });
    \u0275\u0275element(32, "ion-icon", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ion-button", 8);
    \u0275\u0275listener("click", function DocumentUploaderComponent_Template_ion_button_click_33_listener() {
      return ctx.openActionSheet(ctx.DocumentSide.BACK);
    });
    \u0275\u0275element(34, "ion-icon", 9);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(35, "ion-action-sheet", 10);
    \u0275\u0275listener("didDismiss", function DocumentUploaderComponent_Template_ion_action_sheet_didDismiss_35_listener() {
      return ctx.actionSheetState = ctx.UIState.CLOSED;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.getDocumentDisplayName());
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx.documentImages.front_image || "https://ionicframework.com/docs/img/demos/thumbnail.svg")("alt", \u0275\u0275pipeBind1(8, 16, "documents.front_side"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 18, "documents.front_side"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("visibility", ctx.documentImages.front_image ? "visible" : "hidden");
    \u0275\u0275property("disabled", ctx.isDeleteDisabled());
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx.documentImages.back_image || "https://ionicframework.com/docs/img/demos/thumbnail.svg")("alt", \u0275\u0275pipeBind1(23, 20, "documents.back_side"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 22, "documents.back_side"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("visibility", ctx.documentImages.back_image ? "visible" : "hidden");
    \u0275\u0275property("disabled", ctx.isDeleteDisabled());
    \u0275\u0275advance(4);
    \u0275\u0275property("isOpen", ctx.actionSheetState === ctx.UIState.OPEN)("buttons", ctx.actionSheetButtons);
  }
}, dependencies: [
  CommonModule,
  FormsModule,
  IonList,
  IonItem,
  IonLabel,
  IonImg,
  IonButton,
  IonIcon,
  IonThumbnail,
  IonRow,
  IonCol,
  IonActionSheet,
  TranslateModule,
  TranslatePipe
], encapsulation: 2 });
var DocumentUploaderComponent = _DocumentUploaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentUploaderComponent, [{
    type: Component,
    args: [{ selector: "app-document-uploader", imports: [
      CommonModule,
      FormsModule,
      IonList,
      IonItem,
      IonLabel,
      IonImg,
      IonButton,
      IonIcon,
      IonThumbnail,
      IonRow,
      IonCol,
      IonActionSheet,
      TranslateModule
    ], template: `<ion-list [inset]="true" mode="ios">
  <ion-item color="grey">
    <ion-label>
      <strong>{{ getDocumentDisplayName() }}</strong>
    </ion-label>
  </ion-item>
  <!-- Front side -->
  <ion-item color="grey">
    <ion-thumbnail slot="start">
      <ion-img
        [src]="
          documentImages.front_image ||
          'https://ionicframework.com/docs/img/demos/thumbnail.svg'
        "
        [alt]="'documents.front_side' | translate"
      ></ion-img>
    </ion-thumbnail>
    <ion-label>
      <ion-row class="ion-align-items-center">
        <ion-col>
          <span>{{ 'documents.front_side' | translate }}</span>
        </ion-col>
        <ion-col size="auto" class="button-container">
          <ion-button
            [style.visibility]="
              documentImages.front_image ? 'visible' : 'hidden'
            "
            (click)="removeDocument(DocumentSide.FRONT)"
            color="danger"
            fill="clear"
            shape="round"
            size="large"
            [disabled]="isDeleteDisabled()"
          >
            <ion-icon name="trash" slot="icon-only"></ion-icon>
          </ion-button>
          <ion-button
            (click)="openActionSheet(DocumentSide.FRONT)"
            shape="round"
            size="large"
          >
            <ion-icon name="cloud-upload" slot="icon-only"></ion-icon>
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-label>
  </ion-item>

  <!-- Back side -->
  <ion-item color="grey">
    <ion-thumbnail slot="start">
      <ion-img
        [src]="
          documentImages.back_image ||
          'https://ionicframework.com/docs/img/demos/thumbnail.svg'
        "
        [alt]="'documents.back_side' | translate"
      ></ion-img>
    </ion-thumbnail>
    <ion-label>
      <ion-row class="ion-align-items-center">
        <ion-col>
          <span>{{ 'documents.back_side' | translate }}</span>
        </ion-col>
        <ion-col size="auto" class="button-container">
          <ion-button
            [style.visibility]="
              documentImages.back_image ? 'visible' : 'hidden'
            "
            (click)="removeDocument(DocumentSide.BACK)"
            color="danger"
            fill="clear"
            shape="round"
            size="large"
            [disabled]="isDeleteDisabled()"
          >
            <ion-icon name="trash" slot="icon-only"></ion-icon>
          </ion-button>
          <ion-button
            (click)="openActionSheet(DocumentSide.BACK)"
            shape="round"
            size="large"
          >
            <ion-icon name="cloud-upload" slot="icon-only"></ion-icon>
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-label>
  </ion-item>
</ion-list>

<ion-action-sheet
  [isOpen]="actionSheetState === UIState.OPEN"
  [buttons]="actionSheetButtons"
  (didDismiss)="actionSheetState = UIState.CLOSED"
></ion-action-sheet>
` }]
  }], () => [{ type: MediaService }, { type: TranslateService }, { type: ToastController }], { documentName: [{
    type: Input
  }], documentImages: [{
    type: Input
  }], documentStatus: [{
    type: Input
  }], documentUpdate: [{
    type: Output
  }], documentDelete: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentUploaderComponent, { className: "DocumentUploaderComponent", filePath: "src/app/components/document-uploader/document-uploader.component.ts", lineNumber: 66 });
})();

export {
  DocumentUploaderComponent
};
//# sourceMappingURL=chunk-ATMQL2VM.js.map
