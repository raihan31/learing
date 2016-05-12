'use strict';

angular.module('ctStudentDashboard')
.controller('StudentReferralCtrl', [
  '$scope',
  'invitedFriendsData',
  'studentData',
  function ($scope, invitedFriendsData, studentData) {
    $scope.invitedFriends = invitedFriendsData;

    $scope.invitedFriendsStudent = studentData;
    console.log('Referred Data', studentData);

    $scope.profit = function () {
      return studentData.length * 25;
    };
  }
]);
