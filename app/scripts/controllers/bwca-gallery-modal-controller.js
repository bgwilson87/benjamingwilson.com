angular.module('app')
  .controller('BwcaGalleryModalController', ['$scope', '$uibModalInstance', 'gallery', function($scope, $uibModalInstance, gallery) {
  	
  	$scope.gallery = gallery;
  	$scope.slides = [];

  	var setSlides = function() {
  	  var num = 1;

  	  while(num <= $scope.gallery.numPhotos) {
  	  	$scope.slides.push('/assets/images/' + $scope.gallery.name + '/' + num + '.jpg');
  	  	num++;
  	  }
  	};

  	$scope.close = function() {
  	  $uibModalInstance.close();
  	};

  	setSlides();
  	
  }]);