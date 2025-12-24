package bzh.ecovelo.sdk.ui

import android.content.Intent
import android.os.Bundle
import android.webkit.WebView
import com.getcapacitor.BridgeActivity
import com.getcapacitor.Plugin
import bzh.ecovelo.sdk.EcoveloSDK
import bzh.ecovelo.sdk.bridge.EcoveloNativePlugin

/**
 * Activity principale du SDK basée sur Capacitor BridgeActivity.
 * 
 * Cette activity hérite de [BridgeActivity] de Capacitor, ce qui permet :
 * - Le fonctionnement complet de tous les plugins Capacitor (Camera, Geolocation, etc.)
 * - La communication native via le bridge Capacitor standard
 * - Le chargement des assets Ionic embarqués
 * 
 * Elle est lancée par [EcoveloSDK.startRentalFlow] ou [EcoveloSDK.startReservationFlow].
 */
class EcoveloActivity : BridgeActivity() {
    
    private val flowType: String by lazy {
        intent.getStringExtra(EXTRA_FLOW_TYPE) ?: FLOW_RENTAL
    }
    
    private val stationId: String? by lazy {
        intent.getStringExtra(EXTRA_STATION_ID)
    }
    
    override fun onCreate(savedInstanceState: Bundle?) {
        // Enregistrer notre plugin custom AVANT super.onCreate()
        registerPlugin(EcoveloNativePlugin::class.java)
        
        super.onCreate(savedInstanceState)
        
        // Activer le debug WebView en mode développement
        if (EcoveloSDK.getConfig().debugMode) {
            WebView.setWebContentsDebuggingEnabled(true)
        }
        
        // Injecter les paramètres de lancement dans le bridge
        injectLaunchParams()
    }
    
    /**
     * Injecte les paramètres de lancement dans le JavaScript.
     * 
     * Ces paramètres sont accessibles via window.EcoveloLaunchParams
     */
    private fun injectLaunchParams() {
        val config = EcoveloSDK.getConfig()
        val userInfo = EcoveloSDK.getAuthProvider().getUserInfo()
        
        val script = """
            window.EcoveloLaunchParams = {
                mode: 'sdk',
                flow: '$flowType',
                stationId: ${stationId?.let { "'$it'" } ?: "null"},
                departureTime: ${intent.getStringExtra(EXTRA_DEPARTURE_TIME)?.let { "'$it'" } ?: "null"},
                territoryId: '${config.territoryId}',
                environment: '${config.environment.name}',
                debugMode: ${config.debugMode},
                userEmail: ${userInfo?.email?.let { "'$it'" } ?: "null"},
                userFirstName: ${userInfo?.firstName?.let { "'$it'" } ?: "null"}
            };
            
            // Dispatch event pour notifier l'app
            window.dispatchEvent(new CustomEvent('ecovelo-sdk-ready', { 
                detail: window.EcoveloLaunchParams 
            }));
        """.trimIndent()
        
        bridge.webView.evaluateJavascript(script, null)
    }
    
    override fun onBackPressed() {
        // Laisser Capacitor gérer le back si possible
        if (bridge.webView.canGoBack()) {
            bridge.webView.goBack()
        } else {
            setResult(RESULT_CANCELED)
            super.onBackPressed()
        }
    }
    
    /**
     * Appelé par le plugin natif quand le parcours est terminé.
     */
    internal fun finishWithResult(resultCode: Int, data: Intent? = null) {
        setResult(resultCode, data)
        finish()
    }
    
    /**
     * Retourne la liste des plugins à charger.
     * 
     * Note: Les plugins Capacitor standard sont chargés automatiquement.
     * On ajoute ici notre plugin custom EcoveloNativePlugin.
     */
    override fun getPlugins(): MutableList<Class<out Plugin>> {
        return mutableListOf(
            EcoveloNativePlugin::class.java
        )
    }
    
    companion object {
        const val EXTRA_FLOW_TYPE = "flow_type"
        const val EXTRA_STATION_ID = "station_id"
        const val EXTRA_DEPARTURE_TIME = "departure_time"
        
        const val FLOW_RENTAL = "rental"
        const val FLOW_RESERVATION = "reservation"
        
        const val RESULT_RENTAL_COMPLETED = 1001
        const val RESULT_RENTAL_IN_PROGRESS = 1002
        const val RESULT_RESERVATION_CREATED = 1003
        const val RESULT_ERROR = 1099
    }
}

