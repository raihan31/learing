'use strict';

angular.module('ctStudentDashboard')
  .controller('StudentLoginCtrl', [
    '$scope',
    '$uibModal',
    'loginDecorator',
    function($scope, $uibModal, loginDecorator) {

      loginDecorator($scope);

      $scope.showResendConfrimationEmail = function() {
        $uibModal.open({
          templateUrl: 'app/student/login/reset_password_request/reset_password_request.html',
          controller: 'ResendStudentConfiramtionCtrl',
          resolve: {
            title: function() {
              return 'Resend Confrimation Email';
            }
          }
        });
      };

      $scope.showResetPasswordRequest = function() {
        $uibModal.open({
          templateUrl: 'app/student/login/reset_password_request/reset_password_request.html',
          controller: 'ResetStudentPasswordRequestCtrl',
          resolve: {
            title: function() {
              return 'Reset password request';
            }
          }
        });
      };
    }
  ]);
