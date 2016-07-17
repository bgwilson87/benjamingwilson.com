angular.module('app')
  .controller('BwcaGalleryModalController', ['$scope', '$uibModalInstance', 'gallery', function($scope, $uibModalInstance, gallery) {
  	
  	$scope.gallery = gallery;
  	$scope.slides = [];

  	var setSlides = function() {
      for(i = 1; i <= $scope.gallery.numPhotos; i++) {
        $scope.slides.push('/assets/images/' + $scope.gallery.name + '/' + i + '.jpg');
      }
  	};

  	$scope.close = function() {
  	  $uibModalInstance.close();
  	};

  	setSlides();
  	
  }]);