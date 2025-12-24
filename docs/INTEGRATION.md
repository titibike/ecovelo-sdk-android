# Guide d'intégration SDK Ecovelo Android

Ce guide est destiné aux intégrateurs (Cityway) pour intégrer le SDK Ecovelo dans leur application Android.

## Prérequis

- Android Studio Arctic Fox ou supérieur
- Android SDK 24+ (Android 7.0 Nougat)
- Kotlin 1.9+
- Gradle 8.0+
- Authentification mon-compte.bzh fonctionnelle dans votre app

## Installation

### 1. Ajouter la dépendance

```kotlin
// settings.gradle.kts
dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
        // Si publication privée
        maven {
            url = uri("https://maven.ecovelo.bzh/releases")
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

### 2. Configuration du Manifest

Le SDK déclare automatiquement ses composants. Vous devez uniquement ajouter les permissions internet si ce n'est pas déjà fait :

```xml
<!-- AndroidManifest.xml -->
<uses-permission android:name="android.permission.INTERNET" />
```

### 3. Configuration ProGuard

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
        
        // Initialiser le SDK
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

## Authentification

### Implémenter EcoveloAuthProvider

```kotlin
import bzh.ecovelo.sdk.auth.EcoveloAuthProvider
import bzh.ecovelo.sdk.auth.EcoveloUserInfo

class MonCompteBzhAuthProvider(
    private val sessionManager: MonCompteBzhSessionManager
) : EcoveloAuthProvider {
    
    override fun getAccessToken(): String? {
        return sessionManager.accessToken
    }
    
    override fun getIdToken(): String? {
        return sessionManager.idToken
    }
    
    override suspend fun refreshToken(): Result<String> {
        return runCatching {
            sessionManager.refreshTokens()
            sessionManager.accessToken 
                ?: throw IllegalStateException("No token after refresh")
        }
    }
    
    override fun getUserInfo(): EcoveloUserInfo? {
        val user = sessionManager.currentUser ?: return null
        
        return EcoveloUserInfo(
            sub = user.sub,
            email = user.email,
            firstName = user.firstName,
            lastName = user.lastName
            // phone sera demandé par le SDK si nécessaire
        )
    }
    
    override fun logout() {
        sessionManager.logout()
    }
    
    override fun isAuthenticated(): Boolean {
        return sessionManager.isAuthenticated
    }
}
```

### Enregistrer le provider

```kotlin
// Dans votre Activity principale ou après le login SSO
val authProvider = MonCompteBzhAuthProvider(sessionManager)
EcoveloSDK.setAuthProvider(authProvider)
```

## Lancer les parcours

### Parcours de location

```kotlin
import bzh.ecovelo.sdk.EcoveloSDK
import bzh.ecovelo.sdk.rental.RentalOptions
import bzh.ecovelo.sdk.rental.RentalResult

class BikeStationActivity : AppCompatActivity() {
    
    private fun startBikeRental() {
        // Vérifier que l'utilisateur est connecté
        if (!EcoveloSDK.isAuthenticated()) {
            // Rediriger vers le login SSO
            startSSOLogin()
            return
        }
        
        // Lancer le parcours de location
        EcoveloSDK.startRentalFlow(
            activity = this,
            options = RentalOptions(
                // Optionnel: pré-sélectionner une station
                stationId = "gare-rennes",
                // Callback de fin
                onComplete = { result ->
                    handleRentalResult(result)
                }
            )
        )
    }
    
