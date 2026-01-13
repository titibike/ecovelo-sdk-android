package bzh.ecovelo.sdk.ui

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.webkit.WebView
import com.getcapacitor.BridgeActivity
import bzh.ecovelo.sdk.EcoveloSDK
import bzh.ecovelo.sdk.plugins.AppPlugin
import bzh.ecovelo.sdk.plugins.CameraPlugin
import bzh.ecovelo.sdk.plugins.EcoveloNativePlugin
import bzh.ecovelo.sdk.plugins.GeolocationPlugin
import bzh.ecovelo.sdk.plugins.ScreenOrientationPlugin
import bzh.ecovelo.sdk.plugins.StripePlugin
import bzh.ecovelo.sdk.plugins.NativeAudioPlugin

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
        registerPlugin(AppPlugin::class.java)
        registerPlugin(ScreenOrientationPlugin::class.java)
        registerPlugin(StripePlugin::class.java)
        registerPlugin(NativeAudioPlugin::class.java)
        
        super.onCreate(savedInstanceState)
        
        // Référencer cette activity pour updateToken()
        EcoveloSDK.setCurrentActivity(this)
        
        // Activer le debug WebView en mode développement
        if (EcoveloSDK.getConfig().debugMode) {
            WebView.setWebContentsDebuggingEnabled(true)
        }
        
        // Configurer la WebView pour Mapbox (WebGL)
        bridge.webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            databaseEnabled = true
            // Important pour Mapbox WebGL
            setGeolocationEnabled(true)
            mediaPlaybackRequiresUserGesture = false
            // Permettre le contenu mixte (HTTP dans HTTPS)
            mixedContentMode = android.webkit.WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        }
        
        // Activer l'accélération matérielle pour WebGL
        bridge.webView.setLayerType(android.view.View.LAYER_TYPE_HARDWARE, null)
        
        // Ajouter un bridge JavaScript personnalisé pour le debugging
        bridge.webView.addJavascriptInterface(EcoveloJsBridge(), "EcoveloSDKBridge")
        
        // Injecter un script pour capturer les erreurs et diagnostiquer WebGL
        bridge.webView.evaluateJavascript("""
            window.onerror = function(msg, url, line, col, error) {
                console.error('[GlobalError]', msg, url, line);
                return false;
            };
            window.addEventListener('unhandledrejection', function(event) {
                console.error('[UnhandledPromise]', event.reason);
            });
            
            // Diagnostic WebGL
            setTimeout(function() {
                var canvas = document.createElement('canvas');
                var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                console.log('[WebGL] Supported:', !!gl);
                if (gl) {
                    console.log('[WebGL] Vendor:', gl.getParameter(gl.VENDOR));
                    console.log('[WebGL] Renderer:', gl.getParameter(gl.RENDERER));
                }
                
                // Vérifier les éléments Mapbox
                var mapElements = document.querySelectorAll('.mapboxgl-map, .maplibregl-map, [class*="map"]');
                console.log('[Mapbox] Map elements found:', mapElements.length);
                mapElements.forEach(function(el, i) {
                    var rect = el.getBoundingClientRect();
                    console.log('[Mapbox] Element ' + i + ':', el.className, 'size:', rect.width + 'x' + rect.height);
                });
            }, 3000);
        """.trimIndent(), null)
        
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
            val plugins = listOf(
                "EcoveloNative", "Camera", "Geolocation", 
                "App", "ScreenOrientation", "Stripe"
            )
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
