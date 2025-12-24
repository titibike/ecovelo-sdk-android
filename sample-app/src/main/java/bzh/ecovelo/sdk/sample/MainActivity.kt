package bzh.ecovelo.sdk.sample

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import bzh.ecovelo.sdk.EcoveloSDK
import bzh.ecovelo.sdk.config.EcoveloCallbacks
import bzh.ecovelo.sdk.rental.RentalOptions
import bzh.ecovelo.sdk.rental.RentalResult
import bzh.ecovelo.sdk.reservation.ReservationOptions
import bzh.ecovelo.sdk.reservation.ReservationResult
import bzh.ecovelo.sdk.sample.databinding.ActivityMainBinding
import java.time.LocalDateTime

/**
 * Activity principale de l'application de démonstration.
 * 
 * Montre comment :
 * - Configurer l'authentification SSO (simulée ici)
 * - Lancer le parcours de location
 * - Lancer le parcours de réservation
 * - Gérer les callbacks du SDK
 */
class MainActivity : AppCompatActivity() {
    
    private lateinit var binding: ActivityMainBinding
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        
        setupAuthProvider()
        setupCallbacks()
        setupUI()
    }
    
    /**
     * Configure le provider d'authentification.
     * 
     * Dans une vraie application, cela utiliserait le SDK mon-compte.bzh.
     * Ici, nous simulons une authentification pour la démo.
     */
    private fun setupAuthProvider() {
        // Utiliser le provider de démonstration
        EcoveloSDK.setAuthProvider(DemoAuthProvider())
        
        updateAuthStatus()
    }
    
    /**
     * Configure les callbacks du SDK.
     */
    private fun setupCallbacks() {
        EcoveloSDK.setCallbacks(
            EcoveloCallbacks(
                onRentalStarted = { rentalId ->
                    Log.d(TAG, "Location démarrée: $rentalId")
                    showToast("Location démarrée !")
                },
                
                onRentalEnded = { rentalId, duration ->
                    Log.d(TAG, "Location terminée: $rentalId (durée: ${duration}min)")
                    showToast("Location terminée - Durée: ${duration} minutes")
                },
                
                onReservationCreated = { reservationId ->
                    Log.d(TAG, "Réservation créée: $reservationId")
                    showToast("Réservation confirmée !")
                },
                
                onError = { error ->
                    Log.e(TAG, "Erreur SDK", error)
                    showToast("Erreur: ${error.message}")
                },
                
                onAuthRequired = {
                    Log.d(TAG, "Authentification requise")
                    showToast("Veuillez vous connecter")
                    // Dans une vraie app: lancer le flow SSO
                },
                
                onPhoneRequired = { request ->
                    Log.d(TAG, "Téléphone requis pour ${request.userEmail}")
                    // Laisser le SDK gérer l'UI de saisie du téléphone
                    request.useSDKUI()
                }
            )
        )
    }
    
    /**
     * Configure l'interface utilisateur.
     */
    private fun setupUI() {
        // Bouton de connexion/déconnexion
        binding.buttonLogin.setOnClickListener {
            toggleAuth()
        }
        
        // Bouton de location
        binding.buttonRental.setOnClickListener {
            startRental()
        }
        
        // Bouton de réservation
        binding.buttonReservation.setOnClickListener {
            startReservation()
        }
        
        // Informations SDK
        binding.textSdkVersion.text = "SDK Version: ${EcoveloSDK.version}"
    }
    
    /**
     * Simule la connexion/déconnexion.
     */
    private fun toggleAuth() {
        val provider = EcoveloSDK.getAuthProvider() as? DemoAuthProvider ?: return
        
        if (provider.isAuthenticated()) {
            provider.logout()
            showToast("Déconnecté")
        } else {
            provider.simulateLogin(
                email = "demo@ecovelo.bzh",
                firstName = "Jean",
                lastName = "Dupont"
            )
            showToast("Connecté en tant que Jean Dupont")
        }
        
        updateAuthStatus()
    }
    
    /**
     * Met à jour l'affichage du statut d'authentification.
     */
    private fun updateAuthStatus() {
        val isAuth = EcoveloSDK.isAuthenticated()
        
        binding.buttonLogin.text = if (isAuth) "Se déconnecter" else "Se connecter (démo)"
        binding.textAuthStatus.text = if (isAuth) {
            val user = (EcoveloSDK.getAuthProvider() as? DemoAuthProvider)?.getUserInfo()
            "Connecté: ${user?.fullName ?: "Utilisateur"}"
        } else {
            "Non connecté"
        }
        
        binding.buttonRental.isEnabled = isAuth
        binding.buttonReservation.isEnabled = isAuth
    }
    
    /**
     * Lance le parcours de location.
     */
    private fun startRental() {
        EcoveloSDK.startRentalFlow(
            activity = this,
            options = RentalOptions(
                // Pré-sélectionner la gare de Rennes (optionnel)
                stationId = "gare-rennes",
                onComplete = { result ->
                    handleRentalResult(result)
                }
            )
        )
    }
    
    /**
     * Lance le parcours de réservation.
     */
    private fun startReservation() {
        EcoveloSDK.startReservationFlow(
            activity = this,
            options = ReservationOptions(
                departureStationId = "gare-rennes",
                departureTime = LocalDateTime.now().plusHours(2),
                estimatedDurationMinutes = 30,
                onComplete = { result ->
                    handleReservationResult(result)
                }
            )
        )
    }
    
    /**
     * Gère le résultat du parcours de location.
     */
    private fun handleRentalResult(result: RentalResult) {
        when (result) {
            is RentalResult.Success -> {
                showToast("Location terminée: ${result.durationMinutes} min")
            }
            is RentalResult.Cancelled -> {
                showToast("Location annulée")
            }
            is RentalResult.Error -> {
                showToast("Erreur: ${result.message}")
            }
            is RentalResult.InProgress -> {
                showToast("Location en cours depuis ${result.startTime}")
            }
        }
    }
    
    /**
     * Gère le résultat du parcours de réservation.
     */
    private fun handleReservationResult(result: ReservationResult) {
        when (result) {
            is ReservationResult.Success -> {
                showToast("Réservation confirmée à ${result.stationName}")
            }
            is ReservationResult.Cancelled -> {
                showToast("Réservation annulée")
            }
            is ReservationResult.Error -> {
                showToast("Erreur: ${result.message}")
            }
        }
    }
    
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        
        // Le SDK gère automatiquement ses résultats
        Log.d(TAG, "onActivityResult: requestCode=$requestCode, resultCode=$resultCode")
    }
    
    private fun showToast(message: String) {
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
    }
    
    companion object {
        private const val TAG = "MainActivity"
    }
}

