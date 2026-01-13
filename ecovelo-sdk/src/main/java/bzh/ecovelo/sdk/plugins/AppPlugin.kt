package bzh.ecovelo.sdk.plugins

import android.util.Log
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

/**
 * Plugin Capacitor pour les événements App.
 * Implémente les méthodes essentielles du plugin @capacitor/app.
 */
@CapacitorPlugin(name = "App")
class AppPlugin : Plugin() {
    
    companion object {
        private const val TAG = "AppPlugin"
    }
    
    override fun load() {
        super.load()
        Log.d(TAG, "AppPlugin loaded")
    }
    
    @PluginMethod
    fun exitApp(call: PluginCall) {
        Log.d(TAG, "exitApp called")
        activity.finish()
        call.resolve()
    }
    
    @PluginMethod
    fun getInfo(call: PluginCall) {
        Log.d(TAG, "getInfo called")
        val result = JSObject().apply {
            put("name", activity.packageName)
            put("id", activity.packageName)
            put("build", "1")
            put("version", "1.0.0")
        }
        call.resolve(result)
    }
    
    @PluginMethod
    fun getState(call: PluginCall) {
        Log.d(TAG, "getState called")
        val result = JSObject().apply {
            put("isActive", true)
        }
        call.resolve(result)
    }
    
    @PluginMethod
    fun getLaunchUrl(call: PluginCall) {
        Log.d(TAG, "getLaunchUrl called")
        val result = JSObject().apply {
            put("url", "")
        }
        call.resolve(result)
    }
    
    @PluginMethod
    fun minimizeApp(call: PluginCall) {
        Log.d(TAG, "minimizeApp called")
        activity.moveTaskToBack(true)
        call.resolve()
    }
    
    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    override fun addListener(call: PluginCall) {
        val eventName = call.getString("eventName") ?: ""
        Log.d(TAG, "addListener: $eventName")
        super.addListener(call)
    }
    
    @PluginMethod
    override fun removeAllListeners(call: PluginCall) {
        Log.d(TAG, "removeAllListeners called")
        super.removeAllListeners(call)
    }
}
