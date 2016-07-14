angular.module('app').directive('dropdownHoverOpen', function() {
  return {
    restrict: 'C',
    link: function(scope, element, attrs) {

      element.bind('mouseover', function() {
        element.addClass('open');
      });

      element.bind('mouseleave', function() {
        element.removeClass('open');
      });

    }
  };
});