var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource'])

weatherApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'forecast.html',
        controller: 'forecastController'
    })
})

weatherApp.controller('homeController', ['$scope', function ($scope ) {

}])
weatherApp.controller('forecastController', ['$scope', '$log', function($scope, $log) {
    
}])
