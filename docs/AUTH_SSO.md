# Authentification SSO - mon-compte.bzh

## Vue d'ensemble

Le projet **Breizhgo** (Vélos en Gare Bretagne) utilise **mon-compte.bzh** comme fournisseur d'identité (IdP). Ce SSO régional est basé sur **OpenID Connect (OIDC)**.

## Différences avec l'authentification actuelle

| Aspect | App Actuelle (Cognito) | SDK Bretagne (mon-compte.bzh) |
|--------|------------------------|-------------------------------|
| Provider | AWS Cognito | mon-compte.bzh (OIDC) |
| Gestion auth | Dans l'app | Dans l'app hôte (Cityway) |
| Téléphone | Fourni par Cognito | **Non fourni** → Flow dédié |
| Refresh token | Géré par l'app | Délégué à l'app hôte |
| Logout | Local | SSO (déconnexion globale) |

## Architecture de l'authentification

```
┌──────────────────────────────────────────────────────────────────────┐
│                      FLOW D'AUTHENTIFICATION                         │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────┐                              ┌─────────────────┐    │
│  │   Cityway   │◄────── OIDC Flow ──────────►│ mon-compte.bzh  │    │
│  │   (App)     │                              │    (IdP)        │    │
│  └──────┬──────┘                              └─────────────────┘    │
│         │                                                            │
│         │ EcoveloAuthProvider                                        │
│         │                                                            │
│         ▼                                                            │
│  ┌─────────────────────────────────────────────────────────────┐     │
│  │                    ECOVELO SDK                              │     │
│  │                                                             │     │
│  │  1. Reçoit le token via EcoveloAuthProvider                │     │
│  │  2. Transmet à l'app Ionic via le Bridge                   │     │
│  │  3. L'app Ionic appelle l'API Ecovelo avec le token        │     │
│  │  4. L'API valide le token auprès de mon-compte.bzh         │     │
│  │                                                             │     │
│  └─────────────────────────────────────────────────────────────┘     │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

## Interface EcoveloAuthProvider

L'application hôte doit implémenter cette interface :

```kotlin
interface EcoveloAuthProvider {
    
    /**
     * Retourne le token d'accès OIDC actuel.
     * Appelé avant chaque requête API.
     * 
     * @return Le token d'accès ou null si non authentifié
     */
    fun getAccessToken(): String?
    
    /**
     * Retourne l'ID Token OIDC (pour les claims utilisateur).
     * 
     * @return L'ID token ou null
     */
    fun getIdToken(): String?
    
    /**
     * Rafraîchit le token d'accès.
     * Appelé automatiquement quand le token expire.
     * 
     * @return Result avec le nouveau token ou une erreur
     */
    suspend fun refreshToken(): Result<String>
    
    /**
     * Retourne les informations utilisateur extraites du token.
     * 
     * @return EcoveloUserInfo ou null
     */
    fun getUserInfo(): EcoveloUserInfo?
    
    /**
     * Déconnecte l'utilisateur.
     * Doit déclencher la déconnexion SSO si nécessaire.
     */
    fun logout()
    
