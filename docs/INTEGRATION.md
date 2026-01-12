# Guide d'intégration SDK Ecovelo Android

Ce guide est destiné aux intégrateurs (Cityway) pour intégrer le SDK Ecovelo dans leur application Android.

> **Référence**: Ce guide répond aux exigences du document DOC01010 - Spécification App intégration SDK Ecovélo.

## Prérequis

- Android Studio Arctic Fox ou supérieur
- **Android SDK 28+** (Android 9 Pie) - *Exigence Cityway*
- Kotlin 1.9+
- Gradle 8.0+
- Authentification IAM Cityway fonctionnelle dans votre app

## Installation

### 1. Ajouter la dépendance

```kotlin
// settings.gradle.kts
dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
        // Repository Ecovelo
        maven {
            url = uri("https://maven.pkg.github.com/titibike/ecovelo-sdk-android")
            credentials {
                username = providers.gradleProperty("ecoveloMavenUser").orNull
                password = providers.gradleProperty("ecoveloMavenPassword").orNull
            }
        }
    }
}

// app/build.gradle.kts
dependencies {
    implementation("bzh.ecovelo:sdk-android:1.0.0")
}
```

### 2. Dépendances tierces du SDK

Le SDK inclut les dépendances suivantes (transitives, pas besoin de les ajouter) :

| Dépendance | Version | Usage |
|------------|---------|-------|
| `androidx.core:core-ktx` | 1.12.0 | Extensions Kotlin Android |
| `androidx.appcompat:appcompat` | 1.6.1 | Compatibilité |
| `com.google.android.material:material` | 1.11.0 | Material Design |
| `com.capacitorjs:core` | 6.0.0 | Runtime Capacitor |
| `com.capacitorjs:camera` | 6.0.0 | Capture photo |
| `com.capacitorjs:geolocation` | 6.0.0 | Localisation GPS |
| `com.capacitorjs:filesystem` | 6.0.0 | Système de fichiers |
| `com.capacitorjs:barcode-scanner` | 6.0.0 | Scan QR code |
| `com.capacitorjs:preferences` | 6.0.0 | Stockage local |
| `com.capacitorjs:haptics` | 6.0.0 | Vibrations |
| `com.capacitorjs:keyboard` | 6.0.0 | Clavier |
| `com.capacitorjs:status-bar` | 6.0.0 | Barre de statut |
| `com.capacitorjs:splash-screen` | 6.0.0 | Splash screen |
| `com.capacitorjs:push-notifications` | 6.0.0 | Notifications push |
| `com.capacitorjs:local-notifications` | 6.0.0 | Notifications locales |
| `org.jetbrains.kotlinx:kotlinx-coroutines-android` | 1.7.3 | Coroutines |
| `org.jetbrains.kotlinx:kotlinx-serialization-json` | 1.6.2 | Sérialisation JSON |

### 3. Permissions requises

Le SDK déclare les permissions suivantes dans son `AndroidManifest.xml` :

| Permission | Usage | Demande utilisateur |
|------------|-------|---------------------|
| `INTERNET` | Accès réseau API | Non (automatique) |
| `ACCESS_NETWORK_STATE` | État réseau | Non (automatique) |
| `ACCESS_FINE_LOCATION` | Carte des stations, GPS | **Oui** (runtime) |
| `ACCESS_COARSE_LOCATION` | Carte des stations | **Oui** (runtime) |
| `CAMERA` | Scan QR code vélo | **Oui** (runtime) |
| `VIBRATE` | Retour haptique | Non (automatique) |
| `POST_NOTIFICATIONS` | Notifications (Android 13+) | **Oui** (runtime) |

> **Note**: Les permissions runtime sont demandées par le SDK au moment où elles sont nécessaires.

### 4. Configuration ProGuard

Si vous utilisez R8/ProGuard, ajoutez ces règles :

```proguard
# proguard-rules.pro
-keep class bzh.ecovelo.sdk.** { *; }
-keep interface bzh.ecovelo.sdk.** { *; }
```

## Initialisation

### Application.kt

```kotlin
import android.app.Application
import bzh.ecovelo.sdk.EcoveloSDK
import bzh.ecovelo.sdk.config.EcoveloConfig
import bzh.ecovelo.sdk.config.EcoveloEnvironment

class MyApplication : Application() {
    
    override fun onCreate() {
        super.onCreate()
        
        // Initialiser le SDK Ecovelo
        EcoveloSDK.init(
            context = this,
            config = EcoveloConfig.Builder()
                .setTerritoryId("breizhgo")
                .setEnvironment(EcoveloEnvironment.PRODUCTION)
                .setDebugMode(BuildConfig.DEBUG)
                .build()
        )
    }
}
```

