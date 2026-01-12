# Intégration de l'app Ionic dans le SDK

Ce guide explique comment builder l'app Ionic (appli-usager-v3) pour l'intégrer dans le SDK Android Breizhgo.

## Prérequis

- Node.js 18+
- npm ou yarn
- Accès au repo `appli-usager-v3`

## Étape 1 : Modifications dans appli-usager-v3

### 1.1 Créer le plugin EcoveloNative (TypeScript)

Créer le fichier `src/app/plugins/ecovelo-native.ts` :

```typescript
import { registerPlugin } from '@capacitor/core';

/**
 * Interface du plugin natif EcoveloNative.
 * Ce plugin est disponible uniquement en mode SDK (pas en mode standalone).
 */
export interface EcoveloNativePlugin {
  // Auth
  getAccessToken(): Promise<{ token: string; hasToken: boolean }>;
  getIdToken(): Promise<{ token: string; hasToken: boolean }>;
  getUserInfo(): Promise<{
    authenticated: boolean;
    sub?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    phoneVerified?: boolean;
  }>;
  refreshToken(): Promise<{ success: boolean; token: string }>;
  isAuthenticated(): Promise<{ authenticated: boolean }>;
  requestLogin(): Promise<{ requested: boolean }>;
  
  // Config
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
  
  // Phone
  requestPhone(): Promise<{ phone: string; verified: boolean }>;
  submitPhone(options: { phone: string; verified: boolean }): Promise<{ success: boolean }>;
  
  // Events
  emitEvent(options: { name: string; data: any }): Promise<void>;
  
  // Navigation
  close(options: { result: string; data?: any }): Promise<void>;
  logout(): Promise<{ success: boolean }>;
}

export const EcoveloNative = registerPlugin<EcoveloNativePlugin>('EcoveloNative');
```

### 1.2 Créer le service de détection SDK

Créer le fichier `src/app/services/sdk-mode.service.ts` :

```typescript
import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { EcoveloNative } from '../plugins/ecovelo-native';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SdkModeService {
  
  /**
   * True si l'app tourne dans le SDK Breizhgo (pas en standalone)
   */
  readonly isSDKMode: boolean;
  
  /**
   * État de connexion (observable)
   */
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  readonly isLoggedIn$ = this._isLoggedIn.asObservable();
  
  constructor() {
    // Détecter si le plugin EcoveloNative est disponible
    this.isSDKMode = Capacitor.isPluginAvailable('EcoveloNative');
    
    if (this.isSDKMode) {
      console.log('[SdkModeService] Mode SDK détecté');
      this.initSDKMode();
    } else {
      console.log('[SdkModeService] Mode standalone');
    }
  }
  
  private async initSDKMode() {
    // Écouter les mises à jour de token
    window.addEventListener('ecovelo-token-updated', (event: any) => {
      console.log('[SdkModeService] Token mis à jour', event.detail);
      this._isLoggedIn.next(event.detail.hasToken);
    });
    
    // Vérifier l'état initial
    const { hasToken } = await EcoveloNative.getAccessToken();
    this._isLoggedIn.next(hasToken);
  }
  
  /**
   * Récupère le token d'accès.
   * En mode SDK: depuis l'app hôte (Cityway)
   * En mode standalone: depuis Cognito
   */
  async getAccessToken(): Promise<string | null> {
    if (this.isSDKMode) {
      const { token, hasToken } = await EcoveloNative.getAccessToken();
      return hasToken ? token : null;
    } else {
      // Mode standalone: utiliser Cognito
      // return this.cognitoService.getToken();
      return null;
    }
  }
  
  /**
   * Récupère les infos utilisateur.
   */
  async getUserInfo(): Promise<any | null> {
    if (this.isSDKMode) {
      const userInfo = await EcoveloNative.getUserInfo();
      return userInfo.authenticated ? userInfo : null;
    } else {
      // Mode standalone
      return null;
    }
  }
  
  /**
   * Vérifie si l'utilisateur est connecté.
   */
  async isAuthenticated(): Promise<boolean> {
    if (this.isSDKMode) {
      const { authenticated } = await EcoveloNative.isAuthenticated();
      return authenticated;
    } else {
      // Mode standalone
      return false;
    }
  }
  
  /**
   * Demande la connexion.
   * En mode SDK: déclenche le callback onLoginRequired vers l'app hôte
   * En mode standalone: redirige vers Cognito
   */
  async requestLogin(): Promise<void> {
    if (this.isSDKMode) {
      await EcoveloNative.requestLogin();
      // L'app hôte va lancer le SSO, puis appeler updateToken()
      // L'événement 'ecovelo-token-updated' sera émis
    } else {
      // Mode standalone: rediriger vers Cognito
      // this.router.navigate(['/login']);
    }
  }
  
  /**
   * Émet un événement vers l'app hôte (analytics, etc.)
   */
  async emitEvent(name: string, data: any): Promise<void> {
    if (this.isSDKMode) {
      await EcoveloNative.emitEvent({ name, data });
    }
  }
  
  /**
   * Ferme le SDK et retourne à l'app hôte.
   */
  async closeSDK(result: string = 'closed'): Promise<void> {
    if (this.isSDKMode) {
      await EcoveloNative.close({ result });
    }
  }
}
```

### 1.3 Modifier le service d'authentification

Mettre à jour votre service d'auth existant pour utiliser `SdkModeService` :

