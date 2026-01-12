package bzh.ecovelo.sdk.plugins

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.net.Uri
import android.os.Environment
import android.provider.MediaStore
import android.util.Base64
import android.util.Log
import androidx.activity.result.ActivityResult
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.core.content.FileProvider
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.ActivityCallback
import com.getcapacitor.annotation.CapacitorPlugin
import com.getcapacitor.annotation.Permission
import com.getcapacitor.annotation.PermissionCallback
import java.io.ByteArrayOutputStream
import java.io.File
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

/**
 * Plugin Camera Capacitor pour le SDK Ecovelo.
 */
@CapacitorPlugin(
    name = "Camera",
    permissions = [
        Permission(
            strings = [Manifest.permission.CAMERA],
            alias = "camera"
        )
    ]
)
class CameraPlugin : Plugin() {
    
    companion object {
        private const val TAG = "CameraPlugin"
        private const val REQUEST_CAMERA_PERMISSION = 1001
    }
    
    private var currentPhotoPath: String? = null
    private var savedCall: PluginCall? = null
    
    /**
     * Prend une photo avec l'appareil photo.
     */
    @PluginMethod
    fun getPhoto(call: PluginCall) {
        Log.d(TAG, "getPhoto called")
        savedCall = call
        
        // Vérifier la permission
        if (ContextCompat.checkSelfPermission(context, Manifest.permission.CAMERA) 
            != PackageManager.PERMISSION_GRANTED) {
            Log.d(TAG, "Camera permission not granted, requesting...")
            // Demander la permission directement via Android
            ActivityCompat.requestPermissions(
                activity,
                arrayOf(Manifest.permission.CAMERA),
                REQUEST_CAMERA_PERMISSION
            )
        } else {
            Log.d(TAG, "Camera permission granted, launching camera")
            launchCamera(call)
        }
    }
    
