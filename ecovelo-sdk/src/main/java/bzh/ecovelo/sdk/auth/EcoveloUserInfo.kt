package bzh.ecovelo.sdk.auth

import kotlinx.serialization.Serializable

/**
 * Informations de l'utilisateur connecté.
 * 
 * Ces informations sont extraites des claims OIDC du token SSO.
 * 
 * @property sub Identifiant unique de l'utilisateur (claim "sub")
 * @property email Adresse email de l'utilisateur
 * @property firstName Prénom (claim "given_name")
 * @property lastName Nom de famille (claim "family_name")
 * @property phone Numéro de téléphone (généralement null avec mon-compte.bzh)
 * @property phoneVerified Indique si le téléphone a été vérifié
 * @property additionalClaims Claims additionnels du token
 */
@Serializable
data class EcoveloUserInfo(
    val sub: String,
    val email: String,
    val firstName: String? = null,
    val lastName: String? = null,
    val phone: String? = null,
    val phoneVerified: Boolean = false,
    val additionalClaims: Map<String, String> = emptyMap()
) {
    
    /**
     * Nom complet de l'utilisateur.
     */
    val fullName: String?
        get() = when {
            firstName != null && lastName != null -> "$firstName $lastName"
            firstName != null -> firstName
            lastName != null -> lastName
            else -> null
        }
    
    /**
     * Indique si le numéro de téléphone est renseigné et vérifié.
     */
    val hasValidPhone: Boolean
        get() = !phone.isNullOrBlank() && phoneVerified
}

