package bzh.ecovelo.sdk.config

import bzh.ecovelo.sdk.phone.PhoneRequest

/**
 * Callbacks pour les événements du SDK.
 * 
 * Ces callbacks permettent à l'application hôte de réagir aux événements
 * importants du cycle de vie du SDK.
 * 
 * ```kotlin
 * EcoveloSDK.setCallbacks(
 *     EcoveloCallbacks(
 *         onRentalStarted = { rentalId ->
 *             analytics.track("rental_started", rentalId)
 *         },
 *         onRentalEnded = { rentalId, duration ->
 *             analytics.track("rental_ended", mapOf(
 *                 "rental_id" to rentalId,
 *                 "duration" to duration
 *             ))
 *         },
 *         onAuthRequired = {
 *             startSSOLogin()
 *         }
 *     )
 * )
 * ```
 */
data class EcoveloCallbacks(
    
    // ==================== Authentification ====================
    
    /**
     * Appelé lorsque l'utilisateur clique sur "Se connecter" dans l'app.
     * 
     * L'application hôte doit :
     * 1. Lancer le flow SSO mon-compte.bzh
     * 2. Une fois connecté, appeler [EcoveloSDK.updateToken]
     * 
     * ⚠️ Ce callback est OBLIGATOIRE si le SDK est lancé sans token.
     */
    val onLoginRequired: (() -> Unit)? = null,
    
    /**
     * Appelé lorsque le SDK a besoin du numéro de téléphone.
     * 
     * Le SSO mon-compte.bzh ne fournit pas le téléphone.
     * L'application hôte peut :
     * - Laisser le SDK afficher son UI native (par défaut)
     * - Gérer elle-même la collecte du téléphone
     * 
     * @param request Objet permettant de répondre à la demande
     */
    val onPhoneRequired: ((request: PhoneRequest) -> Unit)? = null,
    
    // ==================== Analytics (optionnels) ====================
    
    /**
     * Appelé lorsqu'une location démarre.
     * Utile pour le tracking analytics.
     */
    val onRentalStarted: ((rentalId: String) -> Unit)? = null,
    
    /**
     * Appelé lorsqu'une location se termine.
     * Utile pour le tracking analytics.
     */
    val onRentalEnded: ((rentalId: String, durationMinutes: Int) -> Unit)? = null,
    
    /**
     * Appelé lorsqu'une réservation est créée.
     * Utile pour le tracking analytics.
     */
    val onReservationCreated: ((reservationId: String) -> Unit)? = null,
    
    /**
     * Appelé lorsqu'une réservation est annulée.
     * Utile pour le tracking analytics.
     */
    val onReservationCancelled: ((reservationId: String) -> Unit)? = null,
    
    // ==================== Erreurs ====================
    
    /**
     * Appelé en cas d'erreur.
     */
    val onError: ((error: Throwable) -> Unit)? = null,
    
    // ==================== Cycle de vie ====================
    
    /**
     * Appelé lorsque l'utilisateur ferme le SDK.
     */
    val onClose: (() -> Unit)? = null,
    
    /**
     * Appelé lorsque l'utilisateur se déconnecte.
     */
    val onLogout: (() -> Unit)? = null,
    
    /**
     * Appelé pour les événements analytics génériques.
     * 
     * @param name Nom de l'événement
     * @param data Données associées (JSON string)
     */
    val onEvent: ((name: String, data: String?) -> Unit)? = null
)