    private fun handleRentalResult(result: RentalResult) {
        when (result) {
            is RentalResult.Success -> {
                // Location terminée avec succès
                Log.d("Ecovelo", "Location terminée: ${result.rentalId}")
                showSuccessMessage("Merci d'avoir utilisé le service !")
            }
            
            is RentalResult.Cancelled -> {
                // L'utilisateur a annulé
                Log.d("Ecovelo", "Location annulée par l'utilisateur")
            }
            
            is RentalResult.Error -> {
                // Une erreur s'est produite
                Log.e("Ecovelo", "Erreur location: ${result.message}", result.cause)
                showErrorMessage(result.message)
            }
            
            is RentalResult.InProgress -> {
                // Une location est en cours (l'utilisateur a quitté sans rendre le vélo)
                Log.d("Ecovelo", "Location en cours: ${result.rentalId}")
            }
        }
    }
}
```

### Parcours de réservation

```kotlin
import bzh.ecovelo.sdk.reservation.ReservationOptions
import bzh.ecovelo.sdk.reservation.ReservationResult
import java.time.LocalDateTime

class TripPlannerActivity : AppCompatActivity() {
    
    private fun reserveBike() {
        EcoveloSDK.startReservationFlow(
            activity = this,
            options = ReservationOptions(
                // Station de départ (optionnel)
                departureStationId = "gare-rennes",
                // Heure de départ souhaitée
                departureTime = LocalDateTime.now().plusHours(2),
                // Durée estimée (optionnel)
                estimatedDurationMinutes = 30,
                // Station d'arrivée (optionnel, pour réservation avec trajet)
                arrivalStationId = "gare-cesson-sevigne",
                // Callback
                onComplete = { result ->
                    handleReservationResult(result)
                }
            )
        )
    }
    
    private fun handleReservationResult(result: ReservationResult) {
        when (result) {
            is ReservationResult.Success -> {
                showConfirmation(
                    "Réservation confirmée",
                    "Vélo réservé à ${result.stationName} " +
                    "pour ${result.departureTime.format(timeFormatter)}"
                )
            }
            
            is ReservationResult.Cancelled -> {
                // L'utilisateur a annulé
            }
            
            is ReservationResult.Error -> {
                showError(result.message)
            }
        }
    }
}
```

### Consulter les réservations en cours

```kotlin
// Obtenir les réservations de l'utilisateur
val reservations = EcoveloSDK.getActiveReservations()

reservations.forEach { reservation ->
    Log.d("Ecovelo", """
        Réservation: ${reservation.id}
        Station: ${reservation.stationName}
        Heure: ${reservation.departureTime}
        Statut: ${reservation.status}
    """.trimIndent())
}

// Annuler une réservation
EcoveloSDK.cancelReservation(reservationId) { result ->
    when (result) {
        is CancelResult.Success -> showMessage("Réservation annulée")
        is CancelResult.Error -> showError(result.message)
    }
}
```

## Gestion des événements

### Callbacks globaux

```kotlin
// Configuration des callbacks globaux
EcoveloSDK.setCallbacks(
    EcoveloCallbacks(
        // Appelé quand une location commence
        onRentalStarted = { rentalId ->
            analytics.trackEvent("rental_started", rentalId)
        },
        
        // Appelé quand une location se termine
        onRentalEnded = { rentalId, duration ->
            analytics.trackEvent("rental_ended", mapOf(
                "rental_id" to rentalId,
                "duration_minutes" to duration
            ))
        },
        
        // Appelé en cas d'erreur
        onError = { error ->
            crashlytics.recordException(error)
        },
        
        // Appelé si l'utilisateur doit se reconnecter
        onAuthRequired = {
            startSSOLogin()
        },
        
        // Appelé quand le SDK demande le numéro de téléphone
        onPhoneRequired = { callback ->
            // Option 1: Laisser le SDK gérer (défaut)
            callback.useSDKUI()
            
            // Option 2: Gérer vous-même
            // showCustomPhoneDialog { phone -> 
            //     callback.submitPhone(phone) 
            // }
        }
    )
)
```

## Personnalisation

### Thème

```kotlin
EcoveloConfig.Builder()
    .setTheme(
        EcoveloTheme(
            primaryColor = Color.parseColor("#0055A4"),  // Bleu Bretagne
            secondaryColor = Color.parseColor("#FFFFFF"),
            accentColor = Color.parseColor("#E4002B"),
            // Logo personnalisé (optionnel)
            logoResId = R.drawable.logo_cityway
        )
    )
    .build()
