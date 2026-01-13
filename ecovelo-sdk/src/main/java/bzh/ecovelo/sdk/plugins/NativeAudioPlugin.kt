package bzh.ecovelo.sdk.plugins

import android.util.Log
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

/**
 * Plugin stub pour NativeAudio.
 */
@CapacitorPlugin(name = "NativeAudio")
class NativeAudioPlugin : Plugin() {
    
    companion object {
        private const val TAG = "NativeAudioPlugin"
    }
    
    override fun load() {
        super.load()
        Log.d(TAG, "NativeAudioPlugin loaded")
    }
    
    @PluginMethod
    fun configure(call: PluginCall) {
        Log.d(TAG, "configure called")
        call.resolve()
    }
    
    @PluginMethod
    fun preload(call: PluginCall) {
        val assetId = call.getString("assetId") ?: ""
        Log.d(TAG, "preload: $assetId")
        // Stub - ne fait rien mais ne génère pas d'erreur
        call.resolve()
    }
    
    @PluginMethod
    fun play(call: PluginCall) {
        val assetId = call.getString("assetId") ?: ""
        Log.d(TAG, "play: $assetId")
        call.resolve()
    }
    
    @PluginMethod
    fun pause(call: PluginCall) {
        Log.d(TAG, "pause called")
        call.resolve()
    }
    
    @PluginMethod
    fun resume(call: PluginCall) {
        Log.d(TAG, "resume called")
        call.resolve()
    }
    
    @PluginMethod
    fun stop(call: PluginCall) {
        Log.d(TAG, "stop called")
        call.resolve()
    }
    
    @PluginMethod
    fun unload(call: PluginCall) {
        Log.d(TAG, "unload called")
        call.resolve()
    }
    
    @PluginMethod
    fun setVolume(call: PluginCall) {
        Log.d(TAG, "setVolume called")
        call.resolve()
    }
    
    @PluginMethod
    fun getDuration(call: PluginCall) {
        Log.d(TAG, "getDuration called")
        val result = JSObject().apply {
            put("duration", 0)
        }
        call.resolve(result)
    }
    
    @PluginMethod
    fun getCurrentTime(call: PluginCall) {
        Log.d(TAG, "getCurrentTime called")
        val result = JSObject().apply {
            put("currentTime", 0)
        }
        call.resolve(result)
    }
    
    @PluginMethod
    fun isPlaying(call: PluginCall) {
        Log.d(TAG, "isPlaying called")
        val result = JSObject().apply {
            put("isPlaying", false)
        }
        call.resolve(result)
    }
}
