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

### Gradle (Maven Central)

```kotlin
// build.gradle.kts (Module)
dependencies {
    implementation("bzh.ecovelo:sdk-android:1.0.0")
}
```

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
```

## 🚀 Utilisation

### Lancer le parcours de location

```kotlin
// Depuis une Activity
EcoveloSDK.startRentalFlow(
    activity = this,
    options = RentalOptions(
        stationId = "gare-rennes", // Optionnel: pré-sélection de station
        onComplete = { result ->
            when (result) {
                is RentalResult.Success -> Log.d("Ecovelo", "Location terminée")
                is RentalResult.Cancelled -> Log.d("Ecovelo", "Annulé par l'utilisateur")
                is RentalResult.Error -> Log.e("Ecovelo", "Erreur: ${result.message}")
            }
        }
    )
)
```

### Parcours de réservation

```kotlin
// Réserver un vélo pour plus tard
EcoveloSDK.startReservationFlow(
    activity = this,
    options = ReservationOptions(
        departureStationId = "gare-rennes",
        departureTime = LocalDateTime.now().plusHours(2),
        onComplete = { result -> /* ... */ }
    )
)
```

## 📁 Structure du projet

```
ecovelo-sdk-android/
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
│   └── CUSTOMIZATION.md
└── build.gradle.kts
```

## 📚 Documentation

- [Architecture détaillée](docs/ARCHITECTURE.md)
- [Guide d'intégration](docs/INTEGRATION.md)
- [Authentification SSO](docs/AUTH_SSO.md)
- [Personnalisation](docs/CUSTOMIZATION.md)

## 🔧 Build & CI

Le SDK embarque automatiquement la dernière version de l'app Ionic compilée pour Breizhgo. La CI gère :

1. Build de l'app Ionic (territoire `breizhgo`, mode SDK)
2. Copie des assets dans `ecovelo-sdk/src/main/assets/public/`
3. Build du SDK Android avec Capacitor
4. Publication sur Maven Central / GitHub Packages

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

- Android SDK 24+ (Android 7.0)
- Kotlin 1.9+
- L'application hôte doit gérer l'authentification mon-compte.bzh

## ⚠️ Notes importantes

### Conflits potentiels

Si votre application utilise déjà Capacitor, il peut y avoir des conflits de version. Assurez-vous d'utiliser des versions compatibles ou contactez-nous pour une intégration personnalisée.

### Permissions

Le SDK déclare les permissions suivantes (l'utilisateur sera sollicité si nécessaire) :
- `INTERNET` - Accès réseau
- `CAMERA` - Scan QR code, photo profil
- `ACCESS_FINE_LOCATION` - Carte des stations
- `ACCESS_COARSE_LOCATION` - Carte des stations

## 📄 Licence

Propriétaire - Ecovelo © 2024-2025
