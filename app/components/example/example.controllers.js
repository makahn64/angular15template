/**
 * Created by mkahn on 6/20/16.
 */

app.controller('exOneController', function($scope){
    $scope.ui = { message: "Hi from controller ONE"};
    

})

app.controller( 'exTwoController', function ( $scope ) {
    $scope.ui = { message: "Hi from controller TWO" };
} )


app.controller( 'exChildController', function ( $scope, $log ) {
    $log.info("loading exChildContoller");

} )