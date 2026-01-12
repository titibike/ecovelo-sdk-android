# Intégration de l'app Ionic dans le SDK Android Breizhgo

Ce guide explique comment adapter l'application Ionic `appli-usager-v3` pour fonctionner dans le SDK Android Breizhgo.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    App Hôte (Cityway)                       │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              Ecovelo SDK Android                      │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │         Capacitor BridgeActivity               │  │  │
│  │  │  ┌───────────────────────────────────────────┐  │  │  │
│  │  │  │      App Ionic (appli-usager-v3)         │  │  │  │
│  │  │  │                                           │  │  │  │
│  │  │  │  • Angular + Ionic                        │  │  │  │
│  │  │  │  • Logique métier (location, résa...)    │  │  │  │
│  │  │  │  • UI/UX complète                         │  │  │  │
│  │  │  │  • Communication via EcoveloNative plugin │  │  │  │
│  │  │  └───────────────────────────────────────────┘  │  │  │
│  │  │                     ↕                           │  │  │
│  │  │  ┌───────────────────────────────────────────┐  │  │  │
│  │  │  │     Plugins Capacitor Natifs              │  │  │  │
│  │  │  │  • EcoveloNative (auth, config, events)   │  │  │  │
│  │  │  │  • Camera, Geolocation, etc.              │  │  │  │
│  │  │  └───────────────────────────────────────────┘  │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Prérequis

- Node.js 18+
- npm ou yarn
- Accès au repo `appli-usager-v3`
- Android Studio (pour tester le SDK)

## Modifications requises dans appli-usager-v3

### 1. Créer le plugin EcoveloNative (TypeScript)

Créer le fichier `src/app/plugins/ecovelo-native.plugin.ts` :

```typescript
import { registerPlugin } from '@capacitor/core';

/**
 * Interface du plugin natif EcoveloNative.
 * Ce plugin est disponible uniquement en mode SDK (pas en mode standalone).
 */
export interface EcoveloNativePlugin {
  // ============ AUTHENTIFICATION ============
  
  /**
   * Récupère le token d'accès OAuth2 depuis l'app hôte.
   */
  getAccessToken(): Promise<{ token: string | null; hasToken: boolean }>;
  
  /**
   * Récupère l'ID Token OIDC.
   */
  getIdToken(): Promise<{ token: string | null; hasToken: boolean }>;
  
  /**
   * Récupère les informations utilisateur.
   */
  getUserInfo(): Promise<{
    authenticated: boolean;
    sub?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    phoneVerified?: boolean;
  }>;
  
  /**
   * Rafraîchit le token d'accès.
   */
  refreshToken(): Promise<{ success: boolean; token: string | null }>;
  
  /**
   * Vérifie si l'utilisateur est authentifié.
   */
  isAuthenticated(): Promise<{ authenticated: boolean }>;
  
  /**
   * Demande la connexion à l'app hôte.
   * Déclenche le callback onLoginRequired côté natif.
   * L'app hôte lancera le SSO mon-compte.bzh.
   */
  requestLogin(): Promise<{ requested: boolean }>;
  
  // ============ CONFIGURATION ============
  
  /**
   * Récupère la configuration du SDK.
   */
  getConfig(): Promise<{
    territoryId: string;
    environment: string;
    debugMode: boolean;
    features: {
      reservationEnabled: boolean;
      mapEnabled: boolean;
      qrCodeScanEnabled: boolean;
    };
  }>;
  
  // ============ ÉVÉNEMENTS ============
  
  /**
   * Émet un événement vers l'app hôte (analytics).
   */
  emitEvent(options: { name: string; data?: any }): Promise<void>;
  
  // ============ NAVIGATION ============
  
  /**
   * Ferme le SDK et retourne à l'app hôte.
   */
  close(options: { result: string; data?: any }): Promise<void>;
  
  /**
   * Déconnecte l'utilisateur.
   */
  logout(): Promise<{ success: boolean }>;
}

/**
 * Plugin EcoveloNative.
 * 
 * Usage:
 * ```typescript
 * import { EcoveloNative } from './plugins/ecovelo-native.plugin';
 * 
 * const { authenticated } = await EcoveloNative.isAuthenticated();
 * ```
 */
export const EcoveloNative = registerPlugin<EcoveloNativePlugin>('EcoveloNative');
```