```typescript
// auth.service.ts
import { SdkModeService } from './sdk-mode.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  
  constructor(
    private sdkMode: SdkModeService,
    // ... autres dépendances
  ) {}
  
  async getToken(): Promise<string | null> {
    if (this.sdkMode.isSDKMode) {
      return this.sdkMode.getAccessToken();
    } else {
      return this.cognitoService.getToken();
    }
  }
  
  async login(): Promise<void> {
    if (this.sdkMode.isSDKMode) {
      await this.sdkMode.requestLogin();
    } else {
      // Cognito login
    }
  }
}
```

### 1.4 Ajouter le bouton "Se connecter" conditionnel

Dans vos composants qui nécessitent une connexion :

```html
<!-- Exemple dans un composant -->
<ion-button 
  *ngIf="!(sdkMode.isLoggedIn$ | async)"
  (click)="onLoginClick()">
  Se connecter
</ion-button>
```

```typescript
async onLoginClick() {
  await this.sdkMode.requestLogin();
}
```

### 1.5 Émettre les événements analytics

```typescript
// Quand une location démarre
await this.sdkMode.emitEvent('rental_started', { rentalId: '123' });

// Quand une location se termine
await this.sdkMode.emitEvent('rental_ended', { rentalId: '123', duration: 30 });

// Quand une réservation est créée
await this.sdkMode.emitEvent('reservation_created', { reservationId: '456' });
```

## Étape 2 : Configuration du build

### 2.1 Créer une configuration Angular pour Breizhgo

Dans `angular.json`, ajouter une configuration spécifique :

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
      "sourceMap": false
    }
  }
}
```

### 2.2 Créer l'environnement Breizhgo

`src/environments/environment.breizhgo.ts` :

```typescript
export const environment = {
  production: true,
  territoryId: 'breizhgo',
  apiUrl: 'https://api.ecovelo.bzh',
  // Désactiver l'auth Cognito en mode SDK
  cognitoEnabled: false,
  sdkMode: true
};
```

## Étape 3 : Build et copie des assets

### 3.1 Script de build

Créer `scripts/build-sdk.sh` dans appli-usager-v3 :

```bash
#!/bin/bash
set -e

echo "🔨 Building Ionic app for Breizhgo SDK..."

# Build Angular avec la config breizhgo
npm run build -- --configuration=breizhgo

# Répertoire de sortie
OUTPUT_DIR="www"

# Répertoire cible dans le SDK Android
SDK_ASSETS_DIR="../ecovelo-sdk-android/ecovelo-sdk/src/main/assets/public"

echo "📦 Copying assets to SDK..."

# Créer le répertoire si nécessaire
mkdir -p "$SDK_ASSETS_DIR"

# Supprimer les anciens assets
rm -rf "$SDK_ASSETS_DIR"/*

# Copier les nouveaux
cp -r "$OUTPUT_DIR"/* "$SDK_ASSETS_DIR/"

echo "✅ Done! Assets copied to $SDK_ASSETS_DIR"
echo ""
echo "📱 You can now build the Android SDK:"
echo "   cd ../ecovelo-sdk-android"
echo "   ./gradlew :sample-app:assembleDebug"
```

### 3.2 Exécuter le build

```bash
cd appli-usager-v3
chmod +x scripts/build-sdk.sh
./scripts/build-sdk.sh
```

## Étape 4 : Tester sur émulateur

```bash
cd ecovelo-sdk-android

# Sync Gradle
./gradlew --refresh-dependencies

# Build et installer sur émulateur
./gradlew :sample-app:installDebug

# Ou ouvrir dans Android Studio
open -a "Android Studio" .
```

## Structure des assets après build

```
ecovelo-sdk/src/main/assets/public/
├── index.html
├── main.js
├── polyfills.js
├── runtime.js
├── styles.css
├── assets/
│   ├── icon/
│   ├── i18n/
│   └── ...
└── ...
```

## CI/CD (GitHub Actions)

Exemple de workflow pour automatiser le build :

```yaml
# .github/workflows/build-sdk.yml
name: Build SDK

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-ionic:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          repository: titibike/appli-usager-v3
          token: ${{ secrets.GH_TOKEN }}
          path: appli-usager-v3
      
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install & Build Ionic
        working-directory: appli-usager-v3
        run: |
          npm ci
          npm run build -- --configuration=breizhgo
      
      - uses: actions/upload-artifact@v4
        with:
          name: ionic-assets
          path: appli-usager-v3/www
  
  build-android:
    needs: build-ionic
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/download-artifact@v4
        with:
          name: ionic-assets
          path: ecovelo-sdk/src/main/assets/public
      
      - uses: actions/setup-java@v4
        with:
          distribution: 'temurin'
          java-version: '17'
      
      - name: Build SDK
        run: ./gradlew :ecovelo-sdk:assembleRelease
      
      - uses: actions/upload-artifact@v4
        with:
          name: ecovelo-sdk-aar
          path: ecovelo-sdk/build/outputs/aar/*.aar
```

## Checklist

- [ ] Plugin `EcoveloNative` créé dans appli-usager-v3
- [ ] Service `SdkModeService` implémenté
- [ ] Auth service modifié pour supporter les 2 modes
- [ ] Configuration Angular `breizhgo` créée
- [ ] Environnement `environment.breizhgo.ts` créé
- [ ] Script de build créé
- [ ] Assets copiés dans le SDK
- [ ] Test sur émulateur OK
