# Ecovelo SDK Android

SDK permettant l'intégration du parcours usager de location d'un VLS Ecovelo dans une application Android tierce.

## 🎯 Contexte

Ce SDK a été conçu pour le projet **Breizhgo - Vélos en Gare Bretagne** (15 gares) en partenariat avec Cityway. Il encapsule l'application Ionic/Angular/Capacitor d'Ecovelo dans un module Android autonome et facilement intégrable.

### Spécificités du projet Breizhgo

- **Authentification SSO** via [mon-compte.bzh](https://mon-compte.bzh) (OpenID Connect)
- **Partage de token** entre l'application hôte et le SDK
- **Parcours de réservation** en amont d'un trajet
- **Flow téléphone** : récupération du numéro de téléphone (non fourni par le SSO)

## 🏗️ Architecture

Le SDK embarque le **runtime Capacitor complet**, ce qui permet :
- ✅ Tous les plugins Capacitor fonctionnels (Camera, Geolocation, etc.)
- ✅ Communication native bidirectionnelle
- ✅ Assets Ionic embarqués (pas de téléchargement)

```
┌─────────────────────────────────────────────────────────────────┐
│                      Application Hôte (Cityway)                 │
│  ┌──────────────────┐  ┌──────────────────────────────────────┐ │
│  │ mon-compte.bzh   │  │         Ecovelo SDK                  │ │
│  │ Auth Module      │◄─┤                                      │ │
│  │                  │  │  ┌─────────────────────────────────┐ │ │
│  └──────────────────┘  │  │   Capacitor BridgeActivity      │ │ │
│                        │  │  ┌───────────────────────────┐  │ │ │
│                        │  │  │   App Ionic Breizhgo      │  │ │ │
│                        │  │  │   + Plugins natifs        │  │ │ │
│                        │  │  └───────────────────────────┘  │ │ │
│                        │  └─────────────────────────────────┘ │ │
│                        └──────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## 📦 Installation

[![](https://jitpack.io/v/titibike/ecovelo-sdk-android.svg)](https://jitpack.io/#titibike/ecovelo-sdk-android)

### Via JitPack (recommandé)

**Étape 1** : Ajouter le repository JitPack dans `settings.gradle.kts` :

```kotlin
// settings.gradle.kts
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        maven { url = uri("https://jitpack.io") }
    }
}
```

**Étape 2** : Ajouter la dépendance dans `build.gradle.kts` du module :

```kotlin
// build.gradle.kts (Module)
dependencies {
    implementation("com.github.titibike:ecovelo-sdk-android:1.0.0")
}
```

> **Note** : Remplacez `1.0.0` par la [dernière version disponible](https://github.com/titibike/ecovelo-sdk-android/releases).

### Téléchargement direct (AAR)

Les releases GitHub incluent également le fichier AAR compilé si vous préférez une intégration manuelle :
- [Voir les releases](https://github.com/titibike/ecovelo-sdk-android/releases)

### Configuration minimale

```kotlin
// Application.kt
class MyApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        
        EcoveloSDK.init(
            context = this,
            config = EcoveloConfig.Builder()
                .setTerritoryId("breizhgo")
                .setEnvironment(EcoveloEnvironment.PRODUCTION)
                .build()
        )
    }
}
```

## 🔐 Authentification SSO

Le SDK utilise le token OAuth2/OIDC fourni par l'application hôte via `mon-compte.bzh`.

```kotlin
// Implémenter l'interface EcoveloAuthProvider
class MyAuthProvider : EcoveloAuthProvider {
    
    override fun getAccessToken(): String? {
        // Retourner le token d'accès mon-compte.bzh
        return MonCompteBzhSession.accessToken
    }
    
    override fun refreshToken(): Result<String> {
        // Rafraîchir le token si nécessaire
        return MonCompteBzhSession.refresh()
    }
    
    override fun getUserInfo(): EcoveloUserInfo? {
        return EcoveloUserInfo(
            sub = "user-uuid",
            email = "user@example.com",
            firstName = "Jean",
            lastName = "Dupont"
            // Note: le téléphone n'est pas fourni par mon-compte.bzh
        )
    }
    
    override fun logout() {
        MonCompteBzhSession.logout()
    }
}

// Enregistrer le provider
EcoveloSDK.setAuthProvider(MyAuthProvider())

// Configurer le callback de connexion (OBLIGATOIRE)
EcoveloSDK.setCallbacks(
    EcoveloCallbacks(
        onLoginRequired = {
            // L'utilisateur a cliqué sur "Se connecter" dans l'app
            // Lancer le flow SSO mon-compte.bzh
            startSSOLogin { success ->
                if (success) {
                    // Notifier le SDK que le token est disponible
                    EcoveloSDK.updateToken()
                }
            }
        }
    )
)
```

## 🚀 Utilisation

Le SDK expose un **point d'entrée unique** qui lance l'application usager Ecovelo. L'utilisateur navigue ensuite librement dans l'app (carte, stations, location, réservation, etc.).

### Option 1 : Via Activity (recommandé)

```kotlin
// Le SDK peut être lancé AVEC ou SANS token
// Sans token = mode exploration (carte, stations)
// L'app affichera un bouton "Se connecter" si nécessaire

