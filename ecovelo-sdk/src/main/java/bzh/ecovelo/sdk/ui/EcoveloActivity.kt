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
    
    override fun onCreate(savedInstanceState: Bundle?) {
        // Enregistrer notre plugin custom AVANT super.onCreate()
        registerPlugin(EcoveloNativePlugin::class.java)
        
        super.onCreate(savedInstanceState)
        
        // Référencer cette activity pour updateToken()
        EcoveloSDK.setCurrentActivity(this)
        
        // Activer le debug WebView en mode développement
        if (EcoveloSDK.getConfig().debugMode) {
            WebView.setWebContentsDebuggingEnabled(true)
        }
        
        // Injecter les paramètres de lancement dans le bridge
        injectLaunchParams()
    }
    
    override fun onDestroy() {
        EcoveloSDK.setCurrentActivity(null)
        super.onDestroy()
    }
    
    /**
     * Appelé quand le token est mis à jour après connexion SSO.
     * Notifie l'app Ionic pour qu'elle rafraîchisse l'état.
     */
    internal fun notifyTokenUpdated() {
        val userInfo = EcoveloSDK.getAuthProvider().getUserInfo()
        val token = EcoveloSDK.getAuthProvider().getAccessToken()
        
        val script = """
            window.dispatchEvent(new CustomEvent('ecovelo-token-updated', { 
                detail: {
                    hasToken: ${token != null},
                    userEmail: ${userInfo?.email?.let { "'$it'" } ?: "null"},
                    userFirstName: ${userInfo?.firstName?.let { "'$it'" } ?: "null"}
                }
            }));
        """.trimIndent()
        
        bridge.webView.evaluateJavascript(script, null)
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
        const val RESULT_ERROR = 1099
    }
}

