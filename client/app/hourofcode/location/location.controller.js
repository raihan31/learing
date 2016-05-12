'use strict';

angular.module('ctSignupApp')
.controller('HOCLocationCtrl', [
  '$scope',
  'countriesData',
  function ($scope, countriesData) {
    $scope.countries = countriesData;
  }
]);
