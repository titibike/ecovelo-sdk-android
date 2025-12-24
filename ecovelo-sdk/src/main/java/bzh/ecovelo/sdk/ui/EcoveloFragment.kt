package bzh.ecovelo.sdk.ui

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.webkit.WebView
import androidx.fragment.app.Fragment
import com.getcapacitor.Bridge
import com.getcapacitor.BridgeFragment
import bzh.ecovelo.sdk.EcoveloSDK
import bzh.ecovelo.sdk.bridge.EcoveloNativePlugin
import bzh.ecovelo.sdk.rental.RentalResult
import bzh.ecovelo.sdk.reservation.ReservationResult

/**
 * Fragment principal du SDK basé sur Capacitor BridgeFragment.
 * 
 * Alternative à [EcoveloActivity] pour une intégration plus flexible.
 * Permet d'intégrer le SDK dans un BottomSheet, un ViewPager, etc.
 * 
 * ## Usage
 * 
 * ```kotlin
 * // Dans votre Activity ou Fragment parent
 * val ecoveloFragment = EcoveloFragment.newInstance(
 *     flowType = EcoveloFragment.FLOW_RENTAL,
 *     stationId = "gare-rennes"
 * )
 * 
 * ecoveloFragment.setResultListener { result ->
 *     when (result) {
 *         is EcoveloFragment.Result.RentalCompleted -> { /* ... */ }
 *         is EcoveloFragment.Result.Cancelled -> { /* ... */ }
 *         is EcoveloFragment.Result.Error -> { /* ... */ }
 *     }
 * }
 * 
 * supportFragmentManager.beginTransaction()
 *     .replace(R.id.container, ecoveloFragment)
 *     .commit()
 * ```
 */
class EcoveloFragment : BridgeFragment() {
    
    private var resultListener: ((Result) -> Unit)? = null
    
    private val flowType: String by lazy {
        arguments?.getString(ARG_FLOW_TYPE) ?: FLOW_RENTAL
    }
    
    private val stationId: String? by lazy {
        arguments?.getString(ARG_STATION_ID)
    }
    
    private val departureTime: String? by lazy {
        arguments?.getString(ARG_DEPARTURE_TIME)
    }
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Activer le debug WebView en mode développement
        if (EcoveloSDK.getConfig().debugMode) {
            WebView.setWebContentsDebuggingEnabled(true)
        }
    }
    
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return super.onCreateView(inflater, container, savedInstanceState)
    }
    
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        
        // Injecter les paramètres de lancement
        bridge?.webView?.let { webView ->
            injectLaunchParams(webView)
        }
    }
    
    /**
     * Configure le listener pour recevoir le résultat du parcours.
     */
    fun setResultListener(listener: (Result) -> Unit) {
        this.resultListener = listener
    }
    
    /**
     * Injecte les paramètres de lancement dans le JavaScript.
     */
    private fun injectLaunchParams(webView: WebView) {
        val config = EcoveloSDK.getConfig()
        val userInfo = EcoveloSDK.getAuthProvider().getUserInfo()
        
        val script = """
            window.EcoveloLaunchParams = {
                mode: 'sdk',
                flow: '$flowType',
                stationId: ${stationId?.let { "'$it'" } ?: "null"},
                departureTime: ${departureTime?.let { "'$it'" } ?: "null"},
                territoryId: '${config.territoryId}',
                environment: '${config.environment.name}',
                debugMode: ${config.debugMode},
                userEmail: ${userInfo?.email?.let { "'$it'" } ?: "null"},
                userFirstName: ${userInfo?.firstName?.let { "'$it'" } ?: "null"}
            };
            
            window.dispatchEvent(new CustomEvent('ecovelo-sdk-ready', { 
                detail: window.EcoveloLaunchParams 
            }));
        """.trimIndent()
        
        webView.evaluateJavascript(script, null)
    }
    
    /**
     * Appelé par le plugin natif quand le parcours est terminé.
     */
    internal fun notifyResult(result: Result) {
        resultListener?.invoke(result)
    }
    
    /**
     * Ferme le fragment (à appeler depuis le parent si nécessaire).
     */
    fun close() {
        parentFragmentManager.beginTransaction()
            .remove(this)
            .commit()
    }
    
    /**
     * Résultat du parcours SDK.
     */
    sealed class Result {
        
        /**
         * Location terminée avec succès.
         */
        data class RentalCompleted(
            val rentalId: String,
            val durationMinutes: Int
        ) : Result()
        
        /**
         * Réservation créée avec succès.
         */
        data class ReservationCreated(
            val reservationId: String,
            val stationName: String,
            val departureTime: String
        ) : Result()
        
        /**
         * Location en cours (l'utilisateur a quitté sans rendre le vélo).
         */
        data class RentalInProgress(
            val rentalId: String
        ) : Result()
        
        /**
         * Parcours annulé par l'utilisateur.
         */
        object Cancelled : Result()
        
        /**
         * Erreur pendant le parcours.
         */
        data class Error(
            val message: String,
            val code: String? = null
        ) : Result()
        
        /**
         * Authentification requise.
         */
        object AuthRequired : Result()
    }
    
    companion object {
        const val ARG_FLOW_TYPE = "flow_type"
        const val ARG_STATION_ID = "station_id"
        const val ARG_DEPARTURE_TIME = "departure_time"
        
        const val FLOW_RENTAL = "rental"
        const val FLOW_RESERVATION = "reservation"
        
        /**
         * Crée une nouvelle instance du fragment pour le parcours de location.
         * 
         * @param stationId Station à pré-sélectionner (optionnel)
         */
        @JvmStatic
        fun newRentalInstance(stationId: String? = null): EcoveloFragment {
            return newInstance(FLOW_RENTAL, stationId, null)
        }
        
        /**
         * Crée une nouvelle instance du fragment pour le parcours de réservation.
         * 
         * @param stationId Station de départ (optionnel)
         * @param departureTime Heure de départ ISO8601 (optionnel)
         */
        @JvmStatic
        fun newReservationInstance(
            stationId: String? = null,
            departureTime: String? = null
        ): EcoveloFragment {
            return newInstance(FLOW_RESERVATION, stationId, departureTime)
        }
        
        /**
         * Crée une nouvelle instance du fragment.
         */
        @JvmStatic
        fun newInstance(
            flowType: String,
            stationId: String? = null,
            departureTime: String? = null
        ): EcoveloFragment {
            return EcoveloFragment().apply {
                arguments = Bundle().apply {
                    putString(ARG_FLOW_TYPE, flowType)
                    stationId?.let { putString(ARG_STATION_ID, it) }
                    departureTime?.let { putString(ARG_DEPARTURE_TIME, it) }
                }
            }
        }
    }
}
