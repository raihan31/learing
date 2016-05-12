'use strict';

angular.module('ctSignupApp')
.directive('ctSelectPane', [
  '$rootScope',
  function ($rootScope) {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        eventName: '='
      },
      link: function ($scope, elem, attrs) {
        $scope.preventClick = attrs.preventClick;

        if (!attrs.preventClick) {
          $(elem).click(function () {
            $rootScope.$broadcast($scope.eventName, $scope.data.id);
          });
        }
      }
    };
  }
]);