### 2. Créer le service de détection SDK

Créer le fichier `src/app/services/sdk-mode.service.ts` :

```typescript
import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EcoveloNative } from '../plugins/ecovelo-native.plugin';

export interface SdkConfig {
  territoryId: string;
  environment: string;
  debugMode: boolean;
  features: {
    reservationEnabled: boolean;
    mapEnabled: boolean;
    qrCodeScanEnabled: boolean;
  };
}

export interface UserInfo {
  sub?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  phoneVerified?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SdkModeService {
  
  /**
   * True si l'app tourne dans le SDK Breizhgo (pas en standalone).
   */
  readonly isSDKMode: boolean;
  
  /**
   * Configuration du SDK (disponible uniquement en mode SDK).
   */
  private _config: SdkConfig | null = null;
  
  /**
   * État de connexion (observable).
   */
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  readonly isAuthenticated$: Observable<boolean> = this._isAuthenticated.asObservable();
  
  /**
   * Informations utilisateur (observable).
   */
  private _userInfo = new BehaviorSubject<UserInfo | null>(null);
  readonly userInfo$: Observable<UserInfo | null> = this._userInfo.asObservable();
  
  constructor() {
    // Détecter si le plugin EcoveloNative est disponible
    this.isSDKMode = Capacitor.isPluginAvailable('EcoveloNative');
    
    if (this.isSDKMode) {
      console.log('[SdkModeService] Mode SDK détecté - Breizhgo');
      this.initSDKMode();
    } else {
      console.log('[SdkModeService] Mode standalone');
    }
  }
  
  private async initSDKMode(): Promise<void> {
    try {
      // Charger la configuration
      this._config = await EcoveloNative.getConfig();
      console.log('[SdkModeService] Config:', this._config);
      
      // Vérifier l'état d'authentification initial
      await this.refreshAuthState();
      
      // Écouter les mises à jour de token
      window.addEventListener('ecovelo-token-updated', async (event: any) => {
        console.log('[SdkModeService] Token mis à jour:', event.detail);
        await this.refreshAuthState();
      });
      
    } catch (error) {
      console.error('[SdkModeService] Erreur initialisation:', error);
    }
  }
  
  /**
   * Rafraîchit l'état d'authentification.
   */
  async refreshAuthState(): Promise<void> {
    if (!this.isSDKMode) return;
    
    try {
      const { authenticated } = await EcoveloNative.isAuthenticated();
      this._isAuthenticated.next(authenticated);
      
      if (authenticated) {
        const userInfo = await EcoveloNative.getUserInfo();
        if (userInfo.authenticated) {
          this._userInfo.next({
            sub: userInfo.sub,
            email: userInfo.email,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            phone: userInfo.phone,
            phoneVerified: userInfo.phoneVerified
          });
        }
      } else {
        this._userInfo.next(null);
      }
    } catch (error) {
      console.error('[SdkModeService] Erreur refresh auth:', error);
    }
  }
  
  /**
   * Retourne la configuration SDK.
   */
  getConfig(): SdkConfig | null {
    return this._config;
  }
  
  /**
   * Récupère le token d'accès.
   * En mode SDK: depuis l'app hôte (Cityway)
   * En mode standalone: depuis Cognito (à implémenter)
   */
  async getAccessToken(): Promise<string | null> {
    if (this.isSDKMode) {
      const { token, hasToken } = await EcoveloNative.getAccessToken();
      return hasToken ? token : null;
    }
    // Mode standalone: utiliser votre service Cognito existant
    return null;
  }
  
  /**
   * Récupère l'ID Token.
   */
  async getIdToken(): Promise<string | null> {
    if (this.isSDKMode) {
      const { token, hasToken } = await EcoveloNative.getIdToken();
      return hasToken ? token : null;
    }
    return null;
  }
  
  /**
   * Vérifie si l'utilisateur est connecté.
   */
  async isAuthenticated(): Promise<boolean> {
    if (this.isSDKMode) {
      const { authenticated } = await EcoveloNative.isAuthenticated();
      return authenticated;
    }
    // Mode standalone
    return false;
  }
  
  /**
   * Demande la connexion.
   * En mode SDK: déclenche le callback onLoginRequired vers l'app hôte
   * En mode standalone: redirige vers Cognito (à implémenter)
   */
  async requestLogin(): Promise<void> {
    if (this.isSDKMode) {
      console.log('[SdkModeService] Demande de connexion à l\'app hôte');
      await EcoveloNative.requestLogin();
      // L'app hôte va lancer le SSO, puis appeler updateToken()
      // L'événement 'ecovelo-token-updated' sera émis
    } else {
      // Mode standalone: implémenter la redirection Cognito
      console.log('[SdkModeService] Mode standalone - redirection Cognito');
    }
  }
  
  /**
   * Émet un événement vers l'app hôte (analytics).
   */
  async emitEvent(name: string, data?: any): Promise<void> {
    if (this.isSDKMode) {
      await EcoveloNative.emitEvent({ name, data });
    }
    // En mode standalone, vous pouvez aussi logger l'événement
    console.log(`[Analytics] ${name}`, data);
  }
  
  /**
   * Ferme le SDK et retourne à l'app hôte.
   */
  async closeSDK(result: string = 'closed'): Promise<void> {
    if (this.isSDKMode) {
      await EcoveloNative.close({ result });
    }
  }
  
  /**
   * Déconnecte l'utilisateur.
   */
  async logout(): Promise<void> {
    if (this.isSDKMode) {
      await EcoveloNative.logout();
    }
    this._isAuthenticated.next(false);
    this._userInfo.next(null);
  }
}
```

