angular.module('app')
  .controller('AppController', ['$scope', function($scope) {

    $scope.status = {
      dropdownOpen: false
    };

    $scope.toggleDropdown = function($event) {
      $scope.status.dropdownOpen = !$scope.status.dropdownOpen;
    };

  }]);