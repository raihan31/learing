'use strict';

angular.module('ctSignupApp')
.directive('ctSignupNav', [
  'SignupSTM',
  '$timeout',
  'ForbideScroll',
  function (SignupSTM, $timeout) {
    return {
      restrict: 'E',
      templateUrl: 'components/signup.navigation/signupNavigation.html',
      scope: {
        state: '='
      },
      link: function ($scope, elem) {
        $scope.states = SignupSTM.states;
        $scope.currentState = SignupSTM.currentState;

        $scope.isCurrentState = function (state) {
          return $scope.state === state;
        };

        $scope.isDisabled = function (index) {
          return SignupSTM.currentStateIndex < index;
        };

        function scrollToState(state, mutate) {
          $('html, body').animate({
            scrollTop: $('#' + state).offset().top + 'px'
          }, 500, function () {
            if (mutate) {
              $scope.setCurrentState(state);
              $scope.$digest();
            }
          });
        }

        $timeout(function () {
          $('.dot', elem).click(function () {
            var dataId = $(this).data('id'),
                currentStateIndex = SignupSTM.currentStateIndex,
                choosenStateIndex = SignupSTM.states.indexOf(dataId);

            if ((choosenStateIndex <= currentStateIndex) || ((currentStateIndex === 0) && (choosenStateIndex === 1))) {
              scrollToState(dataId);
            }
          });
        }, 200);
      }
    };
  }
]);