### 3. Adapter le service d'authentification existant

Modifier votre service d'auth pour utiliser `SdkModeService` :

```typescript
// auth.service.ts
import { Injectable } from '@angular/core';
import { SdkModeService } from './sdk-mode.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  
  constructor(
    private sdkMode: SdkModeService,
    // ... autres dépendances (CognitoService, etc.)
  ) {}
  
  /**
   * Récupère le token d'accès pour les appels API.
   */
  async getToken(): Promise<string | null> {
    if (this.sdkMode.isSDKMode) {
      return this.sdkMode.getAccessToken();
    }
    // Mode standalone: utiliser Cognito
    return this.cognitoService.getToken();
  }
  
  /**
   * Déclenche le flow de connexion.
   */
  async login(): Promise<void> {
    if (this.sdkMode.isSDKMode) {
      await this.sdkMode.requestLogin();
    } else {
      // Mode standalone: redirection Cognito
      await this.cognitoService.login();
    }
  }
  
  /**
   * Vérifie si l'utilisateur est connecté.
   */
  async isAuthenticated(): Promise<boolean> {
    if (this.sdkMode.isSDKMode) {
      return this.sdkMode.isAuthenticated();
    }
    return this.cognitoService.isAuthenticated();
  }
  
  /**
   * Déconnecte l'utilisateur.
   */
  async logout(): Promise<void> {
    if (this.sdkMode.isSDKMode) {
      await this.sdkMode.logout();
    } else {
      await this.cognitoService.logout();
    }
  }
}
```

### 4. Ajouter le bouton "Se connecter" conditionnel

Dans les composants qui nécessitent une connexion :

```html
<!-- header.component.html -->
<ion-buttons slot="end">
  <!-- Bouton connexion si non authentifié -->
  <ion-button 
    *ngIf="!(sdkMode.isAuthenticated$ | async)"
    (click)="onLoginClick()">
    <ion-icon name="person-outline" slot="start"></ion-icon>
    Se connecter
  </ion-button>
  
  <!-- Menu utilisateur si authentifié -->
  <ion-button 
    *ngIf="sdkMode.isAuthenticated$ | async"
    (click)="openUserMenu()">
    <ion-icon name="person" slot="icon-only"></ion-icon>
  </ion-button>
</ion-buttons>
```

