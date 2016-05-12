'use strict';

angular.module('ctSignupApp')
.directive('ctSignupCongrats', [
  'PaymentDecorator',
  '$rootScope',
  '$uibModal',
  function (paymentDecorator, $rootScope, $uibModal) {
    return {
      restrict: 'E',
      templateUrl: 'components/ct_signup_congrats/ct_signup_congrats.html',
      scope: {
        student: '=',
        learningCenter: '=',
        course: '=',
        educationModel: '='
      },
      link: function ($scope) {
        paymentDecorator($scope);

        $scope.resetText = {
          title: 'Are you sure?',
          body: 'You are going to reset the application process. <strong>All data will be erased</strong>'
        };

        $scope.resetApplication = function () {
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'components/ct_modal_prompt/ct_modal_prompt.html',
            controller: 'CtModalPromptCtrl',
            size: 'normal',
            resolve: {
              text: function () {
                return $scope.resetText;
              }
            }
          });

          modalInstance.result.then(function (agreed) {
            if (agreed) {
              $rootScope.$broadcast('application:reset');
            }
          });
        };

      }
    };
  }
]);
