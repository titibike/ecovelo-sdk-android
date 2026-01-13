import {
  AbonnementWrapperService
} from "./chunk-HXPAB5CU.js";
import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-7GZOXTNY.js";
import "./chunk-ULLB7OBK.js";
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
  cardOutline,
  close
} from "./chunk-3E6DEK7U.js";
import "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  Input,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonModal2 as IonModal,
  IonProgressBar,
  IonRefresher,
  IonRow,
  IonSkeletonText,
  IonText,
  IonThumbnail,
  NgForOf,
  NgIf,
  TranslateModule,
  TranslatePipe,
  effect,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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
import "./chunk-UESUV5PM.js";

// src/app/pages/account/abonnements/components/subscription-item.component.ts
var _c0 = (a0, a1) => ({ start: a0, end: a1 });
var _c1 = (a0) => ({ date: a0 });
function SubscriptionItemComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 7, "subscription_item.date_range", \u0275\u0275pureFunction2(10, _c0, \u0275\u0275pipeBind2(2, 1, ctx_r0.subscription.created * 1e3, "dd/MM/yyyy"), \u0275\u0275pipeBind2(3, 4, ctx_r0.subscription.canceled_at * 1e3, "dd/MM/yyyy"))), " ");
  }
}
function SubscriptionItemComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "subscription_item.since_date", \u0275\u0275pureFunction1(7, _c1, \u0275\u0275pipeBind2(2, 1, ctx_r0.subscription.created * 1e3, "dd/MM/yyyy"))), " ");
  }
}
function SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_a_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const document_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openImage(document_r3.front_image));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscription_item.front_side"), " ");
  }
}
function SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275listener("click", function SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_a_6_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const document_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openImage(document_r3.back_image));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscription_item.back_side"), " ");
  }
}
function SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row")(1, "ion-text", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_a_3_Template, 3, 3, "a", 9);
    \u0275\u0275elementStart(4, "ion-text", 10);
    \u0275\u0275text(5, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_a_6_Template, 3, 3, "a", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const document_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("-", document_r3.name, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", document_r3.front_image);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", document_r3.back_image);
  }
}
function SubscriptionItemComponent_Conditional_10_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_Template, 7, 3, "ion-row", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const document_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", document_r3.name);
  }
}
function SubscriptionItemComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row")(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul", 6);
    \u0275\u0275template(5, SubscriptionItemComponent_Conditional_10_li_5_Template, 2, 1, "li", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "subscription_item.supporting_documents"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.subscription.supporting_documents);
  }
}
function SubscriptionItemComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-row", 4)(1, "ion-button", 14);
    \u0275\u0275listener("click", function SubscriptionItemComponent_Conditional_11_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.AbonnementWrapperService.requestDeletion());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "subscription_item.terminate"), " ");
  }
}
function SubscriptionItemComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 15)(1, "ion-button", 16);
    \u0275\u0275listener("click", function SubscriptionItemComponent_ng_template_13_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.isModalOpen = false);
    });
    \u0275\u0275element(2, "ion-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "ion-img", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.currentImageUrl);
  }
}
var _SubscriptionItemComponent = class _SubscriptionItemComponent {
  constructor(AbonnementWrapperService2) {
    this.AbonnementWrapperService = AbonnementWrapperService2;
    this.isModalOpen = false;
    this.currentImageUrl = "";
    addIcons({ cardOutline, close });
  }
  openImage(imageUrl) {
    this.currentImageUrl = imageUrl;
    this.isModalOpen = true;
  }
};
_SubscriptionItemComponent.\u0275fac = function SubscriptionItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SubscriptionItemComponent)(\u0275\u0275directiveInject(AbonnementWrapperService));
};
_SubscriptionItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionItemComponent, selectors: [["app-subscription-item"]], inputs: { subscription: "subscription" }, decls: 14, vars: 7, consts: [["color", "grey"], [1, "ion-text-wrap"], [1, "ion-justify-content-between"], [4, "ngIf"], [1, "ion-justify-content-end"], [1, "image-modal", 3, "didDismiss", "isOpen"], [1, "ion-no-padding"], [4, "ngFor", "ngForOf"], ["color", "medium"], ["fill", "clear", "class", "ion-margin-horizontal", 3, "click", 4, "ngIf"], ["color", "primary"], ["class", "ion-margin-start", 3, "click", 4, "ngIf"], ["fill", "clear", 1, "ion-margin-horizontal", 3, "click"], [1, "ion-margin-start", 3, "click"], ["color", "danger", "fill", "outline", "size", "small", 3, "click"], [1, "ion-padding"], ["fill", "clear", "color", "dark", 3, "click"], ["name", "close"], [3, "src"]], template: function SubscriptionItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 0)(1, "ion-label", 1)(2, "ion-row", 2)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-row", 2);
    \u0275\u0275template(8, SubscriptionItemComponent_p_8_Template, 5, 13, "p", 3)(9, SubscriptionItemComponent_p_9_Template, 4, 9, "p", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SubscriptionItemComponent_Conditional_10_Template, 6, 4)(11, SubscriptionItemComponent_Conditional_11_Template, 4, 3, "ion-row", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-modal", 5);
    \u0275\u0275listener("didDismiss", function SubscriptionItemComponent_Template_ion_modal_didDismiss_12_listener() {
      return ctx.isModalOpen = false;
    });
    \u0275\u0275template(13, SubscriptionItemComponent_ng_template_13_Template, 4, 1, "ng-template");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.subscription.forfait == null ? null : ctx.subscription.forfait.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.subscription.amount / 100, "\u20AC");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.subscription.canceled_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.subscription.canceled_at);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.subscription.supporting_documents.length > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.subscription.status === "active" || ctx.subscription.status === "waiting_validation" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.isModalOpen);
  }
}, dependencies: [
  IonItem,
  IonIcon,
  IonLabel,
  IonText,
  CommonModule,
  NgForOf,
  NgIf,
  DatePipe,
  IonButton,
  TranslateModule,
  TranslatePipe,
  IonRow,
  IonModal,
  IonContent,
  IonImg
], styles: ["\n\nion-modal[_ngcontent-%COMP%] {\n  --height: 50%;\n  --border-radius: 16px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\nion-modal[_ngcontent-%COMP%]::part(backdrop) {\n  background: rgb(209, 213, 219);\n  opacity: 1;\n}\nion-img[_ngcontent-%COMP%]::part(image) {\n  aspect-ratio: 4/3;\n  width: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=subscription-item.component.css.map */"] });
var SubscriptionItemComponent = _SubscriptionItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionItemComponent, [{
    type: Component,
    args: [{ selector: "app-subscription-item", imports: [
      IonItem,
      IonIcon,
      IonLabel,
      IonText,
      CommonModule,
      IonButton,
      DatePipe,
      TranslateModule,
      IonRow,
      IonModal,
      IonContent,
      IonImg
    ], template: `
    <ion-item color="grey">
      <ion-label class="ion-text-wrap">
        <ion-row class="ion-justify-content-between">
          <strong>{{ subscription.forfait?.name }}</strong>
          <p>{{ subscription.amount! / 100 }}\u20AC</p>
        </ion-row>
        <ion-row class="ion-justify-content-between">
          <p *ngIf="subscription.canceled_at">
            {{
              'subscription_item.date_range'
                | translate
                  : {
                      start: subscription.created! * 1000 | date : 'dd/MM/yyyy',
                      end:
                        subscription.canceled_at! * 1000 | date : 'dd/MM/yyyy'
                    }
            }}
          </p>
          <p *ngIf="!subscription.canceled_at">
            {{
              'subscription_item.since_date'
                | translate
                  : {
                      date: subscription.created! * 1000 | date : 'dd/MM/yyyy'
                    }
            }}
          </p>
        </ion-row>
        @if(subscription.supporting_documents!.length > 0) {
        <ion-row>
          <p>{{ 'subscription_item.supporting_documents' | translate }}:</p>
        </ion-row>
        <ul class="ion-no-padding">
          <li *ngFor="let document of subscription.supporting_documents">
            <ion-row *ngIf="document.name">
              <ion-text color="medium">-{{ document.name }}</ion-text>
              <a
                fill="clear"
                (click)="openImage(document.front_image)"
                *ngIf="document.front_image"
                class="ion-margin-horizontal"
              >
                {{ 'subscription_item.front_side' | translate }}
              </a>
              <ion-text color="primary">|</ion-text>
              <a
                (click)="openImage(document.back_image)"
                *ngIf="document.back_image"
                class="ion-margin-start"
              >
                {{ 'subscription_item.back_side' | translate }}
              </a>
            </ion-row>
          </li>
        </ul>

        } @if(subscription.status === 'active' || subscription.status ===
        'waiting_validation') {
        <ion-row class="ion-justify-content-end">
          <ion-button
            color="danger"
            fill="outline"
            size="small"
            (click)="AbonnementWrapperService.requestDeletion()"
          >
            {{ 'subscription_item.terminate' | translate }}
          </ion-button>
        </ion-row>
        }
      </ion-label>
    </ion-item>
    <ion-modal
      [isOpen]="isModalOpen"
      (didDismiss)="isModalOpen = false"
      class="image-modal"
    >
      <ng-template>
        <ion-content class="ion-padding">
          <ion-button (click)="isModalOpen = false" fill="clear" color="dark">
            <ion-icon name="close"></ion-icon>
          </ion-button>
          <ion-img [src]="currentImageUrl" />
        </ion-content>
      </ng-template>
    </ion-modal>
  `, styles: ["/* angular:styles/component:scss;f05f0ce23f523367ab997049237f56014e6a40dfd35222bc1c5fe39e4a55ef84;/Users/ycocatrix/Documents/GitHub/appli-usager-v3/src/app/pages/account/abonnements/components/subscription-item.component.ts */\nion-modal {\n  --height: 50%;\n  --border-radius: 16px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\nion-modal::part(backdrop) {\n  background: rgb(209, 213, 219);\n  opacity: 1;\n}\nion-img::part(image) {\n  aspect-ratio: 4/3;\n  width: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=subscription-item.component.css.map */\n"] }]
  }], () => [{ type: AbonnementWrapperService }], { subscription: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionItemComponent, { className: "SubscriptionItemComponent", filePath: "src/app/pages/account/abonnements/components/subscription-item.component.ts", lineNumber: 150 });
})();

