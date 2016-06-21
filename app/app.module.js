var app = angular.module("ngApp", [ 'ui.router', 'ui.bootstrap', 'userdefaults.service', 'example.service']);


app.run( function($log, $rootScope){

    $log.info("App is running!");

    $rootScope.$on( '$stateChangeError',
        function ( event, toState, toParams, fromState, fromParams, error ) {
            $log.error("State change fail!");
         } )

});


// inject things you need for config here. Remember, some services may not be available during config.
// You can have multiple app.config calls. See the app.routes.js file of this in practice.
app.config( function ( ) {

    console.info( "App is configging!" );

} );