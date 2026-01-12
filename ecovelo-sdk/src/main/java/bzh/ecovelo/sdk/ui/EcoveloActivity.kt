package bzh.ecovelo.sdk.ui

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.webkit.WebViewAssetLoader
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
    
    companion object {
        private const val TAG = "EcoveloActivity"
        const val RESULT_ERROR = 1099
    }
    
    private var assetsPath: String = EcoveloSDK.ASSETS_PATH_DEFAULT
    private lateinit var assetLoader: WebViewAssetLoader
    
    override fun onCreate(savedInstanceState: Bundle?) {
        // Récupérer le chemin des assets depuis l'intent
        assetsPath = intent.getStringExtra(EcoveloSDK.EXTRA_ASSETS_PATH) 
            ?: EcoveloSDK.ASSETS_PATH_DEFAULT
        
        Log.d(TAG, "Loading assets from: $assetsPath")
        
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
        
        // Configurer le chargement des assets via WebViewAssetLoader
        setupAssetLoader()
    }
    
    /**
     * Configure WebViewAssetLoader pour servir les assets via HTTPS local.
     * Cela évite les erreurs ERR_ACCESS_DENIED avec file://.
     * 
     * Les assets sont servis depuis la racine "/" pour que le <base href="/"> de l'app Ionic fonctionne.
     */
    private fun setupAssetLoader() {
        // Créer un PathHandler personnalisé qui sert depuis le bon sous-dossier
        val customPathHandler = object : WebViewAssetLoader.PathHandler {
            override fun handle(path: String): WebResourceResponse? {
                return try {
                    // Construire le chemin complet dans assets
                    val fullPath = "$assetsPath/$path".trimStart('/')
                    Log.d(TAG, "Loading asset: $fullPath")
                    
                    val inputStream = assets.open(fullPath)
                    val mimeType = getMimeType(path)
                    
                    WebResourceResponse(mimeType, "UTF-8", inputStream)
                } catch (e: Exception) {
                    Log.e(TAG, "Asset not found: $path", e)
                    null
                }
            }
        }
        
        assetLoader = WebViewAssetLoader.Builder()
            .setDomain("app.ecovelo.local")
            .addPathHandler("/", customPathHandler)
            .build()
        
        // Configurer le WebViewClient pour intercepter les requêtes
        bridge.webView.webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(
                view: WebView?,
                request: WebResourceRequest?
            ): WebResourceResponse? {
                request?.url?.let { uri ->
                    if (uri.host == "app.ecovelo.local") {
                        return assetLoader.shouldInterceptRequest(uri)
                    }
                }
                return super.shouldInterceptRequest(view, request)
            }
            
            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)
                Log.d(TAG, "Page loaded: $url")
                injectLaunchParams()
            }
        }
        
        // Charger l'index.html via le domaine local
        val url = "https://app.ecovelo.local/index.html"
        Log.d(TAG, "Loading URL: $url (assets from: $assetsPath)")
        bridge.webView.loadUrl(url)
    }
    
    /**
     * Détermine le type MIME d'un fichier.
     */
    private fun getMimeType(path: String): String {
        return when {
            path.endsWith(".html") -> "text/html"
            path.endsWith(".js") -> "application/javascript"
            path.endsWith(".css") -> "text/css"
            path.endsWith(".json") -> "application/json"
            path.endsWith(".png") -> "image/png"
            path.endsWith(".jpg") || path.endsWith(".jpeg") -> "image/jpeg"
            path.endsWith(".gif") -> "image/gif"
            path.endsWith(".svg") -> "image/svg+xml"
            path.endsWith(".woff") -> "font/woff"
            path.endsWith(".woff2") -> "font/woff2"
            path.endsWith(".ttf") -> "font/ttf"
            path.endsWith(".ico") -> "image/x-icon"
            path.endsWith(".webp") -> "image/webp"
            path.endsWith(".map") -> "application/json"
            else -> "application/octet-stream"
        }
    }
    
    /**
     * Injecte les paramètres de lancement dans le JavaScript.
     */
    private fun injectLaunchParams() {
        val config = EcoveloSDK.getConfig()
        val userInfo = try { EcoveloSDK.getAuthProvider().getUserInfo() } catch (e: Exception) { null }
        val hasToken = try { EcoveloSDK.getAuthProvider().getAccessToken() != null } catch (e: Exception) { false }
        
        val script = """
            (function() {
                window.EcoveloLaunchParams = {
                    mode: 'sdk',
                    assetsPath: '$assetsPath',
                    territoryId: '${config.territoryId}',
                    environment: '${config.environment.name}',
                    debugMode: ${config.debugMode},
                    hasToken: $hasToken,
                    userEmail: ${userInfo?.email?.let { "'$it'" } ?: "null"},
                    userFirstName: ${userInfo?.firstName?.let { "'$it'" } ?: "null"}
                };
                
                window.dispatchEvent(new CustomEvent('ecovelo-sdk-ready', { 
                    detail: window.EcoveloLaunchParams 
                }));
                
                console.log('[EcoveloSDK] SDK Ready:', window.EcoveloLaunchParams);
            })();
        """.trimIndent()
        
        bridge.webView.evaluateJavascript(script, null)
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
