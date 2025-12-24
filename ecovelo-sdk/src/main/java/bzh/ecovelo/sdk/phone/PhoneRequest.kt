package bzh.ecovelo.sdk.phone

/**
 * Représente une demande de numéro de téléphone de la part du SDK.
 * 
 * Lorsque le SDK détecte que le numéro de téléphone est manquant
 * (non fourni par le SSO mon-compte.bzh), il déclenche cette demande.
 * 
 * L'application hôte peut :
 * - Laisser le SDK afficher son UI native via [useSDKUI]
 * - Gérer elle-même la collecte via [submitPhone]
 * 
 * ```kotlin
 * EcoveloCallbacks(
 *     onPhoneRequired = { request ->
 *         // Option 1: UI du SDK
 *         request.useSDKUI()
 *         
 *         // Option 2: UI personnalisée
 *         showMyPhoneDialog { phone ->
 *             request.submitPhone(phone, verified = true)
 *         }
 *     }
 * )
 * ```
 */
interface PhoneRequest {
    
    /**
     * Email de l'utilisateur (pour information)
     */
    val userEmail: String
    
    /**
     * Prénom de l'utilisateur (pour personnaliser l'UI)
     */
    val userFirstName: String?
    
    /**
     * Utilise l'UI native du SDK pour collecter le téléphone.
     * 
     * Le SDK affichera un écran de saisie avec vérification par SMS.
     */
    fun useSDKUI()
    
    /**
     * Soumet un numéro de téléphone depuis l'UI de l'application hôte.
     * 
     * @param phone Le numéro de téléphone au format international (+33...)
     * @param verified Indique si le téléphone a été vérifié (SMS OTP)
     */
    fun submitPhone(phone: String, verified: Boolean)
    
    /**
     * Annule la demande de téléphone.
     * 
     * Cela fermera le parcours en cours avec une erreur.
     */
    fun cancel()
}

/**
 * Implémentation interne de PhoneRequest.
 */
internal class PhoneRequestImpl(
    override val userEmail: String,
    override val userFirstName: String?,
    private val onUseSDKUI: () -> Unit,
    private val onSubmit: (phone: String, verified: Boolean) -> Unit,
    private val onCancel: () -> Unit
) : PhoneRequest {
    
    override fun useSDKUI() {
        onUseSDKUI()
    }
    
    override fun submitPhone(phone: String, verified: Boolean) {
        require(phone.isNotBlank()) { "Phone number cannot be blank" }
        onSubmit(phone, verified)
    }
    
    override fun cancel() {
        onCancel()
    }
}

/**
 * Résultat de la vérification du téléphone.
 */
sealed class PhoneVerificationResult {
    
    /**
     * Téléphone vérifié avec succès.
     * 
     * @property phone Le numéro de téléphone vérifié
     */
    data class Success(val phone: String) : PhoneVerificationResult()
    
    /**
     * Code de vérification invalide.
     */
    object InvalidCode : PhoneVerificationResult()
    
    /**
     * Trop de tentatives.
     */
    object TooManyAttempts : PhoneVerificationResult()
    
    /**
     * Erreur lors de la vérification.
     */
    data class Error(val message: String) : PhoneVerificationResult()
    
    /**
     * Annulé par l'utilisateur.
     */
    object Cancelled : PhoneVerificationResult()
}

