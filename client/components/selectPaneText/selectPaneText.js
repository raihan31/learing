'use strict';

angular.module('ctSignupApp')
.directive('ctSelectPaneText', [
  '$rootScope',
  function ($rootScope) {
    return {
      restrict: 'A',
      templateUrl: 'components/selectPaneText/selectPaneText.html',
      scope: {
        data: '=paneData'
      },
      link: function ($scope, elem, attrs) {
        $scope.preventClick = attrs.preventClick;
        
        if (!attrs.preventClick) {
          $(elem).click(function () {
            $rootScope.$broadcast('text-pane:selected', $scope.data.id);
            // $scope.data.selected = true;
            // $scope.$digest();
          });
        }
      }
    };
  }
]);
