'use strict'
angular.module('ctStudentDashboard')
  .controller('OnlineTestsCtrl', function($scope, onlineTestDatas, studentData) {
    console.log(onlineTestDatas);
    $scope.onlineTests = onlineTestDatas;
    $scope.studentProfile = studentData;
  });
