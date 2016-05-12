'use strict';

angular.module('ctSignupApp')
.directive('ctSignupIntro', [
  'SignupSTM',
  '$timeout',
  'localStorageService',
  '$rootScope',
  '$modal',
  function (SignupSTM, $timeout, localStorageService, $rootScope, $modal) {
    return {
      restrict: 'E',
      templateUrl: 'components/signup.intro/signupIntro.html',
      scope: {

      },
      link: function ($scope, elem) {
        $scope.enrolled = localStorageService.get('enrolled');
        var enrolled = localStorageService.get('enrolled');
        $scope.data = {
          title: enrolled ? 'Congratulations' : 'Your career starts now',
          description: enrolled ? 'To complete your enrollment follow the instructions' : 'Complete <span class="circled">5</span> easy steps to enrol with CodersTrust',
          url: '/assets/images/hero-bg.jpg',
          className: 'section-step'
        };

        $scope.currentStateIndex = SignupSTM.currentStateIndex;

        $scope.showScroll = function () {
          return $scope.currentStateIndex === 0;
        };

        $scope.showInstructions = function () {
          $rootScope.$broadcast('student:enrolled');
        };

        $timeout(function () {
          $('.scroll, .click-me', elem).click(function () {
            if (!$scope.currentStateIndex) {
              SignupSTM.next();
            }
          });
        }, 200);

        $scope.$on('signup_state:updated', function (obj, data) {
          $scope.currentStateIndex = data.currentStateIndex;
          $scope.$digest();
        });

        $scope.resetText = {
          title: 'Are you sure?',
          body: 'You are going to reset the application process. <strong>All data will be erased</strong>'
        };

        $scope.resetApplication = function () {
          var modalInstance = $modal.open({
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
