'use strict';

angular.module('ctStudentDashboard')
  .controller('StudentSubscriptionCtrl', [
    '$scope',
    'subscriptionData',
    function($scope, subscriptionData) {
      $scope.subscription = subscriptionData.subscription;
      $scope.payments = subscriptionData.payments;
    }
  ]);
