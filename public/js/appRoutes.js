/**
 * Created by Ali on 2016-05-28.
 */
// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })

        .when('/playground', {
            templateUrl: 'views/playground.html',
            controller: 'playgroundController as vm'
        })
        .otherwise({redirectTo:'#/'});

    //$locationProvider.html5Mode(true);

}]);