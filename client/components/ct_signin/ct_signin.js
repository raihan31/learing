'use strict';

angular.module('ctSignupApp')
  .directive('ctSigninForm', [
    '$rootScope',
    'ENDPOINT',
    '$timeout',
    '$http',
    function ($rootScope, ENDPOINT, $timeout, $http) {
      return {
        restrict: 'EA',
        templateUrl: 'components/ct_signin/ct_signin.html',
        scope: {
          student: '='
        },
        link: function ($scope) {
          $scope.openPswdRecoveryModal = function () {
            $rootScope.$broadcast('password:recovery');
          };

          $scope.signIn = function (form) {
            $scope.submitted = true;
            if (form.$valid) {
              delete $scope.errors;
              $http.post(ENDPOINT + '/api/students/authenticate.json', $scope.student_form)
                .then(function (data) {
                  data = data.data;
                  if (!data.error) {
                    $timeout(function () {
                      $rootScope.$broadcast('signed-in', data);
                    }, 200);
                  } else {
                    $scope.errors = data;
                  }
                });
            }
          };
        }
      };
    }
  ]);
