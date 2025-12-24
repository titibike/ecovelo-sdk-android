package bzh.ecovelo.sdk

import android.app.Activity
import android.content.Context
import android.content.Intent
import bzh.ecovelo.sdk.auth.EcoveloAuthProvider
import bzh.ecovelo.sdk.config.EcoveloCallbacks
import bzh.ecovelo.sdk.config.EcoveloConfig
import bzh.ecovelo.sdk.rental.RentalOptions
import bzh.ecovelo.sdk.reservation.ReservationOptions
import bzh.ecovelo.sdk.ui.EcoveloActivity
import java.lang.ref.WeakReference

/**
 * Point d'entrée principal du SDK Ecovelo.
 * 
 * Ce SDK permet d'intégrer le parcours usager de location de vélos Ecovelo
 * dans une application Android tierce.
 * 
 * ## Initialisation
 * 
 * ```kotlin
 * // Dans votre Application.onCreate()
 * EcoveloSDK.init(
 *     context = this,
 *     config = EcoveloConfig.Builder()
 *         .setTerritoryId("bretagne-velo-gare")
 *         .setEnvironment(EcoveloEnvironment.PRODUCTION)
 *         .build()
 * )
 * ```
 * 
 * ## Authentification
 * 
 * Le SDK requiert un provider d'authentification pour obtenir les tokens SSO :
 * 
 * ```kotlin
 * EcoveloSDK.setAuthProvider(MyAuthProvider())
 * ```
 * 
 * ## Usage
 * 
 * ```kotlin
 * EcoveloSDK.startRentalFlow(activity, RentalOptions(...))
 * ```
 */
object EcoveloSDK {
    
    private var applicationContext: WeakReference<Context>? = null
    private var config: EcoveloConfig? = null
    private var authProvider: EcoveloAuthProvider? = null
    private var callbacks: EcoveloCallbacks? = null
    
    /**
     * Version du SDK
     */
    val version: String = BuildConfig.SDK_VERSION
    
    /**
     * Indique si le SDK a été initialisé
     */
    val isInitialized: Boolean
        get() = config != null && applicationContext?.get() != null
    
    /**
     * Initialise le SDK Ecovelo.
     * 
     * Cette méthode doit être appelée une seule fois au démarrage de l'application,
     * idéalement dans `Application.onCreate()`.
     * 
     * @param context Le contexte de l'application
     * @param config La configuration du SDK
     * @throws IllegalStateException Si le SDK est déjà initialisé
     */
    @JvmStatic
    fun init(context: Context, config: EcoveloConfig) {
        if (isInitialized) {
            throw IllegalStateException("EcoveloSDK is already initialized. Call init() only once.")
        }
        
        this.applicationContext = WeakReference(context.applicationContext)
        this.config = config
        
        // Log initialization
        if (config.debugMode) {
            android.util.Log.d(TAG, "EcoveloSDK initialized with territory: ${config.territoryId}")
        }
    }
    
    /**
     * Configure le provider d'authentification.
     * 
     * Le provider est responsable de fournir les tokens OAuth2/OIDC
     * depuis le SSO de l'application hôte (ex: mon-compte.bzh).
     * 
     * @param provider L'implémentation de EcoveloAuthProvider
     */
    @JvmStatic
    fun setAuthProvider(provider: EcoveloAuthProvider) {
        this.authProvider = provider
    }
    
    /**
     * Configure les callbacks globaux du SDK.
     * 
     * @param callbacks Les callbacks pour les événements du SDK
     */
    @JvmStatic
    fun setCallbacks(callbacks: EcoveloCallbacks) {
        this.callbacks = callbacks
    }
    
    /**
     * Vérifie si l'utilisateur est authentifié.
     * 
     * @return true si un token valide est disponible
     */
    @JvmStatic
    fun isAuthenticated(): Boolean {
        return authProvider?.isAuthenticated() == true
    }
    
    /**
     * Lance le parcours de location de vélo.
     * 
     * Cette méthode ouvre l'écran de location où l'utilisateur peut :
     * - Voir la carte des stations
     * - Sélectionner un vélo
     * - Démarrer et terminer une location
     * 
     * @param activity L'activité depuis laquelle lancer le parcours
     * @param options Les options de configuration du parcours
     */
    @JvmStatic
    fun startRentalFlow(activity: Activity, options: RentalOptions = RentalOptions()) {
        ensureInitialized()
        
        if (!isAuthenticated()) {
            callbacks?.onAuthRequired?.invoke()
            return
        }
        
        val intent = Intent(activity, EcoveloActivity::class.java).apply {
            putExtra(EcoveloActivity.EXTRA_FLOW_TYPE, EcoveloActivity.FLOW_RENTAL)
            putExtra(EcoveloActivity.EXTRA_STATION_ID, options.stationId)
        }
        
        activity.startActivityForResult(intent, REQUEST_CODE_RENTAL)
    }
    
    /**
     * Lance le parcours de réservation de vélo.
     * 
     * Permet à l'utilisateur de réserver un vélo pour un créneau futur.
     * 
     * @param activity L'activité depuis laquelle lancer le parcours
     * @param options Les options de configuration de la réservation
     */
    @JvmStatic
    fun startReservationFlow(activity: Activity, options: ReservationOptions = ReservationOptions()) {
        ensureInitialized()
        ensureFeatureEnabled("reservation")
        
        if (!isAuthenticated()) {
            callbacks?.onAuthRequired?.invoke()
            return
        }
        
        val intent = Intent(activity, EcoveloActivity::class.java).apply {
            putExtra(EcoveloActivity.EXTRA_FLOW_TYPE, EcoveloActivity.FLOW_RESERVATION)
            putExtra(EcoveloActivity.EXTRA_STATION_ID, options.departureStationId)
            options.departureTime?.let { 
                putExtra(EcoveloActivity.EXTRA_DEPARTURE_TIME, it.toString()) 
            }
        }
        
        activity.startActivityForResult(intent, REQUEST_CODE_RESERVATION)
    }
    
    // ============== Internal API ==============
    
    internal fun getContext(): Context {
        return applicationContext?.get() 
            ?: throw IllegalStateException("EcoveloSDK not initialized. Call init() first.")
    }
    
    internal fun getConfig(): EcoveloConfig {
        return config 
            ?: throw IllegalStateException("EcoveloSDK not initialized. Call init() first.")
    }
    
    internal fun getAuthProvider(): EcoveloAuthProvider {
        return authProvider 
            ?: throw IllegalStateException("AuthProvider not set. Call setAuthProvider() first.")
    }
    
    internal fun getCallbacks(): EcoveloCallbacks? = callbacks
    
    private fun ensureInitialized() {
        if (!isInitialized) {
            throw IllegalStateException("EcoveloSDK not initialized. Call init() first.")
        }
    }
    
    private fun ensureFeatureEnabled(feature: String) {
        val features = config?.features ?: return
        
        when (feature) {
            "reservation" -> {
                if (!features.reservationEnabled) {
                    throw IllegalStateException("Reservation feature is not enabled in config")
                }
            }
        }
    }
    
    /**
     * Libère les ressources du SDK.
     * 
     * À appeler uniquement si l'application se termine définitivement.
     */
    @JvmStatic
    fun release() {
        applicationContext = null
        config = null
        authProvider = null
        callbacks = null
    }
    
    // Constants
    private const val TAG = "EcoveloSDK"
    const val REQUEST_CODE_RENTAL = 10001
    const val REQUEST_CODE_RESERVATION = 10002
}

