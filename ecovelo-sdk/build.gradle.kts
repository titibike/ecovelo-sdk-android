plugins {
    id("com.android.library")
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.plugin.serialization")
    id("maven-publish")
}

android {
    namespace = "bzh.ecovelo.sdk"
    compileSdk = 34

    defaultConfig {
        // Exigence Cityway: Min SDK 28 (Android 9)
        minSdk = 28

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        consumerProguardFiles("consumer-rules.pro")
        
        // Version du SDK
        buildConfigField("String", "SDK_VERSION", "\"${project.findProperty("ECOVELO_SDK_VERSION")}\"")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
    
    kotlinOptions {
        jvmTarget = "11"
    }
    
    buildFeatures {
        buildConfig = true
        viewBinding = true
    }

    // Inclure les assets de l'app Ionic
    sourceSets {
        getByName("main") {
            assets.srcDirs("src/main/assets")
        }
    }
}

dependencies {
    // AndroidX Core
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("androidx.activity:activity-ktx:1.8.2")
    implementation("androidx.fragment:fragment-ktx:1.6.2")
    
    // Material Design
    implementation("com.google.android.material:material:1.11.0")
    
    // Lifecycle
    implementation("androidx.lifecycle:lifecycle-viewmodel-ktx:2.7.0")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.7.0")
    
    // Coroutines
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.7.3")
    
    // Serialization
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.2")
    
    // ============================================
    // CAPACITOR - Runtime complet
    // ============================================
    implementation("com.capacitorjs:core:6.1.2")
    
    // Note: Les plugins Capacitor officiels ne sont pas sur Maven Central.
    // On utilise des plugins natifs personnalisés pour le SDK.
    // Quand l'app Ionic sera intégrée, elle apportera ses propres plugins.
    // ============================================
    
    // WebView amélioré
    implementation("androidx.webkit:webkit:1.10.0")
    
    // Camera (pour le plugin natif)
    implementation("androidx.camera:camera-core:1.3.1")
    implementation("androidx.camera:camera-camera2:1.3.1")
    implementation("androidx.camera:camera-lifecycle:1.3.1")
    implementation("androidx.camera:camera-view:1.3.1")
    
    // ExifInterface (pour les métadonnées photo)
    implementation("androidx.exifinterface:exifinterface:1.3.7")
    
    // Tests
    testImplementation("junit:junit:4.13.2")
    testImplementation("org.jetbrains.kotlinx:kotlinx-coroutines-test:1.7.3")
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
}

// Configuration de publication Maven
publishing {
    publications {
        register<MavenPublication>("release") {
            groupId = project.findProperty("ECOVELO_SDK_GROUP").toString()
            artifactId = "sdk-android"
            version = project.findProperty("ECOVELO_SDK_VERSION").toString()
            
            afterEvaluate {
                from(components["release"])
            }
            
            pom {
                name.set("Ecovelo SDK Android")
                description.set("SDK pour l'intégration du parcours usager Ecovelo (Breizhgo)")
                url.set("https://github.com/titibike/ecovelo-sdk-android")
                
                licenses {
                    license {
                        name.set("Proprietary")
                        url.set("https://ecovelo.bzh/license")
                    }
                }
                
                developers {
                    developer {
                        id.set("ecovelo")
                        name.set("Ecovelo Team")
                        email.set("dev@ecovelo.bzh")
                    }
                }
            }
        }
    }
    
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://maven.pkg.github.com/titibike/ecovelo-sdk-android")
            credentials {
                username = System.getenv("GITHUB_ACTOR")
                password = System.getenv("GITHUB_TOKEN")
            }
        }
    }
}

