'use strict';

angular.module('app', [
  'ngRoute',
  'ui.bootstrap',
  'uiGmapgoogle-maps'
]);

angular.module('app').config(['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider', function($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {

  $routeProvider
    .when('/bwca', {
      templateUrl: 'templates/bwca/index.html',
      controller: 'BwcaController'
    });

  $locationProvider.hashPrefix('!');

  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyCHNesumVjuC3iFWxwWkWS1v3gwu3mZrYE'
  });
}]);