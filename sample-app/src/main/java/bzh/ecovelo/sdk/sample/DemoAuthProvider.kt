package bzh.ecovelo.sdk.sample

import bzh.ecovelo.sdk.auth.EcoveloAuthProvider
import bzh.ecovelo.sdk.auth.EcoveloUserInfo
import java.util.UUID

/**
 * Provider d'authentification de démonstration.
 * 
 * Ce provider simule une authentification SSO pour tester le SDK
 * sans avoir besoin d'une vraie intégration mon-compte.bzh.
 * 
 * ⚠️ NE PAS UTILISER EN PRODUCTION
 * 
 * Dans une vraie application, implémenter [EcoveloAuthProvider] avec
 * votre SDK d'authentification mon-compte.bzh (AppAuth, etc.)
 */
class DemoAuthProvider : EcoveloAuthProvider {
    
    private var accessToken: String? = null
    private var idToken: String? = null
    private var userInfo: EcoveloUserInfo? = null
    
    /**
     * Simule une connexion utilisateur.
     */
    fun simulateLogin(
        email: String = "demo@ecovelo.bzh",
        firstName: String = "Jean",
        lastName: String = "Dupont"
    ) {
        val userId = UUID.randomUUID().toString()
        
        // Générer des tokens fictifs
        accessToken = "demo_access_token_${System.currentTimeMillis()}"
        idToken = "demo_id_token_${System.currentTimeMillis()}"
        
        // Créer les infos utilisateur
        userInfo = EcoveloUserInfo(
            sub = userId,
            email = email,
            firstName = firstName,
            lastName = lastName,
            // Le téléphone n'est pas fourni par mon-compte.bzh
            phone = null,
            phoneVerified = false
        )
    }
    
    override fun getAccessToken(): String? = accessToken
    
    override fun getIdToken(): String? = idToken
    
    override suspend fun refreshToken(): Result<String> {
        // Simuler un refresh réussi
        accessToken = "demo_access_token_refreshed_${System.currentTimeMillis()}"
        return Result.success(accessToken!!)
    }
    
    override fun getUserInfo(): EcoveloUserInfo? = userInfo
    
    override fun logout() {
        accessToken = null
        idToken = null
        userInfo = null
    }
    
    override fun isAuthenticated(): Boolean {
        return accessToken != null && userInfo != null
    }
}

