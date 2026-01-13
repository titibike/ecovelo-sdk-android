import {
  WalletService
} from "./chunk-WZFGYABM.js";
import {
  HeaderComponent
} from "./chunk-YNGNG6N2.js";
import "./chunk-7GZOXTNY.js";
import {
  AccountService
} from "./chunk-6J5UKKBN.js";
import "./chunk-FOJAXRYS.js";
import {
  addIcons,
  wallet
} from "./chunk-3E6DEK7U.js";
import "./chunk-UXTOZZ3E.js";
import "./chunk-MN6LZ2SJ.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
  IonSkeletonText,
  NgIf,
  TranslateModule,
  TranslatePipe,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UANRONUE.js";
import "./chunk-JBNXL77H.js";
import "./chunk-KQEJHESJ.js";
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

// src/app/pages/account/wallet/wallet.page.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = (a0) => ({ message: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function WalletPage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275element(4, "ion-icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (-ctx_r1.cyclistState.cyclist.registrations.data[0].wallet.money / 100).toFixed(2), "\u20AC ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (-ctx_r1.cyclistState.cyclist.registrations.data[0].wallet.time / 60).toFixed(0), "min ");
  }
}
function WalletPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-skeleton-text", 6);
  }
  if (rf & 2) {
    \u0275\u0275property("animated", true);
  }
}
function WalletPage_Conditional_18_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h2");
    \u0275\u0275element(3, "ion-skeleton-text", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275element(5, "ion-skeleton-text", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-label", 15)(7, "h3");
    \u0275\u0275element(8, "ion-skeleton-text", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275element(10, "ion-skeleton-text", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
function WalletPage_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, WalletPage_Conditional_18_For_1_Template, 11, 4, "ion-item", null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function WalletPage_Conditional_19_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label", 18)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transaction_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("color", transaction_r4.money < 0 ? "success" : "danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (-transaction_r4.money / 100).toFixed(2), "\u20AC");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "wallet.transaction.reason." + transaction_r4.reason), " ");
  }
}
function WalletPage_Conditional_19_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label", 18)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transaction_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("color", transaction_r4.time < 0 ? "success" : "danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (-transaction_r4.time / 60).toFixed(0), "min");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "wallet.transaction.reason." + transaction_r4.reason), " ");
  }
}
function WalletPage_Conditional_19_For_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const transaction_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", transaction_r4.facture, "");
  }
}
function WalletPage_Conditional_19_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275template(1, WalletPage_Conditional_19_For_1_Conditional_1_Template, 6, 5, "ion-label", 18)(2, WalletPage_Conditional_19_For_1_Conditional_2_Template, 6, 5, "ion-label", 18);
    \u0275\u0275elementStart(3, "ion-label", 15)(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, WalletPage_Conditional_19_For_1_p_6_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transaction_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(transaction_r4.money ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(transaction_r4.created), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", transaction_r4.facture);
  }
}
function WalletPage_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, WalletPage_Conditional_19_For_1_Template, 7, 3, "ion-item", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.walletState.transactions);
  }
}
function WalletPage_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "wallet.transactions_error", \u0275\u0275pureFunction1(4, _c1, ctx_r1.walletState.error.message)));
  }
}
function WalletPage_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "wallet.no_transactions"));
  }
}
var _WalletPage = class _WalletPage {
  constructor(walletService, accountService) {
    this.walletService = walletService;
    this.accountService = accountService;
    this.cyclistState = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    addIcons({ wallet });
    this.walletService.walletState.subscribe((state) => {
      this.walletState = state;
    });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.walletService.getTransactions();
    });
  }
  formatDate(timestamp) {
    return new Date(timestamp * 1e3).toLocaleDateString();
  }
};
_WalletPage.\u0275fac = function WalletPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WalletPage)(\u0275\u0275directiveInject(WalletService), \u0275\u0275directiveInject(AccountService));
};
_WalletPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WalletPage, selectors: [["app-wallet"]], decls: 22, vars: 16, consts: [["promoInput", ""], [3, "defaultHref"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], [1, "ecl-wallet"], [2, "width", "100%", "height", "60px", 3, "animated"], ["type", "text", "label-placement", "floating", "color", "primary", "fill", "outline", "mode", "md", 1, "ion-margin-top", 3, "label", "disabled"], ["color", "dark", "slot", "end", "size", "small", "color", "dark", "shape", "round", 3, "click"], [1, "ecl-wallet__item", "ecl-wallet__item--money"], [1, "ecl-wallet__item", "ecl-wallet__item--icon"], ["name", "wallet"], [1, "ecl-wallet__item", "ecl-wallet__item--time"], [2, "width", "20%", 3, "animated"], [2, "width", "60%", 3, "animated"], ["slot", "end", 1, "ion-text-end"], [2, "width", "80px", 3, "animated"], [2, "width", "40px", 3, "animated"], [3, "color"], [1, "transaction-date"], [4, "ngIf"], [1, "ion-text-center"]], template: function WalletPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header", 1);
    \u0275\u0275elementStart(1, "ion-content", 2)(2, "ion-row", 3)(3, "ion-col", 4);
    \u0275\u0275template(4, WalletPage_Conditional_4_Template, 7, 2, "div", 5)(5, WalletPage_Conditional_5_Template, 1, 1, "ion-skeleton-text", 6);
    \u0275\u0275elementStart(6, "ion-input", 7, 0);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "ion-button", 8);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function WalletPage_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const promoInput_r3 = \u0275\u0275reference(7);
      ctx.walletService.applyCodePromo((promoInput_r3.value == null ? null : promoInput_r3.value.toString()) || "");
      return \u0275\u0275resetView(promoInput_r3.value = "");
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-list")(14, "ion-list-header")(15, "ion-label");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, WalletPage_Conditional_18_Template, 2, 1)(19, WalletPage_Conditional_19_Template, 2, 0)(20, WalletPage_Conditional_20_Template, 4, 6, "ion-item")(21, WalletPage_Conditional_21_Template, 4, 3, "ion-item");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.cyclistState.state === "active" ? 4 : ctx.cyclistState.state === "unknown" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(8, 8, "wallet.promo_code"))("disabled", ctx.cyclistState.state === "unknown");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 10, "wallet.apply_promo"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "wallet.apply"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "wallet.transactions"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.walletState.state === "loading" ? 18 : ctx.walletState.state === "success" ? 19 : ctx.walletState.state === "error" ? 20 : 21);
  }
}, dependencies: [
  IonContent,
  IonIcon,
  IonItem,
  IonInput,
  IonButton,
  TranslateModule,
  TranslatePipe,
  IonList,
  IonListHeader,
  IonLabel,
  CommonModule,
  NgIf,
  FormsModule,
  HeaderComponent,
  IonSkeletonText,
  IonRow,
  IonCol
], styles: ["\n\n.ecl-wallet[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto 32px auto;\n  height: 60px;\n  display: grid;\n  grid-template-columns: 1fr 65px 1fr;\n  align-items: center;\n}\n.ecl-wallet__item[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 600;\n}\n.ecl-wallet__item--money[_ngcontent-%COMP%] {\n  margin-right: -30px;\n  border-radius: 30px;\n  color: var(--ion-color-light);\n  background: var(--ion-color-primary);\n  padding-right: 10px;\n}\n.ecl-wallet__item--icon[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 65px;\n  z-index: 2;\n  border-radius: 50%;\n  font-size: 44px;\n  background: #f2f2f2;\n}\n.ecl-wallet__item--time[_ngcontent-%COMP%] {\n  margin-left: -30px;\n  padding-left: 10px;\n  border-radius: 30px;\n  color: var(--ion-color-light);\n  background: var(--ion-color-primary-shade);\n}\n/*# sourceMappingURL=wallet.page.css.map */"] });
var WalletPage = _WalletPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WalletPage, [{
    type: Component,
    args: [{ selector: "app-wallet", imports: [
      IonContent,
      IonIcon,
      IonItem,
      IonInput,
      IonButton,
      TranslateModule,
      IonList,
      IonListHeader,
      IonLabel,
      CommonModule,
      FormsModule,
      HeaderComponent,
      IonSkeletonText,
      IonRow,
      IonCol
    ], template: `<app-header [defaultHref]="'/account'"></app-header>

<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      @if (cyclistState.state === 'active') {
      <div class="ecl-wallet">
        <div class="ecl-wallet__item ecl-wallet__item--money">
          {{ (-cyclistState.cyclist.registrations!.data![0].wallet!.money! /
          100).toFixed(2) }}\u20AC
        </div>
        <div class="ecl-wallet__item ecl-wallet__item--icon">
          <ion-icon name="wallet"></ion-icon>
        </div>
        <div class="ecl-wallet__item ecl-wallet__item--time">
          {{ (-cyclistState.cyclist.registrations!.data![0].wallet!.time! /
          60).toFixed( 0 ) }}min
        </div>
      </div>
      } @else if (cyclistState.state === 'unknown') {
      <ion-skeleton-text
        [animated]="true"
        style="width: 100%; height: 60px"
      ></ion-skeleton-text>
      }
      <ion-input
        type="text"
        [label]="'wallet.promo_code' | translate"
        label-placement="floating"
        [disabled]="cyclistState.state === 'unknown'"
        color="primary"
        class="ion-margin-top"
        fill="outline"
        mode="md"
        #promoInput
      >
        <ion-button
          color="dark"
          slot="end"
          size="small"
          [attr.aria-label]="'wallet.apply_promo' | translate"
          color="dark"
          shape="round"
          (click)="walletService.applyCodePromo(promoInput.value?.toString() || ''); promoInput.value = '';"
        >
          {{ 'wallet.apply' | translate }}</ion-button
        ></ion-input
      >
      <ion-list>
        <ion-list-header>
          <ion-label>{{ 'wallet.transactions' | translate }}</ion-label>
        </ion-list-header>

        @if (walletState.state === 'loading') { @for (item of [1,2,3,4,5]; track
        item) {
        <ion-item>
          <ion-label>
            <h2>
              <ion-skeleton-text
                [animated]="true"
                style="width: 20%"
              ></ion-skeleton-text>
            </h2>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 60%"
              ></ion-skeleton-text>
            </p>
          </ion-label>
          <ion-label slot="end" class="ion-text-end">
            <h3>
              <ion-skeleton-text
                [animated]="true"
                style="width: 80px"
              ></ion-skeleton-text>
            </h3>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 40px"
              ></ion-skeleton-text>
            </p>
          </ion-label>
        </ion-item>
        } } @else if (walletState.state === 'success') { @for (transaction of
        walletState.transactions; track transaction.id) {
        <ion-item>
          @if (transaction.money) {
          <ion-label [color]="transaction.money < 0 ? 'success' : 'danger'">
            <strong>{{ (-transaction.money / 100).toFixed(2) }}\u20AC</strong>
            <p>
              {{ 'wallet.transaction.reason.' + transaction.reason | translate
              }}
            </p>
          </ion-label>
          } @else {
          <ion-label [color]="transaction.time! < 0 ? 'success' : 'danger'">
            <strong>{{ (-transaction.time! / 60).toFixed(0) }}min</strong>
            <p>
              {{ 'wallet.transaction.reason.' + transaction.reason | translate
              }}
            </p>
          </ion-label>
          }
          <ion-label slot="end" class="ion-text-end">
            <div class="transaction-date">
              {{ formatDate(transaction.created!) }}
            </div>
            <p *ngIf="transaction.facture">#{{ transaction.facture }}</p>
          </ion-label>
        </ion-item>
        } } @else if (walletState.state === 'error') {
        <ion-item>
          <ion-label class="ion-text-center"
            >{{ 'wallet.transactions_error' | translate:{ message:
            walletState.error.message } }}</ion-label
          >
        </ion-item>
        } @else {
        <ion-item>
          <ion-label class="ion-text-center"
            >{{ 'wallet.no_transactions' | translate }}</ion-label
          >
        </ion-item>
        }
      </ion-list>
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/account/wallet/wallet.page.scss */\n.ecl-wallet {\n  width: 100%;\n  margin: 0 auto 32px auto;\n  height: 60px;\n  display: grid;\n  grid-template-columns: 1fr 65px 1fr;\n  align-items: center;\n}\n.ecl-wallet__item {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 600;\n}\n.ecl-wallet__item--money {\n  margin-right: -30px;\n  border-radius: 30px;\n  color: var(--ion-color-light);\n  background: var(--ion-color-primary);\n  padding-right: 10px;\n}\n.ecl-wallet__item--icon {\n  height: 100%;\n  width: 65px;\n  z-index: 2;\n  border-radius: 50%;\n  font-size: 44px;\n  background: #f2f2f2;\n}\n.ecl-wallet__item--time {\n  margin-left: -30px;\n  padding-left: 10px;\n  border-radius: 30px;\n  color: var(--ion-color-light);\n  background: var(--ion-color-primary-shade);\n}\n/*# sourceMappingURL=wallet.page.css.map */\n"] }]
  }], () => [{ type: WalletService }, { type: AccountService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WalletPage, { className: "WalletPage", filePath: "src/app/pages/account/wallet/wallet.page.ts", lineNumber: 56 });
})();
export {
  WalletPage
};
//# sourceMappingURL=wallet.page-V7P2KZSF.js.map