    /**
     * Vérifie si l'utilisateur est authentifié.
     */
    fun isAuthenticated(): Boolean
}
```

## Structure des données utilisateur

```kotlin
data class EcoveloUserInfo(
    /**
     * Identifiant unique de l'utilisateur (claim "sub")
     */
    val sub: String,
    
    /**
     * Email de l'utilisateur
     */
    val email: String,
    
    /**
     * Prénom (claim "given_name")
     */
    val firstName: String?,
    
    /**
     * Nom (claim "family_name")
     */
    val lastName: String?,
    
    /**
     * ⚠️ Téléphone - NON FOURNI par mon-compte.bzh
     * Sera demandé via le PhoneRequestFlow
     */
    val phone: String? = null,
    
    /**
     * Claims additionnels du token
     */
    val additionalClaims: Map<String, Any> = emptyMap()
)
```

## Implémentation côté intégrateur

### Exemple avec AppAuth

```kotlin
class CityWayAuthProvider(
    private val authStateManager: AuthStateManager
) : EcoveloAuthProvider {
    
    override fun getAccessToken(): String? {
        return authStateManager.current.accessToken
    }
    
    override fun getIdToken(): String? {
        return authStateManager.current.idToken
    }
    
    override suspend fun refreshToken(): Result<String> {
        return try {
            val newState = authStateManager.performTokenRefresh()
            Result.success(newState.accessToken!!)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    override fun getUserInfo(): EcoveloUserInfo? {
        val idToken = getIdToken() ?: return null
        val claims = parseJwtClaims(idToken)
        
        return EcoveloUserInfo(
            sub = claims["sub"] as String,
            email = claims["email"] as String,
            firstName = claims["given_name"] as? String,
            lastName = claims["family_name"] as? String,
            // phone intentionnellement null
        )
    }
    
    override fun logout() {
        authStateManager.signOut()
    }
    
    override fun isAuthenticated(): Boolean {
        return authStateManager.current.isAuthorized
    }
}
```

## Gestion du numéro de téléphone

### Problématique

Le SSO `mon-compte.bzh` ne fournit pas le numéro de téléphone dans ses claims OIDC standard. Or, Ecovelo **requiert** un numéro de téléphone vérifié pour :

- Contacter l'usager en cas de problème
- Envoyer des notifications SMS
- Sécurité et récupération de compte

### Solution : Phone Request Flow

```
┌────────────────────────────────────────────────────────────────────┐
│                     PHONE REQUEST FLOW                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐      │
│  │ Backend │     │  Ionic  │     │   SDK   │     │  User   │      │
│  └────┬────┘     └────┬────┘     └────┬────┘     └────┬────┘      │
│       │               │               │               │            │
│       │  Auth OK but  │               │               │            │
│       │  no phone     │               │               │            │
│       │◄──────────────┤               │               │            │
│       │               │               │               │            │
│       ├───────────────┤ needPhone     │               │            │
│       │               ├──────────────►│               │            │
│       │               │               │               │            │
│       │               │               │ Show phone UI │            │
│       │               │               ├──────────────►│            │
│       │               │               │               │            │
│       │               │               │ Enter phone   │            │
│       │               │               │◄──────────────┤            │
│       │               │               │               │            │
│       │          Send verification SMS│               │            │
│       │◄──────────────────────────────┤               │            │
│       │               │               │               │            │
│       │               │               │ Enter code    │            │
│       │               │               │◄──────────────┤            │
│       │               │               │               │            │
│       │         Verify code           │               │            │
│       │◄──────────────────────────────┤               │            │
│       │               │               │               │            │
│       ├───────────────┤ phoneVerified │               │            │
│       │               │◄──────────────┤               │            │
│       │               │               │               │            │
│       │  Continue flow│               │               │            │
│       │◄──────────────┤               │               │            │
│       │               │               │               │            │
└───────┴───────────────┴───────────────┴───────────────┴────────────┘
```

### Configuration

```kotlin
EcoveloSDK.init(
    context = this,
    config = EcoveloConfig.Builder()
        .setTerritoryId("breizhgo")
        // Activer le flow téléphone pour les SSO externes
        .setPhoneRequestEnabled(true)
        // Optionnel: callback quand le téléphone est demandé
        .setPhoneRequestCallback { request ->
            // Possibilité de customiser l'UI ou déléguer à l'app hôte
            PhoneRequestAction.USE_SDK_UI // ou USE_HOST_UI
        }
        .build()
)
```

### Option : Déléguer à l'app hôte

Si l'app hôte veut gérer elle-même la saisie du téléphone :

```kotlin
EcoveloSDK.setPhoneRequestCallback { request ->
    // Afficher votre propre UI
    showCustomPhoneDialog { phone, verificationCode ->
        // Retourner le résultat au SDK
        request.complete(
            phone = phone,
            verified = true
        )
    }
    PhoneRequestAction.USE_HOST_UI
}
```

## Gestion des erreurs d'authentification

```kotlin
sealed class EcoveloAuthError : Exception() {
    
    /** Token expiré et refresh impossible */
    object TokenExpired : EcoveloAuthError()
    
    /** Utilisateur non authentifié */
    object NotAuthenticated : EcoveloAuthError()
    
    /** Token invalide */
    data class InvalidToken(override val message: String) : EcoveloAuthError()
    
    /** Erreur réseau lors du refresh */
    data class NetworkError(override val cause: Throwable) : EcoveloAuthError()
    
    /** Le provider SSO a refusé le token */
    data class ProviderError(val code: String, override val message: String) : EcoveloAuthError()
}

// Callback pour gérer les erreurs
EcoveloSDK.setAuthErrorCallback { error ->
    when (error) {
        is EcoveloAuthError.TokenExpired -> {
            // Rediriger vers le login SSO
            startSSOLogin()
        }
        is EcoveloAuthError.NotAuthenticated -> {
            // Afficher un message
            showLoginRequired()
        }
        else -> {
            Log.e("Ecovelo", "Auth error", error)
        }
    }
}
```

## Validation côté Backend

Le backend Ecovelo doit être configuré pour valider les tokens `mon-compte.bzh` :

```yaml
# Configuration backend (exemple)
auth:
  providers:
    - name: mon-compte-bzh
      type: oidc
      issuer: https://mon-compte.bzh
      audience: ecovelo-breizhgo
      jwks_uri: https://mon-compte.bzh/.well-known/jwks.json
      
  # Mapping des claims
  claims_mapping:
    user_id: sub
    email: email
    first_name: given_name
    last_name: family_name
```

## Sécurité

### Bonnes pratiques implémentées

1. **Pas de stockage de tokens dans le SDK** : Délégué à l'app hôte
2. **Validation côté serveur** : Les tokens sont validés par le backend
3. **Refresh automatique** : Évite les tokens expirés
4. **Logout SSO** : Déconnexion globale coordonnée

### Recommandations pour l'intégrateur

1. Utiliser un stockage sécurisé pour les tokens (EncryptedSharedPreferences, Keystore)
2. Implémenter le PKCE pour le flow OIDC
3. Gérer les expirations de session côté SSO
4. Logger les erreurs d'auth pour le debugging

