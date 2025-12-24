package bzh.ecovelo.sdk.sample

import android.app.Application
import android.util.Log
import bzh.ecovelo.sdk.EcoveloSDK
import bzh.ecovelo.sdk.config.EcoveloConfig
import bzh.ecovelo.sdk.config.EcoveloEnvironment
import bzh.ecovelo.sdk.config.EcoveloFeatures
import bzh.ecovelo.sdk.config.EcoveloTheme

/**
 * Application de démonstration du SDK Ecovelo.
 * 
 * Cette application montre comment initialiser et configurer le SDK
 * pour l'intégration dans une application tierce.
 */
class SampleApplication : Application() {
    
    override fun onCreate() {
        super.onCreate()
        
        // Initialiser le SDK Ecovelo
        EcoveloSDK.init(
            context = this,
            config = EcoveloConfig.Builder()
                // Configuration du territoire Breizhgo
                .setTerritoryId("breizhgo")
                
                // Utiliser l'environnement de staging pour les tests
                .setEnvironment(EcoveloEnvironment.STAGING)
                
                // Thème personnalisé (couleurs Bretagne)
                .setTheme(
                    EcoveloTheme(
                        primaryColor = 0xFF0055A4.toInt(),    // Bleu
                        secondaryColor = 0xFFE4002B.toInt()   // Rouge
                    )
                )
                
                // Features activées
                .setFeatures(
                    EcoveloFeatures(
                        reservationEnabled = true,
                        mapEnabled = true,
                        qrCodeScanEnabled = true,
                        phoneRequestEnabled = true
                    )
                )
                
                // Mode debug pour le développement
                .setDebugMode(true)
                
                .build()
        )
        
        Log.d(TAG, "EcoveloSDK initialized - version ${EcoveloSDK.version}")
    }
    
    companion object {
        private const val TAG = "SampleApp"
    }
}

