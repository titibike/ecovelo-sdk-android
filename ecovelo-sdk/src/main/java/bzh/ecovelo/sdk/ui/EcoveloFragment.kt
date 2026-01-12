package bzh.ecovelo.sdk.ui

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.webkit.WebView
import androidx.fragment.app.Fragment
import com.getcapacitor.BridgeFragment
import bzh.ecovelo.sdk.EcoveloSDK

/**
 * Fragment principal du SDK basé sur Capacitor BridgeFragment.
 * 
 * Alternative à [EcoveloActivity] pour une intégration plus flexible.
 * Permet d'intégrer le SDK dans un BottomSheet, un ViewPager, etc.
 * 
 * ## Usage
 * 
 * ```kotlin
 * val fragment = EcoveloFragment.newInstance()
 * 
 * fragment.setResultListener { result ->
 *     when (result) {
 *         is EcoveloFragment.Result.Closed -> { /* app fermée */ }
 *         is EcoveloFragment.Result.Error -> { /* erreur */ }
 *     }
 * }
 * 
 * supportFragmentManager.beginTransaction()
 *     .replace(R.id.container, fragment)
 *     .commit()
 * ```
 */
class EcoveloFragment : BridgeFragment() {
    
    private var resultListener: ((Result) -> Unit)? = null
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Activer le debug WebView en mode développement
        if (EcoveloSDK.getConfig().debugMode) {
            WebView.setWebContentsDebuggingEnabled(true)
        }
    }
    
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        
        // Injecter les paramètres de lancement
        bridge?.webView?.let { webView ->
            injectLaunchParams(webView)
        }
    }
    
    /**
     * Configure le listener pour recevoir le résultat.
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
     * Appelé par le plugin natif quand l'utilisateur ferme l'app.
     */
    internal fun notifyResult(result: Result) {
        resultListener?.invoke(result)
    }
    
    /**
     * Ferme le fragment.
     */
    fun close() {
        resultListener?.invoke(Result.Closed)
        parentFragmentManager.beginTransaction()
            .remove(this)
            .commit()
    }
    
    /**
     * Résultat du SDK.
     */
    sealed class Result {
        /** L'utilisateur a fermé l'application */
        object Closed : Result()
        
        /** Erreur pendant l'exécution */
        data class Error(val message: String) : Result()
        
        /** Authentification requise */
        object AuthRequired : Result()
    }
    
    companion object {
        /**
         * Crée une nouvelle instance du fragment.
         */
        @JvmStatic
        fun newInstance(): EcoveloFragment {
            return EcoveloFragment()
        }
    }
}
