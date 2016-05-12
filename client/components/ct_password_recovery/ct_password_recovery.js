'use strict';

angular.module('ctSignupApp')
.directive('ctPasswordRecovery', [
  '$modal',
  function ($modal) {
    return {
      restrict: 'E',
      link: function ($scope) {
        $scope.$on('password:recovery', function () {
          $scope.modal = $modal.open({
            animation: true,
            templateUrl: 'components/ct_password_recovery/ct_password_recovery.html',
            controller: 'CtPasswordRecoveryCtrl',
            size: 'normal'
          });
        });
      }
    };
  }
]);
