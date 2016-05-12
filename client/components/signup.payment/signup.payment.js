'use strict';

angular.module('ctSignupApp')
.directive('ctSignupPayment', [
  '$http',
  '$q',
  'ENDPOINT',
  'localStorageService',
  'PaymentDecorator',
  '$rootScope',
  function ( $http, $q, ENDPOINT, localStorageService, paymentDecorator, $rootScope) {
    return {
      restrict: 'E',
      templateUrl: 'components/signup.payment/signupPayment.html',
      scope: {
        student: '='
      },
      link: function ($scope) {
        $scope.hideEnrollBtn = localStorageService.get('enrolled');

        paymentDecorator($scope);

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
              window.location.href = '/';
            });
          };
        }
      }
    };
  }
]);
