var app = angular.module("ngApp", [ 'ui.router', 'ui.bootstrap', 'userdefaults.service']);


app.run( function($log, $rootScope){

    $log.info("App is running!");

    $rootScope.$on( '$stateChangeError',
        function ( event, toState, toParams, fromState, fromParams, error ) {
            $log.error("State change fail!");
         } )

});

app.config( function ( ) {

    console.info( "App is configging!" );

} );