/**
 * Capacitor Bridge minimal pour le SDK Ecovelo.
 * Ce fichier simule l'API Capacitor pour les plugins natifs.
 */
(function() {
    'use strict';
    
    // Créer l'objet Capacitor global
    window.Capacitor = window.Capacitor || {};
    window.Capacitor.Plugins = window.Capacitor.Plugins || {};
    
    // Helper pour appeler les plugins natifs via le bridge Android
    function callNative(pluginName, methodName, options) {
        return new Promise(function(resolve, reject) {
            try {
                // Générer un ID unique pour le callback
                var callbackId = 'cap_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                
                // Enregistrer les callbacks
                window.Capacitor._callbacks = window.Capacitor._callbacks || {};
                window.Capacitor._callbacks[callbackId] = {
                    resolve: resolve,
                    reject: reject
                };
                
                // Appeler le bridge natif Android
                if (window.androidBridge && window.androidBridge.postMessage) {
                    window.androidBridge.postMessage(JSON.stringify({
                        callbackId: callbackId,
                        pluginId: pluginName,
                        methodName: methodName,
                        options: options || {}
                    }));
                } else {
                    // Fallback: essayer d'appeler directement si disponible
                    reject(new Error('Bridge natif non disponible'));
                }
            } catch (e) {
                reject(e);
            }
        });
    }
    
    // Méthode pour recevoir les réponses du natif
    window.Capacitor.fromNative = function(result) {
        var callbackId = result.callbackId;
        var callback = window.Capacitor._callbacks[callbackId];
        
        if (callback) {
            if (result.success) {
                callback.resolve(result.data);
            } else {
                callback.reject(new Error(result.error || 'Unknown error'));
            }
            delete window.Capacitor._callbacks[callbackId];
        }
    };
    
    // Définir les plugins
    window.Capacitor.Plugins.EcoveloNative = {
        getConfig: function() { return callNative('EcoveloNative', 'getConfig'); },
        getAccessToken: function() { return callNative('EcoveloNative', 'getAccessToken'); },
        getIdToken: function() { return callNative('EcoveloNative', 'getIdToken'); },
        getUserInfo: function() { return callNative('EcoveloNative', 'getUserInfo'); },
        isAuthenticated: function() { return callNative('EcoveloNative', 'isAuthenticated'); },
        requestLogin: function() { return callNative('EcoveloNative', 'requestLogin'); },
        refreshToken: function() { return callNative('EcoveloNative', 'refreshToken'); },
        emitEvent: function(opts) { return callNative('EcoveloNative', 'emitEvent', opts); },
        close: function(opts) { return callNative('EcoveloNative', 'close', opts); },
        logout: function() { return callNative('EcoveloNative', 'logout'); }
    };
    
    window.Capacitor.Plugins.Camera = {
        getPhoto: function(opts) { return callNative('Camera', 'getPhoto', opts); },
        checkPermissions: function() { return callNative('Camera', 'checkPermissions'); },
        requestPermissions: function() { return callNative('Camera', 'requestPermissions'); }
    };
    
    // Helper pour vérifier si un plugin est disponible
    window.Capacitor.isPluginAvailable = function(pluginName) {
        return !!window.Capacitor.Plugins[pluginName];
    };
    
    console.log('[Capacitor] Bridge initialisé avec plugins:', Object.keys(window.Capacitor.Plugins));
})();
