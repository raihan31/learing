'use strict';

angular.module('ctSignupApp')
.controller('CtModalPromptCtrl', [
  '$scope',
  '$modalInstance',
  'text',
  function ($scope, $modalInstance, text) {
    $scope.text = text;
    $scope.ok = function (v) {
      $modalInstance.close(v);
    };
  }
]);
