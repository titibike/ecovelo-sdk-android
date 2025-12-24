package bzh.ecovelo.sdk.auth

/**
 * Interface pour la fourniture des tokens d'authentification SSO.
 * 
 * L'application hôte doit implémenter cette interface pour permettre au SDK
 * d'accéder aux tokens OAuth2/OIDC du fournisseur d'identité (mon-compte.bzh).
 * 
 * ## Exemple d'implémentation
 * 
 * ```kotlin
 * class MonCompteBzhAuthProvider(
 *     private val sessionManager: SessionManager
 * ) : EcoveloAuthProvider {
 * 
 *     override fun getAccessToken(): String? {
 *         return sessionManager.accessToken
 *     }
 *     
 *     override fun getIdToken(): String? {
 *         return sessionManager.idToken
 *     }
 *     
 *     override suspend fun refreshToken(): Result<String> {
 *         return runCatching {
 *             sessionManager.refresh()
 *             sessionManager.accessToken!!
 *         }
 *     }
 *     
 *     override fun getUserInfo(): EcoveloUserInfo? {
 *         val user = sessionManager.user ?: return null
 *         return EcoveloUserInfo(
 *             sub = user.id,
 *             email = user.email,
 *             firstName = user.firstName,
 *             lastName = user.lastName
 *         )
 *     }
 *     
 *     override fun logout() {
 *         sessionManager.signOut()
 *     }
 *     
 *     override fun isAuthenticated(): Boolean {
 *         return sessionManager.isLoggedIn
 *     }
 * }
 * ```
 */
interface EcoveloAuthProvider {
    
    /**
     * Retourne le token d'accès OAuth2 actuel.
     * 
     * Ce token est utilisé pour authentifier les requêtes vers l'API Ecovelo.
     * 
     * @return Le token d'accès, ou null si l'utilisateur n'est pas connecté
     */
    fun getAccessToken(): String?
    
    /**
     * Retourne l'ID Token OIDC.
     * 
     * L'ID Token contient les claims de l'utilisateur (sub, email, etc.)
     * et est utilisé pour extraire les informations utilisateur.
     * 
     * @return L'ID Token, ou null si non disponible
     */
    fun getIdToken(): String?
    
    /**
     * Rafraîchit le token d'accès.
     * 
     * Cette méthode est appelée automatiquement par le SDK lorsque
     * le token actuel expire ou est sur le point d'expirer.
     * 
     * L'implémentation doit :
     * 1. Appeler l'endpoint de refresh du SSO
     * 2. Mettre à jour le stockage local des tokens
     * 3. Retourner le nouveau token d'accès
     * 
     * @return Result contenant le nouveau token ou une erreur
     */
    suspend fun refreshToken(): Result<String>
    
    /**
     * Retourne les informations de l'utilisateur connecté.
     * 
     * Ces informations peuvent être extraites de l'ID Token ou
     * obtenues via l'endpoint userinfo du SSO.
     * 
     * Note: Le champ `phone` de [EcoveloUserInfo] sera probablement null
     * car mon-compte.bzh ne fournit pas cette information. Le SDK
     * demandera le téléphone à l'utilisateur si nécessaire.
     * 
     * @return Les informations utilisateur, ou null si non connecté
     */
    fun getUserInfo(): EcoveloUserInfo?
    
    /**
     * Déconnecte l'utilisateur.
     * 
     * Cette méthode doit :
     * 1. Invalider les tokens locaux
     * 2. Optionnellement, déclencher la déconnexion SSO (end session)
     * 
     * Le SDK appellera cette méthode si une déconnexion est nécessaire
     * (ex: token révoqué côté serveur).
     */
    fun logout()
    
    /**
     * Vérifie si l'utilisateur est authentifié.
     * 
     * @return true si un token valide est disponible
     */
    fun isAuthenticated(): Boolean
}