## Authentification (Token IAM Cityway)

### Implémenter EcoveloAuthProvider

Le SDK attend un token d'authentification fourni par l'application hôte :

```kotlin
import bzh.ecovelo.sdk.auth.EcoveloAuthProvider
import bzh.ecovelo.sdk.auth.EcoveloUserInfo

class CityWayAuthProvider(
    private val iamSession: CityWayIAMSession
) : EcoveloAuthProvider {
    
    override fun getAccessToken(): String? {
        // Retourner le token IAM Cityway
        return iamSession.accessToken
    }
    
    override fun getIdToken(): String? {
        return iamSession.idToken
    }
    
    override suspend fun refreshToken(): Result<String> {
        return runCatching {
            iamSession.refreshTokens()
            iamSession.accessToken 
                ?: throw IllegalStateException("No token after refresh")
        }
    }
    
    override fun getUserInfo(): EcoveloUserInfo? {
        val user = iamSession.currentUser ?: return null
        
        return EcoveloUserInfo(
            sub = user.sub,
            email = user.email,
            firstName = user.firstName,
            lastName = user.lastName
            // phone sera demandé par le SDK si nécessaire
        )
    }
    
    override fun logout() {
        iamSession.logout()
    }
    
    override fun isAuthenticated(): Boolean {
        return iamSession.isAuthenticated
    }
}

// Enregistrer le provider
EcoveloSDK.setAuthProvider(CityWayAuthProvider(iamSession))

// IMPORTANT: Configurer le callback de connexion
EcoveloSDK.setCallbacks(
    EcoveloCallbacks(
        // Appelé quand l'utilisateur clique "Se connecter" dans l'app Ecovelo
        onLoginRequired = {
            launchSSOFlow()
        }
    )
)
```

### Gestion de la connexion SSO

```kotlin
/**
 * Lance le flow SSO mon-compte.bzh
 */
private fun launchSSOFlow() {
    // Votre logique SSO (AppAuth, etc.)
    monCompteBzhAuth.startLogin { result ->
        when (result) {
            is LoginResult.Success -> {
                // Token obtenu, notifier le SDK
                EcoveloSDK.updateToken()
            }
            is LoginResult.Cancelled -> {
                // L'utilisateur a annulé, rien à faire
            }
            is LoginResult.Error -> {
                // Gérer l'erreur
                showError(result.message)
            }
        }
    }
}
```

## Lancement du SDK

Le SDK expose un **point d'entrée unique** qui lance l'application usager Ecovelo. 
L'utilisateur navigue ensuite librement dans l'app (carte, stations, location, réservation, etc.).

### Avec ou sans token

Le SDK peut être lancé **avec ou sans token** :

| Mode | Token | Comportement |
|------|-------|--------------|
| **Connecté** | ✅ Fourni | Accès complet (location, réservation) |
| **Exploration** | ❌ Absent | Carte, stations visibles. Bouton "Se connecter" |

Quand l'utilisateur clique sur "Se connecter", le callback `onLoginRequired` est appelé.

### Option 1 : Via Activity (recommandé)

```kotlin
import bzh.ecovelo.sdk.EcoveloSDK
import bzh.ecovelo.sdk.EcoveloResult

class MainActivity : AppCompatActivity() {
    
    private fun openEcovelo() {
        // Lancer l'application Ecovelo (avec ou sans token)
        EcoveloSDK.start(
            activity = this,
            onResult = { result ->
                handleResult(result)
            }
        )
    }
    
    private fun handleResult(result: EcoveloResult) {
        when (result) {
            is EcoveloResult.Closed -> {
                // L'utilisateur a fermé l'app Ecovelo
                Log.d("Ecovelo", "App fermée")
            }
            
            is EcoveloResult.Error -> {
                // Une erreur s'est produite
                Log.e("Ecovelo", "Erreur: ${result.message}")
            }
        }
    }
    
    // Gérer le retour de l'Activity
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        EcoveloSDK.handleActivityResult(requestCode, resultCode, data)
    }
}
```

### Option 2 : Via Fragment

Pour une intégration plus flexible (BottomSheet, ViewPager, etc.) :

```kotlin
import bzh.ecovelo.sdk.ui.EcoveloFragment

class MainActivity : AppCompatActivity() {
    
    private fun showEcoveloFragment() {
        // Créer le fragment
        val fragment = EcoveloFragment.newInstance()
        
        // Configurer le callback
        fragment.setResultListener { result ->
            when (result) {
                is EcoveloFragment.Result.Closed -> {
                    closeFragment()
                }
                is EcoveloFragment.Result.Error -> {
                    showError(result.message)
                    closeFragment()
                }
                is EcoveloFragment.Result.AuthRequired -> {
                    startIAMLogin()
                }
            }
        }
        
        // Afficher le fragment
        supportFragmentManager.beginTransaction()
            .replace(R.id.container, fragment, "ecovelo")
            .addToBackStack(null)
            .commit()
    }
    
    private fun closeFragment() {
        supportFragmentManager.popBackStack()
    }
}
```

