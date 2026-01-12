package bzh.ecovelo.sdk.ui

import android.content.Intent
import android.os.Bundle
import android.webkit.WebView
import com.getcapacitor.BridgeActivity
import bzh.ecovelo.sdk.EcoveloSDK
import bzh.ecovelo.sdk.plugins.CameraPlugin
import bzh.ecovelo.sdk.plugins.EcoveloNativePlugin

/**
 * Activity principale du SDK basée sur Capacitor BridgeActivity.
 * 
 * Cette activity hérite de [BridgeActivity] de Capacitor, ce qui permet :
 * - Le fonctionnement complet de tous les plugins Capacitor (Camera, etc.)
 * - La communication native via le bridge Capacitor standard
 * - Le chargement des assets Ionic embarqués
 * 
 * @see EcoveloSDK.start
 */
class EcoveloActivity : BridgeActivity() {
    
    override fun onCreate(savedInstanceState: Bundle?) {
        // Enregistrer nos plugins AVANT super.onCreate()
        registerPlugin(EcoveloNativePlugin::class.java)
        registerPlugin(CameraPlugin::class.java)
        
        super.onCreate(savedInstanceState)
        
        // Référencer cette activity pour updateToken()
        EcoveloSDK.setCurrentActivity(this)
        
        // Activer le debug WebView en mode développement
        if (EcoveloSDK.getConfig().debugMode) {
            WebView.setWebContentsDebuggingEnabled(true)
        }
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
            (function() {
                window.dispatchEvent(new CustomEvent('ecovelo-token-updated', { 
                    detail: {
                        hasToken: ${token != null},
                        userEmail: ${userInfo?.email?.let { "'$it'" } ?: "null"},
                        userFirstName: ${userInfo?.firstName?.let { "'$it'" } ?: "null"}
                    }
                }));
            })();
        """.trimIndent()
        
        runOnUiThread {
            bridge.webView.evaluateJavascript(script, null)
        }
    }

    @Deprecated("Deprecated in Java")
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
    
    companion object {
        const val RESULT_ERROR = 1099
    }
}
