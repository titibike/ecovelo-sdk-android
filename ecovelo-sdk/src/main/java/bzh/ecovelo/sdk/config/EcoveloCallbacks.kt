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
    /**
     * Appelé lorsqu'une location démarre.
     * 
     * @param rentalId Identifiant de la location
     */
    val onRentalStarted: ((rentalId: String) -> Unit)? = null,
    
    /**
     * Appelé lorsqu'une location se termine.
     * 
     * @param rentalId Identifiant de la location
     * @param durationMinutes Durée de la location en minutes
     */
    val onRentalEnded: ((rentalId: String, durationMinutes: Int) -> Unit)? = null,
    
    /**
     * Appelé lorsqu'une réservation est créée.
     * 
     * @param reservationId Identifiant de la réservation
     */
    val onReservationCreated: ((reservationId: String) -> Unit)? = null,
    
    /**
     * Appelé lorsqu'une réservation est annulée.
     * 
     * @param reservationId Identifiant de la réservation
     */
    val onReservationCancelled: ((reservationId: String) -> Unit)? = null,
    
    /**
     * Appelé en cas d'erreur.
     * 
     * @param error L'erreur survenue
     */
    val onError: ((error: Throwable) -> Unit)? = null,
    
    /**
     * Appelé lorsque l'authentification est requise.
     * 
     * L'application hôte doit rediriger vers le SSO pour connecter l'utilisateur.
     */
    val onAuthRequired: (() -> Unit)? = null,
    
    /**
     * Appelé lorsque le SDK a besoin du numéro de téléphone.
     * 
     * L'application hôte peut :
     * - Laisser le SDK afficher son UI native (par défaut)
     * - Gérer elle-même la collecte du téléphone
     * 
     * @param request Objet permettant de répondre à la demande
     */
    val onPhoneRequired: ((request: PhoneRequest) -> Unit)? = null,
    
    /**
     * Appelé lorsque l'utilisateur ferme le SDK.
     */
    val onClose: (() -> Unit)? = null
)

