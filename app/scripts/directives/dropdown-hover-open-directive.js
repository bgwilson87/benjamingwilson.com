angular.module('app').directive('dropdownHoverOpen', function() {
  return {
    restrict: 'C',
    link: function(scope, element, attrs) {

      element.bind('mouseenter', function() {
        element.addClass('open');
      });

      element.bind('mouseleave', function() {
        element.removeClass('open');
      });

      element.bind('click', function() {
        element.toggleClass('open');
      });

    }
  };
});