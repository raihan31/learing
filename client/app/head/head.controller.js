'use strict';

angular.module('ctSignupApp')
.controller('HeadCtrl', [
  '$scope',
  '$rootScope',
  function ($scope, $rootScope) {
    $rootScope.$on('head:change', function (evt, data) {
      $scope.head = data;
    });
  }
]);
