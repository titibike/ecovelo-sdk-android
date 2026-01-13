package bzh.ecovelo.sdk.plugins

import android.Manifest
import android.content.pm.PackageManager
import android.location.Location
import android.os.Looper
import android.util.Log
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import com.getcapacitor.annotation.Permission
import com.getcapacitor.annotation.PermissionCallback
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationCallback
import com.google.android.gms.location.LocationRequest
import com.google.android.gms.location.LocationResult
import com.google.android.gms.location.LocationServices
import com.google.android.gms.location.Priority

/**
 * Plugin Capacitor natif pour la géolocalisation.
 * 
 * Remplace le fallback web qui ne fonctionne pas dans le contexte du SDK.
 */
@CapacitorPlugin(
    name = "Geolocation",
    permissions = [
        Permission(
            strings = [Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION],
            alias = "location"
        )
    ]
)
class GeolocationPlugin : Plugin() {
    
    companion object {
        private const val TAG = "GeolocationPlugin"
        private const val REQUEST_LOCATION_PERMISSION = 9001
    }
    
    private lateinit var fusedLocationClient: FusedLocationProviderClient
    private var locationCallback: LocationCallback? = null
    private var watchCall: PluginCall? = null
    
    override fun load() {
        super.load()
        fusedLocationClient = LocationServices.getFusedLocationProviderClient(activity)
        Log.d(TAG, "GeolocationPlugin loaded")
    }
    
    @PluginMethod
    fun getCurrentPosition(call: PluginCall) {
        Log.d(TAG, "getCurrentPosition called")
        
        if (!hasLocationPermission()) {
            Log.d(TAG, "Requesting location permission...")
            requestLocationPermission(call)
            return
        }
        
        getLocation(call)
    }
    
    @PluginMethod
    fun watchPosition(call: PluginCall) {
        Log.d(TAG, "watchPosition called")
        
        if (!hasLocationPermission()) {
            requestLocationPermission(call)
            return
        }
        
        call.setKeepAlive(true)
        watchCall = call
        startLocationUpdates(call)
    }
    
    @PluginMethod
    fun clearWatch(call: PluginCall) {
        Log.d(TAG, "clearWatch called")
        stopLocationUpdates()
        watchCall?.release(bridge)
        watchCall = null
        call.resolve()
    }
    
    @PluginMethod
    override fun checkPermissions(call: PluginCall) {
        Log.d(TAG, "checkPermissions called")
        
        val coarsePermission = ContextCompat.checkSelfPermission(
            context, Manifest.permission.ACCESS_COARSE_LOCATION
        )
        val finePermission = ContextCompat.checkSelfPermission(
            context, Manifest.permission.ACCESS_FINE_LOCATION
        )
        
        val status = when {
            finePermission == PackageManager.PERMISSION_GRANTED -> "granted"
            coarsePermission == PackageManager.PERMISSION_GRANTED -> "granted"
            ActivityCompat.shouldShowRequestPermissionRationale(
                activity, Manifest.permission.ACCESS_FINE_LOCATION
            ) -> "prompt"
            else -> "prompt"
        }
        
        val result = JSObject().apply {
            put("location", status)
            put("coarseLocation", if (coarsePermission == PackageManager.PERMISSION_GRANTED) "granted" else "prompt")
        }
        
        Log.d(TAG, "checkPermissions result: $result")
        call.resolve(result)
    }
    
    @PluginMethod
    override fun requestPermissions(call: PluginCall) {
        Log.d(TAG, "requestPermissions called")
        requestLocationPermission(call)
    }
    
    private fun hasLocationPermission(): Boolean {
        return ContextCompat.checkSelfPermission(
            context, Manifest.permission.ACCESS_FINE_LOCATION
        ) == PackageManager.PERMISSION_GRANTED ||
        ContextCompat.checkSelfPermission(
            context, Manifest.permission.ACCESS_COARSE_LOCATION
        ) == PackageManager.PERMISSION_GRANTED
    }
    
    private fun requestLocationPermission(call: PluginCall) {
        // Sauvegarder l'appel pour le callback
        bridge.saveCall(call)
        
        ActivityCompat.requestPermissions(
            activity,
            arrayOf(
                Manifest.permission.ACCESS_FINE_LOCATION,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ),
            REQUEST_LOCATION_PERMISSION
        )
    }
    
    @PermissionCallback
    private fun locationPermissionCallback(call: PluginCall) {
        Log.d(TAG, "locationPermissionCallback")
        
        if (hasLocationPermission()) {
            // Permission accordée, continuer avec la demande originale
            when (call.methodName) {
                "getCurrentPosition" -> getLocation(call)
                "watchPosition" -> {
                    call.setKeepAlive(true)
                    watchCall = call
                    startLocationUpdates(call)
                }
                "requestPermissions" -> {
                    val result = JSObject().apply {
                        put("location", "granted")
                        put("coarseLocation", "granted")
                    }
                    call.resolve(result)
                }
            }
        } else {
            call.reject("Location permission denied")
        }
    }
    
