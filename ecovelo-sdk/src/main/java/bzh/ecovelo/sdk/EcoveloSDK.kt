package bzh.ecovelo.sdk

import android.app.Activity
import android.content.Context
import android.content.Intent
import bzh.ecovelo.sdk.auth.EcoveloAuthProvider
import bzh.ecovelo.sdk.config.EcoveloCallbacks
import bzh.ecovelo.sdk.config.EcoveloConfig
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
     * Lance l'application usager Ecovelo.
     * 
     * L'application peut être lancée **avec ou sans token** :
     * - **Avec token** : L'utilisateur est connecté, peut louer/réserver
     * - **Sans token** : Mode exploration (carte, stations), bouton "Se connecter" visible
     * 
     * Quand l'utilisateur clique sur "Se connecter" dans l'app, le callback
     * [EcoveloCallbacks.onLoginRequired] est appelé. L'app hôte doit alors :
     * 1. Lancer le flow SSO mon-compte.bzh
     * 2. Appeler [updateToken] avec le nouveau token
     * 
     * @param activity L'activité depuis laquelle lancer l'app
     * @param onResult Callback appelé quand l'utilisateur ferme l'app
     */
    @JvmStatic
    fun start(activity: Activity, onResult: ((EcoveloResult) -> Unit)? = null) {
        ensureInitialized()
        
        // Stocker le callback pour le récupérer au retour
        pendingResultCallback = onResult
        
        val intent = Intent(activity, EcoveloActivity::class.java)
        activity.startActivityForResult(intent, REQUEST_CODE_ECOVELO)
    }
    
    /**
     * Met à jour le token après une connexion SSO.
     * 
     * À appeler après que l'utilisateur s'est connecté via mon-compte.bzh
     * suite au callback [EcoveloCallbacks.onLoginRequired].
     * 
     * L'app Ionic sera notifiée et pourra continuer le parcours.
     */
    @JvmStatic
    fun updateToken() {
        // Notifier l'app Ionic que le token est disponible
        currentActivity?.get()?.let { activity ->
            if (activity is EcoveloActivity) {
                activity.notifyTokenUpdated()
            }
        }
    }
    
    // Référence à l'activity courante pour updateToken
    private var currentActivity: WeakReference<Activity>? = null
    
    internal fun setCurrentActivity(activity: Activity?) {
        currentActivity = activity?.let { WeakReference(it) }
    }
    
    // Callback en attente de résultat
    private var pendingResultCallback: ((EcoveloResult) -> Unit)? = null
    
    /**
     * À appeler depuis onActivityResult de l'Activity hôte.
     */
    @JvmStatic
    fun handleActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == REQUEST_CODE_ECOVELO) {
            val result = when (resultCode) {
                Activity.RESULT_CANCELED -> EcoveloResult.Closed
                EcoveloActivity.RESULT_ERROR -> {
                    val message = data?.getStringExtra("error_message") ?: "Unknown error"
                    EcoveloResult.Error(message)
                }
                else -> EcoveloResult.Closed
            }
            pendingResultCallback?.invoke(result)
            pendingResultCallback = null
        }
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
    const val REQUEST_CODE_ECOVELO = 10001
}

/**
 * Résultat de l'exécution du SDK.
 */
sealed class EcoveloResult {
    /** L'utilisateur a fermé l'application */
    object Closed : EcoveloResult()
    
    /** Une erreur s'est produite */
    data class Error(val message: String, val cause: Throwable? = null) : EcoveloResult()
}

