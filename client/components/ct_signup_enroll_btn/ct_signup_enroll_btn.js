'use strict';

angular.module('ctSignupApp')
.directive('ctSignupEnrollBtn', [
  'ENDPOINT',
  'localStorageService',
  '$http',
  '$state',
  '$window',
  function (ENDPOINT, localStorageService, $http, $state ,$window) {
    return {
      restrict: 'E',
      templateUrl: 'components/ct_signup_enroll_btn/ct_signup_enroll_btn.html',
      scope: {
        state: '='
      },
      link: function ($scope, element) {
        if (!localStorageService.get('enrolled')) {
          $scope.enroll = function () {
            $scope.hideEnrollBtn = true;

            $http.post(ENDPOINT + '/api/courses/' + localStorageService.get('course_id') + '/enroll.json', {
              student_id: localStorageService.get('student_id'),
              learning_center_id: localStorageService.get('learning_center_id'),
              student_batch_id: localStorageService.get('batch_id'),
              education_model_id: localStorageService.get('education_model_id')
            }).then(function () {
              localStorageService.set('enrolled', true);
              window.location.href= 'http://www.coderstrust.com/students/login';
              /*$state.go('signup_success');*/
            });
          };
        }
      }
    };
  }
]);
