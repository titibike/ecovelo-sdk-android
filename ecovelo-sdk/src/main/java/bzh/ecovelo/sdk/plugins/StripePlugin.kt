package bzh.ecovelo.sdk.plugins

import android.util.Log
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

/**
 * Plugin stub pour Stripe.
 * 
 * Ce plugin est un stub qui permet à l'app de démarrer sans erreur.
 * Les fonctionnalités de paiement nécessiteront une implémentation complète.
 */
@CapacitorPlugin(name = "Stripe")
class StripePlugin : Plugin() {
    
    companion object {
        private const val TAG = "StripePlugin"
    }
    
    override fun load() {
        super.load()
        Log.d(TAG, "StripePlugin loaded (stub)")
    }
    
    @PluginMethod
    fun initialize(call: PluginCall) {
        Log.d(TAG, "initialize called")
        call.resolve()
    }
    
    @PluginMethod
    fun createPaymentSheet(call: PluginCall) {
        Log.d(TAG, "createPaymentSheet called")
        call.reject("Stripe payment not available in SDK mode")
    }
    
    @PluginMethod
    fun presentPaymentSheet(call: PluginCall) {
        Log.d(TAG, "presentPaymentSheet called")
        call.reject("Stripe payment not available in SDK mode")
    }
    
    @PluginMethod
    fun createPaymentFlow(call: PluginCall) {
        Log.d(TAG, "createPaymentFlow called")
        call.reject("Stripe payment not available in SDK mode")
    }
    
    @PluginMethod
    fun presentPaymentFlow(call: PluginCall) {
        Log.d(TAG, "presentPaymentFlow called")
        call.reject("Stripe payment not available in SDK mode")
    }
    
    @PluginMethod
    fun confirmPaymentFlow(call: PluginCall) {
        Log.d(TAG, "confirmPaymentFlow called")
        call.reject("Stripe payment not available in SDK mode")
    }
    
    @PluginMethod
    fun isApplePayAvailable(call: PluginCall) {
        Log.d(TAG, "isApplePayAvailable called")
        val result = JSObject().apply {
            put("available", false)
        }
        call.resolve(result)
    }
    
    @PluginMethod
    fun isGooglePayAvailable(call: PluginCall) {
        Log.d(TAG, "isGooglePayAvailable called")
        val result = JSObject().apply {
            put("available", false)
        }
        call.resolve(result)
    }
    
    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    override fun addListener(call: PluginCall) {
        Log.d(TAG, "addListener called")
        super.addListener(call)
    }
    
    @PluginMethod
    override fun removeAllListeners(call: PluginCall) {
        Log.d(TAG, "removeAllListeners called")
        super.removeAllListeners(call)
    }
}