```

### Textes

```kotlin
EcoveloConfig.Builder()
    .setStrings(
        EcoveloStrings(
            rentalTitle = "Location de vélo",
            reservationTitle = "Réserver un vélo",
            confirmButton = "Confirmer",
            cancelButton = "Annuler"
            // ... autres textes
        )
    )
    .build()
```

## Debugging

### Logs

```kotlin
// Activer les logs détaillés en développement
EcoveloConfig.Builder()
    .setDebugMode(true)
    .setLogLevel(EcoveloLogLevel.VERBOSE)
    .build()

// Les logs apparaîtront avec le tag "EcoveloSDK"
// adb logcat -s EcoveloSDK
```

### Inspecteur WebView

En mode debug, vous pouvez inspecter la WebView via Chrome DevTools :

1. Connectez votre appareil en USB
2. Ouvrez `chrome://inspect` dans Chrome
3. Trouvez la WebView Ecovelo et cliquez "inspect"

## Gestion des erreurs

### Types d'erreurs

```kotlin
sealed class EcoveloError : Exception() {
    // Erreurs d'authentification
    sealed class Auth : EcoveloError() {
        object NotAuthenticated : Auth()
        object TokenExpired : Auth()
        data class InvalidToken(override val message: String) : Auth()
    }
    
    // Erreurs réseau
    sealed class Network : EcoveloError() {
        object NoConnection : Network()
        data class ServerError(val code: Int) : Network()
        object Timeout : Network()
    }
    
    // Erreurs métier
    sealed class Business : EcoveloError() {
        object NoBikeAvailable : Business()
        object StationFull : Business()
        object ReservationExpired : Business()
        data class RentalInProgress(val rentalId: String) : Business()
    }
    
    // Erreurs de configuration
    sealed class Config : EcoveloError() {
        object NotInitialized : Config()
        object InvalidConfig : Config()
    }
}
```

### Gestion centralisée

```kotlin
EcoveloSDK.setErrorHandler { error ->
    when (error) {
        is EcoveloError.Auth.TokenExpired -> {
            // Rafraîchir le token ou rediriger vers le login
            refreshTokenOrLogin()
        }
        
        is EcoveloError.Network.NoConnection -> {
            showSnackbar("Pas de connexion internet")
        }
        
        is EcoveloError.Business.NoBikeAvailable -> {
            showDialog("Aucun vélo disponible", 
                "Veuillez réessayer plus tard ou choisir une autre station")
        }
        
        else -> {
            // Erreur générique
            showSnackbar("Une erreur est survenue")
            Log.e("Ecovelo", "Error", error)
        }
    }
}
```

## Cycle de vie

### Activity Result

Le SDK utilise Activity Result API. Assurez-vous que votre activité peut recevoir les résultats :

```kotlin
class MainActivity : AppCompatActivity() {
    
    // Le SDK enregistre automatiquement ses launchers
    // Pas de code supplémentaire nécessaire si vous utilisez AppCompatActivity
    
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        // Le SDK intercepte automatiquement ses propres résultats
    }
}
```

### Gestion de la mémoire

```kotlin
// Si vous devez libérer les ressources (rare)
override fun onDestroy() {
    super.onDestroy()
    // Seulement si vous quittez définitivement l'app
    if (isFinishing) {
        EcoveloSDK.release()
    }
}
```

## Migration depuis une intégration directe

Si vous migrez depuis une intégration directe de l'app Ionic :

```kotlin
// AVANT (intégration directe Capacitor)
val intent = Intent(this, IonicActivity::class.java)
intent.putExtra("config", configJson)
startActivity(intent)

// APRÈS (avec le SDK)
EcoveloSDK.startRentalFlow(
    activity = this,
    options = RentalOptions(onComplete = { /* ... */ })
)
```

## Support

- **Documentation technique** : https://docs.ecovelo.bzh/sdk-android
- **Issues** : https://github.com/titibike/ecovelo-sdk-android/issues
- **Email** : support-sdk@ecovelo.bzh

