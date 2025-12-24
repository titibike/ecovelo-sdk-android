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
        minSdk = 24

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
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    
    kotlinOptions {
        jvmTarget = "17"
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
    // CAPACITOR - Runtime complet pour les plugins
    // ============================================
    implementation("com.capacitorjs:core:6.0.0")
    
    // Plugins Capacitor utilisés par l'app Ionic Ecovelo
    implementation("com.capacitorjs:camera:6.0.0")
    implementation("com.capacitorjs:geolocation:6.0.0")
    implementation("com.capacitorjs:filesystem:6.0.0")
    implementation("com.capacitorjs:preferences:6.0.0")
    implementation("com.capacitorjs:haptics:6.0.0")
    implementation("com.capacitorjs:keyboard:6.0.0")
    implementation("com.capacitorjs:status-bar:6.0.0")
    implementation("com.capacitorjs:splash-screen:6.0.0")
    implementation("com.capacitorjs:push-notifications:6.0.0")
    implementation("com.capacitorjs:local-notifications:6.0.0")
    
    // Plugin BLE pour le déverrouillage vélo (si utilisé)
    // implementation("com.capacitorjs:bluetooth-le:...")
    
    // Plugin QR Code Scanner
    implementation("com.capacitorjs:barcode-scanner:6.0.0")
    
    // ============================================
    
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

