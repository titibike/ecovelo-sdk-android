import {
  DocumentUploaderComponent
} from "./chunk-ATMQL2VM.js";
import "./chunk-2NC5PCU4.js";
import "./chunk-NEYQRVBS.js";
import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-OEYRANOA.js";
import "./chunk-7GZOXTNY.js";
import "./chunk-ULLB7OBK.js";
import {
  KYCWrapperService
} from "./chunk-IBT2NAXJ.js";
import {
  AccountService,
  SubscriptionProcessService
} from "./chunk-6J5UKKBN.js";
import "./chunk-FOJAXRYS.js";
import {
  addIcons,
  checkmarkCircleOutline,
  closeCircleOutline,
  closeOutline,
  cloudUploadOutline,
  eyeOutline,
  timeOutline
} from "./chunk-3E6DEK7U.js";
import {
  ToastService,
  ToastType
} from "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  IonBadge,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonModal2 as IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
  LoadingController,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ViewChild,
  computed,
  effect,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
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

// src/app/pages/kyc/kyc.page.ts
var _c0 = ["kycImagesModal"];
var _c1 = () => ({});
function KYCPage_div_12_ion_item_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const docName_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "kyc.rejection_reason"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.documentStatuses()[docName_r2].rejection_reason, " ");
  }
}
function KYCPage_div_12_ion_item_1_ion_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 12);
    \u0275\u0275listener("click", function KYCPage_div_12_ion_item_1_ion_button_9_Template_ion_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const docName_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.openKycImagesModal(docName_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "ion-icon", 13);
    \u0275\u0275elementEnd();
  }
}
function KYCPage_div_12_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 8);
    \u0275\u0275listener("click", function KYCPage_div_12_ion_item_1_Template_ion_item_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const docName_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((ctx_r2.existingDocumentImages()[docName_r2].front || ctx_r2.existingDocumentImages()[docName_r2].back) && ctx_r2.openKycImagesModal(docName_r2));
    });
    \u0275\u0275elementStart(1, "ion-label")(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, KYCPage_div_12_ion_item_1_p_5_Template, 5, 4, "p", 9);
    \u0275\u0275elementStart(6, "ion-badge", 10);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, KYCPage_div_12_ion_item_1_ion_button_9_Template, 2, 0, "ion-button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const docName_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "documents.kyc." + docName_r2));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.documentStatuses()[docName_r2].status === "rejected" && ctx_r2.documentStatuses()[docName_r2].rejection_reason);
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r2.documentStatuses()[docName_r2].color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "kyc.status." + ctx_r2.documentStatuses()[docName_r2].status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.existingDocumentImages()[docName_r2].front || ctx_r2.existingDocumentImages()[docName_r2].back);
  }
}
function KYCPage_div_12_app_document_uploader_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-document-uploader", 14);
    \u0275\u0275listener("documentUpdate", function KYCPage_div_12_app_document_uploader_2_Template_app_document_uploader_documentUpdate_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const docName_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDocumentImagesChange(docName_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const docName_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("documentName", docName_r2)("documentImages", ctx_r2.documentImages[docName_r2] || \u0275\u0275pureFunction0(3, _c1))("documentStatus", ctx_r2.documentStatuses()[docName_r2].status);
  }
}
function KYCPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, KYCPage_div_12_ion_item_1_Template, 10, 9, "ion-item", 6)(2, KYCPage_div_12_app_document_uploader_2_Template, 1, 4, "app-document-uploader", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const docName_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.documentStatuses()[docName_r2].status === "pending" || ctx_r2.documentStatuses()[docName_r2].status === "approved" || ctx_r2.documentStatuses()[docName_r2].status === "rejected");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.documentStatuses()[docName_r2].status !== "pending" && ctx_r2.documentStatuses()[docName_r2].status !== "approved");
  }
}
function KYCPage_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-row", 15)(1, "ion-col")(2, "ion-button", 16);
    \u0275\u0275listener("click", function KYCPage_ion_row_13_Template_ion_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitDocuments());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.isComplete());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, ctx_r2.getSubmitButtonText()), " ");
  }
}
function KYCPage_ng_template_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "ion-img", 21);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "documents.front_side"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.selectedDocumentImages.front)("alt", \u0275\u0275pipeBind1(5, 5, "documents.front_side"));
  }
}
function KYCPage_ng_template_16_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "ion-img", 21);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "documents.back_side"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.selectedDocumentImages.back)("alt", \u0275\u0275pipeBind1(5, 5, "documents.back_side"));
  }
}
function KYCPage_ng_template_16_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "kyc.no_images_available"));
  }
}
function KYCPage_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 17)(6, "ion-button", 18);
    \u0275\u0275listener("click", function KYCPage_ng_template_16_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      \u0275\u0275nextContext();
      const kycImagesModal_r8 = \u0275\u0275reference(15);
      return \u0275\u0275resetView(kycImagesModal_r8.dismiss());
    });
    \u0275\u0275element(7, "ion-icon", 19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "ion-content", 15);
    \u0275\u0275template(9, KYCPage_ng_template_16_div_9_Template, 6, 7, "div", 9)(10, KYCPage_ng_template_16_div_10_Template, 6, 7, "div", 9)(11, KYCPage_ng_template_16_div_11_Template, 4, 3, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "documents.kyc." + ctx_r2.selectedDocumentName));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.selectedDocumentImages.front);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedDocumentImages.back);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedDocumentImages.front && !ctx_r2.selectedDocumentImages.back);
  }
}
var RegistrationState;
(function(RegistrationState2) {
  RegistrationState2["REGISTRATING"] = "registrating";
  RegistrationState2["REGISTRATED"] = "registrated";
})(RegistrationState || (RegistrationState = {}));
var _KYCPage = class _KYCPage {
  constructor(kycService, accountService, router, toastService, translate, loadingCtrl, subscriptionProcess, cdr) {
    this.kycService = kycService;
    this.accountService = accountService;
    this.router = router;
    this.toastService = toastService;
    this.translate = translate;
    this.loadingCtrl = loadingCtrl;
    this.subscriptionProcess = subscriptionProcess;
    this.cdr = cdr;
    this.documentImages = {};
    this.initialDocumentImages = {};
    this.next = null;
    this.registrationState = RegistrationState.REGISTRATED;
    this.cyclistState = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    this.selectedDocumentName = "";
    this.selectedDocumentImages = {};
    this.requiredDocuments = computed(() => {
      return this.kycService.enabledDocumentTypes().map((doc) => doc.name).filter((name) => name !== void 0);
    });
    this.documentStatuses = computed(() => {
      const cyclistState = this.accountService.cyclistState();
      if (!("cyclist" in cyclistState))
        return {};
      const enabledDocs = this.requiredDocuments();
      const statuses = {};
      enabledDocs.forEach((docName) => {
        const cyclistDoc = Object.values(cyclistState.cyclist.kyc_documents || {}).find((doc) => doc.name === docName);
        const status = (cyclistDoc == null ? void 0 : cyclistDoc.status) || "not_submitted";
        let color = "medium";
        switch (status) {
          case "approved":
            color = "success";
            break;
          case "rejected":
            color = "danger";
            break;
          case "pending":
            color = "primary";
            break;
          default:
            color = "medium";
        }
        statuses[docName] = {
          status,
          color,
          rejection_reason: cyclistDoc == null ? void 0 : cyclistDoc.rejection_reason
        };
      });
      return statuses;
    });
    this.existingDocumentImages = computed(() => {
      const cyclistState = this.accountService.cyclistState();
      if (!("cyclist" in cyclistState))
        return {};
      const enabledDocs = this.requiredDocuments();
      const images = {};
      enabledDocs.forEach((docName) => {
        var _a, _b;
        const cyclistDoc = Object.values(cyclistState.cyclist.kyc_documents || {}).find((doc) => doc.name === docName);
        if (cyclistDoc == null ? void 0 : cyclistDoc.files) {
          images[docName] = {
            front: ((_a = cyclistDoc.files.frontside) == null ? void 0 : _a.file_url) || void 0,
            back: ((_b = cyclistDoc.files.backside) == null ? void 0 : _b.file_url) || void 0
          };
        }
      });
      return images;
    });
    addIcons({
      checkmarkCircle: checkmarkCircleOutline,
      closeCircle: closeCircleOutline,
      timeOutline,
      cloudUploadOutline,
      closeOutline,
      eyeOutline
    });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
      if (this.cyclistState.state === "unknown") {
        setTimeout(() => {
          const currentState = this.accountService.cyclistState();
          if (currentState.state === "unknown") {
            this.router.navigate(["/map"]);
          }
        }, 2e3);
      }
    });
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      const queryParams = new URLSearchParams(window.location.search);
      this.next = queryParams.get("next");
      this.registrationState = queryParams.get("onboarding") === "true" ? RegistrationState.REGISTRATING : RegistrationState.REGISTRATED;
      this.documentImages = {};
      this.initialDocumentImages = {};
      if (this.requiredDocuments().length === 0) {
        this.toastService.createWithJustMessage(this.translate.instant("kyc.no_documents_available"), ToastType.Warning);
      }
    });
  }
  onDocumentImagesChange(documentName, images) {
    this.documentImages[documentName] = images;
  }
  openKycImagesModal(documentName) {
    this.selectedDocumentName = documentName;
    this.selectedDocumentImages = this.existingDocumentImages()[documentName] || {};
    this.kycImagesModal.present();
  }
  submitDocuments() {
    return __async(this, null, function* () {
      const documentsToSubmit = this.requiredDocuments();
      if (documentsToSubmit.length > 0) {
        let loading = null;
        loading = yield this.loadingCtrl.create({
          message: this.translate.instant("kyc.uploading_documents")
        });
        yield loading.present();
        const documentsToUpload = [];
        for (const [documentType, currentImages] of Object.entries(this.documentImages)) {
          const initialImages = this.initialDocumentImages[documentType] || {};
          const frontChanged = currentImages.front_image !== initialImages.front_image;
          const backChanged = currentImages.back_image !== initialImages.back_image;
          if (frontChanged || backChanged) {
            documentsToUpload.push({
              document_type: documentType,
              files: {
                frontside: frontChanged ? currentImages.front_image || void 0 : void 0,
                backside: backChanged ? currentImages.back_image || void 0 : void 0
              }
            });
          }
        }
        for (const document of documentsToUpload) {
          yield this.kycService.uploadDocument(document);
        }
        yield this.accountService.loadCyclist();
        yield this.handlePostUploadNavigation();
        yield loading.dismiss();
      } else if (this.next) {
        yield this.router.navigate([this.next]);
      }
    });
  }
  handlePostUploadNavigation() {
    return __async(this, null, function* () {
      var _a, _b, _c;
      if (this.registrationState === RegistrationState.REGISTRATING) {
        const process = yield firstValueFrom(this.subscriptionProcess.getCurrentProcess());
        const hasSupportingDocuments = ((_a = process == null ? void 0 : process.forfait) == null ? void 0 : _a.supporting_documents) && ((_c = (_b = process == null ? void 0 : process.forfait) == null ? void 0 : _b.supporting_documents) == null ? void 0 : _c.length) > 0;
        if (hasSupportingDocuments) {
          yield this.subscriptionProcess.updateStep("documents");
          yield this.router.navigate(["/supporting-documents"], {
            queryParams: { next: "/verify-phone" },
            replaceUrl: true
          });
        } else {
          yield this.subscriptionProcess.updateStep("phone");
          yield this.router.navigate(["/verify-phone"]);
        }
      } else {
        yield this.router.navigate(["/map"]);
      }
    });
  }
  isComplete() {
    const documentsToSubmit = this.requiredDocuments();
    const statuses = this.documentStatuses();
    if (documentsToSubmit.length === 0) {
      return true;
    }
    const documentsNeedingSubmission = documentsToSubmit.filter((doc) => {
      var _a;
      const status = (_a = statuses[doc]) == null ? void 0 : _a.status;
      return status === "missing" || status === "rejected" || status === "not_submitted";
    });
    if (documentsNeedingSubmission.length === 0) {
      return false;
    }
    const allDocumentsHaveFiles = documentsNeedingSubmission.every((doc) => {
      const docImages = this.documentImages[doc];
      return docImages && (docImages.front_image || docImages.back_image);
    });
    const hasNewFiles = this.hasNewFilesToUpload();
    return allDocumentsHaveFiles && hasNewFiles;
  }
  hasNewFilesToUpload() {
    const result = Object.entries(this.documentImages).some(([docName, currentImages]) => {
      const initialImages = this.initialDocumentImages[docName] || {};
      const frontChanged = currentImages.front_image !== initialImages.front_image;
      const backChanged = currentImages.back_image !== initialImages.back_image;
      return frontChanged || backChanged;
    });
    return result;
  }
  shouldShowSubmitButton() {
    const documentsToSubmit = this.requiredDocuments();
    const statuses = this.documentStatuses();
    if (documentsToSubmit.length === 0) {
      return false;
    }
    return documentsToSubmit.some((doc) => {
      var _a;
      const status = (_a = statuses[doc]) == null ? void 0 : _a.status;
      return status === "missing" || status === "rejected" || status === "not_submitted";
    });
  }
  getSubmitButtonText() {
    const documentsToSubmit = this.requiredDocuments();
    const statuses = this.documentStatuses();
    const hasRejectedDocs = documentsToSubmit.some((doc) => {
      var _a;
      const status = (_a = statuses[doc]) == null ? void 0 : _a.status;
      return status === "rejected";
    });
    if (hasRejectedDocs) {
      return "kyc.resubmit_documents";
    }
    return "kyc.submit_documents";
  }
};
_KYCPage.\u0275fac = function KYCPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _KYCPage)(\u0275\u0275directiveInject(KYCWrapperService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(SubscriptionProcessService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_KYCPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KYCPage, selectors: [["app-kyc"]], viewQuery: function KYCPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.kycImagesModal = _t.first);
  }
}, decls: 17, vars: 10, consts: [["kycImagesModal", ""], [3, "defaultHref"], [3, "fullscreen"], [1, "ion-padding-horizontal"], [4, "ngFor", "ngForOf"], ["class", "ion-padding", 4, "ngIf"], [3, "click", 4, "ngIf"], [3, "documentName", "documentImages", "documentStatus", "documentUpdate", 4, "ngIf"], [3, "click"], [4, "ngIf"], [1, "ion-no-margin", 3, "color"], ["fill", "clear", "slot", "end", 3, "click", 4, "ngIf"], ["fill", "clear", "slot", "end", 3, "click"], ["name", "eye-outline"], [3, "documentUpdate", "documentName", "documentImages", "documentStatus"], [1, "ion-padding"], ["expand", "block", 3, "click", "disabled"], ["slot", "end"], ["fill", "clear", "color", "dark", 3, "click"], ["name", "close-outline"], ["class", "ion-text-center", 4, "ngIf"], [1, "ion-margin-bottom", 3, "src", "alt"], [1, "ion-text-center"]], template: function KYCPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 1);
    \u0275\u0275elementStart(1, "ion-content", 2)(2, "ion-row", 3)(3, "ion-col")(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ion-row", 3)(11, "ion-col");
    \u0275\u0275template(12, KYCPage_div_12_Template, 3, 2, "div", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, KYCPage_ion_row_13_Template, 5, 4, "ion-row", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-modal", null, 0);
    \u0275\u0275template(16, KYCPage_ng_template_16_Template, 12, 6, "ng-template");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance();
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "kyc.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "kyc.description"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.requiredDocuments());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.shouldShowSubmitButton());
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  IonContent,
  IonButton,
  IonRow,
  IonCol,
  IonItem,
  TranslateModule,
  TranslatePipe,
  HeaderComponent,
  DocumentUploaderComponent,
  IonBadge,
  IonLabel,
  IonIcon,
  RouterModule,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonImg
], encapsulation: 2 });
var KYCPage = _KYCPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KYCPage, [{
    type: Component,
    args: [{ selector: "app-kyc", imports: [
      CommonModule,
      IonContent,
      IonButton,
      IonRow,
      IonCol,
      IonItem,
      TranslateModule,
      HeaderComponent,
      DocumentUploaderComponent,
      IonBadge,
      IonLabel,
      IonIcon,
      RouterModule,
      IonModal,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonImg
    ], template: `<app-header [defaultHref]="'/account'"></app-header>

<ion-content [fullscreen]="true">
  <ion-row class="ion-padding-horizontal">
    <ion-col>
      <h2>{{ 'kyc.subtitle' | translate }}</h2>
      <p>{{ 'kyc.description' | translate }}</p>
    </ion-col>
  </ion-row>

  <ion-row class="ion-padding-horizontal">
    <ion-col>
      <div *ngFor="let docName of requiredDocuments()">
        <ion-item
          *ngIf="documentStatuses()[docName].status === 'pending' || 
                   documentStatuses()[docName].status === 'approved' || 
                   documentStatuses()[docName].status === 'rejected'"
          (click)="(existingDocumentImages()[docName].front || existingDocumentImages()[docName].back) && openKycImagesModal(docName)"
        >
          <ion-label>
            <h2>{{ 'documents.kyc.' + docName | translate }}</h2>
            <p
              *ngIf="documentStatuses()[docName].status === 'rejected' && documentStatuses()[docName].rejection_reason"
            >
              <strong>{{ 'kyc.rejection_reason' | translate }}:</strong>
              {{ documentStatuses()[docName].rejection_reason }}
            </p>
            <ion-badge
              [color]="documentStatuses()[docName].color"
              class="ion-no-margin"
            >
              {{ 'kyc.status.' + documentStatuses()[docName].status | translate
              }}
            </ion-badge>
          </ion-label>
          <ion-button
            *ngIf="existingDocumentImages()[docName].front || existingDocumentImages()[docName].back"
            fill="clear"
            slot="end"
            (click)="openKycImagesModal(docName); $event.stopPropagation()"
          >
            <ion-icon name="eye-outline"></ion-icon>
          </ion-button>
        </ion-item>
        <app-document-uploader
          *ngIf="documentStatuses()[docName].status !== 'pending' && 
                 documentStatuses()[docName].status !== 'approved'"
          [documentName]="docName"
          [documentImages]="documentImages[docName] || {}"
          [documentStatus]="documentStatuses()[docName].status"
          (documentUpdate)="onDocumentImagesChange(docName, $event)"
        ></app-document-uploader>
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-padding" *ngIf="shouldShowSubmitButton()">
    <ion-col>
      <ion-button
        expand="block"
        (click)="submitDocuments()"
        [disabled]="!isComplete()"
      >
        {{ getSubmitButtonText() | translate }}
      </ion-button>
    </ion-col>
  </ion-row>
</ion-content>

<!-- KYC Images Modal -->
<ion-modal #kycImagesModal>
  <ng-template>
    <ion-header>
      <ion-toolbar>
        <ion-title
          >{{ 'documents.kyc.' + selectedDocumentName | translate }}</ion-title
        >
        <ion-buttons slot="end">
          <ion-button
            (click)="kycImagesModal.dismiss()"
            fill="clear"
            color="dark"
          >
            <ion-icon name="close-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <!-- Front side -->
      <div *ngIf="selectedDocumentImages.front">
        <h3>{{ 'documents.front_side' | translate }}</h3>
        <ion-img
          [src]="selectedDocumentImages.front"
          [alt]="'documents.front_side' | translate"
          class="ion-margin-bottom"
        ></ion-img>
      </div>

      <!-- Back side -->
      <div *ngIf="selectedDocumentImages.back">
        <h3>{{ 'documents.back_side' | translate }}</h3>
        <ion-img
          [src]="selectedDocumentImages.back"
          [alt]="'documents.back_side' | translate"
          class="ion-margin-bottom"
        ></ion-img>
      </div>

      <!-- No images message -->
      <div
        *ngIf="!selectedDocumentImages.front && !selectedDocumentImages.back"
        class="ion-text-center"
      >
        <p>{{ 'kyc.no_images_available' | translate }}</p>
      </div>
    </ion-content>
  </ng-template>
</ion-modal>
` }]
  }], () => [{ type: KYCWrapperService }, { type: AccountService }, { type: Router }, { type: ToastService }, { type: TranslateService }, { type: LoadingController }, { type: SubscriptionProcessService }, { type: ChangeDetectorRef }], { kycImagesModal: [{
    type: ViewChild,
    args: ["kycImagesModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KYCPage, { className: "KYCPage", filePath: "src/app/pages/kyc/kyc.page.ts", lineNumber: 90 });
})();
export {
  KYCPage
};
//# sourceMappingURL=kyc.page-2PFPPOMH.js.map