```typescript
// header.component.ts
import { Component } from '@angular/core';
import { SdkModeService } from '../services/sdk-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(public sdkMode: SdkModeService) {}
  
  async onLoginClick(): Promise<void> {
    await this.sdkMode.requestLogin();
  }
}
```

### 5. Émettre les événements analytics

Ajouter l'émission d'événements aux moments clés :

```typescript
// rental.service.ts
import { SdkModeService } from './sdk-mode.service';

@Injectable({ providedIn: 'root' })
export class RentalService {
  constructor(private sdkMode: SdkModeService) {}
  
  async startRental(bikeId: string, stationId: string): Promise<void> {
    // ... logique de location
    
    // Émettre l'événement analytics
    await this.sdkMode.emitEvent('rental_started', {
      bikeId,
      stationId,
      timestamp: new Date().toISOString()
    });
  }
  
  async endRental(rentalId: string): Promise<void> {
    // ... logique de fin de location
    
    await this.sdkMode.emitEvent('rental_ended', {
      rentalId,
      duration: this.calculateDuration(),
      timestamp: new Date().toISOString()
    });
  }
}

// reservation.service.ts
@Injectable({ providedIn: 'root' })
export class ReservationService {
  constructor(private sdkMode: SdkModeService) {}
  
  async createReservation(data: ReservationData): Promise<void> {
    // ... logique de réservation
    
    await this.sdkMode.emitEvent('reservation_created', {
      reservationId: result.id,
      stationId: data.stationId,
      scheduledTime: data.scheduledTime
    });
  }
  
  async cancelReservation(reservationId: string): Promise<void> {
    // ... logique d'annulation
    
    await this.sdkMode.emitEvent('reservation_cancelled', {
      reservationId
    });
  }
}
```

### 6. Créer l'environnement Breizhgo

Créer `src/environments/environment.breizhgo.ts` :

```typescript
export const environment = {
  production: true,
  
  // Identifiant du territoire
  territoryId: 'breizhgo',
  
  // API Ecovelo
  apiUrl: 'https://api.breizhgo.ecovelo.bzh',
  
  // Désactiver Cognito en mode SDK (l'auth vient de l'app hôte)
  cognitoEnabled: false,
  
  // Mode SDK activé
  sdkMode: true,
  
  // Thème Breizhgo
  theme: {
    primaryColor: '#0055A4',
    secondaryColor: '#E4002B',
    logoUrl: 'assets/breizhgo/logo.svg'
  }
};
```

### 7. Configuration Angular

Ajouter la configuration dans `angular.json` :

```json
{
  "configurations": {
    "breizhgo": {
      "fileReplacements": [
        {
          "replace": "src/environments/environment.ts",
          "with": "src/environments/environment.breizhgo.ts"
        }
      ],
      "optimization": true,
      "outputHashing": "all",
      "sourceMap": false,
      "namedChunks": false,
      "extractLicenses": true,
      "vendorChunk": false,
      "buildOptimizer": true
    }
  }
}
```

## Build et déploiement

### Script de build

Créer `scripts/build-breizhgo-sdk.sh` :

```bash
#!/bin/bash
set -e

echo "🔨 Building Ionic app for Breizhgo SDK..."

# Build Angular avec la configuration breizhgo
ionic build --configuration=breizhgo

# Répertoire de sortie
OUTPUT_DIR="www"

# Chemin vers le SDK Android (à adapter)
SDK_ANDROID_PATH="../ecovelo-sdk-android"
SDK_ASSETS_DIR="$SDK_ANDROID_PATH/ecovelo-sdk/src/main/assets/public"

if [ -d "$SDK_ANDROID_PATH" ]; then
    echo "📦 Copying assets to SDK Android..."
    
    # Créer le répertoire si nécessaire
    mkdir -p "$SDK_ASSETS_DIR"
    
    # Supprimer les anciens assets
    rm -rf "$SDK_ASSETS_DIR"/*
    
    # Copier les nouveaux
    cp -r "$OUTPUT_DIR"/* "$SDK_ASSETS_DIR/"
    
    echo "✅ Assets copiés vers $SDK_ASSETS_DIR"
else
    echo "⚠️  SDK Android non trouvé à $SDK_ANDROID_PATH"
    echo "    Copiez manuellement le contenu de $OUTPUT_DIR"
fi

echo ""
echo "📱 Build terminé!"
echo "   Fichiers dans: $OUTPUT_DIR"
```

