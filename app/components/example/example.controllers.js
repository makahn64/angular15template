/**
 * Created by mkahn on 6/20/16.
 */

app.controller('exOneController', function($scope){
    $scope.ui = { message: "Hi from controller ONE" };
    

    

})

app.controller( 'exTwoController', function ( $scope ) {
    $scope.ui = { message: "Hi from controller TWO" };
} )


app.controller( 'exChildController', function ( $scope, $log ) {
    $log.info("loading exChildContoller");

} )





app.controller( 'exAuthHomeController', function ( $scope, $log, example, $state ) {

    $log.info( "loading exAuthHomeController" );

    $scope.ui = { authResp: 'not authorized' };

    $scope.login = function () {

        $scope.ui.authResp = 'trying...';

        example.authenticateMock(true, 5000)
            .then( function(isLoggedIn){
                $scope.ui.authResp = 'AUTH OK';
            })
            .catch( function ( err ) {
                $scope.ui.authResp = "FAILED";
            } );

    }

    $scope.badLogin = function () {

        $scope.ui.authResp = 'failing...';

        example.authenticateMock( false, 5000 )
            .then( function ( isLoggedIn ) {
                $scope.ui.authResp = 'AUTH OK';
            } )
            .catch( function (err ){
                $scope.ui.authResp = "FAILED";
            });

    }

    $scope.logout = function () {

        $scope.ui.authResp = 'not authorized';
        example.logoutMock();
        // If we are in a child state, need to move.
        $state.go('authHome');

    }

} )

app.controller( 'exAuthorizedPageController', function ( $scope, $log ) {
    $log.info( "loading exAuthorizedPageController" );

} )