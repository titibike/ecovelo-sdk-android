package bzh.ecovelo.sdk.bridge

import android.content.Intent
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import bzh.ecovelo.sdk.EcoveloSDK
import bzh.ecovelo.sdk.phone.PhoneRequestImpl
import bzh.ecovelo.sdk.ui.EcoveloActivity
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.launch

/**
 * Plugin Capacitor custom pour la communication SDK.
 * 
 * Ce plugin expose des méthodes au JavaScript via Capacitor :
 * 
 * ```typescript
 * import { EcoveloNative } from 'ecovelo-sdk';
 * 
 * // Récupérer le token SSO
 * const { token } = await EcoveloNative.getAccessToken();
 * 
 * // Récupérer les infos utilisateur
 * const userInfo = await EcoveloNative.getUserInfo();
 * 
 * // Demander le téléphone
 * await EcoveloNative.requestPhone();
 * 
 * // Fermer le SDK
 * await EcoveloNative.close({ result: 'success', data: {...} });
 * ```
 */
@CapacitorPlugin(name = "EcoveloNative")
class EcoveloNativePlugin : Plugin() {
    
    private val scope = CoroutineScope(Dispatchers.Main + SupervisorJob())
    
    // ================= Auth Methods =================
    
    /**
     * Retourne le token d'accès OAuth2.
     * 
     * JS: const { token, hasToken } = await EcoveloNative.getAccessToken();
     */
    @PluginMethod
    fun getAccessToken(call: PluginCall) {
        val token = EcoveloSDK.getAuthProvider().getAccessToken()
        
        val result = JSObject().apply {
            put("token", token ?: "")
            put("hasToken", token != null)
        }
        
        call.resolve(result)
    }
    
    /**
     * Demande à l'app hôte de lancer le flow de connexion SSO.
     * 
     * Appelé quand l'utilisateur clique sur "Se connecter" dans l'app Ionic.
     * L'app hôte recevra le callback onLoginRequired et devra :
     * 1. Lancer le flow SSO mon-compte.bzh
     * 2. Appeler EcoveloSDK.updateToken() une fois connecté
     * 
     * L'app Ionic recevra ensuite l'événement 'ecovelo-token-updated'.
     * 
     * JS: await EcoveloNative.requestLogin();
     */
    @PluginMethod
    fun requestLogin(call: PluginCall) {
        val callbacks = EcoveloSDK.getCallbacks()
        
        if (callbacks?.onLoginRequired != null) {
            // Notifier l'app hôte
            callbacks.onLoginRequired.invoke()
            
            call.resolve(JSObject().apply {
                put("requested", true)
            })
        } else {
            call.reject("onLoginRequired callback not configured in host app")
        }
    }
    
    /**
     * Retourne l'ID token OIDC.
     */
    @PluginMethod
    fun getIdToken(call: PluginCall) {
        val token = EcoveloSDK.getAuthProvider().getIdToken()
        
        val result = JSObject().apply {
            put("token", token ?: "")
            put("hasToken", token != null)
        }
        
        call.resolve(result)
    }
    
    /**
     * Retourne les informations utilisateur.
     */
    @PluginMethod
    fun getUserInfo(call: PluginCall) {
        val userInfo = EcoveloSDK.getAuthProvider().getUserInfo()
        
        if (userInfo == null) {
            call.resolve(JSObject().apply {
                put("authenticated", false)
            })
            return
        }
        
        val result = JSObject().apply {
            put("authenticated", true)
            put("sub", userInfo.sub)
            put("email", userInfo.email)
            put("firstName", userInfo.firstName ?: "")
            put("lastName", userInfo.lastName ?: "")
            put("fullName", userInfo.fullName ?: "")
            put("phone", userInfo.phone ?: "")
            put("phoneVerified", userInfo.phoneVerified)
            put("hasValidPhone", userInfo.hasValidPhone)
        }
        
        call.resolve(result)
    }
    
    /**
     * Rafraîchit le token d'accès.
     */
    @PluginMethod
    fun refreshToken(call: PluginCall) {
        scope.launch {
            val result = EcoveloSDK.getAuthProvider().refreshToken()
            
            result.fold(
                onSuccess = { token ->
                    call.resolve(JSObject().apply {
                        put("success", true)
                        put("token", token)
                    })
                },
                onFailure = { error ->
                    call.reject("Token refresh failed", error.message, error)
                }
            )
        }
    }
    
    /**
     * Vérifie si l'utilisateur est authentifié.
     */
    @PluginMethod
    fun isAuthenticated(call: PluginCall) {
        val isAuth = EcoveloSDK.getAuthProvider().isAuthenticated()
        
        call.resolve(JSObject().apply {
            put("authenticated", isAuth)
        })
    }
    
    // ================= Config Methods =================
    
    /**
     * Retourne la configuration du SDK.
     */
    @PluginMethod
    fun getConfig(call: PluginCall) {
        val config = EcoveloSDK.getConfig()
        
        val result = JSObject().apply {
            put("territoryId", config.territoryId)
            put("environment", config.environment.name)
            put("debugMode", config.debugMode)
            
            // Features
            put("features", JSObject().apply {
                put("reservationEnabled", config.features.reservationEnabled)
                put("mapEnabled", config.features.mapEnabled)
                put("qrCodeScanEnabled", config.features.qrCodeScanEnabled)
                put("phoneRequestEnabled", config.features.phoneRequestEnabled)
                put("pushNotificationsEnabled", config.features.pushNotificationsEnabled)
            })
            
            // Theme (couleurs en hex)
            put("theme", JSObject().apply {
                put("primaryColor", String.format("#%06X", 0xFFFFFF and config.theme.primaryColor))
                put("secondaryColor", String.format("#%06X", 0xFFFFFF and config.theme.secondaryColor))
                put("backgroundColor", String.format("#%06X", 0xFFFFFF and config.theme.backgroundColor))
            })
            
            // Strings
            put("strings", JSObject().apply {
                put("rentalTitle", config.strings.rentalTitle)
                put("reservationTitle", config.strings.reservationTitle)
            })
        }
        
        call.resolve(result)
    }
    
