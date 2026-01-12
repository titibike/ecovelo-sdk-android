import {
  __spreadValues
} from "./chunk-UESUV5PM.js";

// src/environments/features.json
var features_default = {
  feature_flag: 8,
  feature_flag_1: "test_1",
  feature_flag_2: "test_2",
  feature_flag_3: false
};

// src/environments/environment.ts
var environment = __spreadValues({
  program: "preprod",
  production: false,
  timestamp: "no timestamp",
  map: "disabled",
  qrcode: "enabled",
  basePath: "https://api.cyclist.preprod.ecovelo.mobi/preprod",
  recaptchaV3SiteKey: "6Lf4FvweAAAAAEtlIkLWtACIi-PB9_Z7_AvgDcUv",
  stripePublicKey: "pk_test_jxKrw1KL0NWVIaupB9KcTQKw",
  webAppDomain: "preprod.ecovelo.mobi",
  bundleId: "com.ecovelo.preprod",
  cognito: {
    userPoolId: "eu-central-1_BcUIDe4mc",
    userPoolClientId: "68r95momuqu4fcaa18n39ukfai",
    domain: "ecovelo-preprod.auth.eu-central-1.amazoncognito.com"
  },
  mapboxAccessToken: "pk.eyJ1IjoieWNvY2F0cml4IiwiYSI6ImNtMGNnaHhscDAydDAyanF0eWFla3dwZWEifQ.3Q82oHigs2ZnvprB5NyO9g"
}, features_default);

export {
  environment
};
//# sourceMappingURL=chunk-GFMHZGOY.js.map