// src/app/pages/account/abonnements/abonnements.page.ts
var _c02 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function AbonnementsPage_Conditional_5_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-thumbnail", 7);
    \u0275\u0275element(2, "ion-skeleton-text", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label")(4, "h3");
    \u0275\u0275element(5, "ion-skeleton-text", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "ion-skeleton-text", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275element(9, "ion-skeleton-text", 11);
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
function AbonnementsPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-progress-bar", 5);
    \u0275\u0275elementStart(1, "ion-list");
    \u0275\u0275template(2, AbonnementsPage_Conditional_5_ion_item_2_Template, 10, 4, "ion-item", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c02).constructor(ctx_r0.skeletonCount));
  }
}
function AbonnementsPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "abonnements.error.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "abonnements.error.loading"));
  }
}
function AbonnementsPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "abonnements.no_subscription.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "abonnements.no_subscription.message"));
  }
}
function AbonnementsPage_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-list", 14);
    \u0275\u0275element(4, "app-subscription-item", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r0.getCurrentSubscription().status === "waiting_validation" ? "abonnements.pending_subscription" : "abonnements.active_subscription"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("subscription", ctx_r0.getCurrentSubscription());
  }
}
function AbonnementsPage_Conditional_8_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-subscription-item", 15);
  }
  if (rf & 2) {
    const subscription_r2 = ctx.$implicit;
    \u0275\u0275property("subscription", subscription_r2);
  }
}
function AbonnementsPage_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-list", 14);
    \u0275\u0275repeaterCreate(4, AbonnementsPage_Conditional_8_Conditional_1_For_5_Template, 1, 1, "app-subscription-item", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "abonnements.previous_subscriptions"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.getPreviousSubscriptions());
  }
}
function AbonnementsPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AbonnementsPage_Conditional_8_Conditional_0_Template, 5, 5)(1, AbonnementsPage_Conditional_8_Conditional_1_Template, 6, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.getCurrentSubscription() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getPreviousSubscriptions().length ? 1 : -1);
  }
}
var _AbonnementsPage = class _AbonnementsPage {
  constructor(abonnementService) {
    this.abonnementService = abonnementService;
    this.skeletonCount = 5;
    this.abonnementState = { state: "loading" };
    effect(() => {
      this.abonnementState = this.abonnementService.listAbonnementsState();
    });
  }
  ngOnInit() {
    this.refresh();
  }
  handleRefresh(event) {
    this.refresh().then(() => {
      event.target.complete();
    });
  }
  refresh() {
    return new Promise((resolve) => {
      this.abonnementService.getAbonnements();
      resolve();
    });
  }
  getCurrentSubscription() {
    const currentAbonnement = this.abonnementService.currentAbonnementState();
    if (currentAbonnement.state !== "unknown" && currentAbonnement.state !== "default") {
      return currentAbonnement.abonnement;
    }
    return null;
  }
  getPreviousSubscriptions() {
    return this.abonnementState.state === "success" ? this.abonnementState.abonnements.filter((abo) => abo.status === "canceled") : [];
  }
};
_AbonnementsPage.\u0275fac = function AbonnementsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbonnementsPage)(\u0275\u0275directiveInject(AbonnementWrapperService));
};
_AbonnementsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AbonnementsPage, selectors: [["app-abonnements"]], decls: 9, vars: 2, consts: [[3, "defaultHref"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], ["slot", "fixed", 3, "ionRefresh"], ["type", "indeterminate"], [4, "ngFor", "ngForOf"], ["slot", "start"], [3, "animated"], [2, "width", "80%", 3, "animated"], [2, "width", "60%", 3, "animated"], [2, "width", "30%", 3, "animated"], [1, "ion-margin"], [1, "ion-margin-horizontal", "ion-margin-top"], ["mode", "ios", 3, "inset"], [3, "subscription"]], template: function AbonnementsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "ion-row", 2)(3, "ion-col", 3)(4, "ion-refresher", 4);
    \u0275\u0275listener("ionRefresh", function AbonnementsPage_Template_ion_refresher_ionRefresh_4_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AbonnementsPage_Conditional_5_Template, 3, 2)(6, AbonnementsPage_Conditional_6_Template, 6, 6)(7, AbonnementsPage_Conditional_7_Template, 6, 6)(8, AbonnementsPage_Conditional_8_Template, 2, 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.abonnementState.state === "loading" ? 5 : ctx.abonnementState.state === "error" ? 6 : ctx.abonnementState.state === "no_data" ? 7 : ctx.abonnementState.state === "success" ? 8 : -1);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  FormsModule,
  HeaderComponent,
  TranslateModule,
  TranslatePipe,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSkeletonText,
  IonThumbnail,
  IonRow,
  IonCol,
  IonProgressBar,
  IonRefresher,
  SubscriptionItemComponent
], encapsulation: 2 });
var AbonnementsPage = _AbonnementsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbonnementsPage, [{
    type: Component,
    args: [{ selector: "app-abonnements", imports: [
      CommonModule,
      FormsModule,
      HeaderComponent,
      TranslateModule,
      IonContent,
      IonList,
      IonItem,
      IonLabel,
      IonSkeletonText,
      IonThumbnail,
      IonRow,
      IonCol,
      IonProgressBar,
      IonRefresher,
      SubscriptionItemComponent
    ], template: `<app-header [defaultHref]="'/account'"></app-header>

<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
      </ion-refresher>

      @if(abonnementState.state === 'loading'){
      <ion-progress-bar type="indeterminate"></ion-progress-bar>
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
      } @else if(abonnementState.state === 'error'){
      <h1>{{ 'abonnements.error.title' | translate }}</h1>
      <p class="ion-margin">{{ 'abonnements.error.loading' | translate }}</p>
      } @else if(abonnementState.state === 'no_data'){
      <h1>{{ 'abonnements.no_subscription.title' | translate }}</h1>
      <p>{{ 'abonnements.no_subscription.message' | translate }}</p>
      } @else if(abonnementState.state === 'success'){
      @if(getCurrentSubscription()){
      <h4 class="ion-margin-horizontal ion-margin-top">
        {{ (getCurrentSubscription()!.status === 'waiting_validation' ?
        'abonnements.pending_subscription' : 'abonnements.active_subscription')
        | translate }}
      </h4>
      <ion-list [inset]="true" mode="ios">
        <app-subscription-item [subscription]="getCurrentSubscription()!">
        </app-subscription-item>
      </ion-list>
      } @if(getPreviousSubscriptions().length) {
      <h4 class="ion-margin-horizontal ion-margin-top">
        {{ 'abonnements.previous_subscriptions' | translate }}
      </h4>
      <ion-list [inset]="true" mode="ios">
        @for(subscription of getPreviousSubscriptions(); track subscription.id){
        <app-subscription-item [subscription]="subscription">
        </app-subscription-item>
        }
      </ion-list>
      } }
    </ion-col>
  </ion-row>
</ion-content>
` }]
  }], () => [{ type: AbonnementWrapperService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AbonnementsPage, { className: "AbonnementsPage", filePath: "src/app/pages/account/abonnements/abonnements.page.ts", lineNumber: 56 });
})();
export {
  AbonnementsPage
};
//# sourceMappingURL=abonnements.page-OG4SEMDI.js.map
