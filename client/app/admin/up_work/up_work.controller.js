'use strict';

angular.module('ctSignupApp')
  .controller('UpWorkCtrl', function ($scope, profiles) {
    $scope.profiles = profiles;
    $scope.toggleEarning = false;
    $scope.totalEarning = function(earnings) {
      var totalEarnings = 0;
      for (var i in earnings){
        totalEarnings += parseInt(earnings[i].amount, 10);
      }
      return totalEarnings;
    };
  });
