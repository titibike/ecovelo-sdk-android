# Personnalisation du SDK Ecovelo

Ce document décrit les options de personnalisation disponibles pour adapter le SDK Ecovelo à l'identité visuelle de l'application hôte et aux besoins spécifiques du territoire.

## Configuration du territoire

### Identifiant de territoire

Chaque déploiement Ecovelo est associé à un identifiant de territoire unique :

```kotlin
EcoveloConfig.Builder()
    .setTerritoryId("breizhgo")
    .build()
```

Cet identifiant détermine :
- Les stations disponibles
- Les tarifs applicables
- Les règles métier spécifiques
- La configuration backend

### Environnements

```kotlin
enum class EcoveloEnvironment {
    /** Environnement de production */
    PRODUCTION,
    
    /** Environnement de staging/recette */
    STAGING,
    
    /** Environnement de développement */
    DEVELOPMENT
}

EcoveloConfig.Builder()
    .setEnvironment(EcoveloEnvironment.STAGING)
    .build()
```

## Personnalisation visuelle

### Thème de couleurs

```kotlin
EcoveloConfig.Builder()
    .setTheme(
        EcoveloTheme.Builder()
            // Couleur principale (header, boutons primaires)
            .setPrimaryColor(Color.parseColor("#0055A4"))
            
            // Couleur de fond des éléments primaires
            .setPrimaryVariant(Color.parseColor("#003D7A"))
            
            // Couleur secondaire (accents, badges)
            .setSecondaryColor(Color.parseColor("#E4002B"))
            
            // Couleur de fond
            .setBackgroundColor(Color.WHITE)
            
            // Couleur de surface (cards, dialogs)
            .setSurfaceColor(Color.parseColor("#F5F5F5"))
            
            // Couleur du texte
            .setOnPrimaryColor(Color.WHITE)
            .setOnSecondaryColor(Color.WHITE)
            .setOnBackgroundColor(Color.parseColor("#212121"))
            
            // Couleurs d'état
            .setSuccessColor(Color.parseColor("#4CAF50"))
            .setWarningColor(Color.parseColor("#FF9800"))
            .setErrorColor(Color.parseColor("#F44336"))
            
            .build()
    )
    .build()
```

### Logo et branding

```kotlin
EcoveloConfig.Builder()
    .setBranding(
        EcoveloBranding(
            // Logo affiché dans le header
            logoResId = R.drawable.logo_cityway,
            
            // Logo pour le splash screen (optionnel)
            splashLogoResId = R.drawable.splash_logo,
            
            // Nom affiché
            displayName = "Vélos en Gare Bretagne",
            
            // Sous-titre (optionnel)
            tagline = "Powered by Ecovelo"
        )
    )
    .build()
```

### Typographie

```kotlin
EcoveloConfig.Builder()
    .setTypography(
        EcoveloTypography(
            // Police pour les titres
            headingFontFamily = ResourcesCompat.getFont(context, R.font.marianne_bold),
            
            // Police pour le corps de texte
            bodyFontFamily = ResourcesCompat.getFont(context, R.font.marianne_regular),
            
            // Tailles (optionnel, valeurs par défaut raisonnables)
            headingSize = 24.sp,
            bodySize = 16.sp,
            captionSize = 12.sp
        )
    )
    .build()
```

## Personnalisation des textes

### Textes statiques

```kotlin
EcoveloConfig.Builder()
    .setStrings(
        EcoveloStrings(
            // Écran de location
            rentalTitle = "Louer un vélo",
            rentalSubtitle = "Sélectionnez une station",
            startRentalButton = "Commencer la location",
            endRentalButton = "Rendre le vélo",
            
            // Écran de réservation
            reservationTitle = "Réserver un vélo",
            reservationSubtitle = "Planifiez votre trajet",
            confirmReservationButton = "Confirmer la réservation",
            
            // Messages
            noStationSelected = "Veuillez sélectionner une station",
            noBikeAvailable = "Aucun vélo disponible",
            rentalInProgress = "Location en cours",
            
            // Boutons génériques
            confirmButton = "Confirmer",
            cancelButton = "Annuler",
            closeButton = "Fermer",
            retryButton = "Réessayer",
            
            // Écran téléphone
            phoneTitle = "Numéro de téléphone",
            phoneDescription = "Pour utiliser le service, nous avons besoin de votre numéro de téléphone.",
            phoneHint = "06 12 34 56 78",
            phoneValidateButton = "Valider"
        )
    )
    .build()
```

### Internationalisation

```kotlin
// Les textes peuvent être des ressources Android
EcoveloStrings(
    rentalTitle = context.getString(R.string.ecovelo_rental_title),
    // ...
)

// Le SDK supporte également les locales
EcoveloConfig.Builder()
    .setLocale(Locale.FRENCH)
    .build()
```

## Fonctionnalités activables

### Feature flags

```kotlin
EcoveloConfig.Builder()
    .setFeatures(
        EcoveloFeatures(
            // Activer le parcours de réservation
            reservationEnabled = true,
            
            // Activer la carte des stations
            mapEnabled = true,
            
            // Activer les notifications push
            pushNotificationsEnabled = true,
            
            // Activer le scan QR code
            qrCodeScanEnabled = true,
            
            // Activer les statistiques utilisateur
            userStatsEnabled = false,
            
            // Activer le mode hors-ligne
            offlineModeEnabled = false,
            
            // Activer la réservation avec destination
            multiStationReservationEnabled = true
        )
    )
    .build()
```

### Configuration de la carte

