package bzh.ecovelo.sdk.plugins

import android.content.pm.ActivityInfo
import android.util.Log
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

/**
 * Plugin Capacitor pour l'orientation de l'écran.
 */
@CapacitorPlugin(name = "ScreenOrientation")
class ScreenOrientationPlugin : Plugin() {
    
    companion object {
        private const val TAG = "ScreenOrientationPlugin"
    }
    
    override fun load() {
        super.load()
        Log.d(TAG, "ScreenOrientationPlugin loaded")
    }
    
    @PluginMethod
    fun orientation(call: PluginCall) {
        Log.d(TAG, "orientation called")
        val orientation = when (activity.resources.configuration.orientation) {
            android.content.res.Configuration.ORIENTATION_LANDSCAPE -> "landscape"
            else -> "portrait"
        }
        val result = JSObject().apply {
            put("type", "$orientation-primary")
        }
        call.resolve(result)
    }
    
    @PluginMethod
    fun lock(call: PluginCall) {
        val orientationType = call.getString("orientation") ?: "portrait"
        Log.d(TAG, "lock: $orientationType")
        
        activity.requestedOrientation = when {
            orientationType.contains("landscape") -> ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE
            orientationType.contains("portrait") -> ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
            else -> ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED
        }
        call.resolve()
    }
    
    @PluginMethod
    fun unlock(call: PluginCall) {
        Log.d(TAG, "unlock called")
        activity.requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED
        call.resolve()
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
