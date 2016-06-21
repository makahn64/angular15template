/**
 * Created by mkahn on 1/24/15.
 */

//This is the stock angular module pattern
(function ( window, angular, undefined ) {

    'use strict';

    angular.module( 'example.service', [] )
        .factory( 'example', [
            '$log', '$q', '$timeout',
            function ( $log, $q, $timeout ) {

                var service = {};
                
                service.version = 1.0;
                
                var _authenticatePromise;

                service.authenticateMock = function(shouldAuthenticate, delay){
                
                    // If we have already run an auth pass, just return the promise. It will
                    // instantly resolve/reject.
                    if (_authenticatePromise)
                        return _authenticatePromise;

                    // defaults
                    var authDelay = parseInt(delay) || 2000;
                    
                    // Simulate the delay of an auth chain    
                    _authenticatePromise = $q( function(resolve, reject ){
                    
                        $timeout( function(){
                        
                            shouldAuthenticate ? resolve(true) : reject( new Error("Mock auth failed"));
                            
                        }, authDelay);
                        
                        
                    });
                    
                    return _authenticatePromise;
                
                }
                
                // In real life you may need to do some asynch work here, but for this example, we will just eliminate
                // the auth promise so a new auth flow can run.
                service.logoutMock = function(){
                    _authenticatePromise = undefined;
                }

                return service;

            } ] )

})( window, window.angular );