## Callbacks globaux

```kotlin
EcoveloSDK.setCallbacks(
    EcoveloCallbacks(
        // Location démarrée
        onRentalStarted = { rentalId ->
            analytics.trackEvent("rental_started", rentalId)
        },
        
        // Location terminée
        onRentalEnded = { rentalId, durationMinutes ->
            analytics.trackEvent("rental_ended", mapOf(
                "rental_id" to rentalId,
                "duration" to durationMinutes
            ))
        },
        
        // Réservation créée
        onReservationCreated = { reservationId ->
            analytics.trackEvent("reservation_created", reservationId)
        },
        
        // Erreur
        onError = { error ->
            crashlytics.recordException(error)
        },
        
        // Authentification requise (token expiré, etc.)
        onAuthRequired = {
            startIAMLogin()
        },
        
        // Téléphone requis (non fourni par le SSO)
        onPhoneRequired = { request ->
            // Option 1: Laisser le SDK gérer
            request.useSDKUI()
            
            // Option 2: Gérer vous-même
            // showPhoneDialog { phone -> request.submitPhone(phone, true) }
        },
        
        // SDK fermé
        onClose = {
            Log.d("Ecovelo", "SDK fermé")
        }
    )
)
```

## Gestion des erreurs

### Types d'erreurs

```kotlin
sealed class EcoveloError : Exception() {
    // Authentification
    sealed class Auth : EcoveloError() {
        object NotAuthenticated : Auth()
        object TokenExpired : Auth()
        data class InvalidToken(override val message: String) : Auth()
    }
    
    // Réseau
    sealed class Network : EcoveloError() {
        object NoConnection : Network()
        data class ServerError(val code: Int) : Network()
    }
    
    // Métier
    sealed class Business : EcoveloError() {
        object NoBikeAvailable : Business()
        object StationFull : Business()
        data class RentalInProgress(val rentalId: String) : Business()
    }
}
```

### Gestion centralisée

```kotlin
EcoveloSDK.setErrorHandler { error ->
    when (error) {
        is EcoveloError.Auth.TokenExpired -> {
            refreshTokenOrLogin()
        }
        is EcoveloError.Network.NoConnection -> {
            showSnackbar("Pas de connexion internet")
        }
        else -> {
            showSnackbar("Une erreur est survenue")
        }
    }
}
```

## Cycle de vie

### Activity Result

```kotlin
// Le SDK gère automatiquement les résultats via les callbacks
// Pas de code supplémentaire nécessaire
```

### Libération des ressources

```kotlin
override fun onDestroy() {
    super.onDestroy()
    // Seulement si vous quittez définitivement l'app
    if (isFinishing) {
        EcoveloSDK.release()
    }
}
```

## Debugging

### Logs

```kotlin
EcoveloConfig.Builder()
    .setDebugMode(BuildConfig.DEBUG)
    .setLogLevel(EcoveloLogLevel.VERBOSE)
    .build()

// Tag: "EcoveloSDK"
// adb logcat -s EcoveloSDK
```

### Inspecteur WebView (Capacitor)

Capacitor utilise une vraie WebView Android. En mode debug, vous pouvez l'inspecter :

1. Assurez-vous que `debugMode = true` dans la config SDK
2. Connectez l'appareil en USB avec le débogage USB activé
3. Ouvrez `chrome://inspect` dans Chrome sur votre PC
4. L'app Ionic apparaîtra dans la liste des WebViews
5. Cliquez "inspect" pour ouvrir les DevTools

> **Note** : Cela fonctionne car Capacitor utilise la WebView système Android,
> pas un moteur JavaScript custom. Le build Ionic est du HTML/JS/CSS standard.

## Checklist d'intégration

- [ ] Dépendance SDK ajoutée
- [ ] `EcoveloSDK.init()` dans Application
- [ ] `EcoveloAuthProvider` implémenté avec token IAM
- [ ] Callbacks configurés
- [ ] Permissions runtime gérées (si nécessaire)
- [ ] Test parcours location
- [ ] Test parcours réservation
- [ ] Test expiration token
- [ ] Test mode hors-ligne

## Support

- **Documentation** : https://docs.ecovelo.bzh/sdk-android
- **Issues** : https://github.com/titibike/ecovelo-sdk-android/issues
- **Email** : support-sdk@ecovelo.bzh
