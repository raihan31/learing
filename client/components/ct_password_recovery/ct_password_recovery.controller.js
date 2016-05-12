'use strict';

angular.module('ctSignupApp')
.controller('CtPasswordRecoveryCtrl', [
  '$scope',
  '$http',
  '$modalInstance',
  'ENDPOINT',
  function ($scope, $http, $modalInstance, ENDPOINT) {
    $scope.recoverPassword = function (form) {
      $scope.submitted = true;

      if (form.$valid) {
        delete $scope.errors;
        $http.post(ENDPOINT + '/api/students/forgot_password.json', $scope.form)
        .then(function (data) {
          data = data.data;

          if (!data.error && !data.errors) {
            $modalInstance.close();
          } else {
            console.log(data);
          }
        });
      }
    };
  }
]);