    // ================= Phone Methods =================
    
    /**
     * Demande la saisie du numéro de téléphone.
     * 
     * Cette méthode est appelée par l'app Ionic quand elle détecte
     * que le téléphone est manquant.
     */
    @PluginMethod
    fun requestPhone(call: PluginCall) {
        val userInfo = EcoveloSDK.getAuthProvider().getUserInfo()
        val callbacks = EcoveloSDK.getCallbacks()
        
        val request = PhoneRequestImpl(
            userEmail = userInfo?.email ?: "",
            userFirstName = userInfo?.firstName,
            onUseSDKUI = {
                // TODO: Lancer l'activité de saisie du téléphone du SDK
                // Pour l'instant, on notifie JS que l'UI SDK va s'afficher
                notifyListeners("phoneUIRequested", JSObject())
            },
            onSubmit = { phone, verified ->
                // Notifier l'app Ionic du résultat
                notifyListeners("phoneSubmitted", JSObject().apply {
                    put("phone", phone)
                    put("verified", verified)
                })
                
                call.resolve(JSObject().apply {
                    put("phone", phone)
                    put("verified", verified)
                })
            },
            onCancel = {
                notifyListeners("phoneCancelled", JSObject())
                call.reject("Phone request cancelled by user")
            }
        )
        
        // Notifier l'app hôte (Cityway)
        callbacks?.onPhoneRequired?.invoke(request)
            ?: request.useSDKUI() // Par défaut, utiliser l'UI du SDK
    }
    
    /**
     * Soumet un numéro de téléphone (depuis l'UI de l'app Ionic).
     */
    @PluginMethod
    fun submitPhone(call: PluginCall) {
        val phone = call.getString("phone") ?: run {
            call.reject("Phone number is required")
            return
        }
        val verified = call.getBoolean("verified") ?: false
        
        // TODO: Envoyer au backend pour mise à jour du profil
        
        call.resolve(JSObject().apply {
            put("success", true)
            put("phone", phone)
            put("verified", verified)
        })
    }
    
    // ================= Event Methods =================
    
    /**
     * Émet un événement vers l'app hôte native.
     */
    @PluginMethod
    fun emitEvent(call: PluginCall) {
        val eventName = call.getString("name") ?: run {
            call.reject("Event name is required")
            return
        }
        val eventData = call.getObject("data") ?: JSObject()
        
        val callbacks = EcoveloSDK.getCallbacks()
        
        when (eventName) {
            "rental_started" -> {
                val rentalId = eventData.getString("rentalId") ?: ""
                callbacks?.onRentalStarted?.invoke(rentalId)
            }
            
            "rental_ended" -> {
                val rentalId = eventData.getString("rentalId") ?: ""
                val duration = eventData.getInteger("duration") ?: 0
                callbacks?.onRentalEnded?.invoke(rentalId, duration)
            }
            
            "reservation_created" -> {
                val reservationId = eventData.getString("reservationId") ?: ""
                callbacks?.onReservationCreated?.invoke(reservationId)
            }
            
            "reservation_cancelled" -> {
                val reservationId = eventData.getString("reservationId") ?: ""
                callbacks?.onReservationCancelled?.invoke(reservationId)
            }
            
            "error" -> {
                val message = eventData.getString("message") ?: "Unknown error"
                callbacks?.onError?.invoke(RuntimeException(message))
            }
            
            "auth_required" -> {
                callbacks?.onAuthRequired?.invoke()
            }
        }
        
        call.resolve(JSObject().apply {
            put("success", true)
        })
    }
    
    // ================= Navigation Methods =================
    
    /**
     * Ferme le SDK avec un résultat.
     */
    @PluginMethod
    fun close(call: PluginCall) {
        val resultType = call.getString("result") ?: "cancelled"
        val resultData = call.getObject("data") ?: JSObject()
        
        activity?.runOnUiThread {
            val ecoveloActivity = activity as? EcoveloActivity
            
            val resultCode = when (resultType) {
                "rental_completed" -> EcoveloActivity.RESULT_RENTAL_COMPLETED
                "rental_in_progress" -> EcoveloActivity.RESULT_RENTAL_IN_PROGRESS
                "reservation_created" -> EcoveloActivity.RESULT_RESERVATION_CREATED
                "cancelled" -> android.app.Activity.RESULT_CANCELED
                else -> EcoveloActivity.RESULT_ERROR
            }
            
            val intent = Intent().apply {
                putExtra("result_type", resultType)
                putExtra("result_data", resultData.toString())
            }
            
            ecoveloActivity?.finishWithResult(resultCode, intent)
                ?: activity?.finish()
        }
        
        call.resolve()
    }
    
    /**
     * Déconnecte l'utilisateur et ferme le SDK.
     */
    @PluginMethod
    fun logout(call: PluginCall) {
        EcoveloSDK.getAuthProvider().logout()
        EcoveloSDK.getCallbacks()?.onAuthRequired?.invoke()
        
        call.resolve(JSObject().apply {
            put("success", true)
        })
        
        // Fermer le SDK
        activity?.finish()
    }
}

