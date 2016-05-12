'use strict';

angular.module('ctStudentDashboard')
  .controller('ResetStudentPasswordCtrl', [
    '$scope',
    'AuthStudent',
    '$uibModalInstance',
    '$rootScope',
    'passwordToken',
    function ($scope, AuthStudent, $uibModalInstance, $rootScope, passwordToken) {
      console.log(passwordToken);
      $scope.sendResetPasswordRequest = function (form) {
        $scope.submitted = true;

        if (form.$valid) {
          AuthStudent
            .resetPassword($scope.student.password, $scope.student.passwordConfirmation, passwordToken)
            .then(function (data) {
              if (data.errors) {
                $rootScope.$broadcast('error', data.errors);
                return;
              }

              $uibModalInstance.close();
            })
            .catch(function (err) {
              if (err) {
                $rootScope.$broadcast('error', err);
                return;
              }
            });
        }
      };


    }
  ]);
