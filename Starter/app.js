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

weatherApp.service('cityService', function(){
    this.city = "Joinville"
})

weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService ) {
    $scope.city = cityService.city
    $scope.$watch('city',function(){
        cityService.city = $scope.city
    });
    $scope.submit = function(){
        $location.path("/forecast")
    }
}])
weatherApp.controller('forecastController', ['$scope', '$http', 'cityService', '$routeParams',
    function($scope, $http, cityService, $routeParams) {
    $scope.city = cityService.city;


    $http({
        method: 'GET',
        url: "https://api.openweathermap.org/data/2.5/forecast",
        params: {
            q: $scope.city,
            appid: "2c316654d385a821b2bc34c5a57b488b",
            units: "metric",
            lang: "pt_br"
        }
    }).then(function(response) {
        $scope.weatherResult = response.data;
        console.log($scope.weatherResult)
    }, function(error) {
        console.error("Error fetching weather data:", error);
    });
}])