EcoveloSDK.start(
    activity = this,
    onResult = { result ->
        when (result) {
            is EcoveloResult.Closed -> Log.d("Ecovelo", "App fermée")
            is EcoveloResult.Error -> Log.e("Ecovelo", "Erreur: ${result.message}")
        }
    }
)
```

### Option 2 : Via Fragment

```kotlin
// Créer le fragment
val fragment = EcoveloFragment.newInstance()

// Configurer le callback
fragment.setResultListener { result ->
    when (result) {
        is EcoveloFragment.Result.Closed -> { /* app fermée */ }
        is EcoveloFragment.Result.Error -> { /* erreur */ }
    }
}

// Afficher
supportFragmentManager.beginTransaction()
    .replace(R.id.container, fragment)
    .commit()
```

## 📁 Structure du projet

```
ecovelo-sdk-android/
├── .github/
│   └── workflows/
│       └── release.yml       # CI: création automatique des releases
├── ecovelo-sdk/              # Module SDK principal
│   ├── src/main/
│   │   ├── java/.../ecovelo/
│   │   │   ├── EcoveloSDK.kt           # Point d'entrée
│   │   │   ├── ui/
│   │   │   │   └── EcoveloActivity.kt  # Capacitor BridgeActivity
│   │   │   ├── bridge/
│   │   │   │   └── EcoveloNativePlugin.kt  # Plugin Capacitor custom
│   │   │   ├── auth/                   # Gestion auth SSO
│   │   │   ├── config/                 # Configuration
│   │   │   └── reservation/            # Module réservation
│   │   ├── assets/
│   │   │   └── public/                 # App Ionic compilée (via CI)
│   │   └── res/
│   └── build.gradle.kts
├── sample-app/               # Application de démonstration
├── docs/                     # Documentation détaillée
│   ├── ARCHITECTURE.md
│   ├── INTEGRATION.md
│   ├── AUTH_SSO.md
│   ├── CUSTOMIZATION.md
│   └── RELEASE.md            # Guide de publication
├── jitpack.yml               # Configuration JitPack
└── build.gradle.kts
```

## 📚 Documentation

- [Architecture détaillée](docs/ARCHITECTURE.md)
- [Guide d'intégration](docs/INTEGRATION.md)
- [Authentification SSO](docs/AUTH_SSO.md)
- [Personnalisation](docs/CUSTOMIZATION.md)
- [**Intégration app Ionic**](docs/IONIC_INTEGRATION.md) ⭐
- [**Guide de release**](docs/RELEASE.md) - Processus de publication
- [Prompt pour appli-usager-v3](PROMPT_IONIC_INTEGRATION.md)

## 🔧 Build & CI

Le SDK embarque automatiquement la dernière version de l'app Ionic compilée pour Breizhgo.

### Publication via JitPack

La distribution du SDK est automatisée via **JitPack** :

1. Créer un tag de version : `git tag v1.0.0 && git push --tags`
2. [GitHub Actions](.github/workflows/release.yml) crée une release avec le AAR
3. [JitPack](https://jitpack.io/#titibike/ecovelo-sdk-android) build et publie le package Maven

Voir [docs/RELEASE.md](docs/RELEASE.md) pour le guide complet.

### Plugins Capacitor inclus

Le SDK embarque les plugins Capacitor suivants :
- `@capacitor/camera` - Capture photo
- `@capacitor/geolocation` - Localisation GPS
- `@capacitor/filesystem` - Système de fichiers
- `@capacitor/preferences` - Stockage local
- `@capacitor/haptics` - Vibrations
- `@capacitor/keyboard` - Clavier
- `@capacitor/status-bar` - Barre de statut
- `@capacitor/splash-screen` - Splash screen
- `@capacitor/push-notifications` - Notifications push
- `@capacitor/barcode-scanner` - Scan QR code

## 📋 Prérequis

- **Android SDK 28+** (Android 9 Pie) - *Exigence Cityway DOC01010*
- Kotlin 1.9+
- L'application hôte doit gérer l'authentification IAM Cityway / mon-compte.bzh

## ⚠️ Notes importantes

### Conflits potentiels

Si votre application utilise déjà Capacitor, il peut y avoir des conflits de version. Assurez-vous d'utiliser des versions compatibles ou contactez-nous pour une intégration personnalisée.

### Permissions

Le SDK déclare les permissions suivantes :

| Permission | Usage | Demande |
|------------|-------|---------|
| `INTERNET` | Accès réseau | Auto |
| `ACCESS_NETWORK_STATE` | État réseau | Auto |
| `CAMERA` | Scan QR code | Runtime |
| `ACCESS_FINE_LOCATION` | Carte GPS | Runtime |
| `ACCESS_COARSE_LOCATION` | Carte | Runtime |
| `VIBRATE` | Retour haptique | Auto |

### Dépendances tierces

Voir [docs/INTEGRATION.md](docs/INTEGRATION.md) pour la liste complète des dépendances transitives.

## 📄 Licence

Propriétaire - Ecovelo © 2024-2025
