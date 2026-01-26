# Guide de Release - SDK Ecovelo Android

Ce document décrit le processus de création et publication d'une nouvelle version du SDK.

## Distribution

Le SDK est distribué via **JitPack**, un service qui build automatiquement les packages Maven à partir des tags GitHub.

- **Page JitPack** : https://jitpack.io/#titibike/ecovelo-sdk-android
- **Releases GitHub** : https://github.com/titibike/ecovelo-sdk-android/releases

## Processus de release

### 1. Préparer la release

```bash
# S'assurer d'être sur main et à jour
git checkout main
git pull origin main

# Vérifier que le build fonctionne
./gradlew :ecovelo-sdk:assembleRelease
./gradlew :ecovelo-sdk:testReleaseUnitTest
```

### 2. Mettre à jour la version

Éditer `gradle.properties` :

```properties
ECOVELO_SDK_VERSION=1.0.0
```

Commiter le changement :

```bash
git add gradle.properties
git commit -m "chore: bump version to 1.0.0"
git push origin main
```

### 3. Créer le tag

```bash
# Release stable
git tag v1.0.0

# Ou release candidate
git tag v1.0.0-rc1

# Pousser le tag
git push origin --tags
```

### 4. Vérification automatique

Une fois le tag poussé, deux choses se passent automatiquement :

#### GitHub Actions

Le workflow `.github/workflows/release.yml` :
1. Build le SDK
2. Exécute les tests
3. Crée une release GitHub avec :
   - Changelog auto-généré
   - Fichier AAR attaché
   - Instructions d'intégration

#### JitPack

JitPack détecte le nouveau tag et :
1. Clone le repository
2. Exécute `./gradlew :ecovelo-sdk:publishToMavenLocal`
3. Publie le package Maven

**Vérifier le build JitPack** : https://jitpack.io/#titibike/ecovelo-sdk-android

## Versioning

Le SDK suit le [Semantic Versioning](https://semver.org/) :

| Version | Signification |
|---------|---------------|
| `MAJOR.MINOR.PATCH` | Ex: `1.2.3` |
| `X.0.0` | Changements cassants (breaking changes) |
| `X.Y.0` | Nouvelles fonctionnalités rétrocompatibles |
| `X.Y.Z` | Corrections de bugs |

### Tags spéciaux

| Format | Usage | Exemple |
|--------|-------|---------|
| `vX.Y.Z` | Release stable | `v1.0.0` |
| `vX.Y.Z-rcN` | Release candidate | `v1.0.0-rc1` |
| `vX.Y.Z-beta.N` | Beta | `v1.0.0-beta.1` |
| `vX.Y.Z-alpha.N` | Alpha | `v1.0.0-alpha.1` |

## Configuration JitPack

Le fichier `jitpack.yml` à la racine configure le build :

```yaml
# JDK version
jdk:
  - openjdk17

# Commande de build
install:
  - unset JAVA_TOOL_OPTIONS && ./gradlew :ecovelo-sdk:publishToMavenLocal
```

### Fichiers requis

Pour que JitPack fonctionne, ces fichiers doivent être commités :

- `gradle/wrapper/gradle-wrapper.jar` - Exécutable Gradle wrapper
- `gradle/wrapper/gradle-wrapper.properties` - Configuration version Gradle
- `gradlew` - Script wrapper Unix (exécutable)
- `gradlew.bat` - Script wrapper Windows

## Dépannage

### Le build JitPack échoue

1. Vérifier les logs sur https://jitpack.io/#titibike/ecovelo-sdk-android
2. Cliquer sur l'icône "Log" à côté de la version
3. Erreurs courantes :
   - **`gradle-wrapper.jar not found`** : Commiter le fichier jar
   - **`Could not find or load main class`** : Problème avec `JAVA_TOOL_OPTIONS`, vérifier `jitpack.yml`
   - **`publishToMavenLocal not found`** : Plugin `maven-publish` manquant

### Forcer un rebuild JitPack

Si le build a échoué et que vous l'avez corrigé (sans nouveau tag) :

1. Aller sur https://jitpack.io/#titibike/ecovelo-sdk-android
2. Cliquer sur "Log" à côté de la version
3. Cliquer sur "Delete build" en haut des logs
4. Cliquer sur "Get it" pour relancer le build

### Tester localement avant release

```bash
# Publier en local
./gradlew :ecovelo-sdk:publishToMavenLocal

# Le package sera dans ~/.m2/repository/com/github/titibike/ecovelo-sdk-android/
```

Pour tester dans un autre projet :

```kotlin
// settings.gradle.kts
repositories {
    mavenLocal() // Ajouter en premier
    maven { url = uri("https://jitpack.io") }
}

// build.gradle.kts
dependencies {
    implementation("com.github.titibike:ecovelo-sdk-android:LOCAL-SNAPSHOT")
}
```

## Checklist de release

- [ ] Tests passent localement
- [ ] Version mise à jour dans `gradle.properties`
- [ ] Changelog/notes de release préparées
- [ ] Tag créé et poussé
- [ ] Build GitHub Actions réussi
- [ ] Build JitPack réussi (icône verte)
- [ ] Release GitHub créée avec AAR
- [ ] Documentation mise à jour si nécessaire
- [ ] Notification aux intégrateurs (Cityway)

## Notifications

Après une release majeure, notifier :

- **Cityway** : email à l'équipe d'intégration
- **README** : mettre à jour la version dans les exemples
- **docs/INTEGRATION.md** : vérifier la compatibilité
