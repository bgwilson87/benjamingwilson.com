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
      templateUrl: 'templates/home/index.html',
      title: 'benjaminGwilson',
      metaDescription: 'Benjamin G. Wilson is a web developer working in the NYC area'
    })
    .when('/bwca', {
      templateUrl: 'templates/bwca/index.html',
      controller: 'BwcaController',
      title: 'Geo Photo Galleries - benjaminGwilson',
      metaDescription: 'A project using AngularJS, Angular Google Maps and Angular Bootstrap.'
    })
    .when('/d3-fantasy-football', {
      templateUrl: 'templates/d3-fantasy-football/index.html',
      controller: 'D3FantasyFootballController',
      title: 'd3 + Fantasy Football - benjaminGwilson',
      metaDescription: 'A project using AngularJS and d3.'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);

  $analyticsProvider.firstPageview(true);
  $analyticsProvider.withBase(true);

  uiGmapGoogleMapApiProvider.configure({
    key: '@@googleMapsApiBrowserKey'
  });
}]);

angular.module('app').run(['$rootScope', '$route', function($rootScope, $route) {

  $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
    $rootScope.pageTitle = $route.current.title;
    $rootScope.metaDescription = $route.current.metaDescription;
  });

}]);