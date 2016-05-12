'use strict';

angular.module('ctSignupApp')
.directive('ctFloatingNavParent', [function () {
    return function ($scope, element) {
      $(element).css({
        display: 'block',
        position: 'relative',
        height: $(element).parent().height()
      });
    };
}])
.directive('ctFloatingNav', [
  '$window',
  '$timeout',
  function ($window, $timeout) {
    return {
      scope: {
        navItems: '=navItemsData'
      },
      templateUrl: 'components/ct_floating_nav/ct_floating_nav.html',
      link: function ($scope, element) {
        var timer;
        $($window).bind('scroll', function () {
          clearTimeout(timer);
          timer = setTimeout(function () {
            if ($window.scrollY >  $(element).parent().offset().top) {
              $(element).animate({
                top: $window.scrollY - $(element).parent().offset().top + 89
              });
            } else {
              $(element).animate({
                top: 0
              });
            }
          }, 100);
        });

        $(element).css({
          display: 'block',
          position: 'relative',
          width: $(element).parent().width()
        });
        function markActive(waypointName) {
          angular.forEach($scope.navItems, function (item) {
            if (item.waypointName === waypointName) {
              item.active = true;
            } else {
              item.active = false;
            }
          });
          $timeout(function () {
            $scope.$digest();
          }, 200);
        }
        $scope.goToWaypoint = function (id) {
          $('html, body').animate({
            scrollTop: $('#' + id).offset().top - 89
          }, function () {
            markActive(id);
          });
        };

        $scope.$on('waypoint:achived', function (obj, otherItem) {
          markActive(otherItem.waypointName);
        });
      }
    };
  }
]);
