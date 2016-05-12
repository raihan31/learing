'use strict';

angular.module('ctStudentDashboard')
  .controller('StudentSubscriptionsCtrl', [
    '$scope',
    'subscriptionsData',
    function($scope, subscriptionsData) {
      $scope.subscriptions = subscriptionsData;
      console.log(subscriptionsData);
    }
  ]);
