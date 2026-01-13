import {
  AbonnementWrapperService
} from "./chunk-HXPAB5CU.js";
import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonRow,
  IonSkeletonText,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar,
  IonicModule,
  TextValueAccessorDirective
} from "./chunk-ULLB7OBK.js";
import {
  AuthService,
  ForfaitsWrapperService
} from "./chunk-RK7YL5P5.js";
import {
  AccountService,
  SubscriptionProcessService
} from "./chunk-6J5UKKBN.js";
import {
  AlertController,
  CommonModule,
  Component,
  FormsModule,
  Input,
  LoadingController,
  ModalController,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UANRONUE.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/components/modals/forfaits/forfaits.component.ts
function ForfaitListModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "ion-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "generic.loading"));
  }
}
function ForfaitListModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.forfaitsState.error);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const forfait_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", forfait_r3.fiche.price, " ");
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_7_div_1_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tarif_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tarif_r4.description);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 9)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ForfaitListModalComponent_Conditional_11_ion_col_2_div_7_div_1_small_8_Template, 2, 1, "small", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tarif_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, tarif_r4 == null ? null : tarif_r4.title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, tarif_r4 == null ? null : tarif_r4.price));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", tarif_r4 == null ? null : tarif_r4.description);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, ForfaitListModalComponent_Conditional_11_ion_col_2_div_7_div_1_Template, 9, 7, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const forfait_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", forfait_r3.fiche.tarifs);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "small", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const forfait_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(forfait_r3.fiche.description);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "small", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const forfait_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(forfait_r3.fiche.cpu);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, ForfaitListModalComponent_Conditional_11_ion_col_2_div_8_div_1_Template, 3, 1, "div", 19)(2, ForfaitListModalComponent_Conditional_11_ion_col_2_div_8_div_2_Template, 3, 1, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const forfait_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", forfait_r3.fiche == null ? null : forfait_r3.fiche.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", forfait_r3.fiche == null ? null : forfait_r3.fiche.cpu);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-col", 7)(1, "div", 8);
    \u0275\u0275listener("click", function ForfaitListModalComponent_Conditional_11_ion_col_2_Template_div_click_1_listener() {
      const forfait_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectForfait(forfait_r3));
    });
    \u0275\u0275elementStart(2, "div", 9)(3, "h2", 10);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ForfaitListModalComponent_Conditional_11_ion_col_2_div_6_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ForfaitListModalComponent_Conditional_11_ion_col_2_div_7_Template, 2, 1, "div", 12)(8, ForfaitListModalComponent_Conditional_11_ion_col_2_div_8_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const forfait_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r0.forfaitsState.state === "success" && ctx_r0.forfaitsState.selectedForfait === forfait_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, forfait_r3.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", forfait_r3.fiche == null ? null : forfait_r3.fiche.price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", forfait_r3.fiche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.forfaitsState.state === "success" && ctx_r0.forfaitsState.selectedForfait === forfait_r3 && ((forfait_r3.fiche == null ? null : forfait_r3.fiche.description) || (forfait_r3.fiche == null ? null : forfait_r3.fiche.cpu)));
  }
}
function ForfaitListModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-grid")(1, "ion-row", 5);
    \u0275\u0275template(2, ForfaitListModalComponent_Conditional_11_ion_col_2_Template, 9, 8, "ion-col", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.forfaitsState.forfaits);
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "ion-button", 23);
    \u0275\u0275listener("click", function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Conditional_1_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.modalCtrl.dismiss());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-button", 24);
    \u0275\u0275listener("click", function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Conditional_1_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.AbonnementWrapperService.requestDeletion());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "generic.close"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "forfait.cancel_subscription"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.active_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.deletion_requested_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.waiting_validation_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.incomplete_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.past_due_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.unpaid_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.default_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Conditional_1_Template, 7, 6, "div", 21);
    \u0275\u0275elementStart(2, "p", 22)(3, "small");
    \u0275\u0275template(4, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_4_Template, 2, 3)(5, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_5_Template, 2, 3)(6, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_6_Template, 2, 3)(7, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_7_Template, 2, 3)(8, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_8_Template, 2, 3)(9, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_9_Template, 2, 3)(10, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_10_Template, 2, 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.currentAboState.state === "active" || ctx_r0.currentAboState.state === "waiting_validation" ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r0.currentAboState.state) === "active" ? 4 : tmp_4_0 === "deletion_requested" ? 5 : tmp_4_0 === "waiting_validation" ? 6 : tmp_4_0 === "incomplete" ? 7 : tmp_4_0 === "past_due" ? 8 : tmp_4_0 === "unpaid" ? 9 : 10);
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 25)(1, "ion-input", 27);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_1_Conditional_1_Template_ion_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.reduction, $event) || (ctx_r0.reduction = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reduction);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 2, "forfait.reduction_code"));
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_1_Conditional_1_Template, 3, 4, "ion-item", 25);
    \u0275\u0275elementStart(2, "ion-button", 26);
    \u0275\u0275listener("click", function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_1_Template_ion_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.handleForfaitSelection());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.forfaitsState.state === "success" && ctx_r0.forfaitsState.selectedForfait && ctx_r0.next !== "onboarding" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.forfaitsState.state !== "success" || !ctx_r0.forfaitsState.selectedForfait || ctx_r0.accountService.hasBlockedReasons() && ctx_r0.next !== "onboarding");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "generic.choose_plan"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Template, 11, 2, "div", 1)(1, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_1_Template, 5, 5, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.currentAboState.state !== "unknown" && ctx_r0.currentAboState.state !== "default" ? 0 : 1);
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-skeleton-text", 20);
  }
  if (rf & 2) {
    \u0275\u0275property("animated", true);
  }
}
function ForfaitListModalComponent_ion_footer_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-footer")(1, "ion-toolbar");
    \u0275\u0275template(2, ForfaitListModalComponent_ion_footer_12_Conditional_2_Template, 2, 1)(3, ForfaitListModalComponent_ion_footer_12_Conditional_3_Template, 1, 1, "ion-skeleton-text", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.forfaitsState.state === "success" ? 2 : 3);
  }
}
var _ForfaitListModalComponent = class _ForfaitListModalComponent {
  constructor(modalCtrl, forfaitsWrapperService, AbonnementWrapperService2, alertController, router, translate, loadingCtrl, subscriptionProcess, authService, accountService) {
    this.modalCtrl = modalCtrl;
    this.forfaitsWrapperService = forfaitsWrapperService;
    this.AbonnementWrapperService = AbonnementWrapperService2;
    this.alertController = alertController;
    this.router = router;
    this.translate = translate;
    this.loadingCtrl = loadingCtrl;
    this.subscriptionProcess = subscriptionProcess;
    this.authService = authService;
    this.accountService = accountService;
    this.next = "menu";
    this.aboState = { state: "loading" };
    this.currentAboState = { state: "unknown" };
    this.forfaitsState = { state: "loading" };
    this.authState = { state: "SignedOut" };
    this.cyclistState = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    this.promoCode = "";
    this.reduction = "";
    effect(() => {
      this.aboState = this.AbonnementWrapperService.listAbonnementsState();
    });
    effect(() => {
      this.currentAboState = this.AbonnementWrapperService.currentAbonnementState();
    });
    effect(() => {
      this.authState = this.authService.authState();
    });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
    });
  }
  ngOnInit() {
    this.forfaitsWrapperService.getForfaits().then((forfaits) => {
      if (forfaits) {
        this.forfaitsState = { state: "success", forfaits };
      } else {
        this.forfaitsState = {
          state: "error",
          error: new Error("Error loading forfaits")
        };
      }
    });
  }
  handleForfaitSelection() {
    return __async(this, null, function* () {
      if (this.forfaitsState.state === "success" && this.forfaitsState.selectedForfait && this.forfaitsState.selectedForfait.id) {
        if (this.next === "onboarding") {
          yield this.subscriptionProcess.startProcess(this.forfaitsState.selectedForfait, this.reduction);
          this.modalCtrl.dismiss({
            forfait: this.forfaitsState.selectedForfait,
            reduction: this.reduction
          });
        } else {
          const alert = yield this.alertController.create({
            header: "Confirmer l'abonnement",
            message: "Voulez-vous vraiment souscrire \xE0 ce forfait ?",
            buttons: [
              {
                text: "Annuler",
                role: "cancel"
              },
              {
                text: "Confirmer",
                handler: () => __async(this, null, function* () {
                  var _a;
                  if (this.forfaitsState.state === "success" && this.forfaitsState.selectedForfait) {
                    yield this.subscriptionProcess.startProcess(this.forfaitsState.selectedForfait, this.reduction);
                    if (this.forfaitsState.selectedForfait.supporting_documents && ((_a = this.forfaitsState.selectedForfait.supporting_documents) == null ? void 0 : _a.length) > 0) {
                      yield this.modalCtrl.dismiss();
                      yield this.router.navigate(["/supporting-documents"]);
                    } else {
                      const payload = yield this.subscriptionProcess.getCreateAbonnementPayload();
                      if (payload) {
                        this.createAbonnement(payload);
                        yield this.subscriptionProcess.clearProcess();
                      } else {
                        throw new Error("No subscription process found");
                      }
                    }
                  }
                })
              }
            ]
          });
          yield alert.present();
        }
      }
    });
  }
  createAbonnement(payload) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translate.instant("subscription.creation.loading")
      });
      yield loading.present();
      this.AbonnementWrapperService.createAbonnement(payload).finally(() => __async(this, null, function* () {
        yield loading.dismiss();
        yield this.modalCtrl.dismiss();
      }));
    });
  }
  selectForfait(forfait) {
    if (this.forfaitsState.state === "success") {
      this.forfaitsState.selectedForfait = forfait;
    }
  }
};
_ForfaitListModalComponent.\u0275fac = function ForfaitListModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForfaitListModalComponent)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(ForfaitsWrapperService), \u0275\u0275directiveInject(AbonnementWrapperService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(SubscriptionProcessService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AccountService));
};
_ForfaitListModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForfaitListModalComponent, selectors: [["app-forfaits"]], inputs: { next: "next" }, decls: 13, vars: 12, consts: [["color", "dark", "fill", "clear", 1, "ecl-no-shadow", "ion-float-right", 3, "click"], [1, "ion-padding"], [1, "ion-text-center"], ["color", "danger"], [4, "ngIf"], [1, "ion-justify-content-center"], ["size", "12", 4, "ngFor", "ngForOf"], ["size", "12"], [1, "forfait-card", 3, "click"], [1, "flex-between"], [1, "title"], ["class", "title title_price", 4, "ngIf"], ["class", "info-block", 4, "ngIf"], [1, "title", "title_price"], [1, "info-block"], ["class", "info-item", 4, "ngFor", "ngForOf"], [1, "info-item"], ["class", "description", 4, "ngIf"], [1, "description"], ["class", "info-item", 4, "ngIf"], [2, "width", "100%", "height", "100px", 3, "animated"], [2, "display", "flex", "gap", "10px", "justify-content", "center"], [1, "ion-text-center", "ion-no-margin"], ["color", "dark", "fill", "clear", 3, "click"], ["color", "danger", 3, "click"], ["lines", "none", 1, "ion-margin-bottom", "ion-margin-horizontal"], ["expand", "block", 3, "click", "disabled"], ["type", "text", "fill", "outline", "size", "small", 1, "ion-text-center", "ion-padding-horizontal", "ion-radius-medium", 3, "ngModelChange", "ngModel", "placeholder"]], template: function ForfaitListModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-title");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 0);
    \u0275\u0275listener("click", function ForfaitListModalComponent_Template_ion_button_click_5_listener() {
      return ctx.modalCtrl.dismiss();
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-content", 1);
    \u0275\u0275template(9, ForfaitListModalComponent_Conditional_9_Template, 5, 3, "div", 2)(10, ForfaitListModalComponent_Conditional_10_Template, 2, 1, "ion-text", 3)(11, ForfaitListModalComponent_Conditional_11_Template, 3, 1, "ion-grid");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ForfaitListModalComponent_ion_footer_12_Template, 4, 1, "ion-footer", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.authState.state === "SignedIn" ? \u0275\u0275pipeBind1(3, 6, "forfaits.title") : \u0275\u0275pipeBind1(4, 8, "forfaits.title_unauthenticated"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "generic.close"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.forfaitsState.state === "loading" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.forfaitsState.state === "error" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.forfaitsState.state === "success" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.authState.state === "SignedIn");
  }
}, dependencies: [CommonModule, NgForOf, NgIf, IonicModule, IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonInput, IonItem, IonRow, IonSkeletonText, IonSpinner, IonText, IonTitle, IonToolbar, TextValueAccessorDirective, TranslateModule, TranslatePipe, FormsModule, NgControlStatus, NgModel], styles: ["\n\n.forfait-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid #e0e0e0;\n  margin-bottom: 20px;\n  transition: all 0.3s ease;\n}\n.forfait-card.selected[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.forfait-card.selected[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n.forfait-card.selected[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], \n.forfait-card.selected[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.forfait-card[_ngcontent-%COMP%]   .flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forfait-card[_ngcontent-%COMP%]   .flex-between[_ngcontent-%COMP%]   .title_price[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.forfait-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n  font-size: 18px;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #666;\n}\n.forfait-card[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  cursor: pointer;\n  text-decoration: underline;\n  color: var(--ion-color-dark);\n}\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --min-height: auto;\n}\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=forfaits.component.css.map */"] });
var ForfaitListModalComponent = _ForfaitListModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForfaitListModalComponent, [{
    type: Component,
    args: [{ selector: "app-forfaits", imports: [CommonModule, IonicModule, TranslateModule, FormsModule], template: `<ion-header>
  <ion-title>{{
    authState.state === 'SignedIn'
      ? ('forfaits.title' | translate)
      : ('forfaits.title_unauthenticated' | translate)
  }}</ion-title>
  <ion-button
    color="dark"
    fill="clear"
    (click)="modalCtrl.dismiss()"
    class="ecl-no-shadow ion-float-right"
  >
    {{ 'generic.close' | translate }}
  </ion-button>
</ion-header>

<ion-content class="ion-padding">
  @if (forfaitsState.state === 'loading') {
  <div class="ion-text-center">
    <ion-spinner></ion-spinner>
    <p>{{ 'generic.loading' | translate }}</p>
  </div>
  } @if (forfaitsState.state === 'error') {
  <ion-text color="danger">{{ forfaitsState.error }}</ion-text>
  } @if (forfaitsState.state === 'success') {
  <ion-grid>
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" *ngFor="let forfait of forfaitsState.forfaits">
        <div
          class="forfait-card"
          [class.selected]="
            forfaitsState.state === 'success' &&
            forfaitsState.selectedForfait === forfait
          "
          (click)="selectForfait(forfait)"
        >
          <div class="flex-between">
            <h2 class="title">
              {{ forfait.name! | translate }}
            </h2>
            <div class="title title_price" *ngIf="forfait.fiche?.price">
              {{ forfait.fiche.price }}
            </div>
          </div>
          <div class="info-block" *ngIf="forfait.fiche">
            <div class="info-item" *ngFor="let tarif of forfait.fiche.tarifs">
              <div class="flex-between">
                <span>{{ tarif?.title! | translate }}</span>
                <span>{{ tarif?.price! | translate }}</span>
              </div>
              <small class="description" *ngIf="tarif?.description">{{
                tarif.description
              }}</small>
            </div>
          </div>
          <div
            class="info-block"
            *ngIf="
              forfaitsState.state === 'success' &&
              forfaitsState.selectedForfait === forfait &&
              (forfait.fiche?.description || forfait.fiche?.cpu)
            "
          >
            <div class="info-item" *ngIf="forfait.fiche?.description">
              <small class="description">{{ forfait.fiche.description }}</small>
            </div>
            <div class="info-item" *ngIf="forfait.fiche?.cpu">
              <small class="description">{{ forfait.fiche.cpu }}</small>
            </div>
          </div>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
  }
</ion-content>
<ion-footer *ngIf="authState.state === 'SignedIn'">
  <ion-toolbar>
    @if ( forfaitsState.state === 'success' ) { @if ( currentAboState.state !==
    'unknown' && currentAboState.state !== 'default' ) {
    <div class="ion-padding">
      @if (currentAboState.state === 'active' || currentAboState.state ===
      'waiting_validation') {
      <div style="display: flex; gap: 10px; justify-content: center">
        <ion-button (click)="modalCtrl.dismiss()" color="dark" fill="clear">
          {{ 'generic.close' | translate }}
        </ion-button>
        <ion-button
          color="danger"
          (click)="AbonnementWrapperService.requestDeletion()"
        >
          {{ 'forfait.cancel_subscription' | translate }}
        </ion-button>
      </div>
      }
      <p class="ion-text-center ion-no-margin">
        <small>
          @switch (currentAboState.state) { @case ('active') {
          {{ 'forfait.status.active_message' | translate }}
          } @case ('deletion_requested') {
          {{ 'forfait.status.deletion_requested_message' | translate }}
          } @case ('waiting_validation') {
          {{ 'forfait.status.waiting_validation_message' | translate }}
          } @case ('incomplete') {
          {{ 'forfait.status.incomplete_message' | translate }}
          } @case ('past_due') {
          {{ 'forfait.status.past_due_message' | translate }}
          } @case ('unpaid') {
          {{ 'forfait.status.unpaid_message' | translate }}
          } @default {
          {{ 'forfait.status.default_message' | translate }}
          } }
        </small>
      </p>
    </div>
    } @else {
    <div class="ion-padding">
      @if (forfaitsState.state === 'success' && forfaitsState.selectedForfait &&
      next !== 'onboarding') {
      <ion-item lines="none" class="ion-margin-bottom ion-margin-horizontal">
        <ion-input
          [(ngModel)]="reduction"
          [placeholder]="'forfait.reduction_code' | translate"
          type="text"
          fill="outline"
          class="ion-text-center ion-padding-horizontal ion-radius-medium"
          size="small"
        ></ion-input>
      </ion-item>
      }
      <ion-button
        expand="block"
        [disabled]="
          forfaitsState.state !== 'success' ||
          !forfaitsState.selectedForfait ||
          (accountService.hasBlockedReasons() && next !== 'onboarding')
        "
        (click)="handleForfaitSelection()"
      >
        {{ 'generic.choose_plan' | translate }}
      </ion-button>
    </div>
    } } @else {
    <ion-skeleton-text
      [animated]="true"
      style="width: 100%; height: 100px"
    ></ion-skeleton-text>
    }
  </ion-toolbar>
</ion-footer>
`, styles: ["/* src/app/components/modals/forfaits/forfaits.component.scss */\n.forfait-card {\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid #e0e0e0;\n  margin-bottom: 20px;\n  transition: all 0.3s ease;\n}\n.forfait-card.selected {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.forfait-card.selected .title,\n.forfait-card.selected .info-block .description,\n.forfait-card.selected .link {\n  color: inherit;\n}\n.forfait-card .flex-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forfait-card .flex-between .title_price {\n  white-space: nowrap;\n}\n.forfait-card .title {\n  font-weight: bold;\n  margin: 0;\n  font-size: 18px;\n}\n.forfait-card .info-block {\n  margin-top: 10px;\n}\n.forfait-card .info-block .info-item {\n  margin-top: 3px;\n}\n.forfait-card .info-block .info-item:last-child {\n  margin-bottom: 0;\n}\n.forfait-card .info-block .description {\n  font-size: 0.8em;\n  color: #666;\n}\n.forfait-card .link {\n  display: inline-block;\n  margin-top: 10px;\n  cursor: pointer;\n  text-decoration: underline;\n  color: var(--ion-color-dark);\n}\nion-footer ion-toolbar {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --min-height: auto;\n}\nion-footer ion-toolbar ion-button {\n  margin: 10px;\n}\nion-footer ion-toolbar ion-text {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=forfaits.component.css.map */\n"] }]
  }], () => [{ type: ModalController }, { type: ForfaitsWrapperService }, { type: AbonnementWrapperService }, { type: AlertController }, { type: Router }, { type: TranslateService }, { type: LoadingController }, { type: SubscriptionProcessService }, { type: AuthService }, { type: AccountService }], { next: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForfaitListModalComponent, { className: "ForfaitListModalComponent", filePath: "src/app/components/modals/forfaits/forfaits.component.ts", lineNumber: 51 });
})();

export {
  ForfaitListModalComponent
};
//# sourceMappingURL=chunk-MHA5NUME.js.map
