package bzh.ecovelo.sdk.ui

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.webkit.WebView
import com.getcapacitor.BridgeActivity
import bzh.ecovelo.sdk.EcoveloSDK
import bzh.ecovelo.sdk.plugins.CameraPlugin
import bzh.ecovelo.sdk.plugins.EcoveloNativePlugin
import bzh.ecovelo.sdk.plugins.GeolocationPlugin

/**
 * Activity principale du SDK basée sur Capacitor BridgeActivity.
 * 
 * Cette activity hérite de [BridgeActivity] de Capacitor, ce qui permet :
 * - Le fonctionnement complet de tous les plugins Capacitor (Camera, Geolocation, etc.)
 * - La communication native via le bridge Capacitor standard
 * - Le chargement des assets Ionic embarqués
 * 
 * Les assets sont chargés depuis assets/public/ (configuré dans capacitor.config.json)
 * 
 * @see EcoveloSDK.start
 */
class EcoveloActivity : BridgeActivity() {
    
    companion object {
        private const val TAG = "EcoveloActivity"
        const val RESULT_ERROR = 1099
    }
    
    override fun onCreate(savedInstanceState: Bundle?) {
        Log.d(TAG, "onCreate - Registering plugins...")
        
        // Enregistrer nos plugins AVANT super.onCreate()
        registerPlugin(EcoveloNativePlugin::class.java)
        registerPlugin(CameraPlugin::class.java)
        registerPlugin(GeolocationPlugin::class.java)
        
        super.onCreate(savedInstanceState)
        
        // Référencer cette activity pour updateToken()
        EcoveloSDK.setCurrentActivity(this)
        
        // Activer le debug WebView en mode développement
        if (EcoveloSDK.getConfig().debugMode) {
            WebView.setWebContentsDebuggingEnabled(true)
        }
        
        // Ajouter un bridge JavaScript personnalisé pour le debugging
        bridge.webView.addJavascriptInterface(EcoveloJsBridge(), "EcoveloSDKBridge")
        
        Log.d(TAG, "onCreate complete - Capacitor should load from assets/public/")
    }
    
    /**
     * Bridge JavaScript personnalisé pour la communication directe et le debugging.
     */
    inner class EcoveloJsBridge {
        @android.webkit.JavascriptInterface
        fun log(message: String) {
            Log.d(TAG, "[JS] $message")
        }
        
        @android.webkit.JavascriptInterface
        fun isNativePlatform(): Boolean {
            return true
        }
        
        @android.webkit.JavascriptInterface 
        fun getPlugins(): String {
            val plugins = listOf("EcoveloNative", "Camera", "Geolocation")
            Log.d(TAG, "Available plugins: $plugins")
            return plugins.joinToString(",")
        }
        
        @android.webkit.JavascriptInterface
        fun getConfig(): String {
            val config = EcoveloSDK.getConfig()
            return """{"territoryId":"${config.territoryId}","environment":"${config.environment.name}","debugMode":${config.debugMode}}"""
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
        val userInfo = try { EcoveloSDK.getAuthProvider().getUserInfo() } catch (e: Exception) { null }
        val token = try { EcoveloSDK.getAuthProvider().getAccessToken() } catch (e: Exception) { null }
        
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
}