### Commandes

```bash
# Rendre le script exécutable
chmod +x scripts/build-breizhgo-sdk.sh

# Builder pour le SDK
./scripts/build-breizhgo-sdk.sh

# Ou manuellement
ionic build --configuration=breizhgo
```

## Structure finale des assets

Après le build, le dossier `www/` contiendra :

```
www/
├── browser/           # ← Le contenu est ICI (Angular 17+)
│   ├── index.html
│   ├── main-*.js
│   ├── polyfills-*.js
│   ├── styles-*.css
│   ├── assets/
│   │   ├── icon/
│   │   ├── i18n/          # Traductions
│   │   ├── breizhgo/      # Assets spécifiques Breizhgo
│   │   └── ...
│   └── ...
├── 3rdpartylicenses.txt
└── prerendered-routes.json
```

> ⚠️ **Important** : Avec Angular 17+, le contenu web est dans `www/browser/`, pas directement dans `www/`.

Ces fichiers doivent être copiés dans :

```
ecovelo-sdk-android/ecovelo-sdk/src/main/assets/public/
```

## Checklist d'intégration

- [ ] Plugin `EcoveloNative` créé (`src/app/plugins/ecovelo-native.plugin.ts`)
- [ ] Service `SdkModeService` créé (`src/app/services/sdk-mode.service.ts`)
- [ ] Service d'auth adapté pour le mode SDK
- [ ] Bouton "Se connecter" ajouté (visible si non authentifié)
- [ ] Événements analytics émis (rental_started, rental_ended, etc.)
- [ ] Environnement `environment.breizhgo.ts` créé
- [ ] Configuration Angular `breizhgo` ajoutée
- [ ] Script de build créé
- [ ] Assets copiés dans le SDK Android
- [ ] Test sur émulateur Android OK
- [ ] Test sur device physique OK

## Événements analytics recommandés

| Événement | Quand | Données |
|-----------|-------|---------|
| `app_opened` | Au démarrage | `{ timestamp }` |
| `rental_started` | Location démarrée | `{ bikeId, stationId, timestamp }` |
| `rental_ended` | Location terminée | `{ rentalId, duration, cost, timestamp }` |
| `reservation_created` | Réservation créée | `{ reservationId, stationId, scheduledTime }` |
| `reservation_cancelled` | Réservation annulée | `{ reservationId, reason }` |
| `station_viewed` | Station consultée | `{ stationId }` |
| `qr_scanned` | QR code scanné | `{ bikeId, success }` |
| `error_occurred` | Erreur | `{ error, context }` |

## Notes importantes

1. **Mode dual** : L'app doit fonctionner à la fois en standalone (Cognito) et en SDK (token de l'hôte). Utilisez `SdkModeService.isSDKMode` pour distinguer les deux modes.

2. **Token refresh** : En mode SDK, le refresh du token est géré par l'app hôte. L'événement `ecovelo-token-updated` est émis quand le token change.

3. **Fermeture du SDK** : L'utilisateur peut fermer le SDK via un bouton ou le back button. Utilisez `SdkModeService.closeSDK()` pour retourner proprement à l'app hôte.

4. **Pas de Cognito** : En mode SDK, toute l'authentification passe par l'app hôte. Ne déclenchez JAMAIS le flow Cognito en mode SDK.

5. **Téléphone** : Le SSO mon-compte.bzh ne fournit pas le téléphone. Si nécessaire, demandez-le à l'utilisateur et stockez-le localement ou via votre API.
