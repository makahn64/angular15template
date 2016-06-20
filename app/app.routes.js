/**
 * Created by mkahn on 4/6/16.
 */


app.config( function ( $stateProvider, $urlRouterProvider ) {

    console.debug( "Loading routes" );

   
    $urlRouterProvider.otherwise( '/' );

    $stateProvider
       
        // Examples pages!
        // HOME STATES AND NESTED VIEWS ========================================

        .state( 'root', {
            url:         '/',
            templateUrl: 'app/components/example/root.partial.html'
        } )
        
        .state( 'example1', {
            url:         '/example1',
            templateUrl: 'app/components/example/example1.partial.html',
            controller: 'exOneController'
        } )

        // Same partial, different controller
        .state( 'example2', {
            url:         '/example2',
            templateUrl: 'app/components/example/example2.partial.html',
            controller:  'exTwoController'
        } )

        .state( 'example2.nested', {
            url:         '/nested',
            templateUrl: 'app/components/example/example2nested.partial.html',
            controller: 'exChildController'
        } )


        .state( 'sbsroot', {
            url: '/sbsroot',
            abstract: true,
            templateUrl: 'app/components/example/sidebysideviews.partial.html'

        })

        .state( 'sbsroot.index', {
            url:   "/index",
            views: {
                "topView": {
                    template: "<h1>index.topView</h1><p>{{ ui.message }}</p>",
                    controller: function($scope){
                        $scope.ui = { message: "hells yeah!" }
                    } },
                "bottomView": { template: "index.bottomView" }
            }
        } )

        .state( 'sbsroot.route1', {
            url:   "/route1",
            views: {
                "topView": { template: "route1.topView" },
                "bottomView": { template: "route1.bottomView" }
            }
        } )

        .state( 'sbsroot.route2', {
            url:   "/route2",
            views: {
                "topView": { template: "route2.topView" },
                "bottomView": { template: "route2.bottomView" }
            }
        } )

} );