```kotlin
EcoveloConfig.Builder()
    .setMapConfig(
        EcoveloMapConfig(
            // Centre par défaut (Rennes)
            defaultCenter = LatLng(48.1173, -1.6778),
            
            // Zoom par défaut
            defaultZoom = 13f,
            
            // Style de carte (optionnel)
            mapStyleResId = R.raw.map_style_bretagne,
            
            // Icônes personnalisées
            stationMarkerResId = R.drawable.ic_station_marker,
            userMarkerResId = R.drawable.ic_user_marker,
            
            // Clusters
            enableClustering = true,
            clusterMinZoom = 10f
        )
    )
    .build()
```

## Comportements personnalisables

### Navigation

```kotlin
EcoveloConfig.Builder()
    .setNavigation(
        EcoveloNavigation(
            // Écran de démarrage
            initialScreen = EcoveloScreen.MAP, // ou STATION_LIST
            
            // Afficher le bouton retour
            showBackButton = true,
            
            // Fermer automatiquement après location
            closeAfterRental = false,
            
            // Animation de transition
            transitionAnimation = TransitionAnimation.SLIDE
        )
    )
    .build()
```

### Gestion des erreurs

```kotlin
EcoveloConfig.Builder()
    .setErrorHandling(
        EcoveloErrorHandling(
            // Afficher les erreurs réseau
            showNetworkErrors = true,
            
            // Réessayer automatiquement
            autoRetryEnabled = true,
            autoRetryMaxAttempts = 3,
            
            // Message d'erreur personnalisé
            genericErrorMessage = "Une erreur est survenue. Veuillez réessayer."
        )
    )
    .build()
```

## Intégration analytics

### Tracking des événements

```kotlin
EcoveloConfig.Builder()
    .setAnalyticsProvider(object : EcoveloAnalyticsProvider {
        
        override fun trackScreen(screenName: String) {
            // Envoyer à votre solution analytics
            Firebase.analytics.logEvent(FirebaseAnalytics.Event.SCREEN_VIEW) {
                param(FirebaseAnalytics.Param.SCREEN_NAME, screenName)
            }
        }
        
        override fun trackEvent(eventName: String, params: Map<String, Any>) {
            Firebase.analytics.logEvent(eventName) {
                params.forEach { (key, value) ->
                    when (value) {
                        is String -> param(key, value)
                        is Long -> param(key, value)
                        is Double -> param(key, value)
                    }
                }
            }
        }
        
        override fun trackError(error: Throwable, context: Map<String, Any>) {
            Firebase.crashlytics.recordException(error)
        }
    })
    .build()
```

### Événements trackés automatiquement

| Événement | Description | Paramètres |
|-----------|-------------|------------|
| `sdk_initialized` | SDK initialisé | `territory_id`, `version` |
| `screen_view` | Écran affiché | `screen_name` |
| `rental_started` | Location démarrée | `station_id`, `bike_id` |
| `rental_ended` | Location terminée | `rental_id`, `duration` |
| `reservation_created` | Réservation créée | `station_id`, `time` |
| `reservation_cancelled` | Réservation annulée | `reservation_id` |
| `error_occurred` | Erreur survenue | `error_type`, `message` |

## Configuration avancée

### Timeouts et retry

```kotlin
EcoveloConfig.Builder()
    .setNetworkConfig(
        EcoveloNetworkConfig(
            // Timeout pour les requêtes API
            connectTimeoutMs = 30_000,
            readTimeoutMs = 30_000,
            
            // Configuration retry
            maxRetries = 3,
            retryDelayMs = 1_000,
            retryBackoffMultiplier = 2.0f,
            
            // Cache
            cacheEnabled = true,
            cacheSizeBytes = 10 * 1024 * 1024 // 10 MB
        )
    )
    .build()
```

### Mode debug

```kotlin
EcoveloConfig.Builder()
    .setDebugMode(BuildConfig.DEBUG)
    .setLogLevel(
        if (BuildConfig.DEBUG) EcoveloLogLevel.VERBOSE 
        else EcoveloLogLevel.ERROR
    )
    // Inspecter la WebView en debug
    .setWebViewDebuggable(BuildConfig.DEBUG)
    .build()
```

## Exemple complet

```kotlin
class MyApplication : Application() {
    
    override fun onCreate() {
        super.onCreate()
        
        EcoveloSDK.init(
            context = this,
            config = EcoveloConfig.Builder()
                // Territoire
                .setTerritoryId("breizhgo")
                .setEnvironment(
                    if (BuildConfig.DEBUG) EcoveloEnvironment.STAGING 
                    else EcoveloEnvironment.PRODUCTION
                )
                
                // Branding
                .setBranding(
                    EcoveloBranding(
                        logoResId = R.drawable.logo_cityway,
                        displayName = "Vélos en Gare Bretagne"
                    )
                )
                
                // Thème Breizhgo
                .setTheme(
                    EcoveloTheme.Builder()
                        .setPrimaryColor(Color.parseColor("#0055A4"))
                        .setSecondaryColor(Color.parseColor("#E4002B"))
                        .build()
                )
                
                // Textes FR
                .setStrings(
                    EcoveloStrings(
                        rentalTitle = getString(R.string.ecovelo_rental_title),
                        reservationTitle = getString(R.string.ecovelo_reservation_title)
                        // ...
                    )
                )
                
                // Features
                .setFeatures(
                    EcoveloFeatures(
                        reservationEnabled = true,
                        mapEnabled = true,
                        multiStationReservationEnabled = true
                    )
                )
                
                // Analytics
                .setAnalyticsProvider(FirebaseAnalyticsProvider())
                
                // Debug
                .setDebugMode(BuildConfig.DEBUG)
                
                .build()
        )
    }
}
```

