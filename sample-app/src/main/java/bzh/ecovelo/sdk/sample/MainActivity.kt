package bzh.ecovelo.sdk.sample

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import bzh.ecovelo.sdk.EcoveloSDK
import bzh.ecovelo.sdk.EcoveloResult
import bzh.ecovelo.sdk.config.EcoveloCallbacks
import bzh.ecovelo.sdk.sample.databinding.ActivityMainBinding

/**
 * Activity principale de l'application de démonstration.
 * 
 * Montre comment :
 * - Configurer l'authentification SSO (simulée ici)
 * - Lancer le SDK Ecovelo
 * - Gérer le callback de connexion (onLoginRequired)
 */
class MainActivity : AppCompatActivity() {
    
    private lateinit var binding: ActivityMainBinding
    private lateinit var authProvider: DemoAuthProvider
    
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
     * Dans une vraie application (Cityway), cela utiliserait le SDK mon-compte.bzh.
     * Ici, nous simulons une authentification pour la démo.
     */
    private fun setupAuthProvider() {
        authProvider = DemoAuthProvider()
        EcoveloSDK.setAuthProvider(authProvider)
        updateAuthStatus()
    }
    
    /**
     * Configure les callbacks du SDK.
     */
    private fun setupCallbacks() {
        EcoveloSDK.setCallbacks(
            EcoveloCallbacks(
                // IMPORTANT: Callback appelé quand l'utilisateur clique "Se connecter" dans l'app
                onLoginRequired = {
                    Log.d(TAG, "Login requis - Lancement du SSO")
                    showToast("Connexion SSO requise...")
                    
                    // Simuler le flow SSO (dans une vraie app: lancer mon-compte.bzh)
                    simulateSSOLogin()
                },
                
                // Callback optionnel pour le téléphone
                onPhoneRequired = { request ->
                    Log.d(TAG, "Téléphone requis pour ${request.userEmail}")
                    request.useSDKUI()
                },
                
                // Callbacks analytics (optionnels)
                onRentalStarted = { rentalId ->
                    Log.d(TAG, "Analytics: Location démarrée $rentalId")
                },
                
                onRentalEnded = { rentalId, duration ->
                    Log.d(TAG, "Analytics: Location terminée $rentalId (${duration}min)")
                },
                
                onReservationCreated = { reservationId ->
                    Log.d(TAG, "Analytics: Réservation créée $reservationId")
                },
                
                onError = { error ->
                    Log.e(TAG, "Erreur SDK", error)
                    showToast("Erreur: ${error.message}")
                },
                
                onClose = {
                    Log.d(TAG, "SDK fermé")
                    updateAuthStatus()
                }
            )
        )
    }
    
    /**
     * Configure l'interface utilisateur.
     */
    private fun setupUI() {
        // Bouton de connexion/déconnexion (pour tester)
        binding.buttonLogin.setOnClickListener {
            toggleAuth()
        }
        
        // Bouton pour lancer Ecovelo
        binding.buttonRental.setOnClickListener {
            openEcovelo()
        }
        
        // Masquer le bouton réservation (plus besoin, c'est dans l'app)
        binding.buttonReservation.visibility = android.view.View.GONE
        
        // Informations SDK
        binding.textSdkVersion.text = "SDK Version: ${EcoveloSDK.version}"
        
        // Renommer le bouton
        binding.buttonRental.text = "🚲 Ouvrir Ecovelo"
    }
    
    /**
     * Ouvre l'application Ecovelo.
     * 
     * Le SDK peut être lancé avec ou sans token :
     * - Avec token : accès complet
     * - Sans token : mode exploration, bouton "Se connecter" visible
     */
    private fun openEcovelo() {
        EcoveloSDK.start(
            activity = this,
            onResult = { result ->
                when (result) {
                    is EcoveloResult.Closed -> {
                        Log.d(TAG, "Ecovelo fermé")
                        showToast("Application Ecovelo fermée")
                    }
                    is EcoveloResult.Error -> {
                        Log.e(TAG, "Erreur: ${result.message}")
                        showToast("Erreur: ${result.message}")
                    }
                }
                updateAuthStatus()
            }
        )
    }
    
    /**
     * Simule le flow SSO mon-compte.bzh.
     * 
     * Dans une vraie application Cityway :
     * - Lancer l'intent vers mon-compte.bzh
     * - Récupérer le token dans onActivityResult
     * - Appeler EcoveloSDK.updateToken()
     */
    private fun simulateSSOLogin() {
        // Simuler un délai de connexion SSO
        binding.root.postDelayed({
            // Simuler la connexion réussie
            authProvider.simulateLogin(
                email = "demo@ecovelo.bzh",
                firstName = "Jean",
                lastName = "Dupont"
            )
            
            showToast("Connecté via SSO !")
            
            // IMPORTANT: Notifier le SDK que le token est disponible
            EcoveloSDK.updateToken()
            
            updateAuthStatus()
        }, 1500) // Simule 1.5s de flow SSO
    }
    
    /**
     * Simule la connexion/déconnexion (pour les tests).
     */
    private fun toggleAuth() {
        if (authProvider.isAuthenticated()) {
            authProvider.logout()
            showToast("Déconnecté")
        } else {
            authProvider.simulateLogin(
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
            "Connecté: ${authProvider.getUserInfo()?.fullName ?: "Utilisateur"}"
        } else {
            "Non connecté (mode exploration disponible)"
        }
        
        // Le bouton Ecovelo est TOUJOURS actif (avec ou sans token)
        binding.buttonRental.isEnabled = true
    }
    
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        // Transmettre au SDK
        EcoveloSDK.handleActivityResult(requestCode, resultCode, data)
    }
    
    private fun showToast(message: String) {
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
    }
    
    companion object {
        private const val TAG = "MainActivity"
    }
}