    private fun getLocation(call: PluginCall) {
        val enableHighAccuracy = call.getBoolean("enableHighAccuracy", true) ?: true
        val timeout = call.getInt("timeout", 10000)?.toLong() ?: 10000L
        
        Log.d(TAG, "Getting location (highAccuracy=$enableHighAccuracy, timeout=$timeout)")
        
        try {
            // D'abord essayer d'obtenir la dernière position connue
            fusedLocationClient.lastLocation.addOnSuccessListener { location ->
                if (location != null) {
                    Log.d(TAG, "Got last known location: ${location.latitude}, ${location.longitude}")
                    resolveLocation(call, location)
                } else {
                    // Pas de dernière position, demander une nouvelle
                    Log.d(TAG, "No last known location, requesting fresh location")
                    requestFreshLocation(call, enableHighAccuracy, timeout)
                }
            }.addOnFailureListener { e ->
                Log.e(TAG, "Failed to get last location", e)
                requestFreshLocation(call, enableHighAccuracy, timeout)
            }
        } catch (e: SecurityException) {
            Log.e(TAG, "Security exception getting location", e)
            call.reject("Location permission denied")
        }
    }
    
    private fun requestFreshLocation(call: PluginCall, enableHighAccuracy: Boolean, timeout: Long) {
        val priority = if (enableHighAccuracy) {
            Priority.PRIORITY_HIGH_ACCURACY
        } else {
            Priority.PRIORITY_BALANCED_POWER_ACCURACY
        }
        
        val locationRequest = LocationRequest.Builder(priority, 1000)
            .setMaxUpdates(1)
            .setDurationMillis(timeout)
            .build()
        
        val callback = object : LocationCallback() {
            override fun onLocationResult(result: LocationResult) {
                result.lastLocation?.let { location ->
                    Log.d(TAG, "Got fresh location: ${location.latitude}, ${location.longitude}")
                    resolveLocation(call, location)
                    fusedLocationClient.removeLocationUpdates(this)
                }
            }
        }
        
        try {
            fusedLocationClient.requestLocationUpdates(
                locationRequest,
                callback,
                Looper.getMainLooper()
            )
            
            // Timeout fallback
            activity.window.decorView.postDelayed({
                if (!call.isReleased) {
                    fusedLocationClient.removeLocationUpdates(callback)
                    call.reject("Location timeout")
                }
            }, timeout)
        } catch (e: SecurityException) {
            call.reject("Location permission denied")
        }
    }
    
    private fun startLocationUpdates(call: PluginCall) {
        val enableHighAccuracy = call.getBoolean("enableHighAccuracy", true) ?: true
        
        val priority = if (enableHighAccuracy) {
            Priority.PRIORITY_HIGH_ACCURACY
        } else {
            Priority.PRIORITY_BALANCED_POWER_ACCURACY
        }
        
        val locationRequest = LocationRequest.Builder(priority, 5000)
            .setMinUpdateIntervalMillis(2000)
            .build()
        
        locationCallback = object : LocationCallback() {
            override fun onLocationResult(result: LocationResult) {
                result.lastLocation?.let { location ->
                    Log.d(TAG, "Watch location update: ${location.latitude}, ${location.longitude}")
                    resolveLocation(call, location)
                }
            }
        }
        
        try {
            fusedLocationClient.requestLocationUpdates(
                locationRequest,
                locationCallback!!,
                Looper.getMainLooper()
            )
        } catch (e: SecurityException) {
            call.reject("Location permission denied")
        }
    }
    
    private fun stopLocationUpdates() {
        locationCallback?.let {
            fusedLocationClient.removeLocationUpdates(it)
            locationCallback = null
        }
    }
    
    private fun resolveLocation(call: PluginCall, location: Location) {
        val coords = JSObject().apply {
            put("latitude", location.latitude)
            put("longitude", location.longitude)
            put("accuracy", location.accuracy.toDouble())
            put("altitude", if (location.hasAltitude()) location.altitude else null)
            put("altitudeAccuracy", if (location.hasVerticalAccuracy()) location.verticalAccuracyMeters.toDouble() else null)
            put("speed", if (location.hasSpeed()) location.speed.toDouble() else null)
            put("heading", if (location.hasBearing()) location.bearing.toDouble() else null)
        }
        
        val result = JSObject().apply {
            put("coords", coords)
            put("timestamp", location.time)
        }
        
        call.resolve(result)
    }
    
    override fun handleOnDestroy() {
        stopLocationUpdates()
        super.handleOnDestroy()
    }
}