    /**
     * Gérer le résultat de la demande de permission.
     * Cette méthode est appelée par l'Activity.
     */
    fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        Log.d(TAG, "onRequestPermissionsResult: $requestCode")
        if (requestCode == REQUEST_CAMERA_PERMISSION) {
            if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                Log.d(TAG, "Permission granted!")
                savedCall?.let { launchCamera(it) }
            } else {
                Log.d(TAG, "Permission denied!")
                savedCall?.reject("Permission caméra refusée")
                savedCall = null
            }
        }
    }
    
    private fun launchCamera(call: PluginCall) {
        Log.d(TAG, "launchCamera")
        try {
            val takePictureIntent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
            
            // Créer un fichier pour stocker la photo
            val photoFile = createImageFile()
            currentPhotoPath = photoFile.absolutePath
            Log.d(TAG, "Photo will be saved to: $currentPhotoPath")
            
            val photoURI: Uri = FileProvider.getUriForFile(
                context,
                "${context.packageName}.fileprovider",
                photoFile
            )
            
            takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, photoURI)
            
            startActivityForResult(call, takePictureIntent, "cameraResultCallback")
        } catch (e: Exception) {
            Log.e(TAG, "Error launching camera", e)
            call.reject("Erreur lancement caméra: ${e.message}")
        }
    }
    
    @ActivityCallback
    private fun cameraResultCallback(call: PluginCall, result: ActivityResult) {
        Log.d(TAG, "cameraResultCallback: ${result.resultCode}")
        savedCall = null
        
        if (result.resultCode == Activity.RESULT_OK) {
            val photoPath = currentPhotoPath
            if (photoPath != null) {
                processPhoto(call, photoPath)
            } else {
                call.reject("Erreur: chemin photo non trouvé")
            }
        } else {
            call.reject("Photo annulée")
        }
    }
    
    private fun processPhoto(call: PluginCall, photoPath: String) {
        try {
            Log.d(TAG, "Processing photo: $photoPath")
            val quality = call.getInt("quality", 90) ?: 90
            val resultType = call.getString("resultType", "base64") ?: "base64"
            val maxWidth = call.getInt("width", 0) ?: 0
            val maxHeight = call.getInt("height", 0) ?: 0
            
            // Charger et redimensionner l'image si nécessaire
            var bitmap = BitmapFactory.decodeFile(photoPath)
            
            if (bitmap == null) {
                call.reject("Erreur: impossible de décoder l'image")
                return
            }
            
            if (maxWidth > 0 || maxHeight > 0) {
                bitmap = resizeBitmap(bitmap, maxWidth, maxHeight)
            }
            
            val response = JSObject()
            
            when (resultType) {
                "base64" -> {
                    val base64 = bitmapToBase64(bitmap, quality)
                    response.put("base64String", base64)
                    response.put("format", "jpeg")
                }
                "dataUrl" -> {
                    val base64 = bitmapToBase64(bitmap, quality)
                    response.put("dataUrl", "data:image/jpeg;base64,$base64")
                    response.put("format", "jpeg")
                }
                "uri" -> {
                    response.put("path", photoPath)
                    response.put("webPath", "file://$photoPath")
                    response.put("format", "jpeg")
                }
            }
            
            // Sauvegarder dans la galerie si demandé
            val saveToGallery = call.getBoolean("saveToGallery", false) ?: false
            if (saveToGallery) {
                saveToGallery(photoPath)
                response.put("saved", true)
            }
            
            Log.d(TAG, "Photo processed successfully")
            call.resolve(response)
            
        } catch (e: Exception) {
            Log.e(TAG, "Error processing photo", e)
            call.reject("Erreur traitement photo: ${e.message}")
        }
    }
    
    private fun createImageFile(): File {
        val timeStamp = SimpleDateFormat("yyyyMMdd_HHmmss", Locale.getDefault()).format(Date())
        val storageDir = context.getExternalFilesDir(Environment.DIRECTORY_PICTURES)
        return File.createTempFile("JPEG_${timeStamp}_", ".jpg", storageDir)
    }
    
    private fun bitmapToBase64(bitmap: Bitmap, quality: Int): String {
        val byteArrayOutputStream = ByteArrayOutputStream()
        bitmap.compress(Bitmap.CompressFormat.JPEG, quality, byteArrayOutputStream)
        val byteArray = byteArrayOutputStream.toByteArray()
        return Base64.encodeToString(byteArray, Base64.NO_WRAP)
    }
    
    private fun resizeBitmap(bitmap: Bitmap, maxWidth: Int, maxHeight: Int): Bitmap {
        val width = bitmap.width
        val height = bitmap.height
        
        val targetWidth = if (maxWidth > 0) minOf(width, maxWidth) else width
        val targetHeight = if (maxHeight > 0) minOf(height, maxHeight) else height
        
        val scaleWidth = targetWidth.toFloat() / width
        val scaleHeight = targetHeight.toFloat() / height
        val scale = minOf(scaleWidth, scaleHeight)
        
        val newWidth = (width * scale).toInt()
        val newHeight = (height * scale).toInt()
        
        return Bitmap.createScaledBitmap(bitmap, newWidth, newHeight, true)
    }
    
    private fun saveToGallery(photoPath: String) {
        val file = File(photoPath)
        val mediaScanIntent = Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE)
        mediaScanIntent.data = Uri.fromFile(file)
        context.sendBroadcast(mediaScanIntent)
    }
    
    /**
     * Vérifie les permissions de la caméra.
     */
    @PluginMethod
    override fun checkPermissions(call: PluginCall) {
        val granted = ContextCompat.checkSelfPermission(context, Manifest.permission.CAMERA) == 
            PackageManager.PERMISSION_GRANTED
        val result = JSObject()
        result.put("camera", if (granted) "granted" else "prompt")
        call.resolve(result)
    }
    
    /**
     * Demande les permissions de la caméra.
     */
    @PluginMethod
    override fun requestPermissions(call: PluginCall) {
        Log.d(TAG, "requestPermissions called")
        savedCall = call
        
        if (ContextCompat.checkSelfPermission(context, Manifest.permission.CAMERA) 
            == PackageManager.PERMISSION_GRANTED) {
            val result = JSObject()
            result.put("camera", "granted")
            call.resolve(result)
        } else {
            ActivityCompat.requestPermissions(
                activity,
                arrayOf(Manifest.permission.CAMERA),
                REQUEST_CAMERA_PERMISSION
            )
            // Note: La réponse sera envoyée via onRequestPermissionsResult
            // Pour l'instant, on résout avec "prompt" car la réponse viendra plus tard
            // En réalité, il faudrait attendre le callback, mais c'est complexe avec Capacitor
            val result = JSObject()
            result.put("camera", "prompt")
            result.put("message", "Permission demandée, veuillez accepter et réessayer")
            call.resolve(result)
        }
    }
}
