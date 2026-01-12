import {
  AccountService,
  CyclistsService,
  KYCService
} from "./chunk-5KPTYQ6O.js";
import {
  ErrorHandlerService,
  ToastService
} from "./chunk-UXTOZZ3E.js";
import {
  StorageService
} from "./chunk-MN6LZ2SJ.js";
import {
  Injectable,
  TranslateService,
  computed,
  effect,
  firstValueFrom,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/kyc.service.ts
var DocumentValidationState;
(function(DocumentValidationState2) {
  DocumentValidationState2["PENDING"] = "pending";
  DocumentValidationState2["APPROVED"] = "approved";
  DocumentValidationState2["REJECTED"] = "rejected";
  DocumentValidationState2["MISSING"] = "missing";
  DocumentValidationState2["NOT_ENABLED"] = "not_enabled";
})(DocumentValidationState || (DocumentValidationState = {}));
var DocumentRequirement;
(function(DocumentRequirement2) {
  DocumentRequirement2["MANDATORY"] = "mandatory";
  DocumentRequirement2["OPTIONAL"] = "optional";
  DocumentRequirement2["DISABLED"] = "disabled";
})(DocumentRequirement || (DocumentRequirement = {}));
var _KYCWrapperService = class _KYCWrapperService {
  constructor(kycService, cyclistsService, toastService, translate, accountService, storage, errorHandler) {
    this.kycService = kycService;
    this.cyclistsService = cyclistsService;
    this.toastService = toastService;
    this.translate = translate;
    this.accountService = accountService;
    this.storage = storage;
    this.errorHandler = errorHandler;
    this.kyc_document_types = signal([]);
    this.enabledDocumentTypes = computed(() => {
      return this.kyc_document_types().filter((doc) => doc.validation !== "disabled");
    });
    this.kycCompletionState = computed(() => {
      const requiredTypes = this.enabledDocumentTypes();
      const cyclistState = this.accountService.cyclistState();
      const cyclistDocs = "cyclist" in cyclistState && cyclistState.cyclist.kyc_documents ? Object.values(cyclistState.cyclist.kyc_documents) : [];
      if (requiredTypes.length === 0) {
        return DocumentValidationState.NOT_ENABLED;
      }
      const statuses = requiredTypes.map((doc) => {
        const cyclistDoc = cyclistDocs.find((cyclistDoc2) => cyclistDoc2.name === doc.name);
        if (!cyclistDoc) {
          return DocumentValidationState.MISSING;
        }
        const status = cyclistDoc.status;
        if (status === "approved") {
          return DocumentValidationState.APPROVED;
        }
        return status;
      });
      if (statuses.every((status) => status === DocumentValidationState.APPROVED)) {
        return DocumentValidationState.APPROVED;
      }
      if (statuses.some((status) => status === DocumentValidationState.REJECTED)) {
        return DocumentValidationState.REJECTED;
      }
      if (statuses.some((status) => status === DocumentValidationState.MISSING)) {
        return DocumentValidationState.MISSING;
      }
      if (statuses.some((status) => status === DocumentValidationState.PENDING)) {
        return DocumentValidationState.PENDING;
      }
      return DocumentValidationState.MISSING;
    });
    this.kycBlockingCheck = computed(() => {
      const cyclistState = this.accountService.cyclistState();
      if (!("cyclist" in cyclistState))
        return;
      const enabledDocs = this.enabledDocumentTypes();
      const hasIncompleteKyc = enabledDocs.some((docType) => {
        const cyclistDoc = Object.values(cyclistState.cyclist.kyc_documents || {}).find((doc) => doc.name === docType.name);
        return !cyclistDoc || cyclistDoc.status === DocumentValidationState.MISSING || cyclistDoc.status === DocumentValidationState.REJECTED;
      });
      const blockedReason = "KYC documents incomplete";
      untracked(() => {
        if (hasIncompleteKyc) {
          this.accountService.addBlockedReason(blockedReason);
        } else {
          this.accountService.removeBlockedReason(blockedReason);
        }
      });
    });
    effect(() => {
      this.kycBlockingCheck();
    });
  }
  // Helper method to find existing document by name
  findExistingDocument(documentType) {
    const cyclistState = this.accountService.cyclistState();
    if (!("cyclist" in cyclistState))
      return null;
    return Object.values(cyclistState.cyclist.kyc_documents || {}).find((doc) => doc.name === documentType) || null;
  }
  uploadDocument(document) {
    return __async(this, null, function* () {
      if (!document.document_type)
        return;
      try {
        const existingDoc = this.findExistingDocument(document.document_type);
        let documentId;
        if (existingDoc) {
          documentId = existingDoc.id;
        } else {
          const createResponse = yield firstValueFrom(this.kycService.createKycDocument({
            createKycDocumentRequest: {
              name: document.document_type
            }
          }));
          documentId = createResponse.id;
        }
        if (documentId && document.files) {
          const filesToUpload = {};
          if (document.files.frontside) {
            filesToUpload.frontside = document.files.frontside;
          }
          if (document.files.backside) {
            filesToUpload.backside = document.files.backside;
          }
          if (Object.keys(filesToUpload).length > 0) {
            yield firstValueFrom(this.kycService.uploadFile({
              id: documentId,
              uploadFileRequest: {
                files: filesToUpload
              }
            }));
          }
        }
      } catch (error) {
        this.errorHandler.handleError(error);
        throw error;
      }
    });
  }
  setKycDocumentTypes() {
    return __async(this, null, function* () {
      var _a;
      const program = yield this.storage.get("program");
      if ((_a = program == null ? void 0 : program.config) == null ? void 0 : _a.kyc_document_types) {
        this.kyc_document_types.set(program.config.kyc_document_types);
      }
    });
  }
};
_KYCWrapperService.\u0275fac = function KYCWrapperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _KYCWrapperService)(\u0275\u0275inject(KYCService), \u0275\u0275inject(CyclistsService), \u0275\u0275inject(ToastService), \u0275\u0275inject(TranslateService), \u0275\u0275inject(AccountService), \u0275\u0275inject(StorageService), \u0275\u0275inject(ErrorHandlerService));
};
_KYCWrapperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KYCWrapperService, factory: _KYCWrapperService.\u0275fac, providedIn: "root" });
var KYCWrapperService = _KYCWrapperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KYCWrapperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: KYCService }, { type: CyclistsService }, { type: ToastService }, { type: TranslateService }, { type: AccountService }, { type: StorageService }, { type: ErrorHandlerService }], null);
})();

export {
  KYCWrapperService
};
//# sourceMappingURL=chunk-H4GUYJEZ.js.map
