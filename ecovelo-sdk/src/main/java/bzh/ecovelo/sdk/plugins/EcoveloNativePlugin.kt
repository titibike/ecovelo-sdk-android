package bzh.ecovelo.sdk.plugins

import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import bzh.ecovelo.sdk.EcoveloSDK
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

/**
 * Plugin Capacitor pour la communication entre l'app Ionic et le SDK natif.
 * 
 * Ce plugin expose les méthodes suivantes au JavaScript :
 * - Auth: getAccessToken, getIdToken, getUserInfo, isAuthenticated, requestLogin
 * - Config: getConfig
 * - Navigation: close, emitEvent
 * 
 * @see EcoveloSDK
 */
@CapacitorPlugin(name = "EcoveloNative")
class EcoveloNativePlugin : Plugin() {
    
    // ==========================================
    // AUTHENTIFICATION
    // ==========================================
    
    /**
     * Récupère le token d'accès OAuth2 depuis l'app hôte.
     */
    @PluginMethod
    fun getAccessToken(call: PluginCall) {
        val token = EcoveloSDK.getAuthProvider().getAccessToken()
        val result = JSObject().apply {
            put("token", token)
            put("hasToken", token != null)
        }
        call.resolve(result)
    }
    
    /**
     * Récupère le token ID depuis l'app hôte.
     */
    @PluginMethod
    fun getIdToken(call: PluginCall) {
        val token = EcoveloSDK.getAuthProvider().getIdToken()
        val result = JSObject().apply {
            put("token", token)
            put("hasToken", token != null)
        }
        call.resolve(result)
    }
    
    /**
     * Récupère les informations de l'utilisateur connecté.
     */
    @PluginMethod
    fun getUserInfo(call: PluginCall) {
        val userInfo = EcoveloSDK.getAuthProvider().getUserInfo()
        val result = JSObject().apply {
            put("authenticated", userInfo != null)
            userInfo?.let {
                put("sub", it.sub)
                put("email", it.email)
                put("firstName", it.firstName)
                put("lastName", it.lastName)
                put("phone", it.phone)
                put("phoneVerified", it.phoneVerified)
            }
        }
        call.resolve(result)
    }
    
    /**
     * Vérifie si l'utilisateur est authentifié.
     */
    @PluginMethod
    fun isAuthenticated(call: PluginCall) {
        val authenticated = EcoveloSDK.getAuthProvider().getAccessToken() != null
        val result = JSObject().apply {
            put("authenticated", authenticated)
        }
        call.resolve(result)
    }
    
    /**
     * Demande la connexion à l'app hôte.
     * Déclenche le callback onLoginRequired.
     */
    @PluginMethod
    fun requestLogin(call: PluginCall) {
        val callbacks = EcoveloSDK.getCallbacks()
        if (callbacks?.onLoginRequired != null) {
            activity.runOnUiThread {
                callbacks.onLoginRequired.invoke()
            }
            val result = JSObject().apply {
                put("requested", true)
            }
            call.resolve(result)
        } else {
            call.reject("onLoginRequired callback not configured in host app")
        }
    }
    
    /**
     * Rafraîchit le token d'accès.
     */
    @PluginMethod
    fun refreshToken(call: PluginCall) {
        CoroutineScope(Dispatchers.Main).launch {
            try {
                val tokenResult = EcoveloSDK.getAuthProvider().refreshToken()
                val result = JSObject().apply {
                    put("success", tokenResult.isSuccess)
                    put("token", tokenResult.getOrNull())
                }
                call.resolve(result)
            } catch (e: Exception) {
                call.reject("Erreur refresh token: ${e.message}")
            }
        }
    }
    
    // ==========================================
    // CONFIGURATION
    // ==========================================
    
    /**
     * Récupère la configuration du SDK.
     */
    @PluginMethod
    fun getConfig(call: PluginCall) {
        val config = EcoveloSDK.getConfig()
        val features = JSObject().apply {
            put("reservationEnabled", config.features.reservationEnabled)
            put("mapEnabled", config.features.mapEnabled)
            put("qrCodeScanEnabled", config.features.qrCodeScanEnabled)
        }
        val result = JSObject().apply {
            put("territoryId", config.territoryId)
            put("environment", config.environment.name)
            put("debugMode", config.debugMode)
            put("features", features)
        }
        call.resolve(result)
    }
    
    // ==========================================
    // ÉVÉNEMENTS
    // ==========================================
    
    /**
     * Émet un événement vers l'app hôte (analytics, etc.)
     */
    @PluginMethod
    fun emitEvent(call: PluginCall) {
        val name = call.getString("name") ?: run {
            call.reject("Event name is required")
            return
        }
        val data = call.getObject("data")
        
        EcoveloSDK.getCallbacks()?.onEvent?.invoke(name, data?.toString())
        call.resolve()
    }
    
    // ==========================================
    // NAVIGATION
    // ==========================================
    
    /**
     * Ferme le SDK et retourne à l'app hôte.
     */
    @PluginMethod
    fun close(call: PluginCall) {
        val result = call.getString("result", "closed")
        activity.runOnUiThread {
            activity.setResult(android.app.Activity.RESULT_OK)
            activity.finish()
        }
        call.resolve()
    }
    
    /**
     * Déconnecte l'utilisateur.
     */
    @PluginMethod
    fun logout(call: PluginCall) {
        EcoveloSDK.getCallbacks()?.onLogout?.invoke()
        val result = JSObject().apply {
            put("success", true)
        }
        call.resolve(result)
    }
}
