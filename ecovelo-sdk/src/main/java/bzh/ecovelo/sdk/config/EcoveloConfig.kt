package bzh.ecovelo.sdk.config

import android.graphics.Color
import androidx.annotation.ColorInt
import androidx.annotation.DrawableRes

/**
 * Configuration du SDK Ecovelo.
 * 
 * Utilisez [Builder] pour créer une instance de configuration.
 * 
 * ```kotlin
 * val config = EcoveloConfig.Builder()
 *     .setTerritoryId("bretagne-velo-gare")
 *     .setEnvironment(EcoveloEnvironment.PRODUCTION)
 *     .setTheme(EcoveloTheme(...))
 *     .build()
 * ```
 */
data class EcoveloConfig internal constructor(
    /** Identifiant du territoire */
    val territoryId: String,
    /** Environnement (production, staging, dev) */
    val environment: EcoveloEnvironment,
    /** Thème visuel */
    val theme: EcoveloTheme,
    /** Branding (logo, nom) */
    val branding: EcoveloBranding,
    /** Textes personnalisés */
    val strings: EcoveloStrings,
    /** Features activées */
    val features: EcoveloFeatures,
    /** Configuration de la carte */
    val mapConfig: EcoveloMapConfig,
    /** Mode debug */
    val debugMode: Boolean,
    /** Niveau de log */
    val logLevel: EcoveloLogLevel
) {
    
    /**
     * Builder pour créer une configuration [EcoveloConfig].
     */
    class Builder {
        private var territoryId: String = ""
        private var environment: EcoveloEnvironment = EcoveloEnvironment.PRODUCTION
        private var theme: EcoveloTheme = EcoveloTheme()
        private var branding: EcoveloBranding = EcoveloBranding()
        private var strings: EcoveloStrings = EcoveloStrings()
        private var features: EcoveloFeatures = EcoveloFeatures()
        private var mapConfig: EcoveloMapConfig = EcoveloMapConfig()
        private var debugMode: Boolean = false
        private var logLevel: EcoveloLogLevel = EcoveloLogLevel.ERROR
        
        /**
         * Définit l'identifiant du territoire.
         * 
         * Cet identifiant est fourni par Ecovelo et détermine :
         * - Les stations disponibles
         * - Les tarifs
         * - Les règles métier spécifiques
         */
        fun setTerritoryId(territoryId: String) = apply {
            this.territoryId = territoryId
        }
        
        /**
         * Définit l'environnement cible.
         */
        fun setEnvironment(environment: EcoveloEnvironment) = apply {
            this.environment = environment
        }
        
        /**
         * Définit le thème visuel.
         */
        fun setTheme(theme: EcoveloTheme) = apply {
            this.theme = theme
        }
        
        /**
         * Définit le branding (logo, nom).
         */
        fun setBranding(branding: EcoveloBranding) = apply {
            this.branding = branding
        }
        
        /**
         * Définit les textes personnalisés.
         */
        fun setStrings(strings: EcoveloStrings) = apply {
            this.strings = strings
        }
        
        /**
         * Définit les features activées.
         */
        fun setFeatures(features: EcoveloFeatures) = apply {
            this.features = features
        }
        
        /**
         * Définit la configuration de la carte.
         */
        fun setMapConfig(mapConfig: EcoveloMapConfig) = apply {
            this.mapConfig = mapConfig
        }
        
        /**
         * Active/désactive le mode debug.
         */
        fun setDebugMode(enabled: Boolean) = apply {
            this.debugMode = enabled
        }
        
        /**
         * Définit le niveau de log.
         */
        fun setLogLevel(level: EcoveloLogLevel) = apply {
            this.logLevel = level
        }
        
        /**
         * Construit la configuration.
         * 
         * @throws IllegalArgumentException Si territoryId n'est pas défini
         */
        fun build(): EcoveloConfig {
            require(territoryId.isNotBlank()) {
                "Territory ID must be set. Call setTerritoryId() before build()."
            }
            
            return EcoveloConfig(
                territoryId = territoryId,
                environment = environment,
                theme = theme,
                branding = branding,
                strings = strings,
                features = features,
                mapConfig = mapConfig,
                debugMode = debugMode,
                logLevel = logLevel
            )
        }
    }
}

