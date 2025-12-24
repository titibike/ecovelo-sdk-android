package bzh.ecovelo.sdk.rental

import kotlinx.serialization.Serializable

/**
 * Options pour le parcours de location.
 * 
 * @property stationId Identifiant de la station à pré-sélectionner (optionnel)
 * @property bikeId Identifiant du vélo à pré-sélectionner (optionnel)
 * @property onComplete Callback appelé à la fin du parcours
 */
data class RentalOptions(
    val stationId: String? = null,
    val bikeId: String? = null,
    val onComplete: ((RentalResult) -> Unit)? = null
)

/**
 * Résultat du parcours de location.
 */
sealed class RentalResult {
    
    /**
     * Location terminée avec succès.
     * 
     * @property rentalId Identifiant de la location
     * @property durationMinutes Durée totale en minutes
     * @property distanceMeters Distance parcourue en mètres (si disponible)
     * @property cost Coût de la location (si disponible)
     */
    data class Success(
        val rentalId: String,
        val durationMinutes: Int,
        val distanceMeters: Int? = null,
        val cost: RentalCost? = null
    ) : RentalResult()
    
    /**
     * L'utilisateur a annulé le parcours.
     */
    object Cancelled : RentalResult()
    
    /**
     * Une erreur s'est produite.
     * 
     * @property message Message d'erreur
     * @property code Code d'erreur (optionnel)
     * @property cause Cause de l'erreur (optionnel)
     */
    data class Error(
        val message: String,
        val code: String? = null,
        val cause: Throwable? = null
    ) : RentalResult()
    
    /**
     * Une location est en cours (l'utilisateur a quitté le SDK sans rendre le vélo).
     * 
     * @property rentalId Identifiant de la location en cours
     * @property startTime Heure de début
     */
    data class InProgress(
        val rentalId: String,
        val startTime: String
    ) : RentalResult()
}

/**
 * Coût d'une location.
 */
@Serializable
data class RentalCost(
    val amount: Double,
    val currency: String = "EUR",
    val formattedAmount: String? = null
)

/**
 * Informations sur une location.
 */
@Serializable
data class Rental(
    val id: String,
    val status: RentalStatus,
    val bikeId: String,
    val bikeName: String?,
    val stationId: String,
    val stationName: String,
    val startTime: String,
    val endTime: String? = null,
    val durationMinutes: Int? = null,
    val distanceMeters: Int? = null,
    val cost: RentalCost? = null
)

/**
 * Statut d'une location.
 */
@Serializable
enum class RentalStatus {
    PENDING,
    IN_PROGRESS,
    COMPLETED,
    CANCELLED
}

