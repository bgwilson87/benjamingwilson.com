'use strict';

angular.module('app', [
  'ngRoute',
  'ui.bootstrap',
  'uiGmapgoogle-maps',
  'angulartics',
  'angulartics.google.analytics'
]);

angular.module('app').config(['$routeProvider', '$locationProvider', '$analyticsProvider', 'uiGmapGoogleMapApiProvider', function($routeProvider, $locationProvider, $analyticsProvider, uiGmapGoogleMapApiProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'templates/home/index.html'
    })
    .when('/bwca', {
      templateUrl: 'templates/bwca/index.html',
      controller: 'BwcaController'
    })
    .otherwise({
      redirectTo: '/',
      templateUrl: 'templates/home/index.html'
    });

  $locationProvider.html5Mode(true);

  $analyticsProvider.firstPageview(true);
  $analyticsProvider.withBase(true);

  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyCHNesumVjuC3iFWxwWkWS1v3gwu3mZrYE'
  });
}]);