/**
 * Environnements disponibles.
 */
enum class EcoveloEnvironment(val baseUrl: String) {
    PRODUCTION("https://api.ecovelo.bzh"),
    STAGING("https://api.staging.ecovelo.bzh"),
    DEVELOPMENT("https://api.dev.ecovelo.bzh")
}

/**
 * Niveaux de log.
 */
enum class EcoveloLogLevel {
    VERBOSE,
    DEBUG,
    INFO,
    WARNING,
    ERROR,
    NONE
}

/**
 * Thème visuel du SDK.
 */
data class EcoveloTheme(
    @ColorInt val primaryColor: Int = Color.parseColor("#0055A4"),
    @ColorInt val primaryVariant: Int = Color.parseColor("#003D7A"),
    @ColorInt val secondaryColor: Int = Color.parseColor("#E4002B"),
    @ColorInt val backgroundColor: Int = Color.WHITE,
    @ColorInt val surfaceColor: Int = Color.parseColor("#F5F5F5"),
    @ColorInt val onPrimaryColor: Int = Color.WHITE,
    @ColorInt val onSecondaryColor: Int = Color.WHITE,
    @ColorInt val onBackgroundColor: Int = Color.parseColor("#212121"),
    @ColorInt val successColor: Int = Color.parseColor("#4CAF50"),
    @ColorInt val warningColor: Int = Color.parseColor("#FF9800"),
    @ColorInt val errorColor: Int = Color.parseColor("#F44336")
)

/**
 * Branding du SDK.
 */
data class EcoveloBranding(
    @DrawableRes val logoResId: Int? = null,
    @DrawableRes val splashLogoResId: Int? = null,
    val displayName: String = "Ecovelo",
    val tagline: String? = null
)

/**
 * Textes personnalisables.
 */
data class EcoveloStrings(
    val rentalTitle: String = "Louer un vélo",
    val rentalSubtitle: String = "Sélectionnez une station",
    val startRentalButton: String = "Démarrer la location",
    val endRentalButton: String = "Rendre le vélo",
    val reservationTitle: String = "Réserver un vélo",
    val reservationSubtitle: String = "Planifiez votre trajet",
    val confirmReservationButton: String = "Confirmer la réservation",
    val noStationSelected: String = "Veuillez sélectionner une station",
    val noBikeAvailable: String = "Aucun vélo disponible",
    val rentalInProgress: String = "Location en cours",
    val confirmButton: String = "Confirmer",
    val cancelButton: String = "Annuler",
    val closeButton: String = "Fermer",
    val retryButton: String = "Réessayer",
    val phoneTitle: String = "Numéro de téléphone",
    val phoneDescription: String = "Pour utiliser le service, nous avons besoin de votre numéro de téléphone.",
    val phoneHint: String = "06 12 34 56 78",
    val phoneValidateButton: String = "Valider",
    val genericErrorMessage: String = "Une erreur est survenue. Veuillez réessayer."
)

/**
 * Features activables.
 */
data class EcoveloFeatures(
    val reservationEnabled: Boolean = true,
    val mapEnabled: Boolean = true,
    val pushNotificationsEnabled: Boolean = false,
    val qrCodeScanEnabled: Boolean = true,
    val userStatsEnabled: Boolean = false,
    val offlineModeEnabled: Boolean = false,
    val multiStationReservationEnabled: Boolean = true,
    val phoneRequestEnabled: Boolean = true
)

/**
 * Configuration de la carte.
 */
data class EcoveloMapConfig(
    val defaultLatitude: Double = 48.1173,
    val defaultLongitude: Double = -1.6778,
    val defaultZoom: Float = 13f,
    @DrawableRes val stationMarkerResId: Int? = null,
    @DrawableRes val userMarkerResId: Int? = null,
    val enableClustering: Boolean = true,
    val clusterMinZoom: Float = 10f
)

