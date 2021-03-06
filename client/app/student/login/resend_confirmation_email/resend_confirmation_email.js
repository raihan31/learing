'use strict';

angular.module('ctStudentDashboard')
  .controller('ResendStudentConfiramtionCtrl', [
    '$scope',
    '$uibModalInstance',
    'AuthStudent',
    '$rootScope',
    'title',
    function ($scope, $uibModalInstance, AuthStudent, $rootScope, title) {
      $scope.title = title;
      $scope.sendResetPasswordRequest = function (form) {
        $scope.submitted = true;

        if (form.$valid) {
          AuthStudent
            .resendConfiramtionEmail($scope.student.email)
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
