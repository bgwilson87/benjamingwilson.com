angular.module('app')
  .controller('BwcaWelcomeModalController', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
  	
  	$scope.close = function() {
  	  $uibModalInstance.close();
  	};
  	
  }]);