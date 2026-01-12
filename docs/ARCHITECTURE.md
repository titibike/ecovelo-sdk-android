# Architecture du SDK Ecovelo Android (Breizhgo)

## Vue d'ensemble

Le SDK Ecovelo Android est conçu comme une **capsule autonome** qui embarque l'application Ionic/Angular/Capacitor existante avec le **runtime Capacitor complet**. Cette approche permet de :

- Réutiliser 100% du code de l'application usager existante
- **Tous les plugins Capacitor fonctionnels** (Camera, Geolocation, BLE, etc.)
- Minimiser l'effort d'intégration pour Cityway
- Garder la maîtrise complète du déploiement et des mises à jour

## Diagramme d'architecture

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                           APPLICATION HÔTE (Cityway)                         │
│                                                                              │
│  ┌─────────────────────┐                                                     │
│  │  mon-compte.bzh     │                                                     │
│  │  (OIDC Provider)    │                                                     │
│  │                     │                                                     │
│  │  - Access Token     │                                                     │
│  │  - Refresh Token    │                                                     │
│  │  - User Info        │                                                     │
│  └──────────┬──────────┘                                                     │
│             │                                                                │
│             │ Implements EcoveloAuthProvider                                 │
│             ▼                                                                │
│  ┌──────────────────────────────────────────────────────────────────────┐    │
│  │                        ECOVELO SDK                                   │    │
│  │                                                                      │    │
│  │  ┌────────────────────────────────────────────────────────────────┐  │    │
│  │  │                     PUBLIC API LAYER                           │  │    │
│  │  │                                                                │  │    │
│  │  │  EcoveloSDK              EcoveloConfig         Callbacks       │  │    │
│  │  │  - init()                - territoryId         - onRentalEnd   │  │    │
│  │  │  - startRentalFlow()     - environment         - onError       │  │    │
│  │  │  - startReservation()    - theme               - onLogout      │  │    │
│  │  │  - setAuthProvider()     - features            - onPhoneReq    │  │    │
│  │  └────────────────────────────────────────────────────────────────┘  │    │
│  │                              │                                       │    │
│  │  ┌────────────────────────────────────────────────────────────────┐  │    │
│  │  │                     BRIDGE LAYER                               │  │    │
│  │  │                                                                │  │    │
│  │  │  EcoveloAuthBridge        EcoveloConfigBridge                  │  │    │
│  │  │  - getToken()             - getConfig()                        │  │    │
│  │  │  - refreshToken()         - getFeatures()                      │  │    │
│  │  │  - getUserInfo()                                               │  │    │
│  │  │                                                                │  │    │
│  │  │  EcoveloEventBridge       EcoveloPhoneBridge                   │  │    │
│  │  │  - emit(event)            - requestPhone()                     │  │    │
│  │  │  - subscribe()            - submitPhone()                      │  │    │
│  │  └────────────────────────────────────────────────────────────────┘  │    │
│  │                              │                                       │    │
│  │  ┌────────────────────────────────────────────────────────────────┐  │    │
│  │  │                    CAPACITOR RUNTIME                           │  │    │
│  │  │                                                                │  │    │
│  │  │  ┌──────────────────────────────────────────────────────────┐  │  │    │
│  │  │  │              Capacitor BridgeActivity                    │  │  │    │
│  │  │  │  (Runtime complet avec tous les plugins natifs)          │  │  │    │
│  │  │  │  ┌────────────────────────────────────────────────────┐  │  │  │    │
│  │  │  │  │           APP IONIC/ANGULAR                        │  │  │  │    │
│  │  │  │  │           (Territoire Breizhgo)                    │  │  │  │    │
│  │  │  │  │                                                    │  │  │  │    │
│  │  │  │  │  - Parcours location                               │  │  │  │    │
│  │  │  │  │  - Parcours réservation (nouveau)                  │  │  │  │    │
│  │  │  │  │  - Gestion vélo (scan QR, BLE)                     │  │  │  │    │
│  │  │  │  │  - Carte stations (GPS)                            │  │  │  │    │
│  │  │  │  │  - Camera, Filesystem, etc.                        │  │  │  │    │
│  │  │  │  └────────────────────────────────────────────────────┘  │  │  │    │
│  │  │  └──────────────────────────────────────────────────────────┘  │  │    │
│  │  └────────────────────────────────────────────────────────────────┘  │    │
│  └──────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      │ API REST
                                      ▼
                        ┌─────────────────────────────┐
                        │     Backend Ecovelo         │
                        │     (API + Admin)           │
                        └─────────────────────────────┘
```

## Composants principaux

> ⚠️ Le SDK Android est une **capsule**. Il ne contient **aucune logique métier**.
> Toute la logique (location, réservation, paiement, API) est dans l'app Ionic encapsulée.

### 1. Public API Layer

Point d'entrée pour l'intégrateur (Cityway). API simple et documentée.

| Classe | Responsabilité |
|--------|---------------|
| `EcoveloSDK` | Singleton : init, lancement Activity/Fragment |
| `EcoveloConfig` | Configuration (territoire, environnement) |
| `EcoveloAuthProvider` | Interface pour fournir le token IAM |
| `EcoveloCallbacks` | Callbacks vers l'app hôte (fin parcours, erreurs) |
| `RentalResult` | Modèle de résultat pour les callbacks |
| `ReservationResult` | Modèle de résultat pour les callbacks |

### 2. Capacitor Layer (Runtime complet)

Le SDK utilise **Capacitor BridgeActivity** qui fournit le runtime complet :

| Composant | Rôle |
|-----------|------|
| `EcoveloActivity` | Hérite de `BridgeActivity` de Capacitor |
| `EcoveloNativePlugin` | Plugin Capacitor custom pour l'auth et les events |
| Plugins standards | Camera, Geolocation, Filesystem, BLE, etc. |

**Pourquoi Capacitor complet ?**
- Les plugins natifs (Camera, GPS, BLE) nécessitent le runtime Capacitor
- Une simple WebView ne suffit pas pour le déverrouillage vélo, le scan QR, etc.
- Communication bidirectionnelle via le bridge Capacitor standard

### 3. Assets Ionic (toute la logique métier)

Application Ionic compilée (appli-usager-v3) embarquée dans le SDK :

- Assets dans `src/main/assets/public/` (standard Capacitor)
- **Contient toute la logique métier** : location, réservation, paiement, API
- Configuration Capacitor spécifique au mode SDK
- Territoire `breizhgo` pré-configuré
- Multilingue géré côté Ionic

## Flow d'authentification SSO

```
┌────────────┐     ┌────────────┐     ┌────────────┐     ┌────────────┐
│  App Hôte  │     │   SDK      │     │  App Ionic │     │  Backend   │
└─────┬──────┘     └─────┬──────┘     └─────┬──────┘     └─────┬──────┘
      │                  │                  │                  │
      │ 1. Login SSO     │                  │                  │
      │ (mon-compte.bzh) │                  │                  │
      │◄─────────────────┤                  │                  │
      │                  │                  │                  │
      │ 2. Token reçu    │                  │                  │
      ├─────────────────►│                  │                  │
      │                  │                  │                  │
      │ 3. startRental() │                  │                  │
      ├─────────────────►│                  │                  │
      │                  │ 4. getToken()    │                  │
      │                  ├─────────────────►│                  │
      │                  │                  │                  │
      │                  │                  │ 5. API call      │
      │                  │                  │    + token       │
      │                  │                  ├─────────────────►│
      │                  │                  │                  │
      │                  │                  │ 6. Validate SSO  │
      │                  │                  │◄─────────────────┤
      │                  │                  │                  │
      │                  │                  │ 7. User exists?  │
      │                  │                  │    Phone needed? │
      │                  │                  │◄─────────────────┤
      │                  │                  │                  │
      │                  │ 8. requestPhone()│                  │
      │                  │◄─────────────────┤                  │
      │                  │                  │                  │
      │ 9. Show phone UI │                  │                  │
      │◄─────────────────┤                  │                  │
      │                  │                  │                  │
```

## Flow de demande de téléphone

Le SSO `mon-compte.bzh` ne fournit pas le numéro de téléphone, obligatoire pour Ecovelo. Le SDK gère ce cas :

```
┌─────────────────────────────────────────────────────────────────────┐
│                        PHONE REQUEST FLOW                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. App Ionic détecte que le téléphone est manquant                │
│                           │                                         │
│                           ▼                                         │
│  2. Appelle EcoveloPhoneBridge.requestPhone()                      │
│                           │                                         │
│                           ▼                                         │
│  3. SDK affiche un écran natif de saisie du téléphone              │
│     ┌─────────────────────────────────────────┐                    │
│     │  📱 Numéro de téléphone requis          │                    │
│     │                                         │                    │
│     │  Pour louer un vélo, nous avons besoin  │                    │
│     │  de votre numéro de téléphone.          │                    │
│     │                                         │                    │
│     │  +33 │ 6 12 34 56 78                    │                    │
│     │                                         │                    │
│     │  [ Valider ]                            │                    │
│     └─────────────────────────────────────────┘                    │
│                           │                                         │
│                           ▼                                         │
│  4. Envoi SMS de vérification + saisie code                        │
│                           │                                         │
│                           ▼                                         │
│  5. EcoveloPhoneBridge.submitPhone(phone, verified: true)          │
│                           │                                         │
│                           ▼                                         │
│  6. App Ionic continue le parcours                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Module de réservation

### Principe

> ⚠️ **Important** : Toute la logique métier (réservation, location, paiement, etc.) est implémentée dans l'**app Ionic** (appli-usager-v3), pas dans le SDK Android natif.

Le SDK Android est une **capsule** qui :
- Fournit le runtime Capacitor
- Gère le bridge d'authentification (token IAM)
- Transmet les callbacks à l'app hôte

### Fonctionnalités (côté app Ionic)

1. **Réservation simple** : Réserver un vélo sur une station pour un créneau
2. **Gestion des réservations** : Consulter, modifier, annuler

### Architecture SDK Android (capsule uniquement)

```
ecovelo-sdk/src/main/java/.../
├── EcoveloSDK.kt              # Point d'entrée, init, lancement
├── ui/
│   ├── EcoveloActivity.kt     # Capacitor BridgeActivity
│   └── EcoveloFragment.kt     # Capacitor BridgeFragment
├── bridge/
│   └── EcoveloNativePlugin.kt # Plugin Capacitor (auth, events)
├── auth/
│   ├── EcoveloAuthProvider.kt # Interface pour token IAM
│   └── EcoveloUserInfo.kt     # Modèle utilisateur
├── config/
│   ├── EcoveloConfig.kt       # Configuration SDK
│   └── EcoveloCallbacks.kt    # Callbacks vers app hôte
├── rental/
│   └── RentalModels.kt        # Modèles pour les callbacks (Result)
├── reservation/
│   └── ReservationModels.kt   # Modèles pour les callbacks (Result)
└── phone/
    └── PhoneRequest.kt        # Flow téléphone
```

### Logique métier (côté app Ionic - appli-usager-v3)

```
appli-usager-v3/src/app/
├── services/
│   ├── rental.service.ts      # Logique location
│   ├── reservation.service.ts # Logique réservation
│   ├── station.service.ts     # Gestion stations
│   └── bike.service.ts        # Gestion vélos
├── pages/
│   └── map/                   # Carte stations
└── plugins/
    └── ecovelo-native.ts      # Bridge vers SDK natif
```

## Gestion des assets Ionic

### Build Pipeline

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  appli-usager-v3 │     │  Build Ionic     │     │  ecovelo-sdk     │
│  (Source)        │────►│  (ng build)      │────►│  assets/public/  │
│                  │     │                  │     │                  │
│  - Angular       │     │  Config:         │     │  - index.html    │
│  - Ionic         │     │  - breizhgo      │     │  - main.js       │
│  - Capacitor     │     │  - sdk-mode      │     │  - styles.css    │
└──────────────────┘     └──────────────────┘     │  - assets/       │
                                                  └──────────────────┘
```

### Mode SDK dans l'app Ionic

L'app Ionic doit détecter qu'elle tourne en mode SDK et adapter son comportement :

```typescript
// Dans l'app Ionic (service de détection)
import { Capacitor } from '@capacitor/core';
import { EcoveloNative } from './plugins/ecovelo-native';

@Injectable({ providedIn: 'root' })
export class SdkModeService {
  
  readonly isSDKMode: boolean;
  
  constructor() {
    // Détecter si on tourne dans le SDK Breizhgo
    this.isSDKMode = Capacitor.isPluginAvailable('EcoveloNative');
  }
  
  async getAccessToken(): Promise<string | null> {
    if (this.isSDKMode) {
      // Mode SDK: récupérer le token depuis l'app hôte (Cityway)
      const { token } = await EcoveloNative.getAccessToken();
      return token || null;
    } else {
      // Mode standalone: utiliser Cognito
      return this.cognitoAuth.getToken();
    }
  }
  
  async getUserInfo(): Promise<UserInfo | null> {
    if (this.isSDKMode) {
      return await EcoveloNative.getUserInfo();
    } else {
      return this.cognitoAuth.getUserInfo();
    }
  }
}
```

```typescript
// Plugin TypeScript côté app Ionic
// src/plugins/ecovelo-native.ts
import { registerPlugin } from '@capacitor/core';

export interface EcoveloNativePlugin {
  getAccessToken(): Promise<{ token: string; hasToken: boolean }>;
  getIdToken(): Promise<{ token: string; hasToken: boolean }>;
  getUserInfo(): Promise<UserInfo>;
  refreshToken(): Promise<{ success: boolean; token: string }>;
  isAuthenticated(): Promise<{ authenticated: boolean }>;
  getConfig(): Promise<SdkConfig>;
  requestPhone(): Promise<{ phone: string; verified: boolean }>;
  emitEvent(options: { name: string; data: any }): Promise<void>;
  close(options: { result: string; data?: any }): Promise<void>;
}

export const EcoveloNative = registerPlugin<EcoveloNativePlugin>('EcoveloNative');
```

## Sécurité

### Stockage des tokens

- Les tokens ne sont **jamais** stockés par le SDK
- Ils sont demandés à la volée via `EcoveloAuthProvider`
- L'app hôte est responsable du stockage sécurisé

### Communication WebView

- Pas d'URL externe chargées (assets locaux uniquement)
- JavaScript interface sécurisée via Capacitor
- Pas d'accès au système de fichiers hôte

## Considérations de performance

1. **Chargement** : Assets embarqués = pas de téléchargement
2. **Mémoire** : WebView réutilisée entre les sessions
3. **Cache** : Cache intelligent des données stations

## Tests

```
tests/
├── unit/
│   ├── AuthBridgeTest.kt
│   ├── ConfigTest.kt
│   └── ReservationTest.kt
├── integration/
│   └── SDKFlowTest.kt
└── e2e/
    └── RentalFlowTest.kt
```

