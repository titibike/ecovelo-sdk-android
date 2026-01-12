package bzh.ecovelo.sdk.ui

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.fragment.app.Fragment
import bzh.ecovelo.sdk.EcoveloSDK
import bzh.ecovelo.sdk.R

/**
 * Fragment pour intégrer le SDK Ecovelo dans une vue existante.
 * 
 * Utile pour les intégrations flexibles comme un BottomSheet ou
 * une partie d'écran.
 * 
 * Note: Ce fragment utilise un WebView standard. Pour le support complet
 * des plugins Capacitor (Camera, etc.), utilisez [EcoveloActivity].
 * 
 * @see EcoveloActivity pour l'intégration en plein écran avec Capacitor
 */
class EcoveloFragment : Fragment() {
    
    private var webView: WebView? = null
    private var resultListener: ((Result) -> Unit)? = null
    
    /**
     * Résultat retourné par le fragment.
     */
    sealed class Result {
        object Closed : Result()
        data class Error(val message: String) : Result()
    }
    
    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.activity_ecovelo, container, false)
        
        webView = view.findViewById(R.id.webview)
        
        webView?.settings?.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            allowFileAccess = true
            allowContentAccess = true
            mediaPlaybackRequiresUserGesture = false
            mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
            
            if (EcoveloSDK.getConfig().debugMode) {
                WebView.setWebContentsDebuggingEnabled(true)
            }
        }
        
        webView?.webViewClient = WebViewClient()
        webView?.webChromeClient = WebChromeClient()
        
        webView?.addJavascriptInterface(EcoveloJsBridge(), "EcoveloNativeBridge")
        
        webView?.loadUrl("file:///android_asset/public/index.html")
        
        webView?.webViewClient = object : WebViewClient() {
            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)
                injectLaunchParams()
            }
        }
        
        return view
    }
    
    override fun onDestroyView() {
        webView = null
        super.onDestroyView()
    }
    
    /**
     * Définit le listener pour les résultats du fragment.
     */
    fun setResultListener(listener: (Result) -> Unit) {
        resultListener = listener
    }
    
    /**
     * Notifie le fragment qu'un token a été mis à jour.
     */
    fun notifyTokenUpdated() {
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
        
        activity?.runOnUiThread {
            webView?.evaluateJavascript(script, null)
        }
    }
    
    private fun injectLaunchParams() {
        val config = EcoveloSDK.getConfig()
        val userInfo = EcoveloSDK.getAuthProvider().getUserInfo()
        val hasToken = EcoveloSDK.getAuthProvider().getAccessToken() != null
        
        val script = """
            (function() {
                window.EcoveloLaunchParams = {
                    mode: 'sdk',
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
            })();
        """.trimIndent()
        
        webView?.evaluateJavascript(script, null)
    }
    
    /**
     * Bridge JavaScript simplifié pour le fragment.
     * 
     * Note: Le fragment n'a pas accès aux plugins Capacitor.
     * Utilisez EcoveloActivity pour le support complet.
     */
    inner class EcoveloJsBridge {
        
        @JavascriptInterface
        fun getConfig(): String {
            val config = EcoveloSDK.getConfig()
            return """
                {
                    "territoryId": "${config.territoryId}",
                    "environment": "${config.environment.name}",
                    "debugMode": ${config.debugMode}
                }
            """.trimIndent()
        }
        
        @JavascriptInterface
        fun isAuthenticated(): String {
            val authenticated = EcoveloSDK.getAuthProvider().getAccessToken() != null
            return """{"authenticated": $authenticated}"""
        }
        
        @JavascriptInterface
        fun requestLogin() {
            activity?.runOnUiThread {
                EcoveloSDK.getCallbacks()?.onLoginRequired?.invoke()
            }
        }
        
        @JavascriptInterface
        fun close(result: String) {
            activity?.runOnUiThread {
                resultListener?.invoke(Result.Closed)
            }
        }
    }
    
    companion object {
        @JvmStatic
        fun newInstance(): EcoveloFragment {
            return EcoveloFragment()
        }
    }
}
