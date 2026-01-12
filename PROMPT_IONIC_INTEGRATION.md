# Prompt : Intégration de appli-usager-v3 dans le SDK Android Breizhgo

## Contexte

Nous (Ecovelo) avons créé un SDK Android qui encapsule notre application Ionic pour le projet **Breizhgo** (vélos en gare en Bretagne). 

L'application hôte (développée par Cityway) intègrera notre SDK. L'authentification se fait via **mon-compte.bzh** (SSO OpenID Connect) géré par l'app hôte, pas par notre app Ionic.

Le SDK Android est prêt et fonctionne avec un placeholder. Il faut maintenant adapter **appli-usager-v3** pour fonctionner dans ce SDK.

## Ce qui est déjà fait

✅ SDK Android avec Capacitor BridgeActivity  
✅ Plugin natif `EcoveloNative` pour la communication SDK ↔ Ionic  
✅ Plugin natif `Camera` fonctionnel  
✅ Gestion du token SSO depuis l'app hôte  
✅ Callback `onLoginRequired` quand l'utilisateur clique "Se connecter"  
✅ Événement `ecovelo-token-updated` quand le token est mis à jour  

## Ce qu'il faut faire dans appli-usager-v3

### 1. Créer le plugin TypeScript EcoveloNative

Créer `src/app/plugins/ecovelo-native.plugin.ts` qui expose l'interface du plugin natif Android :

```typescript
import { registerPlugin } from '@capacitor/core';

export interface EcoveloNativePlugin {
  getAccessToken(): Promise<{ token: string | null; hasToken: boolean }>;
  getIdToken(): Promise<{ token: string | null; hasToken: boolean }>;
  getUserInfo(): Promise<{ authenticated: boolean; sub?: string; email?: string; firstName?: string; lastName?: string; phone?: string; }>;
  isAuthenticated(): Promise<{ authenticated: boolean }>;
  requestLogin(): Promise<{ requested: boolean }>;
  getConfig(): Promise<{ territoryId: string; environment: string; debugMode: boolean; features: any }>;
  emitEvent(options: { name: string; data?: any }): Promise<void>;
  close(options: { result: string }): Promise<void>;
  logout(): Promise<{ success: boolean }>;
}

export const EcoveloNative = registerPlugin<EcoveloNativePlugin>('EcoveloNative');
```

### 2. Créer le service SdkModeService

Service Angular qui :
- Détecte si l'app tourne en mode SDK ou standalone via `Capacitor.isPluginAvailable('EcoveloNative')`
- Expose des observables pour l'état d'auth (`isAuthenticated$`, `userInfo$`)
- Gère la récupération du token depuis l'app hôte
- Écoute l'événement `ecovelo-token-updated` pour rafraîchir l'état

### 3. Adapter le service d'authentification

Modifier le service d'auth existant pour :
- En mode SDK : utiliser `EcoveloNative.getAccessToken()` au lieu de Cognito
- En mode SDK : appeler `EcoveloNative.requestLogin()` pour déclencher le SSO côté app hôte
- En mode standalone : garder le comportement Cognito actuel

### 4. Ajouter le bouton "Se connecter"

Dans le header/menu, afficher un bouton "Se connecter" quand l'utilisateur n'est pas authentifié.
Au clic : `sdkModeService.requestLogin()` → l'app hôte lance le SSO → token mis à jour → événement `ecovelo-token-updated` reçu

### 5. Émettre les événements analytics

Appeler `sdkModeService.emitEvent()` aux moments clés :
- `rental_started` : quand une location démarre
- `rental_ended` : quand une location se termine  
- `reservation_created` : quand une réservation est créée
- `reservation_cancelled` : quand une réservation est annulée

### 6. Créer l'environnement Breizhgo

Fichier `environment.breizhgo.ts` avec :
- `sdkMode: true`
- `cognitoEnabled: false`
- Configuration API Breizhgo
- Thème Breizhgo (couleurs, logo)

### 7. Script de build

Script qui :
1. Build l'app avec `ionic build --configuration=breizhgo`
2. Copie le contenu de `www/` vers `ecovelo-sdk-android/ecovelo-sdk/src/main/assets/public/`

## Points importants

1. **Mode dual** : L'app doit fonctionner en standalone (Cognito) ET en SDK (token de l'hôte). Utiliser `sdkModeService.isSDKMode` pour distinguer.

2. **Pas de Cognito en mode SDK** : Ne JAMAIS déclencher le flow Cognito quand `isSDKMode === true`.

3. **Token refresh** : En mode SDK, le refresh est géré par l'app hôte. Écouter `ecovelo-token-updated`.

4. **Téléphone** : Le SSO mon-compte.bzh ne fournit pas le téléphone. Il faudra le demander à l'utilisateur.

## API du plugin EcoveloNative

| Méthode | Description |
|---------|-------------|
| `getAccessToken()` | Récupère le token OAuth2 de l'app hôte |
| `getIdToken()` | Récupère l'ID Token OIDC |
| `getUserInfo()` | Récupère les infos utilisateur (email, nom, etc.) |
| `isAuthenticated()` | Vérifie si l'utilisateur est connecté |
| `requestLogin()` | Demande à l'app hôte de lancer le SSO |
| `getConfig()` | Récupère la configuration du SDK |
| `emitEvent(name, data)` | Émet un événement analytics |
| `close(result)` | Ferme le SDK et retourne à l'app hôte |
| `logout()` | Déconnecte l'utilisateur |

## Événement JavaScript

L'événement `ecovelo-token-updated` est émis sur `window` quand le token change :

```javascript
window.addEventListener('ecovelo-token-updated', (event) => {
  console.log('Token mis à jour:', event.detail);
  // event.detail = { hasToken: true, userEmail: '...', userFirstName: '...' }
});
```

## Fichiers à créer/modifier

```
src/
├── app/
│   ├── plugins/
│   │   └── ecovelo-native.plugin.ts     # NOUVEAU
│   ├── services/
│   │   ├── sdk-mode.service.ts          # NOUVEAU
│   │   └── auth.service.ts              # MODIFIER
│   └── components/
│       └── header/
│           └── header.component.ts      # MODIFIER (bouton connexion)
├── environments/
│   └── environment.breizhgo.ts          # NOUVEAU
└── ...

angular.json                              # MODIFIER (config breizhgo)
scripts/
└── build-breizhgo-sdk.sh                # NOUVEAU
```

## Documentation complète

Voir le fichier `docs/IONIC_INTEGRATION.md` dans le repo `ecovelo-sdk-android` pour le code complet de chaque fichier.
Copié ici dans  `IONIC_INTEGRATION.md`

## Questions à se poser

1. Comment est structuré le service d'auth actuel ? (Cognito direct ou abstraction ?)
2. Où afficher le bouton "Se connecter" ? (Header, page d'accueil, modal ?)
3. Quels événements analytics sont importants pour Cityway ?
4. Y a-t-il des fonctionnalités à désactiver en mode SDK ?
5. Le flow de demande de téléphone existe-t-il déjà ?

---

**Objectif** : Après ces modifications, l'app Ionic doit :
1. Détecter automatiquement qu'elle tourne dans le SDK
2. Utiliser le token fourni par l'app hôte
3. Afficher un bouton "Se connecter" qui déclenche le SSO via l'app hôte
4. Émettre des événements analytics
5. Continuer à fonctionner en standalone avec Cognito
