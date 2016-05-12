'use strict';

angular.module('ctSignupApp')
.directive('ctSignupNextStepBtn', [
  'SignupSTM',
  '$window',
  'localStorageService',
  function (SignupSTM, $window, localStorageService) {
    return {
      restrict: 'E',
      templateUrl: 'components/signup.nextStep/signupNextStep.html',
      scope: {
        state: '='
      },
      link: function ($scope, element) {
        $('.btn', element).click(function () {
          if ($scope.state === SignupSTM.currentState) {
            SignupSTM.next();

          } else {
            $('html, body').animate({
              scrollTop: $('#' + SignupSTM.getNextState($scope.state)).offset().top + 'px'
            }, 500);
          }
          // $(element).hide();
        });
      }
    };
  }
]);
