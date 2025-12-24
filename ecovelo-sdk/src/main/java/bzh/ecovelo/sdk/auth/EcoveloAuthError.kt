package bzh.ecovelo.sdk.auth

/**
 * Erreurs liées à l'authentification.
 */
sealed class EcoveloAuthError : Exception() {
    
    /**
     * L'utilisateur n'est pas authentifié.
     */
    object NotAuthenticated : EcoveloAuthError() {
        private fun readResolve(): Any = NotAuthenticated
        override val message: String = "User is not authenticated"
    }
    
    /**
     * Le token d'accès a expiré et le refresh a échoué.
     */
    object TokenExpired : EcoveloAuthError() {
        private fun readResolve(): Any = TokenExpired
        override val message: String = "Access token expired and refresh failed"
    }
    
    /**
     * Le token fourni est invalide.
     * 
     * @property reason Raison de l'invalidité
     */
    data class InvalidToken(val reason: String) : EcoveloAuthError() {
        override val message: String = "Invalid token: $reason"
    }
    
    /**
     * Erreur lors de la communication avec le provider SSO.
     * 
     * @property code Code d'erreur OAuth2
     * @property description Description de l'erreur
     */
    data class ProviderError(
        val code: String,
        val description: String
    ) : EcoveloAuthError() {
        override val message: String = "SSO provider error: $code - $description"
    }
    
    /**
     * Erreur réseau lors de l'authentification.
     * 
     * @property cause Cause de l'erreur
     */
    data class NetworkError(override val cause: Throwable) : EcoveloAuthError() {
        override val message: String = "Network error during authentication: ${cause.message}"
    }
    
    /**
     * Le numéro de téléphone est requis mais non fourni.
     */
    object PhoneRequired : EcoveloAuthError() {
        private fun readResolve(): Any = PhoneRequired
        override val message: String = "Phone number is required but not provided"
    }
}

