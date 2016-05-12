'use strict';

angular.module('ctSignupApp')
.directive('ctSignupCongratsModal', [
  '$modal',
  function ($modal) {
    return {
      restrict: 'E',
      link: function ($scope) {
        $scope.$on('student:enrolled', function () {
          $scope.modal = $modal.open({
            animation: true,
            templateUrl: 'components/ct_signup_congrats_modal/ct_signup_congrats_modal.html',
            controller: 'CtSignupCongratsCtrl',
            size: 'normal'
          });
        });
      }
    };
  }
]);
