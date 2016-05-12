'use strict';

angular.module('ctStudentDashboard')
  .controller('StudentPayCtrl', [
    '$scope',
    'subscriptionData',
    function($scope, subscriptionData) {
      $scope.subscription = subscriptionData.subscription;
      console.log(subscriptionData);
    }
  ]);
