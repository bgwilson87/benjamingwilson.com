angular.module('app').service('pathService', ['$http', '$q', function($http, $q) {

  this.getPaths = function() {
    var deferred = $q.defer();

    $http.get('/assets/json/bwca-paths.json').then(function(resp) {
      deferred.resolve(resp.data.paths);
    }, function(error) {
      deferred.reject(error);
    });

    return deferred.promise;
  };
  
}]);