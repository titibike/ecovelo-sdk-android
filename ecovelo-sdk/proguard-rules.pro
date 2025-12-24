# Ecovelo SDK ProGuard Rules

# Keep public API
-keep class bzh.ecovelo.sdk.EcoveloSDK { *; }
-keep class bzh.ecovelo.sdk.config.** { *; }
-keep class bzh.ecovelo.sdk.auth.** { *; }
-keep class bzh.ecovelo.sdk.rental.** { *; }
-keep class bzh.ecovelo.sdk.reservation.** { *; }
-keep interface bzh.ecovelo.sdk.** { *; }

# Keep Kotlin serialization
-keepattributes *Annotation*, InnerClasses
-dontnote kotlinx.serialization.AnnotationsKt
-keepclassmembers @kotlinx.serialization.Serializable class ** {
    *** Companion;
    <fields>;
}

# Keep JavaScript interfaces for WebView bridge
-keepclassmembers class bzh.ecovelo.sdk.bridge.** {
    @android.webkit.JavascriptInterface <methods>;
}

# Keep data classes
-keepclassmembers class * {
    @kotlinx.serialization.SerialName <fields>;
}

