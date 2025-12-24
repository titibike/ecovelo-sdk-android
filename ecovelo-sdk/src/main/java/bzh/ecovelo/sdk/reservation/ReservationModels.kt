package bzh.ecovelo.sdk.reservation

import kotlinx.serialization.Serializable
import java.time.LocalDateTime

/**
 * Options pour le parcours de réservation.
 * 
 * @property departureStationId Station de départ (optionnel, peut être sélectionnée dans l'UI)
 * @property departureTime Heure de départ souhaitée
 * @property estimatedDurationMinutes Durée estimée de la location
 * @property arrivalStationId Station d'arrivée pour réservation avec trajet (optionnel)
 * @property onComplete Callback appelé à la fin du parcours
 */
data class ReservationOptions(
    val departureStationId: String? = null,
    val departureTime: LocalDateTime? = null,
    val estimatedDurationMinutes: Int? = null,
    val arrivalStationId: String? = null,
    val onComplete: ((ReservationResult) -> Unit)? = null
)

/**
 * Résultat du parcours de réservation.
 */
sealed class ReservationResult {
    
    /**
     * Réservation créée avec succès.
     * 
     * @property reservationId Identifiant de la réservation
     * @property stationId Station de départ
     * @property stationName Nom de la station
     * @property departureTime Heure de départ confirmée
     * @property expiresAt Heure d'expiration de la réservation
     */
    data class Success(
        val reservationId: String,
        val stationId: String,
        val stationName: String,
        val departureTime: String,
        val expiresAt: String
    ) : ReservationResult()
    
    /**
     * L'utilisateur a annulé le parcours.
     */
    object Cancelled : ReservationResult()
    
    /**
     * Une erreur s'est produite.
     * 
     * @property message Message d'erreur
     * @property code Code d'erreur
     * @property cause Cause de l'erreur
     */
    data class Error(
        val message: String,
        val code: String? = null,
        val cause: Throwable? = null
    ) : ReservationResult()
}

/**
 * Informations sur une réservation.
 */
@Serializable
data class Reservation(
    val id: String,
    val status: ReservationStatus,
    val stationId: String,
    val stationName: String,
    val departureTime: String,
    val expiresAt: String,
    val arrivalStationId: String? = null,
    val arrivalStationName: String? = null,
    val estimatedDurationMinutes: Int? = null,
    val bikeId: String? = null,
    val bikeName: String? = null,
    val createdAt: String
)

/**
 * Statut d'une réservation.
 */
@Serializable
enum class ReservationStatus {
    /** En attente de confirmation */
    PENDING,
    /** Confirmée, en attente d'utilisation */
    CONFIRMED,
    /** Utilisée (convertie en location) */
    USED,
    /** Expirée */
    EXPIRED,
    /** Annulée */
    CANCELLED
}

/**
 * Résultat de l'annulation d'une réservation.
 */
sealed class CancelReservationResult {
    object Success : CancelReservationResult()
    data class Error(val message: String) : CancelReservationResult()
}

/**
 * Créneau de réservation disponible.
 */
@Serializable
data class ReservationSlot(
    val startTime: String,
    val endTime: String,
    val availableBikes: Int,
    val stationId: String
